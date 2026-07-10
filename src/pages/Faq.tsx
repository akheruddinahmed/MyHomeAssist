import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FAQ_ITEMS } from "@/data/faq";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { useJsonLd } from "@/hooks/useJsonLd";
import { PAGE_META } from "@/config/seo";
import { buildFaqSchema } from "@/data/structuredData";

export function Component() {
  useDocumentMeta(PAGE_META.faq);
  useJsonLd(buildFaqSchema(FAQ_ITEMS));

  return (
    <>
      <Container className="pt-16 text-center md:pt-20">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-muted">
          Everything you need to know before booking a home deep cleaning
          with MyHouseAssist.
        </p>
      </Container>
      <Container className="py-16 md:py-20">
        <FaqAccordion items={FAQ_ITEMS} />
      </Container>
    </>
  );
}
