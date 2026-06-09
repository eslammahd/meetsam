import ThemeToggle from "./theme-toggle";

const BOOKING_HREF = "https://calendly.com/eslam-orchpad/30min";

export default function Nav() {
  return (
    <nav className="nav">
      <a href="/" style={{ textDecoration: "none" }}>
        <span className="wm">
          <span className="wm-meet">meet</span>
          <span className="wm-sam">sam</span>
          <span className="wm-dot">.</span>
        </span>
      </a>
      <div className="nav-right">
        <a href={BOOKING_HREF} target="_blank" rel="noopener noreferrer" className="nav-book-btn">
          Book a call
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
