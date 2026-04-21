import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';

export default function LimitedCompany() {
  return (
    <>
      <Helmet><title>Limited Company Accounting | UK Accountant | MFFS</title></Helmet>
      <PageHeader title="Limited Company" subtitle="End-to-end accounting solutions for UK registered private limited companies." />
      <SectionWrapper bg="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {["Statutory Accounts", "Company Secretarial", "Dividend Planning", "CT600 Filing"].map((title, idx) => (
             <div key={idx} className="bg-brand-light p-8 rounded-2xl border border-black/5 shadow-sm">
                <h4 className="text-xl font-bold text-brand-primary mb-2">{title}</h4>
                <p className="text-slate-600">Comprehensive management ensuring your limited venture remains strictly compliant with Companies House.</p>
             </div>
           ))}
        </div>
      </SectionWrapper>
    </>
  );
}
