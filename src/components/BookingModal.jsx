import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Check } from 'lucide-react';
import { PASSES, EVENT_DETAILS, TICKET_URLS } from '../data/eventData';

export default function BookingModal({ isOpen, onClose, selectedPass = null }) {
  const [activePass, setActivePass] = useState(PASSES[0]);
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync selectedPass or fallback to PASSES[0] whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setActivePass(selectedPass || PASSES[0]);
      setQuantity(1);
      setIsSuccess(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedPass]);

  if (!isOpen) return null;

  const currentPass = activePass || PASSES[0];
  const price = currentPass?.price || 999;
  const totalPrice = price * quantity;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F5E096', '#2D0A22', '#0B2E2A']
      });
    } catch (err) {
      console.warn('Confetti error:', err);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      resetAndClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-[#120A14] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#D4AF37]/30 text-[#F3EAD9] my-auto max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-[#2D0A22] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A060A] transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="text-center space-y-1.5 pr-6">
              <h3 className="font-serif-display font-black text-2xl sm:text-3xl text-[#F3EAD9] uppercase">
                BOOK YOUR PASS
              </h3>
              <p className="text-xs font-semibold text-[#D4AF37]">
                {EVENT_DETAILS.datesFull} · {EVENT_DETAILS.venueShort}
              </p>
            </div>

            {/* Select Pass Tier */}
            <div className="space-y-2">
              <label className="block text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase">
                Select Pass Category:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PASSES.map((pass) => (
                  <button
                    key={pass.id}
                    type="button"
                    onClick={() => setActivePass(pass)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-extrabold border transition-all text-center cursor-pointer uppercase ${currentPass.id === pass.id
                        ? 'bg-[#D4AF37] text-[#0A060A] border-[#D4AF37] shadow-md'
                        : 'bg-[#2D0A22] text-[#F3EAD9] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                      }`}
                  >
                    {pass.categoryLabel || pass.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Pass Summary */}
            <div className="bg-[#2D0A22]/80 border border-[#D4AF37]/30 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif-display font-bold text-base sm:text-lg text-[#F3EAD9]">
                    {currentPass.name}
                  </h4>
                  <p className="text-xs text-[#F3EAD9]/70">{currentPass.description}</p>
                </div>
                <span className="font-serif-display font-black text-xl text-[#D4AF37]">
                  {currentPass.formattedPrice}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/20">
                <span className="text-xs font-bold text-[#F3EAD9]">Quantity:</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg bg-[#0A060A] border border-[#D4AF37]/40 text-[#D4AF37] font-extrabold text-sm flex items-center justify-center cursor-pointer hover:bg-[#D4AF37] hover:text-[#0A060A]"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-[#D4AF37] min-w-[20px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-[#0A060A] border border-[#D4AF37]/40 text-[#D4AF37] font-extrabold text-sm flex items-center justify-center cursor-pointer hover:bg-[#D4AF37] hover:text-[#0A060A]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price Total */}
            <div className="flex items-center justify-between px-2 pt-1">
              <span className="text-xs font-extrabold tracking-widest text-[#F3EAD9] uppercase">
                TOTAL PAYABLE:
              </span>
              <span className="font-serif-display font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227]">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Official Partner Links */}
            <div className="space-y-2 pt-2 border-t border-[#D4AF37]/20">
              <label className="block text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase text-center">
                BOOK ON OFFICIAL PARTNERS:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {/* 1. MiPass (Visual Partner - 1st) */}
                <div 
                  className="bg-white py-2 px-2 rounded-xl border border-[#D4AF37]/50 flex items-center justify-center h-11 opacity-90 select-none"
                  title="MiPass Partner"
                >
                  <img src="/assets/images/logo_mepass_perfect.png" alt="MiPass" className="h-5.5 sm:h-6 w-auto object-contain" />
                </div>

                {/* 2. BookMyShow (Active Link - 2nd) */}
                <a
                  href={TICKET_URLS.bookmyshow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#FFF5D6] py-2 px-2 rounded-xl border border-[#D4AF37] flex items-center justify-center h-11 transition-transform hover:scale-105 cursor-pointer"
                  title="Book on BookMyShow"
                >
                  <img src="/assets/images/logo_bookmyshow_perfect.png" alt="BookMyShow" className="h-5.5 sm:h-6 w-auto object-contain" />
                </a>

                {/* 3. District by Zomato (Active Link - 3rd) */}
                <a
                  href={TICKET_URLS.district}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#FFF5D6] py-2 px-1.5 rounded-xl border border-[#D4AF37] flex items-center justify-center h-11 transition-transform hover:scale-105 cursor-pointer"
                  title="Book on District by Zomato"
                >
                  <img src="/assets/images/logo_district_perfect.png" alt="District" className="h-7 sm:h-7.5 w-auto object-contain" />
                </a>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirmBooking}
              className="w-full py-3.5 text-xs font-extrabold tracking-widest uppercase text-[#0A060A] bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227] rounded-xl shadow-xl hover:brightness-110 transition-all duration-300 cursor-pointer"
            >
              RESERVE PASS NOW
            </button>
          </div>
        ) : (
          /* Booking Confirmed Success Screen */
          <div className="text-center py-6 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-display font-black text-3xl text-[#F3EAD9]">
                PASS RESERVED!
              </h3>
              <p className="text-xs font-semibold text-[#D4AF37]">
                See you at the AC Dome from 16–19 October 2026!
              </p>
            </div>

            <div className="bg-[#2D0A22] border border-[#D4AF37]/30 rounded-2xl p-4 text-left space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#F3EAD9]/70">Pass:</span>
                <span className="font-bold text-[#F3EAD9]">{currentPass.name} ({quantity}x)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#F3EAD9]/70">Venue:</span>
                <span className="font-bold text-[#F3EAD9]">Gujarat University Convention Centre</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#D4AF37]/20">
                <span className="text-[#F3EAD9]/70">Total Paid:</span>
                <span className="font-black text-[#D4AF37]">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3 text-xs font-extrabold tracking-widest uppercase bg-[#D4AF37] text-[#0A060A] rounded-xl hover:brightness-110 cursor-pointer"
            >
              DONE & CLOSE
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
