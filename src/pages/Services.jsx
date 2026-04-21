import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

export default function Services() {
  const serviceItems = [
    { title: "Statutory Reporting", desc: "Rigorous end-of-year accounts and CT600 filings that satisfy the most detailed HMRC audits.", path: "/services/tax-returns" },
    { title: "MTD VAT Strategy", desc: "Seamless, secure digital VAT reporting ecosystems with continuous compliance monitoring.", path: "/compliance/vat-returns" },
    { title: "Corporate Governance", desc: "Full statutory lifecycle management for high-trust UK registered limited companies.", path: "/services/limited-company" },
    { title: "Forensic Ledgering", desc: "Surgical-precision bookkeeping and real-time bank reconciliation for complex SMEs.", path: "/services/bookkeeping" },
    { title: "CT600 Engineering", desc: "Strategic corporation tax planning and reliefs (R&D, Capital Allowances) at scale.", path: "/compliance/corporation-tax" },
    { title: "Private Advisory", desc: "Bespoke tax strategy and wealth management for directors and high-net-worth soloists.", path: "/compliance/self-assessment" },
    { title: "CIS Compliance", desc: "Verified HMRC construction industry scheme returns and subcontractor governance.", path: "/specialist/cis" },
    { title: "Property Portfolios", desc: "Specialist tax advisory for landlords and institutional real estate investment structures.", path: "/specialist/property-tax" },
    { title: "Strategic Planning", desc: "Fractional CFO advisory and long-term financial modeling for enterprise scalability.", path: "/consultancy/business-planning" }
  ];

  return (
    <div>
      <Helmet>
        <title>Our Capabilities | MFFS Accountancy | Institutional Hub</title>
        <meta name="description" content="Explore our institutional financial capabilities. From forensic ledgering to CT600 governance." />
      </Helmet>

      <PageHeader 
        title="Our Capabilities" 
        subtitle="A comprehensive grid of institutional accounting and strategic advisory services engineered for modern UK enterprises."
        bgImage="https://images.unsplash.com/photo-1449156001131-ad09556b5960?q=80&w=2940&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item, idx) => (
              <ServiceCard 
                key={idx}
                title={item.title}
                description={item.desc}
                linkTo={item.path}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Corporate Call to Action */}
      <SectionWrapper bg="bg-brand-primary" className="text-white">
        <div className="container-custom text-center">
           <h2 className="text-4xl md:text-6xl font-black uppercase mb-10 tracking-tight leading-none">
              Need a <span className="text-brand-accent italic">Bespoke</span> Solution?
           </h2>
           <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto mb-16">
              Our partners can engineer a specific fiscal protocol tailored to your unique enterprise lifecycle.
           </p>
           <Button to="/contact" variant="primary" className="bg-brand-accent text-brand-primary px-16 py-8 text-xl">Request Custom Proposal</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
