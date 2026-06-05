import React, { useState } from 'react';

const TipInterface: React.FC = () => {
  const [bill, setBill] = useState<string>('50');
  const [tipPercent, setTipPercent] = useState<string>('15');
  const [split, setSplit] = useState<string>('1');

  const numBill = parseFloat(bill) || 0;
  const numTipPercent = parseFloat(tipPercent) || 0;
  const numSplit = parseFloat(split) || 1;

  const totalTip = numBill * (numTipPercent / 100);
  const totalBill = numBill + totalTip;
  const perPerson = totalBill / numSplit;

  const tipPresets = [10, 15, 18, 20, 25];

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Input */}
        <div className="flex-1 space-y-6 w-full min-w-0">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Bill Details</h3>

            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Bill Amount ($)</label>
              <input 
                type="number" placeholder="0.00"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-lg font-bold bg-slate-50/50 hover:bg-slate-50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" 
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Tip Percentage</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {tipPresets.map(p => (
                  <button 
                    key={p}
                    onClick={() => setTipPercent(String(p))}
                    className={`px-4 py-2 rounded-xl text-xs font-black border transition-all ${
                      tipPercent === String(p) 
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' 
                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30'
                    }`}
                  >
                    {p}%
                  </button>
                ))}
              </div>
              <input 
                type="number" placeholder="Custom %"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50/50 hover:bg-slate-50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" 
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Split Between</label>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setSplit(String(Math.max(1, (parseInt(split) || 1) - 1)))}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-black text-lg flex items-center justify-center border border-slate-200/50 transition-all"
                >−</button>
                <input 
                  type="number" placeholder="1"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm font-bold text-center bg-slate-50/50 hover:bg-slate-50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" 
                  value={split}
                  onChange={(e) => setSplit(e.target.value)}
                />
                <button 
                  onClick={() => setSplit(String((parseInt(split) || 1) + 1))}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-black text-lg flex items-center justify-center border border-slate-200/50 transition-all"
                >+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="w-full lg:w-80 xl:w-96 flex-none">
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-[2rem] p-8 sm:p-10 text-white shadow-xl shadow-indigo-100 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6 w-full">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-white/5">
                <i className="fa-solid fa-receipt"></i> Tip Summary
              </span>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-indigo-200 text-xs font-bold">Tip Amount</span>
                  <span className="text-xl font-black">${totalTip.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-indigo-200 text-xs font-bold">Total Bill</span>
                  <span className="text-xl font-black">${totalBill.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="text-center pt-2">
                <p className="text-indigo-200 text-[9px] font-black uppercase tracking-[0.15em] mb-2">Per Person</p>
                <div className="text-5xl sm:text-6xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-100">
                  ${perPerson.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-8 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipInterface;
