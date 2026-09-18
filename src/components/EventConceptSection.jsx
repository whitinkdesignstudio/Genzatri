import React, { useState } from 'react';

export default function EventConceptSection() {
  const [activeIcon, setActiveIcon] = useState(4); // Mandali icon active by default

  const concepts = [
    {
      id: 'dhol',
      title: '4 Dhol Bands',
      subtitle: 'Rhythmic Thunder',
      desc: '4 electrifying dhol troupes trading non-stop beats across the arena till the dome shakes.',
      tag: '4 Dhol Bands',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="7" rx="8" ry="3.5" />
          <path d="M4 7v8c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V7" />
          <path d="M4 7l4 10.5M8 7l4 10.5M12 7l4 10.5M16 7l4 10.5M8 17.5L12 7l4 10.5" strokeWidth="1.2" opacity="0.85" />
        </svg>
      )
    },
    {
      id: 'chai',
      title: 'Food & Beverage Stalls',
      subtitle: 'Delicious Bites All Night',
      desc: 'Midnight hot chai counters and delicious festive refreshments from 8:00 PM to 5:00 AM.',
      tag: 'F&B Stalls',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 9h1a3 3 0 0 1 0 6h-1" />
          <path d="M4 9h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z" />
          <path d="M7 3v2M10 2v3M13 3v2" />
        </svg>
      )
    },
    {
      id: 'themes',
      title: '4 Bollywood Themes',
      subtitle: 'Festive Glamour',
      desc: 'Each night features a distinct Bollywood-inspired festive theme and outfit mood.',
      tag: '4 Bollywood Themes',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      )
    },
    {
      id: 'dome',
      title: 'First AC Dome',
      subtitle: 'Stay Cool, Dance Longer',
      desc: 'Ahmedabad’s premier massive climate-controlled dome with sub-zero cooling.',
      tag: 'AC Dome',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 4c1 9-3 16-9 16Z" />
          <path d="M4 20l9-9" />
        </svg>
      )
    },
    {
      id: 'mandali',
      title: '5,000+ Khelaiyas',
      subtitle: 'One Giant Circle',
      desc: '5,000+ passionate khelaiyas moving together in synchronized concentric mandali circles.',
      tag: '5,000+ Khelaiyas',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" fillOpacity="0.25" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="19" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <line x1="12" y1="7" x2="12" y2="9.5" />
          <line x1="12" y1="14.5" x2="12" y2="17" />
          <line x1="7" y1="12" x2="9.5" y2="12" />
          <line x1="14.5" y1="12" x2="17" y2="12" />
        </svg>
      )
    },
    {
      id: 'tradition',
      title: 'Sacred Aarti & Heritage',
      subtitle: 'Soulful Devotion',
      desc: 'Traditional Mataji aarti every evening blending heritage with modern grand acoustics.',
      tag: 'Heritage & Aarti',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      )
    },
    {
      id: 'dandiya',
      title: 'Traditional Dandiya Raas',
      subtitle: 'Clash of Sticks',
      desc: 'Authentic 2-taali, 3-taali, and high-tempo dandiya rhythms on open dance flooring.',
      tag: 'Dandiya Raas',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="19" x2="19" y2="5" />
          <line x1="9" y1="21" x2="21" y2="9" />
          <circle cx="5" cy="19" r="1.5" fill="currentColor" />
          <circle cx="9" cy="21" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'singers',
      title: '4 Soulful Voices',
      subtitle: 'Celebrity Folk Artists',
      desc: 'Mitesh & Nima Bhatt, Namrata Soni, Dr. Mitali Nag, and Vyaas Brothers live on stage.',
      tag: '4 Singers',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="16" r="3" fill="currentColor" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      id: 'energy',
      title: 'Endless Energy',
      subtitle: '8:00 PM – 5:00 AM',
      desc: 'Non-stop music, mandali, and memories for 9 hours every single night.',
      tag: 'Endless Energy',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.2" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
          <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
          <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
        </svg>
      )
    }
  ];

  const tags = [
    '4 Bollywood Themes',
    'AC Dome',
    '5,000+ Khelaiyas',
    '4 Singers',
    '4 Dhol Bands'
  ];

  const currentConcept = concepts[activeIcon];

  return (
    <section 
      id="concept" 
      className="w-full bg-[#180210] text-[#F3EAD9] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-b border-[#D4AF37]/25"
      style={{
        background: 'radial-gradient(ellipse at 30% 50%, #29061E 0%, #170210 55%, #0D0108 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Interactive Royal Frame with Clickable 3x3 Grid */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          
          <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-[883/637] flex items-center justify-center select-none">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 w-3/4 h-3/4 m-auto rounded-full bg-gradient-to-tr from-[#D4AF37]/20 via-[#700638]/30 to-transparent blur-3xl pointer-events-none" />

            {/* Dark Maroon Inner Chamber Fill */}
            <div className="absolute inset-[13%] rounded-[42px] bg-gradient-to-br from-[#2D0620] via-[#220417] to-[#16020E] shadow-[inset_0_0_35px_rgba(0,0,0,0.9)] z-0" />

            {/* Authentic Transparent Royal Gold Frame Overlay */}
            <img
              src="/assets/images/royal_frame_transparent.png"
              alt="GENZATRI Royal Gold Frame"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20 drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)]"
              loading="lazy"
            />

            {/* Real Interactive 3x3 Grid Container */}
            <div className="absolute inset-[24%_18%] z-10">
              
              {/* Horizontal Gold Grid Divider 1 */}
              <div className="absolute top-[33.33%] left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/75 to-transparent pointer-events-none" />
              {/* Horizontal Gold Grid Divider 2 */}
              <div className="absolute top-[66.66%] left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/75 to-transparent pointer-events-none" />

              {/* Vertical Gold Grid Divider 1 */}
              <div className="absolute left-[33.33%] top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-transparent via-[#D4AF37]/75 to-transparent pointer-events-none" />
              {/* Vertical Gold Grid Divider 2 */}
              <div className="absolute left-[66.66%] top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-transparent via-[#D4AF37]/75 to-transparent pointer-events-none" />

              {/* 4 Junction Golden Accent Beads */}
              <div className="absolute top-[33.33%] left-[33.33%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F5E096] border border-[#6B1838] shadow-[0_0_8px_#D4AF37] pointer-events-none z-15" />
              <div className="absolute top-[33.33%] left-[66.66%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F5E096] border border-[#6B1838] shadow-[0_0_8px_#D4AF37] pointer-events-none z-15" />
              <div className="absolute top-[66.66%] left-[33.33%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F5E096] border border-[#6B1838] shadow-[0_0_8px_#D4AF37] pointer-events-none z-15" />
              <div className="absolute top-[66.66%] left-[66.66%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F5E096] border border-[#6B1838] shadow-[0_0_8px_#D4AF37] pointer-events-none z-15" />

              {/* 9 Clickable Concept Icon Buttons */}
              <div className="w-full h-full grid grid-cols-3 grid-rows-3 relative z-10">
                {concepts.map((item, idx) => {
                  const isActive = activeIcon === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIcon(idx)}
                      title={`Click to view: ${item.title}`}
                      className="group flex items-center justify-center p-1 focus:outline-none cursor-pointer transition-transform duration-200 active:scale-95"
                    >
                      <div
                        className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-[#D4AF37]/25 text-[#FFF2B2] border border-[#F5E096] shadow-[0_0_20px_rgba(212,175,55,0.7)] scale-110'
                            : 'text-[#E8C88B]/80 hover:text-[#FFF2B2] hover:bg-[#D4AF37]/15 hover:scale-115 hover:shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                        }`}
                      >
                        {item.icon}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

          {/* Dynamic Interactive Card for the Clicked Concept */}
          <div className="w-full max-w-[440px] sm:max-w-[480px] mt-4 p-3.5 rounded-2xl bg-[#26061B]/80 border border-[#D4AF37]/35 shadow-lg backdrop-blur-xs transition-all duration-300">
            <div className="flex items-center justify-between gap-2 border-b border-[#D4AF37]/20 pb-1.5 mb-1.5">
              <span className="text-xs font-black tracking-widest text-[#E5C158] uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
                {currentConcept.title}
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#EAD0B3]/90 leading-relaxed">
              {currentConcept.desc}
            </p>
          </div>

        </div>

        {/* Right Column: Event Concept Narrative & Tags (Matching Screenshot) */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
          

          {/* Main Title - 3 Lines, Italic Serif Display */}
          <div>
            <h2 className="font-serif-display italic font-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#F3EAD9] leading-[1.08] tracking-tight">
              FOUR NIGHTS. <br />
              ONE DOME. <br />
              ENDLESS ENERGY.
            </h2>
            {/* Gold Underline Accent */}
            <div className="w-14 h-[2.5px] bg-[#D4AF37] mt-4" />
          </div>

          {/* Descriptive Narrative */}
          <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base leading-relaxed text-[#EAD0B3]/85 font-normal pt-1">
            <p>
              GENZATRI 2026 unfolds across 4 nights, each dressed in its own Bollywood-inspired theme — all under Ahmedabad's first AC Dome built just for Garba. Expect 5,000+ khelaiyas moving as one circle, 4 soulful singers and 4 electrifying dhol bands trading beats till the dome shakes.
            </p>
            <p>
              Add in food & beverage stalls, high security and non-stop energy from 8:00 PM to 5:00 AM, and you've got four nights Ahmedabad won't stop talking about.
            </p>
            <p className="italic font-semibold text-[#F5EAD9] pt-1">
              It's not just Garba. It's GENZATRI.
            </p>
          </div>

          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-[#2A081C]/90 border border-[#6E2346]/80 text-xs sm:text-[13px] font-medium text-[#F3EAD9] shadow-sm hover:border-[#D4AF37]/70 hover:bg-[#380E28] transition-all select-none"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
