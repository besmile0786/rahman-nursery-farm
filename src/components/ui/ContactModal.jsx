import React, { useState } from 'react';
import { X, MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const text = `📬 *NEW WEBSITE INQUIRY — RAHMAN NURSERY FARM* 📬
--------------------------------------------
• *Name:* ${name || 'Customer'}
• *Phone:* ${phone || 'N/A'}
• *City:* ${city}
• *Inquiry:* ${message || 'I would like to order plants or request a landscape quotation.'}

Main Farm: Chak Hassan Arain | Contact: Ansar Hussain 03040450065`;

    window.open(`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-sage-900/40 backdrop-blur-md pointer-events-auto">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-cream-200"
        style={{ animation: 'fadeIn 0.25s ease' }}>

        {/* Header */}
        <div className="p-6 border-b border-cream-200 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-sage-50">
          <div>
            <h2 className="font-serif text-2xl font-bold text-sage-900">
              Rahman Nursery Farm — Contact & Locations
            </h2>
            <p className="text-xs text-emerald-800 font-bold mt-0.5">
              🌱 Main Farm: Chak Hassan Arain | 📱 Ansar Hussain: 03040450065
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-cream-100 text-sage-800 hover:bg-cream-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-cream-50/30">
          {/* Addresses & Contacts */}
          <div className="space-y-4">

            {/* Main Farm */}
            <div className="bg-gradient-to-br from-emerald-50 to-sage-50 border border-emerald-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase mb-2">
                <MapPin className="w-4 h-4" />
                <span>🌱 Main Farm — Chak Hassan Arain</span>
              </div>
              <p className="text-sm font-bold text-sage-900 mb-3">
                Chak Hassan Arain, Arifwala, District Pakpattan, Punjab, Pakistan
              </p>
              <div className="space-y-2">
                <a href="https://wa.me/923040450065" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-extrabold text-emerald-800 hover:text-emerald-600">
                  <MessageCircle className="w-4 h-4" />
                  Ansar Hussain (Online Orders): 03040450065
                </a>
                <a href="tel:+923445155160"
                  className="flex items-center gap-2 text-xs font-bold text-sage-800 hover:text-emerald-700">
                  <Phone className="w-4 h-4" />
                  Bashart Saleem: 0344-5155160
                </a>
                <a href="tel:+923041001600"
                  className="flex items-center gap-2 text-xs font-bold text-sage-800 hover:text-emerald-700">
                  <Phone className="w-4 h-4" />
                  Kashir Saleem: 0304-1001600
                </a>
              </div>
            </div>

            {/* Lahore */}
            <div className="bg-white border border-cream-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-1">
                <MapPin className="w-4 h-4" />
                <span>Lahore Delivery Hub</span>
              </div>
              <p className="text-xs font-semibold text-sage-900">
                Serving DHA, Bahria Town, Cantt, Model Town & all Lahore areas via daily delivery trucks.
              </p>
            </div>

            {/* Sahiwal / Pakpattan */}
            <div className="bg-white border border-cream-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-1">
                <MapPin className="w-4 h-4" />
                <span>Sahiwal & Pakpattan Region</span>
              </div>
              <p className="text-xs font-semibold text-sage-900">
                High-Yield Orchard & Timber Farm Supply — Sahiwal, Pakpattan, Okara & Arifwala districts.
              </p>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2 text-xs text-sage-900 font-bold">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Open 7 Days a Week: 07:00 AM – 07:00 PM</span>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <form onSubmit={handleSubmitWhatsApp} className="bg-white border border-cream-200 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-sage-900">
              📲 Quick WhatsApp Order
            </h3>
            <p className="text-xs text-sage-600 font-semibold">
              Send directly to <span className="text-emerald-700 font-extrabold">Ansar Hussain (03040450065)</span>
            </p>

            <div>
              <label className="block text-xs font-bold text-sage-800 mb-1">Your Full Name</label>
              <input type="text" required placeholder="e.g. Ch. Usman Ali"
                value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs bg-cream-50 border border-cream-200 text-sage-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-sage-800 mb-1">Phone / WhatsApp</label>
              <input type="tel" required placeholder="0300-1234567"
                value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs bg-cream-50 border border-cream-200 text-sage-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-sage-800 mb-1">Delivery City</label>
              <select value={city} onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs bg-cream-50 border border-cream-200 text-sage-900 font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500">
                <option value="Lahore">📍 Lahore</option>
                <option value="Arifwala">📍 Arifwala</option>
                <option value="Sahiwal">📍 Sahiwal</option>
                <option value="Pakpattan">📍 Pakpattan</option>
                <option value="Okara">📍 Okara</option>
                <option value="Kasur">📍 Kasur</option>
                <option value="Multan">📍 Multan</option>
                <option value="Islamabad">📍 Islamabad / Rawalpindi</option>
                <option value="Faisalabad">📍 Faisalabad</option>
                <option value="Karachi">📍 Karachi</option>
                <option value="Peshawar">📍 Peshawar</option>
                <option value="Other">📍 Other City</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-sage-800 mb-1">Plants / Trees / Grass Required</label>
              <textarea rows={3}
                placeholder="e.g. 2x Royal Date Palm, 10x Kinnu Orange Sapling, 500 sq ft Zoysia Lawn Grass..."
                value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs bg-cream-50 border border-cream-200 text-sage-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <button type="submit"
              className="btn-luxury-primary w-full py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send to WhatsApp — 03040450065
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
