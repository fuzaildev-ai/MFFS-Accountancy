import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/SectionWrapper';

export default function BusinessPlanning() {
  return (
    <>
      <Helmet>
        <title>Corporate Business Planning | Accounting Services London/UK</title>
        <meta name="description" content="Strategic financial forecasting and structural corporate planning for scaling UK limited companies." />
      </Helmet>
      <SectionWrapper bg="bg-brand-light">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mb-6">Business Planning</h1>
        <p className="text-lg text-slate-600 max-w-3xl">In-depth financial forecasting, scalable infrastructure audits, and CFO-level advisory designed to guide your UK venture towards maximum enterprise evaluation.</p>
      </SectionWrapper>
    </>
  );
}
