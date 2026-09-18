import React from 'react';
import MandalaCorner from './MandalaCorner';

// 1. Bold Solid Snowflake for AC Dome
const BoldSnowflake = ({ className = "w-12 h-12 text-[#F5E096]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
    {/* Diamond arrow tips */}
    <path d="M12 1.5l-2.2 3.5h4.4z" fill="currentColor" stroke="none" />
    <path d="M12 22.5l-2.2-3.5h4.4z" fill="currentColor" stroke="none" />
    <path d="M1.5 12l3.5-2.2v4.4z" fill="currentColor" stroke="none" />
    <path d="M22.5 12l-3.5-2.2v4.4z" fill="currentColor" stroke="none" />
  </svg>
);

// 2. Bold Solid 3 People for 5,000+ Khelaiyas
const SolidUsersIcon = ({ className = "w-12 h-12 text-[#F5E096]" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    {/* Center Leader Person */}
    <circle cx="16" cy="10" r="4.5" />
    <path d="M16 16.5c-4.2 0-7.2 2.2-7.2 5.5v2h14.4v-2c0-3.3-3-5.5-7.2-5.5z" />
    {/* Left Person */}
    <circle cx="8" cy="12" r="3.5" />
    <path d="M8 17.5c-1.3 0-2.4.2-3.3.7-.8.5-1.4 1.3-1.4 2.3v1.5h4v-2.2c0-.8.2-1.6.7-2.3z" opacity="0.9" />
    {/* Right Person */}
    <circle cx="24" cy="12" r="3.5" />
    <path d="M24 17.5c1.3 0 2.4.2 3.3.7.8.5 1.4 1.3 1.4 2.3v1.5h-4v-2.2c0-.8-.2-1.6-.7-2.3z" opacity="0.9" />
  </svg>
);

// 3. Bold Solid Food & Beverage Stalls (Cup with straw + Warm Food Bowl)
const SolidFoodDrinkIcon = ({ className = "w-12 h-12 text-[#F5E096]" }) => (
  <svg 
    className={className} 
    viewBox="0 0 32 32" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Cup on right with straw */}
    <path d="M19 11h8l-1.3 15a2 2 0 0 1-2 1.8h-3.4a2 2 0 0 1-2-1.8L17.5 15" fill="currentColor" fillOpacity="0.25" />
    <path d="M21 11l4.5-8" strokeWidth="2.8" />
    {/* Bowl on left */}
    <path d="M4 17h12c0 4.8-2.7 8-6 8s-6-3.2-6-8z" fill="currentColor" fillOpacity="0.25" />
    <path d="M6 25h8" strokeWidth="3" />
    {/* Warm aroma steam lines */}
    <path d="M7 13c0-1.5 1-2 1-3.5" strokeWidth="2.2" />
    <path d="M10 13c0-1.5 1-2 1-3.5" strokeWidth="2.2" />
    <path d="M13 13c0-1.5 1-2 1-3.5" strokeWidth="2.2" />
  </svg>
);

// 4. Bold Solid Shield for High Security
const SolidShieldCheckIcon = ({ className = "w-12 h-12 text-[#F5E096]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path 
      d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" 
      fill="currentColor" 
      fillOpacity="0.25" 
      stroke="currentColor" 
      strokeWidth="2.4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M8.5 12l2.5 2.5 4.5-4.5" 
      stroke="currentColor" 
      strokeWidth="2.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// 5. Bold Solid Double Beamed Eighth Notes for Live Music
const SolidMusicNotesIcon = ({ className = "w-12 h-12 text-[#F5E096]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 3L19 6v8.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8.5L9 5.5V14.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3z" />
  </svg>
);

// 6. Bold Solid Calendar for 16 - 19 October
const SolidCalendarIcon = ({ className = "w-12 h-12 text-[#F5E096]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="3" ry="3" fill="currentColor" fillOpacity="0.15" />
    <path d="M3 10h18" strokeWidth="2.6" />
    <path d="M8 2v4M16 2v4" strokeWidth="2.8" />
    {/* Grid dots */}
    <circle cx="7.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="7.5" cy="18" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="12" cy="18" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="18" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

export default function WhyChooseFeaturesBar() {
  const features = [
    {
      id: 1,
      icon: <BoldSnowflake className="w-11 h-11 sm:w-13 sm:h-13 text-[#F5E096]" />,
      title: "AC DOME",
      titleLine2: null,
      desc1: "Stay cool.",
      desc2: "Dance longer."
    },
    {
      id: 2,
      icon: <SolidUsersIcon className="w-11 h-11 sm:w-13 sm:h-13 text-[#F5E096]" />,
      title: "5,000+",
      titleLine2: "Khelaiyas",
      desc1: "Bigger energy.",
      desc2: "Bigger vibes."
    },
    {
      id: 3,
      icon: <SolidFoodDrinkIcon className="w-11 h-11 sm:w-13 sm:h-13 text-[#F5E096]" />,
      title: "FOOD &",
      titleLine2: "BEVERAGE STALLS",
      desc1: "Delicious bites",
      desc2: "all night."
    },
    {
      id: 4,
      icon: <SolidShieldCheckIcon className="w-11 h-11 sm:w-13 sm:h-13 text-[#F5E096]" />,
      title: "HIGH SECURITY",
      titleLine2: null,
      desc1: "Dance worry-free.",
      desc2: null
    },
    {
      id: 5,
      icon: <SolidMusicNotesIcon className="w-11 h-11 sm:w-13 sm:h-13 text-[#F5E096]" />,
      title: "LIVE MUSIC,",
      titleLine2: "SINGERS & DHOL",
      desc1: "Non-stop energy",
      desc2: "from 8:00 PM - 5:00 AM"
    },
    {
      id: 6,
      icon: <SolidCalendarIcon className="w-11 h-11 sm:w-13 sm:h-13 text-[#F5E096]" />,
      title: "16 - 19",
      titleLine2: "OCTOBER 2026",
      desc1: "Mark your dates.",
      desc2: null
    }
  ];

  return (
    <section 
      id="experience-highlights" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#2D0A22] text-[#F3EAD9] border-y border-[#D4AF37]/35 relative overflow-hidden shadow-xl"
    >
      {/* 1. Traditional Corner Mandala Flourishes (Authentic Vector Lines) */}
      <MandalaCorner position="top-left" color="#D4AF37" opacity={0.35} size="w-32 h-32 sm:w-44 sm:h-44" />
      <MandalaCorner position="top-right" color="#D4AF37" opacity={0.35} size="w-32 h-32 sm:w-44 sm:h-44" />

      {/* 2. Subtle Traditional Wavy Silk Texture in Background (Pure SVG - No AI) */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="silk-waves-features" width="120" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 Q 30 0 60 20 T 120 20" fill="none" stroke="#F5E096" strokeWidth="1.5" />
              <path d="M 0 35 Q 30 15 60 35 T 120 35" fill="none" stroke="#D4AF37" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#silk-waves-features)" />
        </svg>
      </div>

      {/* 3. Central Ambient Radial Glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* 4. Main Content Container */}
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14 text-center relative z-10">
        
        {/* Header with Elegant Gold Divider Lines & Diamonds */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center">
              <div className="w-10 sm:w-20 md:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] ml-0.5" />
            </div>

            <h2 className="font-serif-display text-xl sm:text-3xl md:text-4xl font-black text-[#F3EAD9] tracking-[0.2em] sm:tracking-[0.25em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              WHY CHOOSE GENZATRI?
            </h2>

            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] mr-0.5" />
              <div className="w-10 sm:w-20 md:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>

          <p className="text-[10px] sm:text-xs md:text-sm font-extrabold text-[#D4AF37] uppercase tracking-[0.22em] sm:tracking-[0.28em] drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            IT'S MORE THAN GARBA. IT'S AN EXPERIENCE.
          </p>
        </div>

        {/* 6 Feature Columns Arranged in Exactly 1 Single Row */}
        <div className="w-full overflow-x-auto scrollbar-none pb-2">
          <div className="min-w-[700px] md:min-w-0 flex items-start justify-between w-full">
            {features.map((feature, index) => (
              <React.Fragment key={feature.id}>
                {/* Feature Item Column */}
                <div className="flex-1 flex flex-col items-center text-center space-y-2.5 px-1 sm:px-2 md:px-3 group">
                  {/* Icon Container with subtle hover animation */}
                  <div className="h-11 sm:h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(245,224,150,0.35)]">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <div className="min-h-[34px] sm:min-h-[38px] flex flex-col items-center justify-center">
                    <h3 className="text-[11px] sm:text-xs md:text-sm font-black text-[#F3EAD9] uppercase tracking-wider leading-tight">
                      {feature.title}
                    </h3>
                    {feature.titleLine2 && (
                      <span className="text-[11px] sm:text-xs md:text-sm font-black text-[#F3EAD9] uppercase tracking-wider leading-tight">
                        {feature.titleLine2}
                      </span>
                    )}
                  </div>

                  {/* Subtitle / Description */}
                  <div className="space-y-0.5 pt-0.5">
                    <p className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#F3EAD9]/75 leading-tight">
                      {feature.desc1}
                    </p>
                    {feature.desc2 && (
                      <p className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-[#F3EAD9]/75 leading-tight">
                        {feature.desc2}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vertical Gold Divider Line between Columns */}
                {index < features.length - 1 && (
                  <div 
                    className="flex items-center justify-center self-center h-14 sm:h-16 md:h-20 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/35 to-transparent pointer-events-none shrink-0" 
                    aria-hidden="true" 
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
