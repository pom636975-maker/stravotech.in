
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AdminStore } from '../services/AdminStore';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    AdminStore.logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'fa-chart-pie' },
    { name: 'Tools Manager', path: '/admin/tools', icon: 'fa-list-check' },
    { name: 'SEO Manager', path: '/admin/seo', icon: 'fa-magnifying-glass-chart' }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-50">
        <div className="p-8 border-b border-slate-800 flex items-center space-x-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-bolt-lightning text-white text-sm"></i>
          </div>
          <span className="font-black tracking-tighter text-lg">Stravotech <span className="text-indigo-400">Admin</span></span>
        </div>
        
        <nav className="flex-grow p-6 space-y-2">
          {navItems.map(item => (
            <Link 
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.path ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <i className={`fa-solid ${item.icon} w-5`}></i>
              <span className="font-bold text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="font-bold text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-10">
        <header className="flex justify-between items-center mb-10">
           <div>
             <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Control Panel</h1>
             <p className="text-slate-400 font-medium">Manage Stravotech tools and SEO configurations.</p>
           </div>
           <Link to="/" className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
             <i className="fa-solid fa-eye mr-2"></i> Visit Site
           </Link>
        </header>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
