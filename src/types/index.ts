import type { LucideIcon } from "lucide-react";

export type Benefit = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type PricingPlan = {
  id: string;
  label: string;
  /** Numeric price in INR, or null when the plan is quote-based (e.g. 4 BHK+) */
  price: number | null;
  /** Shown instead of a numeric price when `price` is null, e.g. "Custom Quote" */
  priceLabel?: string;
  inclusions: string[];
  featured?: boolean;
  ctaLabel: string;
  /** true routes the CTA to WhatsApp instead of the booking form (used for custom quotes) */
  ctaViaWhatsApp?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Review = {
  id: string;
  name: string;
  area: string;
  rating: number;
  quote: string;
};

export type RoomChecklist = {
  id: string;
  room: string;
  icon: LucideIcon;
  tasks: string[];
};
