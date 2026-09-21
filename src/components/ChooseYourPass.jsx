import React from 'react';
import { User, Users, UsersRound } from 'lucide-react';
import { PASSES } from '../data/eventData';

export default function ChooseYourPass({ onBookPass }) {
  const getPassIcon = (id) => {
    if (id === 'solo') {
      return <User className="w-4 h-4 text-[#F5E096]" />;
    }
    if (id === 'couple') {
      return <Users className="w-4 h-4 text-[#F5E096]" />;
    }
    return <UsersRound className="w-4 h-4 text-[#F5E096]" />;
  };

  return (
    <section id="tickets" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#2D0A22] text-[#F3EAD9] relative overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Side Mandala Ornaments (Matching Artist Section Design) */}
      <img
        src="/assets/images/ChatGPT%20Image%20Sep%2016,%202026,%2012_35_35%20PM.png"
        alt="Side Mandala Flourish"
        className="absolute top-0 right-0 h-44 sm:h-64 md:h-80 w-auto object-contain pointer-events-none opacity-40 select-none z-0 filter brightness-125"
      />
      <img
        src="/assets/images/ChatGPT%20Image%20Sep%2016,%202026,%2012_35_35%20PM.png"
        alt="Side Mandala Flourish"
        className="absolute top-0 left-0 h-44 sm:h-64 md:h-80 w-auto object-contain scale-x-[-1] pointer-events-none opacity-40 select-none z-0 filter brightness-125"
      />

      {/* Background Section Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Seamless 2-Column Split Box Matching Reference Design */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl flex flex-col lg:flex-row items-stretch">
          
          {/* Left Column: Royal Pass Banner Container (#1B0312) */}
          <div className="lg:w-5/12 relative bg-[#1B0312] flex items-center justify-center min-h-[380px] lg:min-h-[480px] border-b lg:border-b-0 lg:border-r border-[#D4AF37]/40 group overflow-hidden">
            <img
              src="/assets/images/royal_pass_ticket_banner.jpg"
              alt="GENZATRI Royal Pass - Your Pass To Unforgettable Nights"
              loading="eager"
              className="w-full h-full object-cover object-top block select-none transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Column: Deep Royal Maroon Pass Panel (#2D0A22) with Authentic Ticket Cards */}
          <div className="lg:w-7/12 bg-[#2D0A22] relative p-5 sm:p-7 lg:p-8 flex flex-col justify-center space-y-5 sm:space-y-6 overflow-hidden">
            

            {/* Header Content */}
            <div className="relative z-10 space-y-1.5 text-center">
              <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider text-[#F3EAD9] uppercase pt-1">
                CHOOSE YOUR NAVRATRI VIBE
              </h3>
              <p className="text-xs sm:text-sm font-extrabold tracking-widest text-[#D4AF37] uppercase">
                More people. More memories.
              </p>
            </div>

            {/* 3 Ticket Passes Grid matching Reference Ticket Layout (Filling Height Elegantly) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-3 lg:gap-3.5 items-stretch">
              {PASSES.map((pass) => (
                <div
                  key={pass.id}
                  className="relative bg-gradient-to-br from-[#27071B] via-[#1E0515] to-[#14030E] rounded-2xl border border-[#6E2346]/80 shadow-xl flex items-stretch min-h-[260px] sm:min-h-[290px] overflow-hidden group hover:border-[#D4AF37] hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Left Edge Semicircle Cutout Notch */}
                  <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#2D0A22] border-r border-[#6E2346]/80 z-20 pointer-events-none" />

                  {/* Right Edge Semicircle Cutout Notch */}
                  <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#2D0A22] border-l border-[#6E2346]/80 z-20 pointer-events-none" />

                  {/* Top Perforation Notch */}
                  <div className="absolute left-[42px] sm:left-[44px] -top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2D0A22] border-b border-[#6E2346]/60 z-20 pointer-events-none" />

                  {/* Bottom Perforation Notch */}
                  <div className="absolute left-[42px] sm:left-[44px] -bottom-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2D0A22] border-t border-[#6E2346]/60 z-20 pointer-events-none" />

                  {/* Left Tear-Off Stub */}
                  <div className="w-[42px] sm:w-[44px] shrink-0 bg-[#1B0312]/90 border-r border-dashed border-[#D4AF37]/40 flex flex-col items-center justify-between py-4 px-0.5 relative select-none">
                    {/* Top Icon Badge */}
                    <div className="w-7 h-7 rounded-full bg-[#360D25] border border-[#D4AF37]/50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {getPassIcon(pass.id)}
                    </div>

                    {/* Rotated Vertical Stub Label */}
                    <div 
                      style={{ writingMode: 'vertical-rl' }}
                      className="rotate-180 text-[10px] font-black tracking-[0.28em] text-[#E8C88B] uppercase select-none py-2"
                    >
                      {pass.stubLabel || pass.name.split(' ')[0]}
                    </div>

                    {/* Decorative Ticket Barcode */}
                    <div className="opacity-45 flex items-center gap-[1.5px] h-5 py-0.5 select-none" aria-hidden="true">
                      <div className="w-[1.5px] h-full bg-[#E8C88B]" />
                      <div className="w-[1px] h-full bg-[#E8C88B]" />
                      <div className="w-[2.5px] h-full bg-[#E8C88B]" />
                      <div className="w-[1px] h-full bg-[#E8C88B]" />
                      <div className="w-[2px] h-full bg-[#E8C88B]" />
                      <div className="w-[1px] h-full bg-[#E8C88B]" />
                    </div>
                  </div>

                  {/* Right Main Ticket Body */}
                  <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 text-left space-y-2 pl-3 sm:pl-3.5">
                    <div className="space-y-1.5">
                      {/* Sub-label */}
                      <span className="block text-[9px] font-bold tracking-[0.18em] text-[#D4AF37]/90 uppercase">
                        {pass.id === 'solo' ? 'INDIVIDUAL' : pass.id === 'couple' ? 'DUO PAIR' : 'TRIBE PASS'}
                      </span>

                      {/* Pass Name */}
                      <h4 className="font-serif-display font-black text-[11px] sm:text-xs text-[#F3EAD9] uppercase leading-tight tracking-wider">
                        {pass.name}
                      </h4>

                      {/* Price */}
                      <div className="font-serif text-2xl sm:text-3xl font-black text-white leading-none tracking-tight pt-1">
                        {pass.formattedPrice}
                      </div>

                      {/* Description */}
                      <p className="text-[10px] text-[#EAD0B3]/85 leading-snug font-medium pt-0.5">
                        {pass.description}
                      </p>

                      {/* Perks Highlights */}
                      <div className="pt-2 border-t border-[#6E2346]/50 space-y-1 text-[9px] text-[#F3EAD9]/80 font-medium">
                        {pass.id === 'solo' && (
                          <>
                            <div className="flex items-center gap-1 text-[#F5E096]">✓ 1 Person Entry</div>
                            <div className="flex items-center gap-1 text-[#EAD0B3]/75">• AC Dome Arena Access</div>
                          </>
                        )}
                        {pass.id === 'couple' && (
                          <>
                            <div className="flex items-center gap-1 text-[#F5E096]">✓ 2 Persons Entry</div>
                            <div className="flex items-center gap-1 text-[#EAD0B3]/75">• AC Dome Arena Access</div>
                          </>
                        )}
                        {pass.id === 'group' && (
                          <>
                            <div className="flex items-center gap-1 text-[#F5E096]">✓ 20 Persons Tribe</div>
                            <div className="flex items-center gap-1 text-[#EAD0B3]/75">• Dedicated Group Entry</div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onBookPass(pass)}
                        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227] text-[#0A060A] text-[11px] font-black tracking-wider uppercase shadow-md hover:brightness-110 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>Book Now</span>
                        <span className="text-xs font-black">→</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
