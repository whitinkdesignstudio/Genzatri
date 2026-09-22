import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const heightClasses = {
    sm: 'h-12 sm:h-14 md:h-16',
    md: 'h-14 sm:h-16 md:h-18',
    lg: 'h-24 sm:h-28 md:h-36'
  };

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      {/* High Definition Transparent Gold Emblem Logo */}
      <img
        src="/assets/images/genzatri_logo_gold_transparent.png"
        alt="GENZATRI AC DOME GARBA Logo"
        className={`${heightClasses[size] || 'h-14 sm:h-16 md:h-20'} w-auto object-contain transform transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]`}
      />
    </div>
  );
}
