
import React, { useState } from 'react';

const InvoiceInterface: React.FC = () => {
  const [invoiceId, setInvoiceId] = useState(`INV-${Date.now().toString().slice(-6)}`);
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });
  const [billFrom, setBillFrom] = useState('Stravotech Design Inc.\n123 Innovation Drive, Toronto, ON\nEmail: hello@stravotech.com');
  const [billTo, setBillTo] = useState('Acme Corp\n456 Corporate Way, New York, NY\nPhone: (555) 123-4567');
  const [notes, setNotes] = useState('Please remit payment within 30 days of invoice date. Late fees of 1.5% may apply after the due date.');
  const [items, setItems] = useState([{ id: 1, description: 'Website Redesign Project', quantity: 1, rate: 2500 }]);

  const addItem = () => setItems([...items, { id: Date.now(), description: '', quantity: 1, rate: 0 }]);
  const removeItem = (id: number) => setItems(items.filter(i => i.id !== id));
  
  const updateItem = (id: number, field: string, value: any) => {
    setItems(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
  const tax = subtotal * 0.13; // 13% average tax placeholder
  const total = subtotal + tax;

  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 print:shadow-none print:p-0 print:border-none">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex items-center space-x-4">
             <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-3xl">
                <i className="fa-solid fa-bolt-lightning"></i>
             </div>
             <div>
               <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Professional Invoice</h1>
               <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Verified Document</span>
             </div>
          </div>
          <div className="text-right flex flex-col items-end space-y-4">
             <div>
               <span className="text-[10px] font-black text-indigo-600 tracking-[0.2em] uppercase mb-1 block">Ref Number</span>
               <input 
                 className="text-right text-2xl font-black text-slate-900 border-b-2 border-slate-100 focus:border-indigo-600 outline-none w-48 bg-transparent" 
                 value={invoiceId} 
                 onChange={e => setInvoiceId(e.target.value)} 
               />
             </div>
             <div className="flex gap-6">
                <div>
                  <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mb-1 block">Issue Date</span>
                  <input 
                    type="date"
                    className="text-right text-sm font-bold text-slate-700 border-none focus:ring-0 outline-none p-0 bg-transparent cursor-pointer" 
                    value={invoiceDate} 
                    onChange={e => setInvoiceDate(e.target.value)} 
                  />
                </div>
                <div>
                  <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mb-1 block">Due Date</span>
                  <input 
                    type="date"
                    className="text-right text-sm font-bold text-indigo-600 border-none focus:ring-0 outline-none p-0 bg-transparent cursor-pointer" 
                    value={dueDate} 
                    onChange={e => setDueDate(e.target.value)} 
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Address Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
             <label className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-md">From</label>
             <textarea 
               className="w-full h-32 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none resize-none" 
               value={billFrom} 
               onChange={e => setBillFrom(e.target.value)} 
             />
          </div>
          <div className="space-y-4">
             <label className="inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md">Bill To</label>
             <textarea 
               className="w-full h-32 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none resize-none" 
               value={billTo} 
               onChange={e => setBillTo(e.target.value)} 
             />
          </div>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto -mx-10 px-10 mb-12">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left">
                <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Item Details</th>
                <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-center w-24">Qty</th>
                <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-center w-36">Rate</th>
                <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-right w-36">Amount</th>
                <th className="pb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-center w-12 print:hidden"></th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {items.map((item) => (
                <tr key={item.id} className="group bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 rounded-l-2xl border-y border-l border-slate-100">
                    <input 
                      className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold text-slate-900 placeholder:text-slate-300" 
                      placeholder="e.g. Project Consultation" 
                      value={item.description} 
                      onChange={e => updateItem(item.id, 'description', e.target.value)} 
                    />
                  </td>
                  <td className="py-4 px-4 border-y border-slate-100">
                    <input 
                      type="number" 
                      className="w-full bg-transparent border-none text-center text-sm font-bold" 
                      value={item.quantity} 
                      onChange={e => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td className="py-4 px-4 border-y border-slate-100">
                    <input 
                      type="number" 
                      className="w-full bg-transparent border-none text-center text-sm font-bold" 
                      value={item.rate} 
                      onChange={e => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)} 
                    />
                  </td>
                  <td className="py-4 px-4 border-y border-slate-100 text-right font-black text-slate-900 text-sm">
                    ${(item.quantity * item.rate).toLocaleString()}
                  </td>
                  <td className="py-4 px-4 border-y border-r border-slate-100 rounded-r-2xl print:hidden">
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className="text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button 
          onClick={addItem} 
          className="px-6 py-3 rounded-xl bg-indigo-50 text-indigo-600 font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all print:hidden"
        >
          <i className="fa-solid fa-plus mr-2"></i> Add Line Item
        </button>

        {/* Totals Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-12 pt-12 border-t border-slate-100">
          <div className="flex-grow space-y-4">
            <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest">Notes & Terms</h5>
            <textarea 
               className="w-full h-24 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl text-xs font-medium focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none resize-none print:bg-transparent print:border-none print:p-0" 
               value={notes} 
               onChange={e => setNotes(e.target.value)} 
               placeholder="Additional notes or payment terms..."
             />
          </div>
          <div className="w-full md:w-80 space-y-3">
            <div className="flex justify-between text-sm font-bold text-slate-500">
               <span className="uppercase tracking-widest">Subtotal</span>
               <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-slate-500">
               <span className="uppercase tracking-widest">Estimated Tax (13%)</span>
               <span>${tax.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="flex justify-between text-4xl font-black text-slate-900 pt-6 border-t border-slate-200 mt-6">
               <span className="tracking-tighter">TOTAL</span>
               <span className="text-indigo-600">${total.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center space-x-6 print:hidden">
        <button 
          onClick={() => window.print()}
          className="px-12 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center group"
        >
          <i className="fa-solid fa-file-pdf mr-3 group-hover:scale-110 transition-transform"></i> Download PDF Invoice
        </button>
        <button 
          className="px-10 py-5 bg-white border border-slate-200 text-slate-700 font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center"
        >
          <i className="fa-solid fa-envelope mr-3"></i> Send to Email
        </button>
      </div>
    </div>
  );
};

export default InvoiceInterface;
