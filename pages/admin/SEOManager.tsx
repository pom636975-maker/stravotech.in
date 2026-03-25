
import React, { useState } from 'react';
import { AdminStore } from '../../services/AdminStore';

const SEOManager: React.FC = () => {
  const [tools, setTools] = useState(AdminStore.getMergedTools());
  const [selected, setSelected] = useState<string | null>(null);
  
  const tool = tools.find(t => t.id === selected);
  const [formData, setFormData] = useState({
    seoTitle: '',
    seoDescription: '',
    canonicalUrl: ''
  });

  const selectTool = (id: string) => {
    const t = tools.find(x => x.id === id);
    if (t) {
      setSelected(id);
      setFormData({
        seoTitle: t.seoTitle || '',
        seoDescription: t.seoDescription || '',
        canonicalUrl: t.canonicalUrl || `https://stravotech.com/#${t.path}`
      });
    }
  };

  const handleSave = () => {
    if (selected) {
      AdminStore.updateTool(selected, formData);
      setTools(AdminStore.getMergedTools());
      alert('SEO Metadata Synchronized Successfully!');
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-10 animate-in fade-in duration-500">
      {/* Sidebar List */}
      <div className="lg:col-span-1 space-y-4 h-[700px] overflow-y-auto pr-4 custom-scrollbar">
         <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-4">Select Tool to Optimize</h4>
         {tools.map(t => (
           <button 
             key={t.id}
             onClick={() => selectTool(t.id)}
             className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center space-x-4 ${selected === t.id ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-50' : 'bg-white border-slate-100 hover:border-slate-300'}`}
           >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selected === t.id ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                <i className={`fa-solid ${t.icon}`}></i>
              </div>
              <div>
                <span className="block font-bold text-sm text-slate-900">{t.name}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">{t.id}</span>
              </div>
           </button>
         ))}
      </div>

      {/* Editor Pane */}
      <div className="lg:col-span-2">
         {selected ? (
           <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-10 sticky top-10">
              <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">Editing Metadata</h3>
                   <p className="text-slate-400 font-bold text-sm">Path: {tool?.path}</p>
                </div>
                <div className="flex space-x-3">
                   <button onClick={handleSave} className="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-indigo-100">Save Changes</button>
                </div>
              </div>

              <div className="space-y-8">
                 <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">SEO Title (Target 50-60 chars)</label>
                    <input 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                      value={formData.seoTitle}
                      onChange={e => setFormData({...formData, seoTitle: e.target.value})}
                      placeholder="e.g. Best Free GPA Calculator | Stravotech"
                    />
                 </div>
                 <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Meta Description (Target 150-160 chars)</label>
                    <textarea 
                      className="w-full h-32 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-none"
                      value={formData.seoDescription}
                      onChange={e => setFormData({...formData, seoDescription: e.target.value})}
                      placeholder="A highly accurate, free GPA calculator for students in the USA and Canada..."
                    />
                 </div>
                 <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Canonical URL</label>
                    <input 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-mono text-xs focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                      value={formData.canonicalUrl}
                      onChange={e => setFormData({...formData, canonicalUrl: e.target.value})}
                    />
                 </div>
              </div>

              {/* SERP Preview */}
              <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 border-dashed">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Google SERP Preview</h4>
                 <div className="max-w-md">
                    <div className="text-[#1a0dab] text-xl font-medium mb-1 truncate hover:underline cursor-pointer">{formData.seoTitle || tool?.name}</div>
                    <div className="text-[#006621] text-sm mb-1">{formData.canonicalUrl}</div>
                    <div className="text-[#545454] text-sm leading-relaxed line-clamp-2">{formData.seoDescription || tool?.description}</div>
                 </div>
              </div>
           </div>
         ) : (
           <div className="h-full flex flex-col items-center justify-center bg-slate-100/50 border-2 border-dashed border-slate-200 rounded-[3rem] p-20 text-center">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-slate-300 text-3xl mb-6">
                <i className="fa-solid fa-edit"></i>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Editor Inactive</h3>
              <p className="text-slate-400 font-bold max-w-xs">Select a tool from the library sidebar to begin optimizing its search engine profile.</p>
           </div>
         )}
      </div>
    </div>
  );
};

export default SEOManager;
