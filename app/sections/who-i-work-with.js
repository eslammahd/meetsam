import Tags from "@/components/Tags";

/**
 * Moved off the homepage in Phase 0 (see app/site-config.js).
 * Renders on /work-with-me, and returns to the homepage when
 * SHOW_SERVICES_ON_HOME flips to true.
 */
export default function WhoIWorkWith() {
  return (
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
  );
}
