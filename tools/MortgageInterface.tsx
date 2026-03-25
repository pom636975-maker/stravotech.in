
import React, { useState } from 'react';

const MortgageInterface: React.FC = () => {
  const [homePrice, setHomePrice] = useState<string>('450000');
  const [downPayment, setDownPayment] = useState<string>('90000');
  const [loanTerm, setLoanTerm] = useState<string>('30');
  const [interestRate, setInterestRate] = useState<string>('6.75');

  const calculateMonthly = () => {
    const numPrice = parseFloat(homePrice) || 0;
    const numDown = parseFloat(downPayment) || 0;
    const numRate = parseFloat(interestRate) || 0;
    const numTerm = parseFloat(loanTerm) || 0;

    const principal = numPrice - numDown;
    const monthlyRate = numRate / 100 / 12;
    const numberOfPayments = numTerm * 12;
    if (principal <= 0 || numberOfPayments <= 0) return "0.00";
    if (monthlyRate === 0) return (principal / numberOfPayments).toFixed(2);
    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthly.toFixed(2);
  };

  const monthlyVal = parseFloat(calculateMonthly());
  const numPrice = parseFloat(homePrice) || 0;
  const numDown = parseFloat(downPayment) || 0;
  const totalRepayment = monthlyVal * (parseFloat(loanTerm) || 0) * 12;
  const totalInterest = totalRepayment - (numPrice - numDown);
  const interestRatio = totalRepayment > 0 ? (totalInterest / totalRepayment) * 100 : 0;

  return (
    <div className="p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Home Price ($)</label>
            </div>
            <input 
              type="text" placeholder="e.g. 500000"
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 font-bold focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" 
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Down Payment ($)</label>
            <input 
              type="text" placeholder="e.g. 100000"
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 font-bold focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" 
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">Rate (%)</label>
              <input 
                type="text" placeholder="5.5"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 font-bold outline-none focus:ring-4 focus:ring-indigo-500/10" 
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">Term (Years)</label>
              <input 
                type="text" placeholder="30"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 font-bold outline-none focus:ring-4 focus:ring-indigo-500/10" 
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white text-center">
          <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.3em] block">Estimated Monthly</span>
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter mt-4 break-words">${monthlyVal.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default MortgageInterface;
