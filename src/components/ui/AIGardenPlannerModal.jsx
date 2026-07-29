import React, { useState } from 'react';
import { X, Sparkles, Compass, Calculator, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { PLANTS_DATA } from '../../data/plantCatalog';
import { generateLandscapeInquiryLink } from '../../utils/whatsappHelper';

export const AIGardenPlannerModal = ({ isOpen, onClose, onSelectPlantForInspection }) => {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' | 'calculator'

  // Quiz state
  const [sunlightPref, setSunlightPref] = useState('indirect');
  const [placementPref, setPlacementPref] = useState('indoor');
  const [petPref, setPetPref] = useState(false);
  const [quizResults, setQuizResults] = useState([]);

  // Calculator state
  const [projectType, setProjectType] = useState('Villa Lawn');
  const [areaSize, setAreaSize] = useState('1 Kanal (4500 sq ft)');
  const [city, setCity] = useState('Lahore');

  if (!isOpen) return null;

  const handleRunAIQuiz = () => {
    const matched = PLANTS_DATA.filter((p) => {
      if (placementPref === 'indoor' && p.category !== 'indoor') return false;
      if (placementPref === 'outdoor' && p.category === 'indoor') return false;
      if (petPref && !p.petFriendly) return false;
      return true;
    });
    setQuizResults(matched.length > 0 ? matched : PLANTS_DATA.slice(0, 3));
  };

  // Estimate calculation
  let basePriceRange = 'PKR 850,000 - 1,200,000';
  if (areaSize.includes('2 Kanal')) basePriceRange = 'PKR 1,800,000 - 2,500,000';
  if (areaSize.includes('4 Kanal')) basePriceRange = 'PKR 3,500,000 - 5,000,000';
  if (areaSize.includes('Rooftop')) basePriceRange = 'PKR 450,000 - 750,000';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-sage-900/60 backdrop-blur-md pointer-events-auto">
      <div className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/80 animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="p-6 border-b border-cream-200 flex items-center justify-between bg-white/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-sage-900">
                AI Garden Planner & Landscape Estimator
              </h2>
              <p className="text-xs text-sage-600">Smart botanical algorithms for Pakistani homes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-cream-100 text-sage-700 hover:bg-cream-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-cream-200 bg-cream-50/50">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'quiz'
                ? 'bg-white text-sage-900 border-b-2 border-gold-500 shadow-sm'
                : 'text-sage-600 hover:text-sage-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            AI Plant Match Quiz
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'calculator'
                ? 'bg-white text-sage-900 border-b-2 border-gold-500 shadow-sm'
                : 'text-sage-600 hover:text-sage-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            Landscape Cost Estimator
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-cream-50/30">
          {activeTab === 'quiz' ? (
            <div className="space-y-6">
              {/* Question 1 */}
              <div>
                <label className="block text-xs font-bold text-sage-900 uppercase tracking-wider mb-2">
                  1. Where will you place the plant?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'indoor', label: 'Indoor Living / Office' },
                    { id: 'outdoor', label: 'Outdoor Lawn / Courtyard' },
                    { id: 'balcony', label: 'Balcony / Veranda' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPlacementPref(item.id)}
                      className={`p-3 rounded-2xl text-xs font-bold border transition-all ${
                        placementPref === item.id
                          ? 'bg-sage-900 text-cream-50 border-sage-900'
                          : 'bg-white text-sage-700 border-cream-200 hover:border-gold-500'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <label className="block text-xs font-bold text-sage-900 uppercase tracking-wider mb-2">
                  2. Do you have pets (Cats / Dogs)?
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setPetPref(true)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold border ${
                      petPref ? 'bg-sage-900 text-cream-50' : 'bg-white text-sage-700'
                    }`}
                  >
                    Yes, Need Pet-Safe Plants 🐾
                  </button>
                  <button
                    onClick={() => setPetPref(false)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold border ${
                      !petPref ? 'bg-sage-900 text-cream-50' : 'bg-white text-sage-700'
                    }`}
                  >
                    No Pets / Any Plant
                  </button>
                </div>
              </div>

              <button
                onClick={handleRunAIQuiz}
                className="w-full btn-luxury-primary py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-gold-500" />
                Generate AI Recommendations
              </button>

              {/* Quiz Results */}
              {quizResults.length > 0 && (
                <div className="pt-6 border-t border-cream-200">
                  <h3 className="font-serif text-lg font-bold text-sage-900 mb-4">
                    Top AI Matches for Your Space:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quizResults.map((plant) => (
                      <div
                        key={plant.id}
                        className="glass-card p-4 rounded-2xl flex items-center justify-between"
                      >
                        <div>
                          <div className="font-serif font-bold text-sage-900">{plant.name}</div>
                          <div className="text-xs text-gold-600 font-bold">
                            PKR {plant.pricePKR.toLocaleString()}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onClose();
                            onSelectPlantForInspection(plant.id);
                          }}
                          className="btn-luxury-gold px-3.5 py-2 rounded-xl text-xs font-bold"
                        >
                          Inspect 3D
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-sage-900 mb-2">Project Type</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-3 rounded-2xl text-xs bg-white border border-cream-200 text-sage-900 font-bold"
                  >
                    <option value="Villa Lawn">Residential Villa Lawn</option>
                    <option value="Executive Farmhouse">Executive Farmhouse</option>
                    <option value="Rooftop Garden">Penthouse Rooftop</option>
                    <option value="Commercial Complex">Commercial / Hotel Plaza</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-sage-900 mb-2">Area Size</label>
                  <select
                    value={areaSize}
                    onChange={(e) => setAreaSize(e.target.value)}
                    className="w-full p-3 rounded-2xl text-xs bg-white border border-cream-200 text-sage-900 font-bold"
                  >
                    <option value="10 Marla (2250 sq ft)">10 Marla (2,250 sq ft)</option>
                    <option value="1 Kanal (4500 sq ft)">1 Kanal (4,500 sq ft)</option>
                    <option value="2 Kanal (9000 sq ft)">2 Kanal (9,000 sq ft)</option>
                    <option value="4 Kanal Farmhouse">4 Kanal Farmhouse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-sage-900 mb-2">City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 rounded-2xl text-xs bg-white border border-cream-200 text-sage-900 font-bold"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad / Rawalpindi</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Multan">Multan</option>
                  </select>
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="glass-card p-6 rounded-3xl bg-gradient-to-br from-sage-900 to-sage-700 text-cream-50">
                <span className="text-[10px] font-extrabold text-gold-500 uppercase tracking-widest block mb-1">
                  ESTIMATED PROJECT BUDGET RANGE
                </span>
                <div className="font-serif text-3xl md:text-4xl font-bold text-gold-300 mb-2">
                  {basePriceRange}
                </div>
                <p className="text-xs text-sage-100 mb-4">
                  Includes 3D architectural plan, ground prep, Royal Palms / trees installation, automated drip irrigation system & 1-year warranty.
                </p>

                <a
                  href={generateLandscapeInquiryLink({
                    projectType,
                    city,
                    areaSize
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-gold w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-sage-900/20" />
                  Request Official Site Visit via WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
