import React from 'react';
import { jsPDF } from 'jspdf';

interface ToolPDFButtonProps {
  toolName: string;
  results: Record<string, any>;
  formula?: string;
  examples?: Array<{input: string, result: string}>;
}

const ToolPDFButton: React.FC<ToolPDFButtonProps> = ({ toolName, results, formula, examples }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    // Branding
    doc.setFontSize(22);
    doc.setTextColor(79, 70, 229); // Indigo 600
    doc.text('Stravotech Tools', 20, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139); // Slate 500
    doc.text(`Official Report: ${toolName}`, 20, 28);
    doc.text(`Generated on: ${date}`, 20, 33);
    
    doc.setDrawColor(226, 232, 240); // Slate 200
    doc.line(20, 40, 190, 40);

    // Results Section
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.text('Calculation Results', 20, 55);
    
    let y = 65;
    doc.setFontSize(12);
    Object.entries(results).forEach(([key, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${key}:`, 20, y);
      doc.setFont('helvetica', 'normal');
      doc.text(`${value}`, 60, y);
      y += 10;
    });

    if (formula) {
      y += 10;
      doc.setFontSize(14);
      doc.text('Formula Used', 20, y);
      y += 10;
      doc.setFontSize(10);
      doc.text(formula, 20, y);
      y += 15;
    }

    // Disclaimer
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // Slate 400
    doc.text('Disclaimer: This calculation is for educational purposes. Stravotech is not responsible for errors.', 20, 280);
    doc.text('Visit https://stravotech.in for the latest tools.', 20, 285);

    doc.save(`${toolName.toLowerCase().replace(/\s+/g, '-')}-result.pdf`);
  };

  return (
    <button
      onClick={downloadPDF}
      className="inline-flex items-center px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:border-indigo-600 hover:text-indigo-600 transition-all group lg:w-full justify-center"
    >
      <i className="fa-solid fa-file-pdf mr-2 text-rose-500 group-hover:scale-110 transition-transform"></i>
      Download Report (PDF)
    </button>
  );
};

export default ToolPDFButton;
