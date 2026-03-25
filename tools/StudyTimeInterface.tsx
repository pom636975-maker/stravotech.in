
import React, { useState } from 'react';

const StudyTimeInterface: React.FC = () => {
  const [pages, setPages] = useState(50);
  const [complexity, setComplexity] = useState(2); // 1: Easy, 2: Med, 3: Hard

  const calculateHours = () => {
    const pageRate = 6; // minutes per page base
    const multiplier = [0.8, 1, 1.5, 2.5][complexity];
    const totalMinutes = pages * pageRate * multiplier;
    const hours = totalMinutes / 60;
    return hours.toFixed(1);
  };

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Amount to Study (Pages/Chapters)</label>
            <input 
              type="number" 
              className="w-full p-5 rounded-3xl bg-slate-50 border border-slate-100 text-3xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none"
              value={pages}
              onChange={e => setPages(parseInt(e.target.value) || 0)}
            />
          </div>
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-6">Subject Complexity</label>
            <div className="grid grid-cols-3 gap-4">
               {[
                 { label: 'Easy', color: 'emerald' },
                 { label: 'Moderate', color: 'amber' },
                 { label: 'Advanced', color: 'red' }
               ].map((c, idx) => (
                 <button 
                   key={c.label}
                   onClick={() => setComplexity(idx + 1)}
                   className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center justify-center space-y-2 ${complexity === idx + 1 ? `bg-indigo-600 border-indigo-600 text-white shadow-lg` : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
                 >
                    <span className="text-[10px] font-black uppercase tracking-widest">{c.label}</span>
                 </button>
               ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-center text-center">
           <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto mb-8">
              <i className="fa-solid fa-hourglass-half text-2xl"></i>
           </div>
           <span className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-4">Required Focus Time</span>
           <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-indigo-400 mb-6 break-words">{calculateHours()} <span className="text-lg md:text-xl text-slate-600">hrs</span></span>
           <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
             "Study smart, not just long." Includes 5-minute breaks every 30 minutes of deep work.
           </p>
        </div>
      </div>
    </div>
  );
};

export default StudyTimeInterface;
