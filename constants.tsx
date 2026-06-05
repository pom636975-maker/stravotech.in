
import { ToolMetadata } from './types';

export const TOOLS: ToolMetadata[] = [
  // ... (keeping existing tools 1-20)
  {
    id: 'gpa-calculator',
    name: 'GPA Calculator',
    description: 'Calculate your college GPA based on the standard 4.0 scale used in the USA.',
    path: '/student/gpa-calculator',
    category: 'student',
    icon: 'fa-graduation-cap',
    seoTitle: 'GPA Calculator Online – CGPA to Percentage | 10.0 & 4.0 Scale | Free',
    seoDescription: 'Free GPA & CGPA calculator online. Convert CGPA to percentage (CGPA × 9.5), calculate GPA from marks for Indian and US universities. Supports 4.0, 10.0 scales. No sign-up.',
    seoKeywords: 'gpa calculator, cgpa to percentage calculator, cgpa to percentage, gpa calculator india, how to calculate cgpa to percentage, gpa from marks',
    longDescription: 'Our GPA Calculator is designed for students in the United States and Canada following a standard 4.0 grading scale. Whether you are tracking your semester performance or estimating your final cumulative GPA, this tool provides precise calculations based on credits and letter grades. It supports both weighted and unweighted scales, making it perfect for High School and College students.',
    faqs: [
      { question: "What is a 4.0 GPA scale?", answer: "The 4.0 scale is the most common grading system in the US, where an A equals 4 points, a B equals 3, a C equals 2, a D equals 1, and an F equals 0." },
      { question: "Do weighted GPAs count differently?", answer: "Yes, weighted GPAs (often up to 5.0) account for the difficulty of Honors or AP courses. Our tool allows you to toggle between weighted and unweighted." }
    ]
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Quickly find percentages, increases, or decreases.',
    path: '/student/percentage-calculator',
    category: 'student',
    icon: 'fa-percent',
    seoTitle: 'Percentage Calculator – Find % of Any Marks Instantly | Free Online',
    seoDescription: 'Free marks to percentage calculator. Find what percentage is 378 out of 500 (=75.6%), 520 out of 600 (=86.67%), or any score. Works for CBSE, ICSE, JEE & all boards. No sign-up.',
    seoKeywords: 'percentage calculator, marks to percentage calculator, 378 out of 500 as percentage, calculate percentage from marks, cbse percentage calculator, marks percentage online',
    longDescription: 'The Percentage Calculator is a versatile tool for students and professionals. Calculate what percentage one number is of another, find the percentage change between two values, or calculate tips and discounts instantly. Perfect for retail discounts, statistical analysis, and homework.',
    faqs: [
      { question: "How do I calculate a percentage increase?", answer: "Subtract the original value from the new value, divide by the original value, and multiply by 100." },
      { question: "Is this useful for business?", answer: "Absolutely. Business owners use it for calculating profit margins, growth rates, and markups." }
    ]
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and sentences for essays and reports.',
    path: '/student/word-counter',
    category: 'student',
    icon: 'fa-file-lines',
    seoTitle: 'Free Online Word Counter – Track Word and Character Counts Fast | Stravotech',
    seoDescription: 'Use our free online word counter for instant analysis of your text. Track word count, character count, and reading time for SEO, essays, and reports.',
    seoKeywords: 'word counter, free online word counter, character counter, word count tool, count words and characters, seo word counter',
    longDescription: 'Ideal for writers, students, and SEO professionals, our Word Counter provides real-time analysis of your text. It tracks word count, character count (with and without spaces), and even estimates reading and speaking time based on average North American speeds.',
    faqs: [
      { question: "Are spaces included in character count?", answer: "We provide both counts: characters with spaces and characters without spaces." },
      { question: "What is the average reading speed used?", answer: "We use 225 words per minute, which is the standard average for an adult reader." }
    ]
  },
  {
    id: 'scientific-calculator',
    name: 'Scientific Calculator',
    description: 'Advanced math operations for students and engineers.',
    path: '/student/scientific-calculator',
    category: 'student',
    icon: 'fa-calculator',
    seoTitle: 'Scientific Calculator Online – Free Calculator for JEE, Class 11 & 12',
    seoDescription: 'Free scientific calculator online. Calculate sin, cos, tan, log, square roots and more. Perfect for JEE Mains, Class 11/12 Physics, Chemistry & Maths. Works on mobile.',
    seoKeywords: 'scientific calculator online, sin cos tan calculator, scientific calculator for jee, online calculator class 11, log calculator online, trigonometry calculator',
    longDescription: 'A robust scientific calculator for solving complex mathematical problems. Features support for trigonometric functions, logarithms, square roots, and basic arithmetic. Essential for STEM students and engineering professionals.',
    faqs: [
      { question: "Does it support radians?", answer: "Yes, our calculator defaults to radians for trigonometric functions, suitable for advanced calculus." },
      { question: "Is it mobile-friendly?", answer: "Absolutely, the scientific layout adjusts perfectly to your touch screen." }
    ]
  },
  {
    id: 'bmi-bmr-calculator',
    name: 'BMI & BMR Tracker',
    description: 'Calculate your Body Mass Index and Metabolic Rate.',
    path: '/student/bmi-bmr-calculator',
    category: 'student',
    icon: 'fa-heart-pulse',
    seoTitle: 'Free BMI & BMR Calculator – Calculate Body Mass & Metabolic Rate | Stravotech',
    seoDescription: 'Use our free BMI and BMR calculator to track your health. Calculate Body Mass Index and Basal Metabolic Rate accurately with North American medical standards.',
    seoKeywords: 'bmi calculator, bmr calculator, body mass index, basal metabolic rate, free health calculator',
    longDescription: 'Health is the foundation of productivity. Calculate your BMI to check your health category and BMR to understand your daily caloric needs based on age, height, and weight. Uses standard medical formulas used in North America.',
    faqs: [
      { question: "What is BMI?", answer: "Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women." },
      { question: "What is BMR?", answer: "Basal Metabolic Rate (BMR) is the number of calories your body needs to accomplish its most basic life-sustaining functions." }
    ]
  },
  {
    id: 'mortgage-calculator',
    name: 'Mortgage Calculator',
    description: 'Estimate your monthly mortgage payments for USA home loans.',
    path: '/finance/mortgage-calculator',
    category: 'finance',
    icon: 'fa-house-chimney',
    seoTitle: 'Free Mortgage Calculator – Calculate US Home Loan Payments | Stravotech',
    seoDescription: 'Estimate your monthly US mortgage payments with our free mortgage calculator. Calculate principal, interest, and loan terms accurately. No sign-up required.',
    seoKeywords: 'mortgage calculator, us mortgage calculator, free home loan calculator, monthly mortgage payment estimate, mortgage amortization table',
    longDescription: 'Plan your home purchase with our USA-focused Mortgage Calculator. Input the home price, down payment, interest rate, and loan term to see your estimated monthly principal and interest payments. It provides a visual breakdown of your debt-to-equity ratio over time.',
    faqs: [
      { question: "Does this include PMI?", answer: "Our basic calculator focuses on Principal and Interest. Taxes, Insurance, and PMI vary by location and down payment and should be added separately." },
      { question: "Should I choose 15 or 30 years?", answer: "A 15-year term has higher monthly payments but significantly lower total interest cost compared to a 30-year term." }
    ]
  },
  {
    id: 'savings-calculator',
    name: 'Savings Planner',
    description: 'Calculate compound interest and future wealth.',
    path: '/finance/savings-calculator',
    category: 'finance',
    icon: 'fa-piggy-bank',
    seoTitle: 'Free Savings Calculator – Compound Interest & Future Value | Stravotech',
    seoDescription: 'Plan your financial future with our free savings calculator. Calculate compound interest and future wealth growth over time. No sign-up required.',
    seoKeywords: 'savings calculator, compound interest calculator, future value calculator, investment planner, wealth growth tool',
    longDescription: 'Visualize your financial future. This tool calculates the growth of your savings account using compound interest. Input your initial deposit, monthly contributions, and expected interest rate to see your wealth grow over time.',
    faqs: [
      { question: "What is compound interest?", answer: "It is interest calculated on the initial principal, which also includes all the accumulated interest from previous periods." },
      { question: "How often does this compound?", answer: "Our calculator defaults to monthly compounding, which is standard for most North American savings accounts." }
    ]
  },
  {
    id: 'salary-to-hourly',
    name: 'Salary to Hourly',
    description: 'Convert your annual salary into an hourly wage.',
    path: '/finance/salary-to-hourly',
    category: 'finance',
    icon: 'fa-money-bill-transfer',
    seoTitle: 'Free Salary to Hourly Converter – Calculate Your Hourly Rate | Stravotech',
    seoDescription: 'Convert your annual salary to an hourly wage instantly. Break down your income into hourly, daily, and weekly rates. Perfect for comparing jobs.',
    seoKeywords: 'salary to hourly, pay converter, hourly wage calculator, annual salary to hourly rate, income breakdown tool',
    longDescription: 'Ever wondered exactly how much you make per hour? This tool breaks down your annual salary into hourly, daily, and weekly rates based on a standard 40-hour work week. Great for comparing job offers and evaluating your time worth.',
    faqs: [
        { question: "How many working hours are in a year?", answer: "Usually 2,080 hours (40 hours per week * 52 weeks)." }
    ]
  },
  {
    id: 'tax-refund-calculator',
    name: 'Tax Refund Calculator',
    description: 'Estimate your tax refund based on income, deductions, and credits.',
    path: '/finance/tax-refund-calculator',
    category: 'finance',
    icon: 'fa-calculator',
    seoTitle: 'Free Tax Refund Calculator 2026 – Estimate Your Refund Instantly | Stravotech',
    seoDescription: 'Use our free tax refund calculator to estimate your 2026 refund quickly. Accurate tool for taxpayers to calculate potential savings from income and credits.',
    seoKeywords: 'tax refund calculator, estimate tax refund, 2026 tax calculator, free income tax tool, tax credit estimator',
    longDescription: 'Calculate your potential tax refund for 2026. Input your annual income, deductions, tax credits, and effective tax rate to get an instant estimate. Perfect for tax planning and understanding your refund amount.',
    faqs: [
      { question: "What is a tax refund?", answer: "A tax refund is the amount the IRS returns when you've overpaid your taxes throughout the year." },
      { question: "How accurate is this calculator?", answer: "This provides an estimate. Consult a tax professional for precise calculations." }
    ]
  },
  {
    id: 'stock-profit-calculator',
    name: 'Stock Profit Calculator',
    description: 'Calculate gains or losses from stock investments.',
    path: '/finance/stock-profit-calculator',
    category: 'finance',
    icon: 'fa-chart-line',
    seoTitle: 'Free Stock Profit Calculator - Calculate Your Investment Returns Instantly | Stravotech',
    seoDescription: 'Use our free stock profit calculator to estimate gains or losses on your investments. Simple tool for tracking stock performance and returns.',
    longDescription: 'Track your stock investment performance. Enter buy price, sell price, and number of shares to calculate total profit or loss and percentage return. Essential for investors monitoring their portfolio.',
    faqs: [
      { question: "Does this include fees?", answer: "No, this is a basic calculator. Add brokerage fees separately for accurate results." },
      { question: "What if I have dividends?", answer: "This focuses on capital gains/losses. Dividends should be calculated separately." }
    ]
  },
  {
    id: 'fuel-cost-calculator',
    name: 'Fuel Cost Calculator',
    description: 'Calculate fuel costs for trips and compare gas prices.',
    path: '/finance/fuel-cost-calculator',
    category: 'finance',
    icon: 'fa-gas-pump',
    seoTitle: 'Free Fuel Cost Calculator - Calculate Trip Fuel Expenses | Stravotech',
    seoDescription: 'Calculate fuel costs for your trips with our free fuel cost calculator. Compare gas prices and plan your travel budget efficiently.',
    longDescription: 'Plan your travel expenses with our fuel cost calculator. Input distance, fuel efficiency, and gas prices to calculate total fuel costs. Compare different vehicles and routes to save money.',
    faqs: [
      { question: "How accurate is this calculator?", answer: "It provides estimates based on your inputs. Actual costs may vary with driving conditions." },
      { question: "Does it include taxes?", answer: "No, fuel taxes vary by location. Add them separately for precise calculations." }
    ]
  },
  {
    id: 'investment-growth-calculator',
    name: 'Investment Growth Calculator',
    description: 'Calculate compound interest and investment growth over time.',
    path: '/finance/investment-growth-calculator',
    category: 'finance',
    icon: 'fa-chart-area',
    seoTitle: 'Free Investment Growth Calculator – Compound Interest Planner | Stravotech',
    seoDescription: 'Calculate how your investments grow over time with compound interest. Free investment growth calculator for long-term retirement and wealth planning.',
    seoKeywords: 'investment growth calculator, compound interest tool, future investment value, wealth planner, long term savings calculator',
    longDescription: 'See how your money grows with compound interest. Input initial investment, monthly contributions, interest rate, and time period to calculate future value. Perfect for retirement planning and investment goals.',
    faqs: [
      { question: "What is compound interest?", answer: "Interest earned on both the initial principal and the accumulated interest from previous periods." },
      { question: "How often does it compound?", answer: "Our calculator uses monthly compounding, which is standard for most investments." }
    ]
  },
  {
    id: 'invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices for free and export to PDF.',
    path: '/work/invoice-generator',
    category: 'work',
    icon: 'fa-file-invoice-dollar',
    seoTitle: 'Free Invoice Generator Online – Create and Export PDF Invoices | Stravotech',
    seoDescription: 'Use our free online invoice generator to create professional invoices in seconds. Export to PDF with no watermarks or registration required. Perfect for freelancers.',
    seoKeywords: 'invoice generator, free invoice maker, create pdf invoice online, professional invoice generator, freelancer invoice tool',
    longDescription: 'Simple, clean, and professional. Use our invoice generator to create billing documents for your clients in seconds. Fill out the details, add line items, and print to PDF. No watermarks, no registration.',
    faqs: [
        { question: "Is my data stored?", answer: "No. Your invoice data is processed entirely in your browser. Refreshing the page will clear the data for your security." }
    ]
  },
  {
    id: 'password-generator',
    name: 'Secure Password Creator',
    description: 'Generate strong, hack-proof passwords instantly.',
    path: '/work/password-generator',
    category: 'work',
    icon: 'fa-shield-halved',
    seoTitle: 'Secure Password Generator – Create Strong & Hack-Proof Passwords | Stravotech',
    seoDescription: 'Generate strong, secure, and random passwords instantly with our hack-proof password creator. Customize length, symbols, and numbers for maximum security.',
    seoKeywords: 'password generator, secure password creator, random password generator, strong password maker, hack proof passwords',
    longDescription: 'Protect your digital life. Generate high-entropy, random passwords using symbols, numbers, and mixed-case letters. Essential for maintaining security in professional and personal accounts.',
    faqs: [
      { question: "What makes a password strong?", answer: "Length and character variety. At least 12-16 characters with symbols and numbers is recommended." },
      { question: "Are my passwords saved?", answer: "Never. Everything is generated on the fly and discarded once you leave the page." }
    ]
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert length, weight, and temperature units.',
    path: '/work/unit-converter',
    category: 'work',
    icon: 'fa-scale-balanced',
    seoTitle: 'Free Unit Converter Online – Length, Weight, Temperature | Stravotech',
    seoDescription: 'Use our free online unit converter to switch between metric and imperial systems. Convert length, weight, and temperature instantly and accurately.',
    seoKeywords: 'unit converter, free unit converter, online measurement converter, length and weight converter, metric to imperial converter',
    longDescription: 'A comprehensive converter for everyday units. Switch between Metric and Imperial systems effortlessly. Perfect for international business, cooking, and academic assignments.',
    faqs: [
      { question: "Does it support Celsius to Fahrenheit?", answer: "Yes, temperature conversion is fully supported with precise accuracy." },
      { question: "Is it useful for US/Canada travel?", answer: "Perfect for converting Miles to Kilometers and Pounds to Kilograms across the border." }
    ]
  },
  {
    id: 'essay-word-estimator',
    name: 'Essay Word Estimator',
    description: 'Estimate the number of words based on pages and font size.',
    path: '/student/essay-word-estimator',
    category: 'student',
    icon: 'fa-pen-nib',
    seoTitle: 'Free Essay Word Estimator – Calculate Words per Page | Stravotech',
    seoDescription: 'Estimate the number of words in your essay based on page count, font size, and spacing. Perfect for MLA/APA academic formatting planning.',
    seoKeywords: 'essay word estimator, words per page calculator, academic word count estimator, mla word count, apa word count guide',
    longDescription: 'Need to know how many words are in a 5-page double-spaced essay? This tool estimates the word count based on standard North American academic formatting (MLA/APA). Ideal for students planning their assignments.',
    faqs: [
      { question: "How many words are on a standard page?", answer: "Usually 275 words for double-spaced and 550 for single-spaced (Times New Roman 12pt)." }
    ]
  },
  {
    id: 'study-time-calculator',
    name: 'Study Time Calculator',
    description: 'Plan your study sessions based on material complexity.',
    path: '/student/study-time-calculator',
    category: 'student',
    icon: 'fa-clock',
    seoTitle: 'Free Study Time Calculator – Plan Your Learning Sessions | Stravotech',
    seoDescription: 'Estimate how long you need to study based on material difficulty and the Pomodoro method. Plan your academic sessions for maximum efficiency.',
    seoKeywords: 'study time calculator, learning time estimator, academic planning tool, pomodoro study planner, exam preparation tool',
    longDescription: 'Manage your time effectively with our Study Time Calculator. Tell us how much you need to read or learn, and we will estimate how long it will take based on subject difficulty and the Pomodoro method.',
    faqs: [
      { question: "What are focus blocks?", answer: "These are intervals of 25-30 minutes of deep study followed by a short break, optimized for maximum retention." }
    ]
  },
  {
    id: 'loan-payment-calculator',
    name: 'Loan Payment Calculator',
    description: 'Calculate monthly payments for any type of loan.',
    path: '/finance/loan-payment-calculator',
    category: 'finance',
    icon: 'fa-hand-holding-dollar',
    seoTitle: 'Free Loan Payment Calculator – Monthly EMI & Interest Estimate | Stravotech',
    seoDescription: 'Calculate your monthly loan payments and total interest for personal, auto, or home loans. See your amortization schedule instantly with our free calculator.',
    seoKeywords: 'loan payment calculator, emi calculator, monthly loan payment, interest calculator, loan amortization tool',
    longDescription: 'Whether it is a personal loan, auto loan, or business loan, calculate your monthly amortization and total interest paid over the life of the loan. Plan your payoff strategy with ease.',
    faqs: [
      { question: "How does interest affect my loan?", answer: "Higher interest rates increase your monthly payment and the total amount you pay back over time." }
    ]
  },
  {
    id: 'hourly-to-salary',
    name: 'Hourly to Salary',
    description: 'Convert your hourly rate into an annual salary.',
    path: '/finance/hourly-to-salary',
    category: 'finance',
    icon: 'fa-briefcase',
    seoTitle: 'Free Hourly to Salary Converter – Annual Income Calculator | Stravotech',
    seoDescription: 'Convert your hourly wage into an annual salary instantly. Calculate your yearly earning potential based on work hours and pay rate. Free to use.',
    seoKeywords: 'hourly to salary, wage converter, hourly to annual income, pay rate calculator, salary estimator',
    longDescription: 'Find out your equivalent annual income from an hourly rate. Useful for freelancers, contract workers, and part-time employees evaluating their yearly earning potential.',
    faqs: [
      { question: "Does this include taxes?", answer: "This tool calculates gross (pre-tax) income. Your net (take-home) pay will be lower depending on your tax bracket." }
    ]
  },
  {
    id: 'sales-tax-calculator',
    name: 'Sales Tax Calculator',
    description: 'Calculate USA state-specific sales tax amounts.',
    path: '/finance/sales-tax-calculator',
    category: 'finance',
    icon: 'fa-receipt',
    seoTitle: 'Free Sales Tax Calculator – US State Tax Rate Lookup | Stravotech',
    seoDescription: 'Calculate sales tax for all 50 US states. Find total price including state tax rates instantly with our free online calculator.',
    seoKeywords: 'sales tax calculator, us sales tax, state tax rate calculator, total price with tax, sales tax lookup',
    longDescription: 'Calculate the total price of an item including sales tax. Choose from all 50 US states to get approximate base rates for your purchases and budgeting.',
    faqs: [
      { question: "Are local taxes included?", answer: "This tool uses state-level base rates. County or city-level taxes may apply in addition to these rates." }
    ]
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Find out your exact age in years, months, and days.',
    path: '/work/age-calculator',
    category: 'work',
    icon: 'fa-calendar-days',
    seoTitle: 'Free Age Calculator – Calculate Your Exact Age Online | Stravotech',
    seoDescription: 'Find your exact age in years, months, and days. Calculate time elapsed between two dates with our fast and accurate online age calculator.',
    seoKeywords: 'age calculator, calculate age online, exact age finder, date difference calculator, age in days months years',
    longDescription: 'Calculate your exact age or the time elapsed between two specific dates down to the day. Useful for legal documents, milestone tracking, and birthday planning.',
    faqs: [
      { question: "How are leap years handled?", answer: "Our algorithm accounts for the 366th day in leap years to ensure perfect accuracy." }
    ]
  },
  {
    id: 'roi-calculator',
    name: 'ROI Calculator',
    description: 'Measure the efficiency of an investment.',
    path: '/work/roi-calculator',
    category: 'work',
    icon: 'fa-chart-line',
    seoTitle: 'Free ROI Calculator – Investment Efficiency & Profitability | Stravotech',
    seoDescription: 'Calculate Return on Investment (ROI) instantly. Measure the efficiency of your investments and track profitability with our free online tool.',
    seoKeywords: 'roi calculator, return on investment, investment profit calculator, profitability ratio, measure investment efficiency',
    longDescription: 'Return on Investment (ROI) is a key metric for business and personal finance. Calculate your profit percentage by comparing net gains to initial costs.',
    faqs: [
      { question: "What is a good ROI?", answer: "This varies by industry. Generally, a positive ROI is good, but many investors look for at least 7-10% annually." }
    ]
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills with ease.',
    path: '/work/tip-calculator',
    category: 'work',
    icon: 'fa-coins',
    seoTitle: 'Free Tip Calculator – Calculate Tips & Split Bills Instantly | Stravotech',
    seoDescription: 'Use our free tip calculator to calculate tips and split bills with friends easily. Supports standard US and Canada tipping practices.',
    seoKeywords: 'tip calculator, split bill calculator, dining tip calculator, restaurant tip tool, calculate tip online',
    longDescription: 'Dine out without the math. Calculate your tip based on common service standards and split the final bill among friends or colleagues instantly.',
    faqs: [
      { question: "What is the standard tip in USA/Canada?", answer: "Standard tipping is usually 15% for good service and 18-20% for excellent service." }
    ]
  },
  {
    id: 'timezone-converter',
    name: 'Time Zone Converter',
    description: 'Compare USA and Canada time zones quickly.',
    path: '/work/timezone-converter',
    category: 'work',
    icon: 'fa-earth-americas',
    seoTitle: 'Free Time Zone Converter – North America Time Comparison | Stravotech',
    seoDescription: 'Compare USA and Canada time zones instantly. Convert time between PT, MT, CT, and ET for meetings and travel planning.',
    seoKeywords: 'time zone converter, us time zones, canada time zones, time conversion tool, world clock comparison',
    longDescription: 'A simple way to check the time differences across North American time zones for meetings, travel, and remote work coordination.',
    faqs: [
      { question: "Does this handle Daylight Savings?", answer: "Yes, the tool uses your browser's current locale data which automatically adjusts for seasonal time changes." }
    ]
  },
  // --- NEW TOOLS 21-30 ---
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    description: 'Convert JPG/PNG images into high-quality PDF files.',
    path: '/work/image-to-pdf',
    category: 'work',
    icon: 'fa-file-pdf',
    seoTitle: 'Free Image to PDF Converter – JPG/PNG to PDF Online | Stravotech',
    seoDescription: 'Convert your images to high-quality PDF files instantly. Supports JPG, PNG, and WebP. Secure, client-side processing for professional documents.',
    seoKeywords: 'image to pdf, jpg to pdf converter, png to pdf, convert images to pdf online, secure image converter',
    longDescription: 'Easily convert multiple images into a single professional PDF document. Perfect for submitting assignments, digitizing receipts, or creating portfolios. All processing is done client-side for maximum privacy.',
    faqs: [
      { question: "Can I convert multiple images?", answer: "Yes, you can upload and stack multiple images into one document." },
      { question: "Is my data private?", answer: "Absolutely. Images never leave your browser." }
    ]
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Reduce image file size without losing quality.',
    path: '/work/image-compressor',
    category: 'work',
    icon: 'fa-compress',
    seoTitle: 'Free Image Compressor Online – Reduce File Size Securely | Stravotech',
    seoDescription: 'Optimize your images with our free online image compressor. Reduce file sizes for JPG, PNG, and WebP while maintaining quality. Fast and private.',
    seoKeywords: 'image compressor, reduce image size online, photo compressor, optimize images for web, free image size reducer',
    longDescription: 'Optimize your images for the web. Our compressor reduces file sizes significantly while maintaining visual fidelity. Useful for bloggers, developers, and slow-internet environments.',
    faqs: [
      { question: "What formats are supported?", answer: "Supports JPG, PNG, and WebP." }
    ]
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    description: 'Change image dimensions in pixels or percentage.',
    path: '/work/image-resizer',
    category: 'work',
    icon: 'fa-up-down-left-right',
    seoTitle: 'Free Image Resizer Online – Change Photo Dimensions Fast | Stravotech',
    seoDescription: 'Resize images to exact pixels or percentage scale. Simple online image resizer for JPG, PNG, and WebP. Maintain aspect ratio easily.',
    seoKeywords: 'image resizer, resize photo online, change image dimensions, pixel resizer, scale image online',
    longDescription: 'Resize images to exact pixel dimensions or scale them by percentage. Ideal for social media posts, profile pictures, and web content.',
    faqs: [
      { question: "Can I maintain aspect ratio?", answer: "Yes, we include a lock to ensure your images don't get stretched." }
    ]
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Create custom QR codes for links, text, or Wi-Fi.',
    path: '/work/qr-code-generator',
    category: 'work',
    icon: 'fa-qrcode',
    seoTitle: 'Free QR Code Generator – Create Custom QR Codes Instantly | Stravotech',
    seoDescription: 'Generate custom QR codes for websites, text, or Wi-Fi. Free online QR code maker with high-resolution downloads.',
    seoKeywords: 'qr code generator, free qr code maker, create qr code online, custom qr codes, wifi qr code generator',
    longDescription: 'Generate high-resolution QR codes instantly. Use them for marketing, contactless menus, or sharing complex URLs easily on printed materials.',
    faqs: [
      { question: "Do these QR codes expire?", answer: "No, these are static QR codes and will work indefinitely." }
    ]
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Prettify and validate JSON code for developers.',
    path: '/work/json-formatter',
    category: 'work',
    icon: 'fa-code',
    seoTitle: 'Free JSON Formatter & Validator Online – Prettify JSON | Stravotech',
    seoDescription: 'Format and validate your JSON code instantly. Make messy JSON readable and find syntax errors with our free online tool.',
    seoKeywords: 'json formatter, json validator, prettify json, format json online, json beautifier',
    longDescription: 'Clean up messy JSON data into a readable format. Our tool also validates syntax to help you find bugs in your data structures.',
    faqs: [
      { question: "Can it handle large files?", answer: "Yes, it can prettify thousands of lines of code in milliseconds." }
    ]
  },
  {
    id: 'markdown-previewer',
    name: 'Markdown Preview',
    description: 'Real-time preview for Markdown files and READMEs.',
    path: '/work/markdown-previewer',
    category: 'work',
    icon: 'fa-markdown',
    seoTitle: 'Free Markdown Previewer – Real-time Markdown Editor | Stravotech',
    seoDescription: 'Write and preview Markdown code in real-time. See live rendering of GitHub Flavored Markdown for READMEs and documentation.',
    seoKeywords: 'markdown previewer, live markdown editor, gfm preview, markdown to html, online markdown viewer',
    longDescription: 'Write Markdown code and see the rendered HTML instantly. Perfect for GitHub contributors and technical writers.',
    faqs: [
      { question: "Supports GitHub flavor?", answer: "Yes, we use standard GFM (GitHub Flavored Markdown) standards." }
    ]
  },
  {
    id: 'base64-converter',
    name: 'Base64 Converter',
    description: 'Encode or decode text to Base64 format.',
    path: '/work/base64-converter',
    category: 'work',
    icon: 'fa-shield-heart',
    seoTitle: 'Free Base64 Encoder & Decoder – Secure Text Conversion | Stravotech',
    seoDescription: 'Encode text to Base64 or decode Base64 strings back to text instantly. Secure, private, and client-side processing.',
    seoKeywords: 'base64 converter, base64 encoder, base64 decoder, text to base64, online conversion tool',
    longDescription: 'Simple utility to encode plain text into Base64 or decode Base64 strings back to readable text. Crucial for developers and data transmission tasks.',
    faqs: [
      { question: "Is it secure?", answer: "Yes, Base64 is an encoding, not encryption, but we handle it all locally." }
    ]
  },
  {
    id: 'binary-converter',
    name: 'Binary Converter',
    description: 'Convert between Decimal, Binary, and Hexadecimal.',
    path: '/student/binary-converter',
    category: 'student',
    icon: 'fa-microchip',
    seoTitle: 'Free Binary Converter – Decimal, Binary & Hexadecimal | Stravotech',
    seoDescription: 'Convert between decimal, binary, and hexadecimal numbering systems. Essential tool for computer science students and programmers.',
    seoKeywords: 'binary converter, decimal to binary, hexadecimal converter, base conversion, programming tool',
    longDescription: 'A vital tool for Computer Science students. Convert numbers between base 10, base 2, and base 16 instantly with step-by-step logic hints.',
    faqs: [
      { question: "What is Hexadecimal?", answer: "A base-16 numbering system used frequently in computing to represent colors and memory addresses." }
    ]
  },
  {
    id: 'stats-calculator',
    name: 'Statistics Calc',
    description: 'Find Mean, Median, Mode, and Standard Deviation.',
    path: '/student/stats-calculator',
    category: 'student',
    icon: 'fa-chart-simple',
    seoTitle: 'Free Statistics Calculator – Mean, Median, Mode & SD | Stravotech',
    seoDescription: 'Perform statistical analysis on your data sets. Calculate mean, median, mode, variance, and standard deviation instantly.',
    seoKeywords: 'statistics calculator, mean median mode, standard deviation calculator, variance calculator, data analysis tool',
    longDescription: 'Enter a set of numbers to get a full statistical breakdown. Ideal for social science research, lab reports, and math homework.',
    faqs: [
      { question: "Does it calculate Variance?", answer: "Yes, we provide both population and sample standard deviation/variance." }
    ]
  },
  {
    id: 'color-picker',
    name: 'Color Contrast Checker',
    description: 'Check accessibility and pick professional colors.',
    path: '/work/color-picker',
    category: 'work',
    icon: 'fa-palette',
    seoTitle: 'Free Color Contrast Checker – WCAG Accessibility Tool | Stravotech',
    seoDescription: 'Check text and background color contrast for WCAG 2.1 accessibility. Pick professional colors and ensure your designs are inclusive.',
    seoKeywords: 'color picker, contrast checker, wcag accessibility, accessible design tool, hex color picker',
    longDescription: 'Ensure your designs are accessible. Check contrast ratios against WCAG 2.1 standards and pick perfect HEX/RGB combinations for your next project.',
    faqs: [
      { question: "What is WCAG?", answer: "Web Content Accessibility Guidelines, ensuring the web is usable for people with visual impairments." }
    ]
  }
];

export const STATES_TAX_RATES: Record<string, number> = {
  "AL": 4.0, "AK": 0.0, "AZ": 5.6, "AR": 6.5, "CA": 7.25, "CO": 2.9, "CT": 6.35, "DE": 0.0,
  "FL": 6.0, "GA": 4.0, "HI": 4.0, "ID": 6.0, "IL": 6.25, "IN": 7.0, "IA": 6.0, "KS": 6.5,
  "KY": 6.0, "LA": 4.45, "ME": 5.5, "MD": 6.0, "MA": 6.25, "MI": 6.0, "MN": 6.875, "MS": 7.0,
  "MO": 4.225, "MT": 0.0, "NE": 5.5, "NV": 6.85, "NH": 0.0, "NJ": 6.625, "NM": 5.125, "NY": 4.0,
  "NC": 4.75, "ND": 5.0, "OH": 5.75, "OK": 4.5, "OR": 0.0, "PA": 6.0, "RI": 7.0, "SC": 6.0,
  "SD": 4.5, "TN": 7.0, "TX": 6.25, "UT": 6.1, "VT": 6.0, "VA": 5.3, "WA": 6.5, "WV": 6.0,
  "WI": 5.0, "WY": 4.0
};
