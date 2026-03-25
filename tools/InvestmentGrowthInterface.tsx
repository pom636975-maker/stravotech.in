import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InvestmentGrowthInterface: React.FC = () => {
  const [initial, setInitial] = useState<string>('');
  const [monthly, setMonthly] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [years, setYears] = useState<string>('');

  const calculateGrowth = () => {
    const numInitial = parseFloat(initial) || 0;
    const numMonthly = parseFloat(monthly) || 0;
    const numRate = (parseFloat(rate) || 0) / 100 / 12; // Monthly rate
    const numYears = parseFloat(years) || 0;
    const months = numYears * 12;

    let futureValue = numInitial;
    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + numMonthly) * (1 + numRate);
    }

    const totalInvested = numInitial + (numMonthly * months);
    const totalGrowth = futureValue - totalInvested;

    return {
      future: futureValue.toFixed(2),
      growth: totalGrowth.toFixed(2),
      invested: totalInvested.toFixed(2)
    };
  };

  const { future, growth, invested } = calculateGrowth();

  return (
    <div className="p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-10">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-6">Investment Growth Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Initial Investment ($)</label>
                <input
                  type="number"
                  placeholder="Enter initial amount"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={initial}
                  onChange={(e) => setInitial(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Monthly Contribution ($)</label>
                <input
                  type="number"
                  placeholder="Enter monthly amount"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={monthly}
                  onChange={(e) => setMonthly(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Time Period (Years)</label>
                <input
                  type="number"
                  placeholder="Enter years"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
            <h4 className="text-lg font-bold text-purple-900 mb-3">Related Tools</h4>
            <div className="flex flex-wrap gap-3">
              <Link to="/finance/stock-profit-calculator" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                <i className="fa-solid fa-chart-line mr-2"></i> Stock Profit
              </Link>
              <Link to="/finance/roi-calculator" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                <i className="fa-solid fa-chart-pie mr-2"></i> ROI Calculator
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h4 className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Future Value</h4>
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tighter block break-words">${future}</span>
              <p className="text-indigo-200 text-sm">Growth: ${growth} | Invested: ${invested}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentGrowthInterface;