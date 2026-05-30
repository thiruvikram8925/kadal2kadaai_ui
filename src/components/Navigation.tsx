/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Heart, Search, User, Anchor, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, Product } from '../types';
import Logo from './Logo';

interface NavigationProps {
  cart: CartItem[];
  wishlist: string[];
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSearch: (term: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currentPage: 'home' | 'market';
  onPageChange: (page: 'home' | 'market') => void;
}

export default function Navigation({
  cart,
  wishlist,
  onOpenCart,
  onOpenWishlist,
  onSearch,
  activeSection,
  onNavigate,
  currentPage,
  onPageChange
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const isNavbarWhite = isScrolled || currentPage === 'market';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isNavbarWhite
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div id="nav-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => {
              onPageChange('home');
              onNavigate('home');
            }}
            className="flex items-center gap-3 sm:gap-4 group cursor-pointer text-left"
          >
            <Logo className={`${isNavbarWhite ? 'h-20 w-20' : 'h-24 w-24 sm:h-28 sm:w-28'} shrink-0`} />
            <div className="flex flex-col justify-center font-sans">
              <span className={`font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight block uppercase ${
                isNavbarWhite ? 'text-slate-900' : 'text-white'
              }`}>
                Kadal 2 Kadaai
              </span>
              <span className={`text-[9px] sm:text-[10px] tracking-widest uppercase block font-bold ${
                isNavbarWhite ? 'text-sky-700' : 'text-sky-300'
              }`}>
                Sea to Kitchen
              </span>
            </div>
          </button>

          {/* Center: Dual-Level Page Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Main Page Tabs */}
            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl">
              <button
                id="page-tab-home"
                onClick={() => {
                  onPageChange('home');
                  onNavigate('home');
                }}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentPage === 'home'
                    ? isNavbarWhite ? 'text-white font-bold' : 'text-[#03045E] font-bold'
                    : isNavbarWhite ? 'text-gray-500 hover:text-[#0077B6]' : 'text-sky-100 hover:text-white'
                }`}
              >
                {currentPage === 'home' && (
                  <motion.div
                    layoutId="desktopPageBG"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      isNavbarWhite ? 'bg-[#0077B6]' : 'bg-white shadow-md'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ color: isNavbarWhite ? (currentPage === 'home' ? '#ffffff' : '#0c0c0c') : undefined }}>Home Page</span>
              </button>

              <button
                id="page-tab-market"
                onClick={() => {
                  onPageChange('market');
                  onNavigate('marketplace-hub');
                }}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentPage === 'market'
                    ? isNavbarWhite ? 'text-white font-bold' : 'text-[#03045E] font-bold'
                    : isNavbarWhite ? 'text-gray-500 hover:text-[#0077B6]' : 'text-sky-100 hover:text-white'
                }`}
              >
                {currentPage === 'market' && (
                  <motion.div
                    layoutId="desktopPageBG"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      isNavbarWhite ? 'bg-[#0077B6]' : 'bg-white shadow-md'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ color: isNavbarWhite ? (currentPage === 'market' ? '#ffffff' : '#0a0b0b') : undefined }}>Marketplace</span>
              </button>
            </div>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Expanded / Collapsed Search */}
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <AnimatePresence>
                {isSearchExpanded && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Search fresh fish..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      onSearch(e.target.value);
                    }}
                    className={`h-9 px-3 text-xs rounded-lg border focus:outline-none focus:ring-1 focus:ring-sky-500 mr-2 ${
                      isNavbarWhite ? 'bg-gray-50 border-gray-200 text-gray-800' : 'bg-white/15 border-white/20 text-white placeholder-sky-200'
                    }`}
                  />
                )}
              </AnimatePresence>
              <button
                id="search-toggle-btn"
                type="button"
                onClick={() => {
                  if (isSearchExpanded && searchTerm) {
                    onSearch('');
                    setSearchTerm('');
                  }
                  setIsSearchExpanded(!isSearchExpanded);
                }}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isNavbarWhite ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                <Search className="h-5 w-5" style={{ color: isNavbarWhite ? '#050505' : undefined }} />
              </button>
            </form>

            {/* Wishlist Button */}
            <button
              id="wishlist-trigger-btn"
              onClick={onOpenWishlist}
              className={`p-2 rounded-lg relative transition-colors cursor-pointer ${
                isNavbarWhite ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <Heart className={`h-5 w-5 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} style={{ color: isNavbarWhite ? '#080707' : undefined }} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              id="cart-trigger-btn"
              onClick={onOpenCart}
              className={`p-2 rounded-lg relative transition-colors cursor-pointer ${
                isNavbarWhite ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingBag className="h-5 w-5" style={{ color: isNavbarWhite ? '#030303' : undefined }} />
              {totalCartItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#0077B6] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* User Profile / Login */}
            <button
              id="auth-modal-btn"
              onClick={() => setIsLoginModalOpen(true)}
              className={`hidden sm:flex p-2 rounded-lg items-center gap-1.5 transition-colors cursor-pointer text-xs font-semibold ${
                isNavbarWhite
                  ? 'text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm px-3 h-9'
                  : 'text-white hover:bg-white/10 border border-white/20 px-3 h-9 bg-white/5'
              }`}
              style={{ color: isNavbarWhite ? '#100f0f' : undefined }}
            >
              <User className="h-4 w-4" style={{ color: isNavbarWhite ? '#100f0f' : undefined }} />
              <span>{isLoggedIn ? 'Account' : 'Login'}</span>
            </button>

            {/* Hamburger (Mobile) */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg lg:hidden transition-colors cursor-pointer ${
                isNavbarWhite ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-4/5 max-w-sm h-full bg-[#03045E] text-white flex flex-col justify-between p-6 shadow-2xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-sky-900/40">
                  <div className="flex items-center">
                    <Logo className="h-28 w-28 shrink-0 mx-auto" />
                  </div>
                  <button
                    id="mobile-drawer-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg bg-sky-900/30 text-sky-200 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6 overflow-y-auto max-h-[60vh] pr-1">
                  
                  {/* Home Page Link */}
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        onPageChange('home');
                        onNavigate('home');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left text-base font-bold pb-2 border-b border-sky-900/40 flex items-center justify-between ${
                        currentPage === 'home' ? 'text-teal-300' : 'text-sky-200'
                      }`}
                    >
                      <span className="font-serif">⚓ Home Page</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Marketplace Page Link */}
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        onPageChange('market');
                        onNavigate('marketplace-hub');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left text-base font-bold pb-2 border-b border-sky-900/40 flex items-center justify-between ${
                        currentPage === 'market' ? 'text-teal-300' : 'text-sky-200'
                      }`}
                    >
                      <span className="font-serif">🛒 Marketplace</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                </nav>
              </div>

              <div className="pb-8 pt-4 border-t border-sky-900/40 flex flex-col gap-3">
                <button
                  id="mobile-auth-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0077B6] hover:bg-[#0096C7] text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-sky-950/40 transition-colors text-sm"
                >
                  <User className="h-4 w-4" />
                  <span>{isLoggedIn ? 'Access Account' : 'Sign In Now'}</span>
                </button>
                <p className="text-center text-[10px] text-sky-300/60 font-sans">
                  Direct Daily Catch Premium Logistics
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login / Register Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative border border-gray-100"
            >
              <div className="bg-[#03045E] p-6 text-white flex flex-col items-center relative">
                <button
                  id="login-close-btn"
                  onClick={() => setIsLoginModalOpen(false)}
                   className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="p-3 bg-[#0077B6] text-white rounded-2xl mb-3 shadow-md">
                  <Anchor className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-center">Join Kadal 2 Kadaai</h3>
                <p className="text-xs text-sky-200 mt-1 text-center font-sans">Authentic coastal fresh seafood straight to your home</p>
              </div>

              <div className="p-6 sm:p-8">
                {isLoggedIn ? (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <h4 className="text-gray-800 font-semibold mb-1">Welcome Back!</h4>
                    <p className="text-xs text-[#1A1A2E] font-medium break-all mb-6">{userEmail || 'thiruvikram8925@gmail.com'}</p>
                    <div className="p-3 bg-sky-50 border border-sky-100 rounded-xl mb-6 text-xs text-sky-800 font-sans">
                      Delivery Pin: <strong>600001 (Chennai Central)</strong> - Express same-morning routing active.
                    </div>
                    <button
                      id="logout-btn"
                      onClick={() => {
                        setIsLoggedIn(false);
                        setUserEmail('');
                      }}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsLoggedIn(true);
                      setIsLoginModalOpen(false);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 bg-gray-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number (For fresh delivery updates)</label>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-3 border border-gray-200 rounded-xl bg-gray-50 text-sm text-gray-500 font-mono">+91</span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="9876543210"
                          className="flex-1 px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 bg-gray-50/50"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        id="submit-login-btn"
                        type="submit"
                        className="w-full bg-[#0077B6] hover:bg-sky-600 text-white font-bold text-sm py-3 rounded-xl transition-colors shadow-lg shadow-sky-100 cursor-pointer"
                      >
                        Verify & Login with OTP
                      </button>
                    </div>

                    <p className="text-[11px] text-gray-500 text-center leading-relaxed font-sans">
                      By proceeding, you authorize daily morning catch notifications via SMS / WhatsApp. No spam guaranteed!
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
