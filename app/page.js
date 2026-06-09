import Nav from "./nav";

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

const DOMAIN_CHIPS = [
  "Two-sided marketplaces",
  "B2B SaaS",
  "AI products",
  "Fintech & BNPL",
  "MENA & KSA markets",
  "Product strategy",
  "Growth & retention",
  "Multi-agent systems",
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* 1 — Hero */}
        <section className="hero">
          <p className="eyebrow">Meet Sam</p>
          <h1 className="h1">
            I find what&apos;s broken. Then I fix it.
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

        {/* 2 — Quick Proof */}
        <section className="section hp-stat-section">
          <div className="hp-stat-grid">
            <div className="hp-stat-card">
              <p className="hp-stat-num">25%</p>
              <p className="hp-stat-label">fewer cancellations</p>
              <p className="hp-stat-sub">AI risk model · KSA marketplace</p>
            </div>
            <div className="hp-stat-card">
              <p className="hp-stat-num">40%</p>
              <p className="hp-stat-label">BNPL activation increase</p>
              <p className="hp-stat-sub">Credit scorecards · B2B Egypt</p>
            </div>
            <div className="hp-stat-card">
              <p className="hp-stat-num">4 weeks</p>
              <p className="hp-stat-label">zero to live product</p>
              <p className="hp-stat-sub">Orchpad · AI agent workflows</p>
            </div>
          </div>
        </section>

        {/* 3 — Who I work with */}
        <section className="section">
          <p className="eyebrow">Who I work with</p>
          <ul className="bullets">
            <li>Founders who know something isn&apos;t working but can&apos;t pinpoint what</li>
            <li>Scaling teams where growth has stalled and no one agrees why</li>
            <li>Operators who need someone to own a function end-to-end, not just advise on it</li>
          </ul>
        </section>

        {/* 4 — Domains */}
        <section className="section">
          <p className="eyebrow">Domains</p>
          <div className="hp-chips">
            {DOMAIN_CHIPS.map((chip) => (
              <span key={chip} className="hp-chip">{chip}</span>
            ))}
          </div>
        </section>

        {/* 5 — Built & Shipped mini */}
        <section className="section">
          <p className="eyebrow">Built &amp; Shipped</p>
          <p className="hp-shipped-sub">
            Live products built under Orvo AI.
          </p>
          <div className="hp-shipped-grid">
            {/* Orchpad — dark */}
            <a
              href="https://orchpad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-mini-card hp-mini-card--dark"
            >
              <div className="hp-mini-top">
                <span className="hp-mini-pulse" style={{ background: "#6366f1" }} />
                <span className="hp-mini-label" style={{ color: "#a5b4fc" }}>Build</span>
              </div>
              <p className="hp-mini-name" style={{ color: "#f1f5f9" }}>Orchpad</p>
              <p className="hp-mini-tagline" style={{ color: "#94a3b8" }}>AI-native product workspace</p>
              <p className="hp-mini-live" style={{ color: "#64748b" }}>Live · invite only</p>
            </a>

            {/* skim. — cream */}
            <a
              href="https://skim.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-mini-card hp-mini-card--cream"
            >
              <div className="hp-mini-top">
                <span className="hp-mini-pulse" style={{ background: "#3B6D11" }} />
                <span className="hp-mini-label" style={{ color: "#3B6D11" }}>Learn</span>
              </div>
              <p className="hp-mini-name" style={{ color: "#1a1a1a" }}>skim.</p>
              <p className="hp-mini-tagline" style={{ color: "#6b7280" }}>Read less, know more.</p>
              <p className="hp-mini-url" style={{ color: "#9ca3af" }}>skim.getorvo.co</p>
            </a>

            {/* Mentor — teal */}
            <a
              href="https://mentor.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-mini-card hp-mini-card--teal"
            >
              <div className="hp-mini-top">
                <span className="hp-mini-pulse" style={{ background: "#99f6e4" }} />
                <span className="hp-mini-label" style={{ color: "#ccfbf1" }}>Career</span>
              </div>
              <p className="hp-mini-name" style={{ color: "#f0fdfa" }}>Mentor</p>
              <p className="hp-mini-tagline" style={{ color: "#99f6e4" }}>You&apos;re worth more than you think.</p>
              <p className="hp-mini-url" style={{ color: "#5eead4" }}>mentor.getorvo.co</p>
            </a>
          </div>
          <div className="hp-shipped-more">
            <a href="/work" className="hp-more-link">
              See full work &amp; case studies →
            </a>
          </div>
        </section>

        {/* 6 — Work with Sam */}
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

        {/* 7 — Closing: steps + CTA */}
        <section className="section">
          <h2 className="section-title">Let&apos;s figure out what&apos;s broken.</h2>
          <div className="hp-steps-grid">
            <div className="hp-step">
              <p className="hp-step-num">01</p>
              <p className="hp-step-text">Book a free 30-min call</p>
            </div>
            <div className="hp-step">
              <p className="hp-step-num">02</p>
              <p className="hp-step-text">I diagnose your problem — if I can&apos;t help, I&apos;ll tell you</p>
            </div>
            <div className="hp-step">
              <p className="hp-step-num">03</p>
              <p className="hp-step-text">We agree on scope and price</p>
            </div>
            <div className="hp-step">
              <p className="hp-step-num">04</p>
              <p className="hp-step-text">I build, you ship</p>
            </div>
          </div>
          <div className="hp-closing-cta">
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
