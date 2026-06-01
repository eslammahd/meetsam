const BOOKING_HREF = "https://calendly.com/eslam-orchpad/30min";

function Section({ id, label, children }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        {label ? (
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {label}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

function Cta({ size = "lg" }) {
  const pad =
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={BOOKING_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-paper font-semibold text-ink transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] ${pad}`}
    >
      Book a free 30-min call
    </a>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Meet Sam
        </p>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          I turn AI product ideas into shipped software. Fast.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70 sm:text-xl">
          I&apos;m Sam. Fractional AI PM and product builder. I embed in your
          team or take your idea end-to-end — from zero to working product, in
          weeks not months.
        </p>
        <div className="mt-10 flex flex-col items-start gap-3">
          <Cta />
          <p className="text-sm text-muted">
            No pitch. No fluff. Just figuring out if I can help.
          </p>
        </div>
      </section>

      {/* Who I work with */}
      <Section id="who" label="Who I work with">
        <ul className="space-y-5">
          {[
            "Founders with an AI idea and no PM to own it",
            "Startups with a product that needs AI features scoped and shipped",
            "Teams stuck on roadmap, growth, or activation — and need someone to just fix it",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-4 text-lg leading-relaxed sm:text-xl"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-paper/50" />
              <span className="text-paper/90">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Two ways to work together */}
      <Section id="work" label="Two ways to work together">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Option 1 */}
          <div className="flex flex-col rounded-2xl border border-line p-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Option 1
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">
              Product Sprint
            </h3>
            <p className="mt-1 text-lg font-semibold text-paper">$1,500</p>
            <p className="mt-3 text-paper/70">Idea to full spec in 2 weeks</p>
            <ul className="mt-6 space-y-3 text-paper/80">
              <li>Discovery: your users, problem, constraints</li>
              <li>
                Delivery: roadmap, MVP spec, AI feature architecture, 90-day
                plan
              </li>
              <li>3 live calls + async collaboration</li>
              <li>Built and delivered inside Orchpad</li>
            </ul>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col rounded-2xl border border-line p-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Option 2
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">
              Fractional AI PM
            </h3>
            <p className="mt-1 text-lg font-semibold text-paper">
              $1,200<span className="text-base text-muted">/month</span>
            </p>
            <ul className="mt-9 space-y-3 text-paper/80">
              <li>10 hrs/week embedded in your team</li>
              <li>Own a product vertical end-to-end</li>
              <li>Async-first, weekly sync</li>
              <li>Delivered inside Orchpad</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Proof */}
      <Section id="proof" label="Proof">
        <ul className="space-y-8">
          {[
            "Launched an LLM-powered assistant that reduced user friction by 15% — shipped to enterprise clients across MENA",
            "Built an AI cancellation risk model that cut order cancellations 25% in one quarter",
            "Took Orchpad from zero to live product in under 4 weeks using AI agent workflows",
          ].map((item) => (
            <li
              key={item}
              className="text-xl font-medium leading-snug tracking-tight sm:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section id="how" label="How it works">
        <ol className="space-y-6">
          {[
            "Book a free 30-min call",
            "I diagnose your problem honestly — if I can't help, I'll tell you",
            "We agree on scope and price",
            "I build, you ship",
          ].map((item, i) => (
            <li key={item} className="flex gap-5">
              <span className="flex-none text-lg font-bold tabular-nums text-muted">
                0{i + 1}
              </span>
              <span className="text-lg leading-relaxed text-paper/90 sm:text-xl">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Final CTA */}
      <Section id="booking">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s figure out if I can help.
          </h2>
          <div className="mt-2 flex flex-col items-start gap-3">
            <Cta />
            <p className="text-sm text-muted">
              No pitch. No fluff. Just figuring out if I can help.
            </p>
          </div>
        </div>
      </Section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-sm text-muted">
          <span>Meet Sam</span>
          <span>Fractional AI PM &amp; product builder</span>
        </div>
      </footer>
    </main>
  );
}
