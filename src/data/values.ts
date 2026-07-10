import { Users, Eye, MapPin, ListChecks } from "lucide-react";
import type { Benefit } from "@/types";

export const VALUES: Benefit[] = [
  {
    id: "people-first",
    icon: Users,
    title: "People First",
    description:
      "We hire slowly and verify properly. Every professional on our team is someone we'd trust inside our own home.",
  },
  {
    id: "no-hidden-anything",
    icon: Eye,
    title: "No Hidden Anything",
    description:
      "Pricing, the cleaning checklist, and our process are all public on this site — before you ever pick up the phone.",
  },
  {
    id: "bangalore-done-right",
    icon: MapPin,
    title: "Bangalore, Done Right",
    description:
      "We're not trying to be everywhere at once. Serving Bangalore well comes before expanding anywhere else.",
  },
  {
    id: "checklist-not-chance",
    icon: ListChecks,
    title: "Checklist, Not Chance",
    description:
      "Every visit follows the same room-by-room checklist, so quality doesn't depend on which team happens to show up.",
  },
];
