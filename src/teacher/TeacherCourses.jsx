import React, { useState } from "react";
import { BookOpen, Plus, Search, Trash2, Edit2, Filter, MoreVertical, Globe, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TeacherCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Development Masterclass", category: "Web Development", students: 124, status: "Published" },
    { id: 2, title: "UI/UX Design Fundamentals", category: "Design", students: 86, status: "Draft" },
    { id: 3, title: "Advanced Node.js Patterns", category: "Backend", students: 45, status: "Published" }
  ]);

  const [search, setSearch] = useState("");
  const [newCourse, setNewCourse] = useState({ title: "", category: "" });

  const handleAdd = () => {
    if (!newCourse.title || !newCourse.category) return;
    const course = {
      id: Date.now(),
      ...newCourse,
      students: 0,
      status: "Draft"
    };
    setCourses([course, ...courses]);
    setNewCourse({ title: "", category: "" });
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this course?")) {
        setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            Course <span className="text-yellow-500">Library</span>
            <BookOpen size={22} className="text-slate-200" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Build and launch your educational content
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
           <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search your courses..."
                className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-xs font-bold focus:ring-2 focus:ring-yellow-400 outline-none w-48 md:w-64 transition-all"
                onChange={(e) => setSearch(e.target.value)}
              />
           </div>
           <button className="p-2 text-slate-400 hover:text-[#062B5B] hover:bg-slate-50 rounded-xl transition-all">
              <Filter size={18} />
           </button>
        </div>
      </div>

      {/* QUICK ADD SECTION */}
      <div className="bg-white border border-slate-100 rounded-[35px] p-6 md:p-8 shadow-sm">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <Plus size={14} className="text-yellow-500" /> Draft a New Course
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Course Title (e.g. Master Python)"
            className="bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          />
          <select
            className="bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none appearance-none text-slate-500"
            value={newCourse.category}
            onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
            <option value="Data Science">Data Science</option>
          </select>
          <button
            onClick={handleAdd}
            className="bg-yellow-400 hover:bg-yellow-500 text-[#062B5B] rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20"
          >
            Create Course
          </button>
        </div>
      </div>

      {/* COURSES TABLE/LIST */}
      <div className="bg-white border border-slate-100 rounded-[40px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">Course Details</th>
                <th className="p-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">Enrollment</th>
                <th className="p-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    key={course.id} 
                    className="group hover:bg-slate-50/30 transition-all"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-[#062B5B] shadow-sm group-hover:scale-110 transition-transform">
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <p className="font-[1000] text-[#062B5B] text-sm group-hover:text-yellow-600 transition-colors">
                            {course.title}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">
                            {course.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-slate-600">{course.students}</span>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">Students</span>
                      </div>
                    </td>
                    <td className="p-6">
                      {course.status === "Published" ? (
                        <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full border border-emerald-100">
                          <Globe size={10} />
                          <span className="text-[9px] font-black uppercase tracking-widest">Live</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-400 bg-slate-50 w-fit px-3 py-1 rounded-full border border-slate-100">
                          <Lock size={10} />
                          <span className="text-[9px] font-black uppercase tracking-widest">Draft</span>
                        </div>
                      )}
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(course.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-[#062B5B] hover:bg-slate-100 rounded-xl transition-all">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>

          {filteredCourses.length === 0 && (
            <div className="py-20 text-center">
              <div className="bg-slate-50 w-20 h-20 rounded-[30px] flex items-center justify-center mx-auto mb-4 text-slate-200">
                 <Search size={32} />
              </div>
              <h4 className="font-black text-[#062B5B]">No courses found</h4>
              <p className="text-xs font-bold text-slate-400 mt-1">Try adjusting your search or create a new one.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherCourses;