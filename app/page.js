import ThemeToggle from "./theme-toggle";

const BOOKING_HREF = "https://calendly.com/eslam-orchpad/30min";

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

function Cta() {
  return (
    <a
      href={BOOKING_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      Book a free 30-min call
    </a>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="wm">
            <span className="wm-meet">meet</span>
            <span className="wm-sam">sam</span>
            <span className="wm-dot">.</span>
          </span>
        </a>
        <ThemeToggle />
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <p className="eyebrow">Meet Sam</p>
          <h1 className="h1">
            I turn AI product ideas into shipped software. Fast.
          </h1>
          <p className="lead">
            I&apos;m Sam. Fractional AI PM and product builder. I embed in your
            team or take your idea end-to-end — from zero to working product, in
            weeks not months.
          </p>
          <p className="hero-proof">
            5+ years building AI and marketplace products · Enterprise clients
            across MENA and KSA · Based in Cairo, open to async worldwide
          </p>
          <div>
            <Cta />
            <p className="note">
              No pitch. No fluff. Just figuring out if I can help.
            </p>
          </div>
        </section>

        {/* Who I work with */}
        <section className="section">
          <p className="eyebrow">Who I work with</p>
          <ul className="bullets">
            <li>Founders with an AI idea and no PM to own it</li>
            <li>
              Startups with a product that needs AI features scoped and shipped
            </li>
            <li>
              Teams stuck on roadmap, growth, or activation — and need someone
              to just fix it
            </li>
          </ul>
        </section>

        {/* Two ways to work together */}
        <section className="section">
          <p className="eyebrow">Ways to work together</p>
          <div className="cards">
            {/* Option 1 */}
            <div className="card">
              <p className="card-label">Option 1</p>
              <h3 className="card-name">Product Sprint</h3>
              <p className="card-price">$1,500</p>
              <p className="card-sub">Idea to full spec in 2 weeks</p>
              <ul>
                <li>Discovery: your users, problem, constraints</li>
                <li>
                  Delivery: roadmap, MVP spec, AI feature architecture, 90-day
                  plan
                </li>
                <li>3 live calls + async collaboration</li>
                <li>
                  Built and delivered inside <Orchpad />
                </li>
              </ul>
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
              <h3 className="card-name">Fractional AI PM</h3>
              <p className="card-price">
                $1,200<span>/month</span>
              </p>
              <ul className="card-spacer">
                <li>10 hrs/week embedded in your team</li>
                <li>Own a product vertical end-to-end</li>
                <li>Async-first, weekly sync</li>
                <li>
                  Delivered inside <Orchpad />
                </li>
              </ul>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Work with me →
              </a>
            </div>

            {/* Option 3 */}
            <div className="card">
              <p className="card-label">Option 3</p>
              <h3 className="card-name">Let&apos;s Just Talk</h3>
              <p className="card-price">Free</p>
              <p className="card-sub">
                Stuck on strategy? Want to scale? Need to mentor your product
                team? Or looking to add serious AI and tech depth through a
                network of experts? Book a call and let&apos;s figure out how we
                can work together.
              </p>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Book a free call →
              </a>
            </div>

            {/* Option 4 */}
            <div className="card">
              <p className="card-label">Option 4</p>
              <h3 className="card-name">Mentorship</h3>
              <p className="card-price">Free</p>
              <p className="card-sub">
                Junior PM trying to break into AI products? Founder figuring out
                how to build with agents? Just curious about where this is all
                going?
              </p>
              <p className="card-sub">Book a session. No agenda required.</p>
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                Book a session →
              </a>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="section">
          <p className="eyebrow">Proof</p>
          <ul className="proof">
            <li>
              Launched an LLM-powered assistant that reduced user friction by
              15% — shipped to enterprise clients across MENA
            </li>
            <li>
              Built an AI cancellation risk model that cut order cancellations
              25% in one quarter
            </li>
            <li>
              Took Orchpad from zero to live product in under 4 weeks using AI
              agent workflows
            </li>
          </ul>
        </section>

        {/* How it works */}
        <section className="section">
          <p className="eyebrow">How it works</p>
          <ol className="steps">
            <li>
              <span className="num">01</span>
              <span>Book a free 30-min call</span>
            </li>
            <li>
              <span className="num">02</span>
              <span>
                I diagnose your problem honestly — if I can&apos;t help, I&apos;ll
                tell you
              </span>
            </li>
            <li>
              <span className="num">03</span>
              <span>We agree on scope and price</span>
            </li>
            <li>
              <span className="num">04</span>
              <span>I build, you ship</span>
            </li>
          </ol>
        </section>

        {/* Final CTA */}
        <section className="section">
          <h2 className="section-title">Let&apos;s figure out if I can help.</h2>
          <div style={{ marginTop: "24px" }}>
            <Cta />
            <p className="note">
              No pitch. No fluff. Just figuring out if I can help.
            </p>
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
          <ExternalLink href="https://www.linkedin.com/in/eslamelmahdy/">
            LinkedIn
          </ExternalLink>
        </div>
        <span>Fractional AI PM &amp; product builder</span>
      </footer>
    </>
  );
}
