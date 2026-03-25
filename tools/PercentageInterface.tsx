
import React, { useState } from 'react';

const PercentageInterface: React.FC = () => {
  const [val1, setVal1] = useState<string>('15');
  const [val2, setVal2] = useState<string>('250');
  
  const [val3, setVal3] = useState<string>('75');
  const [val4, setVal4] = useState<string>('300');

  const [val5, setVal5] = useState<string>('100');
  const [val6, setVal6] = useState<string>('150');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const calc1 = ((parseFloat(val1) || 0)/100 * (parseFloat(val2) || 0)).toFixed(2);
  const calc2 = (parseFloat(val4) || 0) === 0 ? "0.00" : ((parseFloat(val3) || 0)/(parseFloat(val4) || 0) * 100).toFixed(2);
  const calc3 = (parseFloat(val5) || 0) === 0 ? "0.00" : (((parseFloat(val6) || 0) - (parseFloat(val5) || 0)) / (parseFloat(val5) || 0) * 100).toFixed(2);

  return (
    <div className="p-10 lg:p-16 space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-6 flex flex-col hover:bg-white hover:border-indigo-100 transition-all shadow-sm">
          <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">What is % of X</h4>
          <div className="space-y-4 flex-grow">
            <input type="text" placeholder="%" className="w-full p-4 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500" value={val1} onChange={e => setVal1(e.target.value)} />
            <input type="text" placeholder="Value" className="w-full p-4 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500" value={val2} onChange={e => setVal2(e.target.value)} />
          </div>
          <div className="text-center pt-6 border-t border-slate-100">
             <span className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 break-words">{calc1}</span>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-6 flex flex-col hover:bg-white hover:border-indigo-100 transition-all shadow-sm">
          <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">X is what % of Y</h4>
          <div className="space-y-4 flex-grow">
            <input type="text" placeholder="Part" className="w-full p-4 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500" value={val3} onChange={e => setVal3(e.target.value)} />
            <input type="text" placeholder="Total" className="w-full p-4 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500" value={val4} onChange={e => setVal4(e.target.value)} />
          </div>
          <div className="text-center pt-6 border-t border-slate-100">
             <span className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 break-words">{calc2}%</span>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-6 flex flex-col hover:bg-white hover:border-indigo-100 transition-all shadow-sm">
          <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">% Change</h4>
          <div className="space-y-4 flex-grow">
            <input type="text" placeholder="From" className="w-full p-4 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500" value={val5} onChange={e => setVal5(e.target.value)} />
            <input type="text" placeholder="To" className="w-full p-4 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500" value={val6} onChange={e => setVal6(e.target.value)} />
          </div>
          <div className="text-center pt-6 border-t border-slate-100">
             <span className={`text-2xl md:text-3xl lg:text-4xl font-black break-words ${(parseFloat(val6)||0) >= (parseFloat(val5)||0) ? 'text-emerald-500' : 'text-red-500'}`}>{calc3}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageInterface;
