
import React, { useState } from 'react';

const BinaryConverterInterface: React.FC = () => {
  const [decimal, setDecimal] = useState('100');
  const [binary, setBinary] = useState('1100100');
  const [hex, setHex] = useState('64');

  const fromDecimal = (val: string) => {
    const num = parseInt(val);
    if (!isNaN(num)) {
      setDecimal(val);
      setBinary(num.toString(2));
      setHex(num.toString(16).toUpperCase());
    } else {
      setDecimal(''); setBinary(''); setHex('');
    }
  };

  const fromBinary = (val: string) => {
    const num = parseInt(val, 2);
    if (!isNaN(num)) {
      setDecimal(num.toString(10));
      setBinary(val);
      setHex(num.toString(16).toUpperCase());
    } else {
      setBinary(val);
    }
  };

  const fromHex = (val: string) => {
    const num = parseInt(val, 16);
    if (!isNaN(num)) {
      setDecimal(num.toString(10));
      setBinary(num.toString(2));
      setHex(val.toUpperCase());
    } else {
      setHex(val);
    }
  };

  return (
    <div className="p-10 lg:p-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
         <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center space-y-6 group hover:bg-white hover:shadow-xl transition-all">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Decimal (Base 10)</span>
            <input type="text" className="w-full text-center text-4xl font-black bg-transparent outline-none text-indigo-600" value={decimal} onChange={e => fromDecimal(e.target.value)} />
            <p className="text-[10px] font-bold text-slate-300 uppercase">Standard Numeric</p>
         </div>
         <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center space-y-6 group hover:bg-white hover:shadow-xl transition-all">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Binary (Base 2)</span>
            <input type="text" className="w-full text-center text-2xl font-black bg-transparent outline-none text-slate-900 break-all" value={binary} onChange={e => fromBinary(e.target.value)} />
            <p className="text-[10px] font-bold text-slate-300 uppercase">Computer Language</p>
         </div>
         <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center space-y-6 group hover:bg-white hover:shadow-xl transition-all">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hexadecimal (Base 16)</span>
            <input type="text" className="w-full text-center text-4xl font-black bg-transparent outline-none text-emerald-600" value={hex} onChange={e => fromHex(e.target.value)} />
            <p className="text-[10px] font-bold text-slate-300 uppercase">Memory Addressing</p>
         </div>
      </div>
    </div>
  );
};

export default BinaryConverterInterface;
