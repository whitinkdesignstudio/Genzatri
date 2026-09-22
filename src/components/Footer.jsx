import React from 'react';
import Logo from './Logo';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Calendar, Clock } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start justify-between">

          {/* Column 1: Logo & Summary (4 Cols on desktop) */}
          <div className="md:col-span-4 space-y-3.5">
            <Logo size="lg" />

            <p className="text-xs text-[#F3EAD9]/70 leading-relaxed max-w-sm pt-0.5">
              Ahmedabad's finest air-conditioned Garba festival. Experience 4 nights of Bollywood themes, Mandali & traditional Garba, powered by live dhol, soulful singers, and electrifying live bands.
            </p>

            <div className="space-y-1.5 text-xs text-[#D4AF37] font-semibold pt-0.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                <span>{EVENT_DETAILS.datesFull}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                <span>{EVENT_DETAILS.venueShort}, Ahmedabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                <span>8:00 PM – 5:00 AM</span>
              </div>
            </div>
          </div>

          {/* Column 2 & 3: EXPLORE & COMMUNITY & ORGANISED BY (4 Cols on Desktop) */}
          <div className="md:col-span-4 space-y-4 pt-1 md:pt-0">
            {/* EXPLORE & COMMUNITY Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* EXPLORE */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
                  EXPLORE
                </h4>
                <ul className="space-y-1.5 text-xs font-semibold text-[#F3EAD9]/80">
                  <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
                  <li><a href="#tickets" className="hover:text-[#D4AF37] transition-colors">Passes & Tickets</a></li>
                  <li><a href="#lineup" className="hover:text-[#D4AF37] transition-colors">Artist Lineup</a></li>
                  <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a></li>
                </ul>
              </div>

              {/* COMMUNITY */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
                  COMMUNITY
                </h4>
                <ul className="space-y-1.5 text-xs font-semibold text-[#F3EAD9]/80">
                  <li><a href="#tickets" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a></li>
                  <li><a href="#faqs" className="hover:text-[#D4AF37] transition-colors">Facing Issues</a></li>
                  <li><a href="#faqs" className="hover:text-[#D4AF37] transition-colors">FAQs</a></li>
                  <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a></li>
                </ul>
              </div>
            </div>

            {/* ORGANISED BY Section directly under EXPLORE & COMMUNITY */}
            <div className="space-y-2 pt-2.5 border-t border-[#D4AF37]/20">
              <h4 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
                ORGANISED BY
              </h4>
              <div>
                <div className="inline-flex items-center justify-center bg-white/95 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl shadow-lg border border-[#D4AF37]/60 gap-4 sm:gap-6">
                  {/* Shree Balaji Events Logo - High prominence */}
                  <img
                    src="/assets/images/organizer_shree_balaji_clean.png"
                    alt="Shree Balaji Events LLP"
                    className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-200 hover:scale-105"
                    title="Shree Balaji Events LLP"
                  />

                  {/* Vertical Divider */}
                  <div className="h-11 sm:h-13 w-[1.5px] bg-[#D4AF37]/50 shrink-0" />

                  {/* Astha Marketing Logo - High prominence */}
                  <img
                    src="/assets/images/organizer_astha_clean.png"
                    alt="Astha Marketing Events Advertising"
                    className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                    title="Astha Marketing Events Advertising"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: TICKETS AVAILABLE ON & FOLLOW US ON (4 Cols on Desktop) */}
          <div className="md:col-span-4 space-y-3.5 text-left pt-1 md:pt-0">
            <div className="space-y-2">
              <h4 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
                TICKETS AVAILABLE ON
              </h4>
              <p className="text-xs text-[#F3EAD9]/85 font-medium leading-relaxed">
                Available on <span className="text-[#D4AF37] font-bold">BookMyShow</span>, <span className="text-[#D4AF37] font-bold">District</span>, <span className="text-[#D4AF37] font-bold">MiPass</span> & <span className="text-[#D4AF37] font-bold">AllEvents</span>
              </p>

              {/* 2x2 Grid of 4 Partner Logos */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {/* BookMyShow (Active Link) */}
                <a
                  href="https://in.bookmyshow.com/activities/genzatri-ahmedabad-s-ac-dome/ET00517258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white px-2.5 sm:px-4 py-2 rounded-xl shadow-md border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-200 h-11 sm:h-13 flex items-center justify-center w-full cursor-pointer"
                  title="Book tickets on BookMyShow"
                >
                  <img 
                    src="/assets/images/logo_bookmyshow_perfect.png" 
                    alt="BookMyShow" 
                    className="h-6 sm:h-8 w-auto max-w-[90%] max-h-[85%] object-contain block select-none"
                  />
                </a>

                {/* District by Zomato (Active Link) */}
                <a
                  href="https://www.district.in/events/genzatri-ahmedabads-ac-dome-oct16-2026-buy-tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white px-2 sm:px-3 py-1.5 rounded-xl shadow-md border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-200 h-11 sm:h-13 flex items-center justify-center w-full cursor-pointer"
                  title="Book on District by Zomato"
                >
                  <img 
                    src="/assets/images/logo_district_perfect.png" 
                    alt="District by Zomato" 
                    className="h-8 sm:h-10 md:h-11 w-auto max-w-[95%] max-h-[92%] object-contain block select-none transform scale-110"
                  />
                </a>

                {/* MEE PASS (Visual Logo Only) */}
                <div 
                  className="bg-white px-2.5 sm:px-4 py-2 rounded-xl shadow-md border border-[#D4AF37]/40 h-11 sm:h-13 flex items-center justify-center w-full select-none"
                  title="MiPass Partner"
                >
                  <img 
                    src="/assets/images/logo_mepass_perfect.png" 
                    alt="MiPass" 
                    className="h-6 sm:h-8 w-auto max-w-[90%] max-h-[85%] object-contain block"
                  />
                </div>

                {/* AllEvents (Visual Logo Only) */}
                <div 
                  className="bg-white px-2.5 sm:px-4 py-2 rounded-xl shadow-md border border-[#D4AF37]/40 h-11 sm:h-13 flex items-center justify-center w-full select-none"
                  title="AllEvents Partner"
                >
                  <img 
                    src="/assets/images/logo_allevents_horizontal.png" 
                    alt="AllEvents" 
                    className="h-6 sm:h-8 w-auto max-w-[90%] max-h-[85%] object-contain block"
                  />
                </div>
              </div>
            </div>

            {/* Follow Us On (Instagram & Facebook Only) */}
            <div className="space-y-2 pt-2.5 border-t border-[#D4AF37]/20 flex items-center justify-between sm:justify-start sm:gap-6">
              <h5 className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">
                FOLLOW US ON
              </h5>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2D0A22] border-2 border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A060A] transition-all duration-300 shadow-md hover:scale-110"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2D0A22] border-2 border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A060A] transition-all duration-300 shadow-md hover:scale-110"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-[#F3EAD9]/60 gap-4">
          <p>© {currentYear} GENZATRI. All rights reserved.</p>
          <p className="text-[#D4AF37] font-bold">
            Designed by White Ink Design Studio
          </p>
        </div>

      </div>
    </footer>
  );
}
