import { Container } from "@/components/ui/Container";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";
import { CONTACT } from "@/config/site";

export function Component() {
  useDocumentMeta(PAGE_META.termsAndConditions);

  return (
    <Container className="max-w-3xl py-16 md:py-20">
      <h1 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 font-body text-sm text-muted">
        Last updated: July 2026
      </p>

      <div className="mt-8 flex flex-col gap-8 font-body text-sm leading-relaxed text-ink">
        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By using this website or booking a service through
            MyHouseAssist, you agree to these Terms &amp; Conditions. If you
            don't agree, please don't use our website or services.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            2. Our Service
          </h2>
          <p className="mt-2">
            MyHouseAssist currently offers one service: home deep cleaning
            in serviceable areas of Bangalore. The scope of what's included
            is described on our Home Deep Cleaning page and may be updated
            from time to time.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            3. Booking
          </h2>
          <p className="mt-2">
            Bookings are made through our Google Form. Submitting the form is
            a request for service, not a guaranteed confirmation — our team
            will call you to confirm your slot, final scope, and any
            applicable pricing adjustments based on your home's condition.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            4. Pricing &amp; Payment
          </h2>
          <p className="mt-2">
            Prices listed on our Pricing page are starting rates for
            standard home sizes and may vary based on home condition or
            add-ons confirmed on your booking call. Payment is collected
            directly by the cleaning team after the job is completed.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            5. Rescheduling &amp; Cancellation
          </h2>
          <p className="mt-2">
            You may reschedule or cancel a booking free of charge by
            contacting us a reasonable time before your scheduled slot (see
            our FAQ for current notice requirements). Late cancellations may
            affect our ability to offer that slot to another customer.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            6. Satisfaction Guarantee
          </h2>
          <p className="mt-2">
            If you're not satisfied with any part of the cleaning, let us
            know within 24 hours and we'll send the team back to redo the
            affected area at no extra cost.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            7. Your Responsibilities
          </h2>
          <p className="mt-2">
            Please ensure water and electricity are available at the time of
            service, provide accurate address and access details, and secure
            valuables and fragile items before the team arrives. Heavy
            furniture and appliances are cleaned around, not moved.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            8. Limitation of Liability
          </h2>
          <p className="mt-2">
            While our team takes reasonable care, MyHouseAssist is not liable
            for pre-existing damage, wear and tear, or issues arising from
            items not disclosed or secured prior to the service. Please
            report any concerns within 24 hours so we can address them.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            9. Governing Law
          </h2>
          <p className="mt-2">
            These terms are governed by the laws of India, with courts in
            Bangalore, Karnataka having jurisdiction over any disputes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            10. Changes to These Terms
          </h2>
          <p className="mt-2">
            We may update these terms from time to time. Continued use of
            our website or services after changes means you accept the
            updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-ink">
            11. Contact Us
          </h2>
          <p className="mt-2">
            Questions about these terms? Reach us at{" "}
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
