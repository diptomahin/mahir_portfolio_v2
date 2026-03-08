'use client';

import { useState } from 'react';

export default function QualificationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyWebsite: '',
    primaryGoal: '',
    monthlyAdSpend: '',
    whatsappNumber: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          companyWebsite: '',
          primaryGoal: '',
          monthlyAdSpend: '',
          whatsappNumber: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="form" className="bg-linear-to-b from-gray-950 to-slate-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Qualify Your <span className="bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Growth</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Answer 5 quick questions and let's see if we're a fit for each other.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative">
          {/* Glow background */}
          <div className="absolute -inset-1 bg-linear-to-r from-amber-600/20 to-cyan-600/20 rounded-3xl blur-2xl opacity-50"></div>

          {/* Form Container */}
          <div className="relative bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                  />
                </div>

                {/* Company Website */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-3">
                    Company Website *
                  </label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                  />
                </div>

                {/* Primary Goal */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-3">
                    Primary Goal? *
                  </label>
                  <select
                    name="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition appearance-none"
                  >
                    <option value="" disabled>Select your primary goal</option>
                    <option value="scale-leads">Scale Leads</option>
                    <option value="increase-roas">Increase ROAS</option>
                    <option value="new-launch">New Brand Launch</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Monthly Ad Spend */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-3">
                    Current Monthly Ad Spend? *
                  </label>
                  <select
                    name="monthlyAdSpend"
                    value={formData.monthlyAdSpend}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition appearance-none"
                  >
                    <option value="" disabled>Select your ad spend range</option>
                    <option value="under-2k">Less than $2,000/month</option>
                    <option value="2k-10k">$2,000 - $10,000/month</option>
                    <option value="10k-50k">$10,000 - $50,000/month</option>
                    <option value="over-50k">$50,000+/month</option>
                  </select>
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-3">
                    WhatsApp Number (for instant follow-up) *
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                  />
                </div>

                {/* Privacy notice */}
                <p className="text-slate-500 text-xs">
                  We respect your privacy. Your information will only be used to contact you about your growth opportunities.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-gray-950 font-bold py-4 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    '✓ Qualify Me Now'
                  )}
                </button>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-12">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-3xl font-black text-white mb-4">
                  You're Qualified!
                </h3>
                <p className="text-slate-300 text-lg mb-6">
                  Thank you for taking the first step. Check your WhatsApp for an instant message from us.
                </p>
                <div className="bg-linear-to-r from-amber-400/20 to-cyan-400/20 border border-amber-400/50 rounded-lg p-6">
                  <p className="text-amber-400 font-semibold">
                    📱 We'll be reaching out within the next 30 minutes with your personalized growth plan.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          {[
            { icon: '⚡', label: '30 Min Response' },
            { icon: '🔒', label: 'Data Secure' },
            { icon: '💼', label: 'No Sales Calls' },
            { icon: '🎯', label: 'Personalized' }
          ].map((trust, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <div className="text-3xl mb-2">{trust.icon}</div>
              <p className="text-slate-400 text-sm font-medium">{trust.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
