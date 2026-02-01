/** Sawtooth / jagged border — style guide (About page, Footer). */
export function JaggedDivider({
  className = "",
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <div className={`h-4 w-full overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0 20 L5 0 L10 20 L15 0 L20 20 L25 0 L30 20 L35 0 L40 20 L45 0 L50 20 L55 0 L60 20 L65 0 L70 20 L75 0 L80 20 L85 0 L90 20 L95 0 L100 20 L100 20 L0 20 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
