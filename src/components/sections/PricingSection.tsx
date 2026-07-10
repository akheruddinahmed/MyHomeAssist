import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { PricingCard } from "@/components/ui/PricingCard";
import { PRICING_PLANS } from "@/data/pricing";

type PricingSectionProps = {
  /** Home page nests this inside its own section rhythm; the dedicated
   * /pricing page renders it as the page's main content instead. */
  showEyebrow?: boolean;
};

export function PricingSection({ showEyebrow = true }: PricingSectionProps) {
  return (
    <Section
      id="pricing"
      eyebrow={showEyebrow ? "Pricing" : undefined}
      title="Simple, honest pricing"
      subtitle="Priced by home size, not by the hour — so you know the exact cost before you book."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="h-full"
          >
            <PricingCard {...plan} />
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center font-body text-sm text-muted">
        Prices shown are starting rates for standard deep cleaning and may
        vary based on home condition and add-ons confirmed on your
        confirmation call.
      </p>
    </Section>
  );
}
