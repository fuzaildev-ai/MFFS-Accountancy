import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import LegalAccordion from '../../components/LegalAccordion';

export default function PrivacyPolicy() {
  const privacyItems = [
    {
      title: "Data Stewardship & UK GDPR",
      content: (
        <>
          <p>MFFS Accountancy ("we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal data. This policy outlines our protocols for data collection, storage, and processing in accordance with the Data Protection Act 2018 and UK GDPR.</p>
          <p>As a professional accountancy firm, we act as both a Data Controller and a Data Processor depending on the specific engagement. We are registered with the Information Commissioner's Office (ICO).</p>
        </>
      )
    },
    {
      title: "Information Categories We Collect",
      content: (
        <>
          <p>To provide high-precision accounting and tax services, we must collect specific data categories:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> Full names, dates of birth, and unique tax identifiers (UTR, NI Number).</li>
            <li><strong>Contact Data:</strong> Residential and business addresses, secure emails, and verified phone lines.</li>
            <li><strong>Financial Intelligence:</strong> Bank statements, payroll records, investment details, and asset registers.</li>
            <li><strong>Compliance Data:</strong> Passports or driving licenses for Anti-Money Laundering (AML) verification.</li>
          </ul>
        </>
      )
    },
    {
      title: "Basis for Processing Intelligence",
      content: (
        <>
          <p>We only process data where there is a clear legal basis:</p>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Contractual Necessity:</strong> To fulfill the terms of our engagement letter (e.g., filing your Tax Returns).</li>
            <li><strong>Legal Obligation:</strong> To comply with UK laws, specifically the Money Laundering Regulations 2017.</li>
            <li><strong>Legitimate Interests:</strong> To improve our service offerings and maintain secure communications.</li>
          </ul>
        </>
      )
    },
    {
      title: "Data Retention Protocol",
      content: (
        <>
          <p>In accordance with HMRC guidelines and professional indemnity requirements, we generally retain fiscal records for a period of <strong>7 years</strong> following the end of the accounting period to which they relate.</p>
          <p>Personal data no longer required for legal or contractual purposes is securely destroyed or anonymized.</p>
        </>
      )
    },
    {
      title: "Your Rights & Access Requests",
      content: (
        <>
          <p>Under UK Law, you have the right to access, rectify, or erase your personal data. You may also object to processing or request data portability.</p>
          <p>Direct all Subject Access Requests (SAR) to: <strong>info@mffsaccountancy.co.uk</strong>. We will respond within 30 days as mandated by the ICO.</p>
        </>
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Privacy Protocol | MFFS Accountancy | UK Compliance</title>
        <meta name="description" content="Official UK GDPR and Data Protection protocols for MFFS Accountancy. Our commitment to secure fiscal intelligence." />
      </Helmet>

      <PageHeader 
        title="Privacy Protocol" 
        subtitle="Governing the security of your fiscal intelligence. We maintain the highest UK standards of data stewardship and regulatory transparency."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                 <div className="w-12 h-0.5 bg-brand-accent" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Compliance Statement</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-primary leading-none uppercase mb-6">Legal <span className="text-brand-accent italic">Transparency.</span></h2>
              <p className="text-slate-500 font-medium">Last updated: April 2024. This document outlines your rights and our obligations under UK Data Protection Law.</p>
           </div>

           <div className="max-w-5xl mx-auto">
             <LegalAccordion items={privacyItems} />
           </div>

           <div className="mt-20 p-12 bg-brand-primary rounded-[40px] text-white flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-lg font-medium opacity-70">Have questions about your data?</p>
              <a href="mailto:info@mffsaccountancy.co.uk" className="px-12 py-5 bg-brand-accent text-brand-primary font-black uppercase text-xs tracking-widest hover:bg-white transition-all rounded-full">Contact Data Officer</a>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
