import type { FaqItem, PricingCategory } from "@/types";
import { SITE_URL } from "@/config/site";

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(categories: PricingCategory[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home Deep Cleaning",
    name: "Home Deep Cleaning by MyHouseAssist",
    url: `${SITE_URL}/home-deep-cleaning`,
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "MyHouseAssist",
    },
    offers: categories.flatMap((category) =>
      category.plans.map((plan) => ({
        "@type": "Offer",
        name: `${category.title} — ${plan.label} Home Deep Cleaning`,
        priceCurrency: "INR",
        price: plan.price,
      }))
    ),
  };
}
