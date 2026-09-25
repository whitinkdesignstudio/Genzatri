import React, { useState, useEffect } from 'react';

const BANNERS = [
  {
    id: 'rj-mit',
    src: '/assets/images/rj_mit_hero_banner.png',
    alt: "PROUD TO HAVE RJ MIT - GUJARAT'S #1 RADIO JOCKEY - GENZATRI 2026"
  },
  {
    id: 'sunset-sunrise',
    src: '/assets/images/main_banner_hero.png',
    alt: "GENZATRI AC DOME GARBA - FROM SUNSET TO SUNRISE IN AC DOME"
  },
  {
    id: 'atrangi-band',
    src: '/assets/images/atrangi_band_hero_banner.png',
    alt: "VIMAL PRESENTS ROYAL NAVRATRI GARBA FESTIVAL - ATRANGI BAND"
  }
];

export default function HeroSection({ onBookClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotate banner every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + BANNERS.length) % BANNERS.length);
  };

  return (
    <section
      id="hero"
      className="relative w-full pt-[58px] sm:pt-[64px] md:pt-[68px] pb-0 bg-[#2D0A22] overflow-hidden select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Auto-Rotating Hero Banner Slider */}
      <div className="relative w-full overflow-hidden leading-none p-0 m-0">

        {/* Natural Aspect-Ratio Specifier (Hidden Reference Image) */}
        <img
          src={BANNERS[0].src}
          alt="Banner Height Specifier"
          className="w-full h-auto opacity-0 pointer-events-none block select-none p-0 m-0"
          aria-hidden="true"
        />

        {/* Banner Images Stack with Smooth Cross-Fade */}
        {BANNERS.map((banner, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={banner.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              <img
                src={banner.src}
                alt={banner.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover object-center block p-0 m-0"
              />
            </div>
          );
        })}

        {/* Prev Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Banner"
          className="absolute left-1 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#1A0313]/50 hover:bg-[#D4AF37] text-[#F3EAD9] hover:text-[#0A060A] border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-xs sm:backdrop-blur-md opacity-75 hover:opacity-100 transform active:scale-95 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Banner"
          className="absolute right-1 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#1A0313]/50 hover:bg-[#D4AF37] text-[#F3EAD9] hover:text-[#0A060A] border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-xs sm:backdrop-blur-md opacity-75 hover:opacity-100 transform active:scale-95 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-1.5 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2.5 bg-[#1A0313]/60 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-[#D4AF37]/40 backdrop-blur-xs sm:backdrop-blur-md shadow-md">
          {BANNERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to banner ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentIndex
                  ? 'w-4 sm:w-7 md:w-9 h-1.5 sm:h-2.5 md:h-3 bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#F5E096] shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                  : 'w-1.5 sm:w-2.5 md:w-3 h-1.5 sm:h-2.5 md:h-3 bg-[#F3EAD9]/40 hover:bg-[#F3EAD9]/80'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
