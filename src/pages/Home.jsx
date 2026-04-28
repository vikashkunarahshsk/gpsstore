import React from "react";
import { Link } from "react-router-dom";
import {
  Map, Cpu, Wrench, Settings2, Infinity as InfinityIcon, ShieldAlert,
  Mic, Headphones, Phone, ArrowRight, ShieldCheck, Star, Quote, CheckCircle2,
} from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import {
  SERVICES, BRANDS, TESTIMONIALS, TRUST_STATS, FAQS,
  TOLL_FREE_DISPLAY, TOLL_FREE_HREF,
} from "../lib/data";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const ICONS = { Map, Cpu, Wrench, Settings2, Infinity: InfinityIcon, ShieldAlert, Mic, Headphones };

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#0052FF] font-bold">
    <span className="h-px w-8 bg-[#0052FF]/40" /> {children}
  </p>
);

export default function Home() {
  return (
    <>
      <HeroBanner />

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_STATS.map((s) => (
            <div key={s.label} data-testid={`trust-stat-${s.label.toLowerCase().replace(/\s+/g, '-')}`} className="text-center md:text-left border-l-0 md:border-l-2 md:border-[#0052FF] md:pl-6">
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#0A2540]">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Our GPS Services</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540]">
              Every GPS service you'll ever need — under one toll-free roof.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              From map updates and firmware flashes to subscription recovery and full installations, our certified US team handles it all.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] || Map;
              return (
                <div
                  key={s.title}
                  data-testid={`service-card-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="bg-white p-8 hover:bg-[#F8FAFC] transition-colors group"
                >
                  <div className="h-12 w-12 bg-[#0052FF]/5 border border-[#0052FF]/20 flex items-center justify-center group-hover:bg-[#0052FF] transition-colors">
                    <Icon className="h-5 w-5 text-[#0052FF] group-hover:text-white transition-colors" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display font-semibold text-lg text-[#0A2540]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              data-testid="services-call-cta"
              href={TOLL_FREE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-[#0052FF] hover:bg-[#0040CC] text-white px-8 py-4 font-semibold transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {TOLL_FREE_DISPLAY}
            </a>
            <Link
              to="/services"
              data-testid="see-all-services-link"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#0052FF] text-[#0052FF] hover:bg-blue-50 px-8 py-4 font-semibold transition-colors"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-20 lg:py-28 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-blue-300 font-bold">
                <span className="h-px w-8 bg-blue-300/40" /> Brands We Service
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Garmin. TomTom. Magellan. Rand McNally.<br />
                <span className="text-blue-300">All under one toll-free line.</span>
              </h2>
            </div>
            <a href={TOLL_FREE_HREF} data-testid="brands-call-cta" className="inline-flex items-center gap-3 border border-white/20 hover:bg-white hover:text-[#0A2540] px-6 py-3 transition-colors text-sm font-semibold">
              <Phone className="h-4 w-4" /> {TOLL_FREE_DISPLAY}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                to={`/brands/${b.slug}`}
                data-testid={`brand-card-${b.slug}`}
                className="bg-[#0A2540] hover:bg-[#0F3360] p-8 lg:p-10 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <p className="font-display text-3xl lg:text-4xl font-bold text-white">{b.name}</p>
                  <p className="mt-3 text-sm text-blue-200/80 leading-relaxed max-w-md">{b.tagline}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-blue-300 group-hover:text-white text-xs uppercase tracking-[0.25em] font-bold">
                  Get {b.name} support <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540]">
              Three simple steps to get your GPS working again.
            </h2>
            <ul className="mt-10 space-y-8">
              {[
                { t: "Call our toll-free line", d: "Reach a US-based technician 24/7 over a single dedicated number — no hold music, no offshore call centers." },
                { t: "Diagnose remotely", d: "We confirm the issue, your device model and the cleanest path to resolution before any work begins." },
                { t: "Resolve & verify", d: "Updates installed, firmware flashed, subscriptions restored — and verified working before we hang up." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-5">
                  <div className="shrink-0 h-12 w-12 bg-[#0052FF] text-white font-display font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-[#0A2540]">{step.t}</h3>
                    <p className="mt-1 text-slate-600 leading-relaxed">{step.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7682204/pexels-photo-7682204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="US-based GPS technician supporting a customer over toll-free phone line"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white border border-slate-200 p-6 max-w-xs shadow-sm">
              <div className="flex items-center gap-2 text-[#0052FF] mb-2">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-xs uppercase tracking-[0.2em] font-bold">Verified US Team</p>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Every call is answered by a certified, US-based GPS technician. Always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>What Customers Say</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540]">
              Trusted by drivers, fleets and families across the United States.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} data-testid={`testimonial-${t.name.split(' ')[0].toLowerCase()}`} className="bg-white border border-slate-200 p-8 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-[#0052FF]/15" />
                <div className="flex gap-1 text-[#0052FF]">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 text-slate-700 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="font-display font-semibold text-[#0A2540]">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mt-1">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540]">
              Quick answers, before you call.
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-12 border-t border-slate-200">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200">
                <AccordionTrigger data-testid={`faq-trigger-${i}`} className="text-left font-display font-semibold text-[#0A2540] hover:text-[#0052FF] py-6 text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0052FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-blue-200 font-bold">Ready when you are</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get your GPS working — in one call.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-blue-100 leading-relaxed">
            US-based, certified, available 24/7. No call centers. No upsells. Just GPS service done right.
          </p>
          <a
            href={TOLL_FREE_HREF}
            data-testid="final-call-cta"
            className="mt-10 inline-flex items-center gap-4 bg-white text-[#0052FF] px-8 sm:px-12 py-5 sm:py-6 font-bold text-2xl sm:text-3xl hover:bg-blue-50 transition-colors"
          >
            <Phone className="h-7 w-7" /> {TOLL_FREE_DISPLAY}
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-blue-100">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> No hold times</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Certified technicians</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 100% USA support</span>
          </div>
        </div>
      </section>
    </>
  );
}
