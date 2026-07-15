/**
 * Bathroom Cleaning — a standalone second service alongside Home Deep
 * Cleaning. Only one price point and one booking form were provided (no
 * multi-tier pricing like the whole-home service), so this stays simple
 * on purpose. Add tiers here later if you want variants (e.g. "Intense"
 * vs "Move-in" cleaning) with their own prices.
 */

export const BATHROOM_CLEANING = {
  startingPrice: 499,
  durationLabel: "~45–60 mins per bathroom",
  formUrl: "https://forms.gle/UvNJHPn7mP2TV6z7A",
} as const;

export const BATHROOM_CLEANING_COVERED: string[] = [
  "Hard water stain removal from tiles and fittings",
  "Toilet seat, bowl, and flush area — inside and outside",
  "Sink, taps, and countertop scrubbing",
  "Wall tile and grout scrubbing",
  "Mirrors, glass partitions, and windows (inside)",
  "Exhaust fan exterior and other hard-to-reach corners",
  "Floor scrubbing and mopping",
];

export const BATHROOM_CLEANING_NOT_INCLUDED: string[] = [
  "Plumbing repairs or fixture replacement",
  "Deep descaling of showerheads (available as an add-on)",
  "Mould treatment for severe/long-term buildup",
  "Exterior-only-accessible windows",
];
