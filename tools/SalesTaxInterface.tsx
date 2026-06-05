import React, { useState } from 'react';
import { STATES_TAX_RATES } from '../constants';

const SalesTaxInterface: React.FC = () => {
  const [amount, setAmount] = useState<string>('100');
  const [stateCode, setStateCode] = useState('CA');

  const numAmount = parseFloat(amount) || 0;
  const taxRate = STATES_TAX_RATES[stateCode] || 0;
  const taxAmount = numAmount * (taxRate / 100);
  const total = numAmount + taxAmount;

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Input */}
        <div className="flex-1 space-y-6 w-full min-w-0">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Sales Tax Inputs</h3>

            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Purchase Amount ($)</label>
              <input 
                type="number" 
                placeholder="0.00"
                className="w-full px-4 py-4 rounded-xl bg-slate-50/50 border border-slate-200 text-xl font-black focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none hover:bg-slate-50 transition-all"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">USA State</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none px-4 py-3 rounded-xl bg-white border border-slate-200 font-bold text-sm cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  value={stateCode}
                  onChange={e => setStateCode(e.target.value)}
                >
                  {Object.keys(STATES_TAX_RATES).map(code => (
                    <option key={code} value={code}>{code} — {STATES_TAX_RATES[code]}%</option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-slate-400"></i>
              </div>
              <p className="mt-3 text-[10px] font-bold text-slate-400 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-info text-[8px]"></i>
                State tax rate for {stateCode} is {taxRate}%.
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="w-full lg:w-80 xl:w-96 flex-none">
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-[2rem] p-8 sm:p-10 text-white shadow-xl shadow-indigo-100 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-6 w-full">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-white/5">
                <i className="fa-solid fa-percent"></i> Tax Breakdown
              </span>

              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-indigo-200 text-xs font-bold">Tax ({taxRate}%)</span>
                <span className="text-xl font-black">${taxAmount.toFixed(2)}</span>
              </div>

              <div className="text-center pt-2">
                <p className="text-indigo-200 text-[9px] font-black uppercase tracking-[0.15em] mb-2">Total Amount</p>
                <div className="text-5xl sm:text-6xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-100">
                  ${total.toLocaleString(undefined, {minimumFractionDigits: 2})}
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

export default SalesTaxInterface;
