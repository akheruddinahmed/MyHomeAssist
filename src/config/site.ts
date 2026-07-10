/**
 * Central site configuration.
 *
 * Any text or link that might change (phone number, WhatsApp, the Google
 * Form URL, service areas) lives here — never hardcoded inside a component.
 * When you get your real Google Form link, this is the ONLY file to edit.
 */

export const SITE = {
  name: "MyHouseAssist",
  tagline: "Your Home. Our Responsibility.",
  city: "Bangalore",
  description:
    "Premium home deep cleaning in Bangalore with verified, background-checked professionals, eco-friendly products, and transparent pricing.",
} as const;

// Production domain — used for canonical URLs, Open Graph tags, and JSON-LD.
export const SITE_URL = "https://www.myhouseassist.com";

export const CONTACT = {
  phoneDisplay: "+91 70861 49793",
  phoneHref: "tel:+917086149793",
  whatsappHref: "https://wa.me/917086149793",
  email: "contact.myhouseassist@gmail.com",
  workingHours: "Mon – Sun, 7:00 AM – 9:00 PM",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248815.91022406868!2d77.45716014576104!3d12.98792508883164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1783679848835!5m2!1sen!2sin",
} as const;

export const BOOKING_FORM_URL = "https://forms.gle/sUTnwphMAucDw9Q99";

export type NavLink = {
  label: string;
  path: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Deep Cleaning", path: "/home-deep-cleaning" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "FAQ", path: "/faq" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
];

export const SERVICE_AREAS: string[] = [
  "Bellandur",
  "Marathahalli",
  "Whitefield",
  "Kadubeesanahalli",
  "HSR Layout",
  "Sarjapur Road",
  "Electronic City",
  "Mahadevapura",
  "Brookefield",
  "KR Puram",
];
