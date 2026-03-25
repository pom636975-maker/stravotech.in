
import React, { useState } from 'react';

const UnitConverterInterface: React.FC = () => {
  const [type, setType] = useState('length');
  const [value, setValue] = useState(1);
  const [from, setFrom] = useState('meter');
  const [to, setTo] = useState('feet');

  const conversions: any = {
    length: {
      meter: 1, feet: 3.28084, inch: 39.3701, kilometer: 0.001, mile: 0.000621371
    },
    weight: {
      kilogram: 1, pound: 2.20462, gram: 1000, ounce: 35.274
    }
  };

  const calculate = () => {
    if (type === 'temperature') {
      if (from === 'celsius' && to === 'fahrenheit') return (value * 9/5) + 32;
      if (from === 'fahrenheit' && to === 'celsius') return (value - 32) * 5/9;
      return value;
    }
    const valInBase = value / conversions[type][from];
    return valInBase * conversions[type][to];
  };

  const result = calculate().toFixed(4);

  return (
    <div className="p-10 lg:p-16 space-y-12">
      <div className="flex justify-center space-x-4">
        {['length', 'weight', 'temperature'].map(t => (
          <button 
            key={t}
            onClick={() => { setType(t); setFrom(t === 'temperature' ? 'celsius' : Object.keys(conversions[t])[0]); setTo(t === 'temperature' ? 'fahrenheit' : Object.keys(conversions[t])[1]); }}
            className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest border transition-all ${type === t ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-500'}`}
          >{t}</button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <input 
            type="number" 
            className="w-full text-5xl font-black text-slate-900 bg-transparent border-b-4 border-slate-100 focus:border-indigo-600 outline-none pb-4"
            value={value}
            onChange={e => setValue(parseFloat(e.target.value) || 0)}
          />
          <div className="grid grid-cols-2 gap-4">
            <select className="p-4 rounded-xl border border-slate-200 font-bold" value={from} onChange={e => setFrom(e.target.value)}>
              {type === 'temperature' ? ['celsius', 'fahrenheit'].map(u => <option key={u} value={u}>{u}</option>) : Object.keys(conversions[type]).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
            <select className="p-4 rounded-xl border border-slate-200 font-bold" value={to} onChange={e => setTo(e.target.value)}>
              {type === 'temperature' ? ['celsius', 'fahrenheit'].map(u => <option key={u} value={u}>{u}</option>) : Object.keys(conversions[type]).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white text-center">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Converted Result</span>
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-indigo-400 mb-6 break-words">{result}</div>
          <button onClick={() => navigator.clipboard.writeText(result)} className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-black uppercase tracking-widest transition-colors">Copy Result</button>
        </div>
      </div>
    </div>
  );
};

export default UnitConverterInterface;
