/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { Heart, ShoppingCart, Clock, Check, ChevronDown, Flame, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ProductImage } from './ProductImage';

interface TopSellingSectionProps {
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, weight: string, processing: string, qty: number) => void;
  onSelectProduct: (product: Product) => void;
}

export default function TopSellingSection({
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct
}: TopSellingSectionProps) {
  const [selectedWeights, setSelectedWeights] = useState<{ [productId: string]: string }>({});
  const [selectedProcessings, setSelectedProcessings] = useState<{ [productId: string]: string }>({});
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);

  // Dynamically extract up to 10 best-selling products or high-rated products
  const topSellingProducts = useMemo(() => {
    const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
    if (bestSellers.length >= 10) {
      return bestSellers.slice(0, 10);
    }
    const remaining = PRODUCTS.filter(p => !p.isBestSeller)
      .sort((a, b) => b.rating - a.rating);
    return [...bestSellers, ...remaining].slice(0, 10);
  }, []);

  if (topSellingProducts.length === 0) {
    return null;
  }

  // Double the list of items to create an endless continuous scrolling carousel with zero jumps
  const doubleProducts = useMemo(() => {
    return [...topSellingProducts, ...topSellingProducts];
  }, [topSellingProducts]);

  const handleWeightChange = (productId: string, weight: string) => {
    setSelectedWeights(prev => ({ ...prev, [productId]: weight }));
  };

  const handleProcessingChange = (productId: string, processing: string) => {
    setSelectedProcessings(prev => ({ ...prev, [productId]: processing }));
  };

  const getAdjustedPrice = (product: Product) => {
    const weight = selectedWeights[product.id] || product.availableWeights[0];
    const multiplier = product.weightMultipliers[weight] || 1;
    return Math.round(product.price * multiplier);
  };

  const triggerAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const weight = selectedWeights[product.id] || product.availableWeights[0];
    const processing = selectedProcessings[product.id] || product.processingOptions[0] || 'Whole Cleaned';
    
    setAddingToCartId(product.id);
    onAddToCart(product, weight, processing, 1);
    
    setTimeout(() => {
      setAddingToCartId(null);
    }, 800);
  };

  return (
    <section id="top-selling" className="py-10 sm:py-12 bg-[#F8FBFD] border-t border-b border-slate-100 overflow-hidden relative">
      {/* Background Subtle Watermark Rings */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="200" fill="#0077B6" />
          <circle cx="80%" cy="70%" r="300" fill="#03045E" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0077B6]/10 border border-[#0077B6]/20 rounded-full mb-3 text-[10px] sm:text-xs uppercase font-bold text-[#0077B6] tracking-wider font-mono">
            <Award className="h-4.5 w-4.5 text-[#0077B6]" />
            <span>Top Rated & Coveted</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Top Selling Seafood
          </h2>
          <div className="w-16 h-1 bg-[#0077B6] mx-auto mt-4 rounded-full" />
          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed font-sans max-w-xl mx-auto">
            The most sought-after catches, favored by premium chefs and home cooks alike for their exquisite taste, absolute freshness, and immaculate cuts.
          </p>
        </div>

        {/* Endless Moving Carousel Belt Wrapper */}
        <div className="relative w-full overflow-hidden pause-marquee -mx-4 sm:mx-0">
          {/* Subtle fade-out gradients on left/right edges for premium visual blending */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#F8FBFD] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#F8FBFD] to-transparent z-20 pointer-events-none" />

          {/* Scrolling Marquee Container */}
          <div className="animate-marquee-left flex gap-6 py-4 px-4 sm:px-0">
            {doubleProducts.map((p, idx) => {
              const weightSelected = selectedWeights[p.id] || p.availableWeights[0];
              const processingSelected = selectedProcessings[p.id] || p.processingOptions[0] || 'Whole Cleaned';
              const isWishlisted = wishlist.includes(p.id);
              const isFresh = p.isFreshToday;
              const isFirstAdded = addingToCartId === p.id;
              const currentPrice = getAdjustedPrice(p);

              return (
                <div
                  key={`${p.id}-top-${idx}`}
                  id={`top-selling-card-${p.id}-${idx}`}
                  className="w-[200px] sm:w-[240px] lg:w-[250px] shrink-0 group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative cursor-pointer"
                  onClick={() => onSelectProduct(p)}
                >
                  {/* Product Image Stage */}
                  <div className="relative aspect-square overflow-hidden bg-slate-50 select-none">
                    <ProductImage
                      productId={p.id}
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-contain p-2"
                    />

                    {/* Gradient Screen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

                    {/* Left Badges */}
                    <div className="absolute top-2.5 left-2.5 z-25 flex flex-col gap-1 sm:gap-1.5">
                      {isFresh && (
                        <span className="bg-[#52B788] text-white text-[8px] sm:text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg flex items-center gap-0.5 sm:gap-1 shadow-sm font-sans">
                          <Clock className="w-2.5 h-2.5" />
                          <span>Fresh</span>
                        </span>
                      )}
                      <span className="bg-orange-500 text-white text-[8px] sm:text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg flex items-center gap-0.5 shadow-sm font-sans">
                        <Flame className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
                        <span>Best Selling</span>
                      </span>
                    </div>

                    {/* Right Heart Toggle */}
                    <button
                      id={`top-wishlist-btn-${p.id}-${idx}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(p.id);
                      }}
                      className="absolute top-2.5 right-2.5 z-25 p-1.5 sm:p-2 bg-white/70 hover:bg-white backdrop-blur-md text-gray-750 hover:text-rose-500 rounded-xl transition-all cursor-pointer shadow-sm"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>

                    {/* Location Tag */}
                    <span className="absolute bottom-2.5 left-2.5 z-20 text-[8px] sm:text-[9px] font-mono tracking-wide text-white bg-black/45 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                      {p.catchLocation}
                    </span>
                  </div>

                  {/* Body details */}
                  <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Localized subtag and ratings count */}
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#0077B6] uppercase font-mono block max-w-[120px] truncate">
                          {p.localName}
                        </span>
                        <div className="flex items-center gap-0.5 font-sans shrink-0">
                          <span className="text-amber-500 text-[10px] sm:text-xs">★</span>
                          <span className="text-[10px] font-bold text-slate-700">{p.rating}</span>
                        </div>
                      </div>

                      {/* Title block */}
                      <p className="font-serif text-sm sm:text-base font-bold text-slate-800 tracking-tight group-hover:text-[#0077B6] transition-colors truncate">
                        {p.name}
                      </p>

                      {/* Weight Selector */}
                      <div className="mt-3 flex items-center justify-between gap-1 group/select" onClick={(e) => e.stopPropagation()}>
                        <span className="text-[10px] font-medium text-slate-400 font-mono">Weight:</span>
                        <div className="relative">
                          <select
                            id={`top-weight-select-${p.id}-${idx}`}
                            value={weightSelected}
                            onChange={(e) => handleWeightChange(p.id, e.target.value)}
                            className="bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-700 pr-5 pl-1.5 py-0.5 rounded-md appearance-none focus:outline-none cursor-pointer group-hover/select:border-[#0077B6] transition-all"
                          >
                            {p.availableWeights.map(w => (
                              <option key={w} value={w}>{w}</option>
                            ))}
                          </select>
                          <ChevronDown className="h-3 w-3 absolute right-1 top-1 pointer-events-none text-slate-400" />
                        </div>
                      </div>

                      {/* Cuts Options */}
                      {p.processingOptions.length > 0 && (
                        <div className="mt-1.5 flex items-center justify-between gap-1 group/select" onClick={(e) => e.stopPropagation()}>
                          <span className="text-[10px] font-medium text-slate-400 font-mono font-light">Cuts:</span>
                          <div className="relative">
                            <select
                              id={`top-processing-select-${p.id}-${idx}`}
                              value={processingSelected}
                              onChange={(e) => handleProcessingChange(p.id, e.target.value)}
                              className="bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-700 pr-5 pl-1.5 py-0.5 rounded-md appearance-none focus:outline-none cursor-pointer group-hover/select:border-[#0077B6] transition-all"
                            >
                              {p.processingOptions.map(o => (
                                <option key={o} value={o}>{o}</option>
                              ))}
                            </select>
                            <ChevronDown className="h-3 w-3 absolute right-1 top-1 pointer-events-none text-slate-400" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price and Cart Action */}
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-xs font-bold text-[#03045E]">₹</span>
                          <span className="text-base font-extrabold text-[#03045E]">{currentPrice}</span>
                        </div>
                        <span className="text-[9px] text-slate-400 tracking-wide font-mono">/{weightSelected}</span>
                      </div>

                      <button
                        id={`top-add-btn-${p.id}-${idx}`}
                        onClick={(e) => triggerAddToCart(e, p)}
                        className={`p-2 px-3 rounded-xl cursor-pointer text-[10px] sm:text-xs font-extrabold transition-all duration-300 flex items-center gap-1 shadow-sm ${
                          isFirstAdded
                            ? 'bg-[#52B788] text-white shadow-emerald-50'
                            : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 hover:shadow-md shadow-orange-100'
                        }`}
                      >
                        {isFirstAdded ? (
                          <>
                            <Check className="h-3 w-3" />
                            <span className="hidden sm:inline">Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-3 w-3" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
