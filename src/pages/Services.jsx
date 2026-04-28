import React from "react";
import {
  Map, Cpu, Wrench, Settings2, Infinity as InfinityIcon, ShieldAlert,
  Mic, Headphones, Phone, CheckCircle2,
} from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { SERVICES, TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

const ICONS = { Map, Cpu, Wrench, Settings2, Infinity: InfinityIcon, ShieldAlert, Mic, Headphones };

const DETAILS = {
  "GPS Map Update": [
    "Latest US, Canada and Mexico map releases",
    "Safety camera & POI database refresh",
    "Verified rollback safety before any flash",
  ],
  "GPS Software Update": [
    "Firmware patching and OS upgrades",
    "Bug-fix releases verified by technicians",
    "Boot loop and update-failure recovery",
  ],
  "GPS Installation": [
    "Mount, wiring & vehicle integration",
    "First-time configuration & user training",
    "Same-day setup over toll-free line",
  ],
  "GPS Setup & Configuration": [
    "Voice, language and unit preferences",
    "Home, work and saved POIs imported",
    "Bluetooth and smartphone pairing",
  ],
  "Lifetime Subscription": [
    "Activation, transfer and recovery",
    "Account and serial reconciliation",
    "Yearly map cycle reminders",
  ],
  "Troubleshooting": [
    "No signal, frozen and black screens",
    "Corrupted map and update loops",
    "Battery, USB and connection issues",
  ],
  "Voice Update": [
    "Premium voices & language packs",
    "Speech engine refresh on supported units",
    "Custom name pronunciation tuning",
  ],
  "24/7 Customer Support": [
    "US-based certified technicians",
    "Direct toll-free line — no menus",
    "Follow-up & ticket continuity",
  ],
};

export default function Services() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="GPS Services"
        title="Complete GPS Service Catalog"
        subtitle="Every update, install and fix you need for Garmin, TomTom, Magellan, Rand McNally and more — handled by US-based certified technicians."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] || Map;
            return (
              <div
                key={s.title}
                data-testid={`service-detail-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="bg-white p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 bg-[#0052FF]/5 border border-[#0052FF]/20 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-[#0052FF]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-2xl text-[#0A2540]">{s.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <ul className="mt-6 pl-[76px] space-y-2">
                  {(DETAILS[s.title] || []).map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-[#0052FF] mt-0.5 shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href={TOLL_FREE_HREF}
            data-testid="services-page-call-cta"
            className="inline-flex items-center gap-3 bg-[#0052FF] hover:bg-[#0040CC] text-white px-10 py-5 font-bold text-xl btn-pulse"
          >
            <Phone className="h-5 w-5" /> Talk to a technician — {TOLL_FREE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
