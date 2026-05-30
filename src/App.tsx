/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
// Today's Purchases Section is included, but TrustBanner import is removed.
import CategorySection from './components/CategorySection';
import TopSellingSection from './components/TopSellingSection';
import TodayPurchaseSection from './components/TodayPurchaseSection';
import CatchProductGrid from './components/CatchProductGrid';
import WhyChooseUs from './components/WhyChooseUs';
import ProductDetailModal from './components/ProductDetailModal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Truck, Sparkles, Receipt, CheckCircle, Navigation2, CreditCard } from 'lucide-react';

export default function App() {
  
  // Basket & Wishlist core states
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  // Navigation & Scrolling trackers & Pages ('home' | 'market')
  const [currentPage, setCurrentPage] = useState<'home' | 'market'>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  // Modals overlay controls
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Simulated Checkout Wizard States
  const [checkoutStep, setCheckoutStep] = useState<null | 'shipping' | 'payment' | 'completed'>(null);
  const [checkoutSum, setCheckoutSum] = useState(0);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  
  // Form fields
  const [shippingName, setShippingName] = useState('Thiruvikram');
  const [shippingPhone, setShippingPhone] = useState('9876543210');
  const [shippingAddress, setShippingAddress] = useState('No. 45, Beach Road, Santhome');
  const [shippingPin, setShippingPin] = useState('600004');
  const [deliveryHour, setDeliveryHour] = useState('early-dawn'); // early-dawn: 6AM - 8AM

  // Load Initial Storage Cache (Optional / Non-blocking)
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('k2k_cart');
      const savedWish = localStorage.getItem('k2k_wishlist');
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedWish) setWishlist(JSON.parse(savedWish));
    } catch {
      // Graceful local cache fallback
    }
  }, []);

  // Save changes triggers
  const saveCartCache = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem('k2k_cart', JSON.stringify(newCart));
    } catch {}
  };

  const saveWishlistCache = (newList: string[]) => {
    setWishlist(newList);
    try {
      localStorage.setItem('k2k_wishlist', JSON.stringify(newList));
    } catch {}
  };

  // State mutator: Add item list
  const handleAddToCart = (product: Product, weight: string, processing: string, qty: number) => {
    // Unique key: product.id + weight + processing
    const id = `${product.id}-${weight}-${processing.replace(/\s+/g, '')}`;
    
    // Calculate dynamic adjusted per item unit price
    const multiplier = product.weightMultipliers[weight] || 1;
    const adjustedPrice = Math.round(product.price * multiplier);

    const matchIdx = cart.findIndex(item => item.id === id);
    if (matchIdx > -1) {
      const updated = [...cart];
      updated[matchIdx].quantity += qty;
      saveCartCache(updated);
    } else {
      const newItem: CartItem = {
        id,
        product,
        quantity: qty,
        selectedWeight: weight,
        selectedProcessing: processing,
        pricePerUnit: adjustedPrice
      };
      saveCartCache([...cart, newItem]);
    }
  };

  const handleUpdateCartQty = (itemId: string, newQty: number) => {
    const updated = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQty };
      }
      return item;
    });
    saveCartCache(updated);
  };

  const handleRemoveFromCart = (itemId: string) => {
    const filtered = cart.filter(item => item.id !== itemId);
    saveCartCache(filtered);
  };

  // State mutator: Toggle Saved items list
  const handleToggleWishlist = (productId: string) => {
    let updated: string[];
    if (wishlist.includes(productId)) {
      updated = wishlist.filter(id => id !== productId);
    } else {
      updated = [...wishlist, productId];
    }
    saveWishlistCache(updated);
  };

  // Navigate & Switch page + Smooth scroll to anchors
  const handleNavigate = (sectionId: string) => {
    // Determine which page content this section belongs to
    const isMarketSection = sectionId === 'marketplace-hub' || sectionId === 'fresh-catch';
    const targetPage = isMarketSection ? 'market' : 'home';

    setCurrentPage(targetPage);
    setActiveSection(sectionId);
    
    // Soft focus categories if applicable
    if (sectionId === 'categories') {
      setSelectedCategory('all');
    }

    // Smooth scroll with a slight delay to allow the page rendering/transition to start
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  // Scroll active section tracking (Intersection observer soft prototype)
  useEffect(() => {
    const handleScrollTracking = () => {
      // Only watch elements rendered on the active page to keep highlighting precise!
      const sections = currentPage === 'home'
        ? ['home', 'categories', 'why-choose-us', 'reviews']
        : ['fresh-catch'];

      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollTracking);
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, [currentPage]);

  // Category card trigger navigation wrapper
  const handleSelectCategoryFromCard = (categoryId: string) => {
    setSelectedCategory(categoryId);
    handleNavigate('fresh-catch');
  };

  // Launch simulated checkouts
  const handleLaunchCheckout = (subtotal: number, discount: number) => {
    setIsCartOpen(false);
    setCheckoutSum(subtotal);
    setCheckoutDiscount(discount);
    setCheckoutStep('shipping');
  };

  // Complete Simulated Orders
  const handleCompleteOrder = () => {
    setCheckoutStep('completed');
    // Flush active cart items on purchase complete!
    saveCartCache([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#0077B6]/10 leading-normal select-none">
      
      {/* Sticky Navigation */}
      <Navigation
        cart={cart}
        wishlist={wishlist}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSearch={(term) => {
          setGlobalSearchTerm(term);
          if (term.trim() && currentPage !== 'market') {
            handleNavigate('fresh-catch'); // Send user to searchable grid upon typing!
          }
        }}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          setActiveSection(page === 'home' ? 'home' : 'fresh-catch');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Pages Switched by AnimatePresence */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="pt-0"
          >
            {/* Hero Cinematic Section */}
            <Hero
              onShopClick={() => handleNavigate('fresh-catch')}
              onExploreClick={() => handleNavigate('marketplace-hub')}
            />

            {/* Top Selling Seafood */}
            <TopSellingSection
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={handleAddToCart}
              onSelectProduct={setSelectedProduct}
            />

            {/* Today's Purchases */}
            <TodayPurchaseSection
              onAddToCart={handleAddToCart}
              onSelectProduct={setSelectedProduct}
            />

            {/* Why Thousands families trust us */}
            <WhyChooseUs />

            {/* Community voice reviews testimonials carousel */}
            <Testimonials />
          </motion.div>
        ) : (
          <motion.div
            key="market-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="pt-24 pb-12"
          >
            {/* Today's Fresh Sourced Catch grid roster with filters */}
            <CatchProductGrid
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={handleAddToCart}
              onSelectProduct={setSelectedProduct}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchTerm={globalSearchTerm}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solid Structured Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* --- DRAWERS & MODALS --- */}

      {/* Shopping Cart Drawer right slide-in */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onLaunchCheckout={handleLaunchCheckout}
        onShopNow={() => handleNavigate('fresh-catch')}
      />

      {/* WishlistDrawer right slide-in */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onSelectProduct={setSelectedProduct}
        onAddToCart={handleAddToCart}
        onShopNow={() => handleNavigate('fresh-catch')}
      />

      {/* Product Information Detail overlay modal pops-up */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onSelectProduct={setSelectedProduct}
      />

      {/* Simulated 3-Step Checkout Wizard Modal Overlay */}
      <AnimatePresence>
        {checkoutStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setCheckoutStep(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-100 flex flex-col relative my-4"
            >
              {/* Header block */}
              <div className="bg-[#03045E] p-6 text-white flex flex-col items-center justify-center text-center relative">
                <button
                  id="checkout-close-btn"
                  onClick={() => setCheckoutStep(null)}
                  className="absolute top-4 right-4 p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
                <div className="p-3 bg-[#00B4D8] text-white rounded-2xl mb-3 shadow-md">
                  <ShieldCheck className="h-6 w-6 animate-pulse" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">Direct Sea Sourced Checkout</h3>
                <p className="text-xs text-sky-200 mt-1 font-sans">Step {checkoutStep === 'shipping' ? '1 of 2: Delivery information' : checkoutStep === 'payment' ? '2 of 2: Cold Gateway pay' : 'Complete! order trace active'}</p>
              </div>

              {/* Step 1: Shipping Form fields info */}
              {checkoutStep === 'shipping' && (
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">Recipient Name</label>
                      <input
                        type="text"
                        value={shippingName}
                        onChange={(e) => setShippingName(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-gray-200 focus:outline-[#0077B6] rounded-xl text-xs bg-gray-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">Mobile Contact</label>
                      <input
                        type="tel"
                        value={shippingPhone}
                        onChange={(e) => setShippingPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-gray-200 focus:outline-[#0077B6] rounded-xl text-xs bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">Street Address (Chennai Coverage Area)</label>
                    <input
                      type="text"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 focus:outline-[#0077B6] rounded-xl text-xs bg-gray-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">Postal Delivery PIN</label>
                      <input
                        type="text"
                        value={shippingPIN => shippingPin}
                        onChange={(e) => setShippingPin(e.target.value)}
                        placeholder="600004"
                        className="w-full px-3.5 py-2.5 border border-gray-200 focus:outline-[#0077B6] rounded-xl text-xs bg-gray-50/50 text-slate-800 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">Pre-allocated Delivery Slot</label>
                      <select
                        id="checkout-delivery-slot"
                        value={deliveryHour}
                        onChange={(e) => setDeliveryHour(e.target.value)}
                        className="w-full bg-white px-3 py-2.5 border border-gray-200 rounded-xl text-xs focus:outline-none"
                      >
                        <option value="early-dawn">Dawn Fast (6:00 AM - 8:00 AM)</option>
                        <option value="regular">Regular Morning (8:00 AM - 12:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">Cart Total Due:</span>
                      <strong className="text-slate-800 text-sm font-extrabold font-serif">₹{checkoutSum}</strong>
                    </div>

                    <button
                      id="checkout-step1-next"
                      onClick={() => setCheckoutStep('payment')}
                      className="px-6 py-3 bg-[#0077B6] hover:bg-[#0096C7] text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Proceed to Payment</span>
                      <Truck className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment options Selection */}
              {checkoutStep === 'payment' && (
                <div className="p-6 sm:p-8 space-y-4">
                  
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-emerald-600 shrink-0" />
                    <p className="text-[11px] text-emerald-800 leading-normal font-sans font-semibold">
                      Your morning catch is already soft-reserved in the harbor freezer crates. Sourced direct guaranteed!
                    </p>
                  </div>

                  {/* Payment Mode options list */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Choose Payment Channel</label>
                    
                    {/* Simulated Cash on Delivery */}
                    <div className="p-4 border border-gray-200/80 bg-slate-50 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input type="radio" defaultChecked className="accent-[#0077B6]" id="pay-cod-radio" />
                        <div>
                          <strong className="text-xs text-slate-800 font-bold block leading-snug">Secure Cash / Pay on Delivery (Recommended)</strong>
                          <span className="text-[10px] text-slate-400 font-medium">Clear cash / UPI at your morning doorstep.</span>
                        </div>
                      </div>
                      <Receipt className="h-5 w-5 text-slate-400" />
                    </div>

                    {/* Simulated dummy UPI Scanner credit */}
                    <div className="p-4 border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-center p-3 text-slate-400 border border-slate-200 font-mono text-[9px] select-none pointer-events-none">
                        [SIMULATED QR CODE DOCK]
                      </div>
                      <span className="text-[9px] text-slate-400 font-mono mt-2 italic text-center leading-normal">
                        Pre-pay early using any UPI scanner app directly if wanted. UPI ID: k2kseafood@icici
                      </span>
                    </div>

                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <button
                      id="checkout-payment-back"
                      onClick={() => setCheckoutStep('shipping')}
                      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-slate-600 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      Go Back
                    </button>

                    <button
                      id="checkout-payment-complete"
                      onClick={handleCompleteOrder}
                      className="px-6 py-3 bg-[#03045E] hover:bg-black text-white rounded-xl text-xs uppercase tracking-widest font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Place Sourced Order</span>
                    </button>
                  </div>

                </div>
              )}

              {/* Step 3: purchase complete! order dispatch loading */}
              {checkoutStep === 'completed' && (
                <div className="p-6 sm:p-8 text-center space-y-6">
                  
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="h-8 w-8 animate-bounce" />
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-bold text-slate-900 leading-tight">Order Placed Successfully!</h4>
                    <p className="text-xs text-sky-600 font-bold block font-mono uppercase mt-1 tracking-widest">Order ID: K2K-{Math.floor(Math.random() * 89999 + 10000)}</p>
                    
                    <p className="text-xs text-slate-500 mt-3 max-w-sm mx-auto leading-relaxed font-sans font-light">
                      Thank you, <strong>{shippingName}</strong>. Your morning catch reservation is confirmed! The fisherman network has been allocated to lock down fresh items of your choice.
                    </p>
                  </div>

                  {/* Sourced Timeline metadata summary table */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-left space-y-2.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Recipient:</span>
                      <strong className="text-slate-800">{shippingName} ({shippingPhone})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Address Mapped:</span>
                      <strong className="text-slate-800 text-right truncate block max-w-[200px]">{shippingAddress}, PIN {shippingPin}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cold Delivery Delivery:</span>
                      <strong className="text-emerald-600 font-bold uppercase">To-Morning 7:30 AM</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      id="checkout-completed-close"
                      onClick={() => setCheckoutStep(null)}
                      className="w-full bg-[#0077B6] hover:bg-[#0096C7] text-white text-xs font-bold tracking-widest uppercase py-3.5 rounded-xl cursor-pointer shadow-sm hover:shadow-sky-100 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Navigation2 className="h-4 w-4" />
                      <span>Back to Catch Galleries</span>
                    </button>
                  </div>

                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
