'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
            <span className="text-gray-950 font-bold text-lg">M</span>
          </div>
          <span className="text-white font-bold text-xl hidden sm:inline">Mahir</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-slate-300 hover:text-amber-400 transition">Home</button>
          <button onClick={() => scrollToSection('stats')} className="text-slate-300 hover:text-amber-400 transition">Stats</button>
          <button onClick={() => scrollToSection('playbook')} className="text-slate-300 hover:text-amber-400 transition">Playbook</button>
          <button onClick={() => scrollToSection('cases')} className="text-slate-300 hover:text-amber-400 transition">Cases</button>
          <button onClick={() => scrollToSection('form')} className="text-slate-300 hover:text-amber-400 transition">Connect</button>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link 
            href="/admin/login"
            className="p-2 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-amber-400"
            title="Admin Dashboard"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          <button 
            onClick={() => scrollToSection('form')}
            className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-4 sm:px-6 py-2 rounded-lg transition text-sm sm:text-base"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
