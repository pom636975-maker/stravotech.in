

import React, { useState } from 'react';

const ImageToPdfInterface: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Explicitly type 'file' as 'File' to resolve 'unknown' type error in some environments when using Array.from on FileList
      Array.from(files).forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          if (ev.target?.result) {
            setImages(prev => [...prev, ev.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const downloadPdf = () => {
    // We use a clean printable layout for the PDF generation simulation
    window.print();
  };

  return (
    <div className="p-10 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 text-center group hover:bg-white hover:border-indigo-400 transition-all cursor-pointer relative">
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            onChange={handleUpload}
          />
          <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
             <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-2">Click to Upload Images</h3>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Supports JPG, PNG, WEBP</p>
        </div>

        {images.length > 0 && (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="flex justify-between items-end">
               <h4 className="text-lg font-black text-slate-900">{images.length} Images Selected</h4>
               <button onClick={downloadPdf} className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center">
                  <i className="fa-solid fa-file-pdf mr-3"></i> Generate PDF
               </button>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {images.map((img, idx) => (
                  <div key={idx} className="relative group aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-200">
                     <img src={img} className="w-full h-full object-cover" />
                     <button 
                       onClick={() => removeImage(idx)}
                       className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                     >
                        <i className="fa-solid fa-xmark"></i>
                     </button>
                     <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-black rounded">Page {idx + 1}</div>
                  </div>
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageToPdfInterface;