
import React from 'react';
import { Link } from 'react-router-dom';
import { ToolMetadata } from '../types';

interface ToolCardProps {
  tool: ToolMetadata;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Link 
      to={tool.path} 
      className="group block p-6 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <i className={`fa-solid ${tool.icon} text-xl`}></i>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.name}</h3>
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
        {tool.description}
      </p>
      <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        Open Tool <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
      </div>
    </Link>
  );
};

export default ToolCard;
