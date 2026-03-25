import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FuelCostInterface: React.FC = () => {
  const [distance, setDistance] = useState<string>('');
  const [efficiency, setEfficiency] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const calculateFuelCost = () => {
    const numDistance = parseFloat(distance) || 0;
    const numEfficiency = parseFloat(efficiency) || 0;
    const numPrice = parseFloat(price) || 0;

    const fuelNeeded = numDistance / numEfficiency;
    const totalCost = fuelNeeded * numPrice;

    return {
      fuel: fuelNeeded.toFixed(2),
      cost: totalCost.toFixed(2)
    };
  };

  const { fuel, cost } = calculateFuelCost();

  return (
    <div className="p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-10">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-6">Fuel Cost Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Trip Distance (miles/km)</label>
                <input
                  type="number"
                  placeholder="Enter distance"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Fuel Efficiency (MPG/L per 100km)</label>
                <input
                  type="number"
                  placeholder="Enter MPG or L/100km"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={efficiency}
                  onChange={(e) => setEfficiency(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Fuel Price per Gallon/Liter ($)</label>
                <input
                  type="number"
                  placeholder="Enter fuel price"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
            <h4 className="text-lg font-bold text-orange-900 mb-3">Related Tools</h4>
            <div className="flex flex-wrap gap-3">
              <Link to="/finance/investment-growth-calculator" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors">
                <i className="fa-solid fa-chart-area mr-2"></i> Investment Growth
              </Link>
              <Link to="/finance/stock-profit-calculator" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors">
                <i className="fa-solid fa-chart-line mr-2"></i> Stock Profit
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h4 className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Total Fuel Cost</h4>
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tighter block break-words">${cost}</span>
              <p className="text-indigo-200 text-sm">Fuel Needed: {fuel} gallons/liters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelCostInterface;