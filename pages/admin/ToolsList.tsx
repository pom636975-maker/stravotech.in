
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';
import { toggleToolStatus } from '../../services/firebaseService';
import { AdminStore } from '../../services/AdminStore';

const ToolsList: React.FC = () => {
  const [tools, setTools] = useState(AdminStore.getMergedTools());
  const [search, setSearch] = useState('');
  const [user] = useAuthState(auth);

  const toggleStatus = async (id: string, current: string) => {
    if (!user?.email) {
      alert('You must be logged in');
      return;
    }

    const nextStatus = current === 'ON' ? 'OFF' : 'ON';
    const isEnabled = nextStatus === 'ON';

    try {
      // Update Firestore via service
      await toggleToolStatus(id, isEnabled, user.email);

      // Update local state
      AdminStore.updateTool(id, { status: nextStatus as 'ON' | 'OFF' });
      setTools(AdminStore.getMergedTools());
    } catch (error) {
      console.error('Error toggling tool:', error);
      alert(`Failed to ${isEnabled ? 'enable' : 'disable'} tool: ${error}`);
    }
  };

  const filtered = tools.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden animate-in fade-in duration-500">
      <div className="p-10 border-b border-slate-100 flex justify-between items-center">
         <h3 className="text-xl font-black text-slate-900">Tool Library Management</h3>
         <div className="relative w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Filter tools..."
              className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
         </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tool Name</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">URL Slug</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">SEO Status</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Visibility</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map(tool => (
              <tr key={tool.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-10 py-6">
                   <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                         <i className={`fa-solid ${tool.icon}`}></i>
                      </div>
                      <span className="font-bold text-slate-900">{tool.name}</span>
                   </div>
                </td>
                <td className="px-6 py-6 text-xs font-mono text-slate-400">/{tool.id}</td>
                <td className="px-6 py-6">
                   <div className="flex space-x-2">
                      <span className={`w-2 h-2 rounded-full ${tool.seoTitle ? 'bg-emerald-500' : 'bg-amber-400'}`}></span>
                      <span className="text-[10px] font-black text-slate-400 uppercase">
                        {tool.seoTitle ? 'Optimized' : 'Default'}
                      </span>
                   </div>
                </td>
                <td className="px-6 py-6 text-center">
                   <button 
                     onClick={() => toggleStatus(tool.id, tool.status || 'ON')}
                     className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${tool.status === 'OFF' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-600'}`}
                   >
                     {tool.status === 'OFF' ? 'Disabled' : 'Enabled'}
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToolsList;
