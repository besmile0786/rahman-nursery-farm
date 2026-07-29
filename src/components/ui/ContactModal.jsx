import React, { useState } from 'react';
import { X, MapPin, Phone, Clock, Send, MessageCircle, Building2, Store } from 'lucide-react';
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
• *Inquiry:* ${message || 'I would like to order plants or request a landscape / govt project quotation.'}

Main Farm: Chak Hassan Arain | Contact: Ansar Hussain 03040450065`;

    window.open(`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-sage-900/40 backdrop-blur-md pointer-events-auto">
      <div className="bg-white w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-cream-200"
        style={{ animation: 'fadeIn 0.25s ease' }}>

        {/* Header */}
        <div className="p-5 md:p-6 border-b border-cream-200 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-sage-50">
          <div>
            <h2 className="font-serif text-xl md:text-3xl font-bold text-sage-900">
              Rahman Nursery Farm — Nursery Branches & Head Office
            </h2>
            <p className="text-xs text-emerald-800 font-extrabold mt-0.5">
              🌱 Physical Nurseries in Qaboola & Arifwala | 📱 Online Orders: Ansar Hussain 03040450065
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-cream-100 text-sage-800 hover:bg-cream-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 md:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-cream-50/30">
          
          {/* Physical Branch Cards */}
          <div className="space-y-4">

            {/* Bashart Branch */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase mb-1">
                <Store className="w-4 h-4 text-emerald-700" />
                <span>Nursery Branch 1 — Bashart Saleem</span>
              </div>
              <p className="text-xs font-black text-sage-900 mb-2">
                📍 Barakt Chowk, Opposite Royal Palm City, Qaboola
              </p>
              <p className="text-[11px] text-sage-600 font-semibold mb-3">
                Managed by <strong>Bashart Saleem</strong>. Complete physical stock of fruit trees, Cassia Nodosa, indoor plants, and garden supplies.
              </p>
              <a href="tel:+923445155160" className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-800 hover:text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                <Phone className="w-3.5 h-3.5" />
                Call Bashart Saleem: 0344-5155160
              </a>
            </div>

            {/* Kashir Branch */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase mb-1">
                <Store className="w-4 h-4 text-emerald-700" />
                <span>Nursery Branch 2 — Kashir Saleem</span>
              </div>
              <p className="text-xs font-black text-sage-900 mb-2">
                📍 Ada 17 Wali Puli, Pakpattan Rd, near Al-Madni Cotton Mill, Ārifwāla (57450)
              </p>
              <p className="text-[11px] text-sage-600 font-semibold mb-3">
                Managed by <strong>Kashir Saleem</strong>. Dispatch hub for timber trees, specimen date palms, orchard saplings, and wholesale orders.
              </p>
              <a href="tel:+923041001600" className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-800 hover:text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                <Phone className="w-3.5 h-3.5" />
                Call Kashir Saleem: 0304-1001600
              </a>
            </div>

            {/* Head Farm & Online Orders — Ansar */}
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border border-emerald-300 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-xs uppercase mb-1">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Main Head Farm & Online Delivery — Ansar Hussain</span>
              </div>
              <p className="text-xs font-black text-sage-900 mb-2">
                📍 Chak Hassan Arain, Arifwala, District Pakpattan, Punjab
              </p>
              <p className="text-[11px] text-sage-700 font-semibold mb-3">
                Managed by <strong>Ansar Hussain</strong>. Online sales, website orders, daily truck deliveries to Lahore, Sahiwal, Pakpattan & all Pakistan.
              </p>
              <a href="https://wa.me/923040450065" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-xl shadow-sm">
                <MessageCircle className="w-4 h-4 fill-white/20" />
                WhatsApp Ansar Hussain: 03040450065
              </a>
            </div>

            {/* Govt Projects Card */}
            <div className="bg-gradient-to-r from-emerald-800 to-sage-900 text-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-gold-300 font-extrabold text-xs uppercase mb-1">
                <Building2 className="w-4 h-4" />
                <span>Government & Large Scale Enterprise Projects</span>
              </div>
              <p className="text-xs font-semibold text-emerald-100 mb-2">
                Hum nay Government kay bhi projects kafi bary scale par successfully complete kiye hain. Large-scale highway greenbelts, parks, and housing scheme tenders available.
              </p>
              <a href="https://wa.me/923040450065?text=Assalam%20o%20Alaikum%20Ansar%20Bhai%2C%20Govt%20%2F%20Commercial%20Landscape%20project%20inquiry."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-sage-900 bg-gold-400 hover:bg-gold-300 px-3 py-1.5 rounded-lg">
                <MessageCircle className="w-3.5 h-3.5" />
                Govt Project Tender Contact — 03040450065
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2 text-xs text-sage-900 font-bold pt-1">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Open 7 Days a Week: 07:00 AM – 07:00 PM</span>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <form onSubmit={handleSubmitWhatsApp} className="bg-white border border-cream-200 rounded-3xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-sage-900 mb-0.5">
                📲 Quick WhatsApp Order / Inquiry
              </h3>
              <p className="text-xs text-sage-600 font-semibold mb-4">
                Send directly to <span className="text-emerald-700 font-extrabold">Ansar Hussain (03040450065)</span>
              </p>

              <div className="space-y-3">
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
                    <option value="Qaboola">📍 Qaboola</option>
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
                  <label className="block text-xs font-bold text-sage-800 mb-1">Plants / Cassia Nodosa / Govt Project Details</label>
                  <textarea rows={4}
                    placeholder="e.g. 10x Cassia Nodosa 8ft, 5x China Guava, or Government project tender details..."
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-cream-50 border border-cream-200 text-sage-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            <button type="submit"
              className="btn-luxury-primary w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 mt-4 shadow-md">
              <Send className="w-4 h-4" />
              Send to WhatsApp — 03040450065
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
