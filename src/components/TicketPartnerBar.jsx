import React from 'react';

export default function TicketPartnerBar() {
  return (
    <section className="w-full bg-gradient-to-r from-[#2D0A22] via-[#3E1132] to-[#2D0A22] border-y border-[#D4AF37]/40 py-4 sm:py-6 px-3 sm:px-6 lg:px-8 shadow-xl relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">

        {/* Left Label */}
        <div className="flex items-center gap-3 shrink-0 text-center">
          <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.2em] text-[#D4AF37] uppercase whitespace-nowrap">
            TICKETS AVAILABLE ON
          </span>
        </div>

        {/* Separator */}
        <div className="hidden sm:block w-px h-10 bg-[#D4AF37]/35 shrink-0" />

        {/* 3 Partner Logo Cards Grid */}
        <div className="grid grid-cols-3 items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
          {/* 1. MEE PASS (Visual Logo Only - 1st) */}
          <div
            className="bg-white px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-md border-2 border-[#D4AF37]/40 flex items-center justify-center h-12 sm:h-14 md:h-16 w-28 sm:w-36 md:w-40 select-none mx-auto"
            title="MePass Partner"
          >
            <img
              src="/assets/images/logo_mepass_perfect.png"
              alt="MePass"
              className="h-6 sm:h-8 md:h-9 w-auto max-w-[90%] max-h-[85%] object-contain block"
            />
          </div>

          {/* 2. BookMyShow (Active Link - 2nd) */}
          <a
            href="https://in.bookmyshow.com/activities/genzatri-ahmedabad-s-ac-dome/ET00517258"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-md border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-12 sm:h-14 md:h-16 cursor-pointer w-28 sm:w-36 md:w-40 select-none mx-auto"
            title="Book on BookMyShow"
          >
            <img
              src="/assets/images/logo_bookmyshow_perfect.png"
              alt="BookMyShow"
              className="h-6 sm:h-8 md:h-9 w-auto max-w-[90%] max-h-[85%] object-contain block select-none"
            />
          </a>

          {/* 3. District by Zomato (Active Link - 3rd) */}
          <a
            href="https://www.district.in/events/genzatri-ahmedabads-ac-dome-oct16-2026-buy-tickets"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-md border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-12 sm:h-14 md:h-16 cursor-pointer w-28 sm:w-36 md:w-40 select-none mx-auto"
            title="Book on District by Zomato"
          >
            <img
              src="/assets/images/logo_district_perfect.png"
              alt="District by Zomato"
              className="h-8 sm:h-11 md:h-13 w-auto max-w-[95%] max-h-[92%] object-contain block select-none transform scale-110"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
