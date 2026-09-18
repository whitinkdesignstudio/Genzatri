import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const heightClasses = {
    sm: 'h-10 md:h-11',
    md: 'h-12 md:h-14',
    lg: 'h-14 md:h-16'
  };

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      {/* Full Brand Emblem Logo (Outside of any inner box wrapper per user request) */}
      <img
        src="/assets/images/genzatri_logo_maroon.jpg"
        alt="GENZATRI Official Logo"
        className={`${heightClasses[size] || 'h-12 md:h-14'} w-auto object-contain rounded-md transform transition-transform duration-300 group-hover:scale-105`}
      />
    </div>
  );
}
