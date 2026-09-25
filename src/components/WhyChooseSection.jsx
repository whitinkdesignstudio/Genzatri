import React from 'react';
import Card from './Card';
import { FEATURES } from '../data/eventData';

export default function WhyChooseSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#2D0A22] text-[#F3EAD9] border-b border-[#D4AF37]/30 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto space-y-12 text-center relative z-10">
        
        {/* Main Highlight Header */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-4">
            <div className="hidden sm:block w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="hidden sm:block w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-[#F3EAD9] tracking-tight text-center leading-tight">
              <span className="whitespace-nowrap block sm:inline">WHY CHOOSE</span>
              <span className="whitespace-nowrap block sm:inline sm:ml-3">GENZATRI?</span>
            </h2>
            <div className="hidden sm:block w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="hidden sm:block w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-xs sm:text-sm font-extrabold text-[#D4AF37] uppercase tracking-[0.2em] pt-1">
            IT'S MORE THAN GARBA. IT'S AN EXPERIENCE.
          </p>
        </div>

        {/* 7 Feature Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3.5 sm:gap-4 items-stretch">
          {FEATURES.map((feature) => (
            <Card
              key={feature.id}
              variant="purple"
              className="flex flex-col items-center text-center justify-between space-y-3 hover:border-[#D4AF37] group transition-all duration-300 overflow-hidden p-3 sm:p-3.5 bg-[#23071A]/80 backdrop-blur-sm shadow-md hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
            >
              {/* Feature Image Frame */}
              <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden border border-[#D4AF37]/40 relative group-hover:border-[#D4AF37] transition-all shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1029] via-transparent to-transparent" />
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1 flex-1 flex flex-col justify-center min-h-[48px]">
                <h3 className="font-serif-display font-black text-xs sm:text-sm text-[#F3EAD9] uppercase leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-semibold text-[#D4AF37] leading-tight">
                  {feature.subtitle}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
