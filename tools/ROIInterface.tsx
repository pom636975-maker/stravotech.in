
import React, { useState } from 'react';

const ROIInterface: React.FC = () => {
  const [invested, setInvested] = useState<string>('10000');
  const [returned, setReturned] = useState<string>('15000');

  const numInvested = parseFloat(invested) || 0;
  const numReturned = parseFloat(returned) || 0;
  const profit = numReturned - numInvested;
  const roi = numInvested === 0 ? 0 : (profit / numInvested) * 100;

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest block mb-4">Initial Investment ($)</label>
            <input 
              type="text" placeholder="0.00"
              className="w-full p-6 rounded-3xl bg-slate-50 border border-slate-100 text-3xl font-black outline-none focus:ring-4 focus:ring-indigo-500/10" 
              value={invested} 
              onChange={e => setInvested(e.target.value)} 
            />
          </div>
          <div>
            <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest block mb-4">Final Value ($)</label>
            <input 
              type="text" placeholder="0.00"
              className="w-full p-6 rounded-3xl bg-slate-50 border border-slate-100 text-3xl font-black outline-none focus:ring-4 focus:ring-indigo-500/10" 
              value={returned} 
              onChange={e => setReturned(e.target.value)} 
            />
          </div>
        </div>
        <div className="bg-white rounded-[3rem] p-12 border-2 border-slate-100 flex flex-col justify-center text-center shadow-xl">
           <span className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-4">ROI Percentage</span>
           <span className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-10 tracking-tighter break-words ${roi >= 0 ? 'text-slate-900' : 'text-red-600'}`}>{roi.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ROIInterface;
