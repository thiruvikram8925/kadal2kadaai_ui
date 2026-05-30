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

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, weight: string, processing: string, qty: number) => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct
}: ProductDetailModalProps) {
  
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
    { name: 'Ramanathan S.', date: 'Today', rating: 5, text: 'Fantastic quality and very clean processing. Smells fresh catch!', location: 'Chennai' },
    { name: 'Karthika Devi', date: 'Yesterday', rating: 5, text: 'The cuts are perfect. Slices are perfect in kuzhambu.', location: 'Madurai' },
    { name: 'Sanjay Nair', date: '2 Days ago', rating: 5, text: 'Unbelievably good cold packing. Stays chilled right to Coimbatore.', location: 'Coimbatore' }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-hidden"
        onClick={onClose}
      >
        {/* Main Modal Card (Small Box Type - centered and max-w-lg) */}
        <motion.div
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -400, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-100 flex flex-col relative max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Sticky Header block */}
          <div className="flex justify-between items-center px-5 pt-5 pb-3 border-b border-slate-100 bg-white z-20">
            <div className="pr-8">
              <span className="bg-emerald-50 border border-emerald-100 text-emerald-800 px-2 py-0.5 rounded-lg text-[9px] font-bold tracking-wider uppercase font-mono block w-fit mb-1">
                CHEMICAL-FREE
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h2>
              <span className="text-[10px] text-sky-600 font-bold block mt-0.5 tracking-widest uppercase font-mono">{product.localName}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                id="detail-wishlist-toggle"
                onClick={() => onToggleWishlist(product.id)}
                className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-gray-700 hover:text-rose-500 rounded-xl transition-all cursor-pointer shadow-xs"
                title="Add to Wishlist"
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
              <button
                id="detail-close-btn"
                onClick={onClose}
                className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 hover:text-red-650 rounded-xl transition-all cursor-pointer shadow-xs"
                title="Close details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Middle Content Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            
            {/* Primary Hero Image & Gallery */}
            <div className="space-y-3">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden w-full bg-slate-50 border border-slate-100 shadow-inner group/zoom select-none cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
              >
                <ProductImage
                  productId={product.id}
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain p-3 bg-[#f8fafc]"
                />

                {/* Sourcing badges on image */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  <span className="bg-sky-400/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg shadow-xs">
                    {product.catchLocation}
                  </span>
                  <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg flex items-center gap-0.5 shadow-xs">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Dawn Sourced</span>
                  </span>
                </div>

                {/* Zoom badge overlay */}
                <div className="absolute top-3 left-3 p-1.5 bg-black/45 backdrop-blur-md text-white rounded-lg opacity-0 group-hover/zoom:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Thumbnails list below */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {product.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      id={`thumbnail-selector-${idx}`}
                      className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#0077B6] scale-102 shadow-xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setActiveImageIndex(idx)}
                    >
                      <ProductImage
                        productId={product.id}
                        src={imgUrl}
                        alt={`${product.name} thumbnail`}
                        className="w-full h-full object-contain p-0.5 bg-[#f8fafc]"
                        showUploadButton={false}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sourcing Logistics estimates */}
            <div className="bg-slate-50 border border-slate-200/50 p-3 rounded-xl grid grid-cols-2 gap-3 text-[10px] font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[8px] uppercase">Catch Timeline:</span>
                  <strong className="text-slate-800">{product.catchDate}</strong>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[8px] uppercase">Catch Location:</span>
                  <strong className="text-slate-800 truncate block max-w-[100px]">{product.catchLocation}</strong>
                </div>
              </div>
            </div>

            {/* Sourcing pricing box */}
            <div className="p-3 bg-sky-50/40 border border-sky-100/50 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[8px] text-slate-400 uppercase font-mono tracking-wider">Sourcing Price:</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xs font-bold text-[#03045E]">₹</span>
                  <span className="text-xl font-bold text-[#03045E]">{currentPrice}</span>
                  <span className="text-[10px] text-slate-400 font-sans">/{selectedWeight} Box</span>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[8px] bg-sky-500/10 text-sky-700 font-bold uppercase rounded-lg font-mono">
                Price Locked
              </span>
            </div>

            {/* Weight Options Selection pills */}
            <div className="space-y-1.5">
              <span className="font-bold text-slate-700 uppercase font-mono text-[9px] block">Select Weight:</span>
              <div className="flex flex-wrap gap-1.5">
                {product.availableWeights.map((w) => {
                  const isSelect = selectedWeight === w;
                  return (
                    <button
                      key={w}
                      id={`details-weight-${w}`}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-3 py-1.5 text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                        isSelect
                          ? 'bg-[#0077B6] border-[#0077B6] text-white shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {w}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Prepare Cuts Options selector */}
            {product.processingOptions.length > 0 && (
              <div className="space-y-1.5">
                <span className="font-bold text-slate-700 uppercase font-mono text-[9px] block">Prepare Cuts:</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.processingOptions.map((o) => {
                    const isSelect = selectedProcessing === o;
                    return (
                      <button
                        key={o}
                        id={`details-proc-${o}`}
                        onClick={() => setSelectedProcessing(o)}
                        className={`px-2.5 py-1.5 text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                          isSelect
                            ? 'bg-[#03045E] border-[#03045E] text-white shadow-xs'
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

            {/* Below Fold Tabs: Detailed Info */}
            <div className="bg-slate-50/50 border border-slate-200/30 rounded-2xl p-4">
              
              {/* Tab headers */}
              <div className="flex border-b border-gray-200/50 gap-4 mb-3">
                {[
                  { label: 'Description', id: 'desc' },
                  { label: 'Specs', id: 'specs' },
                  { label: 'Reviews', id: 'reviews' }
                ].map((t) => (
                  <button
                    key={t.id}
                    id={`detail-tab-${t.id}`}
                    onClick={() => setActiveTab(t.id as any)}
                    className={`pb-1.5 text-[10px] uppercase font-bold border-b-2 font-mono transition-colors cursor-pointer ${
                      activeTab === t.id ? 'border-[#0077B6] text-[#0077B6]' : 'border-transparent text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Tab contents */}
              <div className="text-slate-600 text-xs leading-relaxed">
                {activeTab === 'desc' && (
                  <div className="space-y-3 font-sans">
                    <p className="font-light text-slate-600">
                      {product.description}
                    </p>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-100 flex items-center gap-2 shadow-inner">
                      <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center font-bold text-[#0077B6] text-[10px] overflow-hidden shrink-0 border border-sky-300">
                        {product.fisherman.image ? (
                          <img src={product.fisherman.image} alt={product.fisherman.name} className="w-full h-full object-cover" />
                        ) : (
                          product.fisherman.name.charAt(0)
                        )}
                      </div>
                      <div className="text-[10px]">
                        <span className="text-slate-400 block text-[8px] uppercase">Sourced from:</span>
                        <strong className="text-slate-800 block leading-tight">{product.fisherman.name} ({product.fisherman.location})</strong>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="grid grid-cols-1 gap-2 font-mono text-[10px]">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between p-2 bg-white border border-slate-100 rounded-lg">
                        <span className="text-slate-400">{key}:</span>
                        <strong className="text-slate-800 text-right font-bold">{value}</strong>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-2">
                    {reviewsList.map((rev, idx) => (
                      <div key={idx} className="bg-white border border-slate-100 p-2.5 rounded-lg flex justify-between items-start gap-2 shadow-xs">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-[8px]">
                              {rev.name.charAt(0)}
                            </span>
                            <strong className="text-slate-800 text-[10px] font-semibold">{rev.name}</strong>
                            <span className="text-[9px] text-slate-400 font-mono">({rev.location})</span>
                          </div>
                          <p className="text-[10px] text-slate-500 font-sans leading-tight">{rev.text}</p>
                        </div>
                        <span className="bg-emerald-50 px-1 py-0.5 rounded text-[8px] font-bold text-emerald-700 shrink-0">
                          ★ {rev.rating}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Related Catch slider items */}
            {relatedProducts.length > 0 && (
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-serif text-sm font-bold text-slate-900 mb-3">Related catches:</h4>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {relatedProducts.map((p) => (
                    <button
                      key={p.id}
                      id={`related-card-${p.id}`}
                      className="w-36 bg-white border border-slate-100 hover:border-sky-100 p-2 rounded-xl shadow-xs hover:shadow-sm transition-all duration-300 text-left shrink-0 cursor-pointer flex flex-col justify-between aspect-[3/4]"
                      onClick={() => onSelectProduct(p)}
                    >
                      <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-50">
                        <ProductImage
                          productId={p.id}
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-contain p-1 bg-[#f8fafc]"
                          showUploadButton={false}
                        />
                      </div>
                      <div className="mt-1">
                        <span className="text-[7px] font-bold text-sky-600 block uppercase font-mono leading-none">{p.localName}</span>
                        <h5 className="text-[10px] font-serif font-bold text-slate-850 truncate block mt-0.5 leading-tight">{p.name}</h5>
                      </div>
                      <div className="flex justify-between items-center pt-1 border-t border-slate-50 mt-1">
                        <strong className="text-[10px] font-extrabold text-[#03045E]">₹{p.price}</strong>
                        <span className="text-[8px] text-sky-500 font-mono">View →</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sticky Bottom Add to Cart Call to Action */}
          <div className="p-4 border-t border-slate-100 bg-white z-20 flex flex-col gap-2 shadow-inner">
            <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-sans">
              <Truck className="h-3.5 w-3.5 text-sky-600 shrink-0" />
              <span>Guaranteed catch home delivery by <strong>Tomorrow 7:30 AM</strong></span>
            </div>

            <button
              id="details-add-cart"
              onClick={handleAddClick}
              className={`w-full py-3 rounded-xl cursor-pointer text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md ${
                isAddedFeedback
                  ? 'bg-[#52B788] text-white shadow-emerald-50'
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/20'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>{isAddedFeedback ? 'Sourced & Packed!' : 'Add Sourced Pack to Cart'}</span>
            </button>
          </div>

        </motion.div>
      </motion.div>

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
    </AnimatePresence>
  );
}
