import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-white/50 hover:text-brand-accent transition-colors duration-300 text-sm font-medium">
      {children}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden relative border-t-8 border-brand-accent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-accent rounded flex items-center justify-center font-black text-brand-primary text-xl">M</div>
              <span className="text-2xl font-black tracking-tighter">MFFS<span className="text-brand-accent">.</span></span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-medium">
              A premium UK consulting and accounting firm dedicated to optimizing capital and ensuring absolute regulatory compliance for high-growth enterprises.
            </p>
            <div className="flex gap-4">
               {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
                 <a key={s} href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 text-[10px] font-black uppercase text-center flex items-center justify-center">{s[0]}</a>
               ))}
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent mb-10">Our Services</h4>
            <ul className="space-y-5">
              <FooterLink to="/services/tax-returns">Audit & Compliance</FooterLink>
              <FooterLink to="/services/bookkeeping">Forensic Ledgering</FooterLink>
              <FooterLink to="/compliance/vat-returns">MTD VAT Strategy</FooterLink>
              <FooterLink to="/compliance/corporation-tax">CT600 Governance</FooterLink>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent mb-10">Corporate</h4>
            <ul className="space-y-5">
              <FooterLink to="/about">About Our Firm</FooterLink>
              <FooterLink to="/pricing">Pricing Plans</FooterLink>
              <FooterLink to="/contact">Request a Quote</FooterLink>
              <FooterLink to="/legal/privacy">Privacy Protocol</FooterLink>
            </ul>
          </div>

          {/* Column 4: Reach Out */}
          <div className="space-y-10">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent mb-10">Reach Out</h4>
            <div className="space-y-6 text-sm text-white/50">
               <div className="group">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-1">Corporate HQ</p>
                  <p className="group-hover:text-white transition-colors">90 Croydon Road, Beckenham, BR3 4DF</p>
               </div>
               <div className="group">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-1">Direct Line</p>
                  <p className="text-xl font-black text-white group-hover:text-brand-accent transition-colors">0207 118 0246</p>
               </div>
               <div className="group">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-1">Secure Email</p>
                  <p className="group-hover:text-white transition-colors">info@mffsaccountancy.co.uk</p>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
            © 2026 MFFS ACCOUNTANCY UK. FIRM NO: 0000000. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
             <Link to="/legal/terms" className="text-[10px] font-black text-white/20 hover:text-brand-accent uppercase tracking-widest">Terms</Link>
             <Link to="/legal/privacy" className="text-[10px] font-black text-white/20 hover:text-brand-accent uppercase tracking-widest">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
