import React, { useState } from "react";
import { 
  Bell, Megaphone, Send, Trash2, 
  Users, Layers, Clock, Search,
  AlertCircle, Pin, MoreVertical
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TeacherAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([
    { 
      id: 1, 
      title: "React Workshop Postponed", 
      message: "The workshop scheduled for tomorrow is moved to Sunday due to server maintenance.", 
      target: "React Development", 
      date: "2 hours ago",
      type: "Urgent",
      isPinned: true
    },
    { 
      id: 2, 
      title: "New Assignment Released", 
      message: "Check your dashboard for the UI/UX Case Study. Submission link is active.", 
      target: "UI/UX Design", 
      date: "Yesterday",
      type: "Update",
      isPinned: false
    }
  ]);

  const [newMsg, setNewMsg] = useState({ title: "", message: "", target: "All Students" });

  const handlePost = () => {
    if (!newMsg.title || !newMsg.message) return;
    const post = {
      id: Date.now(),
      ...newMsg,
      date: "Just now",
      type: "Update",
      isPinned: false
    };
    setAnnouncements([post, ...announcements]);
    setNewMsg({ title: "", message: "", target: "All Students" });
  };

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            Broadcast <span className="text-yellow-500">Center</span>
            <Megaphone size={22} className="text-slate-200" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Notify your students about important updates
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
           <Bell size={18} className="text-yellow-500 animate-bounce" />
           <span className="text-[10px] font-black text-[#062B5B] uppercase tracking-widest">Active Alerts: {announcements.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: COMPOSER (CREATE ANNOUNCEMENT) */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm sticky top-8">
            <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Send size={16} className="text-yellow-500" /> Compose Message
            </h3>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title</label>
                <input 
                  type="text" 
                  placeholder="Subject of announcement" 
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none"
                  value={newMsg.title}
                  onChange={(e) => setNewMsg({...newMsg, title: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Audience</label>
                <select 
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none text-slate-500"
                  value={newMsg.target}
                  onChange={(e) => setNewMsg({...newMsg, target: e.target.value})}
                >
                  <option>All Students</option>
                  <option>React Development</option>
                  <option>UI/UX Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Write your message here..." 
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
                  value={newMsg.message}
                  onChange={(e) => setNewMsg({...newMsg, message: e.target.value})}
                />
              </div>

              <button 
                onClick={handlePost}
                className="w-full bg-[#062B5B] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Post Announcement
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: ANNOUNCEMENT FEED */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Recent Broadcasts</h3>
              <div className="relative">
                 <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" />
                 <input type="text" placeholder="Search history..." className="pl-9 pr-4 py-2 bg-transparent border-b border-slate-200 text-xs focus:border-yellow-400 outline-none font-bold" />
              </div>
           </div>

           <AnimatePresence>
             {announcements.map((item) => (
               <motion.div 
                 layout
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 key={item.id} 
                 className={`bg-white p-6 rounded-[35px] border ${item.isPinned ? 'border-yellow-200 shadow-md shadow-yellow-400/5' : 'border-slate-50'} relative group`}
               >
                 {item.isPinned && <Pin size={14} className="absolute top-6 right-6 text-yellow-500 fill-yellow-500" />}
                 
                 <div className="flex items-start gap-5">
                   <div className={`p-4 rounded-2xl ${item.type === 'Urgent' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                     {item.type === 'Urgent' ? <AlertCircle size={20} /> : <Layers size={20} />}
                   </div>
                   
                   <div className="flex-1 space-y-2">
                     <div className="flex items-center gap-3">
                       <h4 className="text-lg font-[1000] text-[#062B5B] leading-none">{item.title}</h4>
                       <span className="text-[9px] font-black bg-slate-100 text-slate-400 px-2 py-0.5 rounded-md uppercase tracking-widest">{item.target}</span>
                     </div>
                     <p className="text-sm font-bold text-slate-500 leading-relaxed">{item.message}</p>
                     
                     <div className="pt-4 flex items-center justify-between border-t border-slate-50 mt-4">
                        <div className="flex items-center gap-4 text-slate-300">
                           <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter">
                              <Clock size={12} /> {item.date}
                           </div>
                           <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter">
                              <Users size={12} /> Seen by 84
                           </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button onClick={() => setAnnouncements(announcements.filter(a => a.id !== item.id))} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-all">
                              <Trash2 size={16} />
                           </button>
                           <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-all">
                              <MoreVertical size={16} />
                           </button>
                        </div>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>

           {announcements.length === 0 && (
             <div className="text-center py-20 bg-slate-50 rounded-[40px] border border-dashed border-slate-200">
                <Megaphone size={40} className="mx-auto text-slate-200 mb-4" />
                <p className="text-slate-400 font-bold text-sm">No announcements yet. Start the conversation!</p>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default TeacherAnnouncements;