import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE, CONTACT, NAV_LINKS, FOOTER_LINKS } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt={`${SITE.name} logo`}
                className="h-9 w-9 rounded-full"
                width={36}
                height={36}
              />
              <span className="font-heading text-lg font-semibold text-ink">
                {SITE.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-muted">
              {SITE.tagline} Trained, background-checked professionals bringing
              premium home deep cleaning to {SITE.city}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-ink">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-ink">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-muted">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <a href={CONTACT.phoneHref} className="hover:text-primary">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{SITE.city}, Karnataka</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{CONTACT.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="font-body text-xs text-muted">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-body text-xs text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
