import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function VatReturns() {
  return (
    <div>
      <Helmet>
        <title>VAT Returns & MTD Compliance | MFFS accountancy</title>
        <meta name="description" content="Making Tax Digital (MTD) compliant VAT returns. Expert UK accounting advice on Flat Rate and Standard schemes." />
      </Helmet>

      <PageHeader 
        title="VAT Returns" 
        subtitle="MTD-ready VAT management from registration to submission. We ensure your business is fully compliant with modern digital mandates."
        bgImage="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2787&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Digital Compliance Hub</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Mastering <br /><span className="text-brand-accent italic">MTD Strategy.</span></h2>
                 <p className="text-slate-500 text-xl leading-relaxed mb-10">
                    VAT can be one of the most complex areas of business taxation. With the introduction of Making Tax Digital (MTD), it&apos;s more important than ever to have a digital reporting system that satisfies HMRC&apos;s rigorous criteria.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                     <div className="finkash-card !p-8">
                        <h4 className="font-black text-brand-primary mb-3">Scheme Choice</h4>
                        <p className="text-sm text-slate-500">Advising on Standard vs Flat Rate schemes to optimize your cashflow.</p>
                     </div>
                     <div className="finkash-card !p-8">
                        <h4 className="font-black text-brand-primary mb-3">MTD Filing</h4>
                        <p className="text-sm text-slate-500">Secure digital link submissions directly from your books to HMRC.</p>
                     </div>
                     <div className="finkash-card !p-8">
                        <h4 className="font-black text-brand-primary mb-3">Compliance</h4>
                        <p className="text-sm text-slate-500">Detailed auditing of your input/output tax to prevent expensive errors.</p>
                     </div>
                     <div className="finkash-card !p-8">
                        <h4 className="font-black text-brand-primary mb-3">Registration</h4>
                        <p className="text-sm text-slate-500">Handling your voluntary or compulsory VAT registrations and de-registrations.</p>
                     </div>
                 </div>
                 <Button to="/contact" variant="primary">Audit My VAT</Button>
              </div>
              <div className="relative">
                 <div className="bg-brand-primary p-8 md:p-20 rounded-[40px] md:rounded-[80px] shadow-2xl text-white relative z-10 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] -mr-32 -mb-32" />
                    <h3 className="text-[60px] md:text-[130px] font-black text-brand-accent/10 absolute top-5 md:top-10 right-5 md:right-10 select-none">MTD</h3>
                    <p className="text-xl font-black mb-8 italic italic text-brand-accent">HMRC Agent ID Required?</p>
                    <p className="text-white/60 mb-8 leading-relaxed">Let MFFS act as your authorized agent. We take full responsibility for your VAT submissions, ensuring you never miss a deadline or incur a penalty.</p>
                    <div className="space-y-4 text-xs font-black uppercase tracking-widest text-brand-accent border-t border-white/10 pt-8">
                       <p>✓ Voluntary Registrations</p>
                       <p>✓ Compulsory Threshold Tracking</p>
                       <p>✓ Professional Liaison with HMRC</p>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-brand-accent/20 rounded-[40px] md:rounded-[80px] -rotate-3 scale-105 -z-10" />
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
