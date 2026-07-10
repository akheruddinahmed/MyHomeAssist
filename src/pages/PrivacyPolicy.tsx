import { Container } from "@/components/ui/Container";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";
import { CONTACT } from "@/config/site";

export function Component() {
  useDocumentMeta(PAGE_META.privacyPolicy);

  return (
    <Container className="max-w-3xl py-16 md:py-20">
      <h1 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 font-body text-sm text-muted">
        Last updated: July 2026
      </p>

      <div className="mt-8 flex flex-col gap-8 font-body text-sm leading-relaxed text-ink">
        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            When you book a service through our Google Form, we collect the
            information you provide: your name, phone number, email address,
            home address, house type, preferred date and time, and any
            special instructions. We don't collect this information directly
            on this website — it's submitted through Google Forms and is
            subject to Google's own privacy practices as well as ours.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            2. How We Use Your Information
          </h2>
          <p className="mt-2">
            We use the information you provide solely to schedule and deliver
            your home cleaning service — this includes calling or messaging
            you to confirm booking details, sending your address to the
            assigned cleaning team, and following up about your experience.
            We do not sell your information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            3. Third-Party Services
          </h2>
          <p className="mt-2">
            Booking requests are collected via Google Forms, and support
            conversations may take place over WhatsApp or phone call. These
            third-party platforms have their own privacy policies governing
            how they handle your data, in addition to this policy.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            4. Cookies
          </h2>
          <p className="mt-2">
            This website itself does not use tracking or advertising cookies.
            Embedded third-party content (such as Google Fonts or a Google
            Maps embed) may set minimal technical cookies as part of their
            own service delivery.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            5. Data Retention
          </h2>
          <p className="mt-2">
            We retain booking information for as long as necessary to
            deliver the service and for a reasonable period afterward for
            support and record-keeping purposes, after which it is deleted or
            anonymized.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            6. Your Rights
          </h2>
          <p className="mt-2">
            You can request access to, correction of, or deletion of your
            personal information at any time by contacting us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            7. Children's Privacy
          </h2>
          <p className="mt-2">
            Our service is intended for adults booking home cleaning services
            and is not directed at children. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            8. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this policy from time to time. Changes will be
            posted on this page with an updated "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            9. Contact Us
          </h2>
          <p className="mt-2">
            Questions about this policy? Reach us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
              {CONTACT.email}
            </a>{" "}
            or {CONTACT.phoneDisplay}.
          </p>
        </section>
      </div>
    </Container>
  );
}
