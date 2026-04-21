import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { supabase } from './supabaseClient';

// Layout
import MainLayout from './components/MainLayout';

// Main Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import News from './pages/News';
import Blog from './pages/Blog';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import CaseStudies from './pages/CaseStudies';

// Core Services
import LimitedCompany from './pages/services/LimitedCompany';
import SoleTrader from './pages/services/SoleTrader';
import Partnerships from './pages/services/Partnerships';
import YearEndAccounts from './pages/services/YearEndAccounts';
import TaxReturns from './pages/services/TaxReturns';
import Bookkeeping from './pages/services/Bookkeeping';

// Compliance
import VatReturns from './pages/compliance/VatReturns';
import Payroll from './pages/compliance/Payroll';
import CorporationTax from './pages/compliance/CorporationTax';
import SelfAssessment from './pages/compliance/SelfAssessment';

// Specialist
import Cis from './pages/specialist/Cis';
import PropertyTax from './pages/specialist/PropertyTax';
import RnDTaxCredits from './pages/specialist/RnDTaxCredits';

// Consultancy
import BusinessStartup from './pages/consultancy/BusinessStartup';
import BusinessPlanning from './pages/consultancy/BusinessPlanning';

// Legal
import TermsOfBusiness from './pages/legal/TermsOfBusiness';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return null;
  if (!session) return <Navigate to="/admin/login" />;

  return children;
};

// A helper component to wrap routes in MainLayout conditionally
const ContentWrapper = ({ children }) => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  if (isAdminPath) {
    return <>{children}</>;
  }

  return <MainLayout>{children}</MainLayout>;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ContentWrapper>
          <Routes>
              {/* Core Index */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portfolio" element={<CaseStudies />} />
              <Route path="/news" element={<News />} />
              <Route path="/blog" element={<Blog />} />
              
              {/* Services Sub-Pages */}
              <Route path="/services/limited-company" element={<LimitedCompany />} />
              <Route path="/services/sole-trader" element={<SoleTrader />} />
              <Route path="/services/partnerships" element={<Partnerships />} />
              <Route path="/services/year-end-accounts" element={<YearEndAccounts />} />
              <Route path="/services/tax-returns" element={<TaxReturns />} />
              <Route path="/services/bookkeeping" element={<Bookkeeping />} />
              
              {/* Compliance */}
              <Route path="/compliance/vat-returns" element={<VatReturns />} />
              <Route path="/compliance/payroll" element={<Payroll />} />
              <Route path="/compliance/corporation-tax" element={<CorporationTax />} />
              <Route path="/compliance/self-assessment" element={<SelfAssessment />} />
              
              {/* Specialist */}
              <Route path="/specialist/cis" element={<Cis />} />
              <Route path="/specialist/property-tax" element={<PropertyTax />} />
              <Route path="/specialist/rd-tax-credits" element={<RnDTaxCredits />} />
              
              {/* Consultancy */}
              <Route path="/consultancy/business-startup" element={<BusinessStartup />} />
              <Route path="/consultancy/business-planning" element={<BusinessPlanning />} />
              
              {/* Legal Pages */}
              <Route path="/legal/terms" element={<TermsOfBusiness />} />
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              
              {/* Admin Routes - Isolated from MainLayout */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
        </ContentWrapper>
      </Router>
    </HelmetProvider>
  );
}

export default App;
