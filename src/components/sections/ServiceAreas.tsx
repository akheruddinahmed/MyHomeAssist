import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SERVICE_AREAS } from "@/config/site";

export function ServiceAreas() {
  return (
    <Section
      id="service-areas"
      eyebrow="Coverage"
      title="Areas we serve in Bangalore"
      subtitle="Currently live across these localities — more added as we grow."
    >
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        {SERVICE_AREAS.map((area) => (
          <span
            key={area}
            className="flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 font-body text-sm text-ink"
          >
            <MapPin size={14} className="text-primary" />
            {area}
          </span>
        ))}
      </div>
    </Section>
  );
}
