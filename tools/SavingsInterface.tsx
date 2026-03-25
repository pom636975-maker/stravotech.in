
import React, { useState } from 'react';

const SavingsInterface: React.FC = () => {
  const [initial, setInitial] = useState<string>('5000');
  const [monthly, setMonthly] = useState<string>('200');
  const [rate, setRate] = useState<string>('7');
  const [years, setYears] = useState<string>('10');

  const calculate = () => {
    const numInitial = parseFloat(initial) || 0;
    const numMonthly = parseFloat(monthly) || 0;
    const numRate = parseFloat(rate) || 0;
    const numYears = parseFloat(years) || 0;

    let total = numInitial;
    const monthlyRate = numRate / 100 / 12;
    const totalMonths = numYears * 12;
    for (let i = 0; i < totalMonths; i++) {
      total = (total + numMonthly) * (1 + monthlyRate);
    }
    return total;
  };

  const finalValue = calculate();
  const numInitial = parseFloat(initial) || 0;
  const numMonthly = parseFloat(monthly) || 0;
  const numYears = parseFloat(years) || 0;
  const totalContributions = numInitial + (numMonthly * numYears * 12);
  const totalInterest = finalValue - totalContributions;

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Initial Deposit ($)</label>
            <input type="text" placeholder="0.00" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 font-black text-xl" value={initial} onChange={e => setInitial(e.target.value)} />
          </div>
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Monthly Contribution ($)</label>
            <input type="text" placeholder="0.00" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 font-black text-xl" value={monthly} onChange={e => setMonthly(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Annual Rate (%)</label>
              <input type="text" placeholder="5.0" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 font-black text-xl" value={rate} onChange={e => setRate(e.target.value)} />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Years</label>
              <input type="text" placeholder="10" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 font-black text-xl" value={years} onChange={e => setYears(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 text-center mb-12">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Future Balance</span>
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-400 tracking-tighter break-words overflow-wrap break-words">${finalValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
          </div>
          <div className="relative z-10 space-y-6 pt-10 border-t border-slate-800">
             <div className="flex justify-between items-start gap-4">
                <span className="text-xs font-black text-slate-500 uppercase whitespace-nowrap">Total Contributed</span>
                <span className="text-sm md:text-lg font-bold text-right break-words">${totalContributions.toLocaleString()}</span>
             </div>
             <div className="flex justify-between items-start gap-4">
                <span className="text-xs font-black text-slate-500 uppercase whitespace-nowrap">Total Interest Earned</span>
                <span className="text-sm md:text-lg font-bold text-amber-400 text-right break-words">${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsInterface;
