
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminStore } from '../../services/AdminStore';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const ok = await AdminStore.login(email, password);
      if (ok) {
        navigate('/admin');
      } else {
        setError('Invalid Administrative Credentials');
      }
    } catch (err) {
      setError('Authentication failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
            <i className="fa-solid fa-lock text-2xl"></i>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">System Login</h2>
          <p className="text-slate-400 font-bold mt-2">Enter your admin credentials</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Gmail / Email Address</label>
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="email" 
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                placeholder="admin@stravotech.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Admin Password</label>
            <div className="relative">
              <i className="fa-solid fa-key absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="password" 
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-xl text-xs font-bold text-center animate-in fade-in zoom-in duration-300">
               <i className="fa-solid fa-circle-exclamation mr-2"></i> {error}
            </div>
          )}

          <button className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all uppercase tracking-widest text-xs">
            Authenticate Session
          </button>
        </form>

        <div className="mt-8 text-center">
           <span className="text-xs text-slate-400 font-medium">Stravotech Enterprise v4.2.0</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
