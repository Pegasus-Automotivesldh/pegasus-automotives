import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  KeyRound,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Car,
  Gauge,
  Sparkles,
} from "lucide-react";

/* ---------------------------------------------------------------
   PEGASUS AUTOMOTIVES — brand tokens
   bg-void #0A0A0B | bg-panel #131315 | line #232326
   gold-600 #B4892C | gold-400 #D8B45E | gold-200 #F0DFAE
   ivory #F4F2EC | ash #9A98A0
--------------------------------------------------------------- */

const FONT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  .pa-root{
    --void:#0A0A0B; --panel:#131315; --panel2:#18181B; --line:#28282C;
    --gold-600:#B4892C; --gold-500:#C9A227; --gold-400:#D8B45E; --gold-200:#F0DFAE;
    --ivory:#F4F2EC; --ash:#98969E; --ash-dim:#6B6970;
    background:var(--void); color:var(--ivory);
    font-family:'Manrope',sans-serif;
    scroll-behavior:smooth;
  }
  .pa-root .f-display{ font-family:'Fraunces',serif; }
  .pa-root .f-mono{ font-family:'Space Mono',monospace; letter-spacing:0.14em; }
  .pa-gold-text{
    background:linear-gradient(120deg,var(--gold-600),var(--gold-200) 45%,var(--gold-500));
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .pa-hairline{ background:linear-gradient(90deg,transparent,var(--line) 20%,var(--line) 80%,transparent); height:1px; }
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
  .pa-dashed{ border:1px dashed var(--line); }
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
    { label: "Inventory", href: "#inventory" },
    { label: "Services", href: "#services" },
    { label: "Why Pegasus", href: "#why-pegasus" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0B]/90 backdrop-blur-md py-4 border-b border-[#28282C]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="f-display text-xl font-bold tracking-wider uppercase text-white group-hover:text-[#D8B45E] transition-colors">
            Pegasus
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#98969E] hover:text-[#F4F2EC] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="pa-btn-gold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold inline-block"
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#F4F2EC] p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0B] border-b border-[#28282C] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-[#98969E] hover:text-[#F4F2EC]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="pa-btn-gold px-5 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-center mt-2"
          >
            Inquire Now
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------------------------------
   HERO
--------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/50 to-[#0A0A0B]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="f-mono text-xs tracking-[0.3em] uppercase mb-4 text-[#D8B45E]"
        >
          Luxury Automotives & Performance
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="f-display text-4xl md:text-7xl font-light tracking-tight mb-6 leading-tight"
        >
          Redefining Automotive <br className="hidden md:block" />
          <span className="pa-gold-text italic font-normal">Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#98969E] max-w-2xl mx-auto text-base md:text-lg mb-8 font-light"
        >
          Curated selection of the world's most prestigious luxury and performance vehicles. Experience bespoke automotive service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#inventory" className="pa-btn-gold px-8 py-4 rounded-full text-xs uppercase tracking-wider font-bold w-full sm:w-auto">
            View Inventory
          </a>
          <a href="#contact" className="pa-btn-ghost px-8 py-4 rounded-full text-xs uppercase tracking-wider font-bold w-full sm:w-auto">
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   CREDIBILITY / STATS
--------------------------------------------------------------- */
function Credibility() {
  const stats = [
    { value: "500+", label: "Vehicles Delivered" },
    { value: "100%", label: "Verified Authenticity" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Client Support" },
  ];

  return (
    <section className="py-12 border-y border-[#28282C] bg-[#131315]/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="f-display text-3xl md:text-4xl font-light text-[#D8B45E] mb-1">{stat.value}</div>
            <div className="text-xs uppercase tracking-wider text-[#98969E]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   SERVICES
--------------------------------------------------------------- */
function Services() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Consignment & Sales",
      desc: "White-glove consignment services ensuring maximum valuation for your high-end vehicle.",
    },
    {
      icon: Compass,
      title: "Bespoke Sourcing",
      desc: "Worldwide network to locate specific rare, limited-edition, or exotic specifications.",
    },
    {
      icon: KeyRound,
      title: "Private Detailing",
      desc: "Precision paint correction, ceramic coatings, and interior restoration services.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">What We Offer</p>
        <h2 className="f-display text-3xl md:text-5xl font-light">Bespoke Services</h2>
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
              className="pa-card p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#28282C]/50 flex items-center justify-center text-[#D8B45E] mb-6">
                <Icon size={24} />
              </div>
              <h3 className="f-display text-xl font-light mb-3">{s.title}</h3>
              <p className="text-sm text-[#98969E] leading-relaxed font-light">{s.desc}</p>
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
          <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">The Difference</p>
          <h2 className="f-display text-3xl md:text-5xl font-light mb-6">Uncompromising Quality</h2>
          <p className="text-[#98969E] text-base leading-relaxed mb-6 font-light">
            Every vehicle in our collection undergoes a rigorous multi-point inspection and provenance verification process before acquisition.
          </p>
          <ul className="space-y-4">
            {["Certified Provenance & History", "Full Service Transparency", "Tailored Financing Options"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#F4F2EC]">
                <Sparkles size={16} className="text-[#D8B45E]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pa-card rounded-2xl p-8 bg-[#0A0A0B]">
          <h3 className="f-display text-2xl font-light mb-4">Schedule a Consultation</h3>
          <p className="text-sm text-[#98969E] mb-6 font-light">
            Connect directly with an automotive specialist to discuss buying, selling, or sourcing your next vehicle.
          </p>
          <a href="#contact" className="pa-btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold inline-block">
            Get In Touch
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
  { src: "/rr.jpg", title: "Rolls-Royce" },
  { src: "/bmw.jpg", title: "BMW" },
];

function LuxuryCarGallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#D8B45E]">
          Excellence in Motion
        </p>
        <h2 className="f-display text-3xl md:text-5xl font-light tracking-tight text-[#F4F2EC]">
          Featured Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {luxuryCars.map((car, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border transition-all duration-500 border-[#28282C] bg-[#131315]"
          >
            <div className="h-96 overflow-hidden">
              <img
                src={car.src}
                alt={car.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="f-display text-xl font-light tracking-wide text-[#F4F2EC]">
                {car.title}
              </h3>
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
    <section id="inventory" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Current Selection</p>
        <h2 className="f-display text-3xl md:text-5xl font-light">Featured Inventory</h2>
      </div>
      <div className="text-center text-[#98969E] text-sm font-light">
        Inventory listings loading...
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
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Client Feedback</p>
        <h2 className="f-display text-3xl md:text-5xl font-light mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="pa-card p-8 rounded-2xl">
            <p className="text-sm text-[#98969E] leading-relaxed mb-6 italic">
              "The sourcing process was entirely seamless. Pegasus found the exact spec I was looking for within weeks."
            </p>
            <div className="text-xs font-bold text-[#F4F2EC]">Private Collector</div>
          </div>
          <div className="pa-card p-8 rounded-2xl">
            <p className="text-sm text-[#98969E] leading-relaxed mb-6 italic">
              "Unmatched professionalism and attention to detail. The consignment service exceeded my expectations."
            </p>
            <div className="text-xs font-bold text-[#F4F2EC]">Automotive Enthusiast</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   CONTACT
--------------------------------------------------------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Get In Touch</p>
          <h2 className="f-display text-3xl md:text-5xl font-light mb-6">Contact Us</h2>
          <p className="text-[#98969E] text-sm mb-8 font-light leading-relaxed">
            Reach out to schedule a private viewing or discuss your automotive requirements.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-[#98969E]">
              <Phone size={18} className="text-[#D8B45E]" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#98969E]">
              <Mail size={18} className="text-[#D8B45E]" />
              <span>info@pegasusautomotives.com</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#98969E]">
              <MapPin size={18} className="text-[#D8B45E]" />
              <span>100 Luxury Way, Automotive District</span>
            </div>
          </div>
        </div>
        <form className="space-y-4 pa-card p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#0A0A0B] border border-[#28282C] px-4 py-3 rounded-lg text-sm text-[#F4F2EC] pa-focus"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#0A0A0B] border border-[#28282C] px-4 py-3 rounded-lg text-sm text-[#F4F2EC] pa-focus"
          />
          <textarea
            placeholder="Message / Inquiry"
            rows={4}
            className="w-full bg-[#0A0A0B] border border-[#28282C] px-4 py-3 rounded-lg text-sm text-[#F4F2EC] pa-focus"
          />
          <button type="submit" className="pa-btn-gold w-full py-3 rounded-lg text-xs uppercase tracking-wider font-bold">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   FOOTER
--------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-[#28282C] py-8 text-center text-xs text-[#98969E]">
      <p>&copy; {new Date().getFullYear()} Pegasus Automotives. All rights reserved.</p>
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
