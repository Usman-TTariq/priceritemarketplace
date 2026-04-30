import type { LeadPayload, LeadSource } from "@/lib/lead-types";
import { MARKETING_EMAIL } from "@/lib/marketing-mailto";

export type { LeadPayload, LeadSource };

/** Inbox for all site leads (popup + contact forms). */
export const PRICERITEM_LEAD_EMAIL = MARKETING_EMAIL;

type FormSubmitSuccess = { success?: boolean; message?: string };

/**
 * Delivers lead to {@link PRICERITEM_LEAD_EMAIL} via FormSubmit (no API key).
 * First submission from a new domain may require activating the inbox (FormSubmit sends a one-time link).
 */
export async function submitMarketingLead(
  payload: LeadPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(PRICERITEM_LEAD_EMAIL)}`;
  const body: Record<string, string> = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    message: payload.message.trim(),
    _subject: `PricerItem lead — ${payload.source.replace(/_/g, " ")}`,
    _template: "table",
    _replyto: payload.email.trim(),
  };
  if (payload.service?.trim()) {
    body.service = payload.service.trim();
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const raw = await res.text();
    let data: FormSubmitSuccess = {};
    try {
      data = JSON.parse(raw) as FormSubmitSuccess;
    } catch {
      /* FormSubmit sometimes returns non-JSON on error */
    }

    if (!res.ok) {
      return { ok: false, error: data.message || raw.slice(0, 180) || `Request failed (${res.status})` };
    }

    if (data.success === false) {
      return { ok: false, error: data.message || "Submission was not accepted." };
    }

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error" };
  }
}
