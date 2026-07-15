import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookNowCta } from "@/components/sections/BookNowCta";
import {
  BATHROOM_CLEANING,
  BATHROOM_CLEANING_COVERED,
  BATHROOM_CLEANING_NOT_INCLUDED,
} from "@/data/bathroomCleaning";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";

export function Component() {
  useDocumentMeta(PAGE_META.bathroomCleaning);

  return (
    <>
      <Container className="pt-16 text-center md:pt-20">
        <span className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Our Service
        </span>
        <h1 className="mt-2 font-heading text-4xl font-semibold text-ink md:text-5xl">
          Bathroom Cleaning
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-muted">
          A focused, thorough clean for a single bathroom — hard water
          stains, grout, and fixtures included.
        </p>
        <p className="mt-4 font-heading text-lg font-semibold text-ink">
          Starting at ₹{BATHROOM_CLEANING.startingPrice.toLocaleString("en-IN")}
          <span className="ml-2 font-body text-sm font-normal text-muted">
            · {BATHROOM_CLEANING.durationLabel}
          </span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={BATHROOM_CLEANING.formUrl} size="lg">
            Book Now
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Ask a Question
          </Button>
        </div>
      </Container>

      <Section
        id="covered"
        eyebrow="What's Covered"
        title="Every bathroom cleaning includes"
      >
        <Card className="mx-auto max-w-2xl">
          <ul className="flex flex-col gap-4">
            {BATHROOM_CLEANING_COVERED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="font-body text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section
        id="not-included"
        background="surface"
        eyebrow="Good to know"
        title="What's not included"
        subtitle="We're upfront about scope so there are no surprises on the day of your cleaning."
      >
        <Card className="mx-auto max-w-2xl">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BATHROOM_CLEANING_NOT_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <X size={16} className="mt-0.5 shrink-0 text-muted" />
                <span className="font-body text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <BookNowCta
        title="Ready for a spotless bathroom?"
        subtitle="Book in under 2 minutes, or call us directly if you'd rather talk it through first."
        bookingHref={BATHROOM_CLEANING.formUrl}
      />
    </>
  );
}
