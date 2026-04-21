import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { supabase } from '../supabaseClient';

export default function Contact() {
   const formRef = useRef();
   const [isSending, setIsSending] = useState(false);
   const [isSent, setIsSent] = useState(false);
   const [error, setError] = useState(null);

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsSending(true);
      setError(null);

      // INSTRUCTIONS: Set up your account at emailjs.com 
      // Create a Service and a Template, then use your keys below:
      const SERVICE_ID = "service_ix1ddvn"; // Get from EmailJS
      const TEMPLATE_ID = "template_ng8lafw"; // Get from EmailJS
      const PUBLIC_KEY = "5LFeePNDr3Wq0xB5s"; // Get from EmailJS

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
         .then((result) => {
            console.log("Email Result:", result.text);
            
            // LOG LEAD FOR ADMIN INSIGHTS
            const formData = new FormData(formRef.current);
            supabase.from('leads').insert([{
               name: formData.get('user_name'),
               email: formData.get('user_email'),
               type: formData.get('subject') || 'General Diagnostic'
            }]).then(() => {}); // Fire and forget for UX

            setIsSent(true);
            setIsSending(false);
            formRef.current.reset();
         }, (error) => {
            console.error("Email Error:", error.text);
            setError("Transmission failed. Please try again or contact us directly.");
            setIsSending(false);
         });
   };

   return (
      <div>
         <Helmet>
            <title>Diagnostic Request | MFFS Accountancy | UK Advisory</title>
            <meta name="description" content="Secure a senior financial diagnostic. Professional UK contact for limited companies and high-growth ventures." />
         </Helmet>

         <PageHeader
            title="Diagnostic Request"
            subtitle="Initialize your professional engagement. Secure a high-trust audit and strategy session with a senior UK partner."
            bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
         />

         <SectionWrapper bg="bg-white">
            <div className="container-custom">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                  {/* Left: Contact Details & Info */}
                  <div className="space-y-16">
                     <div>
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-0.5 bg-brand-accent" />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Our Hub Details</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-brand-primary leading-[0.9] uppercase mb-8">Let's <br /> <span className="text-brand-accent italic">Talk Strategy</span>.</h2>
                        <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-lg">
                           Our senior partners are available for on-site consultations in London or secure digital diagnostic sessions globally.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-brand-primary/5">
                        <div className="space-y-4">
                           <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Official Line</p>
                           <p className="text-2xl font-black text-brand-primary tracking-tighter transition-colors hover:text-brand-accent cursor-pointer">0207 118 0246</p>
                        </div>
                        <div className="space-y-4">
                           <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Secure Email</p>
                           <p className="text-xl font-black text-brand-primary tracking-tighter truncate transition-colors hover:text-brand-accent cursor-pointer uppercase">info@mffsaccountancy.co.uk</p>
                        </div>
                     </div>

                     <div className="aspect-video bg-brand-light rounded-3xl overflow-hidden relative border border-brand-primary/5">
                        <img
                           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
                           className="w-full h-full object-cover grayscale opacity-20"
                           alt="Beckenham HQ"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-brand-primary/5 shadow-2xl">
                              <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-brand-primary">Corporate Headquarters</p>
                              <p className="text-lg font-black text-brand-primary uppercase">90 Croydon Road, Beckenham, BR3 4DF</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right: Modern Professional Form */}
                  <div className="bg-brand-light p-10 md:p-16 rounded-[60px] border border-brand-primary/5 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent rounded-bl-[100px] opacity-10" />

                     {isSent ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-700">
                           <div className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center text-5xl mb-8">✓</div>
                           <h3 className="text-3xl font-black text-brand-primary uppercase mb-4">Inquiry Received</h3>
                           <p className="text-slate-500 font-medium">A senior tax strategist will review your documentation and respond within 4 business hours.</p>
                           <button onClick={() => setIsSent(false)} className="mt-8 text-[10px] font-black uppercase tracking-widest text-brand-accent hover:text-brand-primary underline">Send another request</button>
                        </div>
                     ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-10 relative z-10">
                           <div className="space-y-8">
                              <div>
                                 <label className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-3">Identity Full Name</label>
                                 <input name="user_name" required type="text" className="w-full bg-white border border-brand-primary/5 focus:border-brand-accent outline-none p-5 rounded-xl font-bold transition-all" placeholder="Alexander Thompson" />
                              </div>
                              <div>
                                 <label className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-3">Corporate Email</label>
                                 <input name="user_email" required type="email" className="w-full bg-white border border-brand-primary/5 focus:border-brand-accent outline-none p-5 rounded-xl font-bold transition-all" placeholder="alex@venture.co.uk" />
                              </div>
                              <div>
                                 <label className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-3">Subject Matter</label>
                                 <select name="subject" className="w-full bg-white border border-brand-primary/5 focus:border-brand-accent outline-none p-5 rounded-xl font-bold appearance-none transition-all">
                                    <option>Institutional Audit</option>
                                    <option>Tax Strategy</option>
                                    <option>MTD Transition</option>
                                    <option>CFO Advisory</option>
                                 </select>
                              </div>
                              <div>
                                 <label className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-3">Detailed Inquiry</label>
                                 <textarea name="message" required className="w-full bg-white border border-brand-primary/5 focus:border-brand-accent outline-none p-5 rounded-xl font-bold transition-all min-h-[150px]" placeholder="Briefly outline your current fiscal requirements..." />
                              </div>
                           </div>

                           {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}

                           <Button
                              type="submit"
                              variant="primary"
                              disabled={isSending}
                              className={`w-full py-6 text-xl tracking-widest uppercase bg-brand-primary text-brand-accent hover:bg-brand-accent hover:text-brand-primary shadow-2xl shadow-brand-primary/20 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                           >
                              {isSending ? 'Transmitting...' : 'Request Audit'}
                           </Button>
                        </form>
                     )}
                  </div>

               </div>
            </div>
         </SectionWrapper>
      </div>
   );
}
