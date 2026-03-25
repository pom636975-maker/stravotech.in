import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialShare from '../components/SocialShare';

const TaxRefundInterface: React.FC = () => {
  const [income, setIncome] = useState<string>('');
  const [deductions, setDeductions] = useState<string>('');
  const [credits, setCredits] = useState<string>('');
  const [taxRate, setTaxRate] = useState<string>('');

  const calculateRefund = () => {
    const numIncome = parseFloat(income) || 0;
    const numDeductions = parseFloat(deductions) || 0;
    const numCredits = parseFloat(credits) || 0;
    const numTaxRate = (parseFloat(taxRate) || 0) / 100;

    const taxableIncome = numIncome - numDeductions;
    const taxOwed = taxableIncome * numTaxRate;
    const refund = numCredits - taxOwed;

    return refund > 0 ? refund.toFixed(2) : '0.00';
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-10">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-6">Tax Refund Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Annual Gross Income ($)</label>
                <input
                  type="number"
                  placeholder="Enter your gross income"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Total Deductions ($)</label>
                <input
                  type="number"
                  placeholder="Enter deductions"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Tax Credits ($)</label>
                <input
                  type="number"
                  placeholder="Enter credits"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={credits}
                  onChange={(e) => setCredits(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Effective Tax Rate (%)</label>
                <input
                  type="number"
                  placeholder="Enter tax rate"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={taxRate}
                  onChange={(e) => setTaxRate(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
            <h4 className="text-lg font-bold text-blue-900 mb-3">Related Tools</h4>
            <div className="flex flex-wrap gap-3">
              <Link to="/finance/stock-profit-calculator" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <i className="fa-solid fa-chart-line mr-2"></i> Stock Profit Calculator
              </Link>
              <Link to="/finance/salary-to-hourly" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <i className="fa-solid fa-money-bill-transfer mr-2"></i> Salary Converter
              </Link>
            </div>
          </div>

          <SocialShare
            url={window.location.href}
            title="Free Tax Refund Calculator 2026 - Estimate Your Refund Instantly | Stravotech"
            description="Use our free tax refund calculator to estimate your 2026 tax refund quickly and accurately. Simple tool for taxpayers to calculate potential savings."
          />
        </div>
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h4 className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Estimated Refund</h4>
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tighter block break-words">${calculateRefund()}</span>
              <p className="text-indigo-200 text-sm">This is an estimate. Consult a tax professional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxRefundInterface;