import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const LegalPage: React.FC<{ type?: string }> = ({ type }) => {
  const contentMap: Record<string, any> = {
    'about': {
      title: 'Our Mission at Stravotech',
      content: 'Stravotech is more than just a collection of calculators; it is a vision to democratize professional-grade information. In a world where precision is often hidden behind paywalls or complex accounts, we offer a sanctuary of simplicity. Our toolkit is meticulously engineered to provide students and professionals across North America with the data they need to make informed decisions—instantly and for free.'
    },
    'privacy': {
      title: 'Privacy & Data Security',
      content: 'At Stravotech, your data never leaves your device. Unlike traditional "Cloud" tools that store your inputs in massive databases, we utilize modern browser-side processing. Whether you are generating an invoice or calculating your GPA, the logic happens on your machine. We do not track, profile, or sell your specific inputs. Our revenue comes from standard advertising, which is handled by partners committed to the highest industry standards of transparency.'
    },
    'terms': {
      title: 'Terms of Professional Use',
      content: 'Accessing Stravotech signifies your agreement to use our services as informational aids. We employ rigorous testing to ensure our GPA, Mortgage, and Tax calculators align with current North American standards. However, results are intended for guidance and estimation. We recommend consulting with certified financial advisors or academic counselors for critical official documentation.'
    },
    'contact': {
      title: 'Get in Touch with the Team',
      content: 'We are constantly expanding our library of tools. If you have a specific calculator request or have identified an area for improvement, our engineering team is eager to hear from you. Reach out via email at support@stravotech.com. We prioritize feedback from our core community of students and freelancers.'
    },
    'disclaimer': {
      title: 'Legal Disclaimer',
      content: 'Calculations provided by Stravotech are mathematical estimations based on standardized formulas. They do not account for every local variable, hidden fee, or unique academic policy. Stravotech and its creators are not liable for any financial or academic consequences arising from the use of these tools.'
    }
  };

  const page = contentMap[type || 'about'];

  return (
    <div className="max-w-3xl mx-auto py-12">
      <SEO 
        title={`${page.title} | Stravotech`} 
        description={`${page.content.substring(0, 160)}...`} 
      />
      <div className="mb-12">
        <div className="w-16 h-1 w-1 bg-indigo-600 mb-6"></div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">{page.title}</h1>
      </div>
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8 font-medium text-lg">
        <p className="first-letter:text-5xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">{page.content}</p>
        <p>Stravotech is committed to maintaining a clean, fast, and user-centric platform. We regularly update our formulas to ensure compliance with the latest standards in finance and education across North America, including the United States and Canada.</p>
        
        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 mt-12">
          <h3 className="text-2xl font-black text-slate-900 mb-6">The Stravotech Promise</h3>
          <ul className="space-y-4">
             <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-indigo-600 mt-1.5 mr-4"></i>
                <span><strong>Always Free:</strong> No hidden tiers or premium features.</span>
             </li>
             <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-indigo-600 mt-1.5 mr-4"></i>
                <span><strong>No Registration:</strong> We don't collect your email address.</span>
             </li>
             <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-indigo-600 mt-1.5 mr-4"></i>
                <span><strong>Universal Compatibility:</strong> Works flawlessly on mobile, tablet, and desktop.</span>
             </li>
             <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-indigo-600 mt-1.5 mr-4"></i>
                <span><strong>Verified Accuracy:</strong> Formulas stress-tested against industry standards.</span>
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
