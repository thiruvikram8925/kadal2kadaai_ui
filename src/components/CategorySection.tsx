/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FEATURED_CATEGORIES, PRODUCTS } from '../data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategorySectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function CategorySection({ onSelectCategory }: CategorySectionProps) {
  return (
    <section id="categories" className="py-20 bg-slate-50 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sky-600 text-xs font-bold font-mono tracking-widest uppercase block mb-2">
            Pristine Ocean Sourcing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
            Shop by Category
          </h2>
          <div className="w-12 h-1 bg-[#0077B6] mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 mt-4 leading-relaxed font-sans">
            Every catch is prepared by certified experts to match your customized kitchen preferences. Choose from our premium coastal selections.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_CATEGORIES.map((cat, idx) => {
            const count = PRODUCTS.filter(p => p.category === cat.id).length;
            return (
              <motion.button
                key={cat.id}
                id={`cat-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 text-left cursor-pointer border border-slate-100"
              >
                {/* Full bleed photograph background */}
                <div className="absolute inset-0 z-0 bg-slate-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out select-none pointer-events-none"
                  />
                  
                  {/* Gradient overlay: transparent top to dark navy bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/90 via-[#03045E]/45 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-85" />
                </div>

                {/* Category labels and links */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      {/* Tamil Name Indicator */}
                      <span className="block text-[11px] font-medium tracking-wider text-sky-300 mb-0.5">
                        {cat.tamilName ? `${cat.tamilName} · ` : ''}{count} Items Available
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                        {cat.name}
                      </h3>
                    </div>
                    
                    <div className="bg-sky-500 hover:bg-sky-400 text-white rounded-xl p-2.5 transform translate-x-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md">
                      <ArrowRight className="h-4.5 w-4.5" />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
