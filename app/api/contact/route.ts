import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PRACTICE_AREAS, PracticeArea } from "@/lib/types/contact";
import {
  ContactEmailTemplate,
  renderContactEmailText,
} from "@/components/email/contact-email-template";

export const dynamic = "force-dynamic";

// Lightweight in-memory sliding window rate limiter
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW =
  process.env.NODE_ENV === "production" ? 10 : 50;
const MAX_PAYLOAD_BYTES = 32 * 1024; // 32KB

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Periodic pruning of stale records to prevent memory leak
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetAt < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: "Method not allowed. Submit inquiries via HTTP POST.",
    },
    {
      status: 405,
      headers: {
        Allow: "POST",
      },
    }
  );
}

export async function POST(request: Request) {
  try {
    // 1. Rate limiting by IP
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many inquiries submitted from this network. Please wait a few minutes or email us directly at aralytica@gmail.com.",
        },
        { status: 429 }
      );
    }

    // 2. Payload size check
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        {
          success: false,
          error: "Payload too large. Please shorten your message.",
        },
        { status: 413 }
      );
    }

    // 3. Safe JSON parsing
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload. Expected JSON body.",
        },
        { status: 400 }
      );
    }

    // 4. Honeypot check (anti-spam)
    // Legitimate users will not fill hidden fields; bots often fill all fields.
    const botField =
      typeof body.botField === "string" ? body.botField.trim() : "";
    const websiteField =
      typeof body.website === "string" ? body.website.trim() : "";
    if (botField !== "" || websiteField !== "") {
      // Silently accept without sending email to drop bot traffic without giving feedback
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 5. Input Extraction & Sanitization
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const organization =
      typeof body.organization === "string" ? body.organization.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const practiceArea =
      typeof body.practiceArea === "string"
        ? (body.practiceArea.trim() as PracticeArea)
        : typeof body.serviceInterest === "string"
          ? (body.serviceInterest.trim() as PracticeArea)
          : ("" as PracticeArea);
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // 6. Strict Server-Side Field Validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide your full name (between 2 and 100 characters).",
        },
        { status: 400 }
      );
    }

    if (organization.length > 120) {
      return NextResponse.json(
        {
          success: false,
          error: "Organization name cannot exceed 120 characters.",
        },
        { status: 400 }
      );
    }

    if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid work email address.",
        },
        { status: 400 }
      );
    }

    if (!practiceArea || !PRACTICE_AREAS.includes(practiceArea)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please select a valid practice area from the available options.",
        },
        { status: 400 }
      );
    }

    if (!subject || subject.length < 3 || subject.length > 150) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a subject between 3 and 150 characters.",
        },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 3000) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide a detailed inquiry message (between 10 and 3,000 characters).",
        },
        { status: 400 }
      );
    }

    // 7. Resend Integration & Dispatch
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Credentials not configured yet in this environment
      console.warn(
        "[Contact API] RESEND_API_KEY environment variable is not set."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is currently awaiting configuration. Please contact ARALytica directly at aralytica@gmail.com.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    // Sender configuration:
    // Prefer CONTACT_FROM_EMAIL if set; in production default to verified domain sender.
    // In development or when unverified, onboarding@resend.dev is standard for Resend testing.
    const defaultSender =
      process.env.NODE_ENV === "production"
        ? "ARALytica Inquiries <noreply@aralytica.com>"
        : "ARALytica Inquiries <onboarding@resend.dev>";

    const fromAddress = process.env.CONTACT_FROM_EMAIL || defaultSender;
    const toAddress = process.env.CONTACT_TO_EMAIL || "aralytica@gmail.com";

    const submittedAt = new Date().toUTCString();

    const emailProps = {
      name,
      organization,
      email,
      practiceArea,
      subject,
      message,
      submittedAt,
    };

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: `Inquiry: ${subject} — ${name}`,
      react: ContactEmailTemplate(emailProps),
      text: renderContactEmailText(emailProps),
    });

    if (error) {
      console.error("[Contact API] Resend email send failed:", error.message);
      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't submit your inquiry right now. Please try again or contact ARALytica directly at aralytica@gmail.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.error(
      "[Contact API] Uncaught internal error:",
      err instanceof Error ? err.message : "Unknown error"
    );
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while processing your inquiry. Please try again or contact aralytica@gmail.com.",
      },
      { status: 500 }
    );
  }
}
