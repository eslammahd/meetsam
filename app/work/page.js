import Nav from "../nav";
import CaseStudies from "./case-studies";

const BOOKING_HREF = "https://calendly.com/eslam-orchpad/30min";
const LINKEDIN_HREF = "https://www.linkedin.com/in/eslamelmahdy/";

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}

export const metadata = {
  title: "Work — meetsam.me",
  description:
    "6 years diagnosing and fixing growth, activation, and retention problems at B2B SaaS and marketplace companies across MENA.",
};


export default function Work() {
  return (
    <>
      <Nav />

      <main>
        {/* Section 1 — Positioning */}
        <section className="section work-intro">
          <p className="work-positioning">
            6 years diagnosing and fixing growth, activation, and retention
            problems at B2B SaaS and marketplace companies across MENA —
            increasingly using AI as the actual mechanism.
          </p>
        </section>

        {/* Section 2 — Case Studies */}
        <section className="section">
          <p className="eyebrow">Case Studies</p>
          <CaseStudies />
        </section>

        {/* Section 3 — Built & Shipped */}
        <section className="section">
          <p className="eyebrow">Built &amp; Shipped</p>
          <p className="work-shipped-sub">
            Live products built under Orvo AI — shipped using AI-accelerated
            workflows.
          </p>
          <div className="shipped-grid">
            {/* Orchpad */}
            <a
              href="https://orchpad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "#0F1117" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#6366f1" }}>
                    Build
                  </p>
                  <p
                    className="shipped-name"
                    style={{ color: "#E8E9F2" }}
                  >
                    Orchpad
                  </p>
                </div>
                <span className="shipped-badge">Invite only</span>
              </div>
              <div className="shipped-bottom">
                <div className="shipped-dots-row">
                  <span
                    className="shipped-dot"
                    style={{ background: "#6366f1" }}
                  />
                  <span
                    className="shipped-dot"
                    style={{ background: "#818cf8" }}
                  />
                  <span
                    className="shipped-dot"
                    style={{ background: "#4f46e5" }}
                  />
                  <span
                    className="shipped-dots-label"
                    style={{ color: "rgba(99,102,241,0.5)" }}
                  >
                    Build · Studio · Signal
                  </span>
                </div>
                <p
                  className="shipped-tagline"
                  style={{ color: "rgba(232,233,242,0.7)" }}
                >
                  AI-native product workspace
                </p>
                <p
                  className="shipped-url"
                  style={{ color: "rgba(232,233,242,0.4)" }}
                >
                  orchpad.com
                </p>
              </div>
            </a>

            {/* skim. */}
            <a
              href="https://skim.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "#F7F6F1" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#8FBA24" }}>
                    Learn
                  </p>
                  <p
                    className="shipped-name"
                    style={{ color: "#1A1A1A" }}
                  >
                    skim.
                  </p>
                </div>
              </div>
              <div className="shipped-bottom">
                <p
                  className="shipped-tagline"
                  style={{ color: "rgba(26,26,26,0.7)" }}
                >
                  Read less, know more.
                </p>
                <p
                  className="shipped-url"
                  style={{ color: "rgba(26,26,26,0.4)" }}
                >
                  skim.getorvo.co
                </p>
              </div>
            </a>

            {/* Mentor */}
            <a
              href="https://mentor.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "#0D9488" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#a7f3d0" }}>
                    Career
                  </p>
                  <p
                    className="shipped-name"
                    style={{ color: "#fff", fontSize: "26px" }}
                  >
                    Mentor
                  </p>
                </div>
              </div>
              <div className="shipped-bottom">
                <p
                  className="shipped-hook"
                  style={{ color: "#fff" }}
                >
                  You&apos;re worth more than you think.
                </p>
                <p
                  className="shipped-tagline"
                  style={{ color: "rgba(204,251,241,0.85)" }}
                >
                  Turn what you know into contracts
                </p>
                <p
                  className="shipped-url"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  mentor.getorvo.co
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Section 4 — Domain Snapshot */}
        <section className="section">
          <p className="eyebrow">Depth</p>
          <div className="work-depth">
            <p>
              Two-sided marketplaces — supply-demand dynamics, fulfillment,
              liquidity, and loyalty systems across B2C and B2B models in MENA
              and KSA.
            </p>
            <p>
              B2B SaaS — activation funnels, retention loops, pricing strategy,
              and AI-powered features at enterprise scale.
            </p>
            <p>
              AI products — LLM feature scoping and validation, predictive risk
              models, human-in-the-loop systems, and multi-agent build
              workflows.
            </p>
          </div>
        </section>

        {/* Section 5 — CTA */}
        <section className="section">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <div className="work-cta-links">
            <a
              href={BOOKING_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book a call →
            </a>
            <a
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="work-text-link"
            >
              LinkedIn →
            </a>
            <a href="mailto:eslam@orchpad.com" className="work-text-link">
              eslam@orchpad.com
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <span>Meet Sam</span>
          <a
            href="https://www.orchpad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Orchpad
          </a>
          <a
            href="https://landing.orchpad.getorvo.co/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Blog
          </a>
          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>
        </div>
        <span>Fractional Operator &amp; product builder</span>
      </footer>
    </>
  );
}
