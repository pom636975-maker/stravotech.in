
import React, { useEffect, useState } from 'react';
import { calculateDashboardStats, getTopToolsByViews } from '../../services/firebaseService';

interface StatCard {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [topTools, setTopTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  /**
   * Fetch all dashboard data from Firestore
   * Recalculates all stats dynamically
   */
  const fetchDashboardData = async () => {
    try {
      setError(null);

      // Calculate stats from Firestore
      const dashStats = await calculateDashboardStats();
      setStats(dashStats);

      // Fetch top 5 tools by views
      const top5 = await getTopToolsByViews(5);
      setTopTools(top5);

      setLastRefresh(new Date());
      console.log(
        `✓ Dashboard updated: ${dashStats.totalTools} tools, ${dashStats.liveTools} live, ${dashStats.totalViews} views`
      );
    } catch (err) {
      console.error('Dashboard error:', err);
      setError('Failed to load dashboard data');
      setStats({ totalTools: 0, liveTools: 0, totalViews: 0 });
      setTopTools([]);
    }
  };

  // Initial load
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await fetchDashboardData();
      setLoading(false);
    };
    load();
  }, []);

  // Auto-refresh every 5 seconds
  useEffect(() => {
    const interval = setInterval(fetchDashboardData, 5000);
    return () => clearInterval(interval);
  }, []);

  const dashboardStats: StatCard[] = [
    {
      label: 'Total Library',
      value: stats?.totalTools ?? 0,
      icon: 'fa-boxes-stacked',
      color: 'bg-indigo-500'
    },
    {
      label: 'Live Tools',
      value: stats?.liveTools ?? 0,
      icon: 'fa-signal',
      color: 'bg-emerald-500'
    },
    {
      label: 'Views',
      value: (stats?.totalViews ?? 0).toLocaleString(),
      icon: 'fa-eye',
      color: 'bg-blue-500'
    },
    {
      label: 'Avg Latency',
      value: '42ms',
      icon: 'fa-bolt',
      color: 'bg-amber-500'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div className="text-sm text-slate-600">
          <span className="font-semibold">Last updated:</span> {lastRefresh.toLocaleTimeString()}
        </div>
        <button 
          onClick={() => fetchDashboardData()} 
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all active:scale-95"
        >
          <i className="fa-solid fa-arrows-rotate mr-2"></i>Refresh Now
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          <strong>Warning:</strong> {error}. Displaying fallback data.
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="text-slate-500">
            <i className="fa-solid fa-spinner animate-spin text-2xl mr-3"></i>
            Loading stats...
          </div>
        </div>
      )}

      {!loading && (
        <>
          <div className="grid md:grid-cols-4 gap-6">
            {dashboardStats.map(s => (
              <div key={s.label} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-center space-x-6">
                 <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg`}>
                    <i className={`fa-solid ${s.icon}`}></i>
                 </div>
                 <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">{s.label}</span>
                    <span className="text-2xl font-black text-slate-900">{typeof s.value === 'number' ? s.value.toLocaleString() : s.value}</span>
                 </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
             <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-xl font-black text-slate-900">Top Traffic Pages</h3>
                   <span className="text-[10px] font-black text-indigo-500 uppercase">Live Data</span>
                </div>
                <div className="space-y-6">
                   {topTools.length > 0 ? (
                     topTools.map((tool, index) => {
                       const maxViews = topTools[0]?.views || 1;
                       const percentage = (tool.views / maxViews) * 100;
                       return (
                         <div key={tool.id} className="space-y-2">
                            <div className="flex justify-between text-xs font-black text-slate-600">
                               <span>{tool.name}</span>
                               <span>{(tool.views || 0).toLocaleString()}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                               <div style={{width: `${percentage}%`}} className="h-full bg-indigo-500 rounded-full"></div>
                            </div>
                         </div>
                       );
                     })
                   ) : (
                     <div className="text-center py-8 text-slate-500">
                       <p className="text-sm">No tools with views yet</p>
                     </div>
                   )}
                </div>
             </div>

             <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-3xl"></div>
                <h3 className="text-xl font-black mb-2">Quick Toggles</h3>
                <p className="text-slate-400 text-sm mb-8">Global system overrides</p>
                <div className="space-y-4">
                   {[
                     { name: 'Maintenance Mode', status: 'OFF' },
                     { name: 'API Caching', status: 'ON' },
                     { name: 'Cloud CDN', status: 'ON' }
                   ].map(t => (
                     <div key={t.name} className="flex justify-between items-center p-4 bg-slate-800 rounded-2xl">
                        <span className="font-bold text-sm">{t.name}</span>
                        <button className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase ${t.status === 'ON' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-500'}`}>{t.status}</button>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
