import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Menu,
  X,
  ShieldCheck,
  Compass,
  KeyRound,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Briefcase,
  Building2,
} from "lucide-react";

/* ---------------------------------------------------------------
   PEGASUS AUTOMOTIVES — Brand Tokens & Global Styles
--------------------------------------------------------------- */
const FONT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  .pa-root {
    --void:#0A0A0B; --panel:#131315; --panel2:#18181B; --line:#28282C;
    --gold-600:#B4892C; --gold-500:#C9A227; --gold-400:#D8B45E; --gold-200:#F0DFAE;
    --ivory:#F4F2EC; --ash:#98969E; --ash-dim:#6B6970;
    background:var(--void); color:var(--ivory);
    font-family:'Manrope',sans-serif;
    scroll-behavior:smooth;
  }
  .pa-root .f-display{ font-family:'Fraunces',serif; }
  .pa-root .f-mono{ font-family:'Space Mono',monospace; letter-spacing:0.14em; }
  
  .pa-logo-img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .pa-gold-text{
    background:linear-gradient(120deg,var(--gold-600),var(--gold-200) 45%,var(--gold-500));
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .pa-card{ background:var(--panel); border:1px solid var(--line); transition:border-color .4s ease, transform .4s ease, box-shadow .4s ease; }
  .pa-card:hover{ border-color:var(--gold-600); transform:translateY(-4px); box-shadow:0 20px 60px -20px rgba(180,137,44,0.25); }
  .pa-btn-gold{
    background:linear-gradient(135deg,var(--gold-400),var(--gold-600));
    color:#161208; font-weight:600; transition:filter .3s ease, transform .3s ease;
  }
  .pa-btn-gold:hover{ filter:brightness(1.12); transform:translateY(-2px); }
  .pa-btn-ghost{ border:1px solid var(--line); color:var(--ivory); transition:border-color .3s ease, background .3s ease; }
  .pa-btn-ghost:hover{ border-color:var(--gold-500); background:rgba(201,162,39,0.06); }
  .pa-focus:focus{ outline:none; border-color:var(--gold-500); box-shadow:0 0 0 3px rgba(201,162,39,0.15); }
  ::selection{ background:var(--gold-500); color:#161208; }
`;

/* ---------------------------------------------------------------
   NAVBAR
--------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Advisory & Brokerage", href: "#services" },
    { label: "Inventory", href: "#inventory" },
    { label: "Why Pegasus", href: "#why-pegasus" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0B]/90 backdrop-blur-md py-2 border-b border-[#28282C]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* EXTRA-LARGE HEADER LOGO */}
        <a href="#" className="group block">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-[#28282C] bg-[#0A0A0B] flex items-center justify-center p-1 group-hover:border-[#D8B45E] transition-colors duration-300 shadow-2xl">
            <img
              src="/Pegasus_Logo_Square_NavyBG_Bigger.png"
              alt="Pegasus Automotives Logo"
              className="w-full h-full object-contain rounded-xl pa-logo-img group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#98969E] hover:text-[#F4F2EC] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="pa-btn-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold inline-flex items-center gap-1 group"
          >
            <span>Consult Advisor</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#F4F2EC] p-2 rounded-lg border border-[#28282C] bg-[#131315]"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-[#28282C] px-6 py-6 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wide text-[#98969E] hover:text-[#F4F2EC] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="pa-btn-gold px-5 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-center mt-2 flex items-center justify-center gap-2"
            >
              <span>Consult Advisor</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------------------------------------------------------
   HERO
--------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-36 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#18181B]/40 via-[#0A0A0B] to-[#0A0A0B]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#28282C] bg-[#131315]/80 mb-6 backdrop-blur-sm"
        >
          <Sparkles size={12} className="text-[#D8B45E]" />
          <span className="f-mono text-[10px] tracking-[0.25em] uppercase text-[#D8B45E]">
            Premium Automotive Advisory & Brokerage
          </span>
        </motion.div>

        {/* UPDATED HERO TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="f-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight max-w-4xl mx-auto"
        >
          Black leather, polished chrome, and the{" "}
          <span className="pa-gold-text italic font-normal">scent of a new drive.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#98969E] max-w-2xl mx-auto text-base sm:text-lg mb-10 font-light leading-relaxed"
        >
          Elevating vehicle ownership through specialized luxury advisory, brand-new allocations, private brokerage, and curated exotic car acquisition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#services" className="pa-btn-gold px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold w-full sm:w-auto">
            Explore Brokerage Services
          </a>
          <a href="#contact" className="pa-btn-ghost px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold w-full sm:w-auto">
            Private Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   CREDIBILITY / STATS (REPLACED WITH PROFESSIONAL ADVISORY HIGHLIGHTS)
--------------------------------------------------------------- */
function Credibility() {
  const highlights = [
    { title: "Automotive Advisory", label: "New Build & Factory Allocations" },
    { title: "Private Brokerage", label: "Discreet Off-Market Portfolio Sales" },
    { title: "Bespoke Sourcing", label: "Global Exotic & Rare Vehicles" },
    { title: "Concierge Care", label: "End-to-End Asset Management" },
  ];

  return (
    <section className="py-12 border-y border-[#28282C] bg-[#131315]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {highlights.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="f-display text-lg sm:text-xl font-light text-[#D8B45E] mb-1">{item.title}</div>
            <div className="f-mono text-[10px] uppercase tracking-wider text-[#98969E] max-w-[180px]">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   SERVICES (UPDATED TO EMPHASIZE BROKERAGE & NEW CAR ADVISORY)
--------------------------------------------------------------- */
function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Luxury Advisory & Brokerage",
      desc: "Beyond pre-owned sales, we act as specialized advisors for brand-new luxury builds, factory allocations, and high-value private car brokerage.",
    },
    {
      icon: Compass,
      title: "Bespoke New & Rare Sourcing",
      desc: "Leveraging exclusive private collector networks and global dealer relationships to secure coveted, limited-production, or custom-spec automobiles.",
    },
    {
      icon: ShieldCheck,
      title: "Consignment & Portfolio Management",
      desc: "Discreet, white-glove consignment services ensuring maximum asset valuation and target market positioning for extraordinary luxury vehicles.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Bespoke Offerings</p>
        <h2 className="f-display text-3xl md:text-5xl font-light">Advisory & Brokerage</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, index) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pa-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#28282C]/60 border border-[#28282C] flex items-center justify-center text-[#D8B45E] mb-6">
                  <Icon size={22} />
                </div>
                <h3 className="f-display text-xl font-light mb-3">{s.title}</h3>
                <p className="text-sm text-[#98969E] leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   WHY PEGASUS
--------------------------------------------------------------- */
function WhyPegasus() {
  return (
    <section id="why-pegasus" className="py-24 px-6 bg-[#131315] border-y border-[#28282C]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">The Pegasus Standard</p>
          <h2 className="f-display text-3xl md:text-5xl font-light mb-6">Complete Automotive Advisory</h2>
          <p className="text-[#98969E] text-base leading-relaxed mb-6 font-light">
            We operate as your dedicated luxury automotive partner. Whether guiding brand-new luxury acquisition, brokerage transactions, or private collector sourcing, precision remains paramount.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Brand-New Luxury & Pre-Owned Advisory",
              "Private Brokerage & Portfolio Sourcing",
              "Verified Provenance & Comprehensive Audits",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#F4F2EC]">
                <CheckCircle2 size={16} className="text-[#D8B45E] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pa-card rounded-2xl p-8 bg-[#0A0A0B] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8B45E]/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="f-display text-2xl font-light mb-4">Advisory Consultation</h3>
          <p className="text-sm text-[#98969E] mb-6 font-light leading-relaxed">
            Connect directly with an executive advisor to discuss brand-new allocations, custom builds, private brokerage, or vehicle consignments.
          </p>
          <a href="#contact" className="pa-btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2">
            <span>Schedule Consultation</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   LUXURY GALLERY
--------------------------------------------------------------- */
const luxuryCars = [
  { 
    src: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80", 
    title: "Rolls-Royce Ghost", 
    category: "Ultra Luxury" 
  },
  { 
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80", 
    title: "BMW M Series", 
    category: "High Performance" 
  },
];

function LuxuryCarGallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">
          Excellence in Motion
        </p>
        <h2 className="f-display text-3xl md:text-5xl font-light tracking-tight text-[#F4F2EC]">
          Featured Collection
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {luxuryCars.map((car, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border transition-all duration-500 border-[#28282C] bg-[#131315]"
          >
            <div className="h-96 overflow-hidden bg-[#18181B]">
              <img
                src={car.src}
                alt={car.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex items-center justify-between border-t border-[#28282C]">
              <div>
                <span className="f-mono text-[10px] uppercase tracking-widest text-[#98969E] block mb-1">
                  {car.category}
                </span>
                <h3 className="f-display text-xl font-light text-[#F4F2EC]">
                  {car.title}
                </h3>
              </div>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full border border-[#28282C] flex items-center justify-center text-[#98969E] group-hover:border-[#D8B45E] group-hover:text-[#D8B45E] transition-colors"
                aria-label={`Inquire about ${car.title}`}
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   INVENTORY
--------------------------------------------------------------- */
function Inventory() {
  return (
    <section id="inventory" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#28282C]">
      <div className="text-center mb-16">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Curated Listings</p>
        <h2 className="f-display text-3xl md:text-5xl font-light">Showroom & Off-Market Portfolio</h2>
      </div>
      <div className="pa-card p-12 rounded-2xl text-center max-w-xl mx-auto">
        <Sparkles size={24} className="text-[#D8B45E] mx-auto mb-4" />
        <p className="text-[#F4F2EC] text-base font-medium mb-2">Private Portfolio Access</p>
        <p className="text-[#98969E] text-xs font-light leading-relaxed mb-6">
          Our brand-new allocations and off-market brokerage vehicles are kept private. Request direct consultation for full catalog access.
        </p>
        <a href="#contact" className="pa-btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold inline-block">
          Request Private Portfolio
        </a>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   TESTIMONIALS
--------------------------------------------------------------- */
function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#131315] border-y border-[#28282C]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Client Experience</p>
        <h2 className="f-display text-3xl md:text-5xl font-light mb-12">Client Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="pa-card p-8 rounded-2xl">
            <p className="text-sm text-[#98969E] leading-relaxed mb-6 font-light italic">
              "Their brokerage team secured my new build allocation effortlessly. Pegasus provided an unparalleled executive advisory experience."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#28282C] flex items-center justify-center font-bold text-xs text-[#D8B45E]">P</div>
              <div>
                <div className="text-xs font-bold text-[#F4F2EC]">Private Client</div>
                <div className="f-mono text-[10px] text-[#98969E]">Ludhiana, India</div>
              </div>
            </div>
          </div>
          <div className="pa-card p-8 rounded-2xl">
            <p className="text-sm text-[#98969E] leading-relaxed mb-6 font-light italic">
              "Unmatched professionalism in handling our private vehicle consignment and finding a custom luxury acquisition."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#28282C] flex items-center justify-center font-bold text-xs text-[#D8B45E]">A</div>
              <div>
                <div className="text-xs font-bold text-[#F4F2EC]">Automotive Enthusiast</div>
                <div className="f-mono text-[10px] text-[#98969E]">Chandigarh, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   CONTACT & SOCIAL LINKS
--------------------------------------------------------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/pegasus_automotivs", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/PegasusAutomotives", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/pegasus-automotives", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@pegasusautomotives", label: "YouTube" },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Get In Touch</p>
          <h2 className="f-display text-3xl md:text-5xl font-light mb-6">Contact Us</h2>
          <p className="text-[#98969E] text-sm mb-8 font-light leading-relaxed">
            Speak with an advisor regarding luxury acquisitions, new vehicle allocations, private brokerage, or showroom appointments.
          </p>
          
          <div className="space-y-5 mb-10">
            <a
              href="tel:+919501462967"
              className="flex items-center gap-4 text-sm text-[#98969E] hover:text-[#D8B45E] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#131315] border border-[#28282C] flex items-center justify-center text-[#D8B45E] group-hover:border-[#D8B45E] transition-colors">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="f-mono text-[10px] text-[#98969E] uppercase">Direct Line</span>
                <span className="text-[#F4F2EC] font-medium">+91 95014 62967</span>
              </div>
            </a>

            <a
              href="mailto:pegasusautomotivesldh@gmail.com"
              className="flex items-center gap-4 text-sm text-[#98969E] hover:text-[#D8B45E] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#131315] border border-[#28282C] flex items-center justify-center text-[#D8B45E] group-hover:border-[#D8B45E] transition-colors">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="f-mono text-[10px] text-[#98969E] uppercase">Email Inquiry</span>
                <span className="text-[#F4F2EC] font-medium">pegasusautomotivesldh@gmail.com</span>
              </div>
            </a>

            <a
              href="https://www.pegasusautomotivesldh.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-sm text-[#98969E] hover:text-[#D8B45E] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#131315] border border-[#28282C] flex items-center justify-center text-[#D8B45E] group-hover:border-[#D8B45E] transition-colors">
                <Globe size={18} />
              </div>
              <div className="flex flex-col">
                <span className="f-mono text-[10px] text-[#98969E] uppercase">Official Website</span>
                <span className="text-[#F4F2EC] font-medium">www.pegasusautomotivesldh.in</span>
              </div>
            </a>

            <div className="flex items-center gap-4 text-sm text-[#98969E]">
              <div className="w-10 h-10 rounded-lg bg-[#131315] border border-[#28282C] flex items-center justify-center text-[#D8B45E]">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="f-mono text-[10px] text-[#98969E] uppercase">Location</span>
                <span className="text-[#F4F2EC] font-medium">Ludhiana, Punjab, India</span>
              </div>
            </div>
          </div>

          <div>
            <p className="f-mono text-xs tracking-wider uppercase mb-4 text-[#98969E]">Connect With Us</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-lg border border-[#28282C] bg-[#131315] flex items-center justify-center text-[#98969E] hover:text-[#D8B45E] hover:border-[#D8B45E] transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pa-card p-8 rounded-2xl relative">
          <h3 className="f-display text-2xl font-light mb-6">Send an Inquiry</h3>
          
          {submitted ? (
            <div className="p-6 bg-[#0A0A0B] border border-[#28282C] rounded-xl text-center my-12">
              <CheckCircle2 size={32} className="text-[#D8B45E] mx-auto mb-3" />
              <p className="f-display text-lg text-[#F4F2EC] mb-1">Inquiry Received</p>
              <p className="text-xs text-[#98969E]">Thank you for reaching out. An automotive specialist will contact you shortly.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block f-mono text-[10px] uppercase text-[#98969E] mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#0A0A0B] border border-[#28282C] px-4 py-3 rounded-lg text-sm text-[#F4F2EC] pa-focus"
                />
              </div>

              <div>
                <label className="block f-mono text-[10px] uppercase text-[#98969E] mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0A0A0B] border border-[#28282C] px-4 py-3 rounded-lg text-sm text-[#F4F2EC] pa-focus"
                />
              </div>

              <div>
                <label className="block f-mono text-[10px] uppercase text-[#98969E] mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full bg-[#0A0A0B] border border-[#28282C] px-4 py-3 rounded-lg text-sm text-[#F4F2EC] pa-focus"
                />
              </div>

              <div>
                <label className="block f-mono text-[10px] uppercase text-[#98969E] mb-2">Message or Inquiry</label>
                <textarea
                  required
                  placeholder="Details regarding luxury advisory, new build allocations, or brokerage..."
                  rows={4}
                  className="w-full bg-[#0A0A0B] border border-[#28282C] px-4 py-3 rounded-lg text-sm text-[#F4F2EC] pa-focus"
                />
              </div>

              <button type="submit" className="pa-btn-gold w-full py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold mt-2">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   FOOTER
--------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-[#28282C] py-8 px-6 text-center text-xs text-[#98969E] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* EXTRA-LARGE FOOTER LOGO */}
        <a href="#" className="block">
          <div className="w-20 h-20 rounded-2xl border border-[#28282C] bg-[#0A0A0B] flex items-center justify-center p-1 hover:border-[#D8B45E] transition-colors duration-300">
            <img
              src="/Pegasus_Logo_Square_NavyBG_Bigger.png"
              alt="Pegasus Logo"
              className="w-full h-full object-contain rounded-xl pa-logo-img"
            />
          </div>
        </a>
        <p>&copy; {new Date().getFullYear()} Pegasus Automotives. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------
   MAIN APPLICATION
--------------------------------------------------------------- */
export default function PegasusAutomotives() {
  return (
    <div className="pa-root min-h-screen w-full">
      <style>{FONT_STYLES}</style>
      <Navbar />
      <Hero />
      <Credibility />
      <Services />
      <WhyPegasus />
      <LuxuryCarGallery />
      <Inventory />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
