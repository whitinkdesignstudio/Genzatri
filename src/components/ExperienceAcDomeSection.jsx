import React from 'react';

export default function ExperienceAcDomeSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#2D0A22] text-[#F3EAD9] border-b border-[#D4AF37]/30 py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">

        {/* Left Column: Text Information */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">

          {/* Main Display Headline */}
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F3EAD9] leading-tight tracking-tight">
            Experience AC Dome Garba
          </h2>

          {/* Body Content */}
          <div className="space-y-3.5 text-[#F3EAD9]/85 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            <p>
              GENZATRI 2026 brings Ahmedabad its first climate-controlled Dome Garba — a four-night Navratri experience built for Gen Z.
            </p>
            <p>
              Step inside for cooler nights, hotter moves, live singers and non-stop dhol, all under one glowing dome in the heart of the city.
            </p>

            {/* Performance Schedule Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="bg-[#1C0416] p-3 rounded-xl border border-[#D4AF37]/40 shadow-sm hover:border-[#D4AF37] transition-colors">
                <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-wider block">12:00 AM</span>
                <span className="text-xs sm:text-sm font-black text-[#F3EAD9] uppercase block mt-0.5">Orchestra</span>
              </div>
              <div className="bg-[#1C0416] p-3 rounded-xl border border-[#D4AF37]/40 shadow-sm hover:border-[#D4AF37] transition-colors">
                <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-wider block">12:00 – 2:30 AM</span>
                <span className="text-xs sm:text-sm font-black text-[#F3EAD9] uppercase block mt-0.5">Atrangi Band</span>
              </div>
              <div className="bg-[#1C0416] p-3 rounded-xl border border-[#D4AF37]/40 shadow-sm hover:border-[#D4AF37] transition-colors">
                <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-wider block">2:30 – 5:00 AM</span>
                <span className="text-xs sm:text-sm font-black text-[#F3EAD9] uppercase block mt-0.5">Mandali</span>
              </div>
            </div>

            <p className="font-bold text-base sm:text-lg text-[#D4AF37] border-l-2 border-[#D4AF37] pl-3.5 pt-1">
              Tradition meets a new vibe.
            </p>
          </div>

        </div>

        {/* Right Column: AC Dome Illuminated Showcase Photo */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-[#D4AF37]/40 group">
            <img
              src="/assets/images/ac_dome_feature.jpg"
              alt="Experience AC Dome Garba - GENZATRI 2026"
              className="w-full h-[300px] sm:h-[380px] md:h-[440px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              decoding="sync"
            />
            {/* Subtle bottom gradient overlay for photo depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
