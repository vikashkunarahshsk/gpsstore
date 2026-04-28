import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X, Navigation } from "lucide-react";
import { TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#0A2540] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between">
          <p data-testid="top-bar-tagline" className="tracking-wide">
            <span className="text-blue-300 font-semibold">USA ONLY</span>
            <span className="opacity-50 mx-3">|</span>
            Certified GPS technicians for Garmin, TomTom, Magellan & more
          </p>
          <a
            data-testid="top-bar-call-link"
            href={TOLL_FREE_HREF}
            className="font-semibold tracking-wide hover:text-blue-300 transition-colors"
          >
            Toll Free: {TOLL_FREE_DISPLAY}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link to="/" data-testid="logo-link" className="flex items-center gap-2 shrink-0">
              <div className="h-10 w-10 bg-[#0052FF] flex items-center justify-center">
                <Navigation className="h-5 w-5 text-white" strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-[#0A2540] text-lg">Altitude</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#0052FF] font-bold">GPS Store</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  data-testid={`nav-${n.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? "text-[#0052FF]"
                        : "text-slate-700 hover:text-[#0052FF]"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            <a
              data-testid="header-call-cta"
              href={TOLL_FREE_HREF}
              className="hidden md:inline-flex items-center gap-3 bg-[#0052FF] hover:bg-[#0040CC] text-white px-5 lg:px-6 py-3 font-semibold tracking-wide transition-all hover:scale-[1.02] btn-pulse"
            >
              <Phone className="h-4 w-4" strokeWidth={2.4} />
              <span className="hidden sm:inline text-xs uppercase tracking-[0.18em] opacity-80">Toll Free</span>
              <span className="text-base">{TOLL_FREE_DISPLAY}</span>
            </a>

            <button
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 text-[#0A2540]"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="lg:hidden border-t border-slate-200 py-4 space-y-1">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-semibold ${
                      isActive ? "text-[#0052FF] bg-blue-50" : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                data-testid="mobile-call-cta"
                href={TOLL_FREE_HREF}
                className="mt-3 flex items-center justify-center gap-2 bg-[#0052FF] text-white px-5 py-4 font-bold"
              >
                <Phone className="h-4 w-4" /> Call {TOLL_FREE_DISPLAY}
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
