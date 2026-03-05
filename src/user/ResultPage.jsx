import React from "react";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Award, 
  Download, 
  ChevronRight,
  Star,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const ResultPage = () => {
  const subjectResults = [
    { subject: "React JS", score: 92, grade: "A+", status: "Passed", color: "bg-blue-500" },
    { subject: "Node.js", score: 78, grade: "B", status: "Passed", color: "bg-purple-500" },
    { subject: "UI/UX Design", score: 95, grade: "O", status: "Excellent", color: "bg-yellow-500" },
    { subject: "MongoDB", score: 88, grade: "A", status: "Passed", color: "bg-emerald-500" },
  ];

  return (
    <div className="ml-0  p-6 md:p-10 bg-[#FDFDFD] min-h-screen">
      
      {/* --- TOP HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">
            Performance <span className="text-yellow-500">Analytics</span>
          </h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
            Detailed breakdown of your academic journey
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#062B5B] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-100 hover:scale-105 transition-all">
          <Download size={16} /> Download Transcript
        </button>
      </div>

      {/* --- OVERALL STATS CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-6">
           <div className="w-16 h-16 rounded-[24px] bg-yellow-50 text-yellow-500 flex items-center justify-center shadow-inner">
              <Star size={32} fill="currentColor" />
           </div>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current GPA</p>
              <h3 className="text-3xl font-[1000] text-slate-900">8.92 / 10</h3>
           </div>
        </div>
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-6">
           <div className="w-16 h-16 rounded-[24px] bg-blue-50 text-blue-500 flex items-center justify-center shadow-inner">
              <Target size={32} />
           </div>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Attendance</p>
              <h3 className="text-3xl font-[1000] text-slate-900">94.5%</h3>
           </div>
        </div>
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-6">
           <div className="w-16 h-16 rounded-[24px] bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-inner">
              <Zap size={32} fill="currentColor" />
           </div>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Skill Rank</p>
              <h3 className="text-3xl font-[1000] text-slate-900">Top 2%</h3>
           </div>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left: Detailed Scores */}
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-xl font-black text-slate-900 ml-2">Subject Breakdown</h3>
           {subjectResults.map((res, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               key={i} 
               className="bg-white p-6 rounded-[32px] border border-slate-100 flex items-center justify-between group hover:border-yellow-200 transition-all shadow-sm"
             >
                <div className="flex items-center gap-5">
                   <div className={`w-12 h-12 rounded-2xl ${res.color} text-white flex items-center justify-center font-black shadow-lg shadow-blue-900/10`}>
                      {res.grade}
                   </div>
                   <div>
                      <h4 className="font-black text-slate-800 tracking-tight">{res.subject}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{res.status}</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-10">
                   <div className="hidden md:block">
                      <p className="text-[10px] font-black text-slate-300 uppercase mb-1">Score</p>
                      <div className="w-32 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                         <div className={`h-full ${res.color}`} style={{ width: `${res.score}%` }} />
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-lg font-[1000] text-slate-900">{res.score}%</p>
                      <button className="text-[9px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1 hover:underline">
                         Review <ChevronRight size={10} />
                      </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Right: Achievement Sidebar */}
        <div className="space-y-8">
           <div className="bg-[#062B5B] p-8 rounded-[48px] text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                    <Award size={24} className="text-yellow-400" />
                 </div>
                 <h4 className="text-xl font-black leading-tight mb-2">Academic <br/> Excellence Award</h4>
                 <p className="text-blue-200/60 text-xs font-medium leading-relaxed mb-6">Congratulations! You've maintained a 8.5+ GPA for 3 consecutive months.</p>
                 <button className="w-full py-3 bg-yellow-400 text-[#062B5B] rounded-xl font-black text-[10px] uppercase tracking-widest">Claim Badge</button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
           </div>

           <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h4 className="text-sm font-[1000] text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <TrendingUp size={16} className="text-emerald-500" /> Improvement Area
              </h4>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                       <span className="text-slate-400">Logic Building</span>
                       <span className="text-red-500">+15% Required</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                       <div className="w-[65%] h-full bg-slate-200" />
                    </div>
                 </div>
                 <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic">
                    "Bhai, focus on Data Structures next week to improve your logic score!"
                 </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ResultPage;