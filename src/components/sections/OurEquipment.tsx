import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { EQUIPMENT } from "@/data/equipment";

export function OurEquipment() {
  return (
    <Section
      id="our-equipment"
      background="surface"
      eyebrow="Right Tools, Better Cleaning"
      title="The equipment our team brings"
      subtitle="Professional-grade tools, not just a rag and a bucket."
    >
      <Card className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {EQUIPMENT.map(({ id, icon: Icon, title }) => (
            <div key={id} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={19} />
              </span>
              <span className="font-body text-xs text-ink">{title}</span>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
