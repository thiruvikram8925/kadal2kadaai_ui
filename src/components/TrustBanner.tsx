/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Users, ShieldAlert, Navigation2, Ship } from 'lucide-react';

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

export default function TrustBanner() {
  const stats = [
    {
      id: 'stat-customers',
      icon: <Users className="h-6 w-6 text-sky-200" />,
      target: 10000,
      suffix: '+',
      label: 'Happy Customers'
    },
    {
      id: 'stat-fishermen',
      icon: <Ship className="h-6 w-6 text-sky-200" />,
      target: 500,
      suffix: '+',
      label: 'Fishermen Partners'
    },
    {
      id: 'stat-locations',
      icon: <Navigation2 className="h-6 w-6 text-sky-200" />,
      target: 50,
      suffix: '+',
      label: 'Coastal Locations'
    },
    {
      id: 'stat-deliveries',
      icon: <ShieldAlert className="h-6 w-6 text-sky-200" />,
      target: 100,
      suffix: '%',
      label: 'Fresh Deliveries Daily'
    }
  ];

  return (
    <section id="trust-banner" className="relative z-30 -mt-1 w-full bg-[#03045E] py-8 border-y border-white/5 shadow-lg text-white">
      <div id="trust-stats-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 text-center">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              id={stat.id}
              className="flex flex-col md:flex-row items-center justify-center gap-4 group p-4 hover:bg-white/5 rounded-2xl md:rounded-none transition-all duration-300 md:border-r border-white/10 last:border-r-0"
            >
              <div className="p-2.5 bg-white/5 rounded-xl group-hover:scale-110 transition-transform shadow-inner flex items-center justify-center text-[#00B4D8]">
                {stat.icon}
              </div>
              <div className="md:text-left flex flex-col justify-center">
                <p className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#00B4D8] mb-0.5">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] sm:text-xs text-sky-100/70 uppercase tracking-wider font-semibold font-sans">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
