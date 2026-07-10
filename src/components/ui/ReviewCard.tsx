import { Star } from "lucide-react";
import type { Review } from "@/types";
import { Card } from "@/components/ui/Card";

export function ReviewCard({ name, area, rating, quote }: Review) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={15}
              className={i < rating ? "text-primary" : "text-border"}
              fill="currentColor"
            />
          ))}
        </div>
        <span className="rounded-full bg-surface px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-wide text-muted">
          Sample
        </span>
      </div>

      <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink">
        "{quote}"
      </p>

      <div className="mt-5 border-t border-border pt-4">
        <p className="font-heading text-sm font-semibold text-ink">{name}</p>
        <p className="font-body text-xs text-muted">{area}</p>
      </div>
    </Card>
  );
}
