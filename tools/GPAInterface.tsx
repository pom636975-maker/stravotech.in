
import React, { useState } from 'react';

interface Course {
  id: number;
  grade: string;
  credits: string;
}

const GRADE_POINTS: Record<string, number> = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
};

const GRADE_COLORS: Record<string, string> = {
  'A': 'bg-emerald-50 text-emerald-700', 'A-': 'bg-emerald-50 text-emerald-600',
  'B+': 'bg-blue-50 text-blue-700', 'B': 'bg-blue-50 text-blue-600', 'B-': 'bg-blue-50 text-blue-500',
  'C+': 'bg-amber-50 text-amber-700', 'C': 'bg-amber-50 text-amber-600', 'C-': 'bg-amber-50 text-amber-500',
  'D+': 'bg-orange-50 text-orange-700', 'D': 'bg-orange-50 text-orange-600',
  'F': 'bg-red-50 text-red-700'
};

const GPAInterface: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([{ id: Date.now(), grade: 'A', credits: '3' }]);
  const [priorGPA, setPriorGPA] = useState<string>('');
  const [priorCredits, setPriorCredits] = useState<string>('');
  const [isWeighted, setIsWeighted] = useState(false);
  
  const addCourse = () => setCourses([...courses, { id: Date.now(), grade: 'A', credits: '3' }]);
  const removeCourse = (id: number) => setCourses(courses.filter(c => c.id !== id));
  
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
    <div className="p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-10">
          <div className="flex flex-wrap gap-4 items-center justify-between bg-slate-50 p-6 rounded-3xl border border-slate-100">
             <div className="flex items-center space-x-3">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Weighted Scale</span>
                <button 
                  onClick={() => setIsWeighted(!isWeighted)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${isWeighted ? 'bg-indigo-600' : 'bg-slate-300'}`}
                >
                   <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isWeighted ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
             </div>
             <div className="flex gap-4">
                <div className="w-32">
                  <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Prior GPA</label>
                  <input type="text" placeholder="0.00" className="w-full px-3 py-2 rounded-lg border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={priorGPA} onChange={e => setPriorGPA(e.target.value)} />
                </div>
                <div className="w-32">
                  <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Prior Credits</label>
                  <input type="text" placeholder="0" className="w-full px-3 py-2 rounded-lg border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500" value={priorCredits} onChange={e => setPriorCredits(e.target.value)} />
                </div>
             </div>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-xl font-black text-slate-900 flex items-center">
              Semester Courses
            </h3>
          </div>

          <div className="space-y-4 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
            {courses.map((course) => (
              <div key={course.id} className="group flex flex-col sm:flex-row gap-4 sm:items-center bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-all">
                <div className="flex-grow">
                  <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Grade</label>
                  <select 
                    className={`w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none ${GRADE_COLORS[course.grade]}`}
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  >
                    {Object.keys(GRADE_POINTS).map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="w-full sm:w-28">
                  <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Credits</label>
                  <input 
                    type="text" 
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-indigo-500" 
                    value={course.credits}
                    onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                  />
                </div>
                <div className="flex items-end pb-1">
                  <button onClick={() => removeCourse(course.id)} className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all"><i className="fa-solid fa-trash-can"></i></button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={addCourse} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:bg-indigo-50 transition-all">+ Add Course</button>
        </div>
        <div className="lg:col-span-5">
           <div className="sticky top-28 bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h4 className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Cumulative Score</h4>
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tighter block break-words">{calculateGPA()}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GPAInterface;
