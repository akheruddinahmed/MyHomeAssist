import { Sofa, Bed, UtensilsCrossed, Bath, Wind } from "lucide-react";
import type { RoomChecklist } from "@/types";

export const ROOM_CHECKLIST: RoomChecklist[] = [
  {
    id: "living-room",
    room: "Living Room",
    icon: Sofa,
    tasks: [
      "Dust and wipe all furniture surfaces",
      "Vacuum and spot-clean upholstery (sofas, cushions)",
      "Motorized scrub and mop of the floor",
      "Clean ceiling fan blades, inside and out",
      "Wipe switchboards and fixtures",
      "Clean glass doors, windows, and mirrors",
      "Remove cobwebs from corners and ceiling",
      "Clean window sills and ledges (inside)",
    ],
  },
  {
    id: "bedroom",
    room: "Bedroom",
    icon: Bed,
    tasks: [
      "Dust and wipe all furniture, including wardrobe exteriors",
      "Wipe down wardrobe interior shelves (contents not rearranged)",
      "Motorized scrub and mop of the floor",
      "Clean ceiling fan blades, inside and out",
      "Clean windows, mirrors, and switchboards",
      "Remove cobwebs from corners and ceiling",
      "Dust bed frame and headboard",
    ],
  },
  {
    id: "kitchen",
    room: "Kitchen",
    icon: UtensilsCrossed,
    tasks: [
      "Degrease and wipe countertops",
      "Clean stovetop and burners",
      "Wipe cabinet exteriors and interiors, and handles",
      "Clean sink, taps, and drainboard",
      "Wipe exhaust fan exterior",
      "Clean tile backsplash",
      "Wipe exteriors of microwave, refrigerator, and chimney",
      "Motorized scrub and mop of the floor",
    ],
  },
  {
    id: "bathroom",
    room: "Bathroom",
    icon: Bath,
    tasks: [
      "Scrub tiles and grout with a motorized floor scrubber",
      "Sanitize toilet, seat, and flush area",
      "Clean and polish wash basin and fittings",
      "Descale showerhead and taps",
      "Wipe mirrors and glass surfaces",
      "Remove soap scum and water stains",
      "Mop the floor",
    ],
  },
  {
    id: "balcony",
    room: "Balcony & Terrace",
    icon: Wind,
    tasks: [
      "Sweep and mop the floor",
      "Wipe railing and grille",
      "Remove cobwebs",
      "Wipe window frames (inside-facing)",
    ],
  },
];

export const NOT_INCLUDED: string[] = [
  "Exterior building facade or outside-only-accessible windows",
  "Pest control or fumigation",
  "Repair, maintenance, or painting work",
  "Moving heavy furniture or large appliances",
  "Laundry, dishwashing, or ironing",
  "Wall touch-ups or wallpaper cleaning",
];

// Shown as a callout near the checklist — some items are exterior-wipe-only
// by default and become a fuller clean only if selected as an add-on.
export const CHECKLIST_ADD_ON_NOTE =
  "Sofa & mattress dry cleaning, and deep interior cleaning of the microwave, refrigerator, or chimney, are available as add-ons — select them when booking if you'd like them included.";
