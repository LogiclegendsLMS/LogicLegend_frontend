import React, { useState } from "react";
import { 
  Video, Plus, Calendar, Clock, Link, 
  PlayCircle, Trash2, Users, History, 
  ExternalLink, Signal, MoreVertical
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TeacherLiveClasses = () => {
  const [liveSessions, setLiveSessions] = useState([
    { 
      id: 1, 
      title: "Advanced React Patterns", 
      course: "React Masterclass", 
      time: "10:30 AM", 
      date: "Today", 
      status: "Upcoming",
      link: "https://zoom.us/j/123456"
    },
    { 
      id: 2, 
      title: "User Psychology in UI", 
      course: "UI/UX Design", 
      time: "04:00 PM", 
      date: "Today", 
      status: "Upcoming",
      link: "https://meet.google.com/abc-defg"
    }
  ]);

  const [showScheduleForm, setShowScheduleForm] = useState(false);

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            Live <span className="text-yellow-500">Studio</span>
            <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-lg border border-red-100">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
               <span className="text-[9px] font-black text-red-500 uppercase tracking-tighter">Ready</span>
            </div>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Broadcast your knowledge to the world
          </p>
        </div>
        
        <button 
          onClick={() => setShowScheduleForm(!showScheduleForm)}
          className="bg-[#062B5B] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg flex items-center gap-2"
        >
          {showScheduleForm ? "Close Panel" : "Schedule Live Class"}
        </button>
      </div>

      {/* SCHEDULE FORM (TOGGLEABLE) */}
      <AnimatePresence>
        {showScheduleForm && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-8 rounded-[40px] border border-yellow-200 shadow-xl shadow-yellow-400/5 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Session Title</label>
              <input type="text" placeholder="e.g. Q&A Session on Redux" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Platform Link</label>
              <input type="text" placeholder="Zoom/Meet Link" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Start Time</label>
              <input type="time" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none" />
            </div>
            <div className="md:col-span-4 flex justify-end">
               <button className="bg-yellow-400 text-[#062B5B] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-500 shadow-lg shadow-yellow-400/20">Go Live Schedule</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: UPCOMING SESSIONS LIST */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] flex items-center gap-2 mb-6">
            <Clock size={16} className="text-yellow-500" /> Today's Lineup
          </h3>
          
          {liveSessions.map((session) => (
            <div key={session.id} className="bg-white p-6 rounded-[35px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-slate-50 rounded-[20px] flex flex-col items-center justify-center border border-slate-100 group-hover:bg-[#062B5B] group-hover:text-white transition-all">
                    <span className="text-[10px] font-black uppercase opacity-60">Time</span>
                    <span className="text-xs font-[1000]">{session.time}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-[1000] text-[#062B5B] leading-tight">{session.title}</h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">{session.course}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="flex-1 md:flex-none px-6 py-3 bg-white border border-slate-200 text-[#062B5B] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <Link size={14} /> Copy Link
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-3 bg-[#062B5B] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 transition-all shadow-lg flex items-center justify-center gap-2">
                    <PlayCircle size={16} /> Start Class
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: RECORDINGS & STATS */}
        <div className="space-y-6">
          <div className="bg-[#062B5B] p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden">
             <History size={80} className="absolute -right-4 -bottom-4 text-white/5 rotate-12" />
             <h3 className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.2em] mb-4">Past Recordings</h3>
             <p className="text-sm font-bold text-white/80 leading-relaxed mb-6">Your last session on "React Hooks" was watched by 124 students.</p>
             <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10">
               Browse Library
             </button>
          </div>

          <div className="bg-white p-6 rounded-[35px] border border-slate-100 shadow-sm">
             <h4 className="text-[10px] font-black text-[#062B5B] uppercase tracking-widest mb-6 flex items-center gap-2">
               <Signal size={14} className="text-emerald-500" /> Network Health
             </h4>
             <div className="space-y-4">
               <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                   <span className="text-xs font-bold text-slate-500">Video Server</span>
                 </div>
                 <span className="text-[10px] font-black text-emerald-600">OPTIMAL</span>
               </div>
               <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                   <span className="text-xs font-bold text-slate-500">Audio Stream</span>
                 </div>
                 <span className="text-[10px] font-black text-emerald-600">98ms Latency</span>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherLiveClasses;