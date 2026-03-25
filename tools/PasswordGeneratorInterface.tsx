
import React, { useState, useEffect } from 'react';

const PasswordGeneratorInterface: React.FC = () => {
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generate = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let charset = letters;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
    
    let res = '';
    for (let i = 0; i < length; i++) {
      res += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(res);
  };

  useEffect(() => { generate(); }, []);

  return (
    <div className="p-10 lg:p-16 space-y-12">
      <div className="relative bg-slate-900 rounded-[2.5rem] p-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10 blur-3xl opacity-50"></div>
        <div className="relative z-10">
          <div className="text-3xl md:text-5xl font-black text-white mb-8 tracking-wider break-all font-mono">{password}</div>
          <div className="flex justify-center space-x-4">
             <button onClick={generate} className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-indigo-900/40">New Password</button>
             <button onClick={() => navigator.clipboard.writeText(password)} className="px-8 py-3 bg-white/10 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/20">Copy</button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Strength: {length} Chars</label>
          <input type="range" min="8" max="64" value={length} onChange={e => setLength(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-center justify-between">
           <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Numbers</span>
           <button onClick={() => setIncludeNumbers(!includeNumbers)} className={`w-12 h-6 rounded-full transition-colors ${includeNumbers ? 'bg-indigo-600' : 'bg-slate-300'}`}>
              <div className={`w-4 h-4 bg-white rounded-full transition-transform mx-1 ${includeNumbers ? 'translate-x-6' : 'translate-x-0'}`}></div>
           </button>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-center justify-between">
           <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Symbols</span>
           <button onClick={() => setIncludeSymbols(!includeSymbols)} className={`w-12 h-6 rounded-full transition-colors ${includeSymbols ? 'bg-indigo-600' : 'bg-slate-300'}`}>
              <div className={`w-4 h-4 bg-white rounded-full transition-transform mx-1 ${includeSymbols ? 'translate-x-6' : 'translate-x-0'}`}></div>
           </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGeneratorInterface;
