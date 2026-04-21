import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/SectionWrapper';

export default function YearEndAccounts() {
  return (
    <>
      <Helmet>
        <title>Year End Accounts Preparation | UK Accountant Services</title>
        <meta name="description" content="Strict Companies House and HMRC compliance for end-of-year statutory accounting records." />
      </Helmet>
      <SectionWrapper bg="bg-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mb-6">Year-End Accounts</h1>
        <p className="text-lg text-slate-600 max-w-3xl">We handle the arduous process of closing out your financial year, ensuring your statutory accounts are prepared and filed seamlessly with Companies House and HMRC.</p>
      </SectionWrapper>
    </>
  );
}
