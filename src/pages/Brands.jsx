import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { BRANDS, TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

export default function Brands() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="GPS Brands We Service"
        title="Every Major US GPS Brand. One Toll-Free Line."
        subtitle="Garmin, TomTom, Magellan, Rand McNally and more — supported by certified US-based technicians, around the clock."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {BRANDS.map((b) => (
              <div key={b.slug} data-testid={`brand-block-${b.slug}`} className="bg-white p-10 lg:p-14">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#0052FF] font-bold">Brand Support</p>
                <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-[#0A2540]">{b.name}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed max-w-md">{b.description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={TOLL_FREE_HREF}
                    data-testid={`brand-${b.slug}-call`}
                    className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0040CC] text-white px-6 py-3 font-semibold transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Call {TOLL_FREE_DISPLAY}
                  </a>
                  <Link
                    to={`/brands/${b.slug}`}
                    data-testid={`brand-${b.slug}-detail`}
                    className="inline-flex items-center gap-2 border-2 border-[#0052FF] text-[#0052FF] hover:bg-blue-50 px-6 py-3 font-semibold transition-colors"
                  >
                    {b.name} support details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
