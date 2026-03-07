import React, { useState } from "react";
import { CheckCircle, XCircle, Search, BookOpen, User, Tag, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const coursesData = [
  {
    id: 1,
    title: "Advanced React",
    instructor: "Rahul Sharma",
    category: "Web Development",
    status: "Pending",
    time: "2h ago"
  },
  {
    id: 2,
    title: "UI/UX Masterclass",
    instructor: "Priya Verma",
    category: "Design",
    status: "Pending",
    time: "5h ago"
  },
  {
    id: 3,
    title: "Node.js Backend",
    instructor: "Amit Patel",
    category: "Programming",
    status: "Pending",
    time: "1d ago"
  }
];

const SubAdminCourseApproval = () => {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState(coursesData);

  const updateStatus = (id, newStatus) => {
    setCourses(prev =>
      prev.map((course) =>
        course.id === id ? { ...course, status: newStatus } : course
      )
    );
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight">
            Course <span className="text-yellow-500">Approvals</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Review submissions from your instructors
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative w-full lg:w-80">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
          <input
            type="text"
            placeholder="Search course or instructor..."
            className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-700 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/5 outline-none transition-all shadow-sm"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* --- TABLE / CARDS --- */}
      <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Course Details</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Instructor</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Review Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <motion.tr layout key={course.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-50 text-yellow-600 rounded-2xl shadow-sm">
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <p className="font-black text-sm text-[#062B5B]">{course.title}</p>
                          <p className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase mt-0.5">
                            <Clock size={10} /> Submitted {course.time}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 font-bold text-slate-600 text-sm flex items-center gap-2">
                       <User size={14} className="text-slate-300" /> {course.instructor}
                    </td>
                    <td className="p-6">
                       <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black text-slate-500 uppercase">
                         <Tag size={12} /> {course.category}
                       </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase border ${
                        course.status === "Approved" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                        course.status === "Rejected" ? "bg-red-50 text-red-600 border-red-100" :
                        "bg-yellow-50 text-yellow-600 border-yellow-100"
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex justify-end gap-2">
                        {course.status === "Pending" ? (
                          <>
                            <button onClick={() => updateStatus(course.id, "Approved")} className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                              <CheckCircle size={18} />
                            </button>
                            <button onClick={() => updateStatus(course.id, "Rejected")} className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm">
                              <XCircle size={18} />
                            </button>
                          </>
                        ) : (
                          <button onClick={() => updateStatus(course.id, "Pending")} className="text-[10px] font-black text-slate-300 uppercase hover:text-slate-500 underline underline-offset-4">Undo Decision</button>
                        )}
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
          {filteredCourses.map((course) => (
            <div key={course.id} className="p-5 bg-slate-50 rounded-[32px] border border-slate-100 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="p-2.5 bg-white rounded-xl text-yellow-500 shadow-sm h-fit">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="font-black text-sm text-[#062B5B] leading-tight">{course.title}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase italic tracking-tighter">By {course.instructor}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${
                   course.status === "Approved" ? "bg-emerald-100 text-emerald-700" :
                   course.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                }`}>
                  {course.status}
                </span>
              </div>

              {course.status === "Pending" && (
                <div className="flex gap-2 pt-2">
                  <button onClick={() => updateStatus(course.id, "Approved")} className="flex-1 py-3 bg-emerald-500 text-white rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase">
                    <CheckCircle size={16} /> Approve
                  </button>
                  <button onClick={() => updateStatus(course.id, "Rejected")} className="flex-1 py-3 bg-red-500 text-white rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase">
                    <XCircle size={16} /> Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SubAdminCourseApproval;