
import React, { useState } from 'react';

const WordCounterInterface: React.FC = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 225); // Average adult reading speed
  const speakingTime = Math.ceil(wordCount / 140); // Average speaking speed

  const metrics = [
    { label: 'Words', value: wordCount, icon: 'fa-font' },
    { label: 'Characters', value: charCount, icon: 'fa-text-width' },
    { label: 'Sentences', value: sentenceCount, icon: 'fa-paragraph' },
    { label: 'Read Time', value: `${readingTime} min`, icon: 'fa-clock' },
  ];

  return (
    <div className="p-8 lg:p-12 space-y-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(m => (
          <div key={m.label} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:shadow-indigo-50 hover:border-indigo-100 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-indigo-500 group-hover:scale-110 transition-transform">
              <i className={`fa-solid ${m.icon} text-sm`}></i>
            </div>
            <span className="block text-3xl font-black text-slate-900 mb-1">{m.value}</span>
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="relative">
        <textarea 
          className="w-full h-96 p-8 bg-slate-50/50 border border-slate-200 rounded-[2rem] focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none font-medium leading-relaxed custom-scrollbar"
          placeholder="Start typing or paste your content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="absolute bottom-6 right-8 flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
           <span>Live Analysis</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 border-t border-slate-100">
        <div className="flex items-center space-x-6">
           <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div>
                <span className="block text-xs font-black text-slate-400 uppercase leading-none">Speaking Time</span>
                <span className="text-sm font-bold text-slate-700">{speakingTime} minutes</span>
              </div>
           </div>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigator.clipboard.writeText(text)}
            className="px-6 py-3 rounded-xl text-slate-600 font-bold hover:bg-slate-100 transition-all flex items-center"
          >
            <i className="fa-solid fa-copy mr-2"></i> Copy
          </button>
          <button 
            onClick={() => setText('')}
            className="px-6 py-3 rounded-xl bg-red-50 text-red-600 font-bold hover:bg-red-500 hover:text-white transition-all flex items-center"
          >
            <i className="fa-solid fa-trash-can mr-2"></i> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordCounterInterface;
