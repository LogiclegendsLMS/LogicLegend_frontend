import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Trash2, Edit, X, Filter, BookOpen, IndianRupee } from "lucide-react";

const Courses = () => {
  /* ================= STATE ================= */
  const [courses, setCourses] = useState([
    { id: 1, title: "React Mastery Pro", category: "Development", price: 4999, status: "Active" },
    { id: 2, title: "UI/UX Design Masterclass", category: "Design", price: 3999, status: "Active" },
    { id: 3, title: "Digital Marketing 2024", category: "Marketing", price: 2499, status: "Inactive" },
  ]);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  const [form, setForm] = useState({ title: "", category: "Development", price: "", status: "Active" });

  /* ================= LOGIC ================= */
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price) return;

    if (editCourse) {
      setCourses(courses.map((c) => (c.id === editCourse.id ? { ...form, id: editCourse.id } : c)));
    } else {
      setCourses([{ ...form, id: Date.now() }, ...courses]);
    }
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    setEditCourse(null);
    setForm({ title: "", category: "Development", price: "", status: "Active" });
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setForm(course);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bhai, delete kar dein?")) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setCourses(courses.map(c => 
      c.id === id ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" } : c
    ));
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = filterCategory === "All" || c.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [courses, search, filterCategory]);

  return (
    <div className="p-4 md:p-6 bg-[#F8FAFC] min-h-screen font-sans text-slate-900">
      
      {/* ================= HEADER SECTION (Sized Down) ================= */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-[1000] text-[#0F2F57] tracking-tighter uppercase leading-none">
              Course <span className="text-[#F4B400]">Manager</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.2em] mt-1">
              Academic Control Panel
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setEditCourse(null); setShowModal(true); }}
            className="bg-[#0F2F57] text-[#F4B400] px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-black transition-all"
          >
            <Plus size={14} strokeWidth={3} /> New Course
          </motion.button>
        </div>

        {/* ================= FILTER & SEARCH (Compact) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          <div className="md:col-span-3 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-[13px] font-bold shadow-sm focus:border-[#F4B400] outline-none transition-all"
            />
          </div>

          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-[10px] font-black uppercase tracking-widest text-[#0F2F57] shadow-sm outline-none cursor-pointer appearance-none focus:border-[#F4B400]"
            >
              <option value="All">All Categories</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
            <Filter size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
          </div>
        </div>

        {/* ================= DATA TABLE (Compressed) ================= */}
        <div className="bg-white rounded-[25px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Course Details</th>
                  <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                  <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Pricing</th>
                  <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <AnimatePresence mode="popLayout">
                  {filteredCourses.length > 0 ? filteredCourses.map((course) => (
                    <motion.tr
                      key={course.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group hover:bg-slate-50/30 transition-colors"
                    >
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[#0F2F57]">
                            <BookOpen size={18} />
                          </div>
                          <div>
                            <p className="font-black text-[#0F2F57] text-[13px] tracking-tight">{course.title}</p>
                            <p className="text-[9px] text-slate-400 font-bold uppercase italic mt-0.5">ID: {course.id.toString().slice(-4)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                          {course.category}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center font-black text-[#0F2F57] text-sm">
                          <IndianRupee size={12} className="mr-0.5" /> {course.price}
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <button 
                          onClick={() => toggleStatus(course.id)}
                          className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter transition-all ${
                          course.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                        }`}>
                          {course.status}
                        </button>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => handleEdit(course)} className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:text-[#F4B400] transition-all">
                            <Edit size={14} />
                          </button>
                          <button onClick={() => handleDelete(course.id)} className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:text-rose-500 transition-all">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  )) : (
                    <tr>
                      <td colSpan="5" className="p-12 text-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">No courses found.</td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= MODAL (Slim Version) ================= */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-[#0F2F57]/20">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[25px] w-full max-w-sm p-8 shadow-2xl relative"
            >
              <button onClick={closeModal} className="absolute right-5 top-5 p-1.5 hover:bg-slate-100 rounded-full transition-colors text-slate-300">
                <X size={18} strokeWidth={3} />
              </button>

              <h2 className="text-xl font-[1000] text-[#0F2F57] mb-6 tracking-tighter uppercase">
                {editCourse ? "Edit" : "New"} <span className="text-[#F4B400]">Course</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:border-[#F4B400]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Category</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-3 text-[10px] font-black uppercase outline-none"
                    >
                      <option value="Development">Dev</option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Price</label>
                    <input
                      type="number"
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm font-black outline-none"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#0F2F57] text-[#F4B400] py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg mt-2">
                  {editCourse ? "Update Course" : "Create Course"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;