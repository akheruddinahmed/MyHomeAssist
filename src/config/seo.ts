/**
 * SEO configuration — single source of truth for meta tags and structured
 * data across the site.
 *
 * Status as of last update: SITE_URL (in config/site.ts) is the real
 * domain, and public/og-image.png uses your real logo. Nothing left to
 * replace here — if the domain or branding changes later, update both.
 */

import { SITE_URL } from "@/config/site";

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: "MyHouseAssist | Professional Home Deep Cleaning in Bangalore",
    description:
      "Premium home deep cleaning in Bangalore with verified, background-checked professionals, eco-friendly products, and transparent pricing. Book online in minutes.",
    path: "/",
  },
  homeDeepCleaning: {
    title: "Home Deep Cleaning Services in Bangalore | MyHouseAssist",
    description:
      "See exactly what's included in our room-by-room home deep cleaning checklist — living room, bedrooms, kitchen, bathrooms, and balcony.",
    path: "/home-deep-cleaning",
  },
  pricing: {
    title: "Pricing | MyHouseAssist Home Deep Cleaning",
    description:
      "Transparent, size-based pricing for home deep cleaning in Bangalore. 1 BHK to 4 BHK+, no hourly guesswork, no hidden charges.",
    path: "/pricing",
  },
  about: {
    title: "About Us | MyHouseAssist",
    description:
      "MyHouseAssist brings verified, checklist-driven home deep cleaning to Bangalore — transparent pricing, eco-friendly products, no shortcuts.",
    path: "/about",
  },
  contact: {
    title: "Contact Us | MyHouseAssist",
    description:
      "Get in touch with MyHouseAssist for home deep cleaning bookings and enquiries in Bangalore — phone, WhatsApp, or email.",
    path: "/contact",
  },
  faq: {
    title: "Frequently Asked Questions | MyHouseAssist",
    description:
      "Answers to common questions about booking, pricing, timing, products, and our satisfaction guarantee for home deep cleaning in Bangalore.",
    path: "/faq",
  },
  privacyPolicy: {
    title: "Privacy Policy | MyHouseAssist",
    description:
      "How MyHouseAssist collects, uses, and protects your information when you book a home deep cleaning service.",
    path: "/privacy-policy",
  },
  termsAndConditions: {
    title: "Terms & Conditions | MyHouseAssist",
    description:
      "The terms governing your use of the MyHouseAssist website and home deep cleaning bookings.",
    path: "/terms-and-conditions",
  },
  notFound: {
    title: "Page Not Found | MyHouseAssist",
    description: "The page you're looking for doesn't exist or may have moved.",
    path: "/404",
    noindex: true,
  },
};
