import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const toolsList = [
  { name: "GPA Calculator", slug: "gpa-calculator", category: "education" },
  { name: "Mortgage Calculator", slug: "mortgage-calculator", category: "finance" },
  { name: "Invoice Generator", slug: "invoice-generator", category: "business" },
  { name: "Percentage Calculator", slug: "percentage-calculator", category: "math" },
  { name: "Loan Calculator", slug: "loan-calculator", category: "finance" },
  { name: "ROI Calculator", slug: "roi-calculator", category: "finance" },
  { name: "Salary Calculator", slug: "salary-calculator", category: "finance" },
  { name: "Tax Calculator", slug: "tax-calculator", category: "finance" },
  { name: "Age Calculator", slug: "age-calculator", category: "utility" },
  { name: "Word Counter", slug: "word-counter", category: "utility" },
  { name: "Password Generator", slug: "password-generator", category: "security" },
  { name: "Image Compressor", slug: "image-compressor", category: "image" },
  { name: "Image Resizer", slug: "image-resizer", category: "image" },
  { name: "Base64 Converter", slug: "base64-converter", category: "developer" },
  { name: "Binary Converter", slug: "binary-converter", category: "developer" },
  { name: "Unit Converter", slug: "unit-converter", category: "utility" },
  { name: "JSON Formatter", slug: "json-formatter", category: "developer" },
  { name: "Markdown Preview", slug: "markdown-preview", category: "developer" },
  { name: "Tip Calculator", slug: "tip-calculator", category: "finance" },
  { name: "Study Timer", slug: "study-timer", category: "productivity" },
  { name: "Essay Estimator", slug: "essay-estimator", category: "education" },
  { name: "Health Calculator", slug: "health-calculator", category: "health" },
  { name: "Scientific Calculator", slug: "scientific-calculator", category: "math" },
  { name: "Color Picker", slug: "color-picker", category: "design" },
  { name: "Time Zone Converter", slug: "time-zone-converter", category: "utility" },
  { name: "QR Generator", slug: "qr-generator", category: "utility" },
  { name: "Savings Calculator", slug: "savings-calculator", category: "finance" },
  { name: "Stats Interface", slug: "stats-interface", category: "analytics" },
  { name: "Mortgage Affordability", slug: "mortgage-affordability", category: "finance" },
  { name: "GPA Estimator", slug: "gpa-estimator", category: "education" },
];

export const seedTools = async () => {
  for (const tool of toolsList) {
    await setDoc(doc(collection(db, "tools"), tool.slug), {
      ...tool,
      views: 0,
      live: true,
      createdAt: serverTimestamp(),
    });
  }

  console.log("30 Tools Added Successfully 🚀");
};
