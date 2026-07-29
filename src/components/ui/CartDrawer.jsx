import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { RAHMAN_WHATSAPP_NUMBER } from '../../utils/whatsappHelper';

export const CartDrawer = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.plant.pricePKR * item.quantity), 0);

  const handleCheckout = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    let itemsText = cart.map((item, index) => {
      const lineTotal = item.plant.pricePKR * item.quantity;
      return `${index + 1}. *${item.plant.name}*
   • Qty: ${item.quantity} × PKR ${item.plant.pricePKR.toLocaleString()} = PKR ${lineTotal.toLocaleString()}
   • Code/ID: ${item.plant.id}`;
    }).join('\n\n');

    const message = `🌿 *NEW PLANT ORDER — RAHMAN NURSERY FARM* 🌿
--------------------------------------------
*Customer Details:*
• Name: ${customerName || 'Customer'}
• Phone: ${customerPhone || 'N/A'}
• Delivery City: ${city}
${notes ? `• Special Instructions: ${notes}\n` : ''}
--------------------------------------------
*ORDERED ITEMS (${totalItems}):*

${itemsText}

--------------------------------------------
💰 *TOTAL AMOUNT: PKR ${totalPrice.toLocaleString()}*
--------------------------------------------
📍 Main Farm: Chak Hassan Arain, Arifwala
📱 Online Sales Manager: Ansar Hussain (03040450065)`;

    window.open(`https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-sage-900/50 backdrop-blur-sm pointer-events-auto transition-opacity">
      <div
        className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl border-l border-emerald-100"
        style={{ animation: 'slideLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Cart Header */}
        <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-sage-900 leading-tight">
                Your Plant Cart
              </h2>
              <p className="text-xs text-emerald-800 font-extrabold">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-cream-100 text-sage-700 hover:bg-cream-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-cream-50/30">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-sage-500">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl mb-4 shadow-sm border border-emerald-100">
                🌱
              </div>
              <h3 className="font-serif text-lg font-bold text-sage-900 mb-1">
                Your cart is empty
              </h3>
              <p className="text-xs text-sage-600 max-w-xs leading-relaxed font-semibold">
                Browse our 50+ plant collection, orchards, or Cassia Nodosa varieties and click "Add to Cart"!
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.plant.id}
                className="bg-white border border-cream-200 rounded-2xl p-4 shadow-sm flex gap-3.5 items-start relative group"
              >
                {/* Emoji / Color Avatar */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-inner"
                  style={{ backgroundColor: `${item.plant.colorTheme || '#2E7D32'}15` }}
                >
                  {item.plant.badge?.split(' ')[0] || '🌿'}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-serif text-sm font-bold text-sage-900 truncate">
                      {item.plant.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.plant.id)}
                      className="text-sage-400 hover:text-red-500 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-[11px] text-emerald-700 font-extrabold mt-0.5">
                    PKR {item.plant.pricePKR.toLocaleString()} each
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-cream-100">
                    <div className="flex items-center gap-2 bg-cream-100/80 rounded-xl p-1 border border-cream-200">
                      <button
                        onClick={() => onUpdateQuantity(item.plant.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-white text-sage-800 flex items-center justify-center font-bold text-xs hover:bg-cream-50 shadow-sm"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-black text-sage-900 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.plant.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-white text-sage-800 flex items-center justify-center font-bold text-xs hover:bg-cream-50 shadow-sm"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-xs font-black text-sage-900">
                      PKR {(item.plant.pricePKR * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Checkout Section */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-cream-200 bg-white space-y-4 shadow-lg">
            {/* Customer Inputs */}
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-sage-800 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Usman Khan"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-50 border border-cream-200 text-sage-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-sage-800 mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    placeholder="0300-1234567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-50 border border-cream-200 text-sage-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-sage-800 mb-1">Delivery City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-cream-50 border border-cream-200 text-sage-900 font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="Lahore">📍 Lahore (Daily Truck Delivery)</option>
                  <option value="Arifwala">📍 Arifwala (Main Farm Pick/Drop)</option>
                  <option value="Sahiwal">📍 Sahiwal (Direct Farm Hub)</option>
                  <option value="Pakpattan">📍 Pakpattan (Regional Hub)</option>
                  <option value="Okara">📍 Okara</option>
                  <option value="Kasur">📍 Kasur</option>
                  <option value="Multan">📍 Multan</option>
                  <option value="Faisalabad">📍 Faisalabad</option>
                  <option value="Islamabad">📍 Islamabad / Rawalpindi</option>
                  <option value="Karachi">📍 Karachi</option>
                  <option value="Peshawar">📍 Peshawar</option>
                  <option value="Other">📍 Other City</option>
                </select>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-sage-700 font-semibold">
                <span>Subtotal ({totalItems} items):</span>
                <span className="font-bold text-sage-900">PKR {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sage-700 font-semibold">
                <span>Delivery Charge:</span>
                <span className="font-extrabold text-emerald-700">Calculated on WhatsApp</span>
              </div>
              <div className="pt-2 border-t border-emerald-200 flex items-center justify-between font-serif text-base font-bold text-sage-900">
                <span>Total Amount:</span>
                <span className="text-emerald-800 font-black text-lg">
                  PKR {totalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleCheckout}
              className="btn-luxury-primary w-full py-3.5 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              Order via WhatsApp — 03040450065
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
