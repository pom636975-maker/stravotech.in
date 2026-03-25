
import React, { useState } from 'react';

const EssayEstimatorInterface: React.FC = () => {
  const [pages, setPages] = useState(3);
  const [spacing, setSpacing] = useState('double'); // single or double
  const [fontSize, setFontSize] = useState(12);

  const calculateWords = () => {
    let base = spacing === 'double' ? 275 : 550;
    if (fontSize > 12) base *= 0.9;
    if (fontSize < 12) base *= 1.1;
    return Math.round(pages * base);
  };

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Number of Pages</label>
            <div className="flex items-center space-x-6">
               <button onClick={() => setPages(Math.max(1, pages - 1))} className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center font-black">-</button>
               <span className="text-4xl font-black">{pages}</span>
               <button onClick={() => setPages(pages + 1)} className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center font-black">+</button>
            </div>
          </div>
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Line Spacing</label>
            <div className="flex space-x-4">
              <button 
                onClick={() => setSpacing('single')}
                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all ${spacing === 'single' ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-500'}`}
              >Single Spaced</button>
              <button 
                onClick={() => setSpacing('double')}
                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all ${spacing === 'double' ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-500'}`}
              >Double Spaced</button>
            </div>
          </div>
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Font Size (pt)</label>
            <input type="range" min="8" max="18" step="1" value={fontSize} onChange={e => setFontSize(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>8pt</span>
              <span>12pt (Standard)</span>
              <span>18pt</span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-[3rem] p-12 text-white flex flex-col justify-center items-center text-center shadow-xl shadow-indigo-100">
           <span className="text-indigo-200 text-xs font-black uppercase tracking-[0.3em] mb-4">Estimated Word Count</span>
           <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 break-words">{calculateWords()}</span>
           <p className="text-indigo-100 text-sm font-bold opacity-80 leading-relaxed max-w-xs">
             Based on standard Times New Roman or Arial formatting in North American academic papers.
           </p>
        </div>
      </div>
    </div>
  );
};

export default EssayEstimatorInterface;
