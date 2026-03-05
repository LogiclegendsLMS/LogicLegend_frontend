import React, { useState } from "react";
import { 
  Bell, 
  MailOpen, 
  MessageSquare, 
  Trash2, 
  CheckCheck, 
  User, 
  Circle,
  Clock,
  Search,
  MoreHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      sender: "John Doe (Instructor)",
      message: "Bhai, aapka assignment 'React Hooks' bohot sahi tha, lekin useEffect wala part thoda aur deep study karo. Maine feedback attach kiya hai.",
      time: "2 mins ago",
      isRead: false,
      type: "message",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    },
    {
      id: 2,
      sender: "Eduvion System",
      message: "Congratulations! You have successfully completed the 'Node.js Mastery' course and earned a Gold Badge.",
      time: "1 hour ago",
      isRead: false,
      type: "alert",
      avatar: null
    },
    {
      id: 3,
      sender: "Jane Smith (Instructor)",
      message: "Today's Live Class on 'Backend Architecture' has been rescheduled to 8:00 PM IST.",
      time: "5 hours ago",
      isRead: true,
      type: "message",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="ml-0 p-6 md:p-10 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">
            Notifications <span className="text-yellow-500">& Messages</span>
          </h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
            Stay updated with instructor feedback and system alerts
          </p>
        </div>
        <button 
          onClick={() => setNotifications(notifications.map(n => ({ ...n, isRead: true })))}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-[#062B5B] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-all"
        >
          <CheckCheck size={16} /> Mark all as read
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* --- TABS & FILTERS --- */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
           <div className="flex gap-8">
              {["all", "messages", "alerts"].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-4 text-[11px] font-[1000] uppercase tracking-widest transition-all ${
                    activeTab === tab ? "text-[#062B5B]" : "text-slate-300 hover:text-slate-500"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-full" />
                  )}
                </button>
              ))}
           </div>
           <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
              <input type="text" placeholder="Search notifications..." className="pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-xs font-bold outline-none border border-transparent focus:border-slate-200 w-64" />
           </div>
        </div>

        {/* --- NOTIFICATION LIST --- */}
        <div className="space-y-3">
          <AnimatePresence>
            {notifications
              .filter(n => activeTab === "all" || (activeTab === "messages" ? n.type === "message" : n.type === "alert"))
              .map((note) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`group relative flex items-start gap-5 p-6 rounded-[32px] border transition-all cursor-pointer ${
                    note.isRead ? 'bg-white border-slate-50 opacity-70' : 'bg-white border-blue-100 shadow-md shadow-blue-900/5'
                  }`}
                >
                  {/* Status Indicator */}
                  {!note.isRead && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                       <Circle size={8} className="fill-blue-500 text-blue-500" />
                    </div>
                  )}

                  {/* Avatar / Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm ${note.avatar ? 'bg-yellow-100' : 'bg-blue-50 text-blue-500'}`}>
                    {note.avatar ? (
                      <img src={note.avatar} alt="Sender" className="w-full h-full object-cover" />
                    ) : (
                      <Bell size={24} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1" onClick={() => markAsRead(note.id)}>
                    <div className="flex justify-between items-start mb-1">
                       <h4 className={`text-sm tracking-tight ${note.isRead ? 'font-bold text-slate-500' : 'font-black text-slate-900'}`}>
                          {note.sender}
                       </h4>
                       <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                          <Clock size={12} /> {note.time}
                       </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${note.isRead ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                       {note.message}
                    </p>
                    
                    {!note.isRead && note.type === 'message' && (
                       <div className="mt-4 flex gap-3">
                          <button className="px-4 py-1.5 bg-[#062B5B] text-white rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all">Reply</button>
                          <button className="px-4 py-1.5 bg-slate-50 text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-slate-100">Ignore</button>
                       </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                     <button onClick={() => deleteNotification(note.id)} className="p-2 hover:bg-red-50 text-red-400 rounded-xl transition-all">
                        <Trash2 size={16} />
                     </button>
                     <button className="p-2 hover:bg-slate-50 text-slate-400 rounded-xl">
                        <MoreHorizontal size={16} />
                     </button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          {notifications.length === 0 && (
            <div className="text-center py-20">
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MailOpen className="text-slate-200" size={40} />
               </div>
               <p className="text-slate-400 font-bold text-sm">Inbox zero! Sab updates clear hain bhai.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;           