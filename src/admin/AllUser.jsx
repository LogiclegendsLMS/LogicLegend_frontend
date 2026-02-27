import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, UserPlus, Trash2, Edit2, 
  ChevronLeft, ChevronRight, MoreVertical, X
} from "lucide-react";

const AllUsers = () => {
  // ================= STATE =================
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [users, setUsers] = useState([
    { id: 1, name: "Rahul Kumar", email: "rahul@edurion.pro", role: "Student", status: "Active", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" },
    { id: 2, name: "Sneha Kapoor", email: "sneha@edurion.pro", role: "Instructor", status: "Active", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha" },
    { id: 3, name: "Amit Singh", email: "amit@edurion.pro", role: "Student", status: "Pending", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit" },
    { id: 4, name: "Priya Das", email: "priya@edurion.pro", role: "Moderator", status: "Suspended", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
    { id: 5, name: "Vikram Rathore", email: "vikram@edurion.pro", role: "Student", status: "Active", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram" },
    { id: 6, name: "Anjali Gupta", email: "anjali@edurion.pro", role: "Instructor", status: "Active", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali" },
  ]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "Student", status: "Active" });

  // ================= LOGIC: ACTIONS =================
  
  // Delete User
  const deleteUser = (id) => {
    if (window.confirm("Bhai, pakka delete karna hai?")) {
      setUsers(users.filter(user => user.id !== id));
      // Reset page if last item on page deleted
      if (currentUsers.length === 1 && currentPage > 1) setCurrentPage(currentPage - 1);
    }
  };

  // Open Modal for Add or Edit
  const openModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({ name: user.name, email: user.email, role: user.role, status: user.status });
    } else {
      setEditingUser(null);
      setFormData({ name: "", email: "", role: "Student", status: "Active" });
    }
    setIsModalOpen(true);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      // Edit Logic
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...formData } : u));
    } else {
      // Add Logic
      const newUser = {
        id: Date.now(),
        ...formData,
        img: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
      };
      setUsers([newUser, ...users]);
    }
    setIsModalOpen(false);
  };

  // ================= LOGIC: SEARCH & PAGINATION =================
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = filterRole === "All" || user.role === filterRole;
      return matchesSearch && matchesRole;
    });
  }, [users, searchTerm, filterRole]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const currentUsers = filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <h1 className="text-2xl font-[1000] text-[#0F2F57] tracking-tighter uppercase leading-tight">
              User <span className="text-[#FFD902]">Database</span>
            </h1>
            <p className="text-slate-400 font-black text-[9px] tracking-[0.2em] mt-1 uppercase italic">Total {users.length} authenticated members</p>
          </div>
          <button 
            onClick={() => openModal()}
            className="bg-[#0F2F57] text-[#FFD902] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-black transition-all flex items-center gap-2"
          >
            <UserPlus size={16} /> New Member
          </button>
        </div>

        {/* --- CONTROLS --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
            <input 
              type="text"
              placeholder="Search by name or email..."
              className="w-full bg-white border border-slate-100 rounded-xl py-3 pl-12 pr-4 text-[13px] font-bold shadow-sm focus:border-[#FFD902] outline-none transition-all"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <select 
            className="bg-white border border-slate-100 rounded-xl py-3 px-6 text-[10px] font-black uppercase tracking-widest text-[#0F2F57] shadow-sm outline-none cursor-pointer"
            value={filterRole}
            onChange={(e) => { setFilterRole(e.target.value); setCurrentPage(1); }}
          >
            <option value="All">All Roles</option>
            <option value="Student">Students</option>
            <option value="Instructor">Instructors</option>
            <option value="Moderator">Moderators</option>
          </select>
        </div>

        {/* --- TABLE --- */}
        <div className="bg-white rounded-[30px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">User Identity</th>
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">Role</th>
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">Status</th>
                  <th className="px-8 py-5 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 min-h-[400px]">
                <AnimatePresence mode="popLayout">
                  {currentUsers.map((user) => (
                    <motion.tr 
                      key={user.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="group hover:bg-slate-50/30 transition-all"
                    >
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <img src={user.img} className="w-10 h-10 rounded-xl object-cover bg-slate-100 border border-slate-100" alt="" />
                          <div>
                            <p className="font-black text-[#0F2F57] text-[13px] tracking-tight">{user.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold italic tracking-tight">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                          user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
                          user.status === 'Suspended' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                        }`}>
                          <span className={`w-1 h-1 rounded-full ${user.status === 'Active' ? 'bg-emerald-600' : 'bg-current'}`} />
                          {user.status}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => openModal(user)}
                            className="p-2 hover:bg-[#FFD902] hover:text-black rounded-lg text-slate-400 transition-all"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button 
                            onClick={() => deleteUser(user.id)}
                            className="p-2 hover:bg-rose-500 hover:text-white rounded-lg text-slate-400 transition-all"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="group-hover:hidden text-slate-300 px-2">
                           <MoreVertical size={14} />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {currentUsers.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center py-20 text-slate-400 text-xs font-bold uppercase tracking-widest">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* --- PAGINATION --- */}
          <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Entry <span className="text-[#0F2F57]">{(currentPage-1)*usersPerPage + 1} - {Math.min(currentPage*usersPerPage, filteredUsers.length)}</span> of {filteredUsers.length}
            </span>
            <div className="flex gap-1">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="p-2 rounded-lg hover:bg-white hover:shadow-sm disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-lg text-[10px] font-black transition-all ${currentPage === i + 1 ? 'bg-[#0F2F57] text-[#FFD902]' : 'hover:bg-white text-slate-400'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="p-2 rounded-lg hover:bg-white hover:shadow-sm disabled:opacity-30 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL COMPONENT ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0F2F57]/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative bg-white w-full max-w-md rounded-[30px] shadow-2xl overflow-hidden p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-[1000] text-[#0F2F57] uppercase tracking-tighter">
                  {editingUser ? 'Update' : 'Add'} <span className="text-[#FFD902]">Member</span>
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-all">
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:border-[#FFD902]"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    required type="email"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:border-[#FFD902]"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Role</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-[10px] font-black uppercase outline-none"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                      <option value="Student">Student</option>
                      <option value="Instructor">Instructor</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-[10px] font-black uppercase outline-none"
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#0F2F57] text-[#FFD902] py-4 rounded-xl font-black text-xs uppercase tracking-widest mt-4 shadow-xl hover:bg-black transition-all">
                  {editingUser ? 'Save Changes' : 'Confirm Registration'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllUsers;
