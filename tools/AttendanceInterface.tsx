import React, { useState } from 'react';

const AttendanceInterface: React.FC = () => {
  const [totalClasses, setTotalClasses] = useState<string>('');
  const [attendedClasses, setAttendedClasses] = useState<string>('');
  const [targetPercentage, setTargetPercentage] = useState<string>('75');

  const calculateAttendance = () => {
    const total = parseInt(totalClasses) || 0;
    const attended = parseInt(attendedClasses) || 0;
    const target = parseFloat(targetPercentage) || 75;

    if (total === 0) return { current: 0, status: 'No classes yet', classesNeeded: 0, classesMissaable: 0 };

    const current = (attended / total) * 100;
    
    let classesNeeded = 0;
    if (current < target) {
      classesNeeded = Math.ceil((target * total - 100 * attended) / (100 - target));
    }

    let classesMissaable = 0;
    if (current >= target) {
      classesMissaable = Math.floor((100 * attended / target) - total);
    }

    return {
      current: current.toFixed(1),
      status: current >= target ? 'Safe' : 'Shortage',
      classesNeeded: classesNeeded > 0 ? classesNeeded : 0,
      classesMissaable: classesMissaable > 0 ? classesMissaable : 0,
    };
  };

  const { current, status, classesNeeded, classesMissaable } = calculateAttendance();

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Input Form */}
        <div className="flex-1 space-y-6 w-full min-w-0">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-black text-slate-800 tracking-tight">Attendance Tracker</h3>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Live Calc</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Total Classes Conducted</label>
                <input
                  type="number"
                  placeholder="e.g. 50"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm bg-slate-50/50 hover:bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  value={totalClasses}
                  onChange={(e) => setTotalClasses(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Classes You Attended</label>
                <input
                  type="number"
                  placeholder="e.g. 35"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm bg-slate-50/50 hover:bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  value={attendedClasses}
                  onChange={(e) => setAttendedClasses(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Target Percentage (%)</label>
                <div className="relative">
                  <select
                    className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white cursor-pointer transition-all"
                    value={targetPercentage}
                    onChange={(e) => setTargetPercentage(e.target.value)}
                  >
                    <option value="75">75% (Standard)</option>
                    <option value="80">80%</option>
                    <option value="85">85%</option>
                    <option value="90">90%</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-slate-400"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Status Alert */}
          <div className={`p-5 sm:p-6 rounded-2xl border transition-colors ${status === 'Safe' ? 'bg-emerald-50/50 border-emerald-100' : 'bg-rose-50/50 border-rose-100'}`}>
            <h4 className={`text-sm font-black flex items-center gap-2.5 ${status === 'Safe' ? 'text-emerald-800' : 'text-rose-800'} mb-2`}>
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${status === 'Safe' ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                <i className={`fa-solid ${status === 'Safe' ? 'fa-check' : 'fa-triangle-exclamation'} text-xs ${status === 'Safe' ? 'text-emerald-600' : 'text-rose-600'}`}></i>
              </div>
              {status === 'Safe' ? 'You are Safe!' : 'Attendance Shortage!'}
            </h4>
            <p className={`text-xs font-medium leading-relaxed pl-[42px] ${status === 'Safe' ? 'text-emerald-700' : 'text-rose-700'}`}>
              {status === 'Safe' 
                ? `You can skip up to ${classesMissaable} more classes while maintaining ${targetPercentage}% attendance.`
                : `You need to attend the next ${classesNeeded} classes consecutively to reach your ${targetPercentage}% goal.`}
            </p>
          </div>
        </div>

        {/* Result Widget */}
        <div className="w-full lg:w-80 xl:w-96 flex-none">
          <div className={`rounded-[2rem] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] transition-colors duration-500 ${status === 'Safe' ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 shadow-indigo-100' : 'bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 shadow-rose-100'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 text-center w-full space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-white/5 mx-auto">
                <i className="fa-solid fa-chart-line"></i> Current Attendance
              </span>
              
              <div className="space-y-1">
                <div className="text-7xl sm:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">
                  {current}%
                </div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Target: {targetPercentage}%</p>
              </div>
              
              <div className="pt-6 border-t border-white/10 w-full text-left space-y-2 text-xs font-medium text-white/70">
                <div className="flex justify-between">
                  <span>Classes Attended:</span>
                  <span className="font-bold text-white">{attendedClasses || 0} / {totalClasses || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>{status === 'Safe' ? 'Can Skip:' : 'Must Attend:'}</span>
                  <span className="font-bold text-white">{status === 'Safe' ? classesMissaable : classesNeeded} classes</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-8 -left-12 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceInterface;
