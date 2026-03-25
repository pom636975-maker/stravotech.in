
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

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Select Date of Birth</label>
            <input 
              type="date" 
              className="w-full p-6 rounded-3xl bg-slate-50 border border-slate-100 text-2xl font-black focus:ring-4 focus:ring-indigo-500/10 outline-none"
              value={birthDate}
              onChange={e => setBirthDate(e.target.value)}
            />
          </div>
          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
             <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Fun Fact</h4>
             <p className="text-sm font-bold text-slate-600 leading-relaxed">You have lived approximately {Math.floor(age.years * 365.25)} days so far. Every second is a gift!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex justify-between items-center group hover:bg-indigo-600 transition-colors">
              <span className="text-xs font-black text-slate-500 group-hover:text-indigo-200 uppercase tracking-widest">Years</span>
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black break-words">{age.years}</span>
           </div>
           <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-100 rounded-[2.5rem] p-10 text-slate-900 flex flex-col justify-center items-center text-center">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Months</span>
                 <span className="text-4xl font-black">{Math.max(0, age.months)}</span>
              </div>
              <div className="bg-slate-100 rounded-[2.5rem] p-10 text-slate-900 flex flex-col justify-center items-center text-center">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Days</span>
                 <span className="text-4xl font-black">{Math.max(0, age.days)}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AgeInterface;
