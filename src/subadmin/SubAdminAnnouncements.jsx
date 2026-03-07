import React, { useState } from "react";
import { Bell, Search, Plus, Trash2, RotateCcw, RotateCw, Megaphone, Calendar, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SubAdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "New React Course Released",
      message: "We have launched a new advanced React course.",
      priority: "Important",
      date: "2026-04-05"
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform maintenance scheduled this weekend.",
      priority: "Normal",
      date: "2026-04-07"
    }
  ]);

  // --- REDO/UNDO LOGIC ---
  const [history, setHistory] = useState([announcements]);
  const [pointer, setPointer] = useState(0);

  const updateState = (newList) => {
    const newHistory = history.slice(0, pointer + 1);
    setHistory([...newHistory, newList]);
    setPointer(newHistory.length);
    setAnnouncements(newList);
  };

  const handleUndo = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
      setAnnouncements(history[pointer - 1]);
    }
  };

  const handleRedo = () => {
    if (pointer < history.length - 1) {
      setPointer(pointer + 1);
      setAnnouncements(history[pointer + 1]);
    }
  };

  // --- COMPONENT LOGIC ---
  const [search, setSearch] = useState("");
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    message: "",
    priority: "Normal",
    date: ""
  });

  const handleAdd = () => {
    if (!newAnnouncement.title || !newAnnouncement.message) return;
    const announcement = { id: Date.now(), ...newAnnouncement };
    updateState([...announcements, announcement]);
    setNewAnnouncement({ title: "", message: "", priority: "Normal", date: "" });
  };

  const handleDelete = (id) => {
    updateState(announcements.filter((a) => a.id !== id));
  };

  const filteredAnnouncements = announcements.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* HEADER & HISTORY */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            Broadcast <span className="text-yellow-500">Center</span>
            <Megaphone size={24} className="text-yellow-400 rotate-12" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Send updates to all students & teachers
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

      {/* CREATE FORM */}
      <div className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
        <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <Plus size={16} className="text-yellow-500" /> New Announcement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Headline"
            className="lg:col-span-1 bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none"
            value={newAnnouncement.title}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Detailed Message..."
            className="lg:col-span-1 bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none"
            value={newAnnouncement.message}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, message: e.target.value })}
          />
          <select
            className="bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-500 outline-none"
            value={newAnnouncement.priority}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, priority: e.target.value })}
          >
            <option>Normal</option>
            <option>Important</option>
            <option>Urgent</option>
          </select>
          <input
            type="date"
            className="bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-500 outline-none"
            value={newAnnouncement.date}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, date: e.target.value })}
          />
          <button
            onClick={handleAdd}
            className="bg-[#062B5B] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg py-3.5"
          >
            Broadcast Now
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative w-full md:w-80">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
        <input
          type="text"
          placeholder="Search broadcasts..."
          className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:border-yellow-400 outline-none shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* LIST TABLE */}
      <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Headline</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Message Content</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Level</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredAnnouncements.map((a) => (
                  <motion.tr layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={a.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl shadow-sm ${
                          a.priority === "Urgent" ? "bg-red-50 text-red-500" : "bg-yellow-50 text-yellow-600"
                        }`}>
                          <Bell size={18} className={a.priority === "Urgent" ? "animate-bounce" : ""} />
                        </div>
                        <span className="font-black text-sm text-[#062B5B]">{a.title}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="text-slate-500 text-xs font-bold leading-relaxed max-w-xs truncate md:whitespace-normal">
                        {a.message}
                      </p>
                    </td>
                    <td className="p-6">
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border flex items-center gap-2 w-fit ${
                        a.priority === "Urgent" ? "bg-red-50 text-red-600 border-red-100" :
                        a.priority === "Important" ? "bg-orange-50 text-orange-600 border-orange-100" :
                        "bg-slate-50 text-slate-500 border-slate-100"
                      }`}>
                        {a.priority === "Urgent" && <AlertTriangle size={12} />}
                        {a.priority}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-400 font-black text-[11px]">
                        <Calendar size={14} /> {a.date}
                      </div>
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

export default SubAdminAnnouncements;