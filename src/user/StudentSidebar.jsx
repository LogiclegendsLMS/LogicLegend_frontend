import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  FileQuestion,
  BarChart,
  Video,
  Bell,
  User,
  LogOut,
  ChevronRight
} from "lucide-react";
import logo from '../assets/image.png'


const StudentSidebar = () => {
  // Menu structure based on your Admin Dashboard image
  const menuGroups = [
    {
      title: "MENU OVERVIEW",
      items: [
        { name: "Dashboard", icon: LayoutDashboard, path: "/student" },
        { name: "My Courses", icon: BookOpen, path: "/student/courses" },
        { name: "Live Classes", icon: Video, path: "/student/live" },
      ]
    },
    {
      title: "ACADEMICS",
      items: [
        { name: "Assignments", icon: ClipboardList, path: "/student/assignments" },
        { name: "Quizzes", icon: FileQuestion, path: "/student/quizzes" },
        { name: "Results", icon: BarChart, path: "/student/results" },
      ]
    },
    {
      title: "ORGANIZATION",
      items: [
        { name: "Announcements", icon: Bell, path: "/student/announcements" },
        { name: "Profile", icon: User, path: "/student/profile" },
      ]
    }
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100  left-0 top-0 flex flex-col z-50">
      
      {/* --- LOGO SECTION --- */}
      <div className="p-8 flex items-center gap-3 ">
        <div>
          <img src={logo} alt="eduvion" className='h-8 w-auto object-contain' />
        </div>
        <span className="text-2xl font-black text-[#1A2238] tracking-tight">
          Edu<span className="text-yellow-400">vion</span>
        </span>
      </div>

      {/* --- NAVIGATION LINKS --- */}
      <nav className="flex-1 px-4 overflow-y-auto space-y-7 py-4">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            {/* Group Title - Small & Bold like the image */}
            <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] px-4 mb-4 uppercase">
              {group.title}
            </p>
            
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group
                    ${isActive 
                      ? "bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)] text-[#1A2238] border-l-4 border-yellow-400 font-bold" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-[#1A2238]"}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        {/* Icon handling - Fixing the trim() error */}
                        <item.icon 
                          size={20} 
                          className={isActive ? "text-yellow-400" : "text-gray-400 group-hover:text-yellow-400 transition-colors"} 
                        />
                        <span className={`text-[13px] font-bold ${isActive ? 'text-slate-900' : 'text-gray-500 group-hover:text-slate-800'}`}>{item.name}</span>
                      </div>
                      
                      {/* Interactive Arrow */}
                      <ChevronRight 
                        size={14} 
                        className={`transition-all duration-300 ${
                          isActive 
                          ? "opacity-100 translate-x-0 text-yellow-500" 
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`} 
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* --- LOGOUT SECTION --- */}
      <div className="p-6 border-t border-gray-50">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wider">LOGOUT</span>
        </button>
      </div>
    </aside>
  );
};

export default StudentSidebar;