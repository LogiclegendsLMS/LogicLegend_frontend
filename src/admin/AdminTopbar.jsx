import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  HelpCircle,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminTopbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();
  const primaryYellow = "#FFD902";

  const handleNavigate = (path) => {
    navigate(path);
    setIsProfileOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  return (
    // Height reduced to h-16 for a more professional look
    <header className="h-16 w-full bg-white/80 backdrop-blur-md border-b border-gray-50 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
      
      {/* LEFT SEARCH - More Compact */}
      <div className="relative w-64 md:w-80 group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search
            size={16}
            className="text-gray-400 group-focus-within:text-[#FFD902] transition-colors"
          />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#FFD902] transition-all text-[12px] font-medium placeholder:text-gray-400"
          placeholder="Search for courses, analytics..."
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-2 md:gap-4">

        {/* Theme & Notifications */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 transition-all"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => handleNavigate("/admin/notification")}
            className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 relative transition-all"
          >
            <Bell size={18} />
            <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>
        </div>

        {/* PROFILE SECTION - Minimalist style */}
        <div className="relative">
          <div
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 pl-4 border-l border-gray-100 cursor-pointer group"
          >
            <div className="text-right hidden md:block">
              <p className="text-[13px] font-black text-slate-800 leading-tight">Rahul Kumar</p>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">
                Super Admin
              </p>
            </div>

            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-slate-100 overflow-hidden border border-transparent group-hover:border-[#FFD902] transition-all">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>

            <ChevronDown
              size={14}
              className={`text-gray-400 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* DROPDOWN */}
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-50 p-1.5"
              >
                <div className="px-3 py-3 border-b border-gray-50 mb-1">
                  <p className="text-[12px] font-black text-slate-800">rahul.admin@eduvion.com</p>
                </div>

                <div className="space-y-0.5">
                  {[
                    { label: "My Profile", icon: User, path: "/admin/adminprofile" },
                    { label: "Settings", icon: Settings, path: "/admin/adminsettings" },
                    { label: "Help Center", icon: HelpCircle, path: "/admin/help" },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavigate(item.path)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-[12px] font-bold text-gray-500 hover:bg-gray-50 hover:text-slate-900 rounded-lg transition-all"
                    >
                      <item.icon size={16} />
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-1 pt-1 border-t border-gray-50">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 text-[12px] font-bold text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <LogOut size={16} />
                    Log Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;