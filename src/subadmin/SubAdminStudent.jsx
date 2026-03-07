import React, { useState } from "react";
import { Search, Eye, Trash2, Filter, Mail, User, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const studentsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    course: "React Development",
    status: "Active",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@gmail.com",
    course: "UI/UX Design",
    status: "Active",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@gmail.com",
    course: "Node.js Backend",
    status: "Inactive",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
  }
];

const SubAdminStudent = () => {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight">
            Student <span className="text-yellow-500">Database</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            {filteredStudents.length} Students Enrolled
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* SEARCH BAR */}
          <div className="relative flex-1 sm:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full bg-white border border-slate-100 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-slate-700 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/5 outline-none transition-all shadow-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* FILTER BUTTON */}
          <button className="flex items-center justify-center gap-2 px-5 py-3 bg-[#062B5B] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* --- TABLE / CARD VIEW --- */}
      <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
        
        {/* DESKTOP TABLE VIEW (Visible on tablet & laptop) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="text-left p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Student Profile</th>
                <th className="text-left p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Enrolled Course</th>
                <th className="text-left p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="text-center p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
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
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <img src={student.img} className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm" alt="u" />
                        <div>
                          <p className="font-black text-sm text-[#062B5B]">{student.name}</p>
                          <p className="text-xs font-bold text-slate-400 italic">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <BookOpen size={16} className="text-yellow-500" />
                        <span className="text-xs font-black uppercase tracking-tight">{student.course}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                        student.status === "Active" 
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                        : "bg-red-50 text-red-600 border-red-100"
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex justify-center gap-2">
                        <button className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                          <Eye size={18} />
                        </button>
                        <button className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* MOBILE CARD VIEW (Visible on phones) */}
        <div className="md:hidden p-4 space-y-4">
          {filteredStudents.map((student) => (
            <div key={student.id} className="p-5 bg-slate-50 rounded-[32px] border border-slate-100 space-y-4">
              <div className="flex items-center gap-4">
                <img src={student.img} className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm" alt="u" />
                <div className="flex-1 overflow-hidden">
                  <p className="font-black text-sm text-[#062B5B] truncate">{student.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter truncate">{student.email}</p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${
                  student.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                }`}>
                  {student.status}
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-slate-100">
                <BookOpen size={14} className="text-yellow-500" />
                <span className="text-[10px] font-black text-slate-600 uppercase truncate">{student.course}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 py-3 bg-[#062B5B] text-white rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase">
                  <Eye size={16} /> View Profile
                </button>
                <button className="p-3 bg-red-50 text-red-500 rounded-xl">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredStudents.length === 0 && (
          <div className="p-20 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-slate-200" />
            </div>
            <p className="text-slate-400 font-bold text-sm uppercase">No students found</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default SubAdminStudent;