import Nav from "./nav";
import SelectedWork from "./selected-work";
import WhoIWorkWith from "./sections/who-i-work-with";
import ServiceOptions from "./sections/service-options";
import HowIThink from "./sections/how-i-think";
import { SHOW_SERVICES_ON_HOME, SHOW_HOW_I_THINK_ON_HOME } from "./site-config";

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

/**
 * Trial-to-paid, churn and cancellations are deliberately absent — those
 * three already carry their own card in Selected Work, so repeating them
 * here would double-count the same wins.
 */
const results = [
  { num: "−60%", label: "data costs" },
  { num: "+40%", label: "engagement" },
  { num: "+70%", label: "SLA" },
  { num: "+35%", label: "profit" },
  { num: "+40%", label: "BNPL activation" },
];

const writing = [
  "Build teardowns",
  "PM × AI",
  "The diagnosis pattern",
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* 1 — Hero: identity, not offer */}
        <section className="hero hero-single">
          <p className="eyebrow">Sam</p>
          <h1 className="h1">I build AI-native products end to end.</h1>
          <p className="lead">
            Senior product manager. Six years fixing growth, activation and
            retention problems at B2B SaaS and marketplace companies across
            MENA — now architecting multi-agent workflows that ship production
            software, spec to deployed product.
          </p>
          <p className="hero-proof">Cairo · Working across MENA, EMEA and GCC</p>
          <div className="hero-cta-block">
            <a href="#selected-work" className="btn">See the work ↓</a>
          </div>
        </section>

        {/* 2 — Selected work: the evidence */}
        <section className="section" id="selected-work">
          <p className="eyebrow">Selected work</p>
          <SelectedWork />
        </section>

        {/* 3 — Results */}
        <section className="section">
          <p className="eyebrow">Results</p>
          <div className="results-grid">
            {results.map((r) => (
              <div key={r.label} className="result-card">
                <p className="result-num">{r.num}</p>
                <p className="result-label">{r.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4 — My Playground */}
        <section className="section">
          <p className="eyebrow">My Playground</p>
          <p className="hp-shipped-sub">
            Products I built from scratch, alone, in my free time. No team. No budget. Just curiosity and too many late nights.
          </p>
          <div className="shipped-grid">
            {/* Orchpad — dark */}
            <a
              href="https://orchpad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "radial-gradient(ellipse at top right, #1a1f3c 0%, #07080D 60%)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#818cf8", background: "rgba(99,102,241,0.2)" }}>Build</p>
                  <p className="shipped-name" style={{ color: "#E8E9F2" }}>Orchpad</p>
                  <p className="shipped-desc" style={{ color: "#A0A3B8" }}>
                    An AI-native workspace where founders turn ideas into shipped products using agent workflows.
                  </p>
                </div>
                <span className="shipped-status" style={{ background: "#2D2A5E", color: "#B5A6F0", border: "0.5px solid #5B3DC7" }}>Invite only</span>
              </div>
              <div className="shipped-bottom">
                <div className="shipped-card-footer">
                  <p className="shipped-url" style={{ color: "rgba(255,255,255,0.5)" }}>orchpad.com</p>
                  <span className="shipped-arrow" style={{ color: "rgba(255,255,255,0.5)" }}>↗</span>
                </div>
              </div>
            </a>

            {/* Orvo Intelligence — dark/purple, same family as Orchpad */}
            <a
              href="https://intelligence.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "radial-gradient(ellipse at top right, #241a3c 0%, #0A0710 60%)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#C084FC", background: "rgba(168,85,247,0.2)" }}>Intelligence</p>
                  <p className="shipped-name" style={{ color: "#E8E9F2" }}>Orvo Intelligence</p>
                  <p className="shipped-desc" style={{ color: "#A0A3B8" }}>
                    AI brand monitoring across Arabic and English MENA sources — signal detection, sentiment, and automated reporting.
                  </p>
                </div>
                <span className="shipped-status" style={{ background: "#2D2A5E", color: "#B5A6F0", border: "0.5px solid #5B3DC7" }}>Live</span>
              </div>
              <div className="shipped-bottom">
                <div className="shipped-card-footer">
                  <p className="shipped-url" style={{ color: "rgba(255,255,255,0.5)" }}>intelligence.getorvo.co</p>
                  <span className="shipped-arrow" style={{ color: "rgba(255,255,255,0.5)" }}>↗</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* 5 — How I think (off the homepage; see app/site-config.js) */}
        {SHOW_HOW_I_THINK_ON_HOME && <HowIThink />}

        {/* 6 — Writing */}
        <section className="section" id="writing">
          <p className="eyebrow">Writing</p>
          <div className="cs-cards">
            {writing.map((topic) => (
              <div key={topic} className="cs-card writing-card">
                <div className="sw-card-body">
                  <p className="cs-company">Soon</p>
                  <h3 className="cs-title">{topic}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phase 1 — services return to the homepage from here.
            See app/site-config.js. */}
        {SHOW_SERVICES_ON_HOME && (
          <>
            <WhoIWorkWith />
            <ServiceOptions />
          </>
        )}
      </main>

      <footer>
        <div className="footer-links">
          <span>Sam</span>
          <a href="/work-with-me" className="link">Work with me</a>
          <a href="#writing" className="link">Writing</a>
          <Orchpad />
          <ExternalLink href="https://www.linkedin.com/in/eslamelmahdy/">LinkedIn</ExternalLink>
          <a href="mailto:eslamsaad@outlook.com" className="link footer-email">eslamsaad@outlook.com</a>
        </div>
        <p className="footer-legal">Eslam &ldquo;Sam&rdquo; Saad · AI-native product builder · Cairo</p>
      </footer>
    </>
  );
}
