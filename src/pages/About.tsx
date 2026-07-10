import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { BookNowCta } from "@/components/sections/BookNowCta";
import { VALUES } from "@/data/values";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";

export function Component() {
  useDocumentMeta(PAGE_META.about);

  return (
    <>
      <Container className="pt-16 text-center md:pt-20">
        <span className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          About Us
        </span>
        <h1 className="mt-2 font-heading text-4xl font-semibold text-ink md:text-5xl">
          About MyHouseAssist
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted">
          Your Home. Our Responsibility.
        </p>
      </Container>

      <Section id="mission">
        <div className="mx-auto max-w-2xl">
          <p className="font-body text-base leading-relaxed text-ink">
            MyHouseAssist started with a simple frustration: finding a home
            cleaning service in Bangalore that's actually reliable shouldn't
            feel like a gamble. Too many services show up late, cut corners,
            or send someone you've never had a chance to verify.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            We're starting with one service — home deep cleaning — and doing
            it properly, with a consistent checklist, verified professionals,
            and pricing you can see before you book. Everything else comes
            later, once this is right.
          </p>
        </div>
      </Section>

      <Section
        id="values"
        background="surface"
        eyebrow="What We Stand For"
        title="How we operate"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <FeatureCard key={value.id} {...value} />
          ))}
        </div>
      </Section>

      <BookNowCta />
    </>
  );
}
