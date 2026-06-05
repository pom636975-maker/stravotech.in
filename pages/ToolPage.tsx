import React, { useMemo, useEffect, useState, Suspense, lazy } from 'react';
import { useParams, Link, Link as RouterLink } from 'react-router-dom';
import { incrementToolViews } from '../services/firebaseService';
import { AdminStore } from '../services/AdminStore';
import SEO from '../components/SEO';
import FormulaBox from '../components/FormulaBox';
import SolvedExamples from '../components/SolvedExamples';
import ToolPDFButton from '../components/ToolPDFButton';

// Lazy-loaded tool interfaces
const lazyMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  'gpa-calculator': () => import('../tools/GPAInterface'),
  'word-counter': () => import('../tools/WordCounterInterface'),
  'mortgage-calculator': () => import('../tools/MortgageInterface'),
  'tip-calculator': () => import('../tools/TipInterface'),
  'invoice-generator': () => import('../tools/InvoiceInterface'),
  'percentage-calculator': () => import('../tools/PercentageInterface'),
  'salary-to-hourly': () => import('../tools/SalaryHourlyInterface'),
  'hourly-to-salary': () => import('../tools/SalaryHourlyInterface'),
  'essay-word-estimator': () => import('../tools/EssayEstimatorInterface'),
  'study-time-calculator': () => import('../tools/StudyTimeInterface'),
  'loan-payment-calculator': () => import('../tools/LoanInterface'),
  'sales-tax-calculator': () => import('../tools/SalesTaxInterface'),
  'age-calculator': () => import('../tools/AgeInterface'),
  'roi-calculator': () => import('../tools/ROIInterface'),
  'timezone-converter': () => import('../tools/TimeZoneInterface'),
  'unit-converter': () => import('../tools/UnitConverterInterface'),
  'savings-calculator': () => import('../tools/SavingsInterface'),
  'password-generator': () => import('../tools/PasswordGeneratorInterface'),
  'bmi-bmr-calculator': () => import('../tools/HealthCalculatorInterface'),
  'scientific-calculator': () => import('../tools/ScientificCalculatorInterface'),
  'image-to-pdf': () => import('../tools/ImageToPdfInterface'),
  'image-compressor': () => import('../tools/ImageCompressorInterface'),
  'image-resizer': () => import('../tools/ImageResizerInterface'),
  'qr-code-generator': () => import('../tools/QRCodeInterface'),
  'json-formatter': () => import('../tools/JSONFormatterInterface'),
  'markdown-previewer': () => import('../tools/MarkdownInterface'),
  'base64-converter': () => import('../tools/Base64Interface'),
  'binary-converter': () => import('../tools/BinaryConverterInterface'),
  'stats-calculator': () => import('../tools/StatsInterface'),
  'color-picker': () => import('../tools/ColorPickerInterface'),
  'tax-refund-calculator': () => import('../tools/TaxRefundInterface'),
  'stock-profit-calculator': () => import('../tools/StockProfitInterface'),
  'fuel-cost-calculator': () => import('../tools/FuelCostInterface'),
  'investment-growth-calculator': () => import('../tools/InvestmentGrowthInterface'),
  'attendance-calculator': () => import('../tools/AttendanceInterface'),
  'gst-calculator-india': () => import('../tools/SalesTaxInterface'),
  'sip-calculator': () => import('../tools/InvestmentGrowthInterface'),
  'fd-calculator': () => import('../tools/SavingsInterface'),
};

// Rich SEO Content with Formulas, Examples, and FAQs
const toolRichData: Record<string, any> = {
  'percentage-calculator': {
    title: 'Percentage Calculator – Find % of Marks Instantly | 378/500, 520/600 & More',
    description: 'Free marks to percentage calculator. Instantly find what percentage is 378 out of 500 (75.6%), 520 out of 600 (86.67%), or any score. Works for CBSE, ICSE & all boards.',
    formula: 'Percentage = \\frac{\\text{Obtained Marks}}{\\text{Total Marks}} \\times 100',
    examples: [
      { input: '378 out of 500', calculation: '(378 / 500) * 100', result: '75.6%' },
      { input: '480 out of 600', calculation: '(480 / 600) * 100', result: '80.0%' },
      { input: '95 out of 100', calculation: '(95 / 100) * 100', result: '95.0%' },
    ],
    faqs: [
      { q: "How to calculate percentage from marks?", a: "Divide your obtained marks by the total possible marks, then multiply by 100. Formula: (Obtained/Total) * 100." },
      { q: "What is 378 out of 500 as a percentage?", a: "378 out of 500 is exactly 75.6%." },
      { q: "Does this work for CBSE best of five?", a: "Yes, just add your top 5 subject marks and enter the total as 500." }
    ],
    intentKeywords: 'marks to percentage, cbse percentage calculator, calculate percent from marks'
  },
  'attendance-calculator': {
    title: '75% Attendance Calculator: Check How Many Days to Attend',
    description: 'Calculate if you meet the 75% attendance rule. Find out how many more classes you need to attend or can afford to skip.',
    formula: '\\text{Target Attend} = \\lget \\frac{\\text{Target %}}{100} \\times \\text{Total Classes} \\rget',
    examples: [
      { input: 'Attended 30, Total 50 (Target 75%)', calculation: 'Need: (0.75 * 50 - 30) / (1 - 0.75)', result: 'Attend 30 more' },
      { input: 'Attended 45, Total 50 (Target 75%)', calculation: 'Can Skip: (45 / 0.75) - 50', result: 'Can skip 10' }
    ],
    faqs: [
      { q: "How many classes do I need for 75% attendance?", a: "To reach 75%, subtract your current attended from (0.75 * Total). Our calculator handles the complex overlap of upcoming classes." },
      { q: "Can I skip class today?", a: "Enter your current attendance; if your % is above 75%, it will show how many classes you can skip." }
    ],
    intentKeywords: 'attendance calculator 75 percent, college attendance tracker, can i skip class'
  },
  'age-calculator': {
    title: 'Age Calculator for Govt Jobs: UPSCs, SSC, & Bank Exam Eligibility',
    description: 'Calculate your exact age as of a specific notification date (e.g., Aug 1st). Accurate age in years, months, and days for job eligibility.',
    formula: '\\text{Age} = \\text{Target Date} - \\text{Date of Birth}',
    examples: [
      { input: 'DOB: 15/05/1998, Target: 01/08/2026', calculation: 'Exact Diff in Y/M/D', result: '28 Years, 2 Months, 17 Days' }
    ],
    faqs: [
      { q: "How to calculate age for UPSC exam?", a: "UPSC typically calculates age as of August 1st of the exam year. Use our 'Target Date' feature to set this date." },
      { q: "What is the age limit for SSC CGL?", a: "Usually 18-32 years. Use this tool to ensure you haven't crossed the cutoff even by a single day." }
    ],
    intentKeywords: 'age calculator for government jobs, upsc age eligibility, ssc age calculator'
  },
  'gst-calculator-india': {
    title: 'GST Calculator India: Calculate GST Amount & Tax Slabs Online',
    description: 'Calculate IGST, CGST, and SGST instantly. Supports 5%, 12%, 18%, and 28% tax slabs for Indian businesses and freelancers.',
    formula: '\\text{GST Amount} = \\frac{\\text{Amount} \\times \\text{Tax Rate}}{100}',
    examples: [
      { input: '₹10,000 at 18% GST', calculation: '(10000 * 18) / 100', result: '₹1,800 Tax' },
      { input: 'Inclusive: ₹11,800 back to Base', calculation: '11800 - (11800 * (100 / 118))', result: 'Base ₹10,000' }
    ],
    faqs: [
      { q: "How do I calculate GST? ", a: "Tax = (Price * GST%) / 100. Total = Price + Tax." },
      { q: "What are the common GST rates in India?", a: "Standard rates are 5%, 12%, 18%, and 28%." }
    ],
    intentKeywords: 'gst calculator india, online gst calculation, tax slab calculator'
  },
  'gpa-calculator': {
    title: 'CGPA to Percentage Calculator: 10.0 & 4.0 Scale Grade Converter',
    description: 'Convert CGPA to percentage instantly. Supports Indian university formulas (CGPA * 9.5) and US 4.0 GPA scales.',
    formula: '\\text{Percentage} = (\\text{CGPA} - 0.5) \\times 10 \\quad \\text{or} \\quad \\text{CGPA} \\times 9.5',
    examples: [
      { input: '8.5 CGPA (Standard)', calculation: '8.5 * 9.5', result: '80.75%' },
      { input: '3.8 GPA (4.0 Scale)', calculation: '3.8 * 25', result: '95%' }
    ],
    faqs: [
      { q: "How do I convert CGPA to percentage?", a: "Most Indian universities (like CBSE/KTU) use CGPA * 9.5. Some use (CGPA-0.5)*10. Our tool supports both." }
    ],
    intentKeywords: 'cgpa to percentage, gpa to percentage, 10 scale to percent'
  },
  'sip-calculator': {
    title: 'SIP Return Calculator: Estimate Mutual Fund Wealth Growth',
    description: 'Calculate your future wealth with Systematic Investment Plan (SIP). See how compounding builds your corpus over 5, 10, or 20 years.',
    formula: 'FV = P \\times \\frac{(1+i)^n - 1}{i} \\times (1+i)',
    examples: [
      { input: '₹5,000/month for 10 years at 12%', calculation: 'Compounding Monthly', result: '₹11.6 Lakhs' }
    ],
    faqs: [
      { q: "Is 12% a realistic SIP return?", a: "Historically, Indian equity mutual funds have delivered 12-15% over the long term (10+ years)." }
    ],
    intentKeywords: 'sip calculator, mutual fund calculator, wealth builder'
  },
  'image-compressor': {
    title: 'Compress Image to 50KB: JPG & PNG Compressor for Govt Forms',
    description: 'Reduce image size to exactly 50KB or 100KB. Perfect for UPSC, SSC, and Passport applications. Fast, secure, and private.',
    formula: '\\text{Compression} = \\text{Quality Scale} \\times \\text{Resolution Adjustment}',
    examples: [
      { input: '2MB Photo to 50KB', calculation: 'Scale to 40% Quality', result: 'Exact 48KB' }
    ],
    faqs: [
      { q: "How can I compress my photo to 50KB?", a: "Upload your photo, set the quality slider to around 40-50%, and check the real-time size output." }
    ],
    intentKeywords: 'compress image to 50kb, photo size reducer for forms, online image compressor'
  },
  'loan-payment-calculator': {
    title: 'EMI Calculator: Calculate Loan EMI for Home, Car & Personal Loans',
    description: 'Calculate your exact monthly EMI. Get full amortization schedule and total interest payable. Works for home loan, car loan, and personal loan. Free, no sign-up.',
    formula: 'E = P \\times r \\times \\frac{(1+r)^n}{(1+r)^n - 1}',
    examples: [
      { input: '₹10L Loan at 9% for 5 years', calculation: 'Standard EMI Formula', result: '₹20,758 /mo' }
    ],
    faqs: [
      { q: "What is the formula for EMI?", a: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is Principal, R involves monthly rate, N is months." }
    ],
    intentKeywords: 'emi calculator, home loan emi, car loan emi'
  },
  'scientific-calculator': {
    title: 'Scientific Calculator Online – Free Advanced Math Calculator',
    description: 'Free scientific calculator online with trigonometry (sin, cos, tan), logarithms, square roots, and more. Perfect for Class 11/12, JEE, and engineering students.',
    formula: '\\sin(\\theta), \\cos(\\theta), \\tan(\\theta), \\log(x), \\sqrt{x}, x^n',
    examples: [
      { input: 'sin(30°)', calculation: 'sin(30 × π/180)', result: '0.5' },
      { input: 'log(1000)', calculation: 'log₁₀(1000)', result: '3' },
      { input: '√144', calculation: '√144', result: '12' },
    ],
    faqs: [
      { q: "What is sin 30 degrees?", a: "sin(30°) = 0.5. This is one of the most commonly asked values in trigonometry." },
      { q: "How do I calculate log on a scientific calculator?", a: "Press the log button and enter the number. log(100) = 2, log(1000) = 3, log(10) = 1." },
      { q: "Is this calculator useful for JEE preparation?", a: "Yes! It supports all functions tested in JEE Mains and Advanced including inverse trig, exponentials, and logarithms." }
    ],
    intentKeywords: 'scientific calculator online, sin cos tan calculator, log calculator, scientific calculator for students'
  },
  'bmi-bmr-calculator': {
    title: 'BMI Calculator India – Check Your Body Mass Index Free Online',
    description: 'Calculate your BMI (Body Mass Index) and BMR (Basal Metabolic Rate) instantly. Check if you are underweight, normal, overweight, or obese. Free, no sign-up.',
    formula: 'BMI = \\frac{Weight (kg)}{Height (m)^2}',
    examples: [
      { input: 'Weight: 70kg, Height: 1.75m', calculation: '70 / (1.75)²', result: 'BMI = 22.9 (Normal)' },
      { input: 'Weight: 90kg, Height: 1.70m', calculation: '90 / (1.70)²', result: 'BMI = 31.1 (Obese)' }
    ],
    faqs: [
      { q: "What is a healthy BMI range?", a: "For adults, a BMI between 18.5 and 24.9 is considered healthy. Below 18.5 is underweight; 25–29.9 is overweight; 30+ is obese." },
      { q: "What is a healthy BMI for Indians?", a: "Asian populations including Indians have a higher health risk at lower BMI. WHO recommends Indians consider 18.5–22.9 as normal." },
      { q: "What is BMR?", a: "BMR (Basal Metabolic Rate) is the number of calories your body needs at complete rest to maintain basic functions like breathing and circulation." }
    ],
    intentKeywords: 'bmi calculator india, bmi calculator kg cm, body mass index calculator, healthy weight calculator'
  },
  'investment-growth-calculator': {
    title: 'Investment Return Calculator – SIP & Compound Interest Growth',
    description: 'Calculate how your money grows over time with compound interest. Free investment calculator for FD, SIP, and long-term savings. See returns in 5, 10, 20 years.',
    formula: 'A = P \\times \\left(1 + \\frac{r}{n}\\right)^{nt}',
    examples: [
      { input: '₹1L at 12% for 10 years', calculation: 'Compound Monthly', result: '₹3.30 Lakhs' },
      { input: '₹5,000/mo SIP at 12% for 10 years', calculation: 'Monthly Compounding', result: '₹11.6 Lakhs' }
    ],
    faqs: [
      { q: "What is compound interest?", a: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods — meaning your money grows exponentially." },
      { q: "What is a good return rate for investments in India?", a: "Equity mutual funds historically give 12–15% over 10+ years. FDs give 6–8%. PPF gives ~7.1%. Gold averages ~10% long-term." }
    ],
    intentKeywords: 'investment return calculator, compound interest calculator india, sip calculator, fd returns calculator'
  },
  'stock-profit-calculator': {
    title: 'Stock Profit Calculator – Calculate Share Trading Gains & Losses',
    description: 'Calculate profit or loss from any stock trade instantly. Enter buy price, sell price, and quantity to get net gain, % return, and total profit. Free online tool.',
    formula: 'Profit = (Sell Price - Buy Price) \\times Quantity',
    examples: [
      { input: 'Buy ₹150, Sell ₹200, 100 shares', calculation: '(200 - 150) × 100', result: '₹5,000 profit (33.3%)' },
      { input: 'Buy ₹500, Sell ₹430, 50 shares', calculation: '(430 - 500) × 50', result: '₹3,500 loss (-14%)' }
    ],
    faqs: [
      { q: "How do I calculate profit from stocks?", a: "Profit = (Sell Price - Buy Price) × Number of Shares. Percentage Return = (Profit / Total Investment) × 100." },
      { q: "Does this include brokerage charges?", a: "No, this calculates gross profit. Subtract your brokerage (typically 0.1–0.5%) and STT (Securities Transaction Tax) for net profit in India." }
    ],
    intentKeywords: 'stock profit calculator india, share trading profit loss calculator, stock return calculator'
  }
};

const ToolPage: React.FC = () => {
  const { category, toolId } = useParams();
  const [tools] = useState(AdminStore.getMergedTools());
  
  const tool = useMemo(() => {
    return tools.find(t => t.id === toolId);
  }, [toolId, tools]);

  const richData = toolId ? toolRichData[toolId] : null;

  useEffect(() => {
    if (tool && toolId) {
      incrementToolViews(toolId).catch(console.error);
    }
    window.scrollTo(0, 0);
  }, [toolId, tool]);

  if (!tool || tool.status === 'OFF') {
    return (
      <div className="text-center py-20 px-6">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
           <i className="fa-solid fa-screwdriver-wrench text-4xl"></i>
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">Tool is in Maintenance</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">We are updating this tool to provide better accuracy. Please check back in a few minutes.</p>
        <Link to="/" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
          <i className="fa-solid fa-house mr-2"></i> Back to Homepage
        </Link>
      </div>
    );
  }

  // Schema Generation
  const howToSteps = richData?.examples?.map((ex: any, i: number) => ({
    '@type': 'HowToStep',
    'name': `Scenario: ${ex.input}`,
    'text': `For ${ex.input}, the calculation is ${ex.calculation}, resulting in ${ex.result}.`,
    'url': `https://stravotech.in/${toolId}#step-${i}`
  })) || [];

  const faqItems = richData?.faqs?.map((f: any) => ({
    '@type': 'Question',
    'name': f.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': f.a
    }
  })) || [];

  // Build canonical URL from tool's path or toolId
  const canonicalUrl = tool.path
    ? `https://stravotech.in${tool.path}`
    : `https://stravotech.in/${toolId}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': richData?.title || tool.name,
      'description': richData?.description || tool.description,
      'url': canonicalUrl,
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'Any',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' }
    },
    ...(howToSteps.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': `How to use ${tool.name}`,
      'description': `Simple steps to calculate using the ${tool.name} on Stravotech.`,
      'step': howToSteps
    }] : []),
    ...(faqItems.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqItems
    }] : [])
  ];

  return (
    <div className="max-w-[90rem] mx-auto px-1 sm:px-3 lg:px-0 py-5 lg:py-10">
      <SEO 
        title={richData?.title || tool.seoTitle || tool.name}
        description={richData?.description || tool.seoDescription || tool.description}
        keywords={richData?.intentKeywords || tool.seoKeywords || tool.keywords}
        canonical={canonicalUrl}
        structuredData={structuredData}
        noSuffix={true}
      />

      <div className="mb-8">
        <nav className="flex max-w-full items-center text-xs font-bold text-slate-400 mb-4 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100 overflow-x-auto">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <i className="fa-solid fa-chevron-right mx-3 text-[8px]"></i>
          <span className="text-slate-900">{tool.name}</span>
        </nav>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
          {tool.name}
        </h1>
        <p className="text-base lg:text-lg text-slate-500 font-medium max-w-3xl">
          {tool.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 xl:col-span-9 min-w-0">
          {/* Main Tool Interface Container */}
          <div id="tool-interface" className="bg-white border-2 border-slate-100 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] shadow-xl shadow-slate-200/50 mb-12 overflow-hidden">
            <Suspense fallback={<div className="p-10 sm:p-20 lg:p-32 text-center text-indigo-600 font-black">STARTING ENGINE...</div>}>
              {React.createElement(lazy(() => lazyMap[tool.id] ? lazyMap[tool.id]() : Promise.resolve({ default: () => <div className="p-20 text-center">Module Loading...</div> })))}
            </Suspense>
          </div>

          {/* SEO Content & Educational Sections */}
          <div id="seo-article" className="prose prose-slate max-w-none">
            {richData?.formula && (
              <FormulaBox 
                formula={richData.formula} 
                title={`${tool.name} Formula`} 
                description="Understanding the core logic used in our system."
              />
            )}

            {richData?.examples && (
              <SolvedExamples 
                examples={richData.examples} 
                toolName={tool.name} 
              />
            )}

            {(richData?.faqs?.length > 0 || !richData) && (
              <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-[1.5rem] lg:rounded-[2.5rem] border border-slate-200 mb-12">
                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-8">Common Questions (FAQ)</h2>
                <div className="space-y-8">
                  {(richData?.faqs || [
                    { q: `How do I use the ${tool.name}?`, a: `Using the ${tool.name} is simple. Just input your required values into the highlighted fields, and our real-time engine will process the results instantly without requiring page reloads.` },
                    { q: `Is my data safe when using this tool?`, a: `Yes! Stravotech processes all calculations locally on your browser. We never send your raw inputs to cloud servers, ensuring 100% privacy and data security.` },
                    { q: `Is the ${tool.name} completely free?`, a: `Absolutely. We believe in democratizing access to professional utilities. There are no paywalls, hidden fees, or registration requirements to use this calculator.` }
                  ]).map((faq: any, idx: number) => (
                    <div key={idx} className="group">
                      <h3 className="text-lg font-bold text-slate-800 flex items-start">
                        <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-sm">{idx + 1}</span>
                        {faq.q}
                      </h3>
                      <p className="text-slate-600 mt-3 ml-12 leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Source and Data Integrity Section */}
            <div className="bg-slate-900 text-white p-5 sm:p-8 lg:p-10 rounded-[1.5rem] lg:rounded-[2.5rem] mb-12 overflow-hidden relative">
              <div className="relative z-10">
                 <h3 className="text-xl font-black mb-4 flex items-center">
                   <i className="fa-solid fa-microscope text-indigo-400 mr-3"></i>
                   Scientific Accuracy & Methodology
                 </h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-6">
                   This calculator follows standard mathematical procedures as defined by NCERT (India) and global academic standards. 
                   Where applicable, tax slab logic is synchronized with current GST Council notifications.
                 </p>
                 <div className="flex flex-wrap gap-4">
                   <div className="px-4 py-2 bg-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-indigo-300 border border-slate-700">Source: NCERT Mathematics</div>
                   <div className="px-4 py-2 bg-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-indigo-300 border border-slate-700">Logic: Wolfram Alpha Engine Sourced</div>
                   <div className="px-4 py-2 bg-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-indigo-300 border border-slate-700">Verified: Feb 2026 Update</div>
                 </div>
              </div>
              <i className="fa-solid fa-shield-halved absolute -right-10 -bottom-10 text-[15rem] text-white/5 rotate-12"></i>
            </div>
          </div>
        </div>

        {/* Sidebar and Navigation */}
        <aside className="lg:col-span-4 xl:col-span-3 space-y-10">
          <div className="sticky top-28 space-y-10">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-100">
               <h4 className="text-xl font-black mb-4">Master Your Studies</h4>
               <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                 Save hours of manual calculation. Join 50,000+ Indian students using Stravotech tools daily for exam prep and eligibility checks.
               </p>
               <div className="space-y-3">
                 <Link to="/percentage-calculator" className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all font-bold text-sm">
                   <i className="fa-solid fa-percent w-6"></i> Marks to Percentage
                 </Link>
                 <Link to="/attendance-calculator" className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all font-bold text-sm">
                   <i className="fa-solid fa-graduation-cap w-6"></i> 75% Attendance Check
                 </Link>
                 <Link to="/age-calculator" className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all font-bold text-sm">
                   <i className="fa-solid fa-calendar-check w-6"></i> Govt Job Age Check
                 </Link>
               </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-7">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-5">More Free Tools</h4>
              <div className="space-y-2">
                {[{ to: '/compress-image-to-50kb', label: 'Image Compressor', icon: 'fa-compress' }, { to: '/cgpa-to-percentage', label: 'CGPA to %', icon: 'fa-graduation-cap' }, { to: '/gst-calculator-india', label: 'GST Calculator', icon: 'fa-receipt' }, { to: '/finance/loan-payment-calculator', label: 'EMI Calculator', icon: 'fa-money-bill-wave' }].map(item => (
                  <RouterLink key={item.to} to={item.to} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl hover:border-indigo-200 hover:shadow-sm transition-all text-sm font-bold text-slate-700 hover:text-indigo-600">
                    <i className={`fa-solid ${item.icon} text-indigo-400 w-5`} />{item.label}
                  </RouterLink>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ToolPage;
