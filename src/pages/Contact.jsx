import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import {
  TOLL_FREE_DISPLAY, TOLL_FREE_HREF, BRANDS, SERVICES,
} from "../lib/data";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", brand: "", service: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please complete name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      toast.success("Thanks — a US-based technician will reach out shortly.");
      setForm({ name: "", email: "", phone: "", brand: "", service: "", message: "" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong. Please call our toll-free line.";
      toast.error(typeof msg === "string" ? msg : "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeroBanner
        compact
        eyebrow="Contact Altitude GPS Store"
        title="Talk to a real US-based GPS technician."
        subtitle="Call our toll-free line for instant help, or send us your details and we'll reach back the same day."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          <aside className="lg:col-span-2 space-y-8">
            <div className="bg-[#0A2540] text-white p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-blue-300 font-bold">Toll Free 24/7</p>
              <a
                href={TOLL_FREE_HREF}
                data-testid="contact-toll-free"
                className="mt-3 flex items-center gap-3 font-display text-3xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-colors"
              >
                <Phone className="h-7 w-7" /> {TOLL_FREE_DISPLAY}
              </a>
              <p className="mt-3 text-sm text-slate-300">No menus. No offshore call centers. Direct line to certified technicians.</p>
            </div>

            <ul className="space-y-5 text-sm text-slate-700">
              <li className="flex gap-3"><Mail className="h-5 w-5 text-[#0052FF] mt-0.5" /> <span><strong className="text-[#0A2540]">Email</strong><br />support@altitudegpsstore.com</span></li>
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-[#0052FF] mt-0.5" /> <span><strong className="text-[#0A2540]">Coverage</strong><br />All 50 United States</span></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 text-[#0052FF] mt-0.5" /> <span><strong className="text-[#0A2540]">Hours</strong><br />24 / 7 / 365</span></li>
            </ul>
          </aside>

          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="bg-white border border-slate-200 p-8 lg:p-10 space-y-6"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#0052FF] font-bold">Send us a message</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#0A2540]">We respond within hours.</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" data-testid="contact-name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Smith" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" data-testid="contact-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" data-testid="contact-phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 123-4567" required />
                </div>
                <div className="space-y-2">
                  <Label>Brand</Label>
                  <Select value={form.brand} onValueChange={(v) => update("brand", v)}>
                    <SelectTrigger data-testid="contact-brand"><SelectValue placeholder="Select brand" /></SelectTrigger>
                    <SelectContent>
                      {BRANDS.map((b) => <SelectItem key={b.slug} value={b.name}>{b.name}</SelectItem>)}
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Service needed</Label>
                <Select value={form.service} onValueChange={(v) => update("service", v)}>
                  <SelectTrigger data-testid="contact-service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Describe your issue</Label>
                <Textarea id="message" data-testid="contact-message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us your device model and what's happening." />
              </div>

              <Button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="w-full bg-[#0052FF] hover:bg-[#0040CC] text-white py-6 text-base font-semibold rounded-none"
              >
                <Send className="h-4 w-4 mr-2" />
                {loading ? "Sending…" : "Submit Request"}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                Prefer to talk now? Call <a href={TOLL_FREE_HREF} className="text-[#0052FF] font-semibold">{TOLL_FREE_DISPLAY}</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
