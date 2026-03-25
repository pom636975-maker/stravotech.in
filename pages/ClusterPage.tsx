import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/* ─── Cluster Data ─────────────────────────────────────────────────────────── */
type ClusterData = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string;
  canonical: string;
  parentTool: string;
  parentLabel: string;
  relatedClusters: { slug: string; label: string }[];
  content: string;
  faqSchema: { q: string; a: string }[];
};

export const CLUSTER_PAGES: Record<string, ClusterData> = {
  'compress-image-to-50kb': {
    slug: 'compress-image-to-50kb',
    title: 'Compress Image to 50KB Online Free – Instant JPG & PNG Reducer',
    h1: 'Compress Image to 50KB Online – Free & Instant',
    description: 'Reduce any JPG, PNG or WebP image to exactly 50KB online for free. Perfect for government forms, Aadhaar uploads, and job applications. No sign-up required.',
    keywords: 'compress image to 50kb, reduce image size to 50kb, compress photo to 50kb online, image compressor 50kb, resize image 50kb',
    canonical: 'https://stravotech.in/compress-image-to-50kb',
    parentTool: '/work/image-compressor',
    parentLabel: 'Free Image Compressor',
    relatedClusters: [
      { slug: 'compress-image-to-100kb', label: 'Compress Image to 100KB' },
      { slug: 'jpeg-compressor-online', label: 'JPEG Compressor Online' },
      { slug: 'resize-image-online', label: 'Resize Image Online' },
    ],
    faqSchema: [
      { q: 'How do I compress an image to exactly 50KB?', a: 'Upload your image in our compressor, set quality to 30–45%, and monitor the output size indicator. For a 500KB JPG, approximately 35% quality yields a 50KB file. Adjust up or down until your target is reached.' },
      { q: 'Why do government forms require images under 50KB?', a: 'Indian government portals (UPSC, SSC, bank PO, Aadhaar) limit upload size to 50KB to reduce server load and ensure standard document formats across all submissions.' },
      { q: 'Will compressing to 50KB make my image blurry?', a: 'At 35–45% quality, slight softness may appear. For portrait photos used in government forms, the quality remains acceptable for identification purposes. Reduce dimensions first using the Image Resizer for best results.' },
      { q: 'What is the best format for a 50KB image?', a: 'JPEG/JPG is best for photographs (achieves smaller size). PNG is better for graphics with text or transparency but produces larger files at the same visual quality.' },
    ],
    content: `
      <h2>Why You Need to Compress an Image to 50KB</h2>
      <p>Whether you are applying for a government job, uploading documents to an Indian portal, or submitting a passport application online, the requirement to <strong>compress image to 50KB</strong> appears constantly. Sites like UPSC, SSC, bank PO recruitment portals, and state government forms enforce a strict 50KB limit on photograph uploads. Failing to meet this limit causes immediate form rejection — even if all other details are correct.</p>

      <p>Our free tool allows you to <strong>reduce any image to 50KB online</strong> instantly, without installing software or creating an account. The compression happens entirely in your browser — your photos never leave your device.</p>

      <h2>Step-by-Step: How to Compress Image to 50KB</h2>
      <ol>
        <li><strong>Open the Image Compressor tool</strong> above</li>
        <li><strong>Upload</strong> your JPG, PNG, or WebP photo</li>
        <li><strong>Set quality slider to 35%</strong> as a starting point</li>
        <li><strong>Watch the output size</strong> — it updates in real-time</li>
        <li><strong>Adjust</strong> the slider up or down until output ≤ 50KB</li>
        <li><strong>Download</strong> your compressed image instantly</li>
      </ol>

      <h2>Expected Results: What Quality Setting Gives 50KB?</h2>
      <p>Results vary based on your image's original content and resolution:</p>
      <ul>
        <li><strong>Starting size 200KB</strong> → try 55–65% quality</li>
        <li><strong>Starting size 500KB</strong> → try 30–40% quality</li>
        <li><strong>Starting size 1MB+</strong> → first resize dimensions, then compress at 40%</li>
        <li><strong>Starting size 2MB+ (DSLR photos)</strong> → resize to 600×800px first, then compress</li>
      </ul>
      <p><strong>Pro tip:</strong> If your image is very high resolution (4000+ pixels wide), use our <a href="/work/image-resizer">Image Resizer</a> to reduce to 400×500 pixels first. This makes hitting 50KB much easier while maintaining quality.</p>

      <h2>Common Use Cases for 50KB Image Compression</h2>
      <ul>
        <li><strong>UPSC Civil Services Application:</strong> Photograph must be 50KB or less in JPG format</li>
        <li><strong>SSC CGL / CHSL / MTS:</strong> Latest notifications require photograph ≤ 50KB</li>
        <li><strong>Bank PO & Clerk Forms:</strong> IBPS, SBI PO require photo under 50KB</li>
        <li><strong>Railway (RRB) Recruitment:</strong> Photo size restrictions between 20KB–50KB</li>
        <li><strong>Aadhaar Enrolment Update:</strong> Photo documents must be under given limits</li>
        <li><strong>College Admissions:</strong> DU, JNU, IIT JAM, NEET portals specify KB limits</li>
      </ul>

      <h2>Important Notes</h2>
      <ul>
        <li>Always keep a backup of your original image before compressing</li>
        <li>For submission photos, ensure dimensions also meet the form requirements (usually 3.5cm × 4.5cm or 200×250 pixels)</li>
        <li>Our tool outputs JPEG format — required by most Indian government portals</li>
      </ul>

      <h2>Related Pages</h2>
      <ul>
        <li><a href="/compress-image-to-100kb">Compress Image to 100KB</a></li>
        <li><a href="/jpeg-compressor-online">JPEG Compressor Online</a></li>
        <li><a href="/work/image-resizer">Image Resizer – Reduce Dimensions First</a></li>
        <li><a href="/work/image-to-pdf">Image to PDF Converter</a></li>
      </ul>
    `,
  },

  'compress-image-to-100kb': {
    slug: 'compress-image-to-100kb',
    title: 'Compress Image to 100KB Free Online – JPG PNG WebP Reducer',
    h1: 'Compress Image to 100KB Online – Free, Fast & Private',
    description: 'Reduce image file size to 100KB or less instantly. Free online tool for JPG, PNG, WebP. No upload, no sign-up — works in your browser. ideal for emails and forms.',
    keywords: 'compress image to 100kb, reduce image size to 100kb, compress photo 100kb, 100kb image compressor, image size reducer 100kb',
    canonical: 'https://stravotech.in/compress-image-to-100kb',
    parentTool: '/work/image-compressor',
    parentLabel: 'Free Image Compressor',
    relatedClusters: [
      { slug: 'compress-image-to-50kb', label: 'Compress Image to 50KB' },
      { slug: 'jpeg-compressor-online', label: 'JPEG Compressor Online' },
      { slug: 'resize-image-online', label: 'Resize Image Online' },
    ],
    faqSchema: [
      { q: 'How do I compress an image to 100KB?', a: 'Upload your image, set quality to 50–65%, and watch the real-time output size. Adjust the slider until output size is at or below 100KB, then download.' },
      { q: 'Is compressing to 100KB safe for quality?', a: 'Yes — at 55–70% quality, most images retain excellent visual quality with minimal perceptible difference. This range is recommended for email attachments and website usage.' },
      { q: 'What file formats can be compressed to 100KB?', a: 'JPG, PNG, and WebP are all supported. JPEG produces the smallest file size for photographs.' },
    ],
    content: `
      <h2>Compress Image to 100KB – When and Why</h2>
      <p>A <strong>100KB image size limit</strong> is one of the most common restrictions across email platforms, web forms, and online portals. Gmail displays a warning for attachments over 25MB, but many corporate email systems and web portals cap individual file uploads at 100KB–500KB. Compressing your images to 100KB ensures instant, reliable delivery.</p>

      <p>This quality threshold is also ideal for website images — a 100KB JPG loads in under 0.2 seconds on a standard broadband connection, keeping your Google PageSpeed score high and bounce rates low.</p>

      <h2>How to Reduce Image Size to 100KB: Step by Step</h2>
      <ol>
        <li>Upload your JPG or PNG (any size) in the compressor tool</li>
        <li>Start with quality set to <strong>60%</strong></li>
        <li>Check the live output file size preview</li>
        <li>If still above 100KB, reduce quality to 50%</li>
        <li>If already below 100KB, increase quality for better sharpness</li>
        <li>Download when output shows ≤ 100KB</li>
      </ol>

      <h2>Quality Settings Guide for 100KB Target</h2>
      <ul>
        <li><strong>Original 300KB → 100KB:</strong> Set quality to 55–65%</li>
        <li><strong>Original 600KB → 100KB:</strong> Set quality to 40–50%</li>
        <li><strong>Original 1.5MB → 100KB:</strong> Resize to 800px wide first, then 55% quality</li>
        <li><strong>Original 3MB+ → 100KB:</strong> Resize to max 1200px, then compress at 45%</li>
      </ul>

      <h2>Use Cases</h2>
      <ul>
        <li><strong>Email Attachments:</strong> Keep each photo under 100KB for instant sharing</li>
        <li><strong>E-commerce Product Images:</strong> 100KB allows fast page loads with good visual quality</li>
        <li><strong>LinkedIn Profile Photo:</strong> 100KB at 400×400px is ideal</li>
        <li><strong>Online Applications:</strong> Many banking and insurance portals cap document scans at 100KB–200KB</li>
      </ul>

      <h2>Related Compression Targets</h2>
      <ul>
        <li><a href="/compress-image-to-50kb">Compress Image to 50KB</a> – for government forms</li>
        <li><a href="/jpeg-compressor-online">JPEG Compressor Online</a></li>
        <li><a href="/work/image-resizer">Image Resizer</a> – reduce dimensions before compression</li>
      </ul>
    `,
  },

  'jpeg-compressor-online': {
    slug: 'jpeg-compressor-online',
    title: 'JPEG Compressor Online Free – Compress JPG Without Losing Quality',
    h1: 'JPEG Compressor Online – Compress JPG Free, No Quality Loss',
    description: 'Compress JPEG images online for free. Reduce JPG file size by up to 90% while preserving visual quality. No watermark, no upload to server, instant download.',
    keywords: 'jpeg compressor online, compress jpeg online free, jpg compressor, reduce jpeg size, compress jpg without losing quality',
    canonical: 'https://stravotech.in/jpeg-compressor-online',
    parentTool: '/work/image-compressor',
    parentLabel: 'Free Image Compressor',
    relatedClusters: [
      { slug: 'compress-image-to-50kb', label: 'Compress Image to 50KB' },
      { slug: 'compress-image-to-100kb', label: 'Compress Image to 100KB' },
      { slug: 'resize-image-online', label: 'Resize Image Online' },
    ],
    faqSchema: [
      { q: 'What is JPEG compression?', a: 'JPEG (Joint Photographic Experts Group) uses lossy compression that reduces file size by selectively discarding image data that is least perceptible to the human eye. Higher compression = smaller file = slightly lower quality.' },
      { q: 'What quality setting gives the best JPEG compression?', a: '70–80% quality gives the best balance: 40–60% file size reduction with virtually no visible quality loss. Below 50% starts to show noticeable artifacts in photos.' },
      { q: 'Is JPEG better than PNG for compression?', a: 'For photographs, JPEG is far superior — it produces 5–10x smaller files than PNG at comparable quality. PNG is better for graphics, logos, and screenshots with sharp lines and text.' },
    ],
    content: `
      <h2>Why JPEG is the Best Compression Format for Photos</h2>
      <p>When it comes to <strong>compressing JPEG images online</strong>, JPEG (also written as JPG) is the undisputed champion for photographic content. Its lossy compression algorithm removes imperceptible image data, achieving file size reductions of 60–90% while keeping your photos looking virtually identical. Unlike PNG which grows large quickly, or WebP which has patchy browser support, JPEG compression is universally accepted and immediately viewable anywhere.</p>

      <p>Our <strong>free JPEG compressor online</strong> processes your images locally in the browser — meaning your personal photos, ID cards, or documents are never transmitted to any server.</p>

      <h2>How JPEG Compression Works</h2>
      <p>JPEG uses Discrete Cosine Transform (DCT) to convert image pixel blocks into frequency components, then quantizes them based on a quality setting:</p>
      <ul>
        <li><strong>Quality 90–100:</strong> Near-lossless. File 2–5× smaller than raw. Best for printing.</li>
        <li><strong>Quality 70–85:</strong> Excellent. File 5–10× smaller. Ideal for websites, sharing.</li>
        <li><strong>Quality 50–65:</strong> Good. File 10–15× smaller. Web thumbnails, email.</li>
        <li><strong>Quality 30–45:</strong> Acceptable. File 15–25× smaller. Small uploads, previews.</li>
        <li><strong>Below 30:</strong> Noticeable artifacts. For token identification only.</li>
      </ul>

      <h2>JPEG vs PNG – Which Should You Compress?</h2>
      <ul>
        <li><strong>Use JPEG for:</strong> Photos, faces, landscapes, product images, scans</li>
        <li><strong>Use PNG for:</strong> Logos, icons, screenshots, images with text overlays, transparent backgrounds</li>
        <li><strong>Converting PNG → JPEG:</strong> Our tool supports this — ideal when you need a smaller file and don't need transparency</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/compress-image-to-50kb">Compress JPEG to 50KB</a></li>
        <li><a href="/compress-image-to-100kb">Compress JPEG to 100KB</a></li>
        <li><a href="/work/image-resizer">Image Resizer</a></li>
        <li><a href="/work/image-to-pdf">Convert Image to PDF</a></li>
      </ul>
    `,
  },

  'resize-image-online': {
    slug: 'resize-image-online',
    title: 'Resize Image Online Free – Change Photo Size in Pixels or Percentage',
    h1: 'Resize Image Online Free – Pixels, Percentage, Any Size',
    description: 'Resize images online for free — change width and height in pixels or scale by percentage. Lock aspect ratio to avoid distortion. JPG, PNG, WebP supported.',
    keywords: 'resize image online, resize photo free, change image dimensions, resize jpg online, scale image size',
    canonical: 'https://stravotech.in/resize-image-online',
    parentTool: '/work/image-resizer',
    parentLabel: 'Free Image Resizer',
    relatedClusters: [
      { slug: 'compress-image-to-50kb', label: 'Compress Image to 50KB' },
      { slug: 'compress-image-to-100kb', label: 'Compress Image to 100KB' },
      { slug: 'jpeg-compressor-online', label: 'JPEG Compressor Online' },
    ],
    faqSchema: [
      { q: 'How do I resize an image to specific dimensions?', a: 'Upload your image, enter the target width and height in pixels, enable "Lock Aspect Ratio" to prevent distortion, and click Resize. Download the resized image immediately.' },
      { q: 'What is the passport photo size in pixels?', a: 'Indian passport photo: 3.5cm × 4.5cm = 413×531 pixels at 300 DPI. US passport: 2"×2" = 600×600 pixels at 300 DPI.' },
      { q: 'Does resizing an image reduce file size?', a: 'Yes — reducing pixel dimensions directly reduces file size. Cutting width and height in half reduces file size by approximately 75%. Use our Image Compressor after resizing for further size reduction.' },
    ],
    content: `
      <h2>Resize Image Online – Complete Size Reference</h2>
      <p><strong>Resizing an image online</strong> is the first step before compression — especially for large photos from smartphone cameras (12MP+) that start at 3–8MB. Simply reducing the pixel dimensions from 4000×3000 to 800×600 reduces the file size by over 80% before any quality compression is applied.</p>

      <h2>Standard Image Dimensions by Platform</h2>
      <ul>
        <li><strong>Passport Photo (India):</strong> 413×531px (3.5×4.5cm at 300 DPI)</li>
        <li><strong>Passport Photo (USA):</strong> 600×600px (2"×2" at 300 DPI)</li>
        <li><strong>LinkedIn Profile:</strong> 400×400px to 7680×4320px</li>
        <li><strong>Facebook Profile:</strong> 170×170px displayed, upload 400×400px</li>
        <li><strong>Instagram Square Post:</strong> 1080×1080px</li>
        <li><strong>Instagram Portrait:</strong> 1080×1350px</li>
        <li><strong>Twitter/X Profile:</strong> 400×400px</li>
        <li><strong>YouTube Thumbnail:</strong> 1280×720px</li>
        <li><strong>WhatsApp DP:</strong> 500×500px</li>
      </ul>

      <h2>How Pixel Dimensions Affect File Size</h2>
      <ul>
        <li>4000×3000px (12MP) → typical: 4–6MB</li>
        <li>2000×1500px → typical: 1–2MB</li>
        <li>1000×750px → typical: 300–600KB</li>
        <li>500×375px → typical: 80–150KB</li>
        <li>200×150px → typical: 15–30KB</li>
      </ul>
      <p>After resizing, use our <a href="/compress-image-to-50kb">image compressor to reach 50KB</a> or any other target size.</p>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/compress-image-to-50kb">Compress Image to 50KB</a></li>
        <li><a href="/work/image-compressor">Free Image Compressor</a></li>
        <li><a href="/work/image-to-pdf">Image to PDF Converter</a></li>
      </ul>
    `,
  },

  'income-tax-calculator-india': {
    slug: 'income-tax-calculator-india',
    title: 'Income Tax Calculator India 2026 – New & Old Tax Regime | Free',
    h1: 'Income Tax Calculator India 2026-27 – New & Old Regime Free',
    description: 'Calculate your income tax for FY 2026-27 under new or old tax regime. Free income tax calculator for salaried individuals in India with all deductions and slabs.',
    keywords: 'income tax calculator india, income tax calculator 2026, income tax calculator india 2026-27, new tax regime calculator, old vs new tax regime calculator india',
    canonical: 'https://stravotech.in/income-tax-calculator-india',
    parentTool: '/finance/tax-refund-calculator',
    parentLabel: 'Tax Refund Calculator',
    relatedClusters: [
      { slug: 'gst-calculator-india', label: 'GST Calculator India' },
      { slug: 'salary-to-hourly', label: 'Salary to Hourly Calculator' },
    ],
    faqSchema: [
      { q: 'What are the income tax slabs in India for 2026-27?', a: 'New Regime FY 2026-27: ₹0–3L = 0%, ₹3–7L = 5%, ₹7–10L = 10%, ₹10–12L = 15%, ₹12–15L = 20%, above ₹15L = 30%. Old regime: ₹0–2.5L = 0%, ₹2.5–5L = 5%, ₹5–10L = 20%, above ₹10L = 30%.' },
      { q: 'Which tax regime is better in India — new or old?', a: 'New regime is better if your total deductions are less than ₹3.75L. Old regime is better if you claim 80C (₹1.5L), HRA, home loan interest, and other deductions exceeding ₹3.75L.' },
      { q: 'What is the standard deduction for salaried employees in 2026?', a: 'Under the new regime, standard deduction is ₹75,000 for FY 2026-27. Under the old regime, it remains ₹50,000.' },
      { q: 'Is income up to ₹12 lakh tax-free in 2026?', a: 'Under the new regime, with the rebate under Section 87A, individuals with taxable income up to ₹12 lakh pay zero tax. Above ₹12 lakh, full slab rates apply from the first rupee.' },
    ],
    content: `
      <h2>India Income Tax Calculator FY 2026-27 – Complete Guide</h2>
      <p>The <strong>income tax calculator for India 2026</strong> is an essential tool for every salaried employee, self-employed professional, and business owner. With the new tax regime now being the default and significant changes in slabs and rebates for FY 2026-27, understanding your exact tax liability has never been more important.</p>

      <h2>New Tax Regime Slabs (FY 2026-27, Default)</h2>
      <ul>
        <li>₹0 – ₹3,00,000: <strong>0% (Nil)</strong></li>
        <li>₹3,00,001 – ₹7,00,000: <strong>5%</strong></li>
        <li>₹7,00,001 – ₹10,00,000: <strong>10%</strong></li>
        <li>₹10,00,001 – ₹12,00,000: <strong>15%</strong></li>
        <li>₹12,00,001 – ₹15,00,000: <strong>20%</strong></li>
        <li>Above ₹15,00,000: <strong>30%</strong></li>
      </ul>
      <p><strong>Key benefit:</strong> Section 87A rebate makes income up to ₹12 lakh effectively tax-free under new regime. Standard deduction: ₹75,000.</p>

      <h2>Old Tax Regime Slabs (FY 2026-27)</h2>
      <ul>
        <li>₹0 – ₹2,50,000: 0% | ₹2,50,001 – ₹5,00,000: 5%</li>
        <li>₹5,00,001 – ₹10,00,000: 20% | Above ₹10,00,000: 30%</li>
      </ul>
      <p>Old regime allows: 80C (₹1.5L), 80D (₹25K), HRA, home loan interest (₹2L), LTA, NPS (₹50K additional)</p>

      <h2>New vs Old Regime – Quick Comparison</h2>
      <ul>
        <li><strong>New regime wins if:</strong> total deductions &lt; ₹3.75 lakh</li>
        <li><strong>Old regime wins if:</strong> 80C + HRA + home loan interest &gt; ₹4L</li>
        <li><strong>Break-even:</strong> At ~₹3.75L deductions for most income levels</li>
      </ul>

      <h2>Tax Calculation Example (₹15 Lakh Salary)</h2>
      <p><strong>New Regime:</strong> Standard deduction ₹75K → taxable ₹14.25L → Tax ≈ ₹1,52,500 + 4% cess = <strong>₹1,58,600</strong></p>
      <p><strong>Old Regime (with 80C+HRA ₹4L):</strong> Taxable ₹11L → Tax ≈ ₹1,72,500 + cess = <strong>₹1,79,400</strong></p>
      <p>→ New regime saves ₹20,800 for this person.</p>

      <h2>Deductions Available Under Old Regime</h2>
      <ul>
        <li><strong>80C:</strong> PF, PPF, ELSS, LIC, home loan principal — up to ₹1.5L</li>
        <li><strong>80D:</strong> Health insurance premium — ₹25,000 (₹50K for parents 60+)</li>
        <li><strong>HRA:</strong> Actual rent paid minus 10% of salary (city-dependent formula)</li>
        <li><strong>Home Loan Interest (24b):</strong> Up to ₹2L for self-occupied property</li>
        <li><strong>NPS 80CCD(1B):</strong> Additional ₹50,000 over 80C limit</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/finance/tax-refund-calculator">US Tax Refund Calculator</a></li>
        <li><a href="/gst-calculator-india">GST Calculator India</a></li>
        <li><a href="/finance/salary-to-hourly">Salary to Hourly Converter</a></li>
        <li><a href="/finance/savings-calculator">Savings & Investment Calculator</a></li>
      </ul>
    `,
  },

  'gst-calculator-india': {
    slug: 'gst-calculator-india',
    title: 'GST Calculator India 2026 – Add or Remove GST Free Online',
    h1: 'GST Calculator India 2026 – Add or Remove GST Instantly Free',
    description: 'Calculate GST in India for any amount. Add GST (5%, 12%, 18%, 28%) or reverse-calculate to remove GST from total. Free GST calculator online for 2026.',
    keywords: 'gst calculator india, gst calculator 2026, online gst calculator, gst calculation formula india, reverse gst calculator',
    canonical: 'https://stravotech.in/gst-calculator-india',
    parentTool: '/finance/tax-refund-calculator',
    parentLabel: 'Tax Calculator',
    relatedClusters: [
      { slug: 'income-tax-calculator-india', label: 'Income Tax Calculator India' },
    ],
    faqSchema: [
      { q: 'What are the GST rates in India?', a: 'India has five GST slabs: 0% (essentials like food grains), 5% (household items, transport), 12% (processed food, business class air), 18% (most goods and services, standard rate), 28% (luxury goods, automobiles, tobacco).' },
      { q: 'How do I calculate GST on an amount?', a: 'GST Amount = (Original Price × GST Rate) / 100. Total Price = Original Price + GST Amount. Example: ₹10,000 + 18% GST = ₹10,000 + ₹1,800 = ₹11,800.' },
      { q: 'How do I remove GST from a total price?', a: 'Original Price = Total Price / (1 + GST Rate/100). Example: Remove 18% from ₹11,800 → ₹11,800 / 1.18 = ₹10,000 original price; GST = ₹1,800.' },
    ],
    content: `
      <h2>GST Calculator India 2026 – How to Add or Remove GST</h2>
      <p>The <strong>GST calculator India</strong> helps businesses, freelancers, and consumers instantly calculate Goods and Services Tax for any transaction. Whether you need to add GST to an ex-tax price, or reverse-calculate to find the pre-GST amount from a GST-inclusive bill, this tool handles both calculations instantly.</p>

      <h2>GST Formula – Add GST to Price</h2>
      <pre>GST Amount = Price × GST Rate ÷ 100</pre>
      <pre>Total Price = Price + GST Amount</pre>
      <p>Example: Service fee ₹50,000 + 18% GST = ₹50,000 + ₹9,000 = <strong>₹59,000</strong></p>

      <h2>Reverse GST Formula – Remove GST from Total</h2>
      <pre>Original Price = Total ÷ (1 + Rate ÷ 100)</pre>
      <pre>GST Amount = Total − Original Price</pre>
      <p>Example: Invoice ₹59,000 (18% GST inclusive) → Original = ₹59,000 ÷ 1.18 = <strong>₹50,000</strong>; GST = ₹9,000</p>

      <h2>GST Rate Reference Table</h2>
      <ul>
        <li><strong>0%:</strong> Raw food, books, children's education</li>
        <li><strong>5%:</strong> Household necessities, economy class air, railways</li>
        <li><strong>12%:</strong> Processed food, computers, business hotels</li>
        <li><strong>18%:</strong> Most services, electronics, restaurants, telecom</li>
        <li><strong>28%:</strong> Luxury cars, tobacco, casinos, high-end hotels</li>
      </ul>

      <h2>CGST + SGST vs IGST</h2>
      <ul>
        <li><strong>Intra-state supply:</strong> CGST (50%) + SGST (50%) = Total GST rate</li>
        <li><strong>Inter-state supply:</strong> IGST = full GST rate paid to central government</li>
      </ul>
      <p>Example: ₹1,000 at 18% intra-state → CGST 9% = ₹90 + SGST 9% = ₹90 → Total ₹1,180</p>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/income-tax-calculator-india">Income Tax Calculator India 2026-27</a></li>
        <li><a href="/finance/sales-tax-calculator">US Sales Tax Calculator</a></li>
        <li><a href="/finance/stock-profit-calculator">Stock Profit Calculator</a></li>
      </ul>
    `,
  },

  'gpa-calculator-from-percentage': {
    slug: 'gpa-calculator-from-percentage',
    title: 'GPA Calculator from Percentage – Convert % to GPA 4.0 Scale Free',
    h1: 'GPA Calculator from Percentage – Convert Marks to GPA Instantly',
    description: 'Convert your percentage marks to GPA on 4.0, 10.0, or any scale. Free GPA calculator from percentage for Indian and US students. Instant accurate results.',
    keywords: 'gpa calculator from percentage, percentage to gpa converter, convert percentage to gpa 4.0, marks to gpa calculator, gpa from marks percentage india',
    canonical: 'https://stravotech.in/gpa-calculator-from-percentage',
    parentTool: '/student/gpa-calculator',
    parentLabel: 'Free GPA Calculator',
    relatedClusters: [
      { slug: 'cgpa-to-percentage', label: 'CGPA to Percentage Converter' },
      { slug: 'percentage-calculator-marks', label: 'Percentage Calculator for Marks' },
    ],
    faqSchema: [
      { q: 'How do I convert percentage to GPA on 4.0 scale?', a: 'Use: GPA = (Percentage / 100) × 4. Example: 80% → (80/100) × 4 = 3.2 GPA. Alternatively: 90–100% = 4.0 (A), 80–89% = 3.0–3.9 (B), 70–79% = 2.0–2.9 (C), 60–69% = 1.0–1.9 (D), below 60% = 0 (F).' },
      { q: 'What is 75% in GPA?', a: '75% on a 4.0 scale ≈ 3.0 GPA (B grade). On a 10.0 scale, 75% = 7.5 CGPA.' },
      { q: 'What is 60% in GPA on a 4.0 scale?', a: '60% = approximately 1.6–2.0 GPA (D+/C- range). On a 10.0 scale, it equals approximately 6.0.' },
      { q: 'How does India convert percentage to GPA for US universities?', a: 'Most US universities accept a general formula: GPA = Percentage × 4 / 100. Some use a stepped conversion: 90%+ = 4.0, 85–90% = 3.7, 80–85% = 3.3, etc. Always check the specific university\'s conversion policy.' },
    ],
    content: `
      <h2>How to Convert Percentage to GPA – Complete Guide</h2>
      <p>Indian students applying to US, Canadian, or Australian universities frequently need to convert their percentage marks to a GPA score. Whether converting to a <strong>4.0 scale</strong> (used in USA, Canada) or a <strong>10.0 scale</strong> (used in many Indian universities), our free <strong>GPA calculator from percentage</strong> provides instant, accurate conversions.</p>

      <h2>Percentage to GPA 4.0 Scale Conversion Chart</h2>
      <ul>
        <li><strong>90–100%:</strong> 4.0 GPA (A / Distinction)</li>
        <li><strong>85–89%:</strong> 3.7 GPA (A-)</li>
        <li><strong>80–84%:</strong> 3.3 GPA (B+)</li>
        <li><strong>75–79%:</strong> 3.0 GPA (B)</li>
        <li><strong>70–74%:</strong> 2.7 GPA (B-)</li>
        <li><strong>65–69%:</strong> 2.3 GPA (C+)</li>
        <li><strong>60–64%:</strong> 2.0 GPA (C)</li>
        <li><strong>55–59%:</strong> 1.7 GPA (C-)</li>
        <li><strong>Below 55%:</strong> Below 1.5 GPA</li>
      </ul>

      <h2>Simple Formula: Percentage to GPA</h2>
      <pre>GPA (4.0 scale) = (Percentage ÷ 100) × 4</pre>
      <pre>GPA (10.0 scale) = Percentage ÷ 10</pre>
      <p>Examples: 82% → (82÷100)×4 = <strong>3.28 GPA</strong> (4.0 scale) | 82÷10 = <strong>8.2 CGPA</strong> (10.0 scale)</p>

      <h2>WES (World Education Services) Conversion</h2>
      <p>WES is commonly used for Canadian immigration and US visa applications:</p>
      <ul>
        <li>85–100% → A = 4.0</li>
        <li>75–84% → B = 3.0</li>
        <li>65–74% → C = 2.0</li>
        <li>55–64% → D = 1.0</li>
        <li>Below 55% → F = 0.0</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/student/gpa-calculator">Full GPA Calculator (by Course and Credits)</a></li>
        <li><a href="/cgpa-to-percentage">CGPA to Percentage Converter</a></li>
        <li><a href="/percentage-calculator-marks">Percentage Calculator for Marks</a></li>
        <li><a href="/student/percentage-calculator">Percentage Calculator</a></li>
      </ul>
    `,
  },

  'cgpa-to-percentage': {
    slug: 'cgpa-to-percentage',
    title: 'CGPA to Percentage Converter – VTU, CBSE, Anna, Mumbai University',
    h1: 'CGPA to Percentage Converter Free – All Indian Universities',
    description: 'Convert CGPA to percentage for VTU, CBSE, Anna University, Mumbai University, PTU, and more Indian universities. Free, instant CGPA to percentage calculator.',
    keywords: 'cgpa to percentage, cgpa to percentage calculator, cgpa to percentage converter, how to convert cgpa to percentage, vtu cgpa to percentage',
    canonical: 'https://stravotech.in/cgpa-to-percentage',
    parentTool: '/student/gpa-calculator',
    parentLabel: 'Free GPA Calculator',
    relatedClusters: [
      { slug: 'gpa-calculator-from-percentage', label: 'GPA from Percentage' },
      { slug: 'percentage-calculator-marks', label: 'Percentage Calculator for Marks' },
    ],
    faqSchema: [
      { q: 'How to convert CGPA to percentage?', a: 'Most universities use: Percentage = CGPA × 9.5 (CBSE standard). Some use CGPA × 10 or (CGPA − 0.5) × 10. Always verify your specific university formula.' },
      { q: 'What is 8.5 CGPA in percentage?', a: 'Using CBSE formula (×9.5): 8.5 × 9.5 = 80.75%. Using ×10: 8.5 × 10 = 85%. Using (CGPA−0.5)×10: (8.5−0.5)×10 = 80%.' },
      { q: 'What is 7.5 CGPA in percentage for VTU?', a: 'VTU uses the formula: Percentage = (CGPA − 0.5) × 10. So 7.5 CGPA = (7.5 − 0.5) × 10 = 70%.' },
    ],
    content: `
      <h2>CGPA to Percentage Conversion – University-Wise Formulas</h2>
      <p>Converting <strong>CGPA to percentage</strong> is required for job applications, higher education admissions, and government form submissions in India. Different universities use different conversion formulas, which creates confusion. This guide covers the exact formula for all major Indian universities.</p>

      <h2>University-Wise CGPA to Percentage Formulas</h2>
      <ul>
        <li><strong>CBSE (Class 10/12):</strong> % = CGPA × 9.5</li>
        <li><strong>VTU (Visvesvaraya Technological University):</strong> % = (CGPA − 0.5) × 10</li>
        <li><strong>Anna University:</strong> % = (CGPA − 0.5) × 10</li>
        <li><strong>Mumbai University:</strong> % = 7.1 × CGPA + 11 (approx)</li>
        <li><strong>PTU (Punjab Technical University):</strong> % = CGPA × 10</li>
        <li><strong>JNTU (Jawaharlal Nehru Technological):</strong> % = (CGPA − 0.5) × 10</li>
        <li><strong>Most other universities (default):</strong> % = CGPA × 10</li>
      </ul>

      <h2>CGPA to Percentage Quick Reference (CBSE ×9.5)</h2>
      <ul>
        <li>10.0 CGPA = 95% | 9.5 CGPA = 90.25% | 9.0 CGPA = 85.5%</li>
        <li>8.5 CGPA = 80.75% | 8.0 CGPA = 76% | 7.5 CGPA = 71.25%</li>
        <li>7.0 CGPA = 66.5% | 6.5 CGPA = 61.75% | 6.0 CGPA = 57%</li>
      </ul>

      <h2>Historical Context</h2>
      <p>CGPA (Cumulative Grade Point Average) on a 10-point scale was introduced by CBSE for Class 10 in 2010 to reduce the exam pressure of percentage-based evaluation. The ×9.5 formula was established because the average student scoring between grade bands was found to score approximately 9.5× their grade point in percentage terms.</p>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/student/gpa-calculator">GPA Calculator (4.0 and 10.0 scales)</a></li>
        <li><a href="/gpa-calculator-from-percentage">Convert Percentage to GPA</a></li>
        <li><a href="/student/percentage-calculator">Percentage Calculator</a></li>
      </ul>
    `,
  },

  'percentage-calculator-marks': {
    slug: 'percentage-calculator-marks',
    title: 'Percentage Calculator for Marks – CBSE, Board Exam & University',
    h1: 'Percentage Calculator for Marks – Instantly Find Your Score %',
    description: 'Calculate your percentage from marks for CBSE, board exams, university results, and entrance tests. Free percentage of marks calculator online. No sign-up.',
    keywords: 'percentage calculator marks, how to calculate percentage of marks, percentage calculator for cbse, marks to percentage calculator, calculate percentage from marks',
    canonical: 'https://stravotech.in/percentage-calculator-marks',
    parentTool: '/student/percentage-calculator',
    parentLabel: 'Percentage Calculator',
    relatedClusters: [
      { slug: 'gpa-calculator-from-percentage', label: 'GPA from Percentage' },
      { slug: 'cgpa-to-percentage', label: 'CGPA to Percentage' },
    ],
    faqSchema: [
      { q: 'How to calculate percentage of marks?', a: 'Percentage = (Marks Obtained ÷ Total Marks) × 100. Example: You scored 450 out of 600 → (450 ÷ 600) × 100 = 75%.' },
      { q: 'How to calculate CBSE percentage from marks?', a: 'Add all subject marks and divide by total maximum marks, multiply by 100. For CBSE Class 10 (5 subjects, 500 total): percentage = (total ÷ 500) × 100.' },
      { q: 'What is 36 out of 50 as a percentage?', a: '(36 ÷ 50) × 100 = 72%.' },
      { q: 'How to calculate aggregate percentage from all semesters?', a: 'Aggregate % = (Sum of all semester marks ÷ Sum of total marks for all semesters) × 100.' },
    ],
    content: `
      <h2>How to Calculate Percentage of Marks – Complete Guide</h2>
      <p>Whether you need to calculate your <strong>percentage of marks</strong> for CBSE Class 10/12, a university semester, a competitive exam like JEE or NEET, or an interview scorecard — this free tool gives you the answer in seconds.</p>

      <h2>Percentage Formula</h2>
      <pre>Percentage = (Marks Obtained ÷ Total Marks) × 100</pre>

      <h2>Examples by Exam</h2>
      <ul>
        <li><strong>CBSE Class 10 (5 subjects, 500 total):</strong> Scored 432 → (432÷500)×100 = <strong>86.4%</strong></li>
        <li><strong>CBSE Class 12 (5 subjects, 500 total):</strong> Scored 378 → (378÷500)×100 = <strong>75.6%</strong></li>
        <li><strong>JEE Mains (300 total):</strong> Scored 210 → (210÷300)×100 = <strong>70%</strong></li>
        <li><strong>NEET (720 total):</strong> Scored 580 → (580÷720)×100 = <strong>80.56%</strong></li>
        <li><strong>University semester (600 total):</strong> Scored 492 → (492÷600)×100 = <strong>82%</strong></li>
      </ul>

      <h2>Aggregate Percentage Across Semesters</h2>
      <pre>Aggregate % = Total Marks Obtained (all sem) ÷ Total Maximum Marks (all sem) × 100</pre>
      <p>Example: 4 semesters, maximum 600 each (2400 total). Scored: 480+510+495+520 = 2005. Aggregate = (2005÷2400)×100 = <strong>83.54%</strong></p>

      <h2>Grade Equivalents (Common Scale)</h2>
      <ul>
        <li>90%+ → O (Outstanding) / A+ | 80–89% → A (Excellent)</li>
        <li>70–79% → B+ (Good) | 60–69% → B (Above Average)</li>
        <li>50–59% → C (Average) | Below 50% → D/F</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/student/percentage-calculator">Full Percentage Calculator (increase/decrease)</a></li>
        <li><a href="/gpa-calculator-from-percentage">Convert Percentage to GPA</a></li>
        <li><a href="/cgpa-to-percentage">CGPA to Percentage</a></li>
        <li><a href="/student/gpa-calculator">GPA Calculator</a></li>
      </ul>
    `,
  },
};

/* ─── Component ─────────────────────────────────────────────────────────────── */
const ClusterPage: React.FC = () => {
  const slug = typeof window !== 'undefined'
    ? window.location.pathname.replace(/^\//, '').split('/')[0]
    : '';
  const page = CLUSTER_PAGES[slug];

  if (!page) {
    return (
      <div className="text-center py-20 max-w-2xl mx-auto">
        <h1 className="text-4xl font-black mb-4 text-slate-900">Page Not Found</h1>
        <p className="text-slate-500 mb-8">This page doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
          <i className="fa-solid fa-arrow-left mr-2"></i> Return Home
        </Link>
      </div>
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqSchema.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.canonical,
    isPartOf: { '@type': 'WebSite', url: 'https://stravotech.in', name: 'Stravotech' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stravotech.in/' },
      { '@type': 'ListItem', position: 2, name: page.h1, item: page.canonical },
    ],
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <SEO
        title={page.title}
        description={page.description}
        keywords={page.keywords}
        canonical={page.canonical}
        openGraph={{ title: page.title, description: page.description, url: page.canonical }}
        twitterHandle="@Stravotech"
        structuredData={[faqSchema, webPageSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center text-[11px] font-black uppercase tracking-widest text-slate-400 space-x-3">
        <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-[8px] opacity-30"></i>
        <Link to={page.parentTool} className="hover:text-indigo-600 transition-colors">{page.parentLabel}</Link>
        <i className="fa-solid fa-chevron-right text-[8px] opacity-30"></i>
        <span className="text-slate-900 truncate max-w-[200px]">{page.h1}</span>
      </nav>

      {/* Header */}
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-indigo-100">
            <i className="fa-solid fa-magnifying-glass-chart"></i>
            <span>SEO Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
            {page.h1}
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-3xl leading-relaxed">{page.description}</p>
        </div>

        {/* CTA to parent tool */}
        <Link
          to={page.parentTool}
          className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 hover:scale-105"
        >
          <i className="fa-solid fa-bolt"></i>
          Open {page.parentLabel} Tool →
        </Link>
      </section>

      {/* Related cluster pages */}
      {page.relatedClusters.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {page.relatedClusters.map((c) => (
            <Link
              key={c.slug}
              to={`/${c.slug}`}
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-700 transition-colors border border-slate-200 hover:border-indigo-200"
            >
              {c.label} →
            </Link>
          ))}
        </div>
      )}

      {/* Main SEO Content */}
      <article
        className="prose prose-slate max-w-none prose-headings:font-black prose-h2:text-2xl prose-h2:text-slate-900 prose-h3:text-xl prose-h3:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-indigo-600 prose-a:font-semibold hover:prose-a:text-indigo-800 prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200 prose-pre:text-indigo-700 prose-pre:font-mono prose-pre:text-sm"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />

      {/* FAQ Section */}
      <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {page.faqSchema.map((item, i) => (
            <div key={i} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
              <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to main tool */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 text-center">
        <p className="text-slate-700 font-medium mb-4">Ready to use the tool? It's free — no sign-up required.</p>
        <Link
          to={page.parentTool}
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          <i className="fa-solid fa-arrow-right"></i>
          Go to {page.parentLabel}
        </Link>
      </div>
    </div>
  );
};

export default ClusterPage;
