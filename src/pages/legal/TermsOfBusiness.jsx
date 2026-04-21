import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import LegalAccordion from '../../components/LegalAccordion';

export default function TermsOfBusiness() {
  const termsItems = [
    {
      title: "1. Scope of Professional Engagement",
      content: (
        <>
          <p>These terms, together with our specific Letter of Engagement, constitute the entire agreement between MFFS Accountancy and the Client. We will provide services with reasonable care and skill, but our role is limited to the services defined in the engagement letter.</p>
          <p>We are not responsible for the results of actions taken by users on the basis of any information provided without our specific professional recommendation.</p>
        </>
      )
    },
    {
      title: "2. Client Responsibilities & Data Accuracy",
      content: (
        <>
          <p>The Client is legally responsible for the accuracy and completeness of the records and information provided to us. We will not verify any information provided unless it is specifically part of the engagement (e.g., a formal audit).</p>
          <p>Failure to provide information by the agreed deadlines may result in penalties from HMRC or Companies House, for which MFFS Accountancy cannot be held liable.</p>
        </>
      )
    },
    {
      title: "3. Professional Fees & Payment Terms",
      content: (
        <>
          <p>Fees are calculated based on the complexity of the work and the professional time required. Our standard payment terms are <strong>14 days</strong> from the date of invoice unless otherwise specified in your engagement letter.</p>
          <p>We reserve the right to suspend work or terminate the engagement if fees remain unpaid beyond 30 days. Late payments may incur interest charges under the Late Payment of Commercial Debts Act.</p>
        </>
      )
    },
    {
      title: "4. Anti-Money Laundering & KYC",
      content: (
        <>
          <p>In accordance with the UK Money Laundering Regulations 2017, we are required to verify the identity of our clients and identify the 'beneficial owners' of corporate entities. We cannot commence work until these Know Your Customer (KYC) checks are complete.</p>
          <p>We may use electronic verification services to satisfy these legal obligations.</p>
        </>
      )
    },
    {
      title: "5. Professional Indemnity & Liability",
      content: (
        <>
          <p>MFFS Accountancy maintains professional indemnity insurance in accordance with our regulatory requirements. Our total liability for any claim shall not exceed the limit specified in our insurance policy or the multiple of fees defined in your Letter of Engagement.</p>
        </>
      )
    },
    {
      title: "6. Data Protection & Confidentiality",
      content: (
        <>
          <p>We will keep your affairs confidential and comply with the UK Data Protection Act 2018. However, we may be required by law to disclose information to HMRC or other authorities (e.g., under the Proceeds of Crime Act 2002).</p>
        </>
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Terms of Business | MFFS Accountancy | UK Legal</title>
        <meta name="description" content="Official professional terms and conditions for MFFS Accountancy engagement. UK-regulated accounting standards." />
      </Helmet>

      <PageHeader 
        title="Terms of Business" 
        subtitle="Defining our professional partnership. These terms ensure clarity, regulatory compliance, and the highest standards of chartered accounting services."
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                 <div className="w-12 h-0.5 bg-brand-accent" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Engagement Standards</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-primary leading-none uppercase mb-6">Service <span className="text-brand-accent italic">Agreement.</span></h2>
              <p className="text-slate-500 font-medium">Last updated: April 2024. These terms apply to all clients of MFFS Accountancy.</p>
           </div>

           <div className="max-w-5xl mx-auto">
             <LegalAccordion items={termsItems} />
           </div>

           <div className="mt-20 text-center">
              <p className="text-slate-400 text-sm italic">For specialized engagement letters or specific project terms, please contact your account manager at 0207 118 0246.</p>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
