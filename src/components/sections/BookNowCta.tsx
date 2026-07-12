import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/config/site";

export function BookNowCta() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <Container className="flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
          Ready for a spotless home?
        </h2>
        <p className="mt-3 max-w-xl font-body text-white/90">
          Book your deep cleaning in under 2 minutes, or call us directly if
          you'd rather talk it through first.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Button to="/pricing" variant="secondary" size="lg">
            Book Now
          </Button>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 font-heading text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            <Phone size={16} />
            Call {CONTACT.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
