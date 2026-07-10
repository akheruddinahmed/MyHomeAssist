import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Sofa, UtensilsCrossed, Bath, Bed, MoveHorizontal } from "lucide-react";
import { Section } from "@/components/ui/Section";

const ROOMS: { label: string; icon: LucideIcon }[] = [
  { label: "Living Room", icon: Sofa },
  { label: "Kitchen", icon: UtensilsCrossed },
  { label: "Bathroom", icon: Bath },
  { label: "Bedroom", icon: Bed },
];

type BeforeAfterCardProps = {
  label: string;
  icon: LucideIcon;
};

/**
 * Drag-to-compare card. Both layers are full-size and absolutely positioned;
 * only the "before" layer's clip-path changes on drag, so nothing shifts or
 * rescales as the slider moves — just reveals/hides.
 *
 * NOTE: these are stylized icon illustrations, not real customer photos —
 * intentional, since there are no real before/after jobs to show yet. Once
 * you have real photos, replace the two layers below with <img> elements
 * and this component's interaction model stays the same.
 */
function BeforeAfterCard({ label, icon: Icon }: BeforeAfterCardProps) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
      {/* After layer (full, underneath) — icon only, no label here */}
      <div className="absolute inset-0 flex items-center justify-center bg-white">
        <Icon size={44} strokeWidth={1.5} className="text-primary" />
      </div>

      {/* Before layer (clipped by drag position) — icon only, no label here */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-gray-100"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Icon size={44} strokeWidth={1.5} className="text-gray-400" />
      </div>

      {/* Fixed corner badges — sit above both layers, never clipped, so they
          can never collide with each other regardless of slider position */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white px-3 py-1 font-heading text-xs font-semibold text-gray-500 shadow-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary/10 px-3 py-1 font-heading text-xs font-semibold text-primary-hover shadow-sm">
        After
      </span>

      {/* Divider + grip, purely decorative */}
      <div
        aria-hidden
        className="absolute inset-y-0 w-0.5 bg-white shadow-md"
        style={{ left: `${value}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md">
          <MoveHorizontal size={16} />
        </div>
      </div>

      {/* Real interaction: an accessible native range input, invisible but functional */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label={`Drag to compare before and after cleaning in the ${label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />

      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 font-body text-xs font-medium text-ink backdrop-blur">
        {label}
      </span>
    </div>
  );
}

export function Gallery() {
  return (
    <Section
      id="gallery"
      background="surface"
      eyebrow="Gallery"
      title="See the difference"
      subtitle="Drag the slider to compare — every room gets the same deep-clean standard."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ROOMS.map((room) => (
          <BeforeAfterCard key={room.label} {...room} />
        ))}
      </div>
    </Section>
  );
}
