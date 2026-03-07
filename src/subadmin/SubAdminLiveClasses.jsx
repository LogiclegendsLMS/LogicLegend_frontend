import React, { useState } from "react";
import { 
  Video, Search, Plus, Trash2, PlayCircle, StopCircle, 
  RotateCcw, RotateCw, Calendar, Clock, User, BookOpen 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SubAdminLiveClasses = () => {
  const [classes, setClasses] = useState([
    { id: 1, title: "React Basics Live", course: "React Development", instructor: "John Doe", date: "2026-04-15", time: "18:00", status: "Scheduled" },
    { id: 2, title: "UI Design Workshop", course: "UI/UX Design", instructor: "Sarah Lee", date: "2026-04-18", time: "17:00", status: "Scheduled" }
  ]);

  const [history, setHistory] = useState([classes]);
  const [pointer, setPointer] = useState(0);
  const [search, setSearch] = useState("");
  const [newClass, setNewClass] = useState({ title: "", course: "", instructor: "", date: "", time: "" });

  const updateState = (newList) => {
    const newHistory = history.slice(0, pointer + 1);
    setHistory([...newHistory, newList]);
    setPointer(newHistory.length);
    setClasses(newList);
  };

  const handleUndo = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
      setClasses(history[pointer - 1]);
    }
  };

  const handleRedo = () => {
    if (pointer < history.length - 1) {
      setPointer(pointer + 1);
      setClasses(history[pointer + 1]);
    }
  };

  const handleAdd = () => {
    if (!newClass.title || !newClass.course) return;
    const liveClass = { id: Date.now(), ...newClass, status: "Scheduled" };
    updateState([...classes, liveClass]);
    setNewClass({ title: "", course: "", instructor: "", date: "", time: "" });
  };

  const handleDelete = (id) => updateState(classes.filter((c) => c.id !== id));

  const updateStatus = (id, status) => {
    updateState(classes.map((c) => c.id === id ? { ...c, status } : c));
  };

  const filteredClasses = classes.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* HEADER & CONTROLS */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-2">
            Live <span className="text-yellow-500">Sessions</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse ml-1" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Broadcast and schedule real-time learning
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <button onClick={handleUndo} disabled={pointer === 0} className="p-2 hover:bg-slate-50 text-slate-400 disabled:opacity-20 transition-all rounded-xl">
            <RotateCcw size={20} />
          </button>
          <div className="w-[1px] h-6 bg-slate-100 mx-1"></div>
          <button onClick={handleRedo} disabled={pointer === history.length - 1} className="p-2 hover:bg-slate-50 text-slate-400 disabled:opacity-20 transition-all rounded-xl">
            <RotateCw size={20} />
          </button>
        </div>
      </div>

      {/* SCHEDULER FORM */}
      <div className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
        <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <Video size={16} className="text-yellow-500" /> Session Scheduler
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <input type="text" placeholder="Session Title" className="bg-slate-50 border-none rounded-2xl px-5 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-yellow-400" value={newClass.title} onChange={(e) => setNewClass({ ...newClass, title: e.target.value })} />
          <input type="text" placeholder="Course" className="bg-slate-50 border-none rounded-2xl px-5 py-3 text-sm font-bold outline-none" value={newClass.course} onChange={(e) => setNewClass({ ...newClass, course: e.target.value })} />
          <input type="text" placeholder="Instructor" className="bg-slate-50 border-none rounded-2xl px-5 py-3 text-sm font-bold outline-none" value={newClass.instructor} onChange={(e) => setNewClass({ ...newClass, instructor: e.target.value })} />
          <input type="date" className="bg-slate-50 border-none rounded-2xl px-5 py-3 text-sm font-bold text-slate-500 outline-none" value={newClass.date} onChange={(e) => setNewClass({ ...newClass, date: e.target.value })} />
          <input type="time" className="bg-slate-50 border-none rounded-2xl px-5 py-3 text-sm font-bold text-slate-500 outline-none" value={newClass.time} onChange={(e) => setNewClass({ ...newClass, time: e.target.value })} />
          <button onClick={handleAdd} className="bg-[#062B5B] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg py-3">
            Schedule
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative w-full md:w-80">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
        <input type="text" placeholder="Find a session..." className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:border-yellow-400 outline-none shadow-sm" onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* TABLE */}
      <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Live Class</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Context</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Schedule</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredClasses.map((cls) => (
                  <motion.tr layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={cls.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl shadow-sm ${cls.status === 'Live' ? 'bg-red-50 text-red-500' : 'bg-yellow-50 text-yellow-600'}`}>
                          <Video size={20} />
                        </div>
                        <span className="font-black text-sm text-[#062B5B]">{cls.title}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-500 font-bold text-xs"><BookOpen size={14} className="text-slate-300" /> {cls.course}</div>
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase italic"><User size={12} className="text-slate-300" /> {cls.instructor}</div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="text-[11px] font-black text-slate-600 flex items-center gap-1"><Calendar size={12} /> {cls.date}</span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-1"><Clock size={11} /> {cls.time}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                        cls.status === "Live" ? "bg-red-50 text-red-600 border-red-100" :
                        cls.status === "Completed" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                        "bg-blue-50 text-blue-600 border-blue-100"
                      }`}>
                        {cls.status === 'Live' && <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full animate-ping mr-2" />}
                        {cls.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-2">
                        {cls.status === "Scheduled" && (
                          <button onClick={() => updateStatus(cls.id, "Live")} className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all"><PlayCircle size={18}/></button>
                        )}
                        {cls.status === "Live" && (
                          <button onClick={() => updateStatus(cls.id, "Completed")} className="p-3 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all"><StopCircle size={18}/></button>
                        )}
                        <button onClick={() => handleDelete(cls.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={18}/></button>
                      </div>
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

export default SubAdminLiveClasses;