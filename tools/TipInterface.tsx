
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

  return (
    <div className="p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Bill Amount ($)</label>
            <input 
              type="text" placeholder="0.00"
              className="w-full p-4 rounded-xl border border-slate-200 text-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Tip Percentage (%)</label>
            <input 
              type="text" placeholder="15"
              className="w-full p-4 rounded-xl border border-slate-200 text-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
              value={tipPercent}
              onChange={(e) => setTipPercent(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Split Between (People)</label>
            <input 
              type="text" placeholder="1"
              className="w-full p-4 rounded-xl border border-slate-200 text-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none" 
              value={split}
              onChange={(e) => setSplit(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 space-y-6 flex flex-col justify-center">
          <div className="flex justify-between items-center pb-4 border-b border-blue-200">
            <span className="font-bold text-slate-900">Total Bill</span>
            <span className="text-2xl font-black text-blue-600">${totalBill.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-slate-900 text-lg">Per Person</span>
            <span className="text-4xl font-black text-blue-700">${perPerson.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipInterface;
