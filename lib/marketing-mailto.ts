/** Default inbox for leads (overridable with CONTACT_EMAIL in .env on the server) */
export const MARKETING_EMAIL = "marketing@priceritemarketplace.us";

/**
 * Opens the default mail client without full-page navigation (avoids DevTools
 * "document / canceled" and SPA navigation issues from `location.href = mailto:`).
 */
export function openMarketingMailtoViaAnchor(subject: string, body: string): void {
  if (typeof document === "undefined") return;
  const maxLen = 1800;
  let safeBody = body;
  if (safeBody.length > maxLen) {
    safeBody = `${safeBody.slice(0, maxLen)}\n…(truncated)`;
  }
  const href = `mailto:${MARKETING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(safeBody)}`;
  const a = document.createElement("a");
  a.href = href;
  a.setAttribute("rel", "noopener noreferrer");
  document.body.appendChild(a);
  a.click();
  a.remove();
}
