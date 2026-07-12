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
  price: number;
  /** This specific tier's Google Form — every tier now has its own,
   * since pricing depends on both property type and size. */
  formUrl: string;
  inclusions: string[];
  featured?: boolean;
  ctaLabel: string;
};

export type PricingCategory = {
  id: string;
  title: string;
  plans: PricingPlan[];
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
