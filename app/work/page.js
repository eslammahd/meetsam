import Nav from "../nav";

const BOOKING_HREF = "https://calendly.com/eslam-orchpad/30min";
const LINKEDIN_HREF = "https://www.linkedin.com/in/eslamelmahdy/";

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
  title: "Work — meetsam.me",
  description:
    "6 years diagnosing and fixing growth, activation, and retention problems at B2B SaaS and marketplace companies across MENA.",
};

const cases = [
  {
    company: "CROWD ANALYZER · 2024–2026",
    title: "CA-Pilot — LLM-powered search assistant",
    result: "15% improvement in search success rate · 45% faster AI delivery",
    situation:
      "Enterprise users were failing to get useful data — not because the data wasn't there, but because building Boolean search queries required technical fluency most users didn't have. Low adoption was being misread as a UX problem.",
    diagnosis:
      "The barrier wasn't the interface. It was the query language itself. Users couldn't translate business questions into Boolean logic, so they leaned on CX support or gave up. The product was only accessible to power users.",
    built:
      "CA-Pilot — an LLM-powered assistant that converts plain-English questions into structured Boolean queries. Also established a structured AI validation protocol with QA and Data Science, cutting iteration cycles significantly.",
    outcome:
      "15% improvement in search success rate. AI delivery speed increased 45% through the validation protocol. Reduced CX dependency for query-building across the enterprise client base.",
  },
  {
    company: "HOME SERVICES MARKETPLACE · KSA · 2022–2024",
    title: "Cancellation risk model + loyalty system",
    result: "25% fewer cancellations · 45% retention uplift for engaged segment",
    situation:
      "A home services marketplace in Saudi Arabia was bleeding on two fronts: high cancellation rates and weak repeat usage. Both were being treated as operations problems — more calls, more manual intervention.",
    diagnosis:
      "Cancellations weren't random. Behavioral data showed predictable signals before a cancellation occurred — but no one was acting on them upstream. On retention, there was no structured reason for customers to come back.",
    built:
      "An AI-based cancellation risk scoring model that flagged high-probability cancellations early, giving Ops a prioritized intervention list. Separately, a tiered loyalty system — mapped user segments, defined activation triggers, modeled retention incentives.",
    outcome:
      "25% reduction in cancellations within one quarter. Loyalty system drove 30% activation in Q1 and 45% retention uplift for the engaged segment. Overall retention improved 15%.",
  },
  {
    company: "FATURA · 2021–2022",
    title: "BNPL scorecards + demand growth",
    result: "40% BNPL activation increase · 35% profit growth",
    situation:
      "A B2B marketplace in Egypt had a BNPL vertical with low activation and a demand side growing slowly despite an active growth team. The roadmap was feature-heavy but the real blockers were in the funnel and the credit logic.",
    diagnosis:
      "BNPL activation was failing at the qualification stage — too much friction and scoring logic that wasn't surfacing the right leads. On the demand side, growth was driven by promotions without structural retention, so profit leaked through discount dependency.",
    built:
      "BNPL credit scorecards with the data science team, plus a redesigned onboarding and lead validation flow. On the demand side, ran structured growth experiments — loyalty programs, offer segmentation — to replace discount-driven growth with behavior-driven retention.",
    outcome:
      "40% increase in BNPL activation. 35% profit growth and 25% retention improvement across the demand vertical. 80% reduction in manual sales reporting via a Sales Management System built in parallel.",
  },
  {
    company: "ORVO AI · 2024–PRESENT",
    title: "Orchpad — zero to live product in 4 weeks",
    result:
      "Live product shipped in 3–4 weeks · 50+ issues in a single build session",
    situation:
      "Non-technical founders building products had no workspace that matched how they actually think — stitching together Notion docs, ChatGPT threads, and task lists with no structure connecting strategy to execution.",
    diagnosis:
      "The problem wasn't a lack of AI tools. Existing tools either gave raw generation with no structure, or rigid PM frameworks with no intelligence. Founders needed a system that could hold product thinking — not just produce output on demand.",
    built: null, // rendered separately with Orchpad link
    outcome:
      "Shipped from zero to live invite-only beta in 3–4 weeks. 50+ scoped issues shipped in a single build session. Operating at roughly 15x speed compression versus traditional development.",
  },
];

function CaseStudy({ cs, isLast }) {
  return (
    <div className={isLast ? "cs-item" : "cs-item cs-divider"}>
      <p className="cs-company">{cs.company}</p>
      <h2 className="cs-title">{cs.title}</h2>
      <p className="cs-result">{cs.result}</p>

      <div className="cs-rows">
        <div className="cs-row">
          <p className="cs-label">Situation</p>
          <p className="cs-content">{cs.situation}</p>
        </div>
        <div className="cs-row">
          <p className="cs-label">Diagnosis</p>
          <p className="cs-content">{cs.diagnosis}</p>
        </div>
        <div className="cs-row">
          <p className="cs-label">What I built</p>
          {cs.built ? (
            <p className="cs-content">{cs.built}</p>
          ) : (
            <p className="cs-content">
              <Orchpad /> — an AI-native product workspace. Designed the full
              product experience from scratch and orchestrated the entire build
              through a Director → Builder → RO multi-agent workflow using
              Claude, Supabase, Vercel, GitHub, and Linear. No manual code
              written.
            </p>
          )}
        </div>
        <div className="cs-row">
          <p className="cs-label">Outcome</p>
          <p className="cs-content">{cs.outcome}</p>
        </div>
      </div>
    </div>
  );
}

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
          <p className="eyebrow">Work</p>
          <div className="cs-list">
            {cases.map((cs, i) => (
              <CaseStudy key={i} cs={cs} isLast={i === cases.length - 1} />
            ))}
          </div>
        </section>

        {/* Section 3 — Domain Snapshot */}
        <section className="section">
          <p className="eyebrow">Depth</p>
          <div className="work-depth">
            <p>
              Two-sided marketplaces — supply-demand dynamics, fulfillment,
              liquidity, and loyalty systems across B2C and B2B models.
            </p>
            <p>
              B2B SaaS — activation funnels, retention loops, pricing strategy,
              and AI-powered features at enterprise scale across MENA.
            </p>
            <p>
              AI products — LLM feature scoping and validation, predictive risk
              models, human-in-the-loop systems, and multi-agent build
              workflows.
            </p>
          </div>
        </section>

        {/* Section 4 — CTA */}
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
          <ExternalLink href="https://www.orchpad.com">Orchpad</ExternalLink>
          <ExternalLink href="https://landing.orchpad.getorvo.co/blog">
            Blog
          </ExternalLink>
          <ExternalLink href={LINKEDIN_HREF}>LinkedIn</ExternalLink>
        </div>
        <span>Fractional Operator &amp; product builder</span>
      </footer>
    </>
  );
}
