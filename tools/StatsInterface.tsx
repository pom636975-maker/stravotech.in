
import React, { useState } from 'react';

const StatsInterface: React.FC = () => {
  const [data, setData] = useState('10, 20, 30, 40, 50, 60');

  const calculate = () => {
    const nums = data.split(/[,\s]+/).map(n => parseFloat(n)).filter(n => !isNaN(n));
    if (nums.length === 0) return null;

    const mean = nums.reduce((a, b) => a + b) / nums.length;
    const sorted = [...nums].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0 ? (sorted[sorted.length/2 - 1] + sorted[sorted.length/2]) / 2 : sorted[Math.floor(sorted.length/2)];
    
    const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / nums.length;
    const stdDev = Math.sqrt(variance);

    return { mean, median, stdDev, count: nums.length, min: sorted[0], max: sorted[sorted.length-1] };
  };

  const stats = calculate();

  return (
    <div className="p-10 lg:p-16 space-y-12">
      <div>
        <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Input Data Set (Comma Separated)</label>
        <textarea 
          className="w-full h-32 p-6 rounded-3xl bg-slate-50 border border-slate-100 text-xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none"
          value={data}
          onChange={e => setData(e.target.value)}
        />
      </div>

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom duration-500">
           {[
             { label: 'Mean', value: stats.mean.toFixed(2), color: 'text-indigo-600' },
             { label: 'Median', value: stats.median.toFixed(2), color: 'text-slate-900' },
             { label: 'Std. Deviation', value: stats.stdDev.toFixed(2), color: 'text-emerald-600' },
             { label: 'Count', value: stats.count, color: 'text-slate-400' },
             { label: 'Minimum', value: stats.min, color: 'text-red-500' },
             { label: 'Maximum', value: stats.max, color: 'text-indigo-500' }
           ].map(s => (
             <div key={s.label} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{s.label}</span>
                <span className={`text-3xl font-black ${s.color}`}>{s.value}</span>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};

export default StatsInterface;
