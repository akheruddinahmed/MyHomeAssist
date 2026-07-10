import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { BENEFITS } from "@/data/benefits";

export function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      background="surface"
      eyebrow="Why MyHouseAssist"
      title="Cleaning you don't have to double-check"
      subtitle="Every booking runs on the same standard — verified people, honest pricing, and products that are safe for your household."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <FeatureCard {...benefit} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
