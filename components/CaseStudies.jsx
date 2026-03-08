'use client';

import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function CaseStudies() {
  const { data } = usePortfolioData();

  if (!data) return null;

  const cases = data.caseStudies;

  return (
    <section id="cases" className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Case Study <span className="bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real results from real brands. Here's the proof.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Background gradient */}
              <div className={`absolute -inset-0.5 bg-linear-to-r ${caseStudy.color} rounded-3xl opacity-10 group-hover:opacity-20 transition blur-xl`}></div>

              {/* Card */}
              <div className="relative bg-linear-to-br from-slate-900/90 to-gray-950/90 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition hover:shadow-2xl">
                {/* Award badge */}
                <div className="absolute -top-4 right-8 bg-linear-to-r from-amber-400 to-yellow-400 text-gray-950 px-4 py-2 rounded-full font-bold text-sm">
                  {caseStudy.award}
                </div>

                {/* Icon & Title */}
                <div className="mb-6 pt-4">
                  <div className="text-6xl mb-4">{caseStudy.icon}</div>
                  <h3 className="text-3xl font-black text-white">
                    {caseStudy.title}
                  </h3>
                </div>

                {/* Challenge Section */}
                <div className="mb-6 pb-6 border-b border-slate-700">
                  <p className="text-slate-500 font-semibold text-sm uppercase mb-2 tracking-wide">Challenge</p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="mb-8 pb-8 border-b border-slate-700">
                  <p className="text-slate-500 font-semibold text-sm uppercase mb-2 tracking-wide">Solution</p>
                  <p className="text-slate-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Results Grid */}
                <div>
                  <p className="text-slate-500 font-semibold text-sm uppercase mb-4 tracking-wide">Results</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.results.map((result, i) => (
                      <div key={i} className={`bg-linear-to-br ${caseStudy.color} bg-clip-text`}>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-yellow-400">
                          {result.metric}
                        </p>
                        <p className="text-slate-400 text-sm mt-1">
                          {result.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof CTA */}
        <div className="bg-linear-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-400/30 rounded-2xl p-8 text-center">
          <p className="text-slate-400 text-lg mb-4">Ready to become the next success story?</p>
          <p className="text-white text-2xl font-bold">
            <span className="text-amber-400">18+ brands</span> have trusted us with their growth
          </p>
        </div>
      </div>
    </section>
  );
}
