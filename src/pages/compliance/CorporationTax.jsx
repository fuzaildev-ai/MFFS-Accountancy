import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function CorporationTax() {
  return (
    <div>
      <Helmet>
        <title>Corporation Tax & CT600 | MFFS Accountancy</title>
        <meta name="description" content="Strategic corporation tax services for UK limited companies. CT600 filing, tax relief identification, and capital allowance advice." />
      </Helmet>

      <PageHeader 
        title="Corporation Tax" 
        subtitle="Optimizing your corporate tax position. We provide precise CT600 filings and strategic advice on business tax reliefs."
        bgImage="https://images.unsplash.com/photo-1454165833267-0c061763777d?q=80&w=2940&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Limited Company Strategy</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Navigating <br /><span className="text-brand-accent italic">CT600 Policy.</span></h2>
                 <p className="text-slate-500 text-xl leading-relaxed mb-10">
                    Computing your business's corporation tax liability requires a deep understanding of UK fiscal law. Every Limited Company must file a CT600 and submit statutory accounts to HMRC.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 bg-brand-light rounded-3xl border border-brand-primary/5">
                       <h4 className="font-black text-brand-primary mb-4 uppercase text-xs tracking-widest text-brand-accent">CT600 Filing</h4>
                       <p className="text-sm text-slate-500">Professional preparation and digital submission of your company tax returns.</p>
                    </div>
                    <div className="p-8 bg-brand-light rounded-3xl border border-brand-primary/5">
                       <h4 className="font-black text-brand-primary mb-4 uppercase text-xs tracking-widest text-brand-accent">Tax Reliefs</h4>
                       <p className="text-sm text-slate-500">Identifying R&D credits, Capital Allowances, and other eligible business reliefs.</p>
                    </div>
                    <div className="p-8 bg-brand-light rounded-3xl border border-brand-primary/5">
                       <h4 className="font-black text-brand-primary mb-4 uppercase text-xs tracking-widest text-brand-accent">HMRC Liaison</h4>
                       <p className="text-sm text-slate-500">Handling all correspondence and technical queries from the tax authorities.</p>
                    </div>
                    <div className="p-8 bg-brand-light rounded-3xl border border-brand-primary/5">
                       <h4 className="font-black text-brand-primary mb-4 uppercase text-xs tracking-widest text-brand-accent">Dividend Policy</h4>
                       <p className="text-sm text-slate-500">Structuring your director remuneration for maximum tax efficiency.</p>
                    </div>
                 </div>
                 <Button to="/contact" variant="primary">Audit My CT600</Button>
              </div>
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" 
                      className="w-full h-full object-cover grayscale" 
                      alt="Corporate Strategy"
                    />
                    <div className="absolute inset-0 bg-brand-primary/30 mix-blend-multiply" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-brand-accent p-12 rounded-[50px] shadow-2xl text-brand-primary max-w-xs">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Strategic Fact</p>
                    <p className="text-xl font-black italic">"We help you transition from simple taxation to strategic capital engineering."</p>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
