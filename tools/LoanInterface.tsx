
import React, { useState } from 'react';

const LoanInterface: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>('15000');
  const [interestRate, setInterestRate] = useState<string>('5.5');
  const [termMonths, setTermMonths] = useState<string>('60');

  const calculateMonthly = () => {
    const numLoan = parseFloat(loanAmount) || 0;
    const numRate = parseFloat(interestRate) || 0;
    const numTerm = parseFloat(termMonths) || 1;
    const monthlyRate = numRate / 100 / 12;
    if (monthlyRate === 0) return (numLoan / numTerm).toFixed(2);
    const monthly = (numLoan * monthlyRate * Math.pow(1 + monthlyRate, numTerm)) / (Math.pow(1 + monthlyRate, numTerm) - 1);
    return monthly.toFixed(2);
  };

  const monthly = parseFloat(calculateMonthly());
  const numLoan = parseFloat(loanAmount) || 0;
  const numTerm = parseFloat(termMonths) || 0;
  const totalPayable = monthly * numTerm;
  const totalInterest = totalPayable - numLoan;

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-3">Total Loan Amount ($)</label>
            <input type="text" placeholder="0.00" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 text-2xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Interest Rate (%)</label>
              <input type="text" placeholder="5.0" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 text-xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none" value={interestRate} onChange={e => setInterestRate(e.target.value)} />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Term (Months)</label>
              <input type="text" placeholder="60" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 text-xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none" value={termMonths} onChange={e => setTermMonths(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 text-center mb-12">
            <span className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Monthly Payment</span>
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-emerald-400 tracking-tighter break-words">${monthly.toLocaleString()}</div>
          </div>
          <div className="relative z-10 space-y-6 pt-10 border-t border-slate-800">
             <div className="flex justify-between items-start gap-4">
                <span className="text-xs font-black text-slate-500 uppercase whitespace-nowrap">Total Payable</span>
                <span className="text-sm md:text-lg font-bold text-right break-words">${totalPayable.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
             </div>
             <div className="flex justify-between items-start gap-4">
                <span className="text-xs font-black text-slate-500 uppercase whitespace-nowrap">Total Interest Cost</span>
                <span className="text-sm md:text-lg font-bold text-amber-400 text-right break-words">${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanInterface;
