import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const TeamMember = ({ name, role, designations, image_url, linkedin_url }) => (
  <div className="group">
    <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 relative grayscale hover:grayscale-0 transition-all duration-700 shadow-lg border border-brand-primary/5">
       <img src={image_url} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
       <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
       
       {linkedin_url && (
         <a 
           href={linkedin_url} 
           target="_blank" 
           rel="noopener noreferrer"
           className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-brand-accent shadow-xl"
         >
           <svg className="w-5 h-5 fill-brand-primary" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
         </a>
       )}
    </div>
     <div className="space-y-1">
        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-accent">{designations}</span>
        <h3 className="text-xl font-black text-brand-primary uppercase leading-tight">{name}</h3>
        <p className="text-brand-primary/60 font-black text-[12px] uppercase tracking-[0.3em]">{role}</p>
     </div>
  </div>
);

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('team')
          .select('*')
          .order('order_index', { ascending: true });

        if (error) throw error;
        setTeam(data || []);
      } catch (err) {
        console.error("Supabase Team Error:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="aspect-[4/5] bg-brand-light/50 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  );
}
