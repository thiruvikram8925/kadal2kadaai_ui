/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Compass, Waves, Users, Ship, ShieldAlert } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * target), target);
      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span className="font-serif">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

interface HeroProps {
  onShopClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onShopClick, onExploreClick }: HeroProps) {
  // Stagger wrapper variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 18
      }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[70vh] pt-16 pb-24 md:pt-20 md:pb-32 flex items-center justify-center overflow-hidden bg-slate-900 select-none">
      
      {/* Background Image with slow Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1593693397690-362cb9966688?w=1600&auto=format&fit=crop&q=80')`,
            backgroundPosition: '50% 55%'
          }}
        />
        {/* Layered Gradient Overlay: Dark navy bottom to dark transparent top with requested background tint */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#03045E]/95 via-[#03045E]/40 to-transparent z-10 opacity-80"
          style={{ backgroundColor: '#66b6c1' }}
        />
      </div>

      {/* Floating waves/bubbles CSS particles in background */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden odd:opacity-20 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 40}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${Math.random() * 8 + 6}s`
            }}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-4 sm:mt-6">
        
        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/20 text-sky-300 text-xs font-semibold mb-6 tracking-widest uppercase font-mono"
        >
          <Waves className="h-3.5 w-3.5 animate-bounce" />
          <span>Coastal Sourced · Tamil Nadu Direct</span>
        </motion.div>

        {/* Dynamic, Cinematic Staggered text block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[81px] font-bold tracking-tight leading-[1.1]"
          >
            From Ocean Waves <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-aqua-200 to-sky-400">
              to Your Kitchen Flames
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto py-2"
          >
            {/* First 3 Stats Sections on the Left */}
            <div className="flex flex-row md:flex-col flex-wrap gap-5 sm:gap-6 shrink-0 justify-center w-full md:w-auto md:border-r border-white/10 md:pr-6 md:text-left">
              {/* Stat 1: Happy Customers */}
              <div
                id="stat-customers"
                className="flex items-center gap-3 justify-start"
              >
                <div className="p-2 bg-sky-500/10 rounded-xl text-[#00B4D8] shrink-0 border border-sky-400/20">
                  <Users className="h-5 w-5 text-sky-200" />
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-serif font-bold text-[#00B4D8] mb-0 leading-none">
                    <AnimatedCounter target={10000} suffix="+" />
                  </p>
                  <p className="text-[10px] sm:text-xs text-sky-100/70 uppercase tracking-wider font-semibold font-sans mt-0.5 leading-none">
                    Happy Customers
                  </p>
                </div>
              </div>

              {/* Stat 2: Fishermen Partners */}
              <div
                id="stat-fishermen"
                className="flex items-center gap-3 justify-start"
              >
                <div className="p-2 bg-sky-500/10 rounded-xl text-[#00B4D8] shrink-0 border border-sky-400/20">
                  <Ship className="h-5 w-5 text-sky-200" />
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-serif font-bold text-[#00B4D8] mb-0 leading-none">
                    <AnimatedCounter target={500} suffix="+" />
                  </p>
                  <p className="text-[10px] sm:text-xs text-sky-100/70 uppercase tracking-wider font-semibold font-sans mt-0.5 leading-none">
                    Fishermen Partners
                  </p>
                </div>
              </div>

              {/* Stat 3: Fresh Deliveries Daily */}
              <div
                id="stat-deliveries"
                className="flex items-center gap-3 justify-start"
              >
                <div className="p-2 bg-sky-500/10 rounded-xl text-[#00B4D8] shrink-0 border border-sky-400/20">
                  <ShieldAlert className="h-5 w-5 text-sky-200" />
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-serif font-bold text-[#00B4D8] mb-0 leading-none">
                    <AnimatedCounter target={100} suffix="%" />
                  </p>
                  <p className="text-[10px] sm:text-xs text-sky-100/70 uppercase tracking-wider font-semibold font-sans mt-0.5 leading-none">
                    Fresh Deliveries Daily
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraph Description */}
            <p className="max-w-xl text-center md:text-left text-sm sm:text-base md:text-[21px] text-sky-100/90 leading-relaxed font-sans font-light">
              Skip crowded fish markets. Order premium fresh seafood sourced directly from trusted fishermen and delivered to your doorstep within hours of the morning catch.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              id="hero-shop-btn"
              onClick={onShopClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#0077B6] hover:bg-[#0096C7] text-white font-bold text-sm rounded-2xl shadow-xl shadow-sky-950/40 hover:shadow-sky-500/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-[#0096C7]"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <span>Shop Today's Catch</span>
            </button>
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 active:bg-white/15 text-white font-bold text-sm rounded-2xl border border-white/20 hover:border-white/30 backdrop-blur-sm transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Compass className="h-4.5 w-4.5 text-sky-300" />
              <span>Explore Marketplace</span>
            </button>
          </motion.div>
        </motion.div>
        
        {/* Trust bullet features (bottom hero accent) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-10 pt-8 border-t border-white/10 text-xs tracking-wide text-sky-200/70 font-mono font-medium"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> CHEMICAL-FREE
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> COLD CHAIN TRACKED
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> HYGIENICALLY CUT
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> ORDER BEFORE 7 AM
          </div>
        </motion.div>

      </div>

      {/* Premium organic layered wave gradient transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none select-none overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-12 sm:h-20 md:h-24 lg:h-32"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Multi-stop gradient blending from deep ocean blue (#03045E) via medium blue (#0077B6) and light blue (#90E0EF) to next section background (#F8FBFD) */}
            <linearGradient id="hero-transition-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#03045E" stopOpacity="0" />
              <stop offset="25%" stopColor="#03045E" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#0077B6" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#90E0EF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F8FBFD" stopOpacity="1.0" />
            </linearGradient>
            
            {/* Back wave gradient for soft depth */}
            <linearGradient id="hero-back-wave-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0077B6" stopOpacity="0" />
              <stop offset="50%" stopColor="#0077B6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#90E0EF" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Layer 1: Softer background wave for depth */}
          <path
            d="M0,90 C360,110 720,75 1080,90 C1260,98 1380,105 1440,105 L1440,120 L0,120 Z"
            fill="url(#hero-back-wave-grad)"
            className="opacity-40"
          />

          {/* Layer 2: Main organic flowing foreground wave */}
          <path
            d="M0,60 C240,90 480,45 720,75 C960,105 1200,75 1440,60 L1440,120 L0,120 Z"
            fill="url(#hero-transition-grad)"
          />
        </svg>
      </div>

    </section>
  );
}
