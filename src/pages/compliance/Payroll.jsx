import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function Payroll() {
  return (
    <div>
      <Helmet>
        <title>Payroll & RTI Compliance | MFFS Accountancy</title>
        <meta name="description" content="Professional UK payroll services. HMRC RTI compliant processing, pension auto-enrolment, and CIS deduction management." />
      </Helmet>

      <PageHeader 
        title="Payroll & RTI" 
        subtitle="Eliminate the complexity of employee compensation. We provide full RTI-compliant payroll management for UK businesses."
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb24172f?q=80&w=2914&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Workforce Compliance</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Accurate. <br /><span className="text-brand-accent italic">RTI Ready.</span></h2>
                 <p className="text-slate-500 text-xl leading-relaxed mb-10">
                    Managing payroll is about more than just paying employees. It involves complex tax calculations, pension auto-enrolment, and mandatory Real Time Information (RTI) reporting to HMRC.
                 </p>
                 
                 <div className="space-y-6 mb-12">
                    {[
                      "Processing of weekly or monthly payroll runs",
                      "Full RTI (Real Time Information) filing with HMRC",
                      "Management of pension auto-enrolment obligations",
                      "Production of ePayslips and P60 reporting"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-brand-light rounded-xl border border-brand-primary/5">
                         <div className="w-6 h-6 bg-brand-accent rounded flex items-center justify-center text-[10px] font-black">✓</div>
                         <p className="font-bold text-brand-primary/70">{item}</p>
                      </div>
                    ))}
                 </div>
                 <Button to="/contact" variant="primary">Setup Payroll</Button>
              </div>
              <div className="bg-brand-primary p-12 md:p-20 rounded-[80px] shadow-2xl relative overflow-hidden text-white flex flex-col justify-center">
                 <h3 className="text-2xl font-black mb-8 italic text-brand-accent underline decoration-brand-accent/20">Pension Governance</h3>
                 <p className="text-white/60 mb-10 leading-relaxed italic">"Employment law and tax regulations change rapidly. We ensure your payroll remains compliant with every new HMRC update."</p>
                 <div className="grid grid-cols-2 gap-8 text-[10px] font-black uppercase tracking-widest text-brand-accent">
                    <div className="p-6 border border-white/5 bg-white/5 rounded-2xl">
                       <p className="mb-2">PAYE / NI</p>
                       <p className="text-white">Calculated</p>
                    </div>
                    <div className="p-6 border border-white/5 bg-white/5 rounded-2xl">
                       <p className="mb-2">Auto-Enrolment</p>
                       <p className="text-white">Active</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
