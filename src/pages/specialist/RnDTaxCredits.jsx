import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/SectionWrapper';

export default function RnDTaxCredits() {
  return (
    <>
      <Helmet>
        <title>R&D Tax Credits UK | Corporate Tax Specialists</title>
        <meta name="description" content="Maximize your Research & Development Tax Credits with our specialist UK corporate accounting teams." />
      </Helmet>
      <SectionWrapper bg="bg-brand-light">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mb-6">R&D Tax Credits</h1>
        <p className="text-lg text-slate-600 max-w-3xl">We aggressively track down your eligible innovation initiatives, structuring irrefutable R&D claims for HMRC to instantly inject massive cash flow rebates back into your startup.</p>
      </SectionWrapper>
    </>
  );
}
