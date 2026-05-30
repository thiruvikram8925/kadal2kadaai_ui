/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const doubleTestimonials = useMemo(() => [...TESTIMONIALS, ...TESTIMONIALS], []);

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-white relative overflow-hidden select-none">
      {/* Visual top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full mb-3 text-[10px] sm:text-xs uppercase font-bold text-[#0077B6] tracking-wider font-mono">
            <MessageSquare className="h-4 w-4 text-[#0077B6]" />
            <span>100% Genuine Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Customer Reviews
          </h2>
          <div className="w-12 h-1 bg-[#0077B6] mx-auto mt-4 rounded-full" />
          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed font-sans max-w-xl mx-auto">
            Hear from families, home cooks, and local chefs who enjoy our dawn-sourced, chemical-free fresh catch delivered straight to their kitchen counters.
          </p>
        </div>

        {/* Scrolling row container with pause on hover */}
        <div className="space-y-6 pause-marquee relative w-full overflow-hidden px-4 sm:px-0">
          
          {/* Edge Blur Fades for premium slider look */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Single Row - Left direction marquee */}
          <div className="animate-marquee-left flex gap-6 py-2">
            {doubleTestimonials.map((item, idx) => (
              <div
                key={`review-card-${item.id}-${idx}`}
                id={`review-card-${item.id}-${idx}`}
                className="w-[280px] sm:w-[320px] shrink-0 bg-slate-50/60 rounded-2xl border border-slate-100/90 hover:bg-white hover:border-slate-200/50 hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between relative"
              >
                <Quote className="h-6 w-6 text-[#0077B6]/10 absolute top-4 right-4" />
                
                <div>
                  {/* Rating Stars (mix of 4 and 5) */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < item.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Customer quote */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Profile detail bottom */}
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs ${item.avatarColor}`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-sans block">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider font-semibold block uppercase">
                      {item.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Visual Info Badge at bottom */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 px-4 py-2 rounded-xl text-[11px] font-sans font-semibold text-orange-850">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Average Customer Rating: <strong className="text-orange-600">4.85★ / 5.0★</strong> across 2,400+ orders this month.
          </div>
        </div>

      </div>
    </section>
  );
}
