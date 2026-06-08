import Nav from "../nav";

const BOOKING_HREF = "https://calendly.com/eslam-orchpad/30min";

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}

const Orchpad = () => (
  <ExternalLink href="https://www.orchpad.com">Orchpad</ExternalLink>
);

export const metadata = {
  title: "What Sam does — meetsam.me",
  description:
    "Three things Sam does better than most — diagnosing what's broken, building the strategy, and shipping the fix fast.",
};

export default function Services() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="hero">
          <p className="eyebrow">Services</p>
          <h1 className="h1">Three things I do better than most.</h1>
          <p className="lead">
            I don&apos;t offer a menu. I solve specific problems. These are the
            three where I have the deepest track record and the fastest time to
            outcome.
          </p>
        </section>

        {/* Service cards */}
        <section className="section">
          <div className="service-cards">
            {/* 01 */}
            <div className="service-card">
              <p className="service-num">01</p>
              <h2 className="service-name">Find what&apos;s broken</h2>
              <p className="service-tagline">Diagnosis before prescription.</p>
              <p className="service-desc">
                Most teams treat symptoms. I go deeper — behavioral data, user
                interviews, funnel analysis — until the real problem is clear.
                Not a hypothesis. A diagnosis you can act on.
              </p>
              <div className="service-deliverables">
                <p className="service-deliverables-label">What you get</p>
                <ul>
                  <li>Root cause report</li>
                  <li>Prioritized fix list</li>
                  <li>Clear signal on what NOT to build</li>
                </ul>
              </div>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="service-cta"
              >
                Talk to Sam →
              </a>
            </div>

            {/* 02 */}
            <div className="service-card">
              <p className="service-num">02</p>
              <h2 className="service-name">Build the strategy</h2>
              <p className="service-tagline">Clarity on what to build and why.</p>
              <p className="service-desc">
                Once the problem is clear, I turn it into a plan. What to build,
                in what order, and what success looks like. No 40-page decks. A
                sharp, executable roadmap your team can actually follow.
              </p>
              <div className="service-deliverables">
                <p className="service-deliverables-label">What you get</p>
                <ul>
                  <li>Strategic roadmap</li>
                  <li>MVP scope and PRD</li>
                  <li>90-day execution plan</li>
                </ul>
              </div>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="service-cta"
              >
                Talk to Sam →
              </a>
            </div>

            {/* 03 */}
            <div className="service-card">
              <p className="service-num">03</p>
              <h2 className="service-name">Ship it fast</h2>
              <p className="service-tagline">From spec to live product in weeks.</p>
              <p className="service-desc">
                I build using AI-accelerated workflows — orchestrating agents to
                plan, build, test, and deploy. What takes a traditional team 3
                months takes me 3 weeks. Scoped, built, and shipped.
              </p>
              <div className="service-deliverables">
                <p className="service-deliverables-label">What you get</p>
                <ul>
                  <li>Live MVP or shipped feature</li>
                  <li>Clean handoff documentation</li>
                  <li>
                    Built and delivered inside <Orchpad />
                  </li>
                </ul>
              </div>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="service-cta"
              >
                Talk to Sam →
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section">
          <h2 className="section-title">Not sure which one you need?</h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            Most engagements start with a diagnosis. Book a free 30-min call and
            we&apos;ll figure it out together.
          </p>
          <div style={{ marginTop: "28px" }}>
            <a
              href={BOOKING_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book a free call →
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <span>Meet Sam</span>
          <ExternalLink href="https://www.orchpad.com">Orchpad</ExternalLink>
          <ExternalLink href="https://landing.orchpad.getorvo.co/blog">
            Blog
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/eslamelmahdy/">
            LinkedIn
          </ExternalLink>
        </div>
        <span>Fractional Operator &amp; product builder</span>
      </footer>
    </>
  );
}
