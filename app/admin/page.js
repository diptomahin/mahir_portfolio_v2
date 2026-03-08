'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { data, loading, error, updateData } = usePortfolioData();
  const [formData, setFormData] = useState(null);
  const [activeTab, setActiveTab] = useState('personal');
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Check authentication on mount
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/admin/login');
    }
    setIsLoading(false);
  }, [router]);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: field === 'value' || field === 'isMillion' ? 
          (typeof value === 'string' ? (field === 'isMillion' ? value === 'true' : parseFloat(value)) : value) : 
          value
      }
    }));
  };

  const handleArrayItemChange = (section, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: isNaN(value) ? value : parseFloat(value) } : item
      )
    }));
  };

  const handleSaveSection = async () => {
    setSaving(true);
    setSaveMessage('');
    const success = await updateData(formData);
    setSaving(false);
    if (success) {
      setSaveMessage('✅ Saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } else {
      setSaveMessage('❌ Failed to save');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white text-lg">
        Verifying access...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (loading) return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Loading...</div>;
  if (error) return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-red-500">Error: {error}</div>;
  if (!formData) return null;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">Portfolio Admin</h1>
          <p className="text-slate-400 text-sm sm:text-base">Manage all content for your portfolio</p>
        </div>

        {/* Logout Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => {
              localStorage.removeItem('adminAuth');
              router.push('/');
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 sm:px-4 py-2 rounded-lg transition text-xs sm:text-sm"
          >
            🚪 Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-700 pb-4">
          {['personal', 'stats', 'pillars', 'caseStudies', 'techStack', 'trustSignals'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? 'bg-amber-400 text-gray-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        {/* Content Editor */}
        <div className="bg-slate-900 rounded-lg p-6 sm:p-8 mb-8 overflow-x-auto">
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              {Object.entries(formData.personal).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-semibold mb-2 capitalize">{key}</label>
                  <input
                    type={typeof value === 'number' ? 'number' : 'text'}
                    value={value}
                    onChange={(e) => handleInputChange('personal', key, e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Performance Stats</h2>
              {formData.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-800 p-4 rounded border border-slate-700">
                  <h3 className="font-bold mb-4 text-amber-400">{stat.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Icon</label>
                      <input
                        value={stat.icon}
                        onChange={(e) => handleArrayItemChange('stats', idx, 'icon', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white text-2xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Value</label>
                      <input
                        type="number"
                        value={stat.value}
                        onChange={(e) => handleArrayItemChange('stats', idx, 'value', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Suffix</label>
                      <input
                        value={stat.suffix}
                        onChange={(e) => handleArrayItemChange('stats', idx, 'suffix', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Description</label>
                      <input
                        value={stat.description}
                        onChange={(e) => handleArrayItemChange('stats', idx, 'description', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">
                        <input
                          type="checkbox"
                          checked={stat.highlight}
                          onChange={(e) => handleArrayItemChange('stats', idx, 'highlight', e.target.checked)}
                          className="mr-2"
                        />
                        Highlight
                      </label>
                    </div>
                    {stat.isMillion && (
                      <div>
                        <label className="block text-sm mb-1">
                          <input
                            type="checkbox"
                            checked={stat.isMillion}
                            onChange={(e) => handleArrayItemChange('stats', idx, 'isMillion', e.target.checked)}
                            className="mr-2"
                          />
                          Is Million
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pillars' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Strategic Pillars</h2>
              {formData.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-slate-800 p-4 rounded border border-slate-700">
                  <h3 className="font-bold mb-4 text-amber-400">{pillar.title}</h3>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-sm mb-1">Title</label>
                      <input
                        value={pillar.title}
                        onChange={(e) => handleArrayItemChange('pillars', idx, 'title', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Description</label>
                      <textarea
                        value={pillar.description}
                        onChange={(e) => handleArrayItemChange('pillars', idx, 'description', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                        rows="2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'caseStudies' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
              {formData.caseStudies.map((caseStudy, idx) => (
                <div key={idx} className="bg-slate-800 p-4 rounded border border-slate-700">
                  <h3 className="font-bold mb-4 text-amber-400">{caseStudy.title}</h3>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-sm mb-1">Challenge</label>
                      <textarea
                        value={caseStudy.challenge}
                        onChange={(e) => handleArrayItemChange('caseStudies', idx, 'challenge', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                        rows="2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Solution</label>
                      <textarea
                        value={caseStudy.solution}
                        onChange={(e) => handleArrayItemChange('caseStudies', idx, 'solution', e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                        rows="2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'techStack' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
              <div>
                <label className="block font-semibold mb-2">Marketing Tools</label>
                <input
                  value={formData.techStack.marketing.join(', ')}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    techStack: {
                      ...prev.techStack,
                      marketing: e.target.value.split(',').map(s => s.trim())
                    }
                  }))}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white"
                  placeholder="Comma-separated list"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Development Tools</label>
                <input
                  value={formData.techStack.development.join(', ')}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    techStack: {
                      ...prev.techStack,
                      development: e.target.value.split(',').map(s => s.trim())
                    }
                  }))}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white"
                  placeholder="Comma-separated list"
                />
              </div>
            </div>
          )}

          {activeTab === 'trustSignals' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Trust Signals</h2>
              {formData.trustSignals.map((signal, idx) => (
                <div key={idx} className="bg-slate-800 p-4 rounded border border-slate-700 flex gap-4">
                  <input
                    value={signal.icon}
                    onChange={(e) => handleArrayItemChange('trustSignals', idx, 'icon', e.target.value)}
                    className="w-16 bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white text-center text-2xl"
                  />
                  <input
                    value={signal.label}
                    onChange={(e) => handleArrayItemChange('trustSignals', idx, 'label', e.target.value)}
                    className="flex-1 bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex gap-4">
          <button
            onClick={handleSaveSection}
            disabled={saving}
            className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-8 py-3 rounded disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          {saveMessage && (
            <div className="flex items-center text-amber-400 font-semibold">{saveMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}
