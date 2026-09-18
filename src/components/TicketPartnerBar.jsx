import React from 'react';

export default function TicketPartnerBar() {
  return (
    <section className="w-full bg-[#F7F1E4] border-y border-[#D4AF37]/40 py-5 sm:py-6 px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-10">
        
        {/* Left Label */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-left">
            <span className="block text-xs sm:text-sm font-black tracking-[0.22em] text-[#2D0A22] uppercase leading-tight">
              TICKETS
            </span>
            <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#2D0A22]/75 uppercase leading-tight">
              AVAILABLE ON
            </span>
          </div>
        </div>

        {/* Separator 1 */}
        <div className="hidden sm:block w-px h-10 bg-[#2D0A22]/25" />

        {/* MEE PASS */}
        <a 
          href="https://meepass.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center"
          title="Book on MEE PASS"
        >
          <img 
            src="/assets/images/logo_mepass_hd.png" 
            alt="MEE PASS" 
            className="h-10 sm:h-12 md:h-14 object-contain block mix-blend-multiply"
          />
        </a>

        {/* Separator 2 */}
        <div className="hidden sm:block w-px h-10 bg-[#2D0A22]/25" />

        {/* BookMyShow */}
        <a 
          href="https://in.bookmyshow.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center"
          title="Book on BookMyShow"
        >
          <img 
            src="/assets/images/logo_bookmyshow_real.png" 
            alt="BookMyShow" 
            className="h-9 sm:h-11 md:h-12 object-contain block mix-blend-multiply"
          />
        </a>

        {/* Separator 3 */}
        <div className="hidden sm:block w-px h-10 bg-[#2D0A22]/25" />

        {/* AllEvents */}
        <a 
          href="https://allevents.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center"
          title="Book on AllEvents"
        >
          <img 
            src="/assets/images/logo_allevents_real.png" 
            alt="AllEvents" 
            className="h-9 sm:h-11 md:h-12 object-contain block mix-blend-multiply"
          />
        </a>

        {/* Separator 4 */}
        <div className="hidden sm:block w-px h-10 bg-[#2D0A22]/25" />

        {/* District by Zomato */}
        <a 
          href="https://zomato.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center"
          title="Book on District by Zomato"
        >
          <img 
            src="/assets/images/logo_district_hd.png" 
            alt="District by Zomato" 
            className="h-10 sm:h-12 md:h-14 object-contain rounded-lg block shadow-sm"
          />
        </a>

      </div>
    </section>
  );
}




