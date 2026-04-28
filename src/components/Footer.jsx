import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";
import { TOLL_FREE_DISPLAY, TOLL_FREE_HREF, BRANDS, SERVICES } from "../lib/data";

export const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-slate-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-[#0052FF] flex items-center justify-center">
              <Navigation className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-white text-lg">Altitude</p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-blue-300 font-bold">GPS Store</p>
            </div>
          </Link>
          <p className="mt-6 text-sm leading-relaxed">
            Certified GPS update, installation and troubleshooting services for every major brand sold in the United States.
          </p>
          <a
            data-testid="footer-call-cta"
            href={TOLL_FREE_HREF}
            className="mt-6 inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0040CC] text-white font-semibold px-5 py-3 transition-colors"
          >
            <Phone className="h-4 w-4" /> {TOLL_FREE_DISPLAY}
          </a>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold uppercase tracking-[0.2em] text-xs mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link to="/services" className="hover:text-white transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold uppercase tracking-[0.2em] text-xs mb-5">Brands</h4>
          <ul className="space-y-3 text-sm">
            {BRANDS.map((b) => (
              <li key={b.slug}>
                <Link to={`/brands/${b.slug}`} className="hover:text-white transition-colors">{b.name} Support</Link>
              </li>
            ))}
            <li><Link to="/brands" className="hover:text-white transition-colors">All Brands</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold uppercase tracking-[0.2em] text-xs mb-5">Reach Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-blue-300" /> <a href={TOLL_FREE_HREF} className="hover:text-white">{TOLL_FREE_DISPLAY}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-blue-300" /> support@altitudegpsstore.com</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-blue-300" /> Servicing all 50 US states</li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-blue-300" /> 24/7 Toll-Free Support</li>
            <li className="flex gap-3"><ShieldCheck className="h-4 w-4 mt-0.5 text-blue-300" /> US-Based Certified Technicians</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Altitude GPS Store. All rights reserved.</p>
          <p className="opacity-70">
            Altitude GPS Store is an independent third-party service provider and is not affiliated with Garmin, TomTom, Magellan or Rand McNally. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
