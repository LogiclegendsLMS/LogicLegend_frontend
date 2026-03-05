import React from "react";
import { 
  Bell, 
  Megaphone, 
  Calendar, 
  Info, 
  AlertTriangle, 
  ArrowRight, 
  Pin,
  Clock,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";

const AnnouncementsPage = () => {
  const announcements = [
    {
      id: 1,
      title: "Mid-Term Examination Schedule Released",
      description: "The mid-term exams for the Spring 2026 semester will start from March 25th. Please download the datasheet from the link below.",
      date: "05 March, 2026",
      type: "Urgent",
      category: "Exam",
      isPinned: true
    },
    {
      id: 2,
      title: "New Workshop: Advanced Next.js Patterns",
      description: "Join us for a 3-hour deep dive into Next.js 15 Server Components and Server Actions. Registration is free for Pro members.",
      date: "04 March, 2026",
      type: "Event",
      category: "Workshop",
      isPinned: false
    },
    {
      id: 3,
      title: "Holi Holiday Notice",
      description: "The institute will remain closed on 14th March 2026 on the occasion of Holi. Classes will resume from 16th March.",
      date: "02 March, 2026",
      type: "Update",
      category: "Holiday",
      isPinned: false
    }
  ];

  const getTypeStyle = (type) => {
    switch (type) {
      case "Urgent": return "bg-red-50 text-red-600 border-red-100";
      case "Event": return "bg-blue-50 text-blue-600 border-blue-100";
      default: return "bg-yellow-50 text-yellow-600 border-yellow-100";
    }
  };

  return (
    <div className="ml-0 p-6 md:p-10 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
             <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-[#062B5B] shadow-lg shadow-yellow-200">
                <Megaphone size={20} />
             </div>
             <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">
               Latest <span className="text-yellow-500">Updates</span>
             </h2>
          </div>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] ml-1">
            Stay informed about campus activities and news
          </p>
        </div>

        <div className="flex gap-3">
           <button className="px-5 py-2.5 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:shadow-lg transition-all">
              <Filter size={14} /> Filter
           </button>
           <button className="px-5 py-2.5 bg-[#062B5B] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-100">
              Mark All as Read
           </button>
        </div>
      </div>

      {/* --- ANNOUNCEMENT LIST --- */}
      <div className="max-w-4xl space-y-6">
        {announcements.map((news, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={news.id}
            className={`group relative bg-white rounded-[40px] border p-8 transition-all hover:shadow-2xl hover:shadow-blue-900/5 ${
              news.isPinned ? 'border-yellow-200 shadow-sm' : 'border-slate-100'
            }`}
          >
            {/* Pinned Badge */}
            {news.isPinned && (
              <div className="absolute top-8 right-8 text-yellow-500">
                <Pin size={18} fill="currentColor" />
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-6">
               {/* Date Section */}
               <div className="flex-shrink-0 text-center md:border-r border-slate-100 md:pr-8 flex flex-col justify-center">
                  <p className="text-2xl font-[1000] text-slate-900 leading-none">{news.date.split(' ')[0]}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{news.date.split(' ')[1]}</p>
               </div>

               {/* Content Section */}
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                     <span className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest ${getTypeStyle(news.type)}`}>
                        {news.type}
                     </span>
                     <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{news.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    {news.description}
                  </p>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2 text-slate-300">
                        <Clock size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Posted 2 hours ago</span>
                     </div>
                     <button className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:translate-x-1 transition-transform">
                        Read More <ArrowRight size={14} />
                     </button>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- SIDEBAR TIP (Optional decoration) --- */}
      <div className="mt-12 p-10 rounded-[48px] bg-gradient-to-br from-[#062B5B] to-blue-900 text-white flex items-center justify-between relative overflow-hidden">
         <div className="relative z-10">
            <h4 className="text-2xl font-black mb-2 tracking-tight">Never miss an update!</h4>
            <p className="text-blue-200/60 text-sm font-medium">Enable browser notifications to get real-time alerts.</p>
            <button className="mt-6 px-6 py-3 bg-white text-[#062B5B] rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-black/20">Enable Now</button>
         </div>
         <Bell size={120} className="absolute -right-10 -bottom-10 text-white/5 rotate-12" />
      </div>
    </div>
  );
};

export default AnnouncementsPage;