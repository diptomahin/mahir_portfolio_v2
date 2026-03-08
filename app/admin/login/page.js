'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const ADMIN_PASSWORD = 'mahir@choto@2018';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password === ADMIN_PASSWORD) {
      // Store auth token in localStorage
      localStorage.setItem('adminAuth', 'true');
      router.push('/admin');
    } else {
      setError('❌ Invalid password');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-950 font-bold text-2xl">M</span>
            </div>
            <h1 className="text-2xl font-black text-white mb-2">Admin Portal</h1>
            <p className="text-slate-400">Enter password to access</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition"
                disabled={loading}
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-gray-950 font-bold py-3 rounded-lg transition"
            >
              {loading ? 'Verifying...' : 'Enter Admin Panel'}
            </button>

            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition"
            >
              ← Return to Home
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-slate-500 text-sm mt-6">
            🔒 Secured admin access
          </p>
        </div>
      </div>
    </div>
  );
}
