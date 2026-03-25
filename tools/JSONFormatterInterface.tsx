
import React, { useState } from 'react';

const JSONFormatterInterface: React.FC = () => {
  const [input, setInput] = useState('{"key": "value", "array": [1, 2, 3]}');
  const [error, setError] = useState<string | null>(null);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="p-8 lg:p-12 space-y-8">
      <div className="flex gap-4">
         <button onClick={format} className="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl text-xs uppercase tracking-widest">Prettify</button>
         <button onClick={minify} className="px-8 py-3 bg-slate-900 text-white font-black rounded-xl text-xs uppercase tracking-widest">Minify</button>
         <button onClick={() => setInput('')} className="px-8 py-3 bg-white border border-slate-200 text-slate-400 font-black rounded-xl text-xs uppercase tracking-widest hover:text-red-500 hover:border-red-100 transition-colors">Clear</button>
      </div>

      <div className="relative group">
        <textarea 
          className={`w-full h-[500px] p-8 rounded-[2rem] font-mono text-sm leading-relaxed outline-none transition-all resize-none border-2 ${error ? 'bg-red-50 border-red-200 text-red-900' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-indigo-400'}`}
          value={input}
          onChange={e => setInput(e.target.value)}
          spellCheck={false}
        />
        {error && (
          <div className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
             Invalid JSON: {error}
          </div>
        )}
        {!error && input && (
          <div className="absolute top-6 right-6 px-4 py-2 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
             Valid Syntax
          </div>
        )}
      </div>

      <div className="flex justify-center">
         <button 
           onClick={() => navigator.clipboard.writeText(input)}
           className="px-10 py-4 bg-slate-100 text-slate-600 font-black rounded-2xl hover:bg-indigo-600 hover:text-white transition-all uppercase tracking-widest text-xs"
         >
           Copy to Clipboard
         </button>
      </div>
    </div>
  );
};

export default JSONFormatterInterface;
