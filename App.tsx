
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { auth } from './services/firebase';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import ToolPage from './pages/ToolPage';
import ClusterPage from './pages/ClusterPage';
import LegalPage from './pages/LegalPage';
import BlogPage from './pages/BlogPage';
// holi pages
import HoliGeneratorPage from './pages/HoliGeneratorPage';
import HoliMiniSite from './pages/HoliMiniSite';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ToolsList from './pages/admin/ToolsList';
import SEOManager from './pages/admin/SEOManager';
import ContentPublisher from './pages/admin/ContentPublisher';
import { AdminStore } from './services/AdminStore';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!AdminStore.getAuth()) return <Navigate to="/admin/login" replace />;
  return <AdminLayout>{children}</AdminLayout>;
};

const ToolRedirect = () => {
  const { toolId } = useParams();
  const tools = AdminStore.getMergedTools();
  const tool = tools.find(t => t.id === toolId);
  
  if (tool) {
    return <Navigate to={`/${tool.category}/${tool.id}`} replace />;
  }
  
  // Also check if it's a cluster page but used without the specific route match
  // This is a safety net
  return <Layout><Home /></Layout>;
};

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = user?.email === 'pom636975@gmail.com'; // Change this to your admin email

  return (
    <>
      {/* Admin Seed Tools Button - Only visible to admin */}
      {/* Removed seed button as seeding is complete */}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />

          {/* SEO Cluster Pages – MUST be before /:category/:toolId */}
          <Route path="/percentage-calculator" element={<Layout><ToolPage /></Layout>} />
          <Route path="/gpa-calculator" element={<Layout><ToolPage /></Layout>} />
          <Route path="/age-calculator" element={<Layout><ToolPage /></Layout>} />
          <Route path="/attendance-calculator" element={<Layout><ToolPage /></Layout>} />
          <Route path="/gst-calculator-india" element={<Layout><ToolPage /></Layout>} />
          <Route path="/sip-calculator" element={<Layout><ToolPage /></Layout>} />
          <Route path="/fd-calculator" element={<Layout><ToolPage /></Layout>} />

          {/* SEO Cluster Pages */}
          <Route path="/compress-image-to-50kb" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/compress-image-to-100kb" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/jpeg-compressor-online" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/resize-image-online" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/income-tax-calculator-india" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/gpa-calculator-from-percentage" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/cgpa-to-percentage" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/percentage-calculator-marks" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/378-out-of-500-as-percentage" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/520-out-of-600-as-percentage" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/580-out-of-600-as-percentage" element={<Layout><ClusterPage /></Layout>} />
          <Route path="/sales-tax-by-state" element={<Layout><ClusterPage /></Layout>} />

          {/* Category-based routes for legacy support */}
          <Route path="/:category/:toolId" element={<Layout><ToolPage /></Layout>} />

          <Route path="/about" element={<Layout><LegalPage type="about" /></Layout>} />
          <Route path="/privacy" element={<Layout><LegalPage type="privacy" /></Layout>} />
          <Route path="/terms" element={<Layout><LegalPage type="terms" /></Layout>} />
          <Route path="/contact" element={<Layout><LegalPage type="contact" /></Layout>} />
          <Route path="/disclaimer" element={<Layout><LegalPage type="disclaimer" /></Layout>} />
          {/* Holi generator */}
          <Route path="/holi-generator" element={<Layout><HoliGeneratorPage /></Layout>} />
          <Route path="/holi/:username" element={<HoliMiniSite />} />
          <Route path="/holi/dashboard" element={<Layout><UserDashboard /></Layout>} />

          {/* Primary Flat Routes Implementation */}
          <Route path="/:toolId" element={<Layout><ToolPage /></Layout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/tools" element={<ProtectedRoute><ToolsList /></ProtectedRoute>} />
          <Route path="/admin/seo" element={<ProtectedRoute><SEOManager /></ProtectedRoute>} />
          <Route path="/admin/publisher" element={<ProtectedRoute><ContentPublisher /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
