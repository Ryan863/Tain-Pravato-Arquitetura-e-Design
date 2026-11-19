import { AboutSection } from '@/components/AboutSection';
import { ClosingSection } from '@/components/ClosingSection';
import { FaqSection } from '@/components/FaqSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { FooterSection } from '@/components/FooterSection';
import { HeroSection } from '@/components/HeroSection';
import { LandingPageClient } from '@/components/LandingPageClient';
import { LocationSection } from '@/components/LocationSection';
import { Navbar } from '@/components/Navbar';
import { PressAwardsSection } from '@/components/PressAwardsSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ServicesSection } from '@/components/ServicesSection';

export default function HomePage() {
  return (
    <LandingPageClient>
      <Navbar />
      <main>
        <HeroSection />
        <PressAwardsSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <FaqSection />
        <LocationSection />
        <ClosingSection />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
    </LandingPageClient>
  );
}
