import React, { useState } from 'react';

const PercentageInterface: React.FC = () => {
  const [val1, setVal1] = useState<string>('15');
  const [val2, setVal2] = useState<string>('250');
  
  const [val3, setVal3] = useState<string>('75');
  const [val4, setVal4] = useState<string>('300');

  const [val5, setVal5] = useState<string>('100');
  const [val6, setVal6] = useState<string>('150');

  const calc1 = ((parseFloat(val1) || 0)/100 * (parseFloat(val2) || 0)).toFixed(2);
  const calc2 = (parseFloat(val4) || 0) === 0 ? "0.00" : ((parseFloat(val3) || 0)/(parseFloat(val4) || 0) * 100).toFixed(2);
  const calc3 = (parseFloat(val5) || 0) === 0 ? "0.00" : (((parseFloat(val6) || 0) - (parseFloat(val5) || 0)) / (parseFloat(val5) || 0) * 100).toFixed(2);

  const cards = [
    {
      title: 'What is % of X',
      icon: 'fa-calculator',
      inputs: [
        { label: 'Percentage', placeholder: '%', value: val1, onChange: setVal1 },
        { label: 'Value', placeholder: 'Value', value: val2, onChange: setVal2 },
      ],
      result: calc1,
      suffix: '',
    },
    {
      title: 'X is what % of Y',
      icon: 'fa-divide',
      inputs: [
        { label: 'Part', placeholder: 'Part', value: val3, onChange: setVal3 },
        { label: 'Total', placeholder: 'Total', value: val4, onChange: setVal4 },
      ],
      result: calc2,
      suffix: '%',
    },
    {
      title: '% Change',
      icon: 'fa-arrow-trend-up',
      inputs: [
        { label: 'From', placeholder: 'From', value: val5, onChange: setVal5 },
        { label: 'To', placeholder: 'To', value: val6, onChange: setVal6 },
      ],
      result: calc3,
      suffix: '%',
      isChange: true,
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-5 flex flex-col hover:border-indigo-100 transition-all group">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                <i className={`fa-solid ${card.icon} text-xs text-indigo-600 group-hover:text-white transition-all`}></i>
              </div>
              <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider">{card.title}</h4>
            </div>

            <div className="space-y-3 flex-grow">
              {card.inputs.map((inp, j) => (
                <div key={j}>
                  <label className="block text-[9px] font-black text-slate-400 uppercase mb-1.5 tracking-widest">{inp.label}</label>
                  <input 
                    type="number" 
                    placeholder={inp.placeholder} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 hover:bg-slate-50 transition-all" 
                    value={inp.value} 
                    onChange={e => inp.onChange(e.target.value)} 
                  />
                </div>
              ))}
            </div>

            <div className="text-center pt-5 border-t border-slate-100">
              <span className={`text-3xl font-black tracking-tight ${
                card.isChange 
                  ? (parseFloat(card.result) >= 0 ? 'text-emerald-600' : 'text-rose-600') 
                  : 'text-indigo-700'
              }`}>
                {card.result}{card.suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PercentageInterface;
