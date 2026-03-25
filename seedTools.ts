import { db } from './services/firebase';
import { doc, setDoc, collection } from 'firebase/firestore';

const TOOLS_DATA = [
  { id: 'gpa-calculator', name: 'GPA Calculator', category: 'student' },
  { id: 'percentage-calculator', name: 'Percentage Calculator', category: 'student' },
  { id: 'word-counter', name: 'Word Counter', category: 'student' },
  { id: 'scientific-calculator', name: 'Scientific Calculator', category: 'student' },
  { id: 'bmi-bmr-calculator', name: 'BMI & BMR Tracker', category: 'student' },
  { id: 'essay-word-estimator', name: 'Essay Word Estimator', category: 'student' },
  { id: 'study-time-calculator', name: 'Study Time Calculator', category: 'student' },
  { id: 'age-calculator', name: 'Age Calculator', category: 'student' },
  { id: 'mortgage-calculator', name: 'Mortgage Calculator', category: 'finance' },
  { id: 'savings-calculator', name: 'Savings Planner', category: 'finance' },
  { id: 'salary-to-hourly', name: 'Salary to Hourly', category: 'finance' },
  { id: 'hourly-to-salary', name: 'Hourly to Salary', category: 'finance' },
  { id: 'loan-payment-calculator', name: 'Loan Calculator', category: 'finance' },
  { id: 'roi-calculator', name: 'ROI Calculator', category: 'finance' },
  { id: 'sales-tax-calculator', name: 'Sales Tax Calculator', category: 'finance' },
  { id: 'tip-calculator', name: 'Tip Calculator', category: 'finance' },
  { id: 'invoice-generator', name: 'Invoice Generator', category: 'work' },
  { id: 'password-generator', name: 'Password Generator', category: 'work' },
  { id: 'timezone-converter', name: 'Timezone Converter', category: 'work' },
  { id: 'unit-converter', name: 'Unit Converter', category: 'work' },
  { id: 'json-formatter', name: 'JSON Formatter', category: 'work' },
  { id: 'markdown-previewer', name: 'Markdown Previewer', category: 'work' },
  { id: 'qr-code-generator', name: 'QR Code Generator', category: 'work' },
  { id: 'base64-converter', name: 'Base64 Converter', category: 'work' },
  { id: 'binary-converter', name: 'Binary Converter', category: 'work' },
  { id: 'image-to-pdf', name: 'Image to PDF', category: 'work' },
  { id: 'image-compressor', name: 'Image Compressor', category: 'work' },
  { id: 'image-resizer', name: 'Image Resizer', category: 'work' },
  { id: 'color-picker', name: 'Color Picker', category: 'work' },
  { id: 'stats-calculator', name: 'Statistics Calculator', category: 'student' },
  { id: 'tax-refund-calculator', name: 'Tax Refund Calculator', category: 'finance' },
  { id: 'stock-profit-calculator', name: 'Stock Profit Calculator', category: 'finance' },
  { id: 'fuel-cost-calculator', name: 'Fuel Cost Calculator', category: 'finance' },
  { id: 'investment-growth-calculator', name: 'Investment Growth Calculator', category: 'finance' },
];

export const seedTools = async () => {
  try {
    console.log('Starting to seed tools into Firestore...');
    
    for (const tool of TOOLS_DATA) {
      const toolRef = doc(db, 'tools', tool.id);
      await setDoc(toolRef, {
        id: tool.id,
        name: tool.name,
        category: tool.category,
        views: 0,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log(`✓ Seeded: ${tool.name}`);
    }
    
    console.log('✅ Seeding complete! All 30 tools have been added to Firestore.');
    alert('✅ Seeding successful! Check console for details.');
  } catch (error) {
    console.error('❌ Error seeding tools:', error);
    alert('❌ Seeding failed! Check console for error details.');
  }
};
