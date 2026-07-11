import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CONTACT } from "@/config/site";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: CONTACT.whatsappHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
          <Card key={label} hoverLift className="min-w-0">
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex min-w-0 flex-col items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={19} />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-muted">
                  {label}
                </p>
                <p className="mt-1 break-words font-body text-sm font-medium text-ink">
                  {value}
                </p>
              </div>
            </a>
          </Card>
        ))}
      </div>

      <Card className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Clock size={19} />
        </span>
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-wide text-muted">
            Working Hours
          </p>
          <p className="mt-1 font-body text-sm font-medium text-ink">
            {CONTACT.workingHours}
          </p>
        </div>
      </Card>

      <div className="overflow-hidden rounded-2xl border border-border">
        <iframe
          title="MyHouseAssist service area map"
          src={CONTACT.mapsEmbedUrl}
          width="100%"
          height="280"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </div>
    </div>
  );
}
