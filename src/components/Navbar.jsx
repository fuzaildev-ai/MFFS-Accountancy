import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SubNavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="block py-3 px-6 text-[12px] font-black uppercase tracking-wide text-brand-primary/60 hover:text-brand-primary hover:bg-brand-accent/10 transition-all duration-300"
  >
    {children}
  </Link>
);

const NavLink = ({ to, children, dropdown = false, dropdownContent = null }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (dropdown && (location.pathname.startsWith('/services') || location.pathname.startsWith('/compliance') || location.pathname.startsWith('/specialist') || location.pathname.startsWith('/consultancy')));
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative flex items-center h-full"
      onMouseEnter={() => dropdown && setIsOpen(true)}
      onMouseLeave={() => dropdown && setIsOpen(false)}
    >
      <Link 
        to={to} 
        className={`relative py-8 text-[11px] xl:text-[13px] font-black uppercase tracking-[0.1em] transition-all duration-300 flex items-center gap-1 xl:gap-2 group ${
          isActive ? 'text-brand-primary' : 'text-slate-400 hover:text-brand-primary'
        }`}
      >
        {children}
        {dropdown && <span className={`text-[8px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>}
        {isActive && !isOpen && (
          <motion.div 
            layoutId="nav-underline"
            className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent"
          />
        )}
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {dropdown && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-[240px] bg-white border border-brand-primary/5 shadow-2xl py-4 overflow-hidden rounded-b-xl"
          >
             {dropdownContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const expertiseDropdown = (
    <div className="flex flex-col">
       <SubNavLink to="/services/tax-returns">Tax Returns</SubNavLink>
       <SubNavLink to="/services/bookkeeping">Bookkeeping</SubNavLink>
       <SubNavLink to="/compliance/vat-returns">VAT Returns</SubNavLink>
       <SubNavLink to="/compliance/payroll">Payroll (RTI)</SubNavLink>
       <SubNavLink to="/compliance/corporation-tax">Corporation Tax</SubNavLink>
       <SubNavLink to="/consultancy/business-startup">Business Start-up</SubNavLink>
       <SubNavLink to="/specialist/cis">CIS Scheme</SubNavLink>
       <SubNavLink to="/services/limited-company">Limited Company</SubNavLink>
       <SubNavLink to="/specialist/property-tax">Property Tax</SubNavLink>
       <SubNavLink to="/consultancy/business-planning">Business Planning</SubNavLink>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-xl py-0' : 'bg-white py-1'
    }`}>
      {/* Top Bar - High-Precision Tablet Logic */}
      <div className={`bg-brand-primary text-white text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] xl:tracking-[0.4em] transition-all duration-500 overflow-hidden ${
        isScrolled ? 'h-0 md:h-8' : 'h-0 md:h-10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
            <div className="flex gap-4 xl:gap-8">
               <div className="flex items-center gap-2">
                  <span className="text-brand-accent">UK:</span> +44 (0) 207 118 0246
               </div>
               {/* Email only shows on Desktop (xl) to prevent tablet overlap */}
               <div className="hidden xl:flex items-center gap-2 border-l border-white/10 pl-8">
                  <span className="text-brand-accent">EMAIL:</span> INFO@MFFSACCOUNTANCY.CO.UK
               </div>
            </div>
            <div className="font-black opacity-80">
               MON - FRI: 09:00 - 17:30
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 py-4 xl:py-6">
          <div className="w-8 h-8 xl:w-10 xl:h-10 bg-brand-primary rounded flex items-center justify-center font-black text-brand-accent text-lg xl:text-xl">M</div>
          <div className="flex flex-col -gap-1">
             <span className="text-xl xl:text-2xl font-black tracking-tighter text-brand-primary leading-none">MFFS<span className="text-brand-accent">.</span></span>
             <span className="text-[7px] xl:text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Accountancy</span>
          </div>
        </Link>

        {/* Desktop Navigation - Active from 1024px (lg) with optimized spacing */}
        <div className="hidden lg:flex items-center lg:gap-4 xl:gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink 
            to="/services" 
            dropdown 
            dropdownContent={expertiseDropdown}
          >
            Our Expertise
          </NavLink>
          <NavLink to="/portfolio">Success Stories</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          
          <Link 
            to="/contact" 
            className="lg:ml-2 xl:ml-6 px-6 xl:px-10 py-4 xl:py-5 bg-brand-primary text-brand-accent font-black text-[9px] xl:text-[10px] uppercase tracking-[0.1em] hover:bg-brand-accent hover:text-brand-primary transition-all duration-500 rounded-sm"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle - Active up to LG (1024px) */}
        <button 
          className="lg:hidden text-brand-primary w-10 h-10 flex flex-col items-end justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <div className="w-6 h-0.5 bg-current" />
          <div className="w-4 h-0.5 bg-current" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile Sidebar Menu (Left Drawer) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-primary/60 backdrop-blur-sm z-[110]"
            />

            {/* Sidebar Content */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[340px] bg-white z-[120] shadow-2xl flex flex-col pt-8"
            >
               <div className="px-8 pb-12">
                  {/* Drawer Logo */}
                  <div className="flex items-center gap-3 mb-10">
                      <div className="w-10 h-10 bg-brand-primary rounded flex items-center justify-center font-black text-brand-accent text-xl">M</div>
                      <div className="flex flex-col -gap-1">
                        <span className="text-2xl font-black tracking-tighter text-brand-primary leading-none">MFFS<span className="text-brand-accent">.</span></span>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Accountancy</span>
                      </div>
                  </div>

                  {/* Nav Links */}
                  <div className="flex flex-col gap-6 overflow-y-auto max-h-[70vh] pr-4 custom-scrollbar">
                      <MobileNavLink to="/" label="Home" />
                      <MobileNavLink to="/about" label="About Us" />
                      
                      <div className="space-y-4">
                        <p className="text-[9px] font-black uppercase text-brand-accent tracking-[0.4em]">Our Professional Expertise</p>
                        <div className="grid grid-cols-1 gap-4 border-l-2 border-brand-primary/5 pl-6">
                            <Link to="/services/tax-returns" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Tax Returns</Link>
                            <Link to="/services/bookkeeping" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Bookkeeping</Link>
                            <Link to="/compliance/vat-returns" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">VAT Returns</Link>
                            <Link to="/compliance/payroll" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Payroll (RTI)</Link>
                            <Link to="/compliance/corporation-tax" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Corporation Tax</Link>
                            <Link to="/consultancy/business-startup" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Business Start-up</Link>
                            <Link to="/specialist/cis" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">CIS Scheme</Link>
                            <Link to="/services/limited-company" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Limited Company</Link>
                            <Link to="/specialist/property-tax" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Property Tax</Link>
                            <Link to="/consultancy/business-planning" className="text-xs font-bold uppercase text-brand-primary hover:text-brand-accent">Business Planning</Link>
                        </div>
                      </div>

                      <MobileNavLink to="/portfolio" label="Success Stories" />
                      <MobileNavLink to="/pricing" label="Pricing" />
                      <MobileNavLink to="/contact" label="Contact Us" />
                  </div>
               </div>

               {/* Bottom CTA */}
               <div className="mt-auto p-8 border-t border-brand-primary/5 bg-brand-light/30">
                  <Link 
                    to="/contact" 
                    className="w-full py-5 bg-brand-primary text-brand-accent flex items-center justify-center font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
                  >
                    Request Diagnostic
                  </Link>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

const MobileNavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`text-xl font-black uppercase tracking-tight transition-colors ${
        isActive ? 'text-brand-accent' : 'text-brand-primary active:text-brand-accent'
      }`}
    >
      {label}
    </Link>
  );
};
