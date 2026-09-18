import React from 'react';

/**
 * MandalaCorner: Intricate floral/mandala corner vector flourish (Matching Image 5)
 * Can be placed at top-left, top-right, bottom-left, or bottom-right of dark maroon/teal or cream sections.
 */
export default function MandalaCorner({
  position = 'top-right',
  className = '',
  color = '#D4AF37',
  opacity = 0.35,
  size = 'w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44'
}) {
  let transformClass = '';
  let positionClass = '';

  if (position === 'top-left') {
    positionClass = 'top-0 left-0';
    transformClass = '';
  } else if (position === 'top-right') {
    positionClass = 'top-0 right-0';
    transformClass = 'scale-x-[-1]';
  } else if (position === 'bottom-left') {
    positionClass = 'bottom-0 left-0';
    transformClass = 'scale-y-[-1]';
  } else if (position === 'bottom-right') {
    positionClass = 'bottom-0 right-0';
    transformClass = 'scale-x-[-1] scale-y-[-1]';
  }

  return (
    <div
      className={`absolute ${positionClass} pointer-events-none z-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${size} ${transformClass}`}
      >
        {/* Concentric Decorative Rings */}
        <circle cx="0" cy="0" r="150" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="135" stroke={color} strokeWidth="1.5" />
        <circle cx="0" cy="0" r="118" stroke={color} strokeWidth="1" />
        <circle cx="0" cy="0" r="100" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="0" cy="0" r="82" stroke={color} strokeWidth="1.5" />
        <circle cx="0" cy="0" r="60" stroke={color} strokeWidth="2" />
        <circle cx="0" cy="0" r="38" stroke={color} strokeWidth="1.5" />
        <circle cx="0" cy="0" r="20" stroke={color} strokeWidth="1" strokeDasharray="2 2" />

        {/* Radial Lotus Petals */}
        <path d="M 0 0 Q 35 80 0 120 Q -35 80 0 0" fill="none" stroke={color} strokeWidth="1.2" transform="rotate(15)" />
        <path d="M 0 0 Q 35 80 0 120 Q -35 80 0 0" fill="none" stroke={color} strokeWidth="1.2" transform="rotate(30)" />
        <path d="M 0 0 Q 40 95 0 135 Q -40 95 0 0" fill="none" stroke={color} strokeWidth="1.8" transform="rotate(45)" />
        <path d="M 0 0 Q 35 80 0 120 Q -35 80 0 0" fill="none" stroke={color} strokeWidth="1.2" transform="rotate(60)" />
        <path d="M 0 0 Q 35 80 0 120 Q -35 80 0 0" fill="none" stroke={color} strokeWidth="1.2" transform="rotate(75)" />

        {/* Intermediate Flower Blossoms & Dots */}
        <circle cx="53" cy="53" r="4.5" fill={color} />
        <circle cx="30" cy="72" r="3" fill={color} />
        <circle cx="72" cy="30" r="3" fill={color} />
        <circle cx="82" cy="82" r="4" fill={color} />
        <circle cx="42" cy="102" r="3" fill={color} />
        <circle cx="102" cy="42" r="3" fill={color} />

        {/* Ornate Swirl Lines */}
        <path d="M 0 60 Q 60 60 82 0" fill="none" stroke={color} strokeWidth="1.2" />
        <path d="M 0 100 Q 100 100 135 0" fill="none" stroke={color} strokeWidth="1.6" />
        <path d="M 0 118 Q 118 118 150 0" fill="none" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}
