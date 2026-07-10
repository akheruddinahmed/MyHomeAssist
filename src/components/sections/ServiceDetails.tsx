import { Section } from "@/components/ui/Section";
import { RoomAccordion } from "@/components/ui/RoomAccordion";
import { ROOM_CHECKLIST, CHECKLIST_ADD_ON_NOTE } from "@/data/roomChecklist";

export function ServiceDetails() {
  return (
    <Section
      id="service-details"
      eyebrow="The Checklist"
      title="Room-by-room, here's exactly what we clean"
      subtitle="Tap a room to see the full task list our team follows on every visit."
    >
      <RoomAccordion rooms={ROOM_CHECKLIST} />
      <p className="mx-auto mt-6 max-w-3xl text-center font-body text-sm text-muted">
        {CHECKLIST_ADD_ON_NOTE}
      </p>
    </Section>
  );
}
