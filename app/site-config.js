/**
 * Phase 0 → Phase 1 switch.
 *
 * Phase 0 (now): the homepage is a portfolio. Every CV links here, so the
 * first screen has to be evidence, not an offer. Services live only on
 * /work-with-me, which gets sent directly into live conversations.
 *
 * Phase 1 (after an offer is signed): flip this to true and the services
 * sections render back onto the homepage. Nothing was deleted — the
 * components in app/sections/ are shared by both pages, so this is the
 * only line that has to change.
 */
export const SHOW_SERVICES_ON_HOME = false;

export const BOOKING_HREF = "https://calendly.com/eslam-orchpad/30min";
