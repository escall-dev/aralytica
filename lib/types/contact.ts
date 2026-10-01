export const PRACTICE_AREAS = [
  "Research & Policy Analysis",
  "Evaluation Support",
  "Capacity Building & Advisory",
  "General Institutional Inquiry",
] as const;

export type PracticeArea = (typeof PRACTICE_AREAS)[number];

export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  practiceArea: PracticeArea;
  subject: string;
  message: string;
  botField?: string;
}

export interface ContactApiResponse {
  success: boolean;
  error?: string;
}
