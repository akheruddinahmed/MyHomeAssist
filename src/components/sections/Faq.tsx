import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FAQ_ITEMS } from "@/data/faq";

export function Faq() {
  return (
    <Section
      id="faq"
      background="surface"
      eyebrow="FAQ"
      title="Frequently asked questions"
      subtitle="Everything you need to know before booking."
    >
      <FaqAccordion items={FAQ_ITEMS} />
    </Section>
  );
}
