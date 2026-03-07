import React, { useState } from "react";
import { Search, Plus, Trash2, ClipboardList, RotateCcw, RotateCw, Calendar, Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SubAdminAssignments = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "React Hooks Assignment", course: "React Development", dueDate: "2026-04-10", status: "Active" },
    { id: 2, title: "UI Wireframe Task", course: "UI/UX Design", dueDate: "2026-04-12", status: "Active" }
  ]);

  const [history, setHistory] = useState([assignments]); // History for undo/redo
  const [pointer, setPointer] = useState(0); // Current position in history
  const [search, setSearch] = useState("");
  const [newAssignment, setNewAssignment] = useState({ title: "", course: "", dueDate: "" });

  // Helper to update state with history
  const updateState = (newList) => {
    const newHistory = history.slice(0, pointer + 1);
    setHistory([...newHistory, newList]);
    setPointer(newHistory.length);
    setAssignments(newList);
  };

  const handleUndo = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
      setAssignments(history[pointer - 1]);
    }
  };

  const handleRedo = () => {
    if (pointer < history.length - 1) {
      setPointer(pointer + 1);
      setAssignments(history[pointer + 1]);
    }
  };

  const handleAdd = () => {
    if (!newAssignment.title || !newAssignment.course) return;
    const assignment = { id: Date.now(), ...newAssignment, status: "Active" };
    updateState([...assignments, assignment]);
    setNewAssignment({ title: "", course: "", dueDate: "" });
  };

  const handleDelete = (id) => {
    updateState(assignments.filter((a) => a.id !== id));
  };

  const filteredAssignments = assignments.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* HEADER & HISTORY CONTROLS */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight">
            Assignments <span className="text-yellow-500">Hub</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Create and track student tasks
          </p>
        </div>

        {/* UNDO / REDO BUTTONS */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <button 
            onClick={handleUndo} 
            disabled={pointer === 0}
            className="p-2 hover:bg-slate-50 text-slate-400 disabled:opacity-20 transition-all rounded-xl"
          >
            <RotateCcw size={20} />
          </button>
          <div className="w-[1px] h-6 bg-slate-100 mx-1"></div>
          <button 
            onClick={handleRedo} 
            disabled={pointer === history.length - 1}
            className="p-2 hover:bg-slate-50 text-slate-400 disabled:opacity-20 transition-all rounded-xl"
          >
            <RotateCw size={20} />
          </button>
        </div>
      </div>

      {/* CREATE ASSIGNMENT CARD */}
      <div className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
        <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <Plus size={16} className="text-yellow-500" /> Quick Create
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Task Title"
            className="bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none"
            value={newAssignment.title}
            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Select Course"
            className="bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none"
            value={newAssignment.course}
            onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
          />
          <input
            type="date"
            className="bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-500 outline-none"
            value={newAssignment.dueDate}
            onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
          />
          <button
            onClick={handleAdd}
            className="bg-[#062B5B] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg active:scale-95"
          >
            Publish Task
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative w-full md:w-80">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
        <input
          type="text"
          placeholder="Filter assignments..."
          className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:border-yellow-400 outline-none shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Assignment Name</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Course Info</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Due Date</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredAssignments.map((a) => (
                  <motion.tr layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={a.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-50 text-yellow-600 rounded-2xl">
                          <ClipboardList size={20} />
                        </div>
                        <span className="font-black text-sm text-[#062B5B]">{a.title}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase italic">
                        <Book size={14} className="text-slate-300" /> {a.course}
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 text-slate-400 font-black text-[11px]">
                        <Calendar size={14} /> {a.dueDate || "N/A"}
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                        {a.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button onClick={() => handleDelete(a.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubAdminAssignments;