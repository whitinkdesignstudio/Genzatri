import React from 'react';

export default function Card({
  children,
  variant = 'maroon', // 'maroon' | 'purple' | 'dark'
  className = '',
  onClick = null
}) {
  const variantStyles = {
    maroon: 'bg-[#2D0A22] text-[#F3EAD9] border-[#D4AF37]/30 hover:border-[#D4AF37]',
    purple: 'bg-[#3A1029] text-[#F3EAD9] border-[#D4AF37]/35 hover:border-[#D4AF37]',
    dark: 'bg-[#1E0617] text-[#F3EAD9] border-[#D4AF37]/30 hover:border-[#D4AF37]'
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl border p-6 md:p-8 transition-all duration-300 flex flex-col justify-between ${variantStyles[variant] || variantStyles.maroon} ${className}`}
    >
      {children}
    </div>
  );
}
