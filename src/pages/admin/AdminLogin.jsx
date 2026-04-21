import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import Button from '../../components/Button';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-brand-primary flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <div className="w-full max-w-md bg-white rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-bl-[100px]" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-brand-primary rounded flex items-center justify-center font-black text-brand-accent text-xl">M</div>
            <div className="flex flex-col -gap-1">
               <span className="text-2xl font-black tracking-tighter text-brand-primary leading-none">MFFS<span className="text-brand-accent">.</span></span>
               <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Internal Console</span>
            </div>
          </div>

          <h2 className="text-3xl font-black text-brand-primary uppercase tracking-tighter mb-8 leading-none">Firm <br /> <span className="text-brand-accent italic">Authentication</span>.</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-3">Corporate Identifier</label>
              <input 
                type="email" 
                placeholder="admin@mffsaccountancy.co.uk"
                className="w-full p-5 bg-brand-light rounded-2xl font-bold outline-none border border-transparent focus:border-brand-accent transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-3">Security Key</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full p-5 bg-brand-light rounded-2xl font-bold outline-none border border-transparent focus:border-brand-accent transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-50 p-4 rounded-xl border border-red-100">
                {error}
              </p>
            )}

            <button 
              disabled={loading}
              className="w-full py-6 bg-brand-primary text-brand-accent font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl hover:bg-brand-accent hover:text-brand-primary transition-all shadow-xl shadow-brand-primary/20"
            >
              {loading ? 'Authorizing...' : 'Enter Registry'}
            </button>
          </form>

          <p className="mt-12 text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">
            Authorized Personnel Only // Session Monitored
          </p>
        </div>
      </div>
    </div>
  );
}
