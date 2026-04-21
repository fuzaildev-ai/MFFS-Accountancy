import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/SectionWrapper';

export default function Partnerships() {
  return (
    <>
      <Helmet>
        <title>Partnership Accounting | UK Accounting Services</title>
        <meta name="description" content="Dedicated partnership tax solutions and liability structuring for UK businesses." />
      </Helmet>
      <SectionWrapper bg="bg-brand-light">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mb-6">Partnership Accounting</h1>
        <p className="text-lg text-slate-600 max-w-3xl">Comprehensive profit allocations and seamless multi-party tax filings to ensure zero disputes and total compliance in your UK partnership.</p>
      </SectionWrapper>
    </>
  );
}
