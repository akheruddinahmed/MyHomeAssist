import type { PricingCategory } from "@/types";

// Each tier has its own real Google Form (price depends on both property
// type and size, so there's no single universal booking form anymore).
export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "unfurnished-apartment",
    title: "Unfurnished Apartment",
    plans: [
      {
        id: "apt-1bhk",
        label: "1 BHK",
        price: 2699,
        formUrl: "https://forms.gle/asXeHiyhwTq9pgpu8",
        inclusions: [
          "1 Bedroom + Living Room",
          "Kitchen & 1 Bathroom",
          "Floors, fans, switches & windows",
          "Balcony & utility area",
        ],
        ctaLabel: "Book Now",
      },
      {
        id: "apt-2bhk",
        label: "2 BHK",
        price: 2999,
        featured: true,
        formUrl: "https://forms.gle/MQ3eh75hYEvdcXRdA",
        inclusions: [
          "2 Bedrooms + Living Room",
          "Kitchen & 2 Bathrooms",
          "Floors, fans, switches & windows",
          "Balcony & utility area",
        ],
        ctaLabel: "Book Now",
      },
      {
        id: "apt-3bhk",
        label: "3 BHK",
        price: 3799,
        formUrl: "https://forms.gle/m1uS3eLpAF52dB5r5",
        inclusions: [
          "3 Bedrooms + Living Room",
          "Kitchen & 3 Bathrooms",
          "Floors, fans, switches & windows",
          "Balcony & utility area",
        ],
        ctaLabel: "Book Now",
      },
      {
        id: "apt-4bhk",
        label: "4 BHK",
        price: 4999,
        formUrl: "https://forms.gle/8sGNqT9wXDUqu3Hv5",
        inclusions: [
          "4 Bedrooms + Living & Dining",
          "Kitchen & 4 Bathrooms",
          "Floors, fans, switches & windows",
          "Balcony & utility area",
        ],
        ctaLabel: "Book Now",
      },
      {
        id: "apt-5bhk",
        label: "5 BHK",
        price: 5499,
        formUrl: "https://forms.gle/6QJoG74hCfRnsUeE8",
        inclusions: [
          "5 Bedrooms + Living & Dining",
          "Kitchen & 5 Bathrooms",
          "Floors, fans, switches & windows",
          "Balcony & utility area",
        ],
        ctaLabel: "Book Now",
      },
    ],
  },
  {
    id: "unfurnished-bungalow-duplex",
    title: "Unfurnished Bungalow & Duplex",
    plans: [
      {
        id: "bungalow-2bhk",
        label: "2 BHK",
        price: 3499,
        formUrl: "https://forms.gle/BF4HkL8B55iV3rc98",
        inclusions: [
          "2 Bedrooms + Living & Dining",
          "Kitchen & 2 Bathrooms",
          "Floors, fans, switches & windows",
          "Staircase & balcony",
        ],
        ctaLabel: "Book Now",
      },
      {
        id: "bungalow-3bhk",
        label: "3 BHK",
        price: 4999,
        formUrl: "https://forms.gle/poLaoCQFLSqMRqoH9",
        inclusions: [
          "3 Bedrooms + Living & Dining",
          "Kitchen & 3 Bathrooms",
          "Floors, fans, switches & windows across floors",
          "Staircase & balcony",
        ],
        ctaLabel: "Book Now",
      },
      {
        id: "bungalow-4bhk",
        label: "4 BHK",
        price: 6999,
        formUrl: "https://forms.gle/op2eXKQtJii2v8yH6",
        inclusions: [
          "4 Bedrooms + Living & Dining",
          "Kitchen & 4 Bathrooms",
          "Floors, fans, switches & windows across floors",
          "Staircase & balcony",
        ],
        ctaLabel: "Book Now",
      },
      {
        id: "bungalow-5bhk",
        label: "5 BHK",
        price: 8999,
        formUrl: "https://forms.gle/MsExT3cPN6aPnLem6",
        inclusions: [
          "5 Bedrooms + Living & Dining",
          "Kitchen & 5 Bathrooms",
          "Floors, fans, switches & windows across floors",
          "Staircase & balcony",
        ],
        ctaLabel: "Book Now",
      },
    ],
  },
];
