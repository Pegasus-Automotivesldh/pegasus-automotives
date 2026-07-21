import React, { useState } from "react";
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

export default function SocialLinks() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Vehicle Sourcing & Acquisition",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialPlatforms = [
    { name: "Instagram", handle: "@pegasus_automotivs", href: "https://www.instagram.com/pegasus_automotivs", icon: Instagram },
    { name: "Facebook", handle: "PegasusAutomotives", href: "https://www.facebook.com/PegasusAutomotives", icon: Facebook },
    { name: "LinkedIn", handle: "Pegasus Automotives", href: "https://www.linkedin.com/company/pegasus-automotives", icon: Linkedin },
    { name: "YouTube", handle: "@pegasusautomotives", href: "https://www.youtube.com/@pegasusautomotives", icon: Youtube }
  ];

  return (
    <div id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#28282C] bg-[#131315] mb-4">
          <Sparkles size={12} className="text-[#D8B45E]" />
          <span className="f-mono text-[10px] uppercase text-[#D8B45E]">Direct Communication</span>
        </div>
        <h2 className="f-display text-3xl sm:text-5xl font-light mb-4">Connect & Consult</h2>
        <p className="text-sm text-[#98969E] font-light">
          Reach out to our advisory team for personalized vehicle sourcing, factory allocations, or private showroom visits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column - Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <div className="pa-card p-6 sm:p-8 rounded-2xl">
            <h3 className="f-display text-xl font-light mb-6 text-[#F4F2EC]">Direct Channels</h3>
            <div className="space-y-6">
              <a href="tel:+919501462967" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#18181B] border border-[#28282C] flex items-center justify-center text-[#D8B45E] group-hover:border-[#D8B45E] transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="f-mono text-[10px] uppercase text-[#6B6970] block">Direct Line</span>
                  <span className="text-sm font-medium text-[#F4F2EC] group-hover:text-[#D8B45E] transition-colors">+91 95014 62967</span>
                </div>
              </a>

              <a href="mailto:pegasusautomotivesldh@gmail.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#18181B] border border-[#28282C] flex items-center justify-center text-[#D8B45E] group-hover:border-[#D8B45E] transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="f-mono text-[10px] uppercase text-[#6B6970] block">Email Inquiries</span>
                  <span className="text-sm font-medium text-[#F4F2EC] group-hover:text-[#D8B45E] transition-colors">pegasusautomotivesldh@gmail.com</span>
                </div>
              </a>

              <a href="https://www.pegasusautomotivesldh.in" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#18181B] border border-[#28282C] flex items-center justify-center text-[#D8B45E] group-hover:border-[#D8B45E] transition-colors shrink-0">
                  <Globe size={18} />
                </div>
                <div>
                  <span className="f-mono text-[10px] uppercase text-[#6B6970] block">Official Website</span>
                  <span className="text-sm font-medium text-[#F4F2EC] group-hover:text-[#D8B45E] transition-colors">www.pegasusautomotivesldh.in</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#18181B] border border-[#28282C] flex items-center justify-center text-[#D8B45E] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="f-mono text-[10px] uppercase text-[#6B6970] block">Showroom Location</span>
                  <span className="text-sm text-[#F4F2EC]">G.T. Road, Sahnewal, Ludhiana, Punjab 141120</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Platforms Grid */}
          <div className="pa-card p-6 sm:p-8 rounded-2xl">
            <h3 className="f-display text-xl font-light mb-6 text-[#F4F2EC]">Digital Presence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-[#28282C] bg-[#18181B] hover:border-[#D8B45E] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-[#D8B45E]" />
                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-[#F4F2EC]">{platform.name}</p>
                        <p className="text-[10px] text-[#6B6970] truncate">{platform.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-[#6B6970] group-hover:text-[#D8B45E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Consultation Form */}
        <div className="lg:col-span-7">
          <div className="pa-card p-6 sm:p-10 rounded-2xl h-full flex flex-col justify-between">
            <div>
              <h3 className="f-display text-2xl font-light mb-2 text-[#F4F2EC]">Schedule a Consultation</h3>
              <p className="text-xs text-[#98969E] mb-8 font-light">
                Fill in your details below and an automotive specialist will contact you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 border border-[#D8B45E]/30 bg-[#C9A227]/5 rounded-xl text-center my-auto">
                  <Car size={36} className="text-[#D8B45E] mx-auto mb-3" />
                  <h4 className="f-display text-xl text-[#F4F2EC] mb-2">Request Received</h4>
                  <p className="text-xs text-[#98969E]">
                    Thank you. A Pegasus Automotives advisor will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block f-mono text-[10px] uppercase text-[#6B6970] mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#18181B] border border-[#28282C] rounded-xl px-4 py-3 text-xs text-[#F4F2EC] pa-focus"
                      />
                    </div>
                    <div>
                      <label className="block f-mono text-[10px] uppercase text-[#6B6970] mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#18181B] border border-[#28282C] rounded-xl px-4 py-3 text-xs text-[#F4F2EC] pa-focus"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block f-mono text-[10px] uppercase text-[#6B6970] mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#18181B] border border-[#28282C] rounded-xl px-4 py-3 text-xs text-[#F4F2EC] pa-focus"
                    />
                  </div>

                  <div>
                    <label className="block f-mono text-[10px] uppercase text-[#6B6970] mb-1.5">Inquiry Type</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#18181B] border border-[#28282C] rounded-xl px-4 py-3 text-xs text-[#F4F2EC] pa-focus"
                    >
                      <option>Vehicle Sourcing & Acquisition</option>
                      <option>Factory Build Slot Allocation</option>
                      <option>Private Vehicle Consignment</option>
                      <option>Multi-Point Audit & Detailing</option>
                      <option>General Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block f-mono text-[10px] uppercase text-[#6B6970] mb-1.5">Message / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Specify make, model, budget, or preferred specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#18181B] border border-[#28282C] rounded-xl px-4 py-3 text-xs text-[#F4F2EC] pa-focus"
                    />
                  </div>

                  <button
                    type="submit"
                    className="pa-btn-gold w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 mt-2"
                  >
                    <MessageCircle size={15} />
                    <span>Send Consultation Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
