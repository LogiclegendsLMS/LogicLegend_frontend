import React, { useState } from "react";
import { 
  Users, Search, Filter, Mail, MoreHorizontal, 
  GraduationCap, CheckCircle, Clock, Ban,
  ChevronLeft, ChevronRight, MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TeacherStudents = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", email: "aarav@example.com", course: "React Dev", progress: 85, status: "Active", joined: "12 Feb 2024", avatar: "AS" },
    { id: 2, name: "Ishani Verma", email: "ishani@example.com", course: "UI/UX Design", progress: 42, status: "Active", joined: "01 Mar 2024", avatar: "IV" },
    { id: 3, name: "Rohan Gupta", email: "rohan@example.com", course: "Node.js Mastery", progress: 100, status: "Completed", joined: "15 Jan 2024", avatar: "RG" },
    { id: 4, name: "Sanya Malhotra", email: "sanya@example.com", course: "React Dev", progress: 12, status: "On Break", joined: "05 Mar 2024", avatar: "SM" },
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            Student <span className="text-yellow-500">Community</span>
            <Users size={22} className="text-slate-200" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Monitor engagement and academic performance
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by name or course..."
              className="w-full bg-white border border-slate-100 rounded-2xl pl-12 pr-4 py-3 text-sm font-bold shadow-sm focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="bg-white border border-slate-100 p-3 rounded-2xl text-slate-400 hover:text-[#062B5B] shadow-sm transition-all">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* QUICK STATS FOR STUDENTS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Active Learners", value: "284", icon: <Users />, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Completion Rate", value: "82%", icon: <CheckCircle />, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Avg. Engagement", value: "4.8/5", icon: <Clock />, color: "text-purple-600", bg: "bg-purple-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[35px] border border-slate-50 shadow-sm flex items-center gap-5">
            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
              {React.cloneElement(stat.icon, { size: 20 })}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-xl font-[1000] text-[#062B5B] mt-0.5">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* STUDENTS TABLE */}
      <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-50">
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Student Identity</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Enrolled Course</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Learning Progress</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredStudents.map((student) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={student.id} 
                    className="group hover:bg-slate-50/50 transition-all"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#062B5B] text-yellow-400 flex items-center justify-center font-black text-xs shadow-lg group-hover:scale-110 transition-transform">
                          {student.avatar}
                        </div>
                        <div>
                          <p className="font-black text-sm text-[#062B5B]">{student.name}</p>
                          <p className="text-[11px] font-bold text-slate-400 flex items-center gap-1 mt-0.5">
                            <Mail size={10} /> {student.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-slate-300" />
                        <span className="text-sm font-bold text-slate-600">{student.course}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="w-full max-w-[120px]">
                        <div className="flex justify-between text-[10px] font-black text-[#062B5B] mb-1.5">
                          <span>{student.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${student.progress}%` }}
                            className={`h-full rounded-full ${student.progress === 100 ? 'bg-emerald-500' : 'bg-yellow-400'}`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-sm font-bold">
                      <span className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                        student.status === "Active" ? "bg-emerald-50 text-emerald-600" :
                        student.status === "Completed" ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all shadow-sm">
                          <MessageSquare size={16} />
                        </button>
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all shadow-sm">
                          <Ban size={16} />
                        </button>
                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-[#062B5B] hover:bg-slate-100 rounded-xl transition-all">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="p-6 bg-slate-50/30 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-xs font-bold text-slate-400">
             Showing <span className="text-[#062B5B]">1-4</span> of <span className="text-[#062B5B]">284</span> Learners
           </p>
           <div className="flex items-center gap-2">
             <button className="p-2 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-[#062B5B] disabled:opacity-50" disabled>
               <ChevronLeft size={18} />
             </button>
             {[1, 2, 3].map(p => (
               <button key={p} className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${p === 1 ? 'bg-[#062B5B] text-white shadow-lg shadow-[#062B5B]/20' : 'bg-white border border-slate-100 text-slate-400 hover:bg-slate-50'}`}>
                 {p}
               </button>
             ))}
             <button className="p-2 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-[#062B5B]">
               <ChevronRight size={18} />
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherStudents;