import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionWrapper from '../../components/SectionWrapper';

export default function SelfAssessment() {
  return (
    <>
      <Helmet>
        <title>HMRC Self Assessment Returns | UK Accountant</title>
        <meta name="description" content="Personal and corporate self assessment processing, completely optimized by registered UK Accounting experts." />
      </Helmet>
      <SectionWrapper bg="bg-brand-light">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mb-6">Self Assessment & Tax</h1>
        <p className="text-lg text-slate-600 max-w-3xl">We take the pain out of January deadlines. Flawlessly structured HMRC self assessments tailored to minimize capital exposure.</p>
      </SectionWrapper>
    </>
  );
}
