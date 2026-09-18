import React from 'react';
import Logo from './Logo';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Calendar, Clock } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-[#F3EAD9] border-t border-[#D4AF37]/30 pt-14 pb-8 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(to bottom, #521C42 0%, #380E2D 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Column 1: Logo & Summary (4 Cols) - Identical Logo as Header */}
          <div className="md:col-span-4 space-y-4">
            <Logo size="lg" />

            <p className="text-xs text-[#F3EAD9]/70 leading-relaxed max-w-sm pt-1">
              Ahmedabad's finest air-conditioned Garba festival. Experience 4 nights of Bollywood themes, Mandali & traditional Garba, powered by live dhol, soulful singers, and electrifying live bands.
            </p>

            <div className="space-y-2 text-xs text-[#D4AF37] font-semibold pt-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                <span>{EVENT_DETAILS.datesFull}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                <span>{EVENT_DETAILS.venueShort}, Ahmedabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                <span>8:00 PM – 5:00 AM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#F3EAD9]/80">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#tickets" className="hover:text-[#D4AF37] transition-colors">Passes & Tickets</a></li>
              <li><a href="#lineup" className="hover:text-[#D4AF37] transition-colors">Artist Lineup</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Column 3: Media & Information (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
              COMMUNITY
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#F3EAD9]/80">
              <li><a href="#tickets" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a></li>
              <li><a href="#faqs" className="hover:text-[#D4AF37] transition-colors">Facing Issues</a></li>
              <li><a href="#faqs" className="hover:text-[#D4AF37] transition-colors">FAQs</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Column 4: Tickets Available On & Follow Us On (4 Cols) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="space-y-2">
              <h4 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
                TICKETS AVAILABLE ON
              </h4>
              <p className="text-xs text-[#F3EAD9]/85 font-medium leading-relaxed">
                Tickets Available On <span className="text-[#D4AF37] font-bold">BookMyShow</span>, <span className="text-[#D4AF37] font-bold">MiPass</span>, and <span className="text-[#D4AF37] font-bold">AllEvents</span>
              </p>

              {/* Real Partner Logos with Links */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href="https://in.bookmyshow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 hover:bg-white px-3 py-1.5 rounded-lg flex items-center justify-center shadow-md border border-[#D4AF37]/30 hover:scale-105 transition-all duration-200 h-8"
                  title="Book tickets on BookMyShow"
                >
                  <img 
                    src="/assets/images/logo_bookmyshow_real.png" 
                    alt="BookMyShow" 
                    className="h-4 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://meepass.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 hover:bg-white px-3 py-1.5 rounded-lg flex items-center justify-center shadow-md border border-[#D4AF37]/30 hover:scale-105 transition-all duration-200 h-8"
                  title="Book passes on MiPass"
                >
                  <img 
                    src="/assets/images/logo_mepass_hd.png" 
                    alt="MiPass" 
                    className="h-4.5 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://allevents.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 hover:bg-white px-3 py-1.5 rounded-lg flex items-center justify-center shadow-md border border-[#D4AF37]/30 hover:scale-105 transition-all duration-200 h-8"
                  title="Book tickets on AllEvents"
                >
                  <img 
                    src="/assets/images/logo_allevents_real.png" 
                    alt="AllEvents" 
                    className="h-4 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Follow Us On (Instagram & Facebook Only) */}
            <div className="space-y-2 pt-2 border-t border-[#D4AF37]/20">
              <h5 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
                FOLLOW US ON
              </h5>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#2D0A22] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A060A] transition-all duration-300 shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#2D0A22] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A060A] transition-all duration-300 shadow-sm"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-[#F3EAD9]/60 gap-4">
          <p>© {currentYear} GENZATRI. All rights reserved.</p>
          <p className="text-[#D4AF37]">
            Designed for an extraordinary Navratri celebration
          </p>
        </div>

      </div>
    </footer>
  );
}
