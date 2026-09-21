import React, { useState } from 'react';
import { FAQS } from '../data/eventData';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(FAQS[0].id);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Split FAQs evenly into 2 columns for desktop
  const col1 = FAQS.slice(0, 3);
  const col2 = FAQS.slice(3, 6);

  const renderFaqItem = (faq) => {
    const isOpen = openFaq === faq.id;

    return (
      <div
        key={faq.id}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'bg-[#1D0616] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10'
            : 'bg-[#1D0616]/70 border-[#D4AF37]/25 hover:border-[#D4AF37]/60'
        }`}
      >
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full px-6 py-5 flex items-center justify-between text-left space-x-4 focus:outline-none cursor-pointer"
        >
          <span className="font-serif-display font-bold text-base sm:text-lg text-[#F3EAD9] leading-snug">
            {faq.question}
          </span>
          <div
            className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
              isOpen
                ? 'bg-[#D4AF37] text-[#0A060A] border-[#D4AF37]'
                : 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30'
            }`}
          >
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </div>
        </button>

        {isOpen && (
          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#F3EAD9]/85 border-t border-[#D4AF37]/20 leading-relaxed animate-fadeIn">
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faqs" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#2D0A22] text-[#F3EAD9] border-b border-[#D4AF37]/30 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-4">
            <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <h2 className="font-serif-display text-3xl sm:text-5xl font-black text-[#F3EAD9] tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>

        {/* Two-Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">{col1.map(renderFaqItem)}</div>
          <div className="space-y-4">{col2.map(renderFaqItem)}</div>
        </div>

      </div>
    </section>
  );
}
