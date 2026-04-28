import React from "react";
import { Phone } from "lucide-react";
import { TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

export const FloatingCall = () => {
  return (
    <a
      data-testid="floating-call-cta"
      href={TOLL_FREE_HREF}
      aria-label={`Call toll free ${TOLL_FREE_DISPLAY}`}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-3 bg-[#0052FF] hover:bg-[#0040CC] text-white py-4 font-bold tracking-wide shadow-2xl btn-pulse safe-bottom"
    >
      <Phone className="h-5 w-5" strokeWidth={2.4} />
      <span className="text-sm uppercase tracking-[0.18em] opacity-80">Toll Free</span>
      <span className="text-lg">{TOLL_FREE_DISPLAY}</span>
    </a>
  );
};
