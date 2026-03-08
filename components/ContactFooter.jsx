'use client';

import { useState, useEffect } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function ContactFooter() {
  const [currentYear, setCurrentYear] = useState(2026);
  const { data } = usePortfolioData();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (!data) return null;

  const personal = data.personal;
  const techStack = data.techStack;

  return (
    <footer className="bg-gray-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-950 font-bold">M</span>
              </div>
              <span className="text-white font-bold text-xl">Mahir</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Architecting data-driven brands into revenue engines through strategic creativity and precision analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-amber-400 transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#stats" className="text-slate-400 hover:text-amber-400 transition text-sm">
                  Performance
                </a>
              </li>
              <li>
                <a href="#playbook" className="text-slate-400 hover:text-amber-400 transition text-sm">
                  Playbook
                </a>
              </li>
              <li>
                <a href="#cases" className="text-slate-400 hover:text-amber-400 transition text-sm">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✉</span>
                <a href={`mailto:${personal.email}`} className="text-slate-400 hover:text-amber-400 transition text-sm">
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">💬</span>
                <a href={`https://wa.me/${personal.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition text-sm">
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">🔗</span>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition text-sm">
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">💼</span>
                <a href={personal.fiverr} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition text-sm">
                  Fiverr Gigs
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-bold mb-6">Tech Arsenal</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase mb-2">Marketing</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.marketing.map(tech => (
                    <span key={tech} className="bg-slate-800/50 text-slate-300 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase mb-2">Development</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.development.map(tech => (
                    <span key={tech} className="bg-cyan-950/50 text-cyan-300 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Credentials */}
        <div className="bg-linear-to-r from-slate-900/30 to-slate-950/30 border border-slate-800 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-2">🎓 Education</h3>
              <p className="text-slate-300">
                <strong>{personal.education}</strong>
              </p>
              <p className="text-slate-400 text-sm">
                {personal.school}
              </p>
            </div>
            <div>
              <h3 className="text-amber-400 font-bold mb-2">✨ Specialization</h3>
              <p className="text-slate-300">
                Data-Driven Marketing | AI-Powered Automation | Healthcare & Gaming brands
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Mezbah Uddin Mahir. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/mezbah-uddin-mahir/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition">
              LinkedIn
            </a>
            <a href="https://www.fiverr.com/miraz_07" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition">
              Fiverr
            </a>
            <a href="mailto:mhmukit51@gmail.com" className="text-slate-400 hover:text-amber-400 transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
