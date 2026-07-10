import { X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { NOT_INCLUDED } from "@/data/roomChecklist";

export function NotIncluded() {
  return (
    <Section
      id="not-included"
      background="surface"
      eyebrow="Good to know"
      title="What's not included"
      subtitle="We're upfront about scope so there are no surprises on the day of your cleaning."
    >
      <Card className="mx-auto max-w-3xl">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {NOT_INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <X size={16} className="mt-0.5 shrink-0 text-muted" />
              <span className="font-body text-sm text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
