import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { RoomChecklist } from "@/types";

type RoomAccordionProps = {
  rooms: RoomChecklist[];
};

export function RoomAccordion({ rooms }: RoomAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(rooms[0]?.id ?? null);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {rooms.map((room) => {
        const isOpen = openId === room.id;
        const Icon = room.icon;
        return (
          <div
            key={room.id}
            className="overflow-hidden rounded-2xl border border-border bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : room.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={19} />
                </span>
                <span className="font-heading text-base font-semibold text-ink">
                  {room.room}
                </span>
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col gap-2.5 border-t border-border px-5 py-4">
                    {room.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span className="font-body text-sm text-ink">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
