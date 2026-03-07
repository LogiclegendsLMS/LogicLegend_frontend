import React, { useState } from "react";
import { Plus, Search, Mail, Phone, BookOpen, MoreVertical, Edit2, Trash2, UserPlus, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const teachersData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    courses: 3,
    status: "Active",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@example.com",
    phone: "9876543211",
    courses: 2,
    status: "Active",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@example.com",
    phone: "9876543212",
    courses: 1,
    status: "Inactive",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
  },
];

const SubAdminTeachers = () => {
  const [search, setSearch] = useState("");

  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase()) ||
    teacher.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight">
            Teachers <span className="text-yellow-500">Directory</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Manage your faculty and instructors
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-[#062B5B] hover:text-white px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-yellow-400/10 active:scale-95">
          <UserPlus size={18} />
          Add New Teacher
        </button>
      </div>

      {/* --- SEARCH & FILTERS --- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-700 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/5 outline-none transition-all shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-100 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:text-[#062B5B] hover:border-yellow-400 transition-all">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* --- TABLE / CARDS CONTAINER --- */}
      <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Instructor</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Contact Info</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Courses</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredTeachers.map((teacher) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={teacher.id} 
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <img src={teacher.img} className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200" alt="avatar" />
                        <div>
                          <p className="font-black text-sm text-[#062B5B]">{teacher.name}</p>
                          <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-tighter">Verified Instructor</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                          <Mail size={14} className="text-slate-300" /> {teacher.email}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                          <Phone size={14} className="text-slate-300" /> {teacher.phone}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-black">
                        <BookOpen size={14} /> {teacher.courses}
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                        teacher.status === "Active" 
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                        : "bg-red-50 text-red-600 border-red-100"
                      }`}>
                        {teacher.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-yellow-400 hover:text-[#062B5B] transition-all">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2.5 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW (Card Layout) */}
        <div className="md:hidden p-4 space-y-4">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="bg-slate-50 rounded-[32px] p-5 border border-slate-100 space-y-4">
              <div className="flex items-center gap-4">
                <img src={teacher.img} className="w-14 h-14 rounded-2xl bg-white border border-slate-200" alt="avatar" />
                <div className="flex-1">
                  <p className="font-black text-sm text-[#062B5B]">{teacher.name}</p>
                  <span className={`inline-block mt-1 px-3 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-tighter ${
                    teacher.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                  }`}>
                    {teacher.status}
                  </span>
                </div>
                <button className="p-2 text-slate-300"><MoreVertical size={20}/></button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                 <div className="p-3 bg-white rounded-2xl border border-slate-100 flex flex-col items-center">
                    <BookOpen size={14} className="text-blue-500 mb-1" />
                    <p className="text-[10px] font-black text-slate-800">{teacher.courses} Courses</p>
                 </div>
                 <div className="p-3 bg-white rounded-2xl border border-slate-100 flex flex-col items-center overflow-hidden">
                    <Phone size={14} className="text-yellow-500 mb-1" />
                    <p className="text-[10px] font-black text-slate-800 truncate w-full text-center">{teacher.phone}</p>
                 </div>
              </div>

              <div className="flex gap-2">
                 <button className="flex-1 py-3 bg-[#062B5B] text-white rounded-xl font-black text-[10px] uppercase tracking-widest">
                    Contact Info
                 </button>
                 <button className="p-3 bg-red-50 text-red-500 rounded-xl">
                    <Trash2 size={16} />
                 </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default SubAdminTeachers;