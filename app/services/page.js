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
    "Most people diagnose. Few can fix. Fewer can build. Sam does all three.",
};

export default function Services() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="svc-hero">
          <p className="eyebrow">Services</p>
          <h1 className="svc-headline">
            Most people diagnose. Few can fix. Fewer can build.
          </h1>
          <p className="svc-sub">I do all three.</p>
        </section>

        {/* Service 01 */}
        <section className="svc-section">
          <p className="svc-num">01</p>
          <p className="svc-name">Find what&apos;s broken</p>
          <p className="svc-sharp">
            Your metrics aren&apos;t moving. I find out why — when everyone else
            is still guessing.
          </p>
          <p className="svc-body">
            I go into the data, run the interviews, map the behavior. I
            don&apos;t stop until the real problem is clear — not the surface
            symptom everyone&apos;s been debating.
          </p>
          <p className="svc-anchor">
            Behavioral analysis · User interviews · Funnel diagnosis
          </p>
        </section>

        {/* Service 02 */}
        <section className="svc-section">
          <p className="svc-num">02</p>
          <p className="svc-name">Build the strategy</p>
          <p className="svc-sharp">
            Most roadmaps are wishlists. I build plans that actually get
            executed.
          </p>
          <p className="svc-body">
            Once the problem is clear, I define what to build, in what order,
            and why. Sharp enough that your engineers know exactly what to do.
            Short enough that leadership actually reads it.
          </p>
          <p className="svc-anchor">
            Strategic roadmap · MVP scope · 90-day execution plan
          </p>
        </section>

        {/* Service 03 */}
        <section className="svc-section">
          <p className="svc-num">03</p>
          <p className="svc-name">Ship it fast</p>
          <p className="svc-sharp">
            What takes a traditional team 3 months takes me 3 weeks.
          </p>
          <p className="svc-body">
            I use AI-accelerated workflows to plan, build, test, and deploy. Not
            vibe-coding. Structured agent orchestration with real output —
            scoped, built, and shipped inside <Orchpad />.
          </p>
          <p className="svc-anchor">
            AI-accelerated build · Live MVP · Delivered inside Orchpad
          </p>
        </section>

        {/* Bottom CTA */}
        <section className="section">
          <h2 className="section-title">Not sure which one you need?</h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            Most engagements start with a diagnosis. Book a free 30-min call.
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
