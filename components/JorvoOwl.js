/* Jorvo's owl character, ported from the Jorvo app (components/brand/JorvoOwl.tsx).
 * This is the "found" pose — wings spread, sparkles — adapted for the purple
 * Jorvo card: the near-black body becomes lavender-white, and the sparkles
 * and branch (purple in the original) shift light/deep so they don't blend
 * into the purple surface. Drawn on a 160×160 viewBox. */

const BODY = "#F5F4FF";
const PURPLE = "#7C3AED";
const LAVENDER = "#EDE9FE";
const SPARKLE = "#EDE9FE";
const BRANCH = "#3B1B7E";

export default function JorvoOwl({ size = 100, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      className={className}
      role="img"
      aria-label="Jorvo owl"
    >
      <path d="M50 30 L38 4 L64 22 Z" fill={BODY} />
      <path d="M110 30 L122 4 L96 22 Z" fill={BODY} />
      <path d="M53 27 L44 9 L62 22 Z" fill={PURPLE} />
      <path d="M107 27 L116 9 L98 22 Z" fill={PURPLE} />
      <path d="M80 18 Q118 18 122 58 Q126 104 104 120 Q93 128 80 128 Q67 128 56 120 Q34 104 38 58 Q42 18 80 18 Z" fill={BODY} />
      <circle cx="62" cy="60" r="15" fill={LAVENDER} />
      <circle cx="98" cy="60" r="15" fill={LAVENDER} />
      <circle cx="62" cy="60" r="12" fill="none" stroke={PURPLE} strokeWidth="3.8" />
      <circle cx="98" cy="60" r="12" fill="none" stroke={PURPLE} strokeWidth="3.8" />
      <circle cx="62" cy="60" r="5.2" fill={PURPLE} />
      <circle cx="98" cy="60" r="5.2" fill={PURPLE} />
      <path d="M72 79 L88 79 L80 92 Z" fill={PURPLE} />
      <ellipse cx="80" cy="105" rx="21" ry="19" fill={LAVENDER} />
      <path d="M68 99 Q72 104 76 99 M76 108 Q80 113 84 108 M84 99 Q88 104 92 99" fill="none" stroke={PURPLE} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 64 Q24 56 18 42 Q34 46 46 56 Z" fill={BODY} />
      <path d="M120 64 Q136 56 142 42 Q126 46 114 56 Z" fill={BODY} />
      <path d="M24 24 L28 32 M32 20 L30 29" stroke={SPARKLE} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M136 24 L132 32 M128 20 L130 29" stroke={SPARKLE} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="32" y="132" width="96" height="6" rx="3" fill={BRANCH} />
      <path d="M68 125 L68 132 M74 125 L74 132 M86 125 L86 132 M92 125 L92 132" stroke={BODY} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
