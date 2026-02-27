import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronUp, ChevronDown, Trash2, User, Mail, Book, ChevronLeft, ChevronRight, Hash } from "lucide-react";

const DataTable = () => {
  /* ================= DATA GENERATION ================= */
  const initialData = Array.from({ length: 120 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    email: `student${i + 1}@edu.com`,
    course: ["React Mastery", "UI/UX Design", "Marketing Pro", "Business Dev"][i % 4],
    status: i % 3 === 0 ? "Inactive" : "Active",
  }));

  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8; // Row size chhota karne ke liye 8 entries rakhi hain

  /* ================= SEARCH & SORT LOGIC ================= */
  const filteredAndSortedData = useMemo(() => {
    let result = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.course.toLowerCase().includes(search.toLowerCase())
    );

    if (sortField) {
      result.sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [data, search, sortField, sortOrder]);

  /* ================= PAGINATION LOGIC ================= */
  const totalPages = Math.ceil(filteredAndSortedData.length / rowsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bhai, kya is student ko remove karna hai?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-6 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= HEADER (Compact) ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-[1000] text-[#0F2F57] tracking-tighter uppercase leading-none">
              Student <span className="text-[#F4B400]">Database</span>
            </h1>
            <p className="text-slate-400 font-bold text-[9px] tracking-[0.2em] mt-1">
              Active Enrollments: {filteredAndSortedData.length}
            </p>
          </div>

          <div className="relative group w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#F4B400] transition-colors" size={16} />
            <input
              type="text"
              placeholder="Quick search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-[13px] font-bold text-slate-700 outline-none focus:border-[#F4B400] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* ================= TABLE CONTAINER ================= */}
        <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  {[
                    { label: "ID", key: "id", icon: <Hash size={12}/> },
                    { label: "Name", key: "name", icon: <User size={12}/> },
                    { label: "Email", key: "email", icon: <Mail size={12}/> },
                    { label: "Course", key: "course", icon: <Book size={12}/> },
                    { label: "Status", key: null },
                    { label: "", key: null },
                  ].map((head, i) => (
                    <th 
                      key={i} 
                      onClick={() => head.key && handleSort(head.key)}
                      className={`px-6 py-4 text-[9px] font-black uppercase tracking-widest ${head.key ? 'cursor-pointer select-none' : ''} ${sortField === head.key ? 'text-[#F4B400]' : 'text-slate-400'}`}
                    >
                      <div className="flex items-center gap-2">
                        {head.icon} {head.label}
                        {sortField === head.key && (
                          sortOrder === "asc" ? <ChevronUp size={12}/> : <ChevronDown size={12}/>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              
              <tbody className="divide-y divide-slate-50">
                <AnimatePresence mode="popLayout">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                      <motion.tr
                        key={item.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="group hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-3 text-[11px] font-bold text-slate-300">#{item.id}</td>
                        <td className="px-6 py-3">
                          <span className="font-black text-[#0F2F57] text-[13px] tracking-tight">{item.name}</span>
                        </td>
                        <td className="px-6 py-3 text-[12px] font-medium text-slate-500">{item.email}</td>
                        <td className="px-6 py-3">
                          <span className="bg-slate-100 text-[#0F2F57] px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
                            {item.course}
                          </span>
                        </td>
                        <td className="px-6 py-3">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                            item.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-20 text-center">
                         <div className="flex flex-col items-center opacity-20">
                            <Search size={32} className="mb-2" />
                            <p className="font-black text-xs uppercase tracking-widest">No Student Found</p>
                         </div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= PAGINATION (Sleek) ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Page <span className="text-[#0F2F57]">{currentPage}</span> of {totalPages}
          </p>

          <div className="flex items-center gap-1 bg-white p-1.5 rounded-xl shadow-sm border border-slate-100">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg disabled:opacity-20 transition-all"
            >
              <ChevronLeft size={16} strokeWidth={3} />
            </button>
            
            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                // Only show current, first, last, and neighbors if too many pages
                if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg font-black text-[10px] transition-all ${
                        currentPage === pageNum ? "bg-[#0F2F57] text-[#F4B400] shadow-md" : "text-slate-400 hover:bg-slate-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                return null;
              })}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg disabled:opacity-20 transition-all"
            >
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;