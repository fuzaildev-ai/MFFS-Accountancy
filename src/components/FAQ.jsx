import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-primary/10 py-8 group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center gap-8">
        <h3 className={`text-xl md:text-2xl font-black transition-colors duration-500 ${isOpen ? 'text-brand-accent' : 'text-brand-primary'}`}>
          {question}
        </h3>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-brand-accent font-black text-2xl"
        >
          {isOpen ? "−" : "+"}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-lg leading-relaxed pt-8 max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "What are the core filing deadlines for UK Limited Companies?",
      answer: "Typically, you must file your statutory accounts with Companies House 9 months after your financial year ends. Corporation Tax (CT600) is due 9 months and 1 day after the accounting period ends. MFFS handles the tracking of all these deadlines for you."
    },
    {
      question: "How does the MTD (Making Tax Digital) transition work?",
      answer: "We migrate your existing records to an HMRC-compatible cloud ecosystem. This allows for real-time VAT submissions and ensures your business remains 100% compliant with the latest digital mandates."
    },
    {
      question: "Can I switch to MFFS if I already have an accountant?",
      answer: "Yes, the process is seamless. We handle the professional clearance with your previous firm and migrate all historical data to our secure high-trust platform without any interruption to your operations."
    },
    {
      question: "Are your fees fixed or hourly?",
      answer: "We operate primarily on a fixed-fee investment model. This provides you with absolute cost certainty and allows our advisors to focus on strategic value rather than billable hours."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} {...faq} />
      ))}
    </div>
  );
}
