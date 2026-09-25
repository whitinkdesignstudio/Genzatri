import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScheduleTickerBar from './components/ScheduleTickerBar';
import TicketPartnerBar from './components/TicketPartnerBar';
import EventHighlightsBanner from './components/EventHighlightsBanner';
import CountdownTimer from './components/CountdownTimer';
import DateVenueBanner from './components/DateVenueBanner';
import ExperienceAcDomeSection from './components/ExperienceAcDomeSection';
import ChooseYourPass from './components/ChooseYourPass';
import EventConceptSection from './components/EventConceptSection';
import MomentsWorld from './components/MomentsWorld';
import WhyChooseSection from './components/WhyChooseSection';
import ArtistsSection from './components/ArtistsSection';
import SneakPeekSection from './components/SneakPeekSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPass, setSelectedPass] = useState(null);

  const handleOpenBooking = (pass = null) => {
    setSelectedPass(pass);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedPass(null);
  };

  return (
    <div className="min-h-screen bg-[#2D0A22] text-[#F3EAD9] font-sans selection:bg-[#D4AF37] selection:text-[#0A060A]">
      {/* 1. Header (Fixed Logo, HOME | ABOUT | LINEUP | TICKETS | GALLERY | FAQs) */}
      <Header onBookClick={() => handleOpenBooking()} />

      {/* Main Content Area */}
      <main className="w-full">
        {/* 1. Hero Section (Matching Reference Image 1) */}
        <HeroSection onBookClick={() => handleOpenBooking()} />

        {/* Continuous Rotating Schedule Slider Bar (Orchestra, Atrangi, Mandali) */}
        <ScheduleTickerBar />

        {/* 3. Countdown Timer & Event Highlights (Merged Royal Banner) */}
        <CountdownTimer />

        {/* 4. Choose Your Pass & Tickets Section (Placed right after FIRST EVER BOLLYWOOD BAND LIVE GARBA IN AC DOME) */}
        <ChooseYourPass onBookPass={(pass) => handleOpenBooking(pass)} />

        {/* 5. Ticket Partner Bar */}
        <TicketPartnerBar />

        {/* 6. Venue & Location Full Width Banner */}
        <DateVenueBanner />

        {/* 7. Experience AC Dome Garba Section */}
        <ExperienceAcDomeSection />

        {/* 7. Event Concept Section (Four Nights. One Dome. Endless Energy.) - Hidden for now */}
        {/* <EventConceptSection /> */}

        {/* 8. Our Artists & Mandli (5 Dome Arch Cards including Rajesh Nayak & Team) */}
        <ArtistsSection />

        {/* 9. Moments From Our World Reels - Hidden for now */}
        {/* <MomentsWorld /> */}

        {/* 10. Why Choose GenZatri - Visual Feature Cards Grid */}
        <WhyChooseSection />

        {/* 10. Gallery Of Magic (A Sneak Peek Into The Magic) - Hidden/Commented out as requested */}
        {/* <SneakPeekSection /> */}

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Booking Modal Dialog */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedPass={selectedPass}
      />
    </div>
  );
}
