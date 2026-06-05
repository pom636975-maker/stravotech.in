# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\home.spec.ts >> homepage loads and displays correctly
- Location: tests\home.spec.ts:3:1

# Error details

```
Error: Dev server should be running on localhost:3001

expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e6]:
      - link " Stravotech Professional Toolkit" [ref=e7] [cursor=pointer]:
        - /url: /
        - generic [ref=e9]: 
        - generic [ref=e10]:
          - generic [ref=e11]: Stravotech
          - generic [ref=e12]: Professional Toolkit
      - generic [ref=e14]:
        - generic [ref=e15]: 
        - textbox "Search 100+ tools..." [ref=e16]
      - generic [ref=e17]:
        - link "Student Tools" [ref=e18] [cursor=pointer]:
          - /url: /#student
        - link "Finance" [ref=e19] [cursor=pointer]:
          - /url: /#finance
        - link "Work Productivity" [ref=e20] [cursor=pointer]:
          - /url: /#work
        - link "Holi Wishes" [ref=e21] [cursor=pointer]:
          - /url: /holi-generator
        - link "About" [ref=e22] [cursor=pointer]:
          - /url: /about
        - link "" [ref=e24] [cursor=pointer]:
          - /url: https://github.com
          - generic [ref=e25]: 
      - text: 
  - main [ref=e26]:
    - generic [ref=e27]:
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e33]: 34+ Professional Tools Ready for You
          - heading "Precision Tools For The Modern World." [level=1] [ref=e34]:
            - text: Precision Tools
            - text: For The Modern World.
          - paragraph [ref=e35]: Stravotech delivers ultra-fast, professional-grade calculators and converters designed specifically for the North American landscape. From academic GPA tracking to complex mortgage modeling—achieve total accuracy without ever creating an account.
          - generic [ref=e36]:
            - link "Start Calculating" [ref=e37] [cursor=pointer]:
              - /url: /student/gpa-calculator
            - button "Explore All Tools " [ref=e38] [cursor=pointer]:
              - text: Explore All Tools
              - generic [ref=e39]: 
          - generic [ref=e40]:
            - generic [ref=e41]:
              - generic [ref=e42]: 
              - generic [ref=e43]: Academic Precision
            - generic [ref=e45]: Privacy Guaranteed
            - generic [ref=e46]:
              - generic [ref=e47]: 
              - generic [ref=e48]: Instant Computation
        - generic [ref=e49]:
          - generic [ref=e50]:
            - generic [ref=e52]: 
            - heading "No Sign-Up, Ever." [level=3] [ref=e53]
            - paragraph [ref=e54]: We believe your productivity shouldn't be gated. Access every single tool instantly without emails, passwords, or credit cards. Just pure functionality.
          - generic [ref=e55]:
            - generic [ref=e57]: 
            - heading "Client-Side Privacy" [level=3] [ref=e58]
            - paragraph [ref=e59]: Your data is your business. All calculations and image processing happen right inside your browser. We never see, store, or sell your sensitive inputs.
          - generic [ref=e60]:
            - generic [ref=e62]: 
            - heading "Localized for NA" [level=3] [ref=e63]
            - paragraph [ref=e64]: Our finance and tax tools are meticulously updated to reflect the latest USA State and Canadian Provincial regulations, ensuring compliance and accuracy.
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic [ref=e68]:
              - generic [ref=e70]: 
              - generic [ref=e71]:
                - heading "Academic Achievement" [level=2] [ref=e72]
                - paragraph [ref=e73]: Tools built to help students in USA & Canada maintain peak academic performance.
            - generic [ref=e74]:
              - link " GPA Calculator Calculate your college GPA based on the standard 4.0 scale used in the USA. Open Tool " [ref=e75] [cursor=pointer]:
                - /url: /student/gpa-calculator
                - generic [ref=e77]: 
                - heading "GPA Calculator" [level=3] [ref=e78]
                - paragraph [ref=e79]: Calculate your college GPA based on the standard 4.0 scale used in the USA.
                - generic [ref=e80]:
                  - text: Open Tool
                  - generic [ref=e81]: 
              - link "% Percentage Calculator Quickly find percentages, increases, or decreases. Open Tool " [ref=e82] [cursor=pointer]:
                - /url: /student/percentage-calculator
                - generic [ref=e84]: "%"
                - heading "Percentage Calculator" [level=3] [ref=e85]
                - paragraph [ref=e86]: Quickly find percentages, increases, or decreases.
                - generic [ref=e87]:
                  - text: Open Tool
                  - generic [ref=e88]: 
              - link " Word Counter Count words, characters, and sentences for essays and reports. Open Tool " [ref=e89] [cursor=pointer]:
                - /url: /student/word-counter
                - generic [ref=e91]: 
                - heading "Word Counter" [level=3] [ref=e92]
                - paragraph [ref=e93]: Count words, characters, and sentences for essays and reports.
                - generic [ref=e94]:
                  - text: Open Tool
                  - generic [ref=e95]: 
              - link " Scientific Calculator Advanced math operations for students and engineers. Open Tool " [ref=e96] [cursor=pointer]:
                - /url: /student/scientific-calculator
                - generic [ref=e98]: 
                - heading "Scientific Calculator" [level=3] [ref=e99]
                - paragraph [ref=e100]: Advanced math operations for students and engineers.
                - generic [ref=e101]:
                  - text: Open Tool
                  - generic [ref=e102]: 
              - link " BMI & BMR Tracker Calculate your Body Mass Index and Metabolic Rate. Open Tool " [ref=e103] [cursor=pointer]:
                - /url: /student/bmi-bmr-calculator
                - generic [ref=e105]: 
                - heading "BMI & BMR Tracker" [level=3] [ref=e106]
                - paragraph [ref=e107]: Calculate your Body Mass Index and Metabolic Rate.
                - generic [ref=e108]:
                  - text: Open Tool
                  - generic [ref=e109]: 
              - link " Essay Word Estimator Estimate the number of words based on pages and font size. Open Tool " [ref=e110] [cursor=pointer]:
                - /url: /student/essay-word-estimator
                - generic [ref=e112]: 
                - heading "Essay Word Estimator" [level=3] [ref=e113]
                - paragraph [ref=e114]: Estimate the number of words based on pages and font size.
                - generic [ref=e115]:
                  - text: Open Tool
                  - generic [ref=e116]: 
              - link " Study Time Calculator Plan your study sessions based on material complexity. Open Tool " [ref=e117] [cursor=pointer]:
                - /url: /student/study-time-calculator
                - generic [ref=e119]: 
                - heading "Study Time Calculator" [level=3] [ref=e120]
                - paragraph [ref=e121]: Plan your study sessions based on material complexity.
                - generic [ref=e122]:
                  - text: Open Tool
                  - generic [ref=e123]: 
              - link " Binary Converter Convert between Decimal, Binary, and Hexadecimal. Open Tool " [ref=e124] [cursor=pointer]:
                - /url: /student/binary-converter
                - generic [ref=e126]: 
                - heading "Binary Converter" [level=3] [ref=e127]
                - paragraph [ref=e128]: Convert between Decimal, Binary, and Hexadecimal.
                - generic [ref=e129]:
                  - text: Open Tool
                  - generic [ref=e130]: 
              - link " Statistics Calc Find Mean, Median, Mode, and Standard Deviation. Open Tool " [ref=e131] [cursor=pointer]:
                - /url: /student/stats-calculator
                - generic [ref=e133]: 
                - heading "Statistics Calc" [level=3] [ref=e134]
                - paragraph [ref=e135]: Find Mean, Median, Mode, and Standard Deviation.
                - generic [ref=e136]:
                  - text: Open Tool
                  - generic [ref=e137]: 
          - generic [ref=e138]:
            - generic [ref=e140]:
              - generic [ref=e142]: 
              - generic [ref=e143]:
                - heading "Financial Mastery" [level=2] [ref=e144]
                - paragraph [ref=e145]: Navigate home ownership and personal wealth with professional-grade math models.
            - generic [ref=e146]:
              - link " Mortgage Calculator Estimate your monthly mortgage payments for USA home loans. Open Tool " [ref=e147] [cursor=pointer]:
                - /url: /finance/mortgage-calculator
                - generic [ref=e149]: 
                - heading "Mortgage Calculator" [level=3] [ref=e150]
                - paragraph [ref=e151]: Estimate your monthly mortgage payments for USA home loans.
                - generic [ref=e152]:
                  - text: Open Tool
                  - generic [ref=e153]: 
              - link " Savings Planner Calculate compound interest and future wealth. Open Tool " [ref=e154] [cursor=pointer]:
                - /url: /finance/savings-calculator
                - generic [ref=e156]: 
                - heading "Savings Planner" [level=3] [ref=e157]
                - paragraph [ref=e158]: Calculate compound interest and future wealth.
                - generic [ref=e159]:
                  - text: Open Tool
                  - generic [ref=e160]: 
              - link " Salary to Hourly Convert your annual salary into an hourly wage. Open Tool " [ref=e161] [cursor=pointer]:
                - /url: /finance/salary-to-hourly
                - generic [ref=e163]: 
                - heading "Salary to Hourly" [level=3] [ref=e164]
                - paragraph [ref=e165]: Convert your annual salary into an hourly wage.
                - generic [ref=e166]:
                  - text: Open Tool
                  - generic [ref=e167]: 
              - link " Tax Refund Calculator Estimate your tax refund based on income, deductions, and credits. Open Tool " [ref=e168] [cursor=pointer]:
                - /url: /finance/tax-refund-calculator
                - generic [ref=e170]: 
                - heading "Tax Refund Calculator" [level=3] [ref=e171]
                - paragraph [ref=e172]: Estimate your tax refund based on income, deductions, and credits.
                - generic [ref=e173]:
                  - text: Open Tool
                  - generic [ref=e174]: 
              - link " Stock Profit Calculator Calculate gains or losses from stock investments. Open Tool " [ref=e175] [cursor=pointer]:
                - /url: /finance/stock-profit-calculator
                - generic [ref=e177]: 
                - heading "Stock Profit Calculator" [level=3] [ref=e178]
                - paragraph [ref=e179]: Calculate gains or losses from stock investments.
                - generic [ref=e180]:
                  - text: Open Tool
                  - generic [ref=e181]: 
              - link " Fuel Cost Calculator Calculate fuel costs for trips and compare gas prices. Open Tool " [ref=e182] [cursor=pointer]:
                - /url: /finance/fuel-cost-calculator
                - generic [ref=e184]: 
                - heading "Fuel Cost Calculator" [level=3] [ref=e185]
                - paragraph [ref=e186]: Calculate fuel costs for trips and compare gas prices.
                - generic [ref=e187]:
                  - text: Open Tool
                  - generic [ref=e188]: 
              - link " Investment Growth Calculator Calculate compound interest and investment growth over time. Open Tool " [ref=e189] [cursor=pointer]:
                - /url: /finance/investment-growth-calculator
                - generic [ref=e191]: 
                - heading "Investment Growth Calculator" [level=3] [ref=e192]
                - paragraph [ref=e193]: Calculate compound interest and investment growth over time.
                - generic [ref=e194]:
                  - text: Open Tool
                  - generic [ref=e195]: 
              - link " Loan Payment Calculator Calculate monthly payments for any type of loan. Open Tool " [ref=e196] [cursor=pointer]:
                - /url: /finance/loan-payment-calculator
                - generic [ref=e198]: 
                - heading "Loan Payment Calculator" [level=3] [ref=e199]
                - paragraph [ref=e200]: Calculate monthly payments for any type of loan.
                - generic [ref=e201]:
                  - text: Open Tool
                  - generic [ref=e202]: 
              - link " Hourly to Salary Convert your hourly rate into an annual salary. Open Tool " [ref=e203] [cursor=pointer]:
                - /url: /finance/hourly-to-salary
                - generic [ref=e205]: 
                - heading "Hourly to Salary" [level=3] [ref=e206]
                - paragraph [ref=e207]: Convert your hourly rate into an annual salary.
                - generic [ref=e208]:
                  - text: Open Tool
                  - generic [ref=e209]: 
              - link " Sales Tax Calculator Calculate USA state-specific sales tax amounts. Open Tool " [ref=e210] [cursor=pointer]:
                - /url: /finance/sales-tax-calculator
                - generic [ref=e212]: 
                - heading "Sales Tax Calculator" [level=3] [ref=e213]
                - paragraph [ref=e214]: Calculate USA state-specific sales tax amounts.
                - generic [ref=e215]:
                  - text: Open Tool
                  - generic [ref=e216]: 
          - generic [ref=e217]:
            - generic [ref=e219]:
              - generic [ref=e221]: 
              - generic [ref=e222]:
                - heading "Business Productivity" [level=2] [ref=e223]
                - paragraph [ref=e224]: Essential utilities for freelancers, developers, and designers to streamline their workflow.
            - generic [ref=e225]:
              - link " Invoice Generator Create professional invoices for free and export to PDF. Open Tool " [ref=e226] [cursor=pointer]:
                - /url: /work/invoice-generator
                - generic [ref=e228]: 
                - heading "Invoice Generator" [level=3] [ref=e229]
                - paragraph [ref=e230]: Create professional invoices for free and export to PDF.
                - generic [ref=e231]:
                  - text: Open Tool
                  - generic [ref=e232]: 
              - link " Secure Password Creator Generate strong, hack-proof passwords instantly. Open Tool " [ref=e233] [cursor=pointer]:
                - /url: /work/password-generator
                - generic [ref=e235]: 
                - heading "Secure Password Creator" [level=3] [ref=e236]
                - paragraph [ref=e237]: Generate strong, hack-proof passwords instantly.
                - generic [ref=e238]:
                  - text: Open Tool
                  - generic [ref=e239]: 
              - link " Unit Converter Convert length, weight, and temperature units. Open Tool " [ref=e240] [cursor=pointer]:
                - /url: /work/unit-converter
                - generic [ref=e242]: 
                - heading "Unit Converter" [level=3] [ref=e243]
                - paragraph [ref=e244]: Convert length, weight, and temperature units.
                - generic [ref=e245]:
                  - text: Open Tool
                  - generic [ref=e246]: 
              - link " Age Calculator Find out your exact age in years, months, and days. Open Tool " [ref=e247] [cursor=pointer]:
                - /url: /work/age-calculator
                - generic [ref=e249]: 
                - heading "Age Calculator" [level=3] [ref=e250]
                - paragraph [ref=e251]: Find out your exact age in years, months, and days.
                - generic [ref=e252]:
                  - text: Open Tool
                  - generic [ref=e253]: 
              - link " ROI Calculator Measure the efficiency of an investment. Open Tool " [ref=e254] [cursor=pointer]:
                - /url: /work/roi-calculator
                - generic [ref=e256]: 
                - heading "ROI Calculator" [level=3] [ref=e257]
                - paragraph [ref=e258]: Measure the efficiency of an investment.
                - generic [ref=e259]:
                  - text: Open Tool
                  - generic [ref=e260]: 
              - link " Tip Calculator Calculate tips and split bills with ease. Open Tool " [ref=e261] [cursor=pointer]:
                - /url: /work/tip-calculator
                - generic [ref=e263]: 
                - heading "Tip Calculator" [level=3] [ref=e264]
                - paragraph [ref=e265]: Calculate tips and split bills with ease.
                - generic [ref=e266]:
                  - text: Open Tool
                  - generic [ref=e267]: 
              - link " Time Zone Converter Compare USA and Canada time zones quickly. Open Tool " [ref=e268] [cursor=pointer]:
                - /url: /work/timezone-converter
                - generic [ref=e270]: 
                - heading "Time Zone Converter" [level=3] [ref=e271]
                - paragraph [ref=e272]: Compare USA and Canada time zones quickly.
                - generic [ref=e273]:
                  - text: Open Tool
                  - generic [ref=e274]: 
              - link " Image to PDF Convert JPG/PNG images into high-quality PDF files. Open Tool " [ref=e275] [cursor=pointer]:
                - /url: /work/image-to-pdf
                - generic [ref=e277]: 
                - heading "Image to PDF" [level=3] [ref=e278]
                - paragraph [ref=e279]: Convert JPG/PNG images into high-quality PDF files.
                - generic [ref=e280]:
                  - text: Open Tool
                  - generic [ref=e281]: 
              - link " Image Compressor Reduce image file size without losing quality. Open Tool " [ref=e282] [cursor=pointer]:
                - /url: /work/image-compressor
                - generic [ref=e284]: 
                - heading "Image Compressor" [level=3] [ref=e285]
                - paragraph [ref=e286]: Reduce image file size without losing quality.
                - generic [ref=e287]:
                  - text: Open Tool
                  - generic [ref=e288]: 
              - link " Image Resizer Change image dimensions in pixels or percentage. Open Tool " [ref=e289] [cursor=pointer]:
                - /url: /work/image-resizer
                - generic [ref=e291]: 
                - heading "Image Resizer" [level=3] [ref=e292]
                - paragraph [ref=e293]: Change image dimensions in pixels or percentage.
                - generic [ref=e294]:
                  - text: Open Tool
                  - generic [ref=e295]: 
              - link " QR Code Generator Create custom QR codes for links, text, or Wi-Fi. Open Tool " [ref=e296] [cursor=pointer]:
                - /url: /work/qr-code-generator
                - generic [ref=e298]: 
                - heading "QR Code Generator" [level=3] [ref=e299]
                - paragraph [ref=e300]: Create custom QR codes for links, text, or Wi-Fi.
                - generic [ref=e301]:
                  - text: Open Tool
                  - generic [ref=e302]: 
              - link " JSON Formatter Prettify and validate JSON code for developers. Open Tool " [ref=e303] [cursor=pointer]:
                - /url: /work/json-formatter
                - generic [ref=e305]: 
                - heading "JSON Formatter" [level=3] [ref=e306]
                - paragraph [ref=e307]: Prettify and validate JSON code for developers.
                - generic [ref=e308]:
                  - text: Open Tool
                  - generic [ref=e309]: 
              - link " Markdown Preview Real-time preview for Markdown files and READMEs. Open Tool " [ref=e310] [cursor=pointer]:
                - /url: /work/markdown-previewer
                - generic [ref=e312]: 
                - heading "Markdown Preview" [level=3] [ref=e313]
                - paragraph [ref=e314]: Real-time preview for Markdown files and READMEs.
                - generic [ref=e315]:
                  - text: Open Tool
                  - generic [ref=e316]: 
              - link " Base64 Converter Encode or decode text to Base64 format. Open Tool " [ref=e317] [cursor=pointer]:
                - /url: /work/base64-converter
                - generic [ref=e319]: 
                - heading "Base64 Converter" [level=3] [ref=e320]
                - paragraph [ref=e321]: Encode or decode text to Base64 format.
                - generic [ref=e322]:
                  - text: Open Tool
                  - generic [ref=e323]: 
              - link " Color Contrast Checker Check accessibility and pick professional colors. Open Tool " [ref=e324] [cursor=pointer]:
                - /url: /work/color-picker
                - generic [ref=e326]: 
                - heading "Color Contrast Checker" [level=3] [ref=e327]
                - paragraph [ref=e328]: Check accessibility and pick professional colors.
                - generic [ref=e329]:
                  - text: Open Tool
                  - generic [ref=e330]: 
        - generic [ref=e331]:
          - generic [ref=e332]:
            - generic [ref=e334]: 
            - heading "Popular Quick Guides" [level=2] [ref=e335]
          - generic [ref=e336]:
            - link "Compress JPG to 50KB →" [ref=e337] [cursor=pointer]:
              - /url: /compress-image-to-50kb
            - link "India Income Tax 2026 →" [ref=e338] [cursor=pointer]:
              - /url: /income-tax-calculator-india
            - link "Percentage to GPA 4.0 →" [ref=e339] [cursor=pointer]:
              - /url: /gpa-calculator-from-percentage
            - link "CGPA to Percentage →" [ref=e340] [cursor=pointer]:
              - /url: /cgpa-to-percentage
            - link "Best JPG Compressor →" [ref=e341] [cursor=pointer]:
              - /url: /jpeg-compressor-online
            - link "GST Calculator India →" [ref=e342] [cursor=pointer]:
              - /url: /gst-calculator-india
            - link "Resize Image Online →" [ref=e343] [cursor=pointer]:
              - /url: /resize-image-online
            - link "Marks to Percentage →" [ref=e344] [cursor=pointer]:
              - /url: /percentage-calculator-marks
        - generic [ref=e345]:
          - generic [ref=e347]:
            - heading "Frequently Asked Questions" [level=2] [ref=e348]
            - paragraph [ref=e349]: Transparency is our core value. Here is everything you need to know about using the Stravotech Professional Toolkit.
          - generic [ref=e350]:
            - generic [ref=e351]:
              - heading "Is it truly 100% free?" [level=4] [ref=e352]
              - paragraph [ref=e353]: Yes. We generate revenue through clean, non-intrusive advertisements. This allows us to keep our high-precision tools free for students and freelancers forever.
            - generic [ref=e354]:
              - heading "How accurate are the financial tools?" [level=4] [ref=e355]
              - paragraph [ref=e356]: Our algorithms are cross-referenced with official US/Canada government standards. However, they are for estimation purposes and should be verified by a certified professional for final legal decisions.
            - generic [ref=e357]:
              - heading "What about mobile performance?" [level=4] [ref=e358]
              - paragraph [ref=e359]: Stravotech is built with a lightweight architecture. It loads in under 1 second on most mobile networks, ensuring you have the tools you need even when you're on the go.
            - generic [ref=e360]:
              - heading "Do you offer API access?" [level=4] [ref=e361]
              - paragraph [ref=e362]: Currently, we focus on providing the best web-based UI. We are exploring developer API options for late 2024 to support automated workflows for small businesses.
      - complementary [ref=e363]:
        - generic [ref=e365]:
          - heading "Stravotech Pro" [level=3] [ref=e367]
          - paragraph [ref=e368]: Our tools are, and will always be, 100% free. We believe education and productivity shouldn't have a price tag.
          - generic [ref=e369]:
            - generic [ref=e370]:
              - generic [ref=e371]: U1
              - generic [ref=e372]: U2
              - generic [ref=e373]: U3
              - generic [ref=e374]: U4
            - generic [ref=e375]: 10k+ Daily Users
  - contentinfo [ref=e376]:
    - generic [ref=e377]:
      - generic [ref=e378]:
        - generic [ref=e379]:
          - link " Stravotech" [ref=e380] [cursor=pointer]:
            - /url: /
            - generic [ref=e382]: 
            - generic [ref=e383]: Stravotech
          - paragraph [ref=e384]: Empowering students and professionals with lightning-fast, highly accurate web tools. Built for North America.
        - generic [ref=e385]:
          - heading "Popular Tools" [level=4] [ref=e386]
          - list [ref=e387]:
            - listitem [ref=e388]:
              - link "GPA Tracker" [ref=e389] [cursor=pointer]:
                - /url: /student/gpa-calculator
            - listitem [ref=e390]:
              - link "Tax Refund Calculator" [ref=e391] [cursor=pointer]:
                - /url: /finance/tax-refund-calculator
            - listitem [ref=e392]:
              - link "Stock Profit Calculator" [ref=e393] [cursor=pointer]:
                - /url: /finance/stock-profit-calculator
            - listitem [ref=e394]:
              - link "Fuel Cost Calculator" [ref=e395] [cursor=pointer]:
                - /url: /finance/fuel-cost-calculator
            - listitem [ref=e396]:
              - link "Investment Growth" [ref=e397] [cursor=pointer]:
                - /url: /finance/investment-growth-calculator
            - listitem [ref=e398]:
              - link "Mortgage Planner" [ref=e399] [cursor=pointer]:
                - /url: /finance/mortgage-calculator
            - listitem [ref=e400]:
              - link "Professional Invoicing" [ref=e401] [cursor=pointer]:
                - /url: /work/invoice-generator
            - listitem [ref=e402]:
              - link "Percentage Tools" [ref=e403] [cursor=pointer]:
                - /url: /student/percentage-calculator
        - generic [ref=e404]:
          - heading "Support" [level=4] [ref=e405]
          - list [ref=e406]:
            - listitem [ref=e407]:
              - link "Our Mission" [ref=e408] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e409]:
              - link "Data Privacy" [ref=e410] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e411]:
              - link "Support Center" [ref=e412] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e413]:
              - link " Staff Portal" [ref=e414] [cursor=pointer]:
                - /url: /admin
                - generic [ref=e415]: 
                - text: Staff Portal
        - generic [ref=e416]:
          - heading "Global Access" [level=4] [ref=e417]
          - paragraph [ref=e418]: Serving professionals across USA and Canada with localized financial models and tax calculations.
          - generic [ref=e419]:
            - link [ref=e420] [cursor=pointer]:
              - /url: "#"
            - link "" [ref=e421] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e422]: 
            - link "" [ref=e423] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e424]: 
      - generic [ref=e425]:
        - paragraph [ref=e426]: © 2026 Stravotech Tools. All rights reserved.
        - generic [ref=e427]:
          - link "Privacy" [ref=e428] [cursor=pointer]:
            - /url: /privacy
          - link "Disclaimer" [ref=e429] [cursor=pointer]:
            - /url: /disclaimer
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('homepage loads and displays correctly', async ({ page }) => {
  4  |   // Navigate to the local server
  5  |   let serverUp = true;
  6  |   try {
  7  |     const response = await page.goto('http://localhost:3001', { timeout: 5000 });
  8  |     if (!response || !response.ok()) {
  9  |       serverUp = false;
  10 |     }
  11 |   } catch (error) {
  12 |     serverUp = false;
  13 |   }
  14 | 
> 15 |   expect(serverUp, 'Dev server should be running on localhost:3001').toBeTruthy();
     |                                                                      ^ Error: Dev server should be running on localhost:3001
  16 | 
  17 |   // Basic checks
  18 |   await expect(page).toHaveTitle(/.*|.*/); // Just checking if title is rendered
  19 |   
  20 |   // Try to find the hero section or a main header
  21 |   const bodyText = await page.locator('body').innerText();
  22 |   expect(bodyText.length).toBeGreaterThan(0);
  23 | 
  24 |   // Take a screenshot we can see (or just to have it complete)
  25 |   await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
  26 | 
  27 |   console.log("Successfully loaded the homepage. Basic assertions passed.");
  28 | });
  29 | 
```