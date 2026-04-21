import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const NewsCard = ({ date_label, title, excerpt }) => (
  <div className="bg-white p-8 rounded-[32px] border border-brand-primary/5 hover:border-brand-accent transition-all duration-500 group h-full flex flex-col shadow-sm hover:shadow-xl">
    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-primary/30 mb-6 group-hover:text-brand-accent transition-colors">
       {date_label} // Intelligence
    </div>
    <h3 className="text-xl font-black text-brand-primary mb-6 leading-tight uppercase group-hover:text-brand-primary/70 transition-colors">
      {title}
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
      {excerpt}
    </p>
    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-primary/40 group-hover:text-brand-accent transition-all">
       Statement Verified <span className="w-8 h-[1px] bg-brand-primary/10 group-hover:bg-brand-accent transition-all" />
    </div>
  </div>
);

export default function TaxNews({ limit = 3 }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;
        setNews(data || []);
      } catch (err) {
        console.error("Supabase Error:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-brand-light/50 h-[300px] rounded-[32px] animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
}
