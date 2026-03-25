
import React, { useState, useRef, useEffect } from 'react';

const ImageResizerInterface: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const [lockAspect, setLockAspect] = useState(true);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.src = ev.target?.result as string;
        img.onload = () => {
          setImgSrc(img.src);
          setWidth(img.width);
          setHeight(img.height);
          setAspectRatio(img.width / img.height);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const applyResize = () => {
    if (!imgSrc) return;
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        setResizedUrl(canvas.toDataURL('image/png'));
      }
    };
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (lockAspect) setHeight(Math.round(val / aspectRatio));
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (lockAspect) setWidth(Math.round(val * aspectRatio));
  };

  return (
    <div className="p-10 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <canvas ref={canvasRef} className="hidden" />
        {!imgSrc ? (
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-20 text-center relative group hover:bg-white hover:border-indigo-400 transition-all">
             <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleUpload} />
             <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
               <i className="fa-solid fa-up-down-left-right text-3xl"></i>
             </div>
             <h3 className="text-xl font-black text-slate-900 mb-2">Upload Image to Resize</h3>
             <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Free Professional Resizing</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-16">
             <div className="space-y-10">
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 space-y-8">
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">New Dimensions</h4>
                   <div className="grid grid-cols-2 gap-8">
                      <div>
                         <label className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-widest">Width (px)</label>
                         <input type="number" className="w-full p-4 rounded-xl border border-slate-200 font-black text-xl" value={width} onChange={e => handleWidthChange(parseInt(e.target.value) || 0)} />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-widest">Height (px)</label>
                         <input type="number" className="w-full p-4 rounded-xl border border-slate-200 font-black text-xl" value={height} onChange={e => handleHeightChange(parseInt(e.target.value) || 0)} />
                      </div>
                   </div>
                   <button 
                     onClick={() => setLockAspect(!lockAspect)}
                     className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center border-2 ${lockAspect ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-white border-slate-100 text-slate-400'}`}
                   >
                     <i className={`fa-solid ${lockAspect ? 'fa-lock' : 'fa-lock-open'} mr-3`}></i> {lockAspect ? 'Aspect Ratio Locked' : 'Aspect Ratio Unlocked'}
                   </button>
                </div>
                <div className="flex gap-4">
                   <button onClick={applyResize} className="flex-grow py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all uppercase tracking-widest text-xs">Apply Resize</button>
                   {resizedUrl && (
                     <a href={resizedUrl} download="stravotech-resized.png" className="px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all uppercase tracking-widest text-xs flex items-center"><i className="fa-solid fa-download"></i></a>
                   )}
                </div>
             </div>
             <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center justify-center p-8 overflow-hidden">
                <img src={resizedUrl || imgSrc} className="max-w-full max-h-[400px] object-contain rounded-2xl shadow-lg" />
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageResizerInterface;
