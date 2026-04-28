import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/blog`).then((r) => setPosts(r.data)).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <HeroBanner
        compact
        eyebrow="Altitude GPS Insights"
        title="Guides, fixes & GPS know-how — straight from the technicians."
        subtitle="Real-world articles from the team that handles thousands of GPS support calls every month across the United States."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <p className="text-center text-slate-500">Loading articles…</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  data-testid={`blog-card-${p.slug}`}
                  className="bg-white group hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="overflow-hidden h-56">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#0052FF] font-bold">
                      <span>{p.category}</span>
                      <span className="opacity-30">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-500"><Calendar className="h-3 w-3" /> {p.published_at}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-[#0A2540] group-hover:text-[#0052FF] transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read_time}</span>
                      <span className="inline-flex items-center gap-1 text-[#0052FF] font-semibold uppercase tracking-[0.18em]">
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <a
              href={TOLL_FREE_HREF}
              data-testid="blog-call-cta"
              className="inline-flex items-center gap-3 bg-[#0052FF] hover:bg-[#0040CC] text-white px-8 py-4 font-semibold transition-colors"
            >
              <Phone className="h-4 w-4" /> Need help now? Call {TOLL_FREE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
