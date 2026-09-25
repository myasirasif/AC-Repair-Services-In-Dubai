import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

// Floating WhatsApp button (desktop) + sticky Call / WhatsApp bar (mobile).
export function ContactDock() {
  return (
    <>
      <a
        href={siteConfig.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 md:grid"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" aria-hidden="true" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a href={siteConfig.phone.href} className="btn-action h-12 text-base">
          <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
        </a>
        <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn-whatsapp h-12 text-base">
          <WhatsAppIcon /> WhatsApp
        </a>
      </div>
    </>
  );
}
