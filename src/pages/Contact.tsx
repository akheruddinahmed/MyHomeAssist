import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { BookNowCta } from "@/components/sections/BookNowCta";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";

export function Component() {
  useDocumentMeta(PAGE_META.contact);

  return (
    <>
      <Container className="pt-16 text-center md:pt-20">
        <span className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Get In Touch
        </span>
        <h1 className="mt-2 font-heading text-4xl font-semibold text-ink md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-muted">
          Questions before you book? Reach us directly, or send a message
          below.
        </p>
      </Container>

      <Section id="contact">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ContactInfo />
          <Card>
            <h2 className="font-heading text-lg font-semibold text-ink">
              Send us a message
            </h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </Card>
        </div>
      </Section>

      <BookNowCta />
    </>
  );
}
