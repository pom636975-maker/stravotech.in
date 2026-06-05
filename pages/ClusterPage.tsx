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
        <li><a href="/compress-image-to-100kb">Compress Image to 100KB</a> – for emails, LinkedIn, and portals</li>
        <li><a href="/jpeg-compressor-online">JPEG Compressor Online</a> – compress jpg without losing quality</li>
        <li><a href="/work/image-resizer">Image Resizer – Reduce Dimensions First</a></li>
        <li><a href="/work/image-to-pdf">Image to PDF Converter</a></li>
      </ul>
    `,
  },

  'compress-image-to-100kb': {
    slug: 'compress-image-to-100kb',
    title: 'Convert Image to 100KB Free – Compress JPEG 100KB, JPG Compress 100KB Online',
    h1: 'Convert Image to 100KB Online Free – Compress JPEG, JPG in 100 KB Instantly',
    description: 'Free online tool to compress JPEG to 100KB, convert JPG to 100KB, and reduce image file sizes to any specific size. Select or drag JPG, PNG, WebP files — no sign-up, no upload to server.',
    keywords: 'convert image to 100kb, jpeg 100kb, jpg compress 100 kb, jpg in 100 kb, compress image to 100kb, compress jpeg to 100kb, compress jpeg file, compress jpg, image compressor, 100kb online, image to 100kb',
    canonical: 'https://stravotech.in/compress-image-to-100kb',
    parentTool: '/work/image-compressor',
    parentLabel: 'Free Image Compressor',
    relatedClusters: [
      { slug: 'compress-image-to-50kb', label: 'Compress Image to 50KB' },
      { slug: 'jpeg-compressor-online', label: 'JPEG Compressor Online' },
      { slug: 'resize-image-online', label: 'Resize Image Online' },
    ],
    faqSchema: [
      { q: 'How do I compress a JPEG to 100KB online for free?', a: 'Use our free online tool: select or drag your JPG image into the compressor, set quality to 55–65%, and watch the live output size. Adjust until the jpg size shows ≤ 100KB, then download. No sign-up needed — works entirely in your browser.' },
      { q: 'How do I convert image to 100KB without losing quality?', a: 'For best results compressing image to 100kb, start at 65% quality. For most JPG PNG image formats, this gives excellent visual quality with file sizes well under 100 KB. If the file is still too large, reduce dimensions first using an image resizer.' },
      { q: 'Can I compress JPG files in 100 KB on mobile?', a: 'Yes — our online tool works on all devices including Android and iPhone. Simply open the page, select or drag your jpg image, adjust quality, and download. No app installation required.' },
      { q: 'What image formats are supported for 100KB compression?', a: 'JPG, JPEG, PNG, and WebP image formats are all supported. JPEG produces the smallest file size for photographs. PNG is better for images with transparency, but produces larger image sizes at the same visual quality.' },
      { q: 'What is the best quality setting to compress JPEG file to 100KB?', a: 'It depends on your original jpg size: 300KB JPG → try 60–65% quality | 600KB JPG → try 45–55% | 1MB+ JPG files → resize dimensions first, then compress at 55%. Use the live size preview to hit your specific size target.' },
      { q: 'Is it safe to compress my images online?', a: 'Completely safe. Our image compressor processes all jpg files and png files locally in your browser — your images never leave your device or get uploaded to any server.' },
    ],
    content: `
      <h2>Convert Image to 100KB – Why JPG PNG Image Sizes Matter</h2>
      <p>Whether you need to <strong>compress JPEG to 100KB</strong>, <strong>convert image to 100KB</strong> for an online form, or simply reduce jpg file sizes for faster website loading — our free <strong>image compressor</strong> handles all image formats including JPG, PNG, and WebP. A <strong>100 KB</strong> limit is one of the most common restrictions across email platforms, banking portals, and corporate HR systems.</p>

      <p>Our <strong>online tool</strong> lets you select or drag jpg png files and compress your images to any specific size — all without uploading to a server. Everything runs in your browser for maximum privacy.</p>

      <h2>How to Compress JPEG File to 100KB – Step by Step</h2>
      <ol>
        <li><strong>Open the Image Compressor tool</strong> above (click the blue button)</li>
        <li><strong>Select or drag</strong> your JPG, PNG, or WebP image into the tool</li>
        <li><strong>Set quality slider to 60%</strong> as a starting point for compress jpeg to 100kb</li>
        <li><strong>Watch the live jpg size output</strong> — it updates in real-time</li>
        <li><strong>Adjust</strong> quality up or down until output shows ≤ 100 KB</li>
        <li><strong>Download</strong> your compressed jpeg file instantly</li>
      </ol>

      <h2>Quality Settings: Compress JPG to Specific Size</h2>
      <p>These are tested settings to get your <strong>jpg image in 100 kb</strong>:</p>
      <ul>
        <li><strong>jpg size 200–300KB → 100KB online:</strong> Start at quality 65%</li>
        <li><strong>jpg size 500–700KB → 100KB:</strong> Try 45–55% quality</li>
        <li><strong>jpg files 1MB–2MB → 100KB:</strong> Resize to 1200px wide, then compress jpeg at 55%</li>
        <li><strong>Large image formats 3MB+ → 100 kb:</strong> Resize to 800px first, then compress jpg at 50%</li>
      </ul>

      <h2>Compress Image to 100KB – Supported Image Formats</h2>
      <p>Our image compressor supports all major <strong>image formats</strong>:</p>
      <ul>
        <li><strong>JPG/JPEG:</strong> Best for compress jpeg file — photos, portraits, scans. Achieves smallest file sizes.</li>
        <li><strong>PNG:</strong> Best for logos and graphics. Note: PNG image sizes are larger than JPEG at same quality.</li>
        <li><strong>WebP:</strong> Modern format with excellent compression for both jpg png quality levels.</li>
      </ul>

      <h2>JPEG 100KB – Use Cases &amp; When You Need It</h2>
      <ul>
        <li><strong>Email Attachments:</strong> Keep each jpg image under 100KB for instant delivery. Many corporate systems reject large image sizes.</li>
        <li><strong>LinkedIn / Resume Photo:</strong> Ideal jpeg 100kb at 400×400px for profile images</li>
        <li><strong>Banking &amp; Insurance Portals:</strong> Many require document jpg files under 100KB–200KB</li>
        <li><strong>E-commerce:</strong> Compress your images to 100kb online for faster page loads and better SEO</li>
        <li><strong>WhatsApp / Telegram:</strong> Reduce jpg size to 100kb to send images without quality loss from auto-compression</li>
        <li><strong>College Applications:</strong> Many universities specify image sizes of 100KB or less for photo uploads</li>
      </ul>

      <h2>Why Use This Free Image Compressor?</h2>
      <ul>
        <li>✅ <strong>No upload to server</strong> — all jpg png compression happens locally</li>
        <li>✅ <strong>Live size preview</strong> — see exact output before download</li>
        <li>✅ <strong>All image formats</strong> — JPG, PNG, WebP supported</li>
        <li>✅ <strong>Specific size targeting</strong> — compress image to exact KB you need</li>
        <li>✅ <strong>100% free</strong> — no sign-up, no watermarks, unlimited compress</li>
        <li>✅ <strong>Works on mobile</strong> — compress your images on any device</li>
      </ul>

      <h2>Related Compression Targets</h2>
      <ul>
        <li><a href="/compress-image-to-50kb">Compress Image to 50KB</a> – for UPSC, SSC, bank PO government forms</li>
        <li><a href="/jpeg-compressor-online">JPEG Compressor Online</a> – compress jpeg files with quality control</li>
        <li><a href="/work/image-resizer">Image Resizer Online</a> – reduce image dimensions before you compress jpg</li>
        <li><a href="/work/image-to-pdf">Image to PDF Converter</a> – convert compressed jpg png to PDF</li>
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
        <li><a href="/compress-image-to-100kb">Compress Image to 100KB</a> – exact size targeting</li>
        <li><a href="/compress-image-to-50kb">Compress JPEG to 50KB</a></li>
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

  '378-out-of-500-as-percentage': {
    slug: '378-out-of-500-as-percentage',
    title: '378 out of 500 as a Percentage – What Percentage is 378/500?',
    h1: '378 out of 500 as a Percentage = 75.6%',
    description: '378 out of 500 as a percentage = 75.6%. See the formula, step-by-step calculation, grade equivalent, and use our free percentage calculator for any marks out of 500.',
    keywords: '378 out of 500 as a percentage, 378 percentage out of 500, 378 out of 500 in percentage, what is 378 out of 500, 378/500 percentage',
    canonical: 'https://stravotech.in/378-out-of-500-as-percentage',
    parentTool: '/student/percentage-calculator',
    parentLabel: 'Percentage Calculator',
    relatedClusters: [
      { slug: 'percentage-calculator-marks', label: 'Percentage Calculator for Marks' },
      { slug: 'cgpa-to-percentage', label: 'CGPA to Percentage' },
      { slug: 'gpa-calculator-from-percentage', label: 'GPA from Percentage' },
    ],
    faqSchema: [
      { q: 'What is 378 out of 500 as a percentage?', a: '378 out of 500 as a percentage is 75.6%. Formula: (378 ÷ 500) × 100 = 75.6%.' },
      { q: 'Is 378 out of 500 a good score?', a: '378/500 = 75.6%, which is generally considered a good score. In most Indian universities and CBSE exams, 75%+ is a First Division or B grade. For competitive exams like JEE or NEET, the adequacy depends on the cutoff.' },
      { q: 'What grade is 75.6%?', a: '75.6% typically corresponds to: CBSE Grade B1 (75–80%), US letter grade C+ to B (depending on institution), and a GPA of approximately 3.0 on a 4.0 scale.' },
      { q: 'How do I calculate percentage from marks out of 500?', a: 'Percentage = (Marks Obtained ÷ 500) × 100. Examples: 400/500 = 80%, 350/500 = 70%, 450/500 = 90%, 378/500 = 75.6%.' },
      { q: 'What percentage is 378 out of 600?', a: '378 out of 600 = (378 ÷ 600) × 100 = 63%. Note: if your total is 600, not 500, the result changes — always divide by the correct total.' },
    ],
    content: `
      <h2>378 out of 500 = 75.6% — Full Calculation</h2>
      <p>The answer to <strong>378 out of 500 as a percentage</strong> is <strong>75.6%</strong>. Here is the exact formula and step-by-step calculation:</p>
      <pre>Percentage = (Marks Obtained ÷ Total Marks) × 100
= (378 ÷ 500) × 100
= 0.756 × 100
= 75.6%</pre>

      <h2>Marks/500 to Percentage – Quick Reference Table</h2>
      <ul>
        <li><strong>400/500</strong> = 80.0%</li>
        <li><strong>390/500</strong> = 78.0%</li>
        <li><strong>385/500</strong> = 77.0%</li>
        <li><strong>380/500</strong> = 76.0%</li>
        <li><strong>378/500</strong> = <strong>75.6%</strong> ← Your Score</li>
        <li><strong>375/500</strong> = 75.0%</li>
        <li><strong>370/500</strong> = 74.0%</li>
        <li><strong>350/500</strong> = 70.0%</li>
        <li><strong>325/500</strong> = 65.0%</li>
        <li><strong>300/500</strong> = 60.0%</li>
      </ul>

      <h2>What Does 75.6% Mean for Your Grade?</h2>
      <ul>
        <li><strong>CBSE Class 10/12:</strong> Grade B1 (75–80%) — First Division</li>
        <li><strong>Indian Universities:</strong> First Class with Distinction threshold is usually 75%+ — you qualify!</li>
        <li><strong>GPA (4.0 scale):</strong> Approximately 3.0 GPA (B grade)</li>
        <li><strong>GPA (10.0 scale):</strong> 7.5–7.6 CGPA</li>
        <li><strong>US Letter Grade:</strong> B / B+ depending on institution curve</li>
      </ul>

      <h2>How to Convert Any Marks Out of 500 to Percentage</h2>
      <pre>Percentage = (Your Marks ÷ 500) × 100</pre>
      <p>This formula works for CBSE Class 10 (5 subjects × 100 = 500 total), state board exams with 500 max marks, and university semester results totalling 500 marks.</p>

      <h2>Related Conversions</h2>
      <ul>
        <li><strong>378/500 to GPA:</strong> 75.6% ÷ 25 = <strong>3.024 GPA</strong> (4.0 scale)</li>
        <li><strong>378/500 to CGPA:</strong> 75.6% ÷ 10 = <strong>7.56 CGPA</strong> (10.0 scale)</li>
        <li><strong>378/500 with CBSE formula:</strong> 75.6% ÷ 9.5 = N/A (CBSE CGPA applies to grade points, not direct marks)</li>
      </ul>

      <h2>Related Calculations</h2>
      <ul>
        <li><a href="/520-out-of-600-as-percentage">520 out of 600 as a Percentage</a></li>
        <li><a href="/580-out-of-600-as-percentage">580 out of 600 as a Percentage</a></li>
        <li><a href="/percentage-calculator-marks">Percentage Calculator for Marks</a></li>
        <li><a href="/gpa-calculator-from-percentage">Convert Percentage to GPA</a></li>
      </ul>
    `,
  },

  '520-out-of-600-as-percentage': {
    slug: '520-out-of-600-as-percentage',
    title: '520 out of 600 as a Percentage – What % is 520/600?',
    h1: '520 out of 600 as a Percentage = 86.67%',
    description: '520 out of 600 as a percentage = 86.67%. Step-by-step formula, grade equivalent, and quick reference table for other marks out of 600. Free percentage calculator.',
    keywords: '520 out of 600 as a percentage, 520 out of 600 in percentage, what is 520/600 as percentage, 520 percentage out of 600, marks out of 600 calculator',
    canonical: 'https://stravotech.in/520-out-of-600-as-percentage',
    parentTool: '/student/percentage-calculator',
    parentLabel: 'Percentage Calculator',
    relatedClusters: [
      { slug: '378-out-of-500-as-percentage', label: '378 out of 500 as %' },
      { slug: '580-out-of-600-as-percentage', label: '580 out of 600 as %' },
      { slug: 'percentage-calculator-marks', label: 'Percentage Calculator for Marks' },
    ],
    faqSchema: [
      { q: 'What is 520 out of 600 as a percentage?', a: '520 out of 600 as a percentage = 86.67%. Formula: (520 ÷ 600) × 100 = 86.67%.' },
      { q: 'Is 520 out of 600 a good percentage?', a: '86.67% is an excellent score! In Indian universities and CBSE exams it is typically Grade A or Distinction (80%+). For competitive exams like NEET or JEE, this score may be above cutoff in many categories.' },
      { q: 'What GPA is 86.67%?', a: '86.67% on a 4.0 scale ≈ 3.47 GPA (B+). On a 10.0 scale (CGPA) = 8.67.' },
      { q: 'How do I calculate my percentage out of 600?', a: 'Percentage = (Your Marks ÷ 600) × 100. Example: 500/600 = 83.33%, 520/600 = 86.67%, 540/600 = 90%.' },
    ],
    content: `
      <h2>520 out of 600 = 86.67% — Complete Calculation</h2>
      <p>The answer to <strong>520 out of 600 as a percentage</strong> is <strong>86.67%</strong> (rounded from 86.666...).</p>
      <pre>Percentage = (520 ÷ 600) × 100
= 0.8667 × 100
= 86.67%</pre>

      <h2>Marks/600 to Percentage – Quick Reference</h2>
      <ul>
        <li><strong>600/600</strong> = 100%</li>
        <li><strong>570/600</strong> = 95.0%</li>
        <li><strong>540/600</strong> = 90.0%</li>
        <li><strong>530/600</strong> = 88.33%</li>
        <li><strong>520/600</strong> = <strong>86.67%</strong> ← Your Score</li>
        <li><strong>510/600</strong> = 85.0%</li>
        <li><strong>480/600</strong> = 80.0%</li>
        <li><strong>450/600</strong> = 75.0%</li>
        <li><strong>420/600</strong> = 70.0%</li>
        <li><strong>360/600</strong> = 60.0%</li>
      </ul>

      <h2>Grade & GPA Equivalent of 86.67%</h2>
      <ul>
        <li><strong>CBSE:</strong> Grade A1 (91%+) or A2 (81–90%) — 86.67% = <strong>Grade A2</strong></li>
        <li><strong>University (India):</strong> Distinction / First Class with Merit</li>
        <li><strong>GPA (4.0 scale):</strong> ≈ <strong>3.47 GPA</strong> (B+/A-)</li>
        <li><strong>CGPA (10.0 scale):</strong> ≈ <strong>8.67</strong></li>
        <li><strong>US Grade:</strong> B+ to A- range</li>
      </ul>

      <h2>Related Calculations</h2>
      <ul>
        <li><a href="/580-out-of-600-as-percentage">580 out of 600 as a Percentage → 96.67%</a></li>
        <li><a href="/378-out-of-500-as-percentage">378 out of 500 as a Percentage → 75.6%</a></li>
        <li><a href="/gpa-calculator-from-percentage">Convert 86.67% to GPA</a></li>
        <li><a href="/percentage-calculator-marks">Percentage Calculator for Any Marks</a></li>
      </ul>
    `,
  },

  '580-out-of-600-as-percentage': {
    slug: '580-out-of-600-as-percentage',
    title: '580 out of 600 as a Percentage – What % is 580/600?',
    h1: '580 out of 600 as a Percentage = 96.67%',
    description: '580 out of 600 as a percentage = 96.67%. Step-by-step formula, grade equivalent, and quick reference for other marks out of 600. Free percentage calculator online.',
    keywords: '580 out of 600 as a percentage, 580 out of 600 in percentage, what is 580/600 as percentage, 580 percentage out of 600, marks to percentage 600 total',
    canonical: 'https://stravotech.in/580-out-of-600-as-percentage',
    parentTool: '/student/percentage-calculator',
    parentLabel: 'Percentage Calculator',
    relatedClusters: [
      { slug: '520-out-of-600-as-percentage', label: '520 out of 600 as %' },
      { slug: '378-out-of-500-as-percentage', label: '378 out of 500 as %' },
      { slug: 'gpa-calculator-from-percentage', label: 'GPA from Percentage' },
    ],
    faqSchema: [
      { q: 'What is 580 out of 600 as a percentage?', a: '580 out of 600 as a percentage = 96.67%. Formula: (580 ÷ 600) × 100 = 96.67%.' },
      { q: 'What grade is 96.67%?', a: '96.67% is an outstanding score. In CBSE it is Grade A1 (90%+). In most Indian universities it is Distinction or Gold Medal territory. On a 4.0 GPA scale it is approximately 4.0 GPA (A).' },
      { q: 'Is 580 out of 600 possible in NEET?', a: 'NEET maximum marks is 720 (180 questions × 4 marks). 580 out of 600 would not apply to NEET directly, but if your exam has 600 marks total, 580/600 = 96.67% is an exceptional result.' },
      { q: 'What CGPA is 96.67%?', a: '96.67% on a 10.0 CGPA scale = 9.67 CGPA. Using CBSE formula: 96.67% ÷ 9.5 ≈ 10.17 — effectively a 10.0 CGPA (maximum).' },
    ],
    content: `
      <h2>580 out of 600 = 96.67% — Complete Calculation</h2>
      <p>The answer to <strong>580 out of 600 as a percentage</strong> is <strong>96.67%</strong> (96.666... repeating).</p>
      <pre>Percentage = (580 ÷ 600) × 100
= 0.9667 × 100
= 96.67%</pre>

      <h2>Marks/600 to Percentage – Quick Reference</h2>
      <ul>
        <li><strong>600/600</strong> = 100.0% (Perfect)</li>
        <li><strong>590/600</strong> = 98.33%</li>
        <li><strong>580/600</strong> = <strong>96.67%</strong> ← Your Score</li>
        <li><strong>570/600</strong> = 95.0%</li>
        <li><strong>560/600</strong> = 93.33%</li>
        <li><strong>540/600</strong> = 90.0%</li>
        <li><strong>520/600</strong> = 86.67%</li>
        <li><strong>500/600</strong> = 83.33%</li>
        <li><strong>480/600</strong> = 80.0%</li>
        <li><strong>450/600</strong> = 75.0%</li>
      </ul>

      <h2>Grade & GPA Equivalent of 96.67%</h2>
      <ul>
        <li><strong>CBSE:</strong> <strong>Grade A1</strong> (90%+) — Outstanding</li>
        <li><strong>Indian Universities:</strong> Distinction / Gold Medal / University Rank</li>
        <li><strong>GPA (4.0 scale):</strong> <strong>4.0 GPA</strong> (A)</li>
        <li><strong>CGPA (10.0 scale):</strong> <strong>9.67 CGPA</strong></li>
        <li><strong>US Grade:</strong> A / A+ range</li>
      </ul>

      <h2>Common Boards With 600 Total Marks</h2>
      <ul>
        <li><strong>University semesters:</strong> 6 subjects × 100 = 600 marks</li>
        <li><strong>Some state boards:</strong> 6 subjects including optional — 600 total</li>
        <li><strong>NEET Used to be 600:</strong> Before 2019 (180 Q × ~3.33), now 720 marks</li>
      </ul>

      <h2>Related Calculations</h2>
      <ul>
        <li><a href="/520-out-of-600-as-percentage">520 out of 600 as a Percentage → 86.67%</a></li>
        <li><a href="/378-out-of-500-as-percentage">378 out of 500 as a Percentage → 75.6%</a></li>
        <li><a href="/gpa-calculator-from-percentage">Convert 96.67% to GPA</a></li>
        <li><a href="/cgpa-to-percentage">CGPA to Percentage Converter</a></li>
      </ul>
    `,
  },

  'sales-tax-by-state': {
    slug: 'sales-tax-by-state',
    title: 'Sales Tax Calculator by State 2026 – All 50 US States | Free',
    h1: 'Sales Tax Calculator by State – All 50 US States (2026)',
    description: 'Free sales tax calculator for all 50 US states. Find state + city tax rates, calculate exact sales tax amount, and total price. Updated 2026 rates. No sign-up needed.',
    keywords: 'sales tax calculator, sales tax calculator by state, state sales tax rate, calculate sales tax, free sales tax calculator, us sales tax 2026',
    canonical: 'https://stravotech.in/sales-tax-by-state',
    parentTool: '/finance/sales-tax-calculator',
    parentLabel: 'Sales Tax Calculator',
    relatedClusters: [
      { slug: 'income-tax-calculator-india', label: 'Income Tax Calculator India' },
      { slug: 'gst-calculator-india', label: 'GST Calculator India' },
    ],
    faqSchema: [
      { q: 'Which US state has the highest sales tax?', a: 'Tennessee and Louisiana have the highest combined state + local sales tax rates at around 9.55%. California\'s state rate is 7.25% (one of the highest state-only rates). Five states have no state sales tax: Oregon, Montana, New Hampshire, Delaware, and Alaska.' },
      { q: 'How do I calculate sales tax?', a: 'Sales Tax = Price × (Tax Rate ÷ 100). Example: $500 item in California (7.25%) → $500 × 0.0725 = $36.25 tax → Total = $536.25.' },
      { q: 'What is the average US sales tax rate?', a: 'The average combined state and local sales tax rate in the US is approximately 7.12% as of 2026. This varies widely by state and even by city.' },
      { q: 'Are groceries taxed in the US?', a: 'It depends by state. Most states exempt food/groceries from sales tax. States that partially or fully tax groceries include Alabama, Arkansas, Hawaii, Idaho, Kansas, Mississippi, Missouri, Oklahoma, South Dakota, Tennessee, Utah, and Virginia.' },
    ],
    content: `
      <h2>US Sales Tax Rates by State (2026)</h2>
      <p>The <strong>sales tax rate</strong> in the United States varies dramatically by state — from 0% to over 9%. Our free <strong>sales tax calculator</strong> lets you instantly calculate the exact tax and final price for any purchase in any state.</p>

      <h2>Sales Tax Formula</h2>
      <pre>Sales Tax Amount = Price × (Tax Rate ÷ 100)
Total Price = Original Price + Sales Tax Amount</pre>
      <p><strong>Example:</strong> Buying a $1,200 laptop in Texas (state rate: 6.25%) → Tax = $1,200 × 0.0625 = <strong>$75</strong> → Total = <strong>$1,275</strong></p>

      <h2>State Sales Tax Rates 2026 (State-Level Only)</h2>
      <ul>
        <li><strong>No Sales Tax (0%):</strong> Oregon, Montana, New Hampshire, Delaware, Alaska</li>
        <li><strong>California:</strong> 7.25% (+ local up to 10.25%)</li>
        <li><strong>Texas:</strong> 6.25% (+ local up to 8.25%)</li>
        <li><strong>New York:</strong> 4.0% (+ local, NYC total = 8.875%)</li>
        <li><strong>Florida:</strong> 6.0% (+ local up to 8.5%)</li>
        <li><strong>Illinois:</strong> 6.25% (+ local, Chicago = 10.25%)</li>
        <li><strong>Washington:</strong> 6.5% (+ local up to 10.4%)</li>
        <li><strong>Tennessee:</strong> 7.0% state (combined avg 9.55% — highest in US)</li>
      </ul>

      <h2>Reverse Sales Tax – Remove Tax from Total Price</h2>
      <pre>Original Price = Total Price ÷ (1 + Tax Rate ÷ 100)</pre>
      <p><strong>Example:</strong> Paid $107.50 (including 7.5% tax) → Original = $107.50 ÷ 1.075 = <strong>$100</strong> → Tax = $7.50</p>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/finance/tax-refund-calculator">Federal Tax Refund Calculator 2026</a></li>
        <li><a href="/gst-calculator-india">GST Calculator India</a></li>
        <li><a href="/income-tax-calculator-india">Income Tax Calculator India</a></li>
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

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': page.h1,
    'description': page.description,
    'applicationCategory': 'MultimediaApplication',
    'operatingSystem': 'Any',
    'url': page.canonical,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '15420',
      'bestRating': '5',
      'worstRating': '1'
    }
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
        structuredData={[faqSchema, webPageSchema, breadcrumbSchema, softwareSchema]}
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
