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
import { CartDrawer } from './components/ui/CartDrawer';
import { Footer } from './components/ui/Footer';
import { PLANTS_DATA } from './data/plantCatalog';
import { MessageCircle, ShoppingCart, Check } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from './utils/whatsappHelper';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [weatherMode, setWeatherMode] = useState('sunrise');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [activePotType, setActivePotType] = useState('terracotta');

  // Modals & Drawers
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isAIPlannerOpen, setIsAIPlannerOpen] = useState(false);
  const [isLandscapingOpen, setIsLandscapingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart State
  const [cart, setCart] = useState([]);
  const [cartToast, setCartToast] = useState(null);

  // Cart Handlers
  const handleAddToCart = (plant) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { plant, quantity: 1 }];
    });

    // Show quick toast notification
    setCartToast(`Added ${plant.name} to cart! 🛒`);
    setTimeout(() => setCartToast(null), 3000);
  };

  const handleUpdateQuantity = (plantId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(plantId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.plant.id === plantId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (plantId) => {
    setCart((prev) => prev.filter((item) => item.plant.id !== plantId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

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
        'cassia-nodosa-sapling':          [-3.5, 0, -8],
        'cassia-nodosa-medium':           [-3.5, 0, -8],
      };
      plant.position = overridePosition || posMap[id] || [0, 0, 0];
      setSelectedPlant(plant);
    }
  };

  const handleScrollToFirstSection = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

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

      {/* 2. Streamlined Floating Navbar */}
      <Navbar
        weatherMode={weatherMode}
        onWeatherChange={(mode) => setWeatherMode(mode)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
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

      {/* 7. Family Heritage — About Us Section (50+ Years) */}
      <FamilyHeritagSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 8. Customer Testimonials Section */}
      <ReviewsSection />

      {/* 9. Footer Section */}
      <Footer
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenAIPlanner={() => setIsAIPlannerOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* --- MODALS & DRAWERS LAYER --- */}

      {/* 3D Catalog Grid Modal */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectPlantForInspection={(id) => handleSelectPlantById(id)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Selected 3D Plant Inspector Drawer */}
      {selectedPlant && (
        <PlantInspectorModal
          plant={selectedPlant}
          activePotType={activePotType}
          onPotChange={(potId) => setActivePotType(potId)}
          onClose={() => setSelectedPlant(null)}
          onAddToCart={handleAddToCart}
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

      {/* Cart Quick Toast Notification */}
      {cartToast && (
        <div
          className="fixed bottom-24 right-6 z-50 px-4 py-3 rounded-2xl bg-emerald-800 text-white font-extrabold text-xs shadow-2xl flex items-center gap-2 border border-emerald-600 pointer-events-auto"
          style={{ animation: 'fadeIn 0.2s ease' }}
        >
          <Check className="w-4 h-4 text-emerald-300" />
          <span>{cartToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 underline text-amber-300 hover:text-amber-200"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Floating Sticky Buttons: Cart & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 pointer-events-auto">
        <button
          onClick={() => setIsCartOpen(true)}
          className="px-4 py-3 rounded-2xl bg-emerald-700 text-white shadow-2xl hover:bg-emerald-800 hover:scale-105 transition-all flex items-center gap-2 border-2 border-white font-extrabold text-xs"
          title="Open Cart"
        >
          <ShoppingCart className="w-5 h-5 text-amber-300" />
          <span className="hidden sm:inline">Cart</span>
          <span className="w-5 h-5 rounded-full bg-amber-400 text-sage-900 font-black text-[11px] flex items-center justify-center">
            {totalCartItems}
          </span>
        </button>

        <a
          href={`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent('Assalam o Alaikum Ansar Bhai (03040450065), Main aapki website visit kar raha hun aur plants order karna chahta hun!')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 hover:scale-105 transition-all flex items-center gap-2 border-2 border-white"
          title="Quick WhatsApp Order: 03040450065 Ansar Hussain"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="text-xs font-extrabold hidden sm:inline">03040450065</span>
        </a>
      </div>
    </div>
  );
}
