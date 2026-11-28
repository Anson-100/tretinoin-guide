import type { ReactNode } from "react";

// Full class strings (not built from the color name) so Tailwind can see them.
const colors = {
  sky: "text-sky-600 ring-sky-500/60 bg-sky-500/20 dark:text-sky-500",
  amber: "text-amber-600 ring-amber-500/60 bg-amber-500/20 dark:text-amber-500",
  emerald: "text-emerald-600 ring-emerald-500/60 bg-emerald-500/20 dark:text-emerald-500",
  red: "text-red-600 ring-red-500/60 bg-red-500/20 dark:text-red-500",
};

export type BadgeColor = keyof typeof colors;

/** Pill-shaped eyebrow label that sits above a heading. */
export default function Badge({
  color = "sky",
  className = "",
  children,
}: {
  color?: BadgeColor;
  className?: string;
  children: ReactNode;
}) {
  return (
    // data-badge lets the heading right after a badge drop its own top margin.
    <p
      data-badge
      className={`w-fit rounded-full px-2 ring-1 ${colors[color]} ${className}`}
    >
      {children}
    </p>
  );
}
