'use client';

import { useState, useEffect } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = Math.ceil(target / 50);
    const stepValue = target / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(stepValue * currentStep), target));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-black glow-text">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function PerformanceGrid() {
  const { data } = usePortfolioData();

  if (!data) return null;

  const stats = data.stats;

  return (
    <section id="stats" className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The <span className="bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Performance</span> Grid
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Data doesn't lie. Here's what we've achieved for our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                stat.highlight
                  ? 'bg-linear-to-br from-amber-900/30 to-amber-950/20 border-amber-400/50 hover:border-amber-400'
                  : 'bg-linear-to-br from-slate-800/30 to-slate-900/20 border-slate-700/50 hover:border-cyan-400/50'
              }`}
            >
              {/* Decorative glow */}
              {stat.highlight && (
                <div className="absolute inset-0 bg-amber-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl"></div>
              )}

              <div className="relative z-10">
                <div className="text-5xl mb-4">{stat.icon}</div>
                
                <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-3">
                  {stat.title}
                </h3>

                <div className={`mb-3 ${stat.highlight ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                  {stat.isMillion ? (
                    <>
                      $<AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>

                <p className="text-slate-500 text-sm font-medium">
                  {stat.description}
                </p>
              </div>

              {/* Active indicator */}
              {stat.highlight && (
                <div className="absolute top-3 right-3 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Key Insight Box */}
        <div className="bg-linear-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-400/30 rounded-2xl p-8 text-center">
          <p className="text-slate-300 mb-3 font-semibold">🚀 THE MAHIR DIFFERENCE</p>
          <p className="text-white text-xl font-bold">
            We don't just run ads. We engineer <span className="text-amber-400">revenue systems</span> that scale.
          </p>
        </div>
      </div>
    </section>
  );
}
