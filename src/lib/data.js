// Centralized site data — brands, services, testimonials, FAQs

export const TOLL_FREE_DISPLAY = "1-844-694-4236";
export const TOLL_FREE_HREF = "tel:+18446944236";

export const BRANDS = [
  {
    slug: "garmin",
    name: "Garmin",
    tagline: "Map updates, software flashes & lifetime subscription support.",
    description:
      "Garmin Drive, DriveSmart, Nuvi, Zumo, RV and Overlander — our certified team covers every consumer Garmin GPS series sold in the United States.",
    color: "#0052FF",
  },
  {
    slug: "tomtom",
    name: "TomTom",
    tagline: "GO, Start, Trucker & Rider — fast, US-based assistance.",
    description:
      "From MyDrive Connect activation to firmware re-flashing, our technicians service the full TomTom lineup with same-day turnaround over toll free.",
    color: "#DC0032",
  },
  {
    slug: "magellan",
    name: "Magellan",
    tagline: "RoadMate, Maestro, eXplorist & SmartGPS specialists.",
    description:
      "Lifetime subscription activation, content manager errors, and full device reconfiguration handled remotely by US-based engineers.",
    color: "#1E3A8A",
  },
  {
    slug: "rand-mcnally",
    name: "Rand McNally",
    tagline: "TND tablets, OverDryve & professional fleet support.",
    description:
      "We service the full Rand McNally trucking and consumer line — fleet activations, dock connect issues and lifetime maps included.",
    color: "#0F766E",
  },
];

export const SERVICES = [
  {
    icon: "Map",
    title: "GPS Map Update",
    desc: "Latest US & Canada map data installed correctly the first time, with full rollback safety.",
  },
  {
    icon: "Cpu",
    title: "GPS Software Update",
    desc: "Firmware flashing, OS patching and bug-fix releases verified by certified technicians.",
  },
  {
    icon: "Wrench",
    title: "GPS Installation",
    desc: "End-to-end install of new GPS units, mounts and accessories, configured for your vehicle.",
  },
  {
    icon: "Settings2",
    title: "GPS Setup & Configuration",
    desc: "Voice, language, units, home location and POIs — set up exactly the way you drive.",
  },
  {
    icon: "Infinity",
    title: "Lifetime Subscription",
    desc: "Activation, transfer and recovery for Garmin, TomTom, Magellan and Rand McNally lifetime plans.",
  },
  {
    icon: "ShieldAlert",
    title: "Troubleshooting",
    desc: "No signal, frozen screens, corrupted maps and update loops — diagnosed and resolved fast.",
  },
  {
    icon: "Mic",
    title: "Voice Update",
    desc: "Premium voices, language packs and speech engine refresh on supported devices.",
  },
  {
    icon: "Headphones",
    title: "24/7 Customer Support",
    desc: "US-based experts available around the clock over a single dedicated toll-free line.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "Dallas, TX",
    quote:
      "My Garmin Drive 52 wouldn't update for weeks. One toll-free call and the technician walked me through a clean re-install in fifteen minutes. Excellent service.",
    rating: 5,
  },
  {
    name: "Diane K.",
    location: "Albany, NY",
    quote:
      "Activated my Magellan lifetime subscription after I'd given up. Polite, patient and clearly American support. Highly recommended.",
    rating: 5,
  },
  {
    name: "Roberto S.",
    location: "Phoenix, AZ",
    quote:
      "Used them twice — once for a TomTom GO firmware fix, once for a Rand McNally map update. Same crew both times. That kind of consistency is rare.",
    rating: 5,
  },
  {
    name: "Linda P.",
    location: "Charlotte, NC",
    quote:
      "Fast, honest and they did not push any unnecessary services. Just fixed what was broken and explained everything. That's why I'll call again.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "Which GPS brands do you support?",
    a: "We provide complete update, installation and troubleshooting services for Garmin, TomTom, Magellan, Rand McNally and most major US consumer GPS brands.",
  },
  {
    q: "Are your technicians based in the United States?",
    a: "Yes. Altitude GPS Store operates exclusively in the USA, with certified technicians available over a single dedicated toll-free line.",
  },
  {
    q: "How long does a typical GPS update take?",
    a: "Most map updates complete in 20 to 60 minutes depending on the size of the regional map package and the device's USB connection speed.",
  },
  {
    q: "Do you fix devices that are stuck on boot or showing a black screen?",
    a: "Yes. Frozen boot screens, update loops and corrupted firmware are some of the most common issues we resolve on a daily basis.",
  },
  {
    q: "What if my lifetime subscription has been deactivated?",
    a: "Subscription recovery is one of our specialties. With your device serial and original purchase details we can usually restore lifetime access in a single call.",
  },
  {
    q: "How do I reach you?",
    a: "Call our toll-free number 1-844-694-4236 any time. You can also submit our contact form and a US-based technician will reach back to you the same day.",
  },
];

export const TRUST_STATS = [
  { value: "150K+", label: "Devices Serviced" },
  { value: "12+", label: "Years In Business" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "24/7", label: "USA Toll-Free Support" },
];
