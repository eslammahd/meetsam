import ThemeToggle from "./theme-toggle";

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
        <a href="/work" className="nav-link">
          Work
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
