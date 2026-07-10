import { Container } from "@/components/ui/Container";
import { PricingSection } from "@/components/sections/PricingSection";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";

export function Component() {
  useDocumentMeta(PAGE_META.pricing);

  return (
    <>
      <Container className="pt-16 text-center md:pt-20">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          Pricing
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-muted">
          Straightforward, size-based pricing for Bangalore homes. No hidden
          charges, no hourly guesswork.
        </p>
      </Container>
      <PricingSection showEyebrow={false} />
    </>
  );
}
