import React from 'react';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Chaudhry Tariq Mahmood',
      city: 'DHA Phase 6, Lahore',
      rating: 5,
      comment: 'Rahman Nursery transformed our 2-Kanal villa lawn. Their 18ft Royal Palms and stone stream make our entrance look like a 5-star Dubai resort. Extraordinary service and healthy plants!'
    },
    {
      name: 'Dr. Ayesha Malik',
      city: 'Bahria Agro Farms, Islamabad',
      rating: 5,
      comment: 'I ordered Monstera Deliciosa and Italian Olive trees on WhatsApp. The delivery was fast, plants arrived in pristine wooden crates, and the 3D inspection on their site matched the real plants 100%!'
    },
    {
      name: 'Sheraz Khan',
      city: 'Emaar Oceanfront, Karachi',
      rating: 5,
      comment: 'Their team designed a salt-resilient rooftop green garden for our penthouse. The drip irrigation and lighting integration were handled professionally within budget.'
    }
  ];

  return (
    <section className="relative z-10 py-24 px-4 md:px-12 max-w-7xl mx-auto pointer-events-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
          CLIENT TESTIMONIALS
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-sage-900">
          Trusted by Pakistan’s Finest Estates
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <Quote className="w-16 h-16 text-sage-900/5 absolute -right-2 -top-2" />

            <div>
              <div className="flex items-center gap-1 text-gold-500 mb-4">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-sage-800 leading-relaxed italic mb-6">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-cream-200">
              <h4 className="font-serif font-bold text-sage-900 text-sm">{rev.name}</h4>
              <p className="text-[11px] text-sage-600 font-semibold">{rev.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
