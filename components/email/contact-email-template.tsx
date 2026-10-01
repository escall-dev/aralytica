import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
} from "@react-email/components";

export interface ContactEmailProps {
  name: string;
  organization: string;
  email: string;
  practiceArea: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export function ContactEmailTemplate({
  name,
  organization,
  email,
  practiceArea,
  subject,
  message,
  submittedAt,
}: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        New ARALytica Inquiry: {subject} ({name})
      </Preview>
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerSectionStyle}>
            <Heading as="h1" style={brandTitleStyle}>
              ARALytica
            </Heading>
            <Text style={brandTaglineStyle}>Evidence. Insight. Impact.</Text>
            <Text style={badgeStyle}>Formal Inquiry Notification</Text>
          </Section>

          <Hr style={dividerStyle} />

          {/* Core Metadata */}
          <Section style={sectionStyle}>
            <Text style={timestampStyle}>
              Received on: <strong>{submittedAt}</strong>
            </Text>

            <table style={tableStyle} cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td style={labelCellStyle}>Name</td>
                  <td style={valueCellStyle}>
                    <strong>{name}</strong>
                  </td>
                </tr>
                <tr>
                  <td style={labelCellStyle}>Organization</td>
                  <td style={valueCellStyle}>{organization || "—"}</td>
                </tr>
                <tr>
                  <td style={labelCellStyle}>Email</td>
                  <td style={valueCellStyle}>
                    <Link href={`mailto:${email}`} style={linkStyle}>
                      {email}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={labelCellStyle}>Practice Area</td>
                  <td style={valueCellStyle}>
                    <span style={practiceAreaBadgeStyle}>{practiceArea}</span>
                  </td>
                </tr>
                <tr>
                  <td style={labelCellStyle}>Subject</td>
                  <td style={valueCellStyle}>
                    <strong>{subject}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Hr style={dividerStyle} />

          {/* Detailed Message */}
          <Section style={sectionStyle}>
            <Text style={sectionHeadingStyle}>Inquiry Details</Text>
            <div style={messageBoxStyle}>
              <Text style={messageTextStyle}>{message}</Text>
            </div>
          </Section>

          {/* Footer note */}
          <Section style={footerSectionStyle}>
            <Text style={footerTextStyle}>
              You can reply directly to this notification to email the sender (
              <Link href={`mailto:${email}`} style={footerLinkStyle}>
                {email}
              </Link>
              ).
            </Text>
            <Text style={copyrightStyle}>
              ARALytica • Evidence. Insight. Impact.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function renderContactEmailText({
  name,
  organization,
  email,
  practiceArea,
  subject,
  message,
  submittedAt,
}: ContactEmailProps): string {
  return [
    "ARALytica — Formal Inquiry Notification",
    "Evidence. Insight. Impact.",
    "==========================================",
    "",
    `Received: ${submittedAt}`,
    `Name: ${name}`,
    `Organization: ${organization || "—"}`,
    `Email: ${email}`,
    `Practice Area: ${practiceArea}`,
    `Subject: ${subject}`,
    "",
    "------------------------------------------",
    "Inquiry Details:",
    "------------------------------------------",
    message,
    "",
    "==========================================",
    `Reply to this message directly or email ${email}`,
    "ARALytica • https://aralytica.com",
  ].join("\n");
}

/* Inline Styles for Email Client Compatibility */
const mainStyle: React.CSSProperties = {
  backgroundColor: "#f4f4f5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: "36px 12px",
  margin: "0",
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  maxWidth: "580px",
  margin: "0 auto",
  padding: "32px",
};

const headerSectionStyle: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: "8px",
};

const brandTitleStyle: React.CSSProperties = {
  color: "#191919",
  fontSize: "24px",
  fontWeight: "700",
  letterSpacing: "-0.02em",
  margin: "0 0 4px 0",
};

const brandTaglineStyle: React.CSSProperties = {
  color: "#650dd4",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  margin: "0 0 12px 0",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#f5edff",
  color: "#650dd4",
  fontSize: "11px",
  fontWeight: "600",
  borderRadius: "9999px",
  padding: "3px 10px",
  margin: "0",
};

const dividerStyle: React.CSSProperties = {
  borderColor: "#e5e7eb",
  borderWidth: "1px",
  borderStyle: "solid",
  margin: "20px 0",
};

const sectionStyle: React.CSSProperties = {
  margin: "0 0 16px 0",
};

const timestampStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#71717a",
  margin: "0 0 16px 0",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
};

const labelCellStyle: React.CSSProperties = {
  padding: "8px 12px 8px 0",
  fontSize: "13px",
  color: "#71717a",
  fontWeight: "500",
  width: "120px",
  verticalAlign: "top",
};

const valueCellStyle: React.CSSProperties = {
  padding: "8px 0",
  fontSize: "14px",
  color: "#191919",
  verticalAlign: "top",
};

const practiceAreaBadgeStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#f3f4f6",
  color: "#374151",
  borderRadius: "6px",
  padding: "2px 8px",
  fontSize: "12px",
  fontWeight: "500",
};

const linkStyle: React.CSSProperties = {
  color: "#650dd4",
  textDecoration: "underline",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#374151",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  margin: "0 0 8px 0",
};

const messageBoxStyle: React.CSSProperties = {
  backgroundColor: "#fafafa",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px",
};

const messageTextStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#191919",
  whiteSpace: "pre-wrap",
  margin: "0",
};

const footerSectionStyle: React.CSSProperties = {
  borderTop: "1px solid #f4f4f5",
  paddingTop: "16px",
  marginTop: "24px",
  textAlign: "center",
};

const footerTextStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#71717a",
  lineHeight: "1.5",
  margin: "0 0 6px 0",
};

const footerLinkStyle: React.CSSProperties = {
  color: "#650dd4",
  textDecoration: "none",
  fontWeight: "500",
};

const copyrightStyle: React.CSSProperties = {
  fontSize: "11px",
  color: "#a1a1aa",
  margin: "0",
};
