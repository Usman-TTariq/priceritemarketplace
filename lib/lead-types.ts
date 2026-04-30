/** Where the lead was submitted from (used in FormSubmit email subject). */
export type LeadSource = "popup" | "contact_desktop" | "contact_mobile";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: LeadSource;
  /** Optional — forwarded as extra FormSubmit field if set. */
  service?: string;
};
