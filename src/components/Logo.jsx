import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const heightClasses = {
    sm: 'h-10 sm:h-12 md:h-13',
    md: 'h-12 sm:h-14 md:h-15',
    lg: 'h-20 sm:h-24 md:h-28'
  };

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      {/* High Definition Transparent Gold Emblem Logo */}
      <img
        src="/assets/images/genzatri_logo_gold_transparent.png"
        alt="GENZATRI AC DOME GARBA Logo"
        className={`${heightClasses[size] || 'h-12 sm:h-14 md:h-15'} w-auto object-contain transform transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]`}
      />
    </div>
  );
}
