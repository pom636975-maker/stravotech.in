
import React, { useState } from 'react';

const SalaryHourlyInterface: React.FC<{ initialType: string }> = ({ initialType }) => {
  const [isSalaryToHourly, setIsSalaryToHourly] = useState(initialType === 'salary-to-hourly');
  const [amount, setAmount] = useState<string>(isSalaryToHourly ? '65000' : '35');
  const hoursPerWeek = 40;

  const calculate = () => {
    const numAmount = parseFloat(amount) || 0;
    if (isSalaryToHourly) {
      const hourly = numAmount / (hoursPerWeek * 52);
      return { 
        hourly: hourly.toFixed(2),
        weekly: (hourly * hoursPerWeek).toFixed(2),
        monthly: (numAmount / 12).toFixed(2)
      };
    } else {
      const annual = numAmount * hoursPerWeek * 52;
      return {
        annual: annual.toLocaleString(),
        weekly: (numAmount * hoursPerWeek).toLocaleString(),
        monthly: (annual / 12).toLocaleString()
      };
    }
  };

  const results = calculate();

  return (
    <div className="p-10 lg:p-16">
      <div className="flex justify-center mb-12">
        <div className="bg-slate-100 p-2 rounded-2xl flex items-center space-x-2">
          <button 
            onClick={() => { setIsSalaryToHourly(true); setAmount('65000'); }}
            className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${isSalaryToHourly ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
          >Salary to Hourly</button>
          <button 
            onClick={() => { setIsSalaryToHourly(false); setAmount('35'); }}
            className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${!isSalaryToHourly ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
          >Hourly to Salary</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest block">
            {isSalaryToHourly ? 'Enter Annual Salary ($)' : 'Enter Hourly Rate ($)'}
          </label>
          <input 
            type="text" 
            placeholder="0.00"
            className="w-full text-5xl font-black text-indigo-600 bg-transparent border-b-4 border-slate-100 focus:border-indigo-600 outline-none pb-4"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <p className="text-sm font-bold text-slate-400 italic">Based on a standard {hoursPerWeek} hour work week (2,080 hours/year).</p>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-10 text-white space-y-8">
          {isSalaryToHourly ? (
            <>
              <div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Hourly Equivalent</span>
                <div className="text-4xl font-black text-indigo-400">${results.hourly} /hr</div>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
                <div>
                  <span className="text-[10px] font-black text-slate-500 uppercase">Weekly</span>
                  <div className="text-xl font-bold">${results.weekly}</div>
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-500 uppercase">Monthly</span>
                  <div className="text-xl font-bold">${results.monthly}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Annual Equivalent</span>
                <div className="text-4xl font-black text-emerald-400">${results.annual} /yr</div>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
                <div>
                  <span className="text-[10px] font-black text-slate-500 uppercase">Weekly</span>
                  <div className="text-xl font-bold">${results.weekly}</div>
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-500 uppercase">Monthly</span>
                  <div className="text-xl font-bold">${results.monthly}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalaryHourlyInterface;
