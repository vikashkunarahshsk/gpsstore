import React from "react";
import { Phone, ShieldCheck, MapPin, Clock } from "lucide-react";
import { TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

export const HeroBanner = ({
  eyebrow = "USA Toll-Free GPS Support",
  title = "Update, Install & Fix Your GPS — In One Call",
  subtitle = "Certified US-based technicians for Garmin, TomTom, Magellan, Rand McNally and more. Map updates, software flashes and lifetime subscription support — handled.",
  compact = false,
}) => {
  return (
    <section
      data-testid="hero-banner"
      className={`relative overflow-hidden bg-[#0A2540] ${compact ? "py-16 lg:py-24" : "py-24 lg:py-36"}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,37,64,0.92), rgba(10,37,64,0.95)), url('https://images.unsplash.com/photo-1604995078160-9ee913264957?crop=entropy&cs=srgb&fm=jpg&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-blue-300 font-bold">
          <span className="h-px w-8 bg-blue-300/60" />
          {eyebrow}
          <span className="h-px w-8 bg-blue-300/60" />
        </p>

        <h1 className={`mt-6 font-display font-bold tracking-tight text-white ${compact ? "text-3xl sm:text-4xl lg:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl"}`}>
          {title}
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
          {subtitle}
        </p>

        {/* Massive Toll-Free CTA — the eye catcher */}
        <div className="mt-10 inline-flex flex-col items-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-blue-300 font-bold mb-3">
            Call our experts now
          </p>
          <a
            data-testid="hero-call-cta"
            href={TOLL_FREE_HREF}
            className="group inline-flex items-center gap-4 bg-[#0052FF] hover:bg-[#0040CC] text-white px-8 sm:px-12 py-5 sm:py-6 transition-all hover:scale-[1.03] btn-pulse"
          >
            <span className="h-12 w-12 bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <Phone className="h-6 w-6" strokeWidth={2.4} />
            </span>
            <span className="flex flex-col items-start text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] opacity-80">Toll Free 24/7</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {TOLL_FREE_DISPLAY}
              </span>
            </span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-300" /> USA Only</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-blue-300" /> 24/7 Live Support</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-300" /> Certified Technicians</span>
        </div>
      </div>
    </section>
  );
};
