
import React, { useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TOOLS } from '../constants';
import { useAuth } from '../hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return TOOLS.filter(t => 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);
  }, [searchQuery]);

  const { user } = useAuth();
  const baseNavLinks = [
    { name: 'Student Tools', href: '/#student' },
    { name: 'Finance', href: '/#finance' },
    { name: 'Work Productivity', href: '/#work' },
    { name: 'Holi Wishes', href: '/holi-generator' },
    { name: 'About', href: '/about' },
  ];
  const navLinks = user
    ? [...baseNavLinks, { name: 'My Designs', href: '/holi/dashboard' }]
    : baseNavLinks;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Premium Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-300">
                <i className="fa-solid fa-bolt-lightning text-white text-xl"></i>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">Stravotech</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Professional Toolkit</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-grow max-w-md mx-6 relative hidden md:block">
              <div className="relative group">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input 
                  type="text" 
                  placeholder="Search 100+ tools..."
                  className="w-full pl-12 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {filteredTools.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-2xl z-[60] overflow-hidden">
                  {filteredTools.map(tool => (
                    <button
                      key={tool.id}
                      onClick={() => {
                        navigate(tool.path);
                        setSearchQuery('');
                      }}
                      className="w-full px-5 py-3 text-left hover:bg-slate-50 flex items-center space-x-3 transition-colors"
                    >
                      <i className={`fa-solid ${tool.icon} text-indigo-500 w-5`}></i>
                      <span className="text-sm font-bold text-slate-700">{tool.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-6 w-px bg-slate-200 mx-4"></div>
              <a 
                href="https://github.com" 
                target="_blank" 
                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
            </div>

            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-slate-700`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white py-5 px-4 space-y-2 shadow-xl">
             <div className="mb-4 relative">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input 
                  type="text" 
                  placeholder="Search tools..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {filteredTools.length > 0 && (
                  <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                    {filteredTools.map(tool => (
                      <button
                        key={tool.id}
                        onClick={() => {
                          navigate(tool.path);
                          setSearchQuery('');
                          setIsMenuOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center gap-3 transition-colors"
                      >
                        <i className={`fa-solid ${tool.icon} text-indigo-500 w-5`}></i>
                        <span className="text-sm font-bold text-slate-700">{tool.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          <div className="flex-grow min-w-0">
            {children}
          </div>
          
          <aside className="hidden lg:block w-[320px] flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-4">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                    We're Back - 2026
                  </div>
                  <h3 className="text-xl font-bold mb-3">Zero Ads. Always Free.</h3>
                  <p className="text-sm text-indigo-100 leading-relaxed mb-5">
                    We rebuilt Stravotech with <strong>no advertisements</strong>. Every tool is free: no popups, no banners, no distractions. Just tools that work.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['No Sign-up', 'No Ads', 'No Cost'].map(badge => (
                      <span key={badge} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-white/15 rounded-full border border-white/20">{badge}</span>
                    ))}
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-slate-800 pb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-900">
                  <i className="fa-solid fa-bolt-lightning text-white text-xl"></i>
                </div>
                <span className="text-2xl font-black tracking-tight">Stravotech</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Empowering students and professionals with lightning-fast, highly accurate <strong>online calculators</strong> and <strong>converters</strong>. Built for North America & India.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">Popular Tools</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><Link to="/student/gpa-calculator" className="hover:text-white transition-colors">GPA Calculator 4.0</Link></li>
                <li><Link to="/cgpa-to-percentage" className="hover:text-white transition-colors">CGPA to Percentage</Link></li>
                <li><Link to="/finance/loan-payment-calculator" className="hover:text-white transition-colors">Loan EMI Calculator</Link></li>
                <li><Link to="/compress-image-to-50kb" className="hover:text-white transition-colors">Image Compressor 50KB</Link></li>
                <li><Link to="/gst-calculator-india" className="hover:text-white transition-colors">GST Calculator India</Link></li>
                <li><Link to="/finance/mortgage-calculator" className="hover:text-white transition-colors">Mortgage Planner</Link></li>
                <li><Link to="/work/image-to-pdf" className="hover:text-white transition-colors">Convert Image to PDF</Link></li>
                <li><Link to="/student/percentage-calculator" className="hover:text-white transition-colors">Percentage Tools</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">Support</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Data Privacy</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Support Center</Link></li>
                <li>
                  <Link to="/admin" className="flex items-center group text-indigo-400/60 hover:text-indigo-400 transition-all">
                    <i className="fa-solid fa-user-lock mr-2 text-xs"></i>
                    Staff Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
              <h4 className="text-sm font-bold text-white mb-4">Global Access</h4>
              <p className="text-slate-400 text-xs mb-6 font-medium">Serving professionals across USA and Canada with localized financial models and tax calculations.</p>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-indigo-600 transition-all"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-indigo-600 transition-all"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-indigo-600 transition-all"><i className="fa-brands fa-facebook-f text-sm"></i></a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-[13px] text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Stravotech Tools. All rights reserved.</p>
            <div className="mt-6 md:mt-0 flex items-center gap-6">
              <Link to="/privacy" className="hover:text-slate-300">Privacy</Link>
              <Link to="/disclaimer" className="hover:text-slate-300">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
