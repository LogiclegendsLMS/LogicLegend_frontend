import React from "react";
import { 
  Users, BookOpen, Video, ClipboardList, 
  TrendingUp, PlusCircle, UserPlus, Megaphone, 
  ArrowUpRight, MoreVertical, Calendar
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { title: "Active Students", value: "1,245", icon: Users, bg: "bg-blue-50", text: "text-blue-600" },
  { title: "Total Courses", value: "58", icon: BookOpen, bg: "bg-purple-50", text: "text-purple-600" },
  { title: "Live Classes", value: "12", icon: Video, bg: "bg-orange-50", text: "text-orange-600" },
  { title: "Pending Tasks", value: "34", icon: ClipboardList, bg: "bg-emerald-50", text: "text-emerald-600" }
];

const recentStudents = [
  { name: "Rahul Sharma", course: "React JS", time: "2 min ago", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" },
  { name: "Priya Verma", course: "UI/UX Design", time: "15 min ago", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
  { name: "Ankit Singh", course: "NodeJS", time: "1 hour ago", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit" }
];

const SubAdminDashboard = () => {
  return (
    <div className="p-5 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">

      {/* --- MEDIUM HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#062B5B] tracking-tight">System Overview</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em] mt-1">Platform Performance & Activity</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 w-fit">
          <Calendar size={16} className="text-yellow-500" />
          <span className="text-xs font-black text-slate-600 uppercase tracking-tighter">March 06, 2026</span>
        </div>
      </div>

      {/* --- STATS GRID (Balanced Scale) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div 
            whileHover={{ y: -4 }}
            key={index} 
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`${item.bg} ${item.text} p-3 rounded-2xl`}>
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-wider">{item.title}</p>
                <h2 className="text-xl font-black text-[#062B5B] mt-0.5">{item.value}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* RECENT STUDENTS (Span 2) */}
        <div className="xl:col-span-2 bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black text-[#062B5B] uppercase tracking-widest flex items-center gap-2">
               <Users size={18} className="text-blue-500" /> Recent Enrollments
            </h3>
            <button className="text-[11px] font-black text-blue-600 hover:text-blue-700 transition-colors uppercase">View Report</button>
          </div>
          
          <div className="space-y-4">
            {recentStudents.map((st, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-2xl transition-all group">
                <div className="flex items-center gap-4">
                  <img src={st.img} className="w-10 h-10 rounded-xl bg-white border border-slate-100" alt="avatar" />
                  <div>
                    <p className="font-black text-sm text-slate-800">{st.name}</p>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{st.course}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:block text-[10px] font-black text-slate-300 uppercase">{st.time}</span>
                  <button className="p-2 text-slate-400 hover:text-[#062B5B] transition-colors"><ArrowUpRight size={18}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS BOX */}
        <div className="bg-[#062B5B] p-8 rounded-[40px] text-white flex flex-col justify-between shadow-2xl shadow-blue-900/10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-sm font-black text-yellow-400 uppercase tracking-widest mb-6 flex items-center gap-2">
               <TrendingUp size={18}/> Admin Actions
            </h3>
            
            <div className="space-y-3">
              {[
                { label: "New Course", icon: <PlusCircle size={16}/> },
                { label: "Add Instructor", icon: <UserPlus size={16}/> },
                { label: "Broadcast", icon: <Megaphone size={16}/> }
              ].map((act, i) => (
                <button key={i} className="w-full flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all">
                  <span className="text-yellow-400">{act.icon}</span> {act.label}
                </button>
              ))}
            </div>
          </div>
          
          <button className="mt-8 w-full py-4 bg-yellow-400 text-[#062B5B] rounded-2xl text-[11px] font-[1000] uppercase tracking-[0.2em] shadow-xl shadow-yellow-400/10 hover:scale-[1.02] transition-all">
             Global Reports
          </button>

          {/* Abstract Design Element */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* --- SECONDARY STATS / INFO --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-[32px] flex items-center gap-4">
           <div className="p-3 bg-white rounded-2xl text-emerald-500 shadow-sm"><TrendingUp size={20}/></div>
           <div>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">Monthly Growth</p>
              <h4 className="text-lg font-black text-emerald-900 mt-1">+24.5%</h4>
           </div>
        </div>
        {/* Aap yahan aur cards add kar sakte hain */}
      </div>

    </div>
  );
};

export default SubAdminDashboard;