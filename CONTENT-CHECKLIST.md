# MyHouseAssist — Real Content Checklist

Work through this whenever you have each piece ready. Every item says
exactly which file to edit.

---

## 1. Google Form (booking)

Create a Google Form with these fields, in this order, matching what the
site already tells customers to expect:

| Field | Type |
|---|---|
| Customer Name | Short answer, required |
| Phone Number | Short answer, required |
| Email | Short answer, required |
| House Type | Multiple choice: 1 BHK / 2 BHK / 3 BHK / 4 BHK+ |
| Address | Paragraph, required |
| Preferred Date | Date |
| Preferred Time | Time |
| Special Instructions | Paragraph, optional |

Once created: Google Forms → Send → Link icon → copy the `https://forms.gle/...` short link.

**Paste it here:** `src/config/site.ts` → `BOOKING_FORM_URL`

---

## 2. Contact Info

**Edit:** `src/config/site.ts` → the `CONTACT` object

- `phoneDisplay` — how it looks on the page, e.g. `"+91 98765 43210"`
- `phoneHref` — the `tel:` link, e.g. `"tel:+919876543210"` (no spaces)
- `whatsappHref` — `"https://wa.me/919876543210"` (country code, no `+` or spaces)
- `email` — your real support email
- `workingHours` — e.g. `"Mon – Sun, 8:00 AM – 8:00 PM"`

**Also update these same values by hand in `index.html`** (the static
`LocalBusiness` JSON-LD block) — that file doesn't read from the config.

---

## 3. Photos

Three separate needs, different specs:

**a) Before/After gallery** (`src/components/sections/Gallery.tsx`)
Currently uses icon illustrations, not photos, since there were none yet.
To switch to real photos: replace the icon-based "After" and "Before" layers
in `BeforeAfterCard` with two `<img>` tags (same room, before cleaning /
after cleaning), keeping the existing clip-path reveal logic. Recommended:
1200×900px, JPG, compressed under ~200KB each.

**b) Social preview image** (`public/og-image.png`)
Already exists as a placeholder at the correct size. Replace with real
branded artwork — 1200×630px exactly, JPG or PNG, under ~300KB. This is
what shows up when your link is shared on WhatsApp/social media.

**c) Team/about photos** (optional)
Not currently used anywhere. If you want them on the About page, let me
know and I'll add an image section there.

---

## 4. Reviews

**Only use real feedback you've actually collected, with the customer's permission.** Don't paraphrase a WhatsApp compliment into a 5-star quote without asking first — a quick "mind if I use that as a review on our site?" is enough.

**Edit:** `src/data/reviews.ts` — replace the sample entries with this shape:

```ts
{
  id: "unique-id",
  name: "First name, last initial", // e.g. "Priya S." — avoid full names for privacy unless they're fine with it
  area: "Their locality", // e.g. "HSR Layout"
  rating: 5, // 1-5
  quote: "Their actual words, lightly cleaned up for typos only.",
}
```

---

## 5. Google Maps Embed

1. Open Google Maps → search your service area or business location
2. Share → Embed a map → copy the `src="..."` URL from the `<iframe>` code
   (just the URL, not the whole iframe tag)

**Paste it here:** `src/config/site.ts` → `CONTACT.mapsEmbedUrl`

---

## Quick reference: where everything lives

| Content | File |
|---|---|
| Booking form, phone, WhatsApp, email, hours, maps | `src/config/site.ts` |
| Domain, OG image path | `src/config/site.ts` (`SITE_URL`) + `src/config/seo.ts` |
| Reviews | `src/data/reviews.ts` |
| Gallery photos | `src/components/sections/Gallery.tsx` |
| OG image file | `public/og-image.png` |
| Static tags (must match config by hand) | `index.html` |
