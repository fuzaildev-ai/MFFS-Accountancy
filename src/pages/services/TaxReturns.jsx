import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function TaxReturns() {
  return (
    <div>
      <Helmet>
        <title>Tax Returns & Self Assessment | MFFS Accountancy Beckenham</title>
        <meta name="description" content="Professional UK self-assessment and tax return services. Let MFFS handle your HMRC filings with precision." />
      </Helmet>

      <PageHeader 
        title="Tax Returns" 
        subtitle="Satisfy your legal obligations with minimum hassle. We provide precise self-assessment services for individuals and business partners."
        bgImage="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2914&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Managing Your <br /><span className="text-brand-accent italic">Self Assessment</span>.</h2>
                 <p className="text-slate-500 text-lg leading-relaxed mb-10">
                    Many people find tax returns complicated and time-consuming. Failure to follow HMRC rules can lead to significant penalties. MFFS takes the stress out of the process, ensuring your returns are accurate and filed on time.
                 </p>
                 
                 <div className="space-y-6 mb-12">
                    {[
                      "Complete and file your self-assessment tax return",
                      "Advise you on your tax liabilities and payment dates",
                      "Identify all eligible tax reliefs to minimize your bill",
                      "Liaison with HMRC on your behalf throughout the year"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-brand-light rounded-xl border border-brand-primary/5">
                         <div className="w-6 h-6 bg-brand-accent rounded flex items-center justify-center text-[10px] font-black">0{idx+1}</div>
                         <p className="font-bold text-brand-primary/70">{item}</p>
                      </div>
                    ))}
                 </div>
                 <Button to="/contact" variant="primary" className="px-12 py-5">Request Tax Audit</Button>
              </div>
              <div className="bg-brand-primary p-12 md:p-20 rounded-[80px] shadow-2xl relative overflow-hidden text-white">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
                 <h4 className="text-2xl font-black mb-8 italic text-brand-accent">HMRC Agent ID: 000000</h4>
                 <p className="text-white/60 mb-10 leading-relaxed">We act as your authorized agent with HMRC, meaning we handle the difficult phone calls and complex correspondence so you don't have to.</p>
                 <div className="space-y-4 text-xs font-black uppercase tracking-widest text-brand-accent">
                    <p>✓ Guaranteed Filing Dates</p>
                    <p>✓ Professional Clearance Provided</p>
                    <p>✓ Direct Senior Partner Sign-off</p>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
