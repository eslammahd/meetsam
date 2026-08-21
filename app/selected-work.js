/**
 * Selected work — the evidence. Six cards, copy per the Phase 0 copy deck.
 *
 * Static by design: the cards carry the whole story on their face, so there
 * is nothing to expand. The deeper Situation / Diagnosis / Outcome writeups
 * live in app/case-studies.js, retained for reuse.
 */

const work = [
  {
    title: "Orvo Intelligence",
    context: "AI brand monitoring across Arabic and English",
    body:
      "Built the full product: data model, signal taxonomy, analytics layer, and an AI chat interface over noisy multi-source MENA data. Scraping and enrichment pipeline on Trigger.dev, verified end to end at 121 signals with zero errors. Automated reporting out to PDF and PPTX.",
    attribution: "Orvo AI Ltd · 2026",
  },
  {
    title: "A multi-agent system that ships production software",
    body:
      "Architected a Director → Builder → Review workflow where agents plan, build, test and deploy via Claude, Supabase, Vercel, GitHub and Linear — no manual code. The review gate exists because the first version reported successful completion on work it hadn't performed. I built isolated verification to prove real execution before anything deploys.",
    attribution: "Orvo AI Ltd · 2026",
  },
  {
    title: "CA-Pilot",
    context: "plain English into complex Boolean queries",
    body:
      "Enterprise analysts were losing insight to query syntax. Shipped an LLM assistant that converts natural language into structured Boolean logic, plus a validation protocol with QA and Data Science for model releases.",
    metric: "Search success rate +15%. AI iteration cycles −45%.",
    attribution: "Crowd Analyzer · 2025",
  },
  {
    title: "Churn from 30% to 22% in 90 days",
    body:
      "The product worked; the request pipeline didn't. No prioritization logic, no segmentation, no SLA — so CX couldn't tell anyone when their issue would be resolved. Built a customer health scoring engine on four weighted factors, surfaced live in Metabase, and a request prioritization engine on top of it.",
    metric: "Churn 30% → 22%. A 27% reduction.",
    attribution: "Crowd Analyzer",
  },
  {
    title: "Trial-to-paid from 30% to 50%",
    body:
      "The team's instinct was that the price was too high. It wasn't — it was indefensible, with no logic anchoring it to the market. Rebuilt pricing off a full competitive analysis, stress-tested against company financials, and cut trial quota burn with a Boolean query methodology for CX so trial users saw the product at its ceiling instead of burning out on noise.",
    metric: "Conversion 30% → 50% in three months. A 67% lift. No discount.",
    attribution: "Crowd Analyzer",
  },
  {
    title: "An AI risk model that cut cancellations 25%",
    body:
      "Orders were failing late, when recovery was impossible. Built a risk scoring model on historical and behavioral signals that flagged high-probability cancellations early enough for Ops and CX to intervene.",
    metric: "Cancellations −25% in one quarter.",
    attribution: "Fanni",
  },
];

export default function SelectedWork() {
  return (
    <div className="cs-cards">
      {work.map((w) => (
        <article key={w.title} className="cs-card">
          <div className="sw-card-body">
            <p className="cs-company">{w.attribution}</p>
            {w.metric && <p className="cs-result">{w.metric}</p>}
            <h2 className="cs-title">{w.title}</h2>
            {w.context && <p className="sw-context">{w.context}</p>}
            <p className="sw-body">{w.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
