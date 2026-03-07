import React, { useState } from "react";
import { 
  ClipboardList, Plus, FileText, Calendar, 
  Users, CheckCircle, Clock, Trash2, 
  ExternalLink, Download, AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TeacherAssignments = () => {
  const [assignments, setAssignments] = useState([
    { 
      id: 1, 
      title: "React Hooks Deep Dive", 
      course: "React Development", 
      dueDate: "2026-03-15", 
      submissions: 45, 
      totalStudents: 120,
      status: "Active"
    },
    { 
      id: 2, 
      title: "UI/UX Case Study", 
      course: "Design Mastery", 
      dueDate: "2026-03-10", 
      submissions: 80, 
      totalStudents: 80,
      status: "Closed"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAssign, setNewAssign] = useState({ title: "", course: "", dueDate: "" });

  const handleCreate = () => {
    if (!newAssign.title || !newAssign.course) return;
    const entry = {
      id: Date.now(),
      ...newAssign,
      submissions: 0,
      totalStudents: 100,
      status: "Active"
    };
    setAssignments([entry, ...assignments]);
    setNewAssign({ title: "", course: "", dueDate: "" });
    setShowAddForm(false);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            Academic <span className="text-yellow-500">Tasks</span>
            <ClipboardList size={22} className="text-slate-200" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Create, manage and grade student submissions
          </p>
        </div>
        
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#062B5B] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg flex items-center gap-2"
        >
          {showAddForm ? <AlertCircle size={16} /> : <Plus size={16} />}
          {showAddForm ? "Cancel" : "Create Assignment"}
        </button>
      </div>

      <AnimatePresence>
        {showAddForm && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white p-6 rounded-[35px] border border-yellow-200 shadow-xl shadow-yellow-400/5 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Task Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Redux Toolkit"
                  className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none"
                  value={newAssign.title}
                  onChange={(e) => setNewAssign({...newAssign, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Course</label>
                <select 
                  className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none text-slate-500"
                  value={newAssign.course}
                  onChange={(e) => setNewAssign({...newAssign, course: e.target.value})}
                >
                  <option value="">Choose...</option>
                  <option value="React Development">React Development</option>
                  <option value="Design Mastery">Design Mastery</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Deadline</label>
                <input 
                  type="date" 
                  className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none text-slate-500"
                  value={newAssign.dueDate}
                  onChange={(e) => setNewAssign({...newAssign, dueDate: e.target.value})}
                />
              </div>
              <button 
                onClick={handleCreate}
                className="w-full bg-yellow-400 text-[#062B5B] py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-md"
              >
                Publish Task
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ASSIGNMENT CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {assignments.map((task) => (
          <motion.div 
            layout
            key={task.id}
            className="bg-white border border-slate-100 p-6 rounded-[40px] shadow-sm hover:border-yellow-200 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#062B5B] group-hover:bg-[#062B5B] group-hover:text-yellow-400 transition-all">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-[1000] text-[#062B5B] text-lg">{task.title}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{task.course}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                task.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
              }`}>
                {task.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase">Submissions</p>
                <p className="text-lg font-black text-[#062B5B]">{task.submissions}/{task.totalStudents}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase">Due Date</p>
                <p className="text-xs font-black text-slate-600 mt-1 flex items-center justify-center gap-1">
                  <Clock size={12} /> {task.dueDate}
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase">Progress</p>
                <p className="text-lg font-black text-yellow-500">
                  {Math.round((task.submissions / task.totalStudents) * 100)}%
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex-1 bg-slate-100 hover:bg-[#062B5B] hover:text-white text-[#062B5B] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                <Download size={14} /> Download All
              </button>
              <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-[#062B5B] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20">
                <ExternalLink size={14} /> Grade Now
              </button>
              <button 
                onClick={() => setAssignments(assignments.filter(a => a.id !== task.id))}
                className="p-3 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default TeacherAssignments;