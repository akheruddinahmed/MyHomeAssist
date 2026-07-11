import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Leaf,
  BadgeCheck,
  Sofa,
  UtensilsCrossed,
  Bed,
  Bath,
  Wind,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BOOKING_FORM_URL } from "@/config/site";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Verified Professionals" },
  { icon: UserCheck, label: "Background Checked" },
  { icon: Leaf, label: "Eco-Friendly Products" },
  { icon: BadgeCheck, label: "100% Satisfaction Guarantee" },
];

const CHECKLIST_ROOMS = [
  { icon: Sofa, label: "Living Room" },
  { icon: UtensilsCrossed, label: "Kitchen" },
  { icon: Bed, label: "Bedroom" },
  { icon: Bath, label: "Bathroom" },
  { icon: Wind, label: "Balcony" },
];

// Stagger the checklist rows so each checkmark "ticks" in sequence on load —
// this is the hero's signature element: it dramatizes the systematic,
// transparent process rather than showing a generic stock photo.
const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const checkVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.25, type: "spring" as const, stiffness: 400, damping: 20 },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl font-semibold leading-tight text-ink md:text-5xl"
          >
            Professional Home Deep Cleaning in Bangalore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-lg font-body text-lg text-muted"
          >
            Experience premium home deep cleaning with trained professionals,
            eco-friendly products, and transparent pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href={BOOKING_FORM_URL} size="lg">
              Book Now
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View Pricing
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 font-body text-sm text-muted"
              >
                <Icon size={16} className="shrink-0 text-primary" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: signature checklist mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Soft gradient blob behind the card for depth */}
          <div
            aria-hidden
            className="absolute -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl md:h-96 md:w-96"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full max-w-sm rounded-2xl border border-border bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="font-heading text-sm font-semibold text-ink">
                  2 BHK · HSR Layout
                </p>
                <p className="font-body text-xs text-muted">Today · 2:00 PM</p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="mt-4 flex flex-col gap-3"
            >
              {CHECKLIST_ROOMS.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={rowVariants}
                  className="flex items-center justify-between rounded-lg bg-surface px-3 py-2.5"
                >
                  <span className="flex items-center gap-2.5 font-body text-sm text-ink">
                    <Icon size={17} className="text-muted" />
                    {label}
                  </span>
                  <motion.span
                    variants={checkVariants}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white"
                  >
                    <Check size={12} strokeWidth={3} />
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <span className="font-body text-xs text-muted">
                Deep cleaning checklist
              </span>
              <span className="font-heading text-xs font-semibold text-primary-hover">
                5 / 5 complete
              </span>
            </div>
          </motion.div>

          {/* Floating badge — sits above the card's top edge, not to its
              side, so it never depends on extra horizontal space that
              doesn't exist once the card goes full-width on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 300, damping: 18 }}
            className="absolute -top-4 left-4 flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 shadow-md md:left-6"
          >
            <ShieldCheck size={14} className="text-primary" />
            <span className="font-heading text-xs font-semibold text-ink">
              ID-Verified Team
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
