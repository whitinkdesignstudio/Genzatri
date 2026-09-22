import React from 'react';
import { Music, Guitar, Crown } from 'lucide-react';

export default function ScheduleTickerBar() {
  const scheduleItems = [
    {
      label: '8:00 PM – 12:00 AM – ORCHESTRA',
      subtitle: 'Live Traditional Symphonies',
      badgeColor: 'from-[#F5E096] via-[#D4AF37] to-[#C9A227]',
      icon: <Music className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A060A]" />
    },
    {
      label: '12:00 AM – 2:30 AM – ATRANGI BAND',
      subtitle: 'Bollywood Garba & High Fusion',
      badgeColor: 'from-[#F5E096] via-[#E5C158] to-[#D4AF37]',
      icon: <Guitar className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A060A]" />
    },
    {
      label: '2:30 AM – 5:00 AM – PREMIUM MANDALI',
      subtitle: 'Concentric Raas Circles',
      badgeColor: 'from-[#F5E096] via-[#D4AF37] to-[#AA820A]',
      icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A060A]" />
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
