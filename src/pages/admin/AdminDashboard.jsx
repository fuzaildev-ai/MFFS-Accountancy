import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

const SidebarItem = ({ active, icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all ${active ? 'bg-brand-accent text-brand-primary font-black' : 'text-slate-400 hover:text-white hover:bg-white/5 font-bold'}`}
  >
    <span className={`${active ? 'text-brand-primary' : 'text-slate-500'} text-lg`}>{icon}</span>
    <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
  </button>
);

const KPICard = ({ label, value, subtext, icon }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-[60px] flex items-center justify-center text-4xl opacity-20 transition-all group-hover:bg-brand-accent/10">
       {icon}
    </div>
    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-6">{label}</span>
    <div>
      <h3 className="text-4xl font-black text-brand-primary tracking-tighter mb-1">{value}</h3>
      <p className="text-[9px] font-black text-brand-accent uppercase tracking-widest">{subtext}</p>
    </div>
  </div>
);

const formatDateLabel = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('news');
  const [data, setData] = useState([]);
  const [analytics, setAnalytics] = useState({ traffic: [], leads: [], kpis: { views: 0, leads: 0, conv: '0%' } });
  const [loading, setLoading] = useState(false);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Forms
  const [newsForm, setNewsForm] = useState({ title: '', excerpt: '', date_picker: '', date_label: '' });
  const [caseForm, setCaseForm] = useState({ title: '', category: '', result: '', image_url: '' });
  const [testimonyForm, setTestimonyForm] = useState({ name: '', comment: '', company: '', order_index: 0 });
  const [teamForm, setTeamForm] = useState({ name: '', role: '', designations: '', image_url: '', linkedin_url: '', order_index: 0 });

  useEffect(() => {
    if (activeTab === 'insights') {
      fetchAnalytics();
    } else {
      fetchData();
    }
  }, [activeTab]);

  const fetchAnalytics = async () => {
    setLoading(true);
    const { data: views } = await supabase.from('page_views').select('*');
    const { data: leads } = await supabase.from('leads').select('*');

    const process = (items) => {
       const map = {};
       items?.forEach(item => {
          const d = new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
          map[d] = (map[d] || 0) + 1;
       });
       return Object.entries(map).map(([name, value]) => ({ name, value })).slice(-15);
    };

    setAnalytics({
       traffic: process(views),
       leads: process(leads),
       kpis: {
          views: views?.length || 0,
          leads: leads?.length || 0,
          conv: (views?.length && leads?.length) ? ((leads.length / views.length) * 100).toFixed(1) + '%' : '0%'
       }
    });
    setLoading(false);
  };

  const fetchData = async () => {
    setLoading(true);
    let result;
    if (activeTab === 'news') {
      result = await supabase.from('news').select('*').order('created_at', { ascending: false });
    } else if (activeTab === 'cases') {
      result = await supabase.from('case_studies').select('*').order('created_at', { ascending: false });
    } else if (activeTab === 'testimonials') {
      result = await supabase.from('testimonials').select('*').order('order_index', { ascending: true });
    } else if (activeTab === 'team') {
      result = await supabase.from('team').select('*').order('order_index', { ascending: true });
    }
    
    if (result && !result.error) setData(result.data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const openSlider = (item = null) => {
    if (item) {
      setEditingId(item.id);
      if (activeTab === 'news') {
        setNewsForm({ title: item.title, excerpt: item.excerpt, date_label: item.date_label, date_picker: '' });
      } else if (activeTab === 'cases') {
        setCaseForm({ ...item });
      } else if (activeTab === 'testimonials') {
        setTestimonyForm({ ...item });
      } else if (activeTab === 'team') {
        setTeamForm({ ...item });
      }
    } else {
      setEditingId(null);
      resetForms();
    }
    setIsSlideOpen(true);
  };

  const resetForms = () => {
    setNewsForm({ title: '', excerpt: '', date_picker: '', date_label: '' });
    setCaseForm({ title: '', category: '', result: '', image_url: '' });
    setTestimonyForm({ name: '', comment: '', company: '', order_index: 0 });
    setTeamForm({ name: '', role: '', designations: '', image_url: '', linkedin_url: '', order_index: 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let table;
    switch(activeTab) {
      case 'news': table = 'news'; break;
      case 'cases': table = 'case_studies'; break;
      case 'testimonials': table = 'testimonials'; break;
      case 'team': table = 'team'; break;
      default: table = 'news';
    }

    let formData;
    if (activeTab === 'news') {
       formData = { ...newsForm };
       if (newsForm.date_picker) formData.date_label = formatDateLabel(newsForm.date_picker);
       delete formData.date_picker;
    } else if (activeTab === 'cases') {
       formData = caseForm;
    } else if (activeTab === 'testimonials') {
       formData = testimonyForm;
    } else {
       formData = teamForm;
    }

    const { error } = editingId 
      ? await supabase.from(table).update(formData).eq('id', editingId)
      : await supabase.from(table).insert([formData]);

    if (!error) {
      setIsSlideOpen(false);
      fetchData();
      resetForms();
    }
    setIsSubmitting(false);
  };

  const deleteItem = async (id) => {
    let table;
    switch(activeTab) {
      case 'news': table = 'news'; break;
      case 'cases': table = 'case_studies'; break;
      case 'testimonials': table = 'testimonials'; break;
      case 'team': table = 'team'; break;
      default: table = 'news';
    }
    
    if (window.confirm("Archive permanently?")) {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (!error) fetchData();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans leading-normal">
      {/* 1. Sidebar - Dark Institutional Suite */}
      <div className="w-72 bg-[#0E2333] flex flex-col p-8 fixed h-full z-20 overflow-hidden shadow-2xl">
         <div className="flex items-center gap-3 mb-16 px-6">
            <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center font-black text-brand-primary text-xl shadow-lg shadow-brand-accent/20">M</div>
            <div className="flex flex-col -gap-1">
               <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">MFFS<span className="text-brand-accent">.</span></span>
               <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.4em]">ADMIN v4.0</span>
            </div>
         </div>

         <div className="space-y-1 flex-grow">
            <SidebarItem active={activeTab === 'news'} icon="📰" label="News" onClick={() => setActiveTab('news')} />
            <SidebarItem active={activeTab === 'cases'} icon="📁" label="Case Study" onClick={() => setActiveTab('cases')} />
            <SidebarItem active={activeTab === 'testimonials'} icon="💬" label="Testimonials" onClick={() => setActiveTab('testimonials')} />
            <SidebarItem active={activeTab === 'team'} icon="👥" label="Team Members" onClick={() => setActiveTab('team')} />
            <div className="pt-8 mb-4 border-b border-white/5 mx-6" />
            <SidebarItem active={activeTab === 'insights'} icon="📈" label="Insights" onClick={() => setActiveTab('insights')} />
         </div>

         <button 
           onClick={handleLogout}
           className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-slate-500 hover:text-white hover:bg-red-500/10 transition-all text-[10px] font-black uppercase tracking-widest mt-auto border border-transparent"
         >
           🚪 Logout
         </button>
      </div>

      {/* 2. Main Content */}
      <div className="flex-grow ml-72">
         {/* Top Bar - Clean Premium */}
         <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 h-24 flex items-center justify-between px-12 sticky top-0 z-10">
            <div>
               <h2 className="text-xl font-black text-brand-primary uppercase tracking-tighter leading-none">
                  {activeTab === 'insights' ? 'Intelligence Dashboard' : `Managing ${activeTab.replace('_', ' ')}`}
               </h2>
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Institutional Connectivity: OK</p>
            </div>
            {activeTab !== 'insights' && (
              <button 
                onClick={() => openSlider()}
                className="px-8 py-4 bg-brand-primary text-brand-accent font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-brand-accent hover:text-brand-primary shadow-lg shadow-brand-primary/10 transition-all transform active:scale-95"
              >
                + Register New Entry
              </button>
            )}
         </div>

         {/* Layout Router */}
         <div className="p-12 max-w-[1600px] mx-auto h-[calc(100vh-6rem)] overflow-y-auto pb-40 scrollbar-hide">
            
            {activeTab === 'insights' ? (
               /* Redesigned Bento Insights */
               <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <KPICard label="Total Visitors" value={analytics.kpis.views} subtext="Institutional Reach" icon="🌐" />
                     <KPICard label="Active Leads" value={analytics.kpis.leads} subtext="Conversion Volume" icon="⚡" />
                     <KPICard label="Conversion" value={analytics.kpis.conv} subtext="Strategy Efficiency" icon="🎯" />
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                     {/* Large Traffic Chart */}
                     <div className="xl:col-span-2 bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex justify-between items-center mb-10">
                           <div>
                              <h3 className="text-lg font-black text-brand-primary uppercase tracking-tighter">Engagement <span className="text-brand-accent italic">Metrics</span>.</h3>
                              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-1">Traffic Volume Tracking // 15 Days</p>
                           </div>
                        </div>
                        <div className="h-[350px]">
                           <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={analytics.traffic}>
                                 <defs>
                                    <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                                       <stop offset="5%" stopColor="#AFCA0B" stopOpacity={0.8}/>
                                       <stop offset="95%" stopColor="#AFCA0B" stopOpacity={0}/>
                                    </linearGradient>
                                 </defs>
                                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                                 <XAxis dataKey="name" stroke="#cbd5e1" fontSize={8} fontWeight={900} axisLine={false} tickLine={false} dy={10} />
                                 <YAxis stroke="#cbd5e1" fontSize={8} fontWeight={900} axisLine={false} tickLine={false} />
                                 <Tooltip contentStyle={{ background: '#0E2333', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '10px', fontWeight: 900 }} />
                                 <Area type="monotone" dataKey="value" stroke="#AFCA0B" strokeWidth={4} fillOpacity={1} fill="url(#colorV)" />
                              </AreaChart>
                           </ResponsiveContainer>
                        </div>
                     </div>

                     {/* Sidebar Lead Chart */}
                     <div className="bg-[#0E2333] p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                           <h3 className="text-lg font-black text-white uppercase tracking-tighter">Acquisition <br /><span className="text-brand-accent italic">Trend</span>.</h3>
                           <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-2 mb-10 text-brand-accent">Conversion Stream</p>
                           <div className="h-[250px]">
                              <ResponsiveContainer width="100%" height="100%">
                                 <BarChart data={analytics.leads}>
                                    <Bar dataKey="value" fill="#AFCA0B" radius={[4, 4, 0, 0]} />
                                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ background: '#fff', border: 'none', borderRadius: '12px', fontSize: '9px', fontWeight: 900 }} />
                                 </BarChart>
                              </ResponsiveContainer>
                           </div>
                           <div className="mt-8 pt-8 border-t border-white/5 text-center">
                              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Growth detected in last cycle</span>
                           </div>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent rounded-full opacity-5 blur-3xl animate-pulse" />
                     </div>
                  </div>
               </div>
            ) : (
               /* Traditional Grid View - Institutionalized */
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-500">
                  {loading ? (
                     [1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-64 bg-white border border-slate-100 rounded-3xl animate-pulse" />)
                  ) : data.length === 0 ? (
                     <div className="col-span-full mt-20 text-center border-4 border-dashed border-slate-200 rounded-[60px] p-24">
                        <p className="text-slate-300 font-black text-xl uppercase tracking-widest">Awaiting Institutional Publication.</p>
                     </div>
                  ) : (
                     data.map(item => (
                       <div key={item.id} className="bg-white p-8 rounded-[40px] border border-slate-100 hover:border-brand-accent hover:shadow-2xl transition-all duration-500 group relative flex flex-col justify-between">
                          <div>
                             <div className="flex items-center gap-5 mb-8">
                                {item.image_url ? (
                                  <div className="w-14 h-14 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-inner">
                                     <img src={item.image_url} alt="" className="w-full h-full object-cover" />
                                  </div>
                                ) : (
                                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-xl shadow-inner italic font-black text-slate-300">
                                     {activeTab[0]}
                                  </div>
                                )}
                                <div className="truncate flex-grow">
                                   <span className="text-[9px] font-black uppercase text-brand-accent tracking-[0.3em] block mb-1">
                                      {activeTab === 'news' ? item.date_label : (activeTab === 'cases' ? item.category : (activeTab === 'testimonials' ? (item.company || 'Private Client') : item.role))}
                                   </span>
                                   <h4 className="text-base font-black text-brand-primary uppercase leading-none tracking-tight truncate">{item.name || item.title}</h4>
                                </div>
                             </div>
                             {(activeTab === 'news' || activeTab === 'testimonials') && (
                               <p className="text-slate-400 text-[11px] font-bold leading-relaxed line-clamp-3 mb-8 italic">
                                 {item.excerpt || item.comment}
                               </p>
                             )}
                          </div>
                          
                          <div className="flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                             <button onClick={() => openSlider(item)} className="px-5 py-3 bg-slate-50 text-brand-primary text-[9px] font-black uppercase rounded-xl hover:bg-brand-accent transition-all">Modify</button>
                             <button onClick={() => deleteItem(item.id)} className="px-5 py-3 bg-red-50 text-red-500 text-[9px] font-black uppercase rounded-xl hover:bg-red-500 hover:text-white transition-all">Archive</button>
                          </div>
                       </div>
                     ))
                  )}
               </div>
            )}
         </div>
      </div>

      {/* 3. Slide-Over Panel - Refined Institutional */}
      {isSlideOpen && (
         <div className="fixed inset-0 z-50 overflow-hidden font-black">
            <div className="absolute inset-0 bg-brand-primary/40 backdrop-blur-md transition-opacity" onClick={() => setIsSlideOpen(false)} />
            <div className="absolute inset-y-0 right-0 max-w-xl w-full bg-white shadow-2xl p-16 flex flex-col transform animate-in slide-in-from-right duration-700 ease-out">
               <div className="flex justify-between items-center mb-16">
                  <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tighter leading-[0.8]">
                     {editingId ? 'Modify' : 'Initialize'} <br /> <span className="text-brand-accent italic">{activeTab.replace('_', ' ')}</span>.
                  </h3>
                  <button onClick={() => setIsSlideOpen(false)} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all shadow-inner">✕</button>
               </div>

                <form onSubmit={handleSubmit} className="space-y-6 flex-grow overflow-y-auto pr-4 scrollbar-hide">
                  {activeTab === 'news' && (
                    <div className="space-y-6">
                       <div>
                          <label className="text-[10px] uppercase tracking-widest text-slate-400 block mb-4">Verification Date</label>
                          <input type="date" className="w-full p-6 bg-slate-50 rounded-[30px] font-black outline-none border-2 border-slate-100 focus:border-brand-accent transition-all text-sm" value={newsForm.date_picker} onChange={e => setNewsForm({...newsForm, date_picker: e.target.value})} required={!editingId} />
                       </div>
                       <input type="text" placeholder="Intelligence Headline" className="w-full p-6 bg-slate-50 rounded-[30px] font-black outline-none border-2 border-slate-100 focus:border-brand-accent transition-all text-lg" value={newsForm.title} onChange={e => setNewsForm({...newsForm, title: e.target.value})} required />
                       <textarea placeholder="Strategic Excerpt Content" className="w-full p-6 bg-slate-50 rounded-[30px] font-black outline-none border-2 border-slate-100 focus:border-brand-accent transition-all text-sm min-h-[200px]" value={newsForm.excerpt} onChange={e => setNewsForm({...newsForm, excerpt: e.target.value})} required />
                    </div>
                  )}

                  {activeTab === 'cases' && (
                    <div className="space-y-6">
                       <input type="text" placeholder="Engagement Identity" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={caseForm.title} onChange={e => setCaseForm({...caseForm, title: e.target.value})} />
                       <input type="text" placeholder="Classification Category" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={caseForm.category} onChange={e => setCaseForm({...caseForm, category: e.target.value})} />
                       <input type="text" placeholder="Diagnostic Success Metric" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={caseForm.result} onChange={e => setCaseForm({...caseForm, result: e.target.value})} />
                       <input type="text" placeholder="Asset URL (Static)" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={caseForm.image_url} onChange={e => setCaseForm({...caseForm, image_url: e.target.value})} />
                    </div>
                  )}

                  {activeTab === 'testimonials' && (
                    <div className="space-y-6">
                       <input type="text" placeholder="Client Principal Name" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={testimonyForm.name} onChange={e => setTestimonyForm({...testimonyForm, name: e.target.value})} />
                       <input type="text" placeholder="Verified Institution Name" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={testimonyForm.company} onChange={e => setTestimonyForm({...testimonyForm, company: e.target.value})} />
                       <textarea placeholder="Diagnostic Feedback Transcript" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-sm outline-none min-h-[150px]" value={testimonyForm.comment} onChange={e => setTestimonyForm({...testimonyForm, comment: e.target.value})} />
                    </div>
                  )}

                  {activeTab === 'team' && (
                    <div className="space-y-6">
                       <input type="text" placeholder="Strategist Full Identity" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={teamForm.name} onChange={e => setTeamForm({...teamForm, name: e.target.value})} />
                       <input type="text" placeholder="Institutional Role" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={teamForm.role} onChange={e => setTeamForm({...teamForm, role: e.target.value})} />
                       <input type="text" placeholder="Professional Accreditations (ICPA)" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={teamForm.designations} onChange={e => setTeamForm({...teamForm, designations: e.target.value})} />
                       <input type="text" placeholder="Profile Asset URL" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none" value={teamForm.image_url} onChange={e => setTeamForm({...teamForm, image_url: e.target.value})} />
                       <input type="text" placeholder="LinkedIn Connectivity URL" className="w-full p-6 bg-slate-50 rounded-[30px] font-black border-2 border-slate-100 focus:border-brand-accent transition-all text-lg outline-none text-blue-600" value={teamForm.linkedin_url} onChange={e => setTeamForm({...teamForm, linkedin_url: e.target.value})} />
                    </div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-8 bg-[#0E2333] text-brand-accent font-black uppercase text-[11px] tracking-[0.4em] rounded-[30px] shadow-2xl hover:bg-brand-accent hover:text-brand-primary transition-all mt-10 active:scale-95"
                  >
                    {isSubmitting ? 'Transmitting Data...' : (editingId ? 'Modify Institutional Record' : 'Publish to Cloud')}
                  </button>
               </form>
            </div>
         </div>
      )}
    </div>
  );
}
