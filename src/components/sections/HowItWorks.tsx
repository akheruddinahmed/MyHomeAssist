import { MousePointerClick, PhoneCall, Users, SprayCan } from "lucide-react";
import { Section } from "@/components/ui/Section";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "Book Online",
    description:
      "Pick your home size and a preferred slot — takes less than 2 minutes.",
  },
  {
    icon: PhoneCall,
    title: "Confirmation Call",
    description:
      "Our team calls to confirm your address, timing, and any special requests.",
  },
  {
    icon: Users,
    title: "Cleaning Team Arrives",
    description:
      "A verified, background-checked team arrives fully equipped, on time.",
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning Completed",
    description:
      "Every room is checked against our cleaning checklist before we call it done.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      background="surface"
      eyebrow="Process"
      title="How It Works"
      subtitle="From booking to a spotless home in four simple steps."
    >
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {/* Connecting line behind the step circles, desktop only */}
        <div
          aria-hidden
          className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-border md:block"
        />

        {STEPS.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
              <step.icon size={22} />
            </div>
            <span className="mt-4 font-heading text-xs font-semibold uppercase tracking-wide text-primary-hover">
              Step {index + 1}
            </span>
            <h3 className="mt-1 font-heading text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[220px] font-body text-sm text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
