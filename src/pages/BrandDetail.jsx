import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { BRANDS, SERVICES, TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) return <Navigate to="/brands" replace />;

  return (
    <>
      <HeroBanner
        compact
        eyebrow={`${brand.name} GPS Support`}
        title={`${brand.name} Update, Install & Troubleshooting`}
        subtitle={`Certified US-based technicians dedicated to ${brand.name} devices. Toll-free service, 24/7.`}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#0052FF] font-bold">About {brand.name} support</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#0A2540]">
              Specialised {brand.name} engineers — one toll-free call away.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">{brand.description}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether your {brand.name} unit is failing to update, missing voice prompts, dropping signal or refusing
              to activate a lifetime subscription, our team has resolved it thousands of times for US drivers, fleets
              and families.
            </p>

            <h3 className="mt-12 font-display text-xl font-semibold text-[#0A2540]">{brand.name} services we provide</h3>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <li key={s.title} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#0052FF] mt-1 shrink-0" />
                  <span>{s.title} for {brand.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 self-start bg-[#0A2540] text-white p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-blue-300 font-bold">Toll-Free 24/7</p>
            <p className="mt-3 text-sm text-slate-300">Speak with a certified {brand.name} technician right now.</p>
            <a
              href={TOLL_FREE_HREF}
              data-testid={`brand-detail-call-${brand.slug}`}
              className="mt-6 flex items-center justify-center gap-3 bg-[#0052FF] hover:bg-[#0040CC] text-white px-6 py-5 font-bold text-2xl btn-pulse"
            >
              <Phone className="h-5 w-5" /> {TOLL_FREE_DISPLAY}
            </a>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300 mt-0.5" /> No call centers</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300 mt-0.5" /> No upselling</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300 mt-0.5" /> Verified working before we hang up</li>
            </ul>
          </aside>
        </div>

        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200 pt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-slate-500 uppercase tracking-[0.2em] font-bold">Other brands we service</p>
            <div className="flex flex-wrap gap-3">
              {BRANDS.filter((b) => b.slug !== brand.slug).map((b) => (
                <Link
                  key={b.slug}
                  to={`/brands/${b.slug}`}
                  data-testid={`other-brand-${b.slug}`}
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0052FF] hover:text-[#0052FF] px-4 py-2 text-sm font-semibold transition-colors"
                >
                  {b.name} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
