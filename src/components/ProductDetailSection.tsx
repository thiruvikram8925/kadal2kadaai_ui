/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { X, Heart, ShoppingCart, ShieldCheck, MapPin, Truck, Calendar, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductImage } from './ProductImage';

interface ProductDetailSectionProps {
  product: Product | null;
  onClose: () => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, weight: string, processing: string, qty: number) => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductDetailSection({
  product,
  onClose,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct
}: ProductDetailSectionProps) {
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [selectedProcessing, setSelectedProcessing] = useState('');
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  // Set default configurations on item load
  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedWeight(product.availableWeights[0]);
      setSelectedProcessing(product.processingOptions[0] || 'Whole Cleaned');
      setActiveTab('desc');
    }
  }, [product]);

  const isWishlisted = useMemo(() => {
    if (!product) return false;
    return wishlist.includes(product.id);
  }, [product, wishlist]);

  const priceMultiplier = useMemo(() => {
    if (!product || !selectedWeight) return 1;
    return product.weightMultipliers[selectedWeight] || 1;
  }, [product, selectedWeight]);

  const currentPrice = useMemo(() => {
    if (!product) return 0;
    return Math.round(product.price * priceMultiplier);
  }, [product, priceMultiplier]);

  // Sibling related items in same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);
  }, [product]);

  if (!product) return null;

  const handleAddClick = () => {
    onAddToCart(product, selectedWeight, selectedProcessing, 1);
    setIsAddedFeedback(true);
    setTimeout(() => {
      setIsAddedFeedback(false);
    }, 1200);
  };

  const reviewsList = [
    { name: 'Ramanathan S.', date: 'Today, 11:30 AM', rating: 5, text: 'Fantastic quality and very clean processing. Smells clean with zero bad storage scent.', location: 'Chennai' },
    { name: 'Karthika Devi', date: 'Yesterday', rating: 5, text: 'The cuts are perfect. Sliced cleanly. Sourced fresh at dawn perfectly reflects in meen kuzhambu.', location: 'Madurai' },
    { name: 'Sanjay Nair', date: '2 Days ago', rating: 5, text: 'Unbelievably good cold packing. Stays chilled right to Coimbatore. Helping fisherman directly is awesome!', location: 'Coimbatore' }
  ];

  return (
    <section id="product-detail-section" className="py-10 sm:py-16 bg-[#F8FBFD] border-t border-b border-slate-100 relative overflow-hidden select-none">
      {/* Background Subtle Watermark Rings */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="200" fill="#0077B6" />
          <circle cx="80%" cy="70%" r="300" fill="#03045E" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with close button */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-200/60 pb-4">
          <div>
            <span className="text-[#0077B6] text-xs font-bold font-mono tracking-widest uppercase block mb-1">
              Currently Viewing Details
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {product.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="detail-wishlist-toggle"
              onClick={() => onToggleWishlist(product.id)}
              className="p-2.5 bg-white border border-slate-205 hover:border-slate-300 text-gray-750 hover:text-rose-500 rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-2 text-xs font-bold"
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
            <button
              id="detail-close-btn"
              onClick={onClose}
              className="p-2.5 bg-white border border-slate-205 hover:border-red-200 text-slate-700 hover:text-red-650 rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-2 text-xs font-bold"
            >
              <X className="h-4 w-4" />
              <span>Close Details</span>
            </button>
          </div>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
          
          {/* Left Column (60%): Image Gallery & Grid */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Hero primary image */}
            <div
              className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden w-full bg-slate-100 border border-slate-100 shadow-inner group/zoom select-none cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <ProductImage
                productId={product.id}
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain p-4 bg-[#f8fafc]"
              />

              {/* Gradient shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Absolute badgelines */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-sky-400/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-sm">
                  {product.catchLocation}
                </span>
                <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Certified Fresh</span>
                </span>
              </div>

              {/* Zoom badge indicator toggle */}
              <div className="absolute top-4 left-4 p-2 bg-black/45 backdrop-blur-md text-white rounded-lg opacity-0 group-hover/zoom:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>

            {/* Thumbnails row below */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                {product.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    id={`thumbnail-selector-${idx}`}
                    className={`w-18 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#0077B6] scale-102 shadow-sm' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <ProductImage
                      productId={product.id}
                      src={imgUrl}
                      alt={`${product.name} thumbnail`}
                      className="w-full h-full object-contain p-1 bg-[#f8fafc]"
                      showUploadButton={false}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Shared specs cards */}
            <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-xl grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-sky-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Catch Timeline:</span>
                  <strong className="text-slate-800">{product.catchDate}</strong>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Catch Location:</span>
                  <strong className="text-slate-800 truncate block max-w-[150px]">{product.catchLocation}</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (40%): Details, Weight, Cuts, Add to Cart */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs">
                <span className="bg-emerald-50 border border-emerald-100 text-emerald-800 px-2 py-0.5 rounded-lg text-[10px] font-bold tracking-wider uppercase">
                  CHEMICAL-FREE
                </span>
                <span className="text-slate-400 font-mono">ID: {product.id.slice(0, 8)}</span>
              </div>

              {/* Name and local subtitle */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h3>
              <span className="text-xs text-sky-600 font-bold block mt-1 tracking-widest uppercase font-mono">{product.localName}</span>

              <div className="flex items-center gap-3 mt-3.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-slate-200'}`}>★</span>
                  ))}
                  <strong className="text-xs text-slate-800 pl-1 font-sans">{product.rating}</strong>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-xs text-sky-600 hover:underline cursor-pointer font-semibold" onClick={() => setActiveTab('reviews')}>
                  {product.reviewCount} Verified Customer Reviews
                </span>
              </div>

              {/* Dynamic Adjusted pricing display */}
              <div className="mt-5 p-4 bg-sky-50/40 border border-sky-100/50 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Dynamic Sourcing Price:</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-sm font-bold text-[#03045E]">₹</span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#03045E]">{currentPrice}</span>
                    <span className="text-xs text-slate-400 font-medium font-sans">/{selectedWeight} Box</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] bg-sky-500/10 text-sky-700 font-bold tracking-wider uppercase rounded-xl font-mono">
                  *Price Locked
                </span>
              </div>

              {/* Weight Options Group */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 uppercase tracking-wider font-mono text-[10px]">Select Weight:</span>
                  <span className="text-slate-400 font-mono">Custom Multipliers Active</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableWeights.map((w) => {
                    const isSelect = selectedWeight === w;
                    return (
                      <button
                        key={w}
                        id={`details-weight-${w}`}
                        onClick={() => setSelectedWeight(w)}
                        className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          isSelect
                            ? 'bg-[#0077B6] border-[#0077B6] text-white shadow-sm shadow-sky-100'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {w}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Pre-Clean Slicing options */}
              {product.processingOptions.length > 0 && (
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-700 uppercase tracking-wider font-mono text-[10px]">Prepare Method Cuts:</span>
                    <span className="text-xs text-sky-600 hover:underline cursor-pointer italic font-sans" onClick={() => setActiveTab('specs')}>*Check Yield losses</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.processingOptions.map((o) => {
                      const isSelect = selectedProcessing === o;
                      return (
                        <button
                          key={o}
                          id={`details-proc-${o}`}
                          onClick={() => setSelectedProcessing(o)}
                          className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                            isSelect
                              ? 'bg-[#03045E] border-[#03045E] text-white shadow-sm'
                              : 'bg-slate-50 border-slate-200/50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Logistics Estimates & Add to Cart */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
              <div className="flex items-center gap-2.5 text-xs text-slate-500 font-sans">
                <Truck className="h-4.5 w-4.5 text-sky-600 animate-pulse" />
                <span>Guaranteed home delivery by <strong>Tomorrow Morning 7:30 AM</strong> if ordered before midnight.</span>
              </div>

              <div className="flex gap-3">
                <button
                  id="details-add-cart"
                  onClick={handleAddClick}
                  className={`flex-1 py-4.5 rounded-2xl cursor-pointer text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                    isAddedFeedback
                      ? 'bg-[#52B788] text-white shadow-emerald-100'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/20'
                  }`}
                >
                  <ShoppingCart className="h-4.5 w-4.5" />
                  <span>{isAddedFeedback ? 'Sourced & Packed!' : 'Add Sourced Pack to Cart'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Below Fold Tabs: Detailed Info & Specifications */}
        <div className="bg-slate-50/50 border border-slate-200/40 rounded-3xl mt-10 p-6 sm:p-8 lg:p-10">
          
          {/* Tab Toggles */}
          <div className="flex border-b border-gray-200/70 gap-6 mb-6">
            {[
              { label: 'Description', id: 'desc' },
              { label: 'Specifications', id: 'specs' },
              { label: 'Reviews', id: 'reviews' }
            ].map((t) => (
              <button
                key={t.id}
                id={`detail-tab-${t.id}`}
                onClick={() => setActiveTab(t.id as any)}
                className={`pb-3 text-xs uppercase font-extrabold tracking-widest border-b-2 font-mono transition-colors cursor-pointer ${
                  activeTab === t.id ? 'border-[#0077B6] text-[#0077B6]' : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
            {activeTab === 'desc' && (
              <div className="space-y-4 font-sans">
                <p className="font-light text-slate-600 leading-relaxed lg:max-w-4xl">
                  {product.description}
                </p>
                <div className="p-4 bg-white rounded-xl border border-slate-100/80 flex flex-col sm:flex-row items-center gap-4 inline-flex shadow-xs">
                  {/* Fisherman Partner profile card block */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-11 h-11 bg-sky-200 rounded-full flex items-center justify-center font-bold text-[#0077B6] text-sm overflow-hidden border border-sky-300">
                      {product.fisherman.image ? (
                        <img src={product.fisherman.image} alt={product.fisherman.name} className="w-full h-full object-cover pointer-events-none select-none" />
                      ) : (
                        product.fisherman.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-mono">Direct Sourced From:</p>
                      <strong className="text-slate-800 text-xs sm:text-sm font-serif block">{product.fisherman.name}</strong>
                    </div>
                  </div>

                  <div className="h-0.5 sm:h-8 w-full sm:w-px bg-slate-200" />

                  <p className="text-[11px] text-slate-500 font-light">
                    Partnered since {product.fisherman.partnerSince} · Sourced in the {product.fisherman.location}. Sells with exceptional 100% freshness credentials.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-3.5 bg-white border border-slate-100 rounded-xl">
                    <span className="text-slate-400 text-xs">{key}:</span>
                    <strong className="text-slate-800 text-xs text-right pr-1 font-bold">{value}</strong>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {reviewsList.map((rev, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 ">
                        <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-[10px]">
                          {rev.name.charAt(0)}
                        </div>
                        <strong className="text-slate-800 text-xs font-semibold">{rev.name}</strong>
                        <span className="text-[11px] text-slate-400 font-mono">({rev.location})</span>
                        <span className="text-[11px] text-slate-400 font-mono pl-2">{rev.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">{rev.text}</p>
                    </div>
                    <div className="flex items-center shadow-xs bg-emerald-50 px-2 py-1 border border-emerald-100 rounded-lg text-[10px] font-bold text-emerald-700 font-sans self-start md:self-auto uppercase tracking-wider">
                      ★ {rev.rating} Verified Fresh
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Sibling Products Row */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-slate-200/60 pt-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-6 flex items-center gap-1.5">
                <span>Related Seafood Catch</span>
                <span className="text-xs bg-sky-100 text-[#0077B6] font-mono font-bold px-2 py-0.5 rounded-md">Same Category</span>
              </h3>
              
              {/* Slider with click interaction */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
                {relatedProducts.map((p) => (
                  <button
                    key={p.id}
                    id={`related-card-${p.id}`}
                    className="w-48 bg-white border border-slate-100 hover:border-sky-100 p-3.5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 text-left shrink-0 cursor-pointer flex flex-col justify-between aspect-[3/4]"
                    onClick={() => onSelectProduct(p)}
                  >
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-50 select-none">
                      <ProductImage
                        productId={p.id}
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-full object-contain p-2 bg-[#f8fafc]"
                        showUploadButton={false}
                      />
                    </div>
                    <div className="mt-3">
                      <span className="text-[9px] font-bold text-sky-600 block uppercase font-mono">{p.localName}</span>
                      <h4 className="text-xs font-serif font-bold text-slate-800 tracking-tight leading-snug line-clamp-2 block mt-0.5">{p.name}</h4>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-50 mt-2">
                      <span className="text-xs font-extrabold text-[#03045E]">₹{p.price}</span>
                      <span className="text-[9px] tracking-widest font-bold uppercase text-slate-400 group-hover:text-sky-500 font-mono">View →</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Lightbox zoom overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-4 select-none cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <button
              id="lightbox-close-btn"
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl pointer-events-none select-none border border-white/5"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
