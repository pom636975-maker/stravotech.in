import React, { useState, useEffect, useRef } from 'react';
import { AdminStore } from '../services/AdminStore';
import ToolCard from '../components/ToolCard';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

/* ---------- Animated Counter Hook ---------- */
const useCountUp = (end: number, duration = 2000, startTrigger = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startTrigger) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, startTrigger]);
  return count;
};

const guideColorClasses: Record<string, string> = {
  indigo: 'bg-indigo-50 text-indigo-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  violet: 'bg-violet-50 text-violet-600',
  sky: 'bg-sky-50 text-sky-600',
  rose: 'bg-rose-50 text-rose-600',
  orange: 'bg-orange-50 text-orange-600',
  teal: 'bg-teal-50 text-teal-600',
  fuchsia: 'bg-fuchsia-50 text-fuchsia-600',
};

const Home: React.FC = () => {
  const [tools, setTools] = useState(AdminStore.getMergedTools());
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'student' | 'finance' | 'work'>('student');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleUpdate = () => setTools(AdminStore.getMergedTools());
    window.addEventListener('storage_update', handleUpdate);
    return () => window.removeEventListener('storage_update', handleUpdate);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tabId = location.hash.replace('#', '');
    if (tabId === 'student' || tabId === 'finance' || tabId === 'work') {
      setActiveTab(tabId);
      document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  const toolCount = useCountUp(tools.filter(t => t.status !== 'OFF').length || 32, 1500, statsVisible);
  const userCount = useCountUp(10, 1500, statsVisible);
  const uptime = useCountUp(100, 1500, statsVisible);

  const activeTools = tools.filter(t => t.status !== 'OFF');
  const studentTools = activeTools.filter(t => t.category === 'student');
  const financeTools = activeTools.filter(t => t.category === 'finance');
  const workTools   = activeTools.filter(t => t.category === 'work');

  const pageTitle = 'Stravotech | Free Online Tools, Calculators & Converters';
  const pageDescription = "Stravotech is back! Access 30+ free professional-grade calculators & tools for students, finance, and business. GPA calculator, image compressor, GST calculator & more. No sign-up, instant results.";
  const pageKeywords = 'free online tools 2026, gpa calculator, cgpa to percentage, image compressor 50kb, gst calculator india, mortgage calculator, income tax calculator india, stravotech';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Stravotech free to use?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, all tools on Stravotech are 100% free. No sign-up, no credit card required.' },
      },
      {
        '@type': 'Question',
        name: 'Does Stravotech store my data?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. All calculations happen inside your browser. We never see, store, or sell your data.' },
      },
      {
        '@type': 'Question',
        name: 'What tools does Stravotech offer?',
        acceptedAnswer: { '@type': 'Answer', text: 'Stravotech offers 30+ tools including GPA calculator, CGPA to percentage converter, image compressor, GST calculator, income tax calculator, and mortgage calculator.' },
      },
      {
        '@type': 'Question',
        name: 'Are the tools accurate?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our algorithms are cross-referenced with official standards for USA, Canada, and India. All tools are reviewed regularly for accuracy.' },
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Stravotech',
    url: 'https://stravotech.in',
    logo: 'https://stravotech.in/logo.png',
    sameAs: ['https://twitter.com/Stravotech'],
  };

  const tabs = [
    { id: 'student' as const, label: 'Academic', icon: 'fa-graduation-cap', color: 'emerald', tools: studentTools },
    { id: 'finance' as const, label: 'Finance',  icon: 'fa-coins',          color: 'amber',   tools: financeTools },
    { id: 'work'    as const, label: 'Work',      icon: 'fa-briefcase',      color: 'violet',  tools: workTools   },
  ];

  const faqs = [
    { q: 'Is it truly 100% free?', a: "Yes, absolutely. All our tools are completely free: no subscriptions, no hidden costs. Stravotech's mission is to make high-quality tools accessible to everyone." },
    { q: 'Does Stravotech store my data?', a: 'Never. All processing happens inside your browser using JavaScript. We never transmit or store any of your personal or financial data on our servers.' },
    { q: 'How accurate are the tools?', a: 'Our algorithms are benchmarked against official standards for India (CBSE, SGPA/CGPA norms), USA, and Canada. For legal decisions, always verify with a certified professional.' },
    { q: 'Does Stravotech work on mobile?', a: 'Yes! Every tool is mobile-first responsive. We load quickly on most networks: calculators wherever you need them.' },
    { q: 'Why was Stravotech down?', a: 'We took a break to rebuild from the ground up: faster, cleaner, and better SEO. We are back stronger than ever in 2026 with improved tools and zero ads.' },
  ];

  return (
    <div className="space-y-0">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical="https://stravotech.in/"
        openGraph={{ title: pageTitle, description: pageDescription }}
        structuredData={[faqSchema, organizationSchema]}
      />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex flex-col items-center justify-center text-center px-2 sm:px-4 py-14 sm:py-20 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-violet-400/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid overlay for texture */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)', backgroundSize: '60px 60px' }}
        />

        {/* Reopening Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 sm:mb-8 shadow-sm">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping inline-block" />
          We're Back - Stravotech Relaunches 2026
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.08] tracking-tight mb-6 sm:mb-8 max-w-5xl">
          The Sharpest Free<br />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600">
              Tools on the Internet.
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8 C100 2, 200 12, 398 4" stroke="url(#underlineGrad)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="underlineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#3b82f6"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-base md:text-xl text-slate-500 mb-8 sm:mb-12 leading-relaxed font-medium max-w-2xl">
          Stravotech is back with <strong className="text-slate-700">30+ professional calculators</strong>: zero ads, zero sign-ups,
          zero cost. GPA, Finance, Image tools &amp; more. Instant results, always free.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/student/gpa-calculator"
            id="hero-cta-primary"
            className="group w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-extrabold rounded-2xl transition-all shadow-2xl shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-bolt-lightning group-hover:rotate-12 transition-transform" />
            Start Calculating - It's Free
          </Link>
          <button
            id="hero-cta-explore"
            onClick={() => {
              document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white border-2 border-slate-200 text-slate-800 font-extrabold rounded-2xl hover:border-indigo-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group"
          >
            Explore All Tools <i className="fa-solid fa-arrow-down group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Trust strip */}
        <div className="mt-10 sm:mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-10 text-slate-400 text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-2"><i className="fa-solid fa-shield-halved text-emerald-400" /><span>Privacy-first</span></div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2"><i className="fa-solid fa-ban text-red-400" /><span>Zero Ads</span></div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2"><i className="fa-solid fa-bolt text-amber-400" /><span>Instant Results</span></div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2"><i className="fa-solid fa-lock text-indigo-400" /><span>No Sign-Up</span></div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2"><i className="fa-solid fa-mobile-screen text-violet-400" /><span>Mobile Ready</span></div>
        </div>
      </section>

      {/* ══════════════ STATS STRIP ══════════════ */}
      <section ref={statsRef} className="py-10 sm:py-16 px-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: `${toolCount}+`, label: 'Free Tools', icon: 'fa-wrench' },
            { value: `${userCount}K+`, label: 'Daily Users', icon: 'fa-users' },
            { value: `${uptime}%`, label: 'Client-Side Privacy', icon: 'fa-shield-halved' },
            { value: '0', label: 'Ads Shown', icon: 'fa-ban' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <i className={`fa-solid ${stat.icon} text-white/60 text-2xl mb-1`} />
              <span className="text-3xl md:text-5xl font-black tracking-tight">{stat.value}</span>
              <span className="text-indigo-100 font-semibold text-xs sm:text-sm uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ WHY STRAVOTECH ══════════════ */}
      <section className="py-14 sm:py-24 px-2 sm:px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Built Different.<br className="hidden md:block" /> Designed Better.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: 'fa-ban',
              color: 'from-red-50 to-orange-50 border-red-100',
              iconColor: 'text-red-500 bg-red-50',
              title: 'Zero Ads. Period.',
              desc: 'We removed every single advertisement. No banners, no pop-ups, no distractions. Just pure, clean tools that work instantly.',
            },
            {
              icon: 'fa-fingerprint',
              color: 'from-indigo-50 to-blue-50 border-indigo-100',
              iconColor: 'text-indigo-500 bg-indigo-50',
              title: 'No Account Needed',
              desc: "Your productivity shouldn't be gated. Open any tool and start immediately — no email, no password, no credit card. Ever.",
            },
            {
              icon: 'fa-user-shield',
              color: 'from-emerald-50 to-teal-50 border-emerald-100',
              iconColor: 'text-emerald-500 bg-emerald-50',
              title: 'Browser-Side Privacy',
              desc: 'Every calculation happens inside your device. We have zero access to your data — not now, not ever. Your data is yours.',
            },
            {
              icon: 'fa-bolt',
              color: 'from-amber-50 to-yellow-50 border-amber-100',
              iconColor: 'text-amber-500 bg-amber-50',
              title: 'Instant Results',
              desc: 'No server round-trips. Results appear as you type. Stravotech is designed to be the fastest toolbox on the web.',
            },
            {
              icon: 'fa-globe',
              color: 'from-violet-50 to-purple-50 border-violet-100',
              iconColor: 'text-violet-500 bg-violet-50',
              title: 'India & North America',
              desc: 'Our tools are localized for Indian standards (CGPA, GST, ITR) and North American standards (GPA 4.0, Mortgage, Sales Tax).',
            },
            {
              icon: 'fa-mobile-screen',
              color: 'from-sky-50 to-cyan-50 border-sky-100',
              iconColor: 'text-sky-500 bg-sky-50',
              title: 'Mobile-First Design',
              desc: 'Every tool is pixel-perfect on phones. We test every tool on real devices — so you get a great experience on any screen.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${f.color} border rounded-[2rem] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 ${f.iconColor} rounded-xl flex items-center justify-center mb-5 text-xl`}>
                <i className={`fa-solid ${f.icon}`} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ TOOLS (TABBED) ══════════════ */}
      <section id="tools-section" className="py-14 sm:py-24 px-2 sm:px-4 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-4 block">All Tools</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
              {activeTools.length}+ Free Tools, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">One Place.</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Use the tabs below to explore tools by category.</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="grid grid-cols-3 sm:inline-flex w-full sm:w-auto bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <i className={`fa-solid ${tab.icon}`} />
                  {tab.label}
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {tab.tools.length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {tabs.map(tab => (
            <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {tab.tools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </div>
            </div>
          ))}

          {/* Scroll anchors for old links */}
          <div id="student" className="mt-0" />
          <div id="finance" className="mt-0" />
          <div id="work" className="mt-0" />
        </div>
      </section>

      {/* ══════════════ POPULAR QUICK GUIDES ══════════════ */}
      <section className="py-14 sm:py-24 px-2 sm:px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl">
            <i className="fa-solid fa-book-open-reader" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Popular Quick Guides</h2>
            <p className="text-slate-500 text-sm font-medium">In-depth answers for the most searched questions</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: '/compress-image-to-50kb',    label: 'Compress JPG to 50KB',       icon: 'fa-image',          color: 'indigo' },
            { href: '/cgpa-to-percentage',         label: 'CGPA to Percentage',          icon: 'fa-graduation-cap', color: 'emerald' },
            { href: '/income-tax-calculator-india',label: 'India Income Tax 2026',       icon: 'fa-indian-rupee-sign', color: 'amber' },
            { href: '/gpa-calculator-from-percentage', label: 'Percentage to GPA 4.0',  icon: 'fa-calculator',    color: 'violet' },
            { href: '/gst-calculator-india',       label: 'GST Calculator India',        icon: 'fa-receipt',       color: 'sky' },
            { href: '/resize-image-online',        label: 'Resize Image Online',         icon: 'fa-crop',          color: 'rose' },
            { href: '/compress-image-to-100kb',    label: 'Convert Image to 100KB',      icon: 'fa-compress',      color: 'orange' },
            { href: '/percentage-calculator-marks', label: 'Marks to Percentage',        icon: 'fa-percent',       color: 'teal' },
            { href: '/jpeg-compressor-online',     label: 'Best JPG Compressor',         icon: 'fa-file-image',    color: 'fuchsia' },
          ].map(({ href, label, icon, color }) => (
            <Link
              key={href}
              to={href}
              className="group flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl ${guideColorClasses[color]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${icon} text-sm`} />
              </div>
              <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">{label} -&gt;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════ REOPENING ANNOUNCEMENT BANNER ══════════════ */}
      <section className="px-2 sm:px-4 py-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 text-white text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              Live & Operational - June 2026
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Stravotech is Back.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">Better Than Ever.</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              We spent the last 2 months rebuilding everything from scratch: faster performance, cleaner UI, 
              zero advertisements, and better SEO. Your favorite free toolkit is fully operational again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/student/gpa-calculator"
                className="px-8 py-4 bg-white text-slate-900 font-extrabold rounded-xl hover:bg-slate-100 transition-all hover:scale-105 shadow-xl"
              >
                Try a Tool Now -&gt;
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-extrabold rounded-xl hover:bg-white/20 transition-all"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="py-14 sm:py-24 px-2 sm:px-4 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-4 block">FAQs</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Common Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-indigo-200 transition-colors"
            >
              <button
                id={`faq-${i}`}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left font-bold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                <span>{faq.q}</span>
                <i className={`fa-solid fa-chevron-down text-slate-400 transition-transform duration-300 ${openFAQ === i ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === i && (
                <div className="px-7 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4 animate-in slide-in-from-top-2 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
