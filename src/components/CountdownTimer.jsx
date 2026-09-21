import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/eventData';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 23,
    minutes: 25,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.targetCountdownDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTwoDigits = (num) => String(num).padStart(2, '0');

  const timerItems = [
    { label: 'DAYS', value: formatTwoDigits(timeLeft.days) },
    { label: 'HOURS', value: formatTwoDigits(timeLeft.hours) },
    { label: 'MINUTES', value: formatTwoDigits(timeLeft.minutes) },
    { label: 'SECONDS', value: formatTwoDigits(timeLeft.seconds) }
  ];

  return (
    <section className="w-full bg-[#1A0313] text-[#F3EAD9] py-10 sm:py-14 md:py-16 px-4 sm:px-6 relative overflow-hidden border-b border-[#D4AF37]/30">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-7 sm:space-y-9 relative z-10">

        {/* 1. Gold Typography Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#F5E096] uppercase">
              GENZATRI 2026 FESTIVAL
            </span>
          </div>

          <h2 className="font-serif-display text-xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-[0.06em] sm:tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#F5E096] uppercase drop-shadow-[0_2px_14px_rgba(212,175,55,0.35)]">
            BOLLYWOOD THEME • AC DOME GARBA
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-[0.28em] sm:tracking-[0.32em] text-[#F3EAD9]/85 uppercase">
            IN THE HEART OF AHMEDABAD
          </p>
        </div>

        {/* 2. Date & Location Row (Icons removed, Get Direction button added) */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left text-xs sm:text-sm md:text-base font-bold text-[#F3EAD9] tracking-wide bg-[#27071B]/60 py-3.5 sm:py-4 px-4 sm:px-8 rounded-2xl sm:rounded-full border border-[#D4AF37]/30 shadow-lg">
          
          {/* Date Range (No Icon) */}
          <div className="whitespace-nowrap font-serif-display text-[#E5C378] tracking-wider text-sm sm:text-base font-black">
            16 – 19 October 2026
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block w-px h-6 bg-[#D4AF37]/40" />

          {/* Location Details + Get Direction Button (No Icon) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <span className="block font-serif-display text-[11px] sm:text-xs md:text-sm text-[#F3EAD9] font-extrabold uppercase tracking-wider leading-tight">
                GUJARAT UNIVERSITY CONVENTION & EXHIBITION CENTRE
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#D4AF37]/80 uppercase tracking-widest font-semibold">
                AHMEDABAD
              </span>
            </div>

            {/* Get Direction Button linking to Google Maps */}
            <a
              href={EVENT_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227] text-[#0A060A] text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-md hover:brightness-110 transition-all transform active:scale-95 cursor-pointer shrink-0"
            >
              <span>Get Direction</span>
              <span className="text-xs font-black">↗</span>
            </a>
          </div>

        </div>

        {/* 3. 4 Countdown Boxes (Fully Scaled for 320px+ Mobile Screens) */}
        <div className="flex items-center justify-center gap-1.5 xs:gap-2.5 sm:gap-4 md:gap-6 pt-2 w-full">
          {timerItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {/* Box */}
              <div className="w-[66px] xs:w-[76px] sm:w-[100px] md:w-[120px] h-[82px] xs:h-[90px] sm:h-[114px] md:h-[132px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#3A0D28] to-[#210516] border border-[#D4AF37]/50 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_6px_25px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-105 group shrink-0">
                <span className="font-serif-display text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#F5E096] leading-none mb-1 sm:mb-1.5 drop-shadow-md">
                  {item.value}
                </span>
                <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.26em] text-[#F3EAD9]/85 uppercase">
                  {item.label}
                </span>
              </div>

              {/* Colon */}
              {index < timerItems.length - 1 && (
                <span className="font-serif-display text-base xs:text-xl sm:text-2xl md:text-3xl text-[#D4AF37] font-bold self-center pb-2 select-none animate-pulse">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
