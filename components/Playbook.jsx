'use client';

import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function Playbook() {
  const { data } = usePortfolioData();

  if (!data) return null;

  const pillars = data.pillars;

  return (
    <section id="playbook" className="bg-linear-to-b from-gray-950 to-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My <span className="bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Playbook</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Four strategic pillars that power every campaign and guarantee results.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition group">
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${pillar.color} rounded-t-2xl`}></div>

                {/* Icon */}
                <div className="text-6xl mb-6">{pillar.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Highlight badge */}
                <div className={`inline-block bg-linear-to-r ${pillar.color} bg-clip-text text-transparent font-bold text-sm tracking-wider`}>
                  ✨ {pillar.highlight}
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Breakdown Box */}
        <div className="bg-linear-to-br from-gray-900/80 to-slate-950/80 border border-amber-400/30 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Why This Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">→</span>
                  <span className="text-slate-300"><strong>Brand Storytelling</strong> reduces customer acquisition cost while building loyalty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">→</span>
                  <span className="text-slate-300"><strong>Data Alchemy</strong> ensures every dollar is tracked and optimized</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">→</span>
                  <span className="text-slate-300"><strong>Agile Innovation</strong> keeps campaigns fresh and competitors behind</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">The Result</h3>
              <div className="space-y-4">
                <div className="bg-slate-950/50 border border-cyan-400/30 rounded-lg p-4">
                  <p className="text-amber-400 font-bold text-2xl">6.4x ROAS</p>
                  <p className="text-slate-400 text-sm">Average return on ad spend</p>
                </div>
                <div className="bg-slate-950/50 border border-amber-400/30 rounded-lg p-4">
                  <p className="text-amber-400 font-bold text-2xl">38% Cost Reduction</p>
                  <p className="text-slate-400 text-sm">Through intelligent budget rules</p>
                </div>
                <div className="bg-slate-950/50 border border-amber-400/30 rounded-lg p-4">
                  <p className="text-cyan-400 font-bold text-2xl">2x Engagement</p>
                  <p className="text-slate-400 text-sm">With consistent creative testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
