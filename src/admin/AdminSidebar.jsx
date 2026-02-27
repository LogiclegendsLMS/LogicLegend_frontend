import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Mail, Calendar, MessageSquare, 
  BookOpen, BarChart2, Table, Layout, Lock, 
  ChevronRight, ChevronLeft, LogOut, User
} from 'lucide-react';
import logo from '../assets/image.png'

const AdminSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const primaryYellow = "#FFD902"; 

  const menuGroups = [
    {
      title: "Menu Overview",
      links: [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={18} /> },
        { name: 'Mailbox', path: '/admin/mailbox', icon: <Mail size={18} /> },
        { name: 'Get All Users', path: '/admin/alluser', icon: <User size={18} /> },
        { name: 'Calendar', path: '/admin/calendar', icon: <Calendar size={18} /> },
        { name: 'Group chats', path: '/admin/chats', icon: <MessageSquare size={18} /> },
      ]
    },
    {
      title: "Organization",
      links: [
        { name: 'Courses', path: '/admin/courses', icon: <BookOpen size={18} /> },
        { name: 'Analytics', path: '/admin/charts', icon: <BarChart2 size={18} /> },
        { name: 'Data Tables', path: '/admin/tables', icon: <Table size={18} /> },
        { name: 'Widgets', path: '/admin/apps', icon: <Layout size={18} /> },
        { name: 'Security', path: '/admin/auth', icon: <Lock size={18} /> },
      ]
    }
  ];

  return (
    <motion.aside 
      // Image ke hisaab se width ko compact (260) rakha hai
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-screen sticky top-0 bg-white flex flex-col border-r border-gray-50 shadow-[4px_0_20px_rgba(0,0,0,0.01)] z-50 overflow-hidden"
    >
      {/* COLLAPSE BUTTON */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-1 top-12 bg-white border border-gray-100 shadow-sm rounded-full p-1 text-gray-300 hover:text-black transition-colors z-[60]"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* BRANDING */}
      <div className={`p-6 flex items-center flex-shrink-0 ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
        <div className="min-w-[32px] h-8 flex items-center justify-center">
          <img src={logo} alt="eduvion" className='h-8 w-auto object-contain' />
        </div>
        {!isCollapsed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
            <span className="text-[20px] font-black text-slate-900 tracking-tighter">
              Edu<span className="text-yellow-500">vion</span>
            </span>
          </motion.div>
        )}
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto px-4 scrollbar-hide">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="mb-6">
            {!isCollapsed && (
              <p className="px-4 text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] mb-3">
                {group.title}
              </p>
            )}
            
            {group.links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.name} to={link.path}>
                  <motion.div
                    className={`relative flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} px-4 py-3 my-1 rounded-xl transition-all duration-200 group
                      ${isActive ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}
                  >
                    <span className={`transition-colors ${isActive ? 'text-yellow-500' : 'text-gray-400 group-hover:text-slate-600'}`}>
                      {link.icon}
                    </span>
                    
                    {!isCollapsed && (
                      <span className={`text-[13px] font-bold ${isActive ? 'text-slate-900' : 'text-gray-500 group-hover:text-slate-800'}`}>
                        {link.name}
                      </span>
                    )}

                    {isActive && (
                      <motion.div 
                        layoutId="activeBar"
                        className="absolute left-[-16px] w-1.5 h-6 rounded-r-full bg-yellow-400"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* LOGOUT BUTTON */}
      <div className="p-6 border-t border-gray-50 flex-shrink-0">
        <button className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all group`}>
          <LogOut size={18} />
          {!isCollapsed && <span className="text-[12px] font-black tracking-wide">LOGOUT</span>}
        </button>
      </div>
    </motion.aside>
  );
};

export default AdminSidebar;