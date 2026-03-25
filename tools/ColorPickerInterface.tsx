
import React, { useState } from 'react';

const ColorPickerInterface: React.FC = () => {
  const [bg, setBg] = useState('#6366f1');
  const [fg, setFg] = useState('#ffffff');

  // Simple relative luminance calculation for contrast
  const getLuminance = (hex: string) => {
    const rgb = hex.match(/[A-Za-z0-9]{2}/g)?.map(v => {
      let c = parseInt(v, 16) / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }) || [0,0,0];
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  };

  const L1 = getLuminance(bg);
  const L2 = getLuminance(fg);
  const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

  const getStatus = (r: number) => {
    if (r >= 7) return { text: 'AAA - Perfect', color: 'bg-emerald-500' };
    if (r >= 4.5) return { text: 'AA - Good', color: 'bg-indigo-500' };
    return { text: 'Fail - Poor', color: 'bg-red-500' };
  };

  const status = getStatus(ratio);

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
           <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">Background</label>
                 <div className="flex gap-4 items-center">
                    <input type="color" className="w-16 h-16 rounded-2xl border-none cursor-pointer p-0 overflow-hidden" value={bg} onChange={e => setBg(e.target.value)} />
                    <input type="text" className="flex-grow p-4 rounded-xl border border-slate-200 font-mono text-sm" value={bg} onChange={e => setBg(e.target.value)} />
                 </div>
              </div>
              <div className="space-y-4">
                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">Foreground</label>
                 <div className="flex gap-4 items-center">
                    <input type="color" className="w-16 h-16 rounded-2xl border-none cursor-pointer p-0 overflow-hidden" value={fg} onChange={e => setFg(e.target.value)} />
                    <input type="text" className="flex-grow p-4 rounded-xl border border-slate-200 font-mono text-sm" value={fg} onChange={e => setFg(e.target.value)} />
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Contrast Ratio</span>
                <span className="text-5xl font-black text-white">{ratio.toFixed(2)}:1</span>
              </div>
              <div className={`${status.color} px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl`}>
                 {status.text}
              </div>
           </div>
        </div>

        <div 
          className="rounded-[3rem] p-16 flex flex-col justify-center items-center text-center shadow-2xl transition-all duration-500"
          style={{ backgroundColor: bg, color: fg }}
        >
           <h3 className="text-4xl font-black mb-6 tracking-tighter">Design Preview</h3>
           <p className="text-lg font-medium opacity-90 leading-relaxed max-w-xs">
             Testing color accessibility ensures your content is readable for everyone, including those with visual impairments.
           </p>
           <button className="mt-10 px-8 py-4 border-2 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-transform hover:scale-105" style={{ borderColor: fg }}>
             Sample Button
           </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerInterface;
