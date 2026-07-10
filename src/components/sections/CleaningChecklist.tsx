import { Link } from "react-router-dom";
import {
  Sofa,
  Bed,
  UtensilsCrossed,
  Bath,
  Wind,
  Layers,
  Fan,
  AppWindow,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const CHECKLIST_ITEMS = [
  { icon: Sofa, label: "Living Room" },
  { icon: Bed, label: "Bedroom" },
  { icon: UtensilsCrossed, label: "Kitchen" },
  { icon: Bath, label: "Bathroom" },
  { icon: Wind, label: "Balcony" },
  { icon: Layers, label: "Floor" },
  { icon: Fan, label: "Fans" },
  { icon: AppWindow, label: "Windows (Inside)" },
  { icon: Sparkles, label: "Dust Removal" },
];

export function CleaningChecklist() {
  return (
    <Section
      id="cleaning-checklist"
      eyebrow="Checklist"
      title="What's included"
      subtitle="Every deep cleaning covers these areas — no shortcuts, no upsells for the basics."
    >
      <Card className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          {CHECKLIST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={17} />
              </span>
              <span className="font-body text-sm text-ink">{label}</span>
            </div>
          ))}
        </div>
      </Card>

      <p className="mt-6 text-center">
        <Link
          to="/home-deep-cleaning"
          className="font-body text-sm font-medium text-primary-hover hover:underline"
        >
          See the full deep cleaning checklist →
        </Link>
      </p>
    </Section>
  );
}
