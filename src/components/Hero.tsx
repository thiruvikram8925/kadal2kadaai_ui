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
    <section id="home" className="relative w-full min-h-[70vh] py-16 md:py-20 flex items-center justify-center overflow-hidden bg-slate-900 select-none">
      
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

    </section>
  );
}
