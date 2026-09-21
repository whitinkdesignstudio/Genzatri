import React from 'react';

export default function TicketPartnerBar() {
  return (
    <section className="w-full bg-gradient-to-r from-[#2D0A22] via-[#3E1132] to-[#2D0A22] border-y border-[#D4AF37]/40 py-5 sm:py-8 px-3 sm:px-6 lg:px-8 shadow-xl relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
        
        {/* Left Label */}
        <div className="flex items-center gap-3 shrink-0 text-center lg:text-left">
          <div>
            <span className="block text-xs sm:text-base font-black tracking-[0.25em] text-[#D4AF37] uppercase leading-tight">
              TICKETS
            </span>
            <span className="block text-[10px] sm:text-sm font-bold tracking-[0.22em] text-[#F3EAD9]/80 uppercase leading-tight">
              AVAILABLE ON
            </span>
          </div>
        </div>

        {/* Separator 1 */}
        <div className="hidden lg:block w-px h-12 bg-[#D4AF37]/35" />

        {/* 4 Partner Logo Cards Grid */}
        <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-4 items-center gap-3 sm:gap-4 md:gap-6">
          {/* MEE PASS */}
          <a 
            href="https://meepass.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-12 sm:h-15 md:h-16 cursor-pointer w-full"
            title="Book on MEE PASS"
          >
            <img 
              src="/assets/images/logo_mepass_orig_trans.png" 
              alt="MEE PASS" 
              className="h-6 sm:h-8 md:h-10 w-auto max-w-full object-contain block select-none"
            />
          </a>

          {/* BookMyShow */}
          <a 
            href="https://in.bookmyshow.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-12 sm:h-15 md:h-16 cursor-pointer w-full"
            title="Book on BookMyShow"
          >
            <img 
              src="/assets/images/logo_bookmyshow_orig_trans.png" 
              alt="BookMyShow" 
              className="h-6 sm:h-8 md:h-10 w-auto max-w-full object-contain block select-none"
            />
          </a>

          {/* AllEvents */}
          <a 
            href="https://allevents.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-12 sm:h-15 md:h-16 cursor-pointer w-full"
            title="Book on AllEvents"
          >
            <img 
              src="/assets/images/logo_allevents_orig_trans.png" 
              alt="AllEvents" 
              className="h-6 sm:h-8 md:h-10 w-auto max-w-full object-contain block select-none"
            />
          </a>

          {/* District by Zomato */}
          <a 
            href="https://zomato.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center h-12 sm:h-15 md:h-16 cursor-pointer w-full"
            title="Book on District by Zomato"
          >
            <img 
              src="/assets/images/logo_district_orig_trans.png" 
              alt="District by Zomato" 
              className="h-6 sm:h-8 md:h-10 w-auto max-w-full object-contain block select-none"
            />
          </a>
        </div>

      </div>
    </section>
  );
}




