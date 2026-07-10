import type { Benefit } from "@/types";
import { Card } from "@/components/ui/Card";

export function FeatureCard({ icon: Icon, title, description }: Benefit) {
  return (
    <Card hoverLift className="h-full">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-muted">
        {description}
      </p>
    </Card>
  );
}
