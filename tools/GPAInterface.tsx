
import React, { useState } from 'react';

interface Course {
  id: number;
  name?: string;
  grade: string;
  credits: string;
}

const GRADE_POINTS: Record<string, number> = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
};

const GRADE_COLORS: Record<string, string> = {
  'A': 'bg-emerald-50 text-emerald-700 border-emerald-200/50 hover:bg-emerald-100/30',
  'A-': 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100/30',
  'B+': 'bg-blue-50 text-blue-700 border-blue-200/50 hover:bg-blue-100/30',
  'B': 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100/30',
  'B-': 'bg-blue-50 text-blue-500 border-blue-100 hover:bg-blue-100/30',
  'C+': 'bg-amber-50 text-amber-700 border-amber-200/50 hover:bg-amber-100/30',
  'C': 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100/30',
  'C-': 'bg-amber-50 text-amber-500 border-amber-100 hover:bg-amber-100/30',
  'D+': 'bg-orange-50 text-orange-700 border-orange-200/50 hover:bg-orange-100/30',
  'D': 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-100/30',
  'F': 'bg-rose-50 text-rose-700 border-rose-200/50 hover:bg-rose-100/30'
};

const GPAInterface: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Semester Course 1', grade: 'A', credits: '3' },
    { id: 2, name: 'Semester Course 2', grade: 'B+', credits: '4' }
  ]);
  const [priorGPA, setPriorGPA] = useState<string>('');
  const [priorCredits, setPriorCredits] = useState<string>('');
  const [isWeighted, setIsWeighted] = useState(false);
  
  const addCourse = () => {
    const nextId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    setCourses([...courses, { id: nextId, name: `Semester Course ${nextId}`, grade: 'A', credits: '3' }]);
  };
  const removeCourse = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
  };
  
  const updateCourse = (id: number, field: keyof Course, value: any) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const calculateGPA = () => {
    const numPriorGPA = parseFloat(priorGPA) || 0;
    const numPriorCredits = parseFloat(priorCredits) || 0;
    
    let totalPoints = (numPriorGPA * numPriorCredits);
    let totalCredits = numPriorCredits;
    
    courses.forEach(c => {
      let points = GRADE_POINTS[c.grade] || 0;
      if (isWeighted && points > 0) points += 1.0;
      const numCredits = parseFloat(c.credits) || 0;
      totalPoints += points * numCredits;
      totalCredits += numCredits;
    });
    
    if (totalCredits === 0) return "0.00";
    const res = (totalPoints / totalCredits);
    return isFinite(res) ? res.toFixed(2) : "0.00";
  };

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 w-full">
        {/* Input Controls */}
        <div className="flex-1 space-y-6 w-full min-w-0">
          {/* Prior Statistics Settings */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
             <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Weighted Scale</span>
                  <span className="text-xs text-slate-500 font-medium">Adds +1.0 point to all passing grades</span>
                </div>
                <button 
                  onClick={() => setIsWeighted(!isWeighted)}
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 outline-none ${isWeighted ? 'bg-indigo-600 shadow-lg shadow-indigo-200' : 'bg-slate-200'}`}
                >
                   <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${isWeighted ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
             </div>
             
             <div className="flex gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 md:justify-end">
                <div className="flex-1 md:w-28">
                  <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Prior GPA</label>
                  <input 
                    type="number" 
                    step="0.01"
                    placeholder="0.00" 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 hover:bg-slate-50 transition-all text-center" 
                    value={priorGPA} 
                    onChange={e => setPriorGPA(e.target.value)} 
                  />
                </div>
                <div className="flex-1 md:w-28">
                  <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Prior Credits</label>
                  <input 
                    type="number" 
                    placeholder="0" 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 hover:bg-slate-50 transition-all text-center" 
                    value={priorCredits} 
                    onChange={e => setPriorCredits(e.target.value)} 
                  />
                </div>
             </div>
          </div>

          {/* Courses List Section */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-black text-slate-800 tracking-tight">
                Semester Courses
              </h3>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{courses.length} Active</span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className="flex flex-col sm:flex-row items-center gap-3 bg-slate-50/40 p-4 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-white transition-all shadow-sm group"
                >
                  <div className="w-full sm:flex-[4] min-w-0">
                    <label className="block text-[9px] font-black text-slate-400 uppercase mb-1.5 tracking-widest">Course Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Mathematics II"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white" 
                      value={course.name || ''}
                      onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    />
                  </div>
                  
                  <div className="w-full sm:flex-[2] min-w-0">
                    <label className="block text-[9px] font-black text-slate-400 uppercase mb-1.5 tracking-widest">Grade</label>
                    <div className="relative">
                      <select 
                        className={`w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border font-black text-sm outline-none shadow-sm transition-colors cursor-pointer ${GRADE_COLORS[course.grade] || 'bg-white text-slate-700 border-slate-200'}`}
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                      >
                        {Object.keys(GRADE_POINTS).map(g => (
                          <option key={g} value={g} className="bg-white text-slate-800 font-bold">{g} ({GRADE_POINTS[g].toFixed(1)})</option>
                        ))}
                      </select>
                      <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] opacity-65"></i>
                    </div>
                  </div>
                  
                  <div className="w-full sm:flex-[1.5] min-w-0">
                    <label className="block text-[9px] font-black text-slate-400 uppercase mb-1.5 tracking-widest">Credits</label>
                    <input 
                      type="number" 
                      placeholder="3"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white text-center" 
                      value={course.credits}
                      onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                    />
                  </div>
                  
                  <div className="flex-none pt-4 sm:pt-4 sm:pb-0">
                    <button 
                      onClick={() => removeCourse(course.id)} 
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-500 border border-slate-200/55 hover:border-rose-100 transition-all shadow-sm"
                      title="Remove Course"
                    >
                      <i className="fa-solid fa-trash-can text-xs"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={addCourse} 
              className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 hover:text-indigo-600 hover:border-indigo-500 hover:bg-indigo-50/30 transition-all font-bold text-sm flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-plus text-xs"></i> Add Another Course
            </button>
          </div>
        </div>
        
        {/* Cumulative Score Widget */}
        <div className="w-full lg:w-80 xl:w-96 flex-none">
           <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-[2rem] p-8 sm:p-10 text-white shadow-xl shadow-indigo-100 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 text-center w-full space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-indigo-200 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-white/5 mx-auto">
                  <i className="fa-solid fa-graduation-cap"></i> Cumulative Score
                </span>
                
                <div className="space-y-1">
                  <div className="text-7xl sm:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-100">
                    {calculateGPA()}
                  </div>
                  <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider">GPA / 4.0 Scale</p>
                </div>
                
                <div className="pt-6 border-t border-white/10 w-full text-left space-y-2 text-xs font-medium text-indigo-100">
                  <div className="flex justify-between">
                    <span>Total Courses Analyzed:</span>
                    <span className="font-bold text-white">{courses.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Credit Hours:</span>
                    <span className="font-bold text-white">
                      {courses.reduce((acc, curr) => acc + (parseFloat(curr.credits) || 0), 0) + (parseFloat(priorCredits) || 0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative backgrounds */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute top-8 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GPAInterface;
