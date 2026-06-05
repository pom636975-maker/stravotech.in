import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const LegalPage: React.FC<{ type?: string }> = ({ type }) => {
  const contentMap: Record<string, any> = {
    'about': {
      title: 'About Stravotech & Our Mission',
      content: (
        <>
          <p className="first-letter:text-5xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left mb-6">
            Stravotech was founded by Om Patel with a clear vision: to democratize access to premium, accurate, and lightning-fast calculators without paywalls or invasive tracking. 
          </p>
          <p className="mb-6">
            In an internet flooded with clunky, outdated, and ad-heavy utilities, we realized students, freelancers, and professionals needed an elegant toolkit they could trust. We strive to provide calculations mathematically aligned with <strong>NCERT standards (India)</strong>, rigorous financial benchmarks, and university grading systems across North America and Asia.
          </p>
          <h3 className="text-2xl font-black text-slate-800 mt-10 mb-4">Our E-E-A-T Commitment</h3>
          <p className="mb-6">
            As part of our commitment to Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T), Stravotech calculators are manually verified for logical accuracy against established Wolfram Alpha models and active Government Taxation Boards (e.g., GST Council). All logic happens instantaneously on your device, ensuring maximum privacy and data security.
          </p>
        </>
      )
    },
    'privacy': {
      title: 'Privacy Policy & Cookie Usage',
      content: (
        <>
          <p className="mb-6">
            At Stravotech, your privacy is our priority. Unlike cloud-based SaaS tools, <strong>none of the data you enter into our calculators (like your grades, salary, or financial investments) is ever sent to our servers.</strong> The calculations are processed entirely within your local browser.
          </p>
          <h3 className="text-2xl font-black text-slate-800 mt-10 mb-4">100% Ad-Free Commitment</h3>
          <p className="mb-6">
            In our commitment to providing a clean, fast, and privacy-respecting user experience, <strong>Stravotech is entirely ad-free</strong>. We do not use Google AdSense, third-party advertising cookies, or invasive tracking scripts. None of your inputs or behavioral data is sold to advertisers or marketing networks.
          </p>

          <h3 className="text-2xl font-black text-slate-800 mt-10 mb-4">Log Files & Analytics</h3>
          <p className="mb-6">
            Like many other Web sites, Stravotech uses standard analytics tools that collect non-personally identifying information. This information includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user movement, and gather demographic information. This is used solely to improve the user experience.
          </p>
        </>
      )
    },
    'terms': {
      title: 'Terms of Service',
      content: (
        <>
          <p className="mb-6">
            By accessing Stravotech.in, you inherently agree to these Terms of Service. If you do not agree with any of these terms, you are prohibited from using or accessing this site. All materials contained in this website are protected by applicable copyright and trademark law.
          </p>
          <h3 className="text-2xl font-black text-slate-800 mt-10 mb-4">Educational & Estimational Purposeless</h3>
          <p className="mb-6">
            The calculators provided on Stravotech (such as Mortgage, Loan, Tax, and GPA) are designed to provide highly accurate <strong>estimations</strong>. However, algorithms cannot account for specific local banking regulations, hidden broker fees, university-specific grading curves, or retroactive tax code changes. 
            Therefore, <strong>Stravotech acts strictly as an informational aid</strong> and does not replace official, certified financial, legal, or academic advisement.
          </p>
          <h3 className="text-2xl font-black text-slate-800 mt-10 mb-4">User License</h3>
          <p className="mb-6">
            Permission is granted to temporarily use the tools on Stravotech for personal, non-commercial, and commercial informational viewing. You may not attempt to reverse engineer any software contained on Stravotech's website or scrape the content programmatically without our express written consent.
          </p>
        </>
      )
    },
    'contact': {
      title: 'Contact the Stravotech Team',
      content: (
        <>
          <p className="mb-6">
            We are deeply committed to maintaining the highest standards for our users. Whether you have found a minor algorithmic discrepancy in a calculator, want to suggest a new tool, or have a business inquiry, we'd love to hear from you.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mt-8 max-w-md">
            <h4 className="font-black text-slate-800 mb-2">Primary Contact Details</h4>
            <p className="text-slate-600 mb-4"><strong>Founder:</strong> Om Patel</p>
            <p className="text-slate-600 mb-4"><strong>Email:</strong> <a href="mailto:support@stravotech.in" className="text-indigo-600 hover:underline">support@stravotech.in</a></p>
            <p className="text-slate-600 text-sm">We typically respond to technical calculator feedback within 24-48 business hours.</p>
          </div>
        </>
      )
    },
    'disclaimer': {
      title: 'Legal & Accuracy Disclaimer',
      content: (
        <>
          <p className="mb-6">
            The materials and tools on Stravotech's website are provided on an 'as is' basis. Stravotech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="mb-6">
            Furthermore, Stravotech does not warrant or make any representations concerning the absolute precision, likely results, or reliability of the use of the mathematical materials on its website. When applying for loans (Mortgages, EMI) or calculating official grades (GPA, Percentage), users must verify the finalized numbers directly with their corresponding financial institutions or universities.
          </p>
        </>
      )
    }
  };

  const page = contentMap[type || 'about'];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <SEO 
        title={`${page.title} | Stravotech`} 
        description={`Read the official ${page.title} for Stravotech.`} 
      />
      <div className="mb-12">
        <div className="w-16 h-1 w-1 bg-indigo-600 mb-6"></div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">{page.title}</h1>
      </div>
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-2 font-medium text-lg">
        {page.content}
        
        <div className="bg-slate-50 p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 mt-16">
          <h3 className="text-2xl font-black text-slate-900 mb-6">The Stravotech Quality Guarantee</h3>
          <ul className="space-y-4 text-base">
             <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-indigo-600 mt-1 mr-4"></i>
                <span className="leading-snug"><strong>Privacy First:</strong> Your calculation data stays locally on your device. We never capture raw inputs.</span>
             </li>
             <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-indigo-600 mt-1 mr-4"></i>
                <span className="leading-snug"><strong>Always Free:</strong> Unrestricted access to 30+ premium tools without any paywalls or required signups.</span>
             </li>
             <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-indigo-600 mt-1 mr-4"></i>
                <span className="leading-snug"><strong>Verified Logic:</strong> Algorithms consistently tested against real-world systems, from Indian GST to US Academic scales.</span>
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
