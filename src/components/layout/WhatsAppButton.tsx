import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/config/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
