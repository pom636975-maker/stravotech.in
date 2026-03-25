
import React, { useState } from 'react';

const HealthCalculatorInterface: React.FC = () => {
  const [age, setAge] = useState<string>('25');
  const [weight, setWeight] = useState<string>('70'); // kg
  const [height, setHeight] = useState<string>('175'); // cm
  const [gender, setGender] = useState('male');

  const numAge = parseFloat(age) || 0;
  const numWeight = parseFloat(weight) || 0;
  const numHeight = parseFloat(height) || 0;

  const bmi = numHeight > 0 ? (numWeight / ((numHeight / 100) ** 2)).toFixed(1) : "0.0";
  const bmr = gender === 'male' 
    ? (10 * numWeight) + (6.25 * numHeight) - (5 * numAge) + 5
    : (10 * numWeight) + (6.25 * numHeight) - (5 * numAge) - 161;

  const getBMICategory = (val: number) => {
    if (val === 0) return 'Enter Stats';
    if (val < 18.5) return 'Underweight';
    if (val < 25) return 'Normal weight';
    if (val < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="p-10 lg:p-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setGender('male')} className={`p-4 rounded-2xl font-black uppercase text-xs tracking-widest border transition-all ${gender === 'male' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400 border-slate-200'}`}>Male</button>
            <button onClick={() => setGender('female')} className={`p-4 rounded-2xl font-black uppercase text-xs tracking-widest border transition-all ${gender === 'female' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400 border-slate-200'}`}>Female</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
             <div>
               <label className="text-[10px] font-black text-slate-400 uppercase block mb-2">Age</label>
               <input type="text" placeholder="25" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 font-bold" value={age} onChange={e => setAge(e.target.value)} />
             </div>
             <div>
               <label className="text-[10px] font-black text-slate-400 uppercase block mb-2">Weight (kg)</label>
               <input type="text" placeholder="70" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 font-bold" value={weight} onChange={e => setWeight(e.target.value)} />
             </div>
             <div>
               <label className="text-[10px] font-black text-slate-400 uppercase block mb-2">Height (cm)</label>
               <input type="text" placeholder="175" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 font-bold" value={height} onChange={e => setHeight(e.target.value)} />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex justify-between items-center group">
              <div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">BMI Index</span>
                <p className="text-[10px] text-indigo-400 font-bold uppercase mt-1">{getBMICategory(parseFloat(bmi))}</p>
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black break-words">{bmi}</span>
           </div>
           <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white flex justify-between items-center group">
              <div>
                <span className="text-xs font-black text-indigo-200 uppercase tracking-widest">Daily BMR</span>
                <p className="text-[10px] text-white/60 font-bold uppercase mt-1">Maintenance Calories</p>
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black break-words">{bmr.toFixed(0)}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCalculatorInterface;
