/**
 * Removed from the homepage but kept intact — flip SHOW_HOW_I_THINK_ON_HOME
 * in app/site-config.js to render it again.
 *
 * Note: the sign-off is the deck's "name bridge" — the one place both names
 * appear, resolving the mismatch between the CV header and this site. While
 * this section is off, that bridge is not on the site anywhere.
 */
export default function HowIThink() {
  return (
    <section className="section">
      <p className="eyebrow">How I think</p>
      <h2 className="section-title think-headline">
        Most growth problems aren&apos;t marketing problems. They&apos;re
        system problems.
      </h2>
      <p className="lead">
        Pricing that was never anchored to anything. Onboarding that leaks
        in a place nobody instrumented. Ops running on manual handoffs that
        only fail quietly. The metrics are bleeding and nobody can point at
        where.
      </p>
      <p className="lead">
        That&apos;s the work. Diagnose what&apos;s actually broken, build
        the fix, and close the loop on whether it worked.
      </p>
      <p className="lead">
        My background is Industrial Design, not computer science.
        That&apos;s why I think in systems before features and user
        behavior before assumptions — and it&apos;s why most of my wins
        came from finding a structural problem where everyone else saw a
        marketing one.
      </p>
      <p className="think-signoff">— Eslam &ldquo;Sam&rdquo; Saad</p>
    </section>
  );
}
