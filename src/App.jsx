import React, { useState, useEffect } from 'react';
import { NurseryCanvas } from './components/canvas/NurseryCanvas';
import { Navbar } from './components/ui/Navbar';
import { HeroOverlay } from './components/ui/HeroOverlay';
import { StorySections } from './components/ui/StorySections';
import { CatalogModal } from './components/ui/CatalogModal';
import { PlantInspectorModal } from './components/ui/PlantInspectorModal';
import { AIGardenPlannerModal } from './components/ui/AIGardenPlannerModal';
import { LandscapingShowcase } from './components/ui/LandscapingShowcase';
import { FeaturesAndWhyUs } from './components/ui/FeaturesAndWhyUs';
import { OrchardBaghSection } from './components/ui/OrchardBaghSection';
import { FamilyHeritagSection } from './components/ui/FamilyHeritagSection';
import { ReviewsSection } from './components/ui/ReviewsSection';
import { ContactModal } from './components/ui/ContactModal';
import { Footer } from './components/ui/Footer';
import { PLANTS_DATA } from './data/plantCatalog';
import { MessageCircle } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from './utils/whatsappHelper';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [weatherMode, setWeatherMode] = useState('sunrise');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [activePotType, setActivePotType] = useState('terracotta');

  // Modals
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isAIPlannerOpen, setIsAIPlannerOpen] = useState(false);
  const [isLandscapingOpen, setIsLandscapingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll listener driving 3D camera
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectPlantById = (id, overridePosition = null) => {
    const plant = PLANTS_DATA.find((p) => p.id === id);
    if (plant) {
      const posMap = {
        'monstera-deliciosa':             [-3.2, 0, -2],
        'ficus-lyrata':                   [2.5, 0, 7],
        'mature-royal-date-palm':         [-4.5, 0, 3],
        'ancient-italian-olive':          [3.5, 0, -1],
        'pakistani-citrus-kinnu':         [4.5, 0, -6],
        'kinnu-orange-grafted':           [4.5, 0, -6],
        'bougainvillea-glabra':           [-3.5, 0, -7],
        'master-japanese-bonsai-juniper': [-4.5, 0, -9],
        'chaunsa-mango-grafted':          [4.5, 0, -13],
        'mango-chaunsa-tree':             [4.5, 0, -13],
        'anwar-ratol-mango':              [4.5, 0, -13],
        'teak-wood-sagaun':               [-4.5, 0, -14],
        'sheesham-tree':                  [-4.5, 0, -14],
        'guava-surahi-grafted':           [0.5, 0, -16],
        'snake-plant-laurentii':          [-2.2, 0, 8],
        'areca-palm-golden':              [2.5, 0, 7],
        'money-plant-neon':               [-1.5, 0, 6],
        'motia-jasmine':                  [-2.8, 0, -7],
        'foxtail-palm':                   [6.5, 0, -9],
        'washingtonia-palm-tall':         [-7.0, 0, -16],
        'pomegranate-anar-grafted':       [0.5, 0, -16],
        'neem-tree':                      [-6.5, 0, -20],
      };
      plant.position = overridePosition || posMap[id] || [0, 0, 0];
      setSelectedPlant(plant);
    }
  };

  const handleScrollToFirstSection = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-sage-900 overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. 3D WebGL Canvas Layer */}
      <NurseryCanvas
        scrollProgress={scrollProgress}
        weatherMode={weatherMode}
        selectedPlant={selectedPlant}
        activePotType={activePotType}
        onSelectPlant={(id, pos) => handleSelectPlantById(id, pos)}
      />

      {/* 2. Floating Navbar */}
      <Navbar
        weatherMode={weatherMode}
        onWeatherChange={(mode) => setWeatherMode(mode)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Hero Overlay */}
      <HeroOverlay
        onExploreClick={handleScrollToFirstSection}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
      />

      {/* 4. Storytelling Sections (Scroll Controlled) */}
      <StorySections
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onSelectPlantById={(id) => handleSelectPlantById(id)}
        onOpenLandscaping={() => setIsLandscapingOpen(true)}
      />

      {/* 5. Orchard / Bagh Lagwao Section */}
      <OrchardBaghSection />

      {/* 6. Features, Care Masterclasses & FAQs */}
      <FeaturesAndWhyUs />

      {/* 6. Family Heritage — About Us Section */}
      <FamilyHeritagSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 7. Customer Testimonials Section */}
      <ReviewsSection />

      {/* 8. Footer Section */}
      <Footer
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* --- MODALS LAYER --- */}

      {/* 3D Catalog Grid Modal */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
      />

      {/* Selected 3D Plant Inspector Drawer */}
      {selectedPlant && (
        <PlantInspectorModal
          plant={selectedPlant}
          activePotType={activePotType}
          onPotChange={(potId) => setActivePotType(potId)}
          onClose={() => setSelectedPlant(null)}
        />
      )}

      {/* AI Garden Planner & Estimator Modal */}
      <AIGardenPlannerModal
        isOpen={isAIPlannerOpen}
        onClose={() => setIsAIPlannerOpen(false)}
        onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
      />

      {/* Landscaping Before/After Showcase Modal */}
      <LandscapingShowcase
        isOpen={isLandscapingOpen}
        onClose={() => setIsLandscapingOpen(false)}
      />

      {/* Farm Locations & Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Floating Sticky WhatsApp Quick Order Button */}
      <a
        href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065), Main aapki website visit kar raha hun aur plants order karna chahta hun!')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 hover:scale-105 transition-all flex items-center gap-2 border-2 border-white pointer-events-auto"
        title="Quick WhatsApp Order: 03040450065 Ansar Hussain"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="text-xs font-extrabold hidden sm:inline">📱 03040450065</span>
      </a>
    </div>
  );
}
