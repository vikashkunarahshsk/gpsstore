import React from "react";
import { ShieldCheck, MapPin, Users, Award, Phone } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { TRUST_STATS, TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

export default function About() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="About Altitude GPS Store"
        title="A US-based GPS service team you can actually reach."
        subtitle="No call centers. No offshore queues. Just certified technicians, available 24/7 over a single toll-free line."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#0052FF] font-bold">Our Mission</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540]">
              GPS service done the way American drivers expect.
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Altitude GPS Store was founded on a simple idea: when your GPS stops working, you should be able to call
              one number, reach a real US-based engineer, and have it fixed before you hang up.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Today, we provide map updates, software flashes, full installations, lifetime subscription recovery and
              everything in between for Garmin, TomTom, Magellan, Rand McNally and most major US GPS brands. Our team
              is certified, our phone line is dedicated, and our service is uncompromising.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/3683938/pexels-photo-3683938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Modern GPS dashboard inside a luxury vehicle"
            className="w-full h-[480px] object-cover"
          />
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left border-l-0 md:border-l-2 md:border-[#0052FF] md:pl-6">
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#0A2540]">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {[
            { icon: ShieldCheck, title: "Certified", body: "Trained on Garmin, TomTom, Magellan and Rand McNally device families." },
            { icon: MapPin, title: "USA Only", body: "Service exclusively for customers and devices located in the United States." },
            { icon: Users, title: "Real People", body: "Direct toll-free line to a US-based human technician — no menus, no offshore." },
            { icon: Award, title: "Verified", body: "Every job is tested working on the customer's device before the call ends." },
          ].map((v) => (
            <div key={v.title} className="bg-white p-8">
              <div className="h-12 w-12 bg-[#0052FF]/5 border border-[#0052FF]/20 flex items-center justify-center">
                <v.icon className="h-5 w-5 text-[#0052FF]" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-display font-semibold text-lg text-[#0A2540]">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-blue-300 font-bold">Speak with our team</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            One number. One call. One fix.
          </h2>
          <a
            href={TOLL_FREE_HREF}
            data-testid="about-call-cta"
            className="mt-10 inline-flex items-center gap-4 bg-[#0052FF] hover:bg-[#0040CC] px-10 py-5 font-bold text-2xl sm:text-3xl btn-pulse"
          >
            <Phone className="h-6 w-6" /> {TOLL_FREE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
