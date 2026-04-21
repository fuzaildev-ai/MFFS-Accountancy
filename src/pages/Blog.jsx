import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../components/SectionWrapper';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Accounting Insights & Blog | UK Accountant</title>
        <meta name="description" content="Read the latest updates regarding HMRC, Making Tax Digital, and compliance laws strictly for UK limited companies and sole traders." />
      </Helmet>
      <SectionWrapper bg="bg-brand-light">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mb-8 text-center">Accounting Insights</h1>
        <p className="text-center text-slate-600 mb-12">Latest updates, tutorials, and MTD notifications.</p>
        <div className="text-center text-slate-500 py-20 border-2 border-dashed border-gray-300 rounded-xl">
           <h3 className="text-xl">Articles coming soon...</h3>
        </div>
      </SectionWrapper>
    </>
  );
}
