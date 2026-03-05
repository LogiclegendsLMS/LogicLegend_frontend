import React, { useState } from "react";
import { 
  Send, Users, MessageCircle, FileText, 
  Settings, Maximize, MicOff, VideoOff, 
  Hand, Share2, LogOut 
} from "lucide-react";
import { motion } from "framer-motion";

const LiveClassesPage = () => {
  const [message, setMessage] = useState("");

  const chatMessages = [
    { user: "Aryan", text: "Sir, can you explain the Hook dependencies again?", time: "7:12 PM", color: "text-blue-500" },
    { user: "Sneha", text: "Got it! Thanks.", time: "7:15 PM", color: "text-pink-500" },
    { user: "Instructor", text: "Sure Aryan, let's look at the dependency array.", time: "7:16 PM", color: "text-yellow-600 font-black" },
  ];

  return (
    <div className=" h-screen bg-[#F8FAFC] flex flex-col overflow-hidden">
      
      {/* --- TOP HEADER --- */}
      <header className="px-8 py-4 bg-white border-b border-gray-100 flex justify-between items-center z-20">
        <div className="flex items-center gap-4">
           <div className="px-3 py-1 bg-red-500 text-white rounded-lg text-[10px] font-black uppercase tracking-widest animate-pulse">Live</div>
           <div>
              <h1 className="text-lg font-[1000] text-slate-900 leading-none">React Hooks Deep Dive</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Instructor: John Doe • 124 Students Watching</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs font-black text-slate-600 transition-all">
              <Share2 size={16} /> Share
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 rounded-xl text-xs font-black text-red-500 transition-all border border-red-100">
              <LogOut size={16} /> Leave
           </button>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: VIDEO PLAYER */}
        <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
          <div className="relative aspect-video bg-slate-900 rounded-[40px] shadow-2xl overflow-hidden group border-[6px] border-white">
             {/* Replace this with actual Video Player or Iframe */}
             <img 
               src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200" 
               alt="Lecture Content" 
               className="w-full h-full object-cover opacity-80"
             />
             
             {/* Overlay Controls */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="flex justify-between items-center">
                   <div className="flex gap-4">
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40"><MicOff size={20}/></button>
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40"><VideoOff size={20}/></button>
                      <button className="p-3 bg-yellow-400 rounded-full text-[#062B5B] hover:scale-110 transition-transform"><Hand size={20} fill="currentColor"/></button>
                   </div>
                   <div className="flex gap-4">
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white"><Settings size={20}/></button>
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white"><Maximize size={20}/></button>
                   </div>
                </div>
             </div>
          </div>

          {/* Lecture Resources & Notes */}
          <div className="grid grid-cols-2 gap-6 pb-10">
             <div className="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><FileText size={24}/></div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase">Resource</p>
                      <p className="text-sm font-black text-slate-800">React_Hooks_Cheatsheet.pdf</p>
                   </div>
                </div>
                <button className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all"><Settings size={16}/></button>
             </div>
             <div className="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600"><Users size={24}/></div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase">Collaboration</p>
                      <p className="text-sm font-black text-slate-800">Join Student Group</p>
                   </div>
                </div>
                <button className="p-2 bg-slate-50 rounded-lg group-hover:bg-yellow-400 group-hover:text-[#062B5B] transition-all"></button>
             </div>
          </div>
        </div>

        {/* RIGHT: LIVE CHAT SIDEBAR */}
        <aside className="w-96 bg-white border-l border-gray-100 flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
             <MessageCircle size={20} className="text-[#062B5B]" />
             <h2 className="text-sm font-[1000] text-slate-900 uppercase tracking-widest">Live Chat</h2>
          </div>

          <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
             {chatMessages.map((msg, i) => (
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key={i} className="space-y-1">
                  <div className="flex justify-between items-center">
                     <span className={`text-[10px] font-black uppercase tracking-tight ${msg.color}`}>{msg.user}</span>
                     <span className="text-[9px] font-bold text-slate-300">{msg.time}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl rounded-tl-none text-xs font-bold text-slate-600 leading-relaxed">
                     {msg.text}
                  </div>
               </motion.div>
             ))}
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-slate-50/50 border-t border-gray-100">
             <div className="relative">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask a question..." 
                  className="w-full py-4 pl-5 pr-14 bg-white border border-gray-200 rounded-2xl text-xs font-bold focus:border-yellow-400 outline-none transition-all shadow-sm"
                />
                <button className="absolute right-2 top-2 w-10 h-10 bg-[#062B5B] text-white rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-[#062B5B] transition-all">
                   <Send size={16} />
                </button>
             </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default LiveClassesPage;