"use client";

import { useState } from "react";

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
];

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="cs-list">
      {cases.map((cs, i) => {
        const isOpen = openIndex === i;
        const isLast = i === cases.length - 1;
        return (
          <div key={i} className={isLast ? "cs-item" : "cs-item cs-divider"}>
            <p className="cs-result-hero">{cs.result}</p>
            <p className="cs-company">{cs.company}</p>
            <h2 className="cs-title">{cs.title}</h2>

            <div
              className="cs-body"
              style={{ maxHeight: isOpen ? "1000px" : "0px" }}
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

            <button className="cs-toggle" onClick={() => toggle(i)}>
              {isOpen ? "Show less ←" : "Read more →"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
