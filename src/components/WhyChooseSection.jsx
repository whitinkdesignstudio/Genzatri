import React from 'react';
import Card from './Card';
import { FEATURES } from '../data/eventData';

export default function WhyChooseSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#2D0A22] text-[#F3EAD9] border-b border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 text-center relative z-10">
        
        {/* Main Highlight Header */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-4">
            <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#F3EAD9] tracking-tight">
              WHY CHOOSE GENZATRI?
            </h2>
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-xs sm:text-sm font-extrabold text-[#D4AF37] uppercase tracking-[0.2em] pt-1">
            IT'S MORE THAN GARBA. IT'S AN EXPERIENCE.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          {FEATURES.map((feature) => (
            <Card
              key={feature.id}
              variant="purple"
              className="flex flex-col items-center text-center justify-between space-y-4 hover:border-[#D4AF37] group transition-all duration-300 overflow-hidden p-4 bg-[#23071A]/80 backdrop-blur-sm"
            >
              {/* Feature Image Frame */}
              <div className="w-full h-32 rounded-xl overflow-hidden border border-[#D4AF37]/40 relative group-hover:border-[#D4AF37] transition-all">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1029] via-transparent to-transparent" />
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1 flex-1 flex flex-col justify-center">
                <h3 className="font-serif-display font-black text-sm text-[#F3EAD9] uppercase">
                  {feature.title}
                </h3>
                <p className="text-[11px] font-semibold text-[#D4AF37]">
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
