
import React, { useState, useRef } from 'react';

const ImageCompressorInterface: React.FC = () => {
  const [original, setOriginal] = useState<string | null>(null);
  const [compressed, setCompressed] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.7);
  const [origSize, setOrigSize] = useState(0);
  const [compSize, setCompSize] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOrigSize(file.size);
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setOriginal(ev.target.result as string);
          compress(ev.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const compress = (dataUrl: string) => {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        const newDataUrl = canvas.toDataURL('image/jpeg', quality);
        setCompressed(newDataUrl);
        // Approx size calculation
        setCompSize(Math.round(newDataUrl.length * 3 / 4));
      }
    };
  };

  const download = () => {
    if (compressed) {
      const link = document.createElement('a');
      link.href = compressed;
      link.download = 'stravotech-compressed.jpg';
      link.click();
    }
  };

  return (
    <div className="p-10 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <canvas ref={canvasRef} className="hidden" />
        
        {!original ? (
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-20 text-center relative group hover:bg-white hover:border-indigo-400 transition-all">
             <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleUpload} />
             <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
               <i className="fa-solid fa-compress text-3xl"></i>
             </div>
             <h3 className="text-xl font-black text-slate-900 mb-2">Upload Image to Compress</h3>
             <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Instant Client-Side Compression</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in duration-500">
             <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Compression Settings</h4>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Quality: {Math.round(quality * 100)}%</label>
                   <input 
                     type="range" min="0.1" max="1" step="0.1" value={quality}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                     onChange={(e) => { setQuality(parseFloat(e.target.value)); compress(original!); }}
                   />
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Original Size</span>
                      <span className="font-black text-slate-900">{(origSize / 1024).toFixed(1)} KB</span>
                   </div>
                   <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm">
                      <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">Compressed Size</span>
                      <span className="font-black text-indigo-600">{(compSize / 1024).toFixed(1)} KB</span>
                   </div>
                   <div className="p-5 bg-emerald-50 rounded-2xl text-emerald-700 text-center font-black uppercase text-[10px] tracking-widest border border-emerald-100">
                      Saving {Math.round((1 - compSize / origSize) * 100)}% of file space
                   </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={download} className="flex-grow py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all uppercase tracking-widest text-xs">Download Result</button>
                  <button onClick={() => setOriginal(null)} className="px-8 py-5 bg-white border border-slate-200 text-slate-400 font-black rounded-2xl hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all uppercase tracking-widest text-[10px]"><i className="fa-solid fa-rotate"></i></button>
                </div>
             </div>
             
             <div className="rounded-[2.5rem] border-2 border-slate-100 p-4 bg-white shadow-inner overflow-hidden flex items-center justify-center">
                {compressed && <img src={compressed} className="max-w-full max-h-[500px] object-contain rounded-2xl" />}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCompressorInterface;
