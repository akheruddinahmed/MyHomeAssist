import type { Review } from "@/types";

/**
 * IMPORTANT: these are layout placeholders, not real customer testimonials.
 * MyHouseAssist has no completed bookings yet, so there is nothing genuine
 * to show here. Each entry is deliberately generic and each ReviewCard
 * renders a visible "Sample" badge — replace this file with real reviews
 * (with permission from real customers) once you have your first bookings.
 * Do not replace these with invented realistic-sounding names/quotes; use
 * only genuine customer feedback you've actually collected.
 */
export const REVIEWS: Review[] = [
  {
    id: "sample-1",
    name: "Customer name",
    area: "Add locality",
    rating: 5,
    quote:
      "This is a placeholder review card. Replace it with a real customer's own words once your first bookings are complete.",
  },
  {
    id: "sample-2",
    name: "Customer name",
    area: "Add locality",
    rating: 5,
    quote:
      "Layout sample only — swap in genuine feedback (with the customer's permission) before launch.",
  },
  {
    id: "sample-3",
    name: "Customer name",
    area: "Add locality",
    rating: 4,
    quote:
      "Another placeholder card, shown to demonstrate spacing with a shorter review.",
  },
];
