import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface FormulaBoxProps {
  formula: string;
  title?: string;
  description?: string;
  isBlock?: boolean;
}

const FormulaBox: React.FC<FormulaBoxProps> = ({ formula, title = 'Mathematical Formula', description, isBlock = true }) => {
  return (
    <div className="bg-[#f8fafc] border border-slate-200 rounded-[2rem] p-8 md:p-10 my-8 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <i className="fa-solid fa-square-root-variable text-sm"></i>
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">{title}</h3>
          {description && <p className="text-slate-500 text-sm font-medium">{description}</p>}
        </div>
      </div>
      
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 flex items-center justify-center overflow-x-auto">
        <div className="text-indigo-700 text-xl font-bold">
          {isBlock ? (
            <BlockMath math={formula} />
          ) : (
            <InlineMath math={formula} />
          )}
        </div>
      </div>
      
      <div className="mt-6 flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
        <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
        <span>Verified by Stravotech Math Labs</span>
      </div>
    </div>
  );
};

export default FormulaBox;
