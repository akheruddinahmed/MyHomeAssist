import { Disc, Wind, Brush, Layers, Leaf, Sparkles, Droplets, Feather } from "lucide-react";
import type { Benefit } from "@/types";

/**
 * Generic tool/equipment categories — deliberately not naming specific
 * commercial product brands (cleaning solution brands, etc.), since that
 * wasn't something to assume from a reference image. If you use specific
 * branded products and want them named here, just tell me which ones.
 */
export const EQUIPMENT: Omit<Benefit, "description">[] = [
  { id: "floor-scrubber", icon: Disc, title: "Floor Scrubbing Machine" },
  { id: "vacuum", icon: Wind, title: "Wet & Dry Vacuum Cleaner" },
  { id: "hand-scrubber", icon: Brush, title: "Hand Scrubber" },
  { id: "microfibre", icon: Layers, title: "Microfibre Cloths" },
  { id: "eco-solutions", icon: Leaf, title: "Eco-Friendly Cleaning Solutions" },
  { id: "grout-brushes", icon: Sparkles, title: "Grout Brushes" },
  { id: "wiper", icon: Droplets, title: "Squeegee Wiper" },
  { id: "duster", icon: Feather, title: "Extendable Dusting Brush" },
];
