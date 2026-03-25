
import React, { useState, useEffect } from 'react';

const TimeZoneInterface: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (tz: string) => {
    return time.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const zones = [
    { name: 'Eastern Time (ET)', tz: 'America/New_York', loc: 'Toronto, NYC' },
    { name: 'Central Time (CT)', tz: 'America/Chicago', loc: 'Winnipeg, Dallas' },
    { name: 'Mountain Time (MT)', tz: 'America/Denver', loc: 'Calgary, Denver' },
    { name: 'Pacific Time (PT)', tz: 'America/Los_Angeles', loc: 'Vancouver, LA' },
  ];

  return (
    <div className="p-10 lg:p-16">
      <div className="mb-12 text-center">
         <h3 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">North American Sync</h3>
         <p className="text-slate-500 font-bold">Compare time across all major US & Canada zones instantly.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {zones.map(z => (
          <div key={z.tz} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center group hover:bg-white hover:shadow-2xl hover:shadow-indigo-50 hover:border-indigo-100 transition-all">
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{z.name}</span>
             <span className="text-4xl font-black text-slate-900 mb-4">{formatTime(z.tz)}</span>
             <span className="text-xs font-bold text-slate-400">{z.loc}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white flex items-center justify-between">
         <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center animate-pulse">
               <i className="fa-solid fa-earth-americas"></i>
            </div>
            <span className="text-sm font-bold">Real-time Clock Synchronized</span>
         </div>
         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">UTC Offset Active</span>
      </div>
    </div>
  );
};

export default TimeZoneInterface;
