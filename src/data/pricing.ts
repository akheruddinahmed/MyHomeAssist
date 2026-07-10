import type { PricingPlan } from "@/types";

// Prices match the live Google Form exactly (as of the house-type field
// options) — keep these two in sync if either changes.
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "1bhk",
    label: "1 BHK",
    price: 3999,
    inclusions: [
      "1 Bedroom + Living Room",
      "Kitchen & 1 Bathroom",
      "Floors, fans, switches & windows",
      "Sofa & mattress cleaning (add-on)",
    ],
    ctaLabel: "Book Now",
  },
  {
    id: "2bhk",
    label: "2 BHK",
    price: 4999,
    featured: true,
    inclusions: [
      "2 Bedrooms + Living Room",
      "Kitchen & 2 Bathrooms",
      "Floors, fans, switches & windows",
      "Sofa & mattress cleaning (add-on)",
    ],
    ctaLabel: "Book Now",
  },
  {
    id: "3bhk",
    label: "3 BHK",
    price: 5999,
    inclusions: [
      "3 Bedrooms + Living Room",
      "Kitchen & 3 Bathrooms",
      "Floors, fans, switches & windows",
      "Sofa & mattress cleaning (add-on)",
    ],
    ctaLabel: "Book Now",
  },
  {
    id: "4bhk",
    label: "4 BHK",
    price: 7999,
    inclusions: [
      "4 Bedrooms + Living & Dining",
      "Kitchen & 4 Bathrooms",
      "Floors, fans, switches & windows",
      "Sofa & mattress cleaning (add-on)",
    ],
    ctaLabel: "Book Now",
  },
  {
    id: "5bhk",
    label: "5 BHK",
    price: 9499,
    inclusions: [
      "5 Bedrooms + Living & Dining",
      "Kitchen & 5 Bathrooms",
      "Floors, fans, switches & windows",
      "Sofa & mattress cleaning (add-on)",
    ],
    ctaLabel: "Book Now",
  },
];
