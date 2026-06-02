import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import SchoolLevelsSection from './components/SchoolLevelsSection';
import AdmissionsSection from './components/AdmissionsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FacilitiesSection from './components/FacilitiesSection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div id="school-landing-app" className="min-h-screen bg-white text-gray-800 antialiased font-sans selection:bg-brand-red selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Interactive Area */}
      <HeroSection />

      {/* 3. About the School Overview */}
      <AboutSection />

      {/* 4. Pillars of Excellence */}
      <WhyChooseSection />

      {/* 5. Pathways / School Levels */}
      <SchoolLevelsSection />

      {/* 6. High-Fidelity Facilities Grid */}
      <FacilitiesSection />

      {/* 7. Actionable Admissions Desk */}
      <AdmissionsSection />

      {/* 8. Categorized Galleries */}
      <GallerySection />

      {/* 9. Parent Reviews Sliders */}
      <TestimonialsSection />

      {/* 10. Direct Closing Admissions Nudge Banner */}
      <CtaBanner />

      {/* 11. Geographic & Contact Coordinates */}
      <ContactSection />

      {/* 12. Footnotes & Quick Navigation */}
      <Footer />

      {/* 13. Smart Tooltips & Floating Engagement Widgets */}
      <FloatingWhatsApp />
    </div>
  );
}
