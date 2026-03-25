
import React, { useState } from 'react';

const QRCodeInterface: React.FC = () => {
  const [text, setText] = useState('https://stravotech.com');

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;

  return (
    <div className="p-10 lg:p-16">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
           <div>
              <label className="text-sm font-black text-slate-700 uppercase tracking-widest block mb-4">Content to Encode</label>
              <textarea 
                className="w-full h-40 p-6 rounded-3xl bg-slate-50 border border-slate-100 text-lg font-medium focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter URL or Text..."
              />
              <p className="mt-4 text-xs font-bold text-slate-400 italic">QR Code updates in real-time as you type.</p>
           </div>
           
           <button 
             onClick={() => {
                const link = document.createElement('a');
                link.href = qrUrl;
                link.download = 'stravotech-qr.png';
                link.click();
             }}
             className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all uppercase tracking-widest text-xs"
           >
             Download QR Code
           </button>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-16 flex items-center justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-indigo-600/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
           <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img src={qrUrl} alt="QR Code" className="w-64 h-64" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeInterface;
