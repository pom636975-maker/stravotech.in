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
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Input */}
        <div className="flex-1 space-y-6 w-full min-w-0">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Loan Parameters</h3>

            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Total Loan Amount ($)</label>
              <input type="number" placeholder="0.00" className="w-full px-4 py-4 rounded-xl bg-slate-50/50 border border-slate-200 text-xl font-black focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none hover:bg-slate-50 transition-all" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Interest Rate (%)</label>
                <input type="number" step="0.1" placeholder="5.0" className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-sm font-bold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none hover:bg-slate-50 transition-all text-center" value={interestRate} onChange={e => setInterestRate(e.target.value)} />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Term (Months)</label>
                <input type="number" placeholder="60" className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-sm font-bold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none hover:bg-slate-50 transition-all text-center" value={termMonths} onChange={e => setTermMonths(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="w-full lg:w-80 xl:w-96 flex-none">
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-[2rem] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 space-y-6 w-full">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-white/5">
                <i className="fa-solid fa-money-bill-wave"></i> Monthly Payment
              </span>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-black text-emerald-400 tracking-tighter leading-none">
                  ${monthly.toLocaleString()}
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-2">Per Month</p>
              </div>
              
              <div className="pt-6 border-t border-white/10 space-y-3 text-xs font-medium text-slate-400">
                <div className="flex justify-between">
                  <span>Total Payable</span>
                  <span className="font-bold text-white">${totalPayable.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest Cost</span>
                  <span className="font-bold text-amber-400">${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanInterface;
