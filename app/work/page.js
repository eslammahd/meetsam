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
        {/* Section 1 — Case Studies */}
        <section className="section">
          <p className="work-eyebrow">Case Studies</p>
          <CaseStudies />
        </section>

        {/* Section 2 — Built & Shipped */}
        <section className="section">
          <p className="work-eyebrow">Built &amp; Shipped</p>
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
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#6366f1", background: "rgba(99,102,241,0.125)" }}>
                    Build
                  </p>
                  <p className="shipped-name">
                    Orchpad
                  </p>
                </div>
                <span className="shipped-status" style={{ background: "#F3F0FF", color: "#5B3DC7", border: "0.5px solid #5B3DC7" }}>Invite only</span>
              </div>
              <div className="shipped-bottom">
                <div className="shipped-dots-row">
                  <span className="shipped-dot" style={{ background: "#6366f1" }} />
                  <span className="shipped-dot" style={{ background: "#818cf8" }} />
                  <span className="shipped-dot" style={{ background: "#4f46e5" }} />
                  <span className="shipped-dots-label">
                    Build · Studio · Signal
                  </span>
                </div>
                <p className="shipped-tagline">
                  AI-native product workspace
                </p>
                <p className="shipped-url">
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
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#3B6D11", background: "#EAF3DE" }}>
                    Learn
                  </p>
                  <p className="shipped-name">
                    skim.
                  </p>
                </div>
                <span className="shipped-status">Live</span>
              </div>
              <div className="shipped-bottom">
                <p className="shipped-tagline">
                  Read less, know more.
                </p>
                <p className="shipped-url">
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
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#0F6E56", background: "#E1F5EE" }}>
                    Career
                  </p>
                  <p className="shipped-name">
                    Mentor
                  </p>
                </div>
                <span className="shipped-status">Live</span>
              </div>
              <div className="shipped-bottom">
                <p className="shipped-hook">
                  You&apos;re worth more than you think.
                </p>
                <p className="shipped-tagline">
                  Turn what you know into contracts
                </p>
                <p className="shipped-url">
                  mentor.getorvo.co
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Section 3 — Depth */}
        <section className="section">
          <p className="work-eyebrow">Depth</p>
          <div className="work-depth-rows">
            <div className="work-depth-row">
              <span className="work-depth-num">01</span>
              <span className="work-depth-label">Two-sided marketplaces</span>
              <p className="work-depth-desc">Supply-demand dynamics, fulfillment, liquidity, and loyalty systems — B2C and B2B across MENA and KSA.</p>
            </div>
            <div className="work-depth-row">
              <span className="work-depth-num">02</span>
              <span className="work-depth-label">B2B SaaS</span>
              <p className="work-depth-desc">Activation funnels, retention loops, pricing strategy, and AI-powered features at enterprise scale.</p>
            </div>
            <div className="work-depth-row">
              <span className="work-depth-num">03</span>
              <span className="work-depth-label">AI products</span>
              <p className="work-depth-desc">LLM feature scoping, predictive risk models, human-in-the-loop systems, and multi-agent build workflows.</p>
            </div>
          </div>
        </section>

        {/* Section 4 — CTA */}
        <section className="section">
          <p className="work-eyebrow">Get in touch</p>
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
              href="mailto:eslam@getorvo.co?subject=CV%20Request&body=Hi%20Sam%2C%0A%0AI%27d%20love%20to%20receive%20your%20CV.%20Here%27s%20a%20bit%20about%20the%20opportunity%3A%0A%0A"
              className="btn-outline"
            >
              Request CV →
            </a>
          </div>
          <p className="work-cta-sub">
            Or{" "}
            <a
              href={BOOKING_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="work-cta-inline-link"
            >
              book a 15-min intro call
            </a>
            {" "}to get it directly →
          </p>
          <div className="work-cta-links" style={{ marginTop: "20px" }}>
            <a
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="work-text-link"
            >
              LinkedIn →
            </a>
            <a href="mailto:eslam@getorvo.co" className="work-text-link">
              eslam@getorvo.co
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <span>Meet Sam</span>
          <a href="https://www.getorvo.co" target="_blank" rel="noopener noreferrer" className="link">Orvo AI Ltd</a>
          <a href="https://landing.orchpad.getorvo.co/blog" target="_blank" rel="noopener noreferrer" className="link">Blog</a>
          <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        </div>
        <p className="footer-legal">Orvo AI Ltd · Registered in England &amp; Wales · No. 17227105 · London, UK</p>
      </footer>
    </>
  );
}
