import React, { useState, useEffect } from 'react';
import { AdminStore } from '../services/AdminStore';
import ToolCard from '../components/ToolCard';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [tools, setTools] = useState(AdminStore.getMergedTools());

  useEffect(() => {
    const handleUpdate = () => setTools(AdminStore.getMergedTools());
    window.addEventListener('storage_update', handleUpdate);
    return () => window.removeEventListener('storage_update', handleUpdate);
  }, []);

  const activeTools = tools.filter(t => t.status !== 'OFF');
  const studentTools = activeTools.filter(t => t.category === 'student');
  const financeTools = activeTools.filter(t => t.category === 'finance');
  const workTools = activeTools.filter(t => t.category === 'work');

  const pageTitle = 'Stravotech | Free Online Tools, Calculators & Converters';
  const pageDescription = 'Access over 30+ free professional-grade calculators and tools for students, finance, and business work. No sign-up required. Accuracy guaranteed.';
  const pageKeywords = 'free online tools, gpa calculator, mortgage calculator, percentage calculator, unit converter, stravotech tools';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Stravotech',
    'url': 'https://stravotech.in',
    'logo': 'https://stravotech.in/logo.png',
    'sameAs': [
      'https://twitter.com/Stravotech',
    ],
  };

  return (
    <div className="space-y-32 py-10">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical="https://stravotech.in/"
        openGraph={{ title: pageTitle, description: pageDescription }}
        structuredData={organizationSchema}
      />
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto py-12 lg:py-24 animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-64 h-64 bg-indigo-400/10 blur-[100px] rounded-full -z-10"></div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold mb-8 border border-indigo-100 uppercase tracking-widest animate-bounce">
          <i className="fa-solid fa-sparkles"></i>
          <span>{activeTools.length}+ Professional Tools Ready for You</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
          Precision Tools <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-black">For The Modern World.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
          Stravotech delivers ultra-fast, professional-grade calculators and converters designed specifically for the North American landscape. From academic GPA tracking to complex mortgage modeling—achieve total accuracy without ever creating an account.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/student/gpa-calculator" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-extrabold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:scale-105 active:scale-95">
            Start Calculating
          </Link>
          <button 
            onClick={() => {
              const element = document.getElementById('student');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }} 
            className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-800 font-extrabold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center group cursor-pointer">
            Explore All Tools <i className="fa-solid fa-arrow-down ml-3 group-hover:translate-y-1 transition-transform"></i>
          </button>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 grayscale opacity-40">
           <div className="flex items-center space-x-2"><i className="fa-solid fa-university text-xl"></i> <span className="font-bold">Academic Precision</span></div>
           <div className="flex items-center space-x-2"><i className="fa-solid fa-shield-check text-xl"></i> <span className="font-bold">Privacy Guaranteed</span></div>
           <div className="flex items-center space-x-2"><i className="fa-solid fa-bolt text-xl"></i> <span className="font-bold">Instant Computation</span></div>
        </div>
      </section>

      {/* Feature Section: Why Stravotech? */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
            <i className="fa-solid fa-fingerprint text-xl"></i>
          </div>
          <h3 className="text-xl font-black mb-4">No Sign-Up, Ever.</h3>
          <p className="text-slate-500 text-sm leading-relaxed">We believe your productivity shouldn't be gated. Access every single tool instantly without emails, passwords, or credit cards. Just pure functionality.</p>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
            <i className="fa-solid fa-user-shield text-xl"></i>
          </div>
          <h3 className="text-xl font-black mb-4">Client-Side Privacy</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Your data is your business. All calculations and image processing happen right inside your browser. We never see, store, or sell your sensitive inputs.</p>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
            <i className="fa-solid fa-map-location-dot text-xl"></i>
          </div>
          <h3 className="text-xl font-black mb-4">Localized for NA</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Our finance and tax tools are meticulously updated to reflect the latest USA State and Canadian Provincial regulations, ensuring compliance and accuracy.</p>
        </div>
      </section>

      {/* Categories */}
      <div className="space-y-32">
        <section id="student" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-[1.25rem] flex items-center justify-center shadow-inner">
                <i className="fa-solid fa-graduation-cap text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Academic Achievement</h2>
                <p className="text-slate-500 font-medium">Tools built to help students in USA & Canada maintain peak academic performance.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {studentTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </section>

        <section id="finance" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-[1.25rem] flex items-center justify-center shadow-inner">
                <i className="fa-solid fa-coins text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Financial Mastery</h2>
                <p className="text-slate-500 font-medium">Navigate home ownership and personal wealth with professional-grade math models.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {financeTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </section>

        <section id="work" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-[1.25rem] flex items-center justify-center shadow-inner">
                <i className="fa-solid fa-briefcase text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Business Productivity</h2>
                <p className="text-slate-500 font-medium">Essential utilities for freelancers, developers, and designers to streamline their workflow.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {workTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </section>
      </div>
      {/* Quick Guides & Internal Linking */}
      <section className="py-12 border-t border-slate-100">
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-book-open-reader text-xl"></i>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Popular Quick Guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/compress-image-to-50kb" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Compress JPG to 50KB →</span>
          </Link>
          <Link to="/income-tax-calculator-india" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">India Income Tax 2026 →</span>
          </Link>
          <Link to="/gpa-calculator-from-percentage" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Percentage to GPA 4.0 →</span>
          </Link>
          <Link to="/cgpa-to-percentage" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">CGPA to Percentage →</span>
          </Link>
          <Link to="/jpeg-compressor-online" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Best JPG Compressor →</span>
          </Link>
          <Link to="/gst-calculator-india" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">GST Calculator India →</span>
          </Link>
          <Link to="/resize-image-online" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Resize Image Online →</span>
          </Link>
          <Link to="/percentage-calculator-marks" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600">Marks to Percentage →</span>
          </Link>
        </div>
      </section>

      {/* FAQ Enhanced */}
      <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto text-lg leading-relaxed">Transparency is our core value. Here is everything you need to know about using the Stravotech Professional Toolkit.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          <div className="bg-slate-800/50 p-10 rounded-[2rem] border border-slate-700 hover:border-indigo-500/50 transition-colors">
            <h4 className="text-xl font-bold mb-4 text-indigo-300">Is it truly 100% free?</h4>
            <p className="text-slate-400 leading-relaxed text-sm">Yes. We generate revenue through clean, non-intrusive advertisements. This allows us to keep our high-precision tools free for students and freelancers forever.</p>
          </div>
          <div className="bg-slate-800/50 p-10 rounded-[2rem] border border-slate-700 hover:border-indigo-500/50 transition-colors">
            <h4 className="text-xl font-bold mb-4 text-indigo-300">How accurate are the financial tools?</h4>
            <p className="text-slate-400 leading-relaxed text-sm">Our algorithms are cross-referenced with official US/Canada government standards. However, they are for estimation purposes and should be verified by a certified professional for final legal decisions.</p>
          </div>
          <div className="bg-slate-800/50 p-10 rounded-[2rem] border border-slate-700 hover:border-indigo-500/50 transition-colors">
            <h4 className="text-xl font-bold mb-4 text-indigo-300">What about mobile performance?</h4>
            <p className="text-slate-400 leading-relaxed text-sm">Stravotech is built with a lightweight architecture. It loads in under 1 second on most mobile networks, ensuring you have the tools you need even when you're on the go.</p>
          </div>
          <div className="bg-slate-800/50 p-10 rounded-[2rem] border border-slate-700 hover:border-indigo-500/50 transition-colors">
            <h4 className="text-xl font-bold mb-4 text-indigo-300">Do you offer API access?</h4>
            <p className="text-slate-400 leading-relaxed text-sm">Currently, we focus on providing the best web-based UI. We are exploring developer API options for late 2024 to support automated workflows for small businesses.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
