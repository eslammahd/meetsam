import ThemeToggle from "./theme-toggle";
import { BOOKING_HREF } from "./site-config";

/**
 * `booking` renders the "Book a call" button. Off by default: the homepage
 * first screen is identity and evidence only, no offer above the fold.
 * /work-with-me passes it, because that page is the conversation.
 */
export default function Nav({ booking = false }) {
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
        {booking && (
          <a href={BOOKING_HREF} target="_blank" rel="noopener noreferrer" className="nav-book-btn">
            Book a call
          </a>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
}
