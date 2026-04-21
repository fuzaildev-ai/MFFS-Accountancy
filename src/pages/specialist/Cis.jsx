import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function Cis() {
  return (
    <div>
      <Helmet>
        <title>CIS Scheme & Subcontractors | MFFS Accountancy</title>
        <meta name="description" content="Expert CIS scheme management for UK contractors and subcontractors. HMRC registered agent for construction industry taxation." />
      </Helmet>

      <PageHeader 
        title="CIS Scheme" 
        subtitle="Specialist construction industry taxation. We handle subcontractor verification, deduction statements, and HMRC returns."
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Construction Industry Hub</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Mastering <br /><span className="text-brand-accent italic">CIS Returns.</span></h2>
                 <p className="text-slate-500 text-xl leading-relaxed mb-10">
                    The Construction Industry Scheme (CIS) has strict rules for how contractors must handle subcontractor payments. Non-compliance can lead to massive HMRC fines and loss of status.
                 </p>
                 
                 <div className="space-y-6 mb-12">
                    {[
                      "Register you as a contractor or subcontractor with HMRC",
                      "Verify your subcontractors through the HMRC portal",
                      "Provide monthly CIS returns and deduction statements",
                      "Offset CIS deductions against your other tax liabilities"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                         <div className="w-10 h-10 border-2 border-brand-accent rounded-full flex items-center justify-center font-black text-brand-primary flex-shrink-0">0{idx+1}</div>
                         <p className="font-bold text-slate-500 pt-2">{item}</p>
                      </div>
                    ))}
                 </div>
                 <Button to="/contact" variant="primary">Manage My CIS</Button>
              </div>
              <div className="finkash-card bg-brand-primary p-12 md:p-20 rounded-[80px] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] -mr-32 -mt-32" />
                 <h4 className="text-2xl font-black mb-8 italic text-brand-accent uppercase tracking-widest">Sector Specifics</h4>
                 <p className="text-white/60 mb-10 leading-relaxed">"Construction finance requires a different type of precision. We ensure every deduction is accounted for and every subcontractor is verified."</p>
                 <div className="space-y-4 pt-10 border-t border-white/10">
                    <p className="text-xs font-black uppercase tracking-widest text-brand-accent">✓ Subcontractor Verification</p>
                    <p className="text-xs font-black uppercase tracking-widest text-brand-accent">✓ Monthly CIS Returns</p>
                    <p className="text-xs font-black uppercase tracking-widest text-brand-accent">✓ Payment Statements</p>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
