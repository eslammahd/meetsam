import Nav from "./nav";
import CaseStudies from "./case-studies";

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

function Tags({ tags }) {
  return (
    <div className="inline-tags">
      {tags.map((t) => (
        <span key={t} className="inline-tag">{t}</span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* 1 — Hero (two-column) */}
        <section className="hero hero-2col">
          {/* Left column */}
          <div className="hero-left">
            <p className="eyebrow">MEET SAM</p>
            <h1 className="h1">
              Your product works.<br />
              Your numbers don&apos;t.<br />
              Let&apos;s figure out why.
            </h1>
            <p className="lead">
              I&apos;m Sam. I embed in your team, diagnose the real problem —
              not the obvious one — and build the fix. 6 years across B2B SaaS
              and marketplaces in MENA.
            </p>
            <p className="hero-proof">
              Currently available for new engagements · Cairo-based · async
              worldwide
            </p>
            <div className="hero-cta-block">
              <Cta />
              <p className="note">
                No pitch. If I can&apos;t help, I&apos;ll tell you.
              </p>
            </div>
          </div>

          {/* Right column — proof stats */}
          <div className="hero-right">
            <div className="hero-stat-card">
              <p className="hero-stat-num">25%</p>
              <p className="hero-stat-label">fewer cancellations</p>
              <p className="hero-stat-sub">AI risk model · KSA marketplace</p>
            </div>
            <div className="hero-stat-card">
              <p className="hero-stat-num">40%</p>
              <p className="hero-stat-label">BNPL activation increase</p>
              <p className="hero-stat-sub">Credit scorecards · B2B Egypt</p>
            </div>
            <div className="hero-stat-card hero-stat-card--last">
              <p className="hero-stat-num">4 weeks</p>
              <p className="hero-stat-label">zero to live product</p>
              <p className="hero-stat-sub">Orchpad · AI agent workflows</p>
            </div>
            <div className="hero-stat-footer">
              <a href="#case-studies" className="hp-stat-more">See case studies ↓</a>
            </div>
          </div>
        </section>

        {/* 2 — Who I work with */}
        <section className="section">
          <p className="eyebrow">Who I work with</p>
          <div className="hp-who-grid">
            <div className="hp-who-card">
              <span className="hp-who-bg-num">01</span>
              <p className="hp-who-label">Something&apos;s off</p>
              <p className="hp-who-desc">You know the metrics aren&apos;t moving. You don&apos;t know exactly why.</p>
              <Tags tags={["Activation", "Retention"]} />
            </div>
            <div className="hp-who-card">
              <span className="hp-who-bg-num">02</span>
              <p className="hp-who-label">Growth has stalled</p>
              <p className="hp-who-desc">The team is working hard. The numbers aren&apos;t moving. Nobody agrees on why.</p>
              <Tags tags={["Growth", "Product strategy"]} />
            </div>
            <div className="hp-who-card">
              <span className="hp-who-bg-num">03</span>
              <p className="hp-who-label">You need an owner</p>
              <p className="hp-who-desc">Not another advisor. Someone embedded, accountable, end-to-end.</p>
              <Tags tags={["Fractional", "End-to-end"]} />
            </div>
          </div>
        </section>

        {/* 3 — Case Studies */}
        <section className="section" id="case-studies">
          <p className="eyebrow">Case Studies</p>
          <CaseStudies />
        </section>

        {/* 4 — My Playground */}
        <section className="section">
          <p className="eyebrow">My Playground</p>
          <p className="hp-shipped-sub">
            Three products I built from scratch, alone, in my free time. No team. No budget. Just curiosity and too many late nights.
          </p>
          <div className="shipped-grid">
            {/* Orchpad — dark */}
            <a
              href="https://orchpad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "#0F1117", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#a5b4fc", background: "rgba(99,102,241,0.2)" }}>Build</p>
                  <p className="shipped-name" style={{ color: "#f1f5f9" }}>Orchpad</p>
                  <p className="shipped-desc" style={{ color: "#9091A4" }}>
                    An AI-native workspace where founders turn ideas into shipped products using agent workflows.
                  </p>
                </div>
                <span className="shipped-status" style={{ background: "#1e1b4b", color: "#a5b4fc", border: "0.5px solid #4f46e5" }}>Invite only</span>
              </div>
              <div className="shipped-bottom">
                <div className="shipped-card-footer">
                  <p className="shipped-url" style={{ color: "#4a4b5e" }}>orchpad.com</p>
                  <span className="shipped-arrow" style={{ color: "#4a4b5e" }}>↗</span>
                </div>
              </div>
            </a>

            {/* skim. — warm cream */}
            <a
              href="https://skim.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "#EAE8E1", borderColor: "rgba(0,0,0,0.06)" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#3B6D11", background: "rgba(59,109,17,0.12)" }}>Learn</p>
                  <p className="shipped-name" style={{ color: "#1a1a1a" }}>skim.</p>
                  <p className="shipped-desc" style={{ color: "#6B6B5A" }}>
                    Drop in anything you need to learn. It builds the lesson around you.
                  </p>
                </div>
                <span className="shipped-status">Live</span>
              </div>
              <div className="shipped-bottom">
                <div className="shipped-card-footer">
                  <p className="shipped-url" style={{ color: "#9ca3af" }}>skim.getorvo.co</p>
                  <span className="shipped-arrow" style={{ color: "#9ca3af" }}>↗</span>
                </div>
              </div>
            </a>

            {/* Mentor — teal */}
            <a
              href="https://mentor.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "#0D9488", borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#ccfbf1", background: "rgba(255,255,255,0.15)" }}>Career</p>
                  <p className="shipped-name" style={{ color: "#f0fdfa" }}>Mentor</p>
                  <p className="shipped-desc" style={{ color: "#ccfbf1" }}>
                    Connects what you know to people willing to pay for it.
                  </p>
                </div>
                <span className="shipped-status" style={{ background: "rgba(255,255,255,0.15)", color: "#ccfbf1", border: "0.5px solid rgba(255,255,255,0.3)" }}>Live</span>
              </div>
              <div className="shipped-bottom">
                <div className="shipped-card-footer">
                  <p className="shipped-url" style={{ color: "#5eead4" }}>mentor.getorvo.co</p>
                  <span className="shipped-arrow" style={{ color: "#5eead4" }}>↗</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* 5 — Work with Sam */}
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
                <li>Deliver roadmap, MVP spec, and 90-day execution plan</li>
                <li>Built and delivered inside <Orchpad /></li>
              </ul>
              <Tags tags={["2 weeks", "Diagnosis", "Roadmap"]} />
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
                <li>Delivered inside <Orchpad /></li>
              </ul>
              <Tags tags={["Ongoing", "Embedded", "Multi-agent"]} />
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Embed with me →
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <span>Meet Sam</span>
          <ExternalLink href="https://www.getorvo.co">Orvo AI Ltd</ExternalLink>
          <ExternalLink href="https://landing.orchpad.getorvo.co/blog">Blog</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/eslamelmahdy/">LinkedIn</ExternalLink>
        </div>
        <p className="footer-legal">Orvo AI Ltd · Registered in England &amp; Wales · No. 17227105 · London, UK</p>
      </footer>
    </>
  );
}
