import {
  ShieldCheck,
  Receipt,
  Leaf,
  CalendarClock,
  IndianRupee,
  Headphones,
} from "lucide-react";
import type { Benefit } from "@/types";

export const BENEFITS: Benefit[] = [
  {
    id: "verified-professionals",
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "Every cleaner is ID-verified and background-checked before they're allowed into your home.",
  },
  {
    id: "transparent-pricing",
    icon: Receipt,
    title: "Transparent Pricing",
    description:
      "You see the exact price for your home size before you book — no surprise charges once the job is done.",
  },
  {
    id: "eco-friendly-products",
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We clean with non-toxic, eco-certified products that are safe around kids, pets, and allergies.",
  },
  {
    id: "same-day-booking",
    icon: CalendarClock,
    title: "Same-Day Booking",
    description:
      "Need it done today? Same-day slots are available in most serviceable areas, subject to team availability.",
  },
  {
    id: "affordable-pricing",
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Premium-quality cleaning priced fairly for Bangalore households — no inflated agency markups.",
  },
  {
    id: "customer-support",
    icon: Headphones,
    title: "Customer Support",
    description:
      "A real person answers on call or WhatsApp — before, during, and after your cleaning is done.",
  },
];
