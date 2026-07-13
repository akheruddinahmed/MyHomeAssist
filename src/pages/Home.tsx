import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PricingSection } from "@/components/sections/PricingSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CleaningChecklist } from "@/components/sections/CleaningChecklist";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { BookNowCta } from "@/components/sections/BookNowCta";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";

export function Component() {
  useDocumentMeta(PAGE_META.home);

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <PricingSection />
      <HowItWorks />
      <CleaningChecklist />
      {/* <Gallery /> */}
      {/* Reviews section removed for now — no real customer reviews yet.
          Component and data file are still in the codebase (unused), ready
          to re-add as <Reviews /> once you have real feedback to show. */}
      <Faq />
      <ServiceAreas />
      <BookNowCta />
    </>
  );
}
