/* skim.'s fox character, ported from the skim app (components/FoxLogo.tsx).
 * This is the "happy" pose — floating gently with a wagging tail — kept in
 * the original palette (ink face, cream mask, leaf-green ears and eyes),
 * which sits naturally on the warm cream skim card. The viewBox is extended
 * to 100×94 so the chin isn't clipped when the fox bobs. */

const INK = "#1A1A1A";
const CREAM = "#F2F0E8";
const LEAF = "#8FBA24";

export default function SkimFox({ size = 88, className }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.94)}
      viewBox="0 0 100 94"
      fill="none"
      className={className}
      role="img"
      aria-label="skim fox"
    >
      <g className="skim-fox-float">
        {/* tail — drawn first so the body overlaps its attach end */}
        <g className="skim-fox-tail">
          <path d="M62 86 C 94 86, 100 66, 92 58 C 88 66, 80 78, 66 82 Z" fill={INK} />
          <ellipse cx="92" cy="61" rx="3.4" ry="2.8" fill={LEAF} />
        </g>
        <polygon points="24,62 16,36 38,58" fill={INK} />
        <polygon points="76,62 84,36 62,58" fill={INK} />
        <polygon points="26,60 20,40 35,57" fill={LEAF} />
        <polygon points="74,60 80,40 65,57" fill={LEAF} />
        <ellipse cx="50" cy="68" rx="28" ry="26" fill={INK} />
        <rect x="22" y="56" width="22" height="16" rx="5" fill={CREAM} />
        <rect x="56" y="56" width="22" height="16" rx="5" fill={CREAM} />
        <rect x="44" y="61" width="12" height="6" fill={INK} />
        <circle cx="33" cy="64" r="5" fill={LEAF} />
        <circle cx="67" cy="64" r="5" fill={LEAF} />
        <circle cx="33" cy="64" r="2.5" fill={INK} />
        <circle cx="67" cy="64" r="2.5" fill={INK} />
      </g>
    </svg>
  );
}
