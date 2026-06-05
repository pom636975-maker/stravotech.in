import React, { useState } from 'react';

const AgeInterface: React.FC = () => {
  const [birthDate, setBirthDate] = useState('1995-01-01');

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += (months < 0 ? 12 : 0);
    }
    
    return { years, months, days };
  };

  const age = calculateAge();
  const totalDays = Math.floor(age.years * 365.25);

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Input */}
        <div className="flex-1 space-y-6 w-full min-w-0">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Date of Birth</h3>
            <input 
              type="date" 
              className="w-full px-4 py-4 rounded-xl bg-slate-50/50 border border-slate-200 text-lg font-bold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none hover:bg-slate-50 transition-all"
              value={birthDate}
              onChange={e => setBirthDate(e.target.value)}
            />
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-none border border-amber-100">
                <i className="fa-solid fa-lightbulb text-amber-500 text-sm"></i>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-700 mb-1">Fun Fact</h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">You have lived approximately <span className="font-black text-indigo-600">{totalDays.toLocaleString()}</span> days so far. Every second is a gift!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="w-full lg:w-80 xl:w-96 flex-none space-y-4">
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-[2rem] p-8 sm:p-10 text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-white/5">
                <i className="fa-solid fa-cake-candles"></i> Your Age
              </span>
              <div className="text-7xl sm:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-100">
                {age.years}
              </div>
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider">Years Old</p>
            </div>

            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-8 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Months</span>
              <span className="text-3xl font-black text-slate-800">{Math.max(0, age.months)}</span>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Days</span>
              <span className="text-3xl font-black text-slate-800">{Math.max(0, age.days)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeInterface;
