"use client";

import { useState } from "react";

/* ── Illustrations ─────────────────────────────────────────────── */

function SearchIllo() {
  return (
    <svg width="80" height="72" viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="38" height="6" rx="3" fill="#FAECE7" />
      <rect x="6" y="22" width="30" height="6" rx="3" fill="#F5D0C5" />
      <rect x="6" y="34" width="34" height="6" rx="3" fill="#FAECE7" />
      <circle cx="54" cy="46" r="15" stroke="#D85A30" strokeWidth="2.5" fill="none" />
      <circle cx="54" cy="46" r="7" fill="#FAECE7" />
      <line x1="64.5" y1="57" x2="74" y2="66" stroke="#D85A30" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M54 41v10M49 46h10" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DonutIllo() {
  const r = 24;
  const cx = 40;
  const cy = 36;
  const circ = 2 * Math.PI * r;
  const filled = circ * 0.25;
  const gap = circ * 0.75;
  return (
    <svg width="80" height="72" viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} stroke="#FAECE7" strokeWidth="9" fill="none" />
      <circle
        cx={cx} cy={cy} r={r}
        stroke="#D85A30" strokeWidth="9" fill="none"
        strokeDasharray={`${filled} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#D85A30" fontSize="11" fontWeight="600" fontFamily="Outfit, system-ui, sans-serif">25%</text>
    </svg>
  );
}

function BarIllo() {
  return (
    <svg width="80" height="72" viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <rect x="10" y="46" width="12" height="16" rx="3" fill="#FAECE7" />
      <rect x="28" y="32" width="12" height="30" rx="3" fill="#F0997B" />
      <rect x="46" y="18" width="12" height="44" rx="3" fill="#D85A30" />
      <path d="M16 44 L34 30 L52 14" stroke="#D85A30" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2.5" />
      <path d="M48 10 L52 14 L56 10" stroke="#D85A30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* ── Chat Scene ────────────────────────────────────────────────── */

function RobotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="10" height="7" rx="2" fill="#D85A30" />
      <rect x="5.5" y="3" width="5" height="4" rx="1" fill="#D85A30" />
      <rect x="7" y="1.5" width="2" height="2" rx="0.5" fill="#D85A30" />
      <rect x="4.5" y="9" width="2" height="2" rx="0.5" fill="#FAECE7" />
      <rect x="9.5" y="9" width="2" height="2" rx="0.5" fill="#FAECE7" />
      <rect x="6" y="11" width="4" height="1.5" rx="0.5" fill="#FAECE7" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8C3.5 5.5 5.5 3.5 8 3.5C10.5 3.5 12.5 5.5 12.5 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <rect x="2" y="8" width="3" height="4" rx="1" fill="white" />
      <rect x="11" y="8" width="3" height="4" rx="1" fill="white" />
    </svg>
  );
}

function ChatScene() {
  return (
    <div style={{
      background: "var(--bg-raised)",
      borderRadius: "12px",
      padding: "14px 16px",
      marginTop: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}>
      <p style={{ fontSize: "10px", color: "var(--text-muted)", paddingLeft: "36px" }}>
        AI agent · risk model
      </p>

      {/* AI message — left */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
        <div style={{
          width: "28px", height: "28px", borderRadius: "50%",
          background: "#FAECE7", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <RobotIcon />
        </div>
        <div>
          <div style={{
            background: "#FFF5F2",
            border: "0.5px solid #F0997B",
            borderRadius: "14px 14px 14px 4px",
            padding: "8px 12px",
            fontSize: "13px",
            lineHeight: "1.5",
            color: "#1a1a1a",
          }}>
            Take care — you have{" "}
            <span style={{ color: "#D85A30", fontWeight: 500 }}>1:30 mins</span>{" "}
            to save this order.
          </div>
          <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px", paddingLeft: "4px" }}>
            Risk score: 0.91 · Order #48291
          </p>
        </div>
      </div>

      {/* Human reply — right */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end", gap: "8px" }}>
        <div style={{
          background: "var(--bg)",
          border: "0.5px solid var(--border)",
          borderRadius: "14px 14px 4px 14px",
          padding: "8px 12px",
          fontSize: "13px",
          lineHeight: "1.5",
          color: "var(--text)",
        }}>
          On it — calling the customer now.
        </div>
        <div style={{
          width: "28px", height: "28px", borderRadius: "50%",
          background: "#0D9488", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <HeadsetIcon />
        </div>
      </div>
    </div>
  );
}

/* ── Data ──────────────────────────────────────────────────────── */

const cases = [
  {
    company: "CROWD ANALYZER · 2024–2026",
    result: "15% search success · 45% faster AI delivery",
    title: "CA-Pilot — LLM-powered search assistant",
    tags: ["Enterprise SaaS", "LLM", "AI validation"],
    illo: <SearchIllo />,
    situation:
      "Enterprise users were failing to get useful data — not because the data wasn't there, but because building Boolean search queries required technical fluency most users didn't have. Low adoption was being misread as a UX problem.",
    diagnosis:
      "The barrier wasn't the interface. It was the query language itself. Users couldn't translate business questions into Boolean logic, so they leaned on CX support or gave up. The product was only accessible to power users.",
    built: (
      <>
        CA-Pilot — an LLM-powered assistant that converts plain-English questions
        into structured Boolean queries. Also established a structured AI
        validation protocol with QA and Data Science, cutting iteration cycles
        significantly.
      </>
    ),
    outcome:
      "15% improvement in search success rate. AI delivery speed increased 45% through the validation protocol. Reduced CX dependency for query-building across the enterprise client base.",
  },
  {
    company: "HOME SERVICES MARKETPLACE · KSA · 2022–2024",
    result: "25% fewer cancellations · 45% retention uplift",
    title: "Cancellation risk model + loyalty system",
    tags: ["Marketplace", "AI model", "Retention"],
    illo: <DonutIllo />,
    situation:
      "A home services marketplace in Saudi Arabia was bleeding on two fronts: high cancellation rates and weak repeat usage. Both were being treated as operations problems — more calls, more manual intervention.",
    diagnosis:
      "Cancellations weren't random. Behavioral data showed predictable signals before a cancellation occurred — but no one was acting on them upstream. On retention, there was no structured reason for customers to come back.",
    built: (
      <>
        An AI-based cancellation risk scoring model that flagged high-probability
        cancellations early, giving Ops a prioritized intervention list. A
        loyalty system mapped user segments, defined activation triggers, and
        modelled retention incentives.
        <ChatScene />
      </>
    ),
    outcome:
      "25% reduction in cancellations within one quarter. Loyalty system drove 30% activation in Q1 and 45% retention uplift for the engaged segment. Overall retention improved 15%.",
  },
  {
    company: "FATURA · 2021–2022",
    result: "40% BNPL activation · 35% profit growth",
    title: "BNPL scorecards + demand growth",
    tags: ["Fintech", "B2B", "Growth"],
    illo: <BarIllo />,
    situation:
      "A B2B marketplace in Egypt had a BNPL vertical with low activation and a demand side growing slowly despite an active growth team. The roadmap was feature-heavy but the real blockers were in the funnel and the credit logic.",
    diagnosis:
      "BNPL activation was failing at the qualification stage — too much friction and scoring logic that wasn't surfacing the right leads. On the demand side, growth was driven by promotions without structural retention, so profit leaked through discount dependency.",
    built: (
      <>
        BNPL credit scorecards with the data science team, plus a redesigned
        onboarding and lead validation flow. On the demand side, ran structured
        growth experiments — loyalty programs, offer segmentation — to replace
        discount-driven growth with behavior-driven retention.
      </>
    ),
    outcome:
      "40% increase in BNPL activation. 35% profit growth and 25% retention improvement across the demand vertical. 80% reduction in manual sales reporting via a Sales Management System built in parallel.",
  },
];

/* ── Component ─────────────────────────────────────────────────── */

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="cs-cards">
      {cases.map((cs, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="cs-card">
            {/* Clickable header */}
            <div className="cs-card-click" onClick={() => toggle(i)}>
              <div className="cs-card-top">
                <div className="cs-card-meta">
                  <p className="cs-company">{cs.company}</p>
                  <p className="cs-result">{cs.result}</p>
                  <h2 className="cs-title">{cs.title}</h2>
                  <div className="cs-tags">
                    {cs.tags.map((t) => (
                      <span key={t} className="cs-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="cs-card-illo">{cs.illo}</div>
              </div>

              <div className="cs-toggle-row">
                <span className="cs-toggle-link">
                  {isOpen ? "Show less" : "Read more"}
                  <svg
                    className={`cs-chevron${isOpen ? " cs-chevron-open" : ""}`}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Expandable body */}
            <div
              className="cs-expand"
              style={{ maxHeight: isOpen ? "1200px" : "0px" }}
            >
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
                  <p className="cs-content">{cs.built}</p>
                </div>
                <div className="cs-row">
                  <p className="cs-label">Outcome</p>
                  <p className="cs-content">{cs.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
