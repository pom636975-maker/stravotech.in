
import React, { useState } from 'react';

const MarkdownInterface: React.FC = () => {
  const [markdown, setMarkdown] = useState('# Hello Stravotech\n\n- Professional tools\n- Free forever\n- No sign-up required\n\n**Start editing to see the preview!**');

  return (
    <div className="p-8 lg:p-12">
      <div className="grid lg:grid-cols-2 gap-8 min-h-[600px]">
         <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Editor</h4>
            <textarea 
              className="flex-grow p-8 bg-slate-900 text-indigo-100 font-mono text-sm rounded-[2rem] border border-slate-800 outline-none resize-none custom-scrollbar shadow-2xl"
              value={markdown}
              onChange={e => setMarkdown(e.target.value)}
              spellCheck={false}
            />
         </div>
         <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Live Preview</h4>
            <div className="flex-grow p-8 bg-white border border-slate-100 rounded-[2rem] prose prose-slate max-w-none overflow-y-auto custom-scrollbar shadow-sm">
               {/* Simple mock markdown preview - in production use a library like marked */}
               <div dangerouslySetInnerHTML={{ __html: markdown.replace(/\n/g, '<br/>').replace(/# (.*)/g, '<h1>$1</h1>').replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>') }} />
               <p className="mt-8 text-xs text-slate-300 italic">This is a real-time rendering. Use standard Markdown syntax.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MarkdownInterface;
