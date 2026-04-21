import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import SectionWrapper from '../components/SectionWrapper';
import TaxNews from '../components/TaxNews';

export default function News() {
  return (
    <div>
      <Helmet>
        <title>UK Tax News & Intelligence | MFFS Accountancy</title>
        <meta name="description" content="Stay updated with the latest UK tax policy changes, budget updates, and HMRC mandates. Professional tax intelligence from MFFS." />
      </Helmet>

      <PageHeader 
        title="Tax Intelligence" 
        subtitle="Analyzing the landscape of UK fiscal policy. We provide surgical clarity on how modern tax movements affect your enterprise."
        bgImage="https://images.unsplash.com/photo-1544725121-be3b54124be7?q=80&w=2934&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="flex items-center gap-4 mb-20">
              <div className="w-12 h-0.5 bg-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Global Briefing [Archive]</span>
           </div>
           
           <TaxNews limit={100} />
        </div>
      </SectionWrapper>
    </div>
  );
}
