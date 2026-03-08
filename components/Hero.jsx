'use client';

import { useEffect, useState } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const { data } = usePortfolioData();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !data) return null;

  const personal = data.personal;
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-gray-950 pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Back glow effect */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
            {personal.name.split(' ').slice(0, -1).join(' ')}
            <br />
            <span className="bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">{personal.name.split(' ').pop()}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-6 max-w-3xl">
            {personal.titles.map((title, idx) => (
              <span key={idx}>
                <span className={idx === 0 ? "text-amber-400" : idx === 1 ? "text-cyan-400" : "text-amber-400"} style={{fontWeight: 600}}>
                  {title}
                </span>
                {idx < personal.titles.length - 1 && " | "}
              </span>
            ))}
          </p>

          {/* Value Statement */}
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-4xl leading-relaxed border-l-4 border-amber-400 pl-6">
            {personal.valueStatement}
            <span className="block text-amber-300 font-semibold mt-2">Managing <span className="text-2xl">${personal.budgetManaged}M+</span> in lifetime ad budgets.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection('form')}
              className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
            >
              Scale Your Brand Now →
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg text-lg transition"
            >
              View Performance Data
            </button>
          </div>

          {/* Trust Signal */}
          <div className="flex flex-wrap gap-8 text-slate-400 text-sm border-t border-slate-800 pt-8">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl">✓</span>
              <span>512K+ Leads Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 text-2xl">✓</span>
              <span>18+ Brands Scaled</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl">✓</span>
              <span>$18.5M+ Ad Budget Managed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
