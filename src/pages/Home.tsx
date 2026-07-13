import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PricingSection } from "@/components/sections/PricingSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CleaningChecklist } from "@/components/sections/CleaningChecklist";
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
      {/* Gallery and Reviews sections removed for now — Gallery has no real
          before/after photos yet, Reviews has no real customer feedback yet.
          Both components and their data files are still in the codebase
          (unused), ready to re-add as <Gallery /> / <Reviews /> once you
          have real content for either. */}
      <Faq />
      <ServiceAreas />
      <BookNowCta />
    </>
  );
}
