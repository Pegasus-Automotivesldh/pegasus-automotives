import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Sparkles,
  ArrowUpRight,
  Car,
  MessageCircle
} from "lucide-react";

const FONT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  .pa-root {
    --void:#0A0A0B; --panel:#131315; --line:#28282C;
    --gold-600:#B4892C; --gold-500:#C9A227; --gold-400:#D8B45E; --gold-200:#F0DFAE;
    --ivory:#F4F2EC; --ash:#98969E;
    background:var(--void); color:var(--ivory);
    font-family:'Manrope',sans-serif;
  }
  .pa-root .f-display{ font-family:'Fraunces',serif; }
  .pa-root .f-mono{ font-family:'Space Mono',monospace; letter-spacing:0.14em; }

  .pa-card-btn {
    background: var(--panel);
    border: 1px solid var(--line);
    transition: all 0.3s ease;
  }
  .pa-card-btn:hover {
    border-color: var(--gold-500);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(216, 180, 94, 0.2);
  }

  .pa-gold-btn {
    background: linear-gradient(135deg, var(--gold-400), var(--gold-600));
    color: #161208;
  }
  .pa-gold-btn:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
`;

export default function SocialLinks() {
  const primaryLinks = [
    {
      title: "Explore Off-Market Catalog",
      subtitle: "Confidential luxury vehicle portfolio",
      href: "/#inventory",
      icon: Car,
      highlight: true,
    },
    {
      title: "Chat on WhatsApp",
      subtitle: "Instant response from an executive advisor",
      href: "https://wa.me/919501462967",
      icon: MessageCircle,
      highlight: false,
    },
    {
      title: "Book Private Consultation",
      subtitle: "Schedule a showroom or virtual advisory session",
      href: "/#contact",
      icon: Sparkles,
      highlight: false,
    },
    {
      title: "Visit Official Website",
      subtitle: "www.pegasusautomotivesldh.in",
      href: "https://www.pegasusautomotivesldh.in",
      icon: Globe,
      highlight: false,
    },
  ];

  const socialIcons = [
    { icon: Instagram, href: "https://www.instagram.com/pegasus_automotivs", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/PegasusAutomotives", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/pegasus-automotives", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@pegasusautomotives", label: "YouTube" },
  ];

  return (
    <div className="pa-root min-h-screen w-full flex flex-col items-center justify-between py-12 px-6">
      <style>{FONT_STYLES}</style>

      {/* HEADER SECTION */}
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="w-24 h-24 rounded-2xl border border-[#28282C] bg-[#0A0A0B] flex items-center justify-center p-1.5 shadow-2xl mb-6">
          <img
            src="/Pegasus_Logo_Square_NavyBG_Bigger.png"
            alt="Pegasus Automotives Logo"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        <h1 className="f-display text-2xl sm:text-3xl font-light tracking-tight mb-2">
          Pegasus Automotives
        </h1>

        <p className="f-mono text-[10px] tracking-[0.2em] uppercase text-[#D8B45E] mb-4">
          Luxury Advisory & Private Brokerage
        </p>

        <p className="text-xs text-[#98969E] font-light italic leading-relaxed mb-8 max-w-xs">
          "Black leather, polished chrome, and the scent of a new drive."
        </p>
      </div>

      {/* CALL TO ACTION BUTTONS */}
      <div className="max-w-md w-full space-y-4 mb-10">
        {primaryLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className={`w-full p-4 rounded-xl flex items-center justify-between group ${
                link.highlight
                  ? "pa-gold-btn font-bold transition-all duration-300 shadow-lg"
                  : "pa-card-btn text-[#F4F2EC]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    link.highlight
                      ? "bg-[#161208]/10 text-[#161208]"
                      : "bg-[#0A0A0B] border border-[#28282C] text-[#D8B45E]"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{link.title}</div>
                  <div
                    className={`text-[11px] font-light ${
                      link.highlight ? "text-[#161208]/80" : "text-[#98969E]"
                    }`}
                  >
                    {link.subtitle}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          );
        })}
      </div>

      {/* LOCATION & DIRECT CONTACT CARD */}
      <div className="max-w-md w-full p-6 rounded-2xl bg-[#131315] border border-[#28282C] space-y-4 mb-10 text-xs text-[#98969E]">
        <div className="flex items-start gap-3">
          <MapPin size={16} className="text-[#D8B45E] shrink-0 mt-0.5" />
          <div>
            <span className="f-mono text-[9px] uppercase block text-[#D8B45E]">Showroom Location</span>
            <span className="text-[#F4F2EC]">
              G.T. Road, Sahnewal, Ludhiana, Punjab, India 141120
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#28282C]">
          <a
            href="tel:+919501462967"
            className="flex items-center gap-2 text-[#F4F2EC] hover:text-[#D8B45E] transition-colors"
          >
            <Phone size={14} className="text-[#D8B45E]" />
            <span>+91 95014 62967</span>
          </a>

          <a
            href="mailto:pegasusautomotivesldh@gmail.com"
            className="flex items-center gap-2 text-[#F4F2EC] hover:text-[#D8B45E] transition-colors"
          >
            <Mail size={14} className="text-[#D8B45E]" />
            <span>Email Us</span>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          {socialIcons.map((s, idx) => {
            const Icon = s.icon;
            return (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-lg border border-[#28282C] bg-[#131315] flex items-center justify-center text-[#98969E] hover:text-[#D8B45E] hover:border-[#D8B45E] transition-all"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <p className="text-[11px] text-[#98969E]">
          &copy; {new Date().getFullYear()} Pegasus Automotives. All rights reserved.
        </p>
      </div>
    </div>
  );
}
