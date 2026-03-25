
import React, { useState } from 'react';

const Base64Interface: React.FC = () => {
  const [input, setInput] = useState('Hello World');
  const [result, setResult] = useState(btoa('Hello World'));

  const encode = () => {
    try {
      setResult(btoa(input));
    } catch (e) {
      setResult('Invalid Character Error');
    }
  };

  const decode = () => {
    try {
      setResult(atob(input));
    } catch (e) {
      setResult('Invalid Base64 Format');
    }
  };

  return (
    <div className="p-10 lg:p-16 space-y-12">
      <div className="grid lg:grid-cols-2 gap-12">
         <div className="space-y-6">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block">Input Source</label>
            <textarea 
              className="w-full h-40 p-6 rounded-3xl bg-slate-50 border border-slate-100 text-lg font-medium focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
               <button onClick={encode} className="py-4 bg-indigo-600 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Encode to Base64</button>
               <button onClick={decode} className="py-4 bg-slate-900 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">Decode from Base64</button>
            </div>
         </div>

         <div className="space-y-6">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block">Output Result</label>
            <div className="w-full h-40 p-6 rounded-3xl bg-slate-900 text-indigo-400 font-mono text-lg break-all overflow-y-auto custom-scrollbar border border-slate-800 shadow-2xl relative">
               {result}
            </div>
            <button 
               onClick={() => navigator.clipboard.writeText(result)}
               className="w-full py-4 bg-slate-100 text-slate-600 font-black rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all uppercase tracking-widest text-xs"
            >
              Copy Result
            </button>
         </div>
      </div>
    </div>
  );
};

export default Base64Interface;
