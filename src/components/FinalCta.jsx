import React from 'react';
import { Ticket, Sparkles } from 'lucide-react';

export default function FinalCta({ onBookClick }) {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#091F26] via-[#071920] to-[#05131A] text-[#F3EAD9] border-b border-[#00E5FF]/20 text-center overflow-hidden">

      {/* NO background dome vector outline per user feedback */}

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">

        {/* Headline (Eyebrow removed) */}
        <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-black text-[#F3EAD9] leading-tight tracking-tight">
          READY TO BE A PART OF SOMETHING BIG?
        </h2>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm font-semibold text-[#F3EAD9]/80 tracking-wider max-w-2xl mx-auto">
          Passes are selling out fast for 16–19 October 2026. Secure your spot now for 4 nights of pure magic.
        </p>

        {/* Centered Gold Button */}
        <div className="pt-2">
          <button
            onClick={onBookClick}
            className="px-8 py-3.5 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#0A060A] bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227] rounded-full shadow-xl hover:brightness-110 transition-all duration-300 transform active:scale-95"
          >
            BOOK YOUR TICKETS
          </button>
        </div>

      </div>
    </section>
  );
}
