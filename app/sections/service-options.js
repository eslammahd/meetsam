import Tags from "@/components/Tags";
import { BOOKING_HREF } from "@/app/site-config";

/**
 * Moved off the homepage in Phase 0 (see app/site-config.js).
 * Renders on /work-with-me, and returns to the homepage when
 * SHOW_SERVICES_ON_HOME flips to true.
 */
export default function ServiceOptions() {
  return (
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
            <li>Delivered through my agent-directed build system — spec to working product</li>
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
            <li>Agent-directed delivery — you get shipped work, not status updates</li>
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
  );
}
