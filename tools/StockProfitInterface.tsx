import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StockProfitInterface: React.FC = () => {
  const [buyPrice, setBuyPrice] = useState<string>('');
  const [sellPrice, setSellPrice] = useState<string>('');
  const [shares, setShares] = useState<string>('');

  const calculateProfit = () => {
    const numBuyPrice = parseFloat(buyPrice) || 0;
    const numSellPrice = parseFloat(sellPrice) || 0;
    const numShares = parseFloat(shares) || 0;

    const totalBuy = numBuyPrice * numShares;
    const totalSell = numSellPrice * numShares;
    const profit = totalSell - totalBuy;

    return {
      profit: profit.toFixed(2),
      percentage: totalBuy > 0 ? ((profit / totalBuy) * 100).toFixed(2) : '0.00'
    };
  };

  const { profit, percentage } = calculateProfit();

  return (
    <div className="p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-10">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-6">Stock Profit Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Buy Price per Share ($)</label>
                <input
                  type="number"
                  placeholder="Enter buy price"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Sell Price per Share ($)</label>
                <input
                  type="number"
                  placeholder="Enter sell price"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Number of Shares</label>
                <input
                  type="number"
                  placeholder="Enter number of shares"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
            <h4 className="text-lg font-bold text-green-900 mb-3">Related Tools</h4>
            <div className="flex flex-wrap gap-3">
              <Link to="/finance/tax-refund-calculator" className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                <i className="fa-solid fa-calculator mr-2"></i> Tax Refund Calculator
              </Link>
              <Link to="/finance/roi-calculator" className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                <i className="fa-solid fa-chart-pie mr-2"></i> ROI Calculator
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h4 className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Total Profit</h4>
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tighter block break-words">${profit}</span>
              <p className="text-indigo-200 text-sm">Return: {percentage}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockProfitInterface;