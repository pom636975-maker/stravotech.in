
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
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Purchase Amount ($)</label>
            <input 
              type="text" 
              placeholder="0.00"
              className="w-full p-6 rounded-3xl bg-slate-50 border border-slate-100 text-4xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">USA State</label>
            <select 
              className="w-full p-5 rounded-2xl bg-white border border-slate-200 font-bold text-lg"
              value={stateCode}
              onChange={e => setStateCode(e.target.value)}
            >
              {Object.keys(STATES_TAX_RATES).map(code => (
                <option key={code} value={code}>{code} - {code} State</option>
              ))}
            </select>
            <p className="mt-4 text-xs font-bold text-slate-400 italic">State tax rate for {stateCode} is {taxRate}%.</p>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-indigo-100 flex flex-col justify-center">
           <div className="space-y-8">
              <div className="flex justify-between items-center pb-6 border-b border-white/20">
                <span className="text-indigo-100 text-xs font-black uppercase tracking-widest">Tax Amount ({taxRate}%)</span>
                <span className="text-2xl font-black">${taxAmount.toFixed(2)}</span>
              </div>
              <div className="text-center pt-4">
                <span className="block text-indigo-100 text-xs font-black uppercase tracking-[0.3em] mb-4">Total Amount</span>
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black tracking-tighter break-words">${total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTaxInterface;
