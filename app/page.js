import ThemeToggle from "./theme-toggle";

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

function Cta() {
  return (
    <a
      href={BOOKING_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      Book a free 30-min call
    </a>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="wm">
            <span className="wm-meet">meet</span>
            <span className="wm-sam">sam</span>
            <span className="wm-dot">.</span>
          </span>
        </a>
        <ThemeToggle />
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <p className="eyebrow">Meet Sam</p>
          <h1 className="h1">
            I find what&apos;s broken in your business and fix it.
          </h1>
          <p className="lead">
            I&apos;m Sam. I embed in your team as a fractional operator —
            diagnosing problems, defining strategy, and shipping the fix. I
            bring product thinking, business instincts, AI, and builder
            execution together in one person.
          </p>
          <p className="hero-proof">
            5+ years across marketplaces, SaaS, and AI products · MENA and
            Europe · Based in Cairo, open to async worldwide
          </p>
          <div>
            <Cta />
            <p className="note">
              No pitch. No fluff. Just an honest conversation about your
              business.
            </p>
          </div>
        </section>

        {/* Who I work with */}
        <section className="section">
          <p className="eyebrow">Who I work with</p>
          <ul className="bullets">
            <li>
              Founders who know something isn&apos;t working but can&apos;t
              pinpoint what
            </li>
            <li>
              Scaling teams where growth has stalled and no one agrees why
            </li>
            <li>
              Operators who need someone to own a function end-to-end, not just
              advise on it
            </li>
          </ul>
        </section>

        {/* Work with Sam */}
        <section className="section">
          <p className="eyebrow">Work with Sam</p>
          <div className="cards">
            {/* Option 1 */}
            <div className="card">
              <p className="card-label">Option 1</p>
              <h3 className="card-name">Product Sprint</h3>
              <p className="card-price">2-week engagement</p>
              <ul>
                <li>Diagnose the real problem — not the surface symptoms</li>
                <li>Define the strategy and what to build</li>
                <li>
                  Deliver roadmap, MVP spec, and 90-day execution plan
                </li>
                <li>
                  Built and delivered inside <Orchpad />
                </li>
              </ul>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Start a Sprint →
              </a>
            </div>

            {/* Option 2 */}
            <div className="card">
              <p className="card-label">Option 2</p>
              <h3 className="card-name">Fractional Operator</h3>
              <p className="card-price">Monthly retainer · async-first</p>
              <ul>
                <li>Embedded in your team 10hrs/week</li>
                <li>Own a product vertical or business function end-to-end</li>
                <li>Diagnose, prioritize, execute, and close the loop</li>
                <li>
                  Delivered inside <Orchpad />
                </li>
              </ul>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Embed with me →
              </a>
            </div>

            {/* Option 3 */}
            <div className="card">
              <p className="card-label">Option 3</p>
              <h3 className="card-name">Let&apos;s Just Talk</h3>
              <p className="card-price">One call · no commitment</p>
              <p className="card-sub">
                Stuck on strategy? Growth not moving? Need a second brain on a
                decision? Book a call and let&apos;s figure out what&apos;s
                actually going on.
              </p>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Book a free call →
              </a>
            </div>

            {/* Option 4 */}
            <div className="card">
              <p className="card-label">Option 4</p>
              <h3 className="card-name">Mentorship</h3>
              <p className="card-price">Ongoing · flexible</p>
              <p className="card-sub">
                Junior PM breaking into AI products? Founder figuring out how to
                build with agents? Just curious about where this is all going?
                Book a session. No agenda required.
              </p>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Book a session →
              </a>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="section">
          <p className="eyebrow">Proof</p>
          <ul className="proof">
            <li>
              Diagnosed a broken activation funnel and rebuilt the onboarding
              system — improving customer activation by 15% at an enterprise
              SaaS platform serving MENA
            </li>
            <li>
              Built an AI cancellation risk model that cut order cancellations
              25% in one quarter
            </li>
            <li>
              Took Orchpad from zero to live product in under 4 weeks using AI
              agent workflows
            </li>
          </ul>
        </section>

        {/* How it works */}
        <section className="section">
          <p className="eyebrow">How it works</p>
          <ol className="steps">
            <li>
              <span className="num">01</span>
              <span>Book a free 30-min call</span>
            </li>
            <li>
              <span className="num">02</span>
              <span>
                I diagnose your problem honestly — if I can&apos;t help, I&apos;ll
                tell you
              </span>
            </li>
            <li>
              <span className="num">03</span>
              <span>We agree on scope and price</span>
            </li>
            <li>
              <span className="num">04</span>
              <span>I build, you ship</span>
            </li>
          </ol>
        </section>

        {/* Final CTA */}
        <section className="section">
          <h2 className="section-title">Let&apos;s figure out what&apos;s broken.</h2>
          <div style={{ marginTop: "24px" }}>
            <Cta />
            <p className="note">
              No pitch. No fluff. Just an honest conversation about your
              business.
            </p>
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
        <span>Fractional AI PM &amp; product builder</span>
      </footer>
    </>
  );
}
