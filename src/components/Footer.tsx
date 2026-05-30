/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Anchor, Mail, Send, Check, Phone, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [supportMsg, setSupportMsg] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#03045E] to-[#01012B] text-white overflow-hidden border-t-2 border-[#00B4D8]/20">
      
      {/* Dynamic Ambient Sea Waterglow Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0077B6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#03045E]/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Symmetrical Top Wave Line SVG Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00B4D8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16 border-b border-sky-950/50">
          
          {/* Column 1: Brand & Logo Hook */}
          <div className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div 
              className="flex items-center gap-3 cursor-pointer group transition-transform duration-300 active:scale-95" 
              onClick={() => onNavigate('home')}
            >
              <Logo className="h-40 w-40 shrink-0 drop-shadow-[0_4px_12px_rgba(0,180,216,0.15)]" />
            </div>
            
            <p className="text-[13px] text-sky-100/75 leading-relaxed font-sans font-light max-w-sm">
              South India’s premier digital seafood dock. Sourcing early dawn catches directly from coastal catamarans, packing with absolute cold chain integration.
            </p>

            {/* Circular Social Buttons with Custom Inner Hover Glows */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-2">
              {['Instagram', 'Facebook', 'WhatsApp', 'YouTube'].map((social) => (
                <button
                  key={social}
                  id={`footer-social-${social.toLowerCase()}`}
                  className="w-10 h-10 rounded-full bg-sky-950/60 border border-sky-800/40 hover:border-[#00B4D8] hover:bg-[#0077B6]/20 text-sky-300 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center text-xs font-mono font-bold hover:shadow-[0_0_12px_rgba(0,180,216,0.25)] hover:-translate-y-1"
                  title={social}
                >
                  {social.charAt(0)}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Marketplace Navigation */}
          <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-[#00B4D8] font-extrabold uppercase tracking-widest text-[12px] font-mono">
              Marketplace
            </h4>
            <div className="w-8 h-[2px] bg-[#00B4D8]/40 mx-auto lg:mx-0 rounded-full" />
            <ul className="space-y-3 pt-2 w-full flex flex-col items-center lg:items-start">
              {[
                { name: 'Dawn Sourcing Map', action: 'marketplace-hub' },
                { name: 'Daily Bid Auctions', action: 'marketplace-hub' },
                { name: 'Pristine Processing', action: 'why-choose-us' },
                { name: 'Gate Laboratory', action: 'marketplace-hub' },
                { name: 'Fresh Catch Grids', action: 'fresh-catch' },
                { name: 'Category Cabinets', action: 'categories' }
              ].map((link, i) => (
                <li key={i}>
                  <button
                    id={`footer-market-link-${i}`}
                    onClick={() => onNavigate(link.action)}
                    className="text-sky-100/70 hover:text-white hover:underline decoration-[#00B4D8] decoration-2 underline-offset-4 transition-all text-xs font-sans font-medium cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: High-Touch Support & Help Desk Links */}
          <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-[#00B4D8] font-extrabold uppercase tracking-widest text-[12px] font-mono">
              Support & Help
            </h4>
            <div className="w-8 h-[2px] bg-[#00B4D8]/40 mx-auto lg:mx-0 rounded-full" />
            <ul className="space-y-3 pt-2 w-full flex flex-col items-center lg:items-start">
              {[
                { name: 'Contact Command Desk', action: 'direct-support' },
                { name: 'Pin Coverage FAQs', action: 'faqs' },
                { name: 'Live Box Tracking', action: 'track' },
                { name: 'Cold-Return Policies', action: 'returns' },
                { name: 'Same Day Cut Times', action: 'catch' }
              ].map((link, i) => (
                <li key={i}>
                  <button
                    id={`footer-support-link-${i}`}
                    onClick={() => setSupportMsg(`Kadal 2 Kadaai Sourcing Support Desk: Sourced at dawn logistics coverage.\nOperational hours: 6:00 AM - 10:00 PM.\nWhatsApp Support: +91 90050 40030.`)}
                    className="text-sky-100/70 hover:text-white hover:underline decoration-[#00B4D8] decoration-2 underline-offset-4 transition-all text-xs font-sans font-medium cursor-pointer text-center lg:text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: High-Convert Premium Newsletter Frame */}
          <div className="space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-1.5 w-full flex flex-col items-center lg:items-start">
              <h4 className="text-[#00B4D8] font-extrabold uppercase tracking-widest text-[12px] font-mono">
                Direct Dawn Memo
              </h4>
              <div className="w-8 h-[2px] bg-[#00B4D8]/40 mx-auto lg:mx-0 rounded-full" />
              <p className="text-[11px] text-sky-100/60 leading-normal font-sans pt-1 max-w-sm">
                Sign up to receive early morning daily auction alerts and live catamaran catalog discounts.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3 w-full max-w-sm">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-sky-950/50 border border-sky-850 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]/30 focus:outline-none rounded-xl text-xs text-white placeholder-sky-300/30 transition-all font-sans"
                />
                <Mail className="h-4 w-4 absolute left-3.5 top-3.5 text-sky-300/40" />
                <button
                  id="footer-subscribe-btn"
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-2 bg-[#0077B6] hover:bg-[#0096C7] text-white rounded-lg transition-all cursor-pointer flex items-center justify-center hover:shadow-[0_0_10px_rgba(0,180,216,0.3)] duration-300"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5 text-white" /> : <Send className="h-3.5 w-3.5 text-white" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-bold font-sans flex items-center gap-1 justify-center lg:justify-start">
                  <span>✓ Verified. Sourcing alerts routed to mailbox!</span>
                </p>
              )}
            </form>

            <div className="flex items-center gap-2 text-[10.5px] leading-relaxed text-sky-200/50 pt-3 border-t border-sky-950 w-full justify-center lg:justify-start">
              <Phone className="h-3.5 w-3.5 text-[#00B4D8]" strokeWidth={2.5} />
              <span className="font-mono tracking-wide">Support Core: +91 90050 40030</span>
            </div>
          </div>

        </div>

        {/* Footer Deep-Bottom Corporate Bar */}
        <div className="pt-8 text-xs text-sky-200/40 font-mono flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 text-center lg:text-left">
            <span className="font-sans font-light">© 2026 Kadal 2 Kadaai Foodworks Private Limited</span>
            <div className="flex justify-center gap-3">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policies</span>
              <span>·</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Sourcing</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-sky-950/40 rounded-xl border border-sky-900/40">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-300 font-mono">Dual Gate Safe SSL Secured</span>
          </div>
        </div>

      </div>

      {/* Modern High-Aesthetic Modal Component replacement for alerts */}
      {supportMsg && (
        <div className="fixed inset-0 bg-[#020224]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 p-8 rounded-3xl max-w-md w-full relative border border-slate-100 shadow-2xl flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#0077B6]/10 mb-4 flex items-center justify-center text-[#0077B6]">
              <Anchor className="h-6 w-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#03045E] mb-3 text-center">Sourcing Helpdesk Info</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-sans whitespace-pre-line leading-relaxed text-center mb-6">{supportMsg}</p>
            <button
              onClick={() => setSupportMsg(null)}
              className="w-full bg-[#03045E] hover:bg-[#0077B6] text-white font-extrabold text-xs py-3 rounded-xl cursor-pointer transition-colors shadow-md hover:shadow-[#0077B6]/10"
            >
              Close Information Details
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
