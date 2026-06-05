import React, { useState } from 'react';

const HealthCalculatorInterface: React.FC = () => {
  const [age, setAge] = useState<string>('25');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('175');
  const [gender, setGender] = useState('male');

  const numAge = parseFloat(age) || 0;
  const numWeight = parseFloat(weight) || 0;
  const numHeight = parseFloat(height) || 0;

  const bmi = numHeight > 0 ? (numWeight / ((numHeight / 100) ** 2)).toFixed(1) : "0.0";
  const bmr = gender === 'male' 
    ? (10 * numWeight) + (6.25 * numHeight) - (5 * numAge) + 5
    : (10 * numWeight) + (6.25 * numHeight) - (5 * numAge) - 161;

  const getBMICategory = (val: number) => {
    if (val === 0) return { label: 'Enter Stats', color: 'text-slate-400' };
    if (val < 18.5) return { label: 'Underweight', color: 'text-amber-500' };
    if (val < 25) return { label: 'Normal weight', color: 'text-emerald-500' };
    if (val < 30) return { label: 'Overweight', color: 'text-orange-500' };
    return { label: 'Obese', color: 'text-rose-500' };
  };

  const category = getBMICategory(parseFloat(bmi));

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Input */}
        <div className="flex-1 space-y-6 w-full min-w-0">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Body Stats</h3>

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setGender('male')} 
                className={`py-3 rounded-xl font-black uppercase text-xs tracking-widest border transition-all ${gender === 'male' ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-slate-50 text-slate-400 border-slate-200 hover:border-indigo-200'}`}
              >
                <i className="fa-solid fa-mars mr-2"></i>Male
              </button>
              <button 
                onClick={() => setGender('female')} 
                className={`py-3 rounded-xl font-black uppercase text-xs tracking-widest border transition-all ${gender === 'female' ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-slate-50 text-slate-400 border-slate-200 hover:border-indigo-200'}`}
              >
                <i className="fa-solid fa-venus mr-2"></i>Female
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Age</label>
                <input type="number" placeholder="25" className="w-full px-3 py-3 rounded-xl bg-slate-50/50 border border-slate-200 font-bold text-sm text-center outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 hover:bg-slate-50 transition-all" value={age} onChange={e => setAge(e.target.value)} />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Weight (kg)</label>
                <input type="number" placeholder="70" className="w-full px-3 py-3 rounded-xl bg-slate-50/50 border border-slate-200 font-bold text-sm text-center outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 hover:bg-slate-50 transition-all" value={weight} onChange={e => setWeight(e.target.value)} />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Height (cm)</label>
                <input type="number" placeholder="175" className="w-full px-3 py-3 rounded-xl bg-slate-50/50 border border-slate-200 font-bold text-sm text-center outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 hover:bg-slate-50 transition-all" value={height} onChange={e => setHeight(e.target.value)} />
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
                <i className="fa-solid fa-heart-pulse"></i> BMI Index
              </span>
              <div className="text-7xl sm:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-100">
                {bmi}
              </div>
              <p className={`text-xs font-black uppercase tracking-wider ${category.color}`}>{category.label}</p>
            </div>

            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-8 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Daily BMR</span>
                <span className="text-[10px] text-slate-500 font-medium">Maintenance Calories</span>
              </div>
              <span className="text-3xl font-black text-indigo-600">{bmr.toFixed(0)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCalculatorInterface;
