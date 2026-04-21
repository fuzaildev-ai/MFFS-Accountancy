import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function Bookkeeping() {
  return (
    <div>
      <Helmet>
        <title>Bookkeeping & Management Accounts | MFFS Beckenham Accountant</title>
        <meta name="description" content="Efficient bookkeeping and professional management accounts for UK businesses. Keep your records pristine with MFFS." />
      </Helmet>

      <PageHeader 
        title="Bookkeeping" 
        subtitle="The backbone of your financial health. We maintain accurate, real-time records so you can focus on building your business."
        bgImage="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2926&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                 <div className="finkash-card bg-brand-primary p-12 md:p-16 rounded-[60px] text-white">
                    <h4 className="text-2xl font-black mb-8 italic text-brand-accent uppercase tracking-widest">Digital Precision</h4>
                    <ul className="space-y-8">
                       {[
                         { title: "Bank Reconciliations", desc: "Weekly matching of all transactions to ensure your balance is exact." },
                         { title: "Sales & Purchase Ledgers", desc: "Detailed tracking of every invoice issued and bill received." },
                         { title: "Management Accounts", desc: "Monthly or quarterly snapshots of your P&L and Balance Sheet." },
                         { title: "Software Setup", desc: "Full onboarding for Xero, QuickBooks, or FreeAgent ecosystems." }
                       ].map((item, idx) => (
                         <li key={idx} className="group">
                            <span className="text-xs font-black text-brand-accent block mb-2 tracking-[0.2em]">0{idx+1} // {item.title}</span>
                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Core Financial Hygiene</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Accurate Records. <br /><span className="text-brand-accent italic">Zero Friction.</span></h2>
                 <p className="text-slate-500 text-xl leading-relaxed mb-10 border-l-4 border-brand-accent pl-8">
                    Up-to-date bookkeeping is essential for making informed business decisions. Without accurate data, it's impossible to know your true profit or cashflow position. MFFS provides the forensic detail needed for corporate success.
                 </p>
                 <p className="text-slate-400 mb-12">
                   We utilize the latest cloud-native technologies to automate data capture—meaning you spend less time on spreadsheets and more time on strategy.
                 </p>
                 <Button to="/contact" variant="primary">Get a Quote</Button>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
