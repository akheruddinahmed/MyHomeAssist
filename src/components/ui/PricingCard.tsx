import { Check, Star } from "lucide-react";
import type { PricingPlan } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function PricingCard({
  label,
  price,
  formUrl,
  inclusions,
  featured,
  ctaLabel,
}: PricingPlan) {
  return (
    <Card
      hoverLift={!featured}
      className={`relative flex h-full flex-col ${
        featured ? "border-2 border-primary shadow-md" : ""
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 font-heading text-xs font-semibold text-white">
          <Star size={12} fill="currentColor" />
          Most Popular
        </span>
      )}

      <h3 className="font-heading text-xl font-semibold text-ink">{label}</h3>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-heading text-3xl font-semibold text-ink">
          ₹{price.toLocaleString("en-IN")}
        </span>
        <span className="font-body text-sm text-muted">/ visit</span>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check size={18} className="mt-0.5 shrink-0 text-primary" />
            <span className="font-body text-sm text-ink">{item}</span>
          </li>
        ))}
      </ul>

      <Button
        href={formUrl}
        variant={featured ? "primary" : "secondary"}
        size="md"
        className="mt-8 w-full"
      >
        {ctaLabel}
      </Button>
    </Card>
  );
}
