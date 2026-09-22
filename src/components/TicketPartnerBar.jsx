import React from 'react';

export default function TicketPartnerBar() {
  return (
    <section className="w-full bg-gradient-to-r from-[#2D0A22] via-[#3E1132] to-[#2D0A22] border-y border-[#D4AF37]/40 py-5 sm:py-8 px-3 sm:px-6 lg:px-8 shadow-xl relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
        
        {/* Left Label */}
        <div className="flex items-center gap-3 shrink-0 text-center lg:text-left">
          <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.2em] text-[#D4AF37] uppercase whitespace-nowrap">
            TICKETS AVAILABLE ON
          </span>
        </div>

        {/* Separator 1 */}
        <div className="hidden lg:block w-px h-12 bg-[#D4AF37]/35" />

        {/* 3 Partner Logo Cards Grid */}
        <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 items-center gap-3 sm:gap-4 md:gap-6">
          {/* BookMyShow */}
          <a 
            href="https://in.bookmyshow.com/activities/genzatri-ahmedabad-s-ac-dome/ET00517258" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-14 sm:h-16 md:h-18 cursor-pointer w-full"
            title="Book on BookMyShow"
          >
            <img 
              src="/assets/images/logo_bookmyshow_perfect.png" 
              alt="BookMyShow" 
              className="h-7 sm:h-9 md:h-11 w-auto max-w-[90%] max-h-[85%] object-contain block select-none"
            />
          </a>

          {/* District by Zomato */}
          <a 
            href="https://www.district.in/events/genzatri-ahmedabads-ac-dome-oct16-2026-buy-tickets" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-2 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-14 sm:h-16 md:h-18 cursor-pointer w-full"
            title="Book on District by Zomato"
          >
            <img 
              src="/assets/images/logo_district_perfect.png" 
              alt="District by Zomato" 
              className="h-10 sm:h-13 md:h-15 w-auto max-w-[95%] max-h-[92%] object-contain block select-none transform scale-110"
            />
          </a>

          {/* MEE PASS */}
          <a 
            href="https://meepass.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-14 sm:h-16 md:h-18 cursor-pointer w-full"
            title="Book on MEE PASS"
          >
            <img 
              src="/assets/images/logo_mepass_perfect.png" 
              alt="MEE PASS" 
              className="h-7 sm:h-9 md:h-11 w-auto max-w-[90%] max-h-[85%] object-contain block select-none"
            />
          </a>
        </div>

      </div>
    </section>
  );
}




