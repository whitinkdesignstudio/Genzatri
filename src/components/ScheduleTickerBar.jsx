import React from 'react';

export default function ScheduleTickerBar() {
  const scheduleItems = [
    {
      label: '12:00 – Orchestra',
      subtitle: 'Live Traditional Symphonies',
      badgeColor: 'from-[#F5E096] via-[#D4AF37] to-[#C9A227]',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A060A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-6z" />
        </svg>
      )
    },
    {
      label: '12:00 – 2:30 – Atrangi',
      subtitle: 'Bollywood Garba & High Fusion',
      badgeColor: 'from-[#F5E096] via-[#E5C158] to-[#D4AF37]',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A060A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2L12 16.6l-6.3 4.6 2.3-7.2-6-4.6h7.6z" />
        </svg>
      )
    },
    {
      label: '2:30 – 5:00 – Mandali',
      subtitle: 'Concentric Raas Circles',
      badgeColor: 'from-[#F5E096] via-[#D4AF37] to-[#AA820A]',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A060A]" viewBox="0 0 24 24" fill="currentColor">
          <ellipse cx="12" cy="7" rx="7" ry="3" />
          <path d="M5 7v8c0 1.6 3.1 3 7 3s7-1.4 7-3V7" />
        </svg>
      )
    }
  ];

  // Repeat items for continuous infinite marquee loop
  const marqueeList = [...scheduleItems, ...scheduleItems, ...scheduleItems, ...scheduleItems, ...scheduleItems, ...scheduleItems];

  return (
    <section className="w-full bg-[#180312] border-y-2 border-[#D4AF37]/40 py-3 sm:py-4 relative overflow-hidden shadow-2xl z-20">
      {/* Side Vignette Fades for Smooth Infinite Edge Transitions */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#180312] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#180312] to-transparent z-10 pointer-events-none" />

      {/* Ticker Track */}
      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 shrink-0">
          {marqueeList.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-3 sm:gap-4 bg-[#2D0A22]/90 hover:bg-[#3D0E2E] border border-[#D4AF37]/50 hover:border-[#D4AF37] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 shrink-0 group cursor-pointer"
            >
              {/* Icon Badge */}
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${item.badgeColor} flex items-center justify-center shadow-md shrink-0 group-hover:rotate-12 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Time & Title Content */}
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="font-serif-display text-xs sm:text-sm md:text-base font-black tracking-wider text-[#F5E096] uppercase drop-shadow-sm">
                  {item.label}
                </span>

                <span className="hidden md:inline-block text-[11px] font-semibold text-[#F3EAD9]/70 tracking-wide">
                  • {item.subtitle}
                </span>
              </div>

              {/* Gold Star Divider */}
              <span className="text-[#D4AF37] text-xs opacity-70 ml-2 animate-pulse">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
