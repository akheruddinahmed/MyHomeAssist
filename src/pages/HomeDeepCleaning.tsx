import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceDetails } from "@/components/sections/ServiceDetails";
import { NotIncluded } from "@/components/sections/NotIncluded";
import { PricingSection } from "@/components/sections/PricingSection";
import { OurEquipment } from "@/components/sections/OurEquipment";
import { BookNowCta } from "@/components/sections/BookNowCta";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { useJsonLd } from "@/hooks/useJsonLd";
import { PAGE_META } from "@/config/seo";
import { buildServiceSchema } from "@/data/structuredData";
import { PRICING_CATEGORIES } from "@/data/pricing";

export function Component() {
  useDocumentMeta(PAGE_META.homeDeepCleaning);
  useJsonLd(buildServiceSchema(PRICING_CATEGORIES));

  return (
    <>
      <Container className="pt-16 text-center md:pt-20">
        <span className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Our Service
        </span>
        <h1 className="mt-2 font-heading text-4xl font-semibold text-ink md:text-5xl">
          Home Deep Cleaning
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-muted">
          A thorough, top-to-bottom clean for your entire home — every room,
          every visit, against the same checklist.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/pricing" size="lg">
            Book Now
          </Button>
          <Button to="/pricing" variant="secondary" size="lg">
            View Pricing
          </Button>
        </div>
      </Container>

      <ServiceDetails />
      <NotIncluded />
      <PricingSection />
      <OurEquipment />

      <Section id="more-questions">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Still have questions?
          </h2>
          <p className="mt-3 font-body text-muted">
            Check our full FAQ for details on booking, timing, and our
            satisfaction guarantee.
          </p>
          <Button to="/faq" variant="secondary" size="md" className="mt-6">
            Visit FAQ
          </Button>
        </div>
      </Section>

      <BookNowCta />
    </>
  );
}
