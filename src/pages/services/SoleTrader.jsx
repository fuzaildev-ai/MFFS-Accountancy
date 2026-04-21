import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/SectionWrapper';

export default function SoleTrader() {
  return (
    <>
      <Helmet>
        <title>Sole Trader Accounting | UK Accounting Services</title>
        <meta name="description" content="Affordable and efficient bookkeeping and tax returns for sole traders across the UK." />
      </Helmet>
      <SectionWrapper bg="bg-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mb-6">Sole Trader Services</h1>
        <p className="text-lg text-slate-600 max-w-3xl">Professional and simplified self-assessment accounting keeping sole traders 100% compliant and focused on their actual work.</p>
      </SectionWrapper>
    </>
  );
}
