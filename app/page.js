import Nav from "./nav";
import SelectedWork from "./selected-work";
import WhoIWorkWith from "./sections/who-i-work-with";
import ServiceOptions from "./sections/service-options";
import { SHOW_SERVICES_ON_HOME } from "./site-config";
import JorvoOwl from "../components/JorvoOwl";
import SkimFox from "../components/SkimFox";

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}

const results = [
  { num: "30% → 50%", label: "trial-to-paid in 3 months" },
  { num: "30% → 22%", label: "churn in 90 days" },
  { num: "−60%", label: "data costs" },
  { num: "+40%", label: "engagement" },
  { num: "+70%", label: "SLA" },
  { num: "−25%", label: "cancellations" },
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
          <div className="results-strip">
            {results.map((r) => (
              <span key={r.label} className="result-item">
                <span className="result-num">{r.num}</span>{" "}
                <span className="result-label">{r.label}</span>
              </span>
            ))}
          </div>
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

            {/* skim. — warm cream */}
            <a
              href="https://skim.getorvo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "radial-gradient(ellipse at bottom left, #e8e6dc 0%, #F7F6F1 60%)", border: "0.5px solid #D4D1C4" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#3B6D11", background: "rgba(59,109,17,0.12)" }}>Learn</p>
                  <p className="shipped-name" style={{ color: "#1a1a1a" }}>skim.</p>
                  <p className="shipped-desc" style={{ color: "#6B6B5A", paddingRight: "88px" }}>
                    Drop in anything you need to learn. It builds the lesson around you.
                  </p>
                </div>
                <span className="shipped-status">Live</span>
              </div>
              <span className="skim-fox-wrap" aria-hidden="true">
                <SkimFox size={88} className="skim-fox" />
              </span>
              <div className="shipped-bottom">
                <div className="shipped-card-footer" style={{ justifyContent: "flex-start", gap: "8px" }}>
                  <p className="shipped-url" style={{ color: "#6B6B5A" }}>skim.getorvo.co</p>
                  <span className="shipped-arrow" style={{ color: "#6B6B5A" }}>↗</span>
                </div>
              </div>
            </a>

            {/* Jorvo — void dark */}
            <a
              href="https://jorvo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="shipped-card"
              style={{ background: "radial-gradient(circle at 84% 92%, rgba(255,255,255,0.16) 0%, transparent 55%), linear-gradient(135deg, #8B5CF6 0%, #6D28D9 55%, #5B21B6 100%)", borderColor: "rgba(255,255,255,0.18)" }}
            >
              <div className="shipped-top">
                <div>
                  <p className="shipped-label" style={{ color: "#EDE9FE", background: "rgba(255,255,255,0.16)" }}>Jobs</p>
                  <p className="shipped-name" style={{ color: "#ffffff", fontSize: "26px" }}>Jorvo</p>
                  <p className="shipped-desc" style={{ color: "#E4D9FF", fontSize: "13px", paddingRight: "96px" }}>
                    Finds the roles, scores them against your CV, and preps you to win — before anyone else applies.
                  </p>
                </div>
                <span className="shipped-status">Live</span>
              </div>
              <span className="jorvo-owl-wrap" aria-hidden="true">
                <JorvoOwl size={96} className="jorvo-owl" />
              </span>
              <div className="shipped-bottom">
                <div className="shipped-card-footer" style={{ justifyContent: "flex-start", gap: "8px" }}>
                  <p className="shipped-url" style={{ color: "rgba(255,255,255,0.7)" }}>jorvo.app</p>
                  <span className="shipped-arrow" style={{ color: "rgba(255,255,255,0.7)" }}>↗</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* 5 — How I think */}
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
          <ExternalLink href="https://www.linkedin.com/in/eslamelmahdy/">LinkedIn</ExternalLink>
        </div>
        <p className="footer-legal">AI-native product builder · Cairo</p>
      </footer>
    </>
  );
}
