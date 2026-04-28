import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Calendar, Clock, Phone } from "lucide-react";
import { TOLL_FREE_DISPLAY, TOLL_FREE_HREF } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/blog/${slug}`)
      .then((r) => setPost(r.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="py-32 text-center text-slate-500">Loading…</div>;
  if (error || !post)
    return (
      <div className="py-32 text-center">
        <p className="text-slate-700">Article not found.</p>
        <Link to="/blog" className="mt-4 inline-block text-[#0052FF] font-semibold">← Back to blog</Link>
      </div>
    );

  return (
    <article className="bg-white">
      <div className="relative h-80 md:h-[420px] bg-[#0A2540]">
        <img src={post.cover} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-transparent" />
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <Link to="/blog" data-testid="blog-back" className="inline-flex items-center gap-2 text-blue-300 text-xs uppercase tracking-[0.2em] font-bold w-fit">
            <ArrowLeft className="h-3 w-3" /> Back to blog
          </Link>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-blue-300 font-bold">{post.category}</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-5 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.published_at}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.read_time}</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <p className="text-xl text-slate-700 leading-relaxed font-medium">{post.excerpt}</p>
          {post.content?.map((para, i) => (
            <p key={i} className="mt-6 text-slate-700 leading-relaxed text-base">{para}</p>
          ))}

          <div className="mt-14 border-t border-b border-slate-200 py-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#0052FF] font-bold">Need this fixed today?</p>
            <a
              href={TOLL_FREE_HREF}
              data-testid="blog-detail-call-cta"
              className="mt-4 inline-flex items-center gap-3 bg-[#0052FF] hover:bg-[#0040CC] text-white px-8 py-4 font-bold text-xl btn-pulse"
            >
              <Phone className="h-5 w-5" /> {TOLL_FREE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
