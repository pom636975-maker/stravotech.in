import React from 'react';

interface ExampleRow {
  input: string;
  calculation: string;
  result: string;
}

interface SolvedExamplesProps {
  title?: string;
  examples: ExampleRow[];
  toolName: string;
}

const SolvedExamples: React.FC<SolvedExamplesProps> = ({ 
  title = 'Real-World Solved Examples', 
  examples,
  toolName 
}) => {
  return (
    <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] bg-white shadow-sm">
      <div className="bg-indigo-600 p-8 text-white">
        <h3 className="text-2xl font-black tracking-tight">{title}</h3>
        <p className="text-indigo-100 text-sm mt-1 opacity-80">Common {toolName} scenarios solved for students.</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Scenario / Input</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Step-by-Step Logic</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {examples.map((ex, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 font-bold text-slate-900">{ex.input}</td>
                <td className="px-6 py-5 text-sm font-medium text-slate-600 italic">{ex.calculation}</td>
                <td className="px-6 py-5 text-right font-black text-indigo-600">{ex.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
        <span>* Based on standard 2026 Board/Exam patterns.</span>
        <span className="flex items-center">
          <i className="fa-solid fa-share-nodes mr-2"></i> Solve your own calculation above
        </span>
      </div>
    </div>
  );
};

export default SolvedExamples;
