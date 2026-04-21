import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { supabase } from '../supabaseClient';

export default function CaseStudies() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCases() {
      try {
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setCases(data || []);
      } catch (err) {
        console.error("Supabase Case Error:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCases();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Portfolio & Success Stories | MFFS Accountancy</title>
        <meta name="description" content="Explore our institutional financial success stories. Clean UK accounting case studies with mathematical certainty." />
      </Helmet>

      <PageHeader 
        title="Success Gallery" 
        subtitle="Exploring the mathematical outcomes and strategic victories delivered for our UK enterprise client network."
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2942&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[1, 2].map(i => (
                  <div key={i} className="h-[500px] bg-brand-light/50 rounded-3xl animate-pulse" />
                ))}
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {cases.map((item) => (
                 <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-brand-primary h-[500px]">
                    <img 
                       src={item.image_url} 
                       alt={item.title} 
                       className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent p-12 flex flex-col justify-end">
                       <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-4 block">{item.category}</span>
                       <h3 className="text-3xl font-black text-white mb-6 uppercase leading-tight group-hover:text-brand-accent transition-colors">{item.title}</h3>
                       
                       <div className="flex items-center justify-between border-t border-white/20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                          <div className="text-white font-bold italic text-sm">{item.result}</div>
                          <Button to="/contact" variant="outline" className="text-white border-white/30 px-6 py-3 text-xs">View Data</Button>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-brand-light">
         <div className="container-custom text-center">
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-10 tracking-tight">Ready for your <span className="text-brand-accent italic">Strategic Audit?</span></h2>
            <Button to="/contact" variant="primary" className="px-16 py-8 text-xl">Consult a Strategist</Button>
         </div>
      </SectionWrapper>
    </div>
  );
}
