import React from 'react';

export default function ExperienceAcDomeSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#F5EFE6] text-[#2D0A22] border-b border-[#D4AF37]/30 py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

        {/* Left Column: Text Information */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">

          {/* Main Display Headline */}
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-black text-[#2D0A22] leading-tight tracking-tight">
            Experience AC Dome Garba
          </h2>

          {/* Body Content */}
          <div className="space-y-3.5 text-[#2D0A22]/85 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            <p>
              GENZATRI 2026 brings Ahmedabad its first climate-controlled Dome Garba — a four-night Navratri experience built for Gen Z.
            </p>
            <p>
              Step inside for cooler nights, hotter moves, live singers and non-stop dhol, all under one glowing dome in the heart of the city.
            </p>
            <p className="font-bold text-base sm:text-lg text-[#2D0A22] border-l-2 border-[#D4AF37] pl-3.5 pt-0.5">
              Tradition meets a new vibe.
            </p>
          </div>

        </div>

        {/* Right Column: AC Dome Illuminated Showcase Photo */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#2D0A22]/20 border border-[#D4AF37]/30 group">
            <img
              src="/assets/images/ac_dome_feature.jpg"
              alt="Experience AC Dome Garba - GENZATRI 2026"
              className="w-full h-[300px] sm:h-[380px] md:h-[440px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              decoding="sync"
            />
            {/* Subtle bottom gradient overlay for photo depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
