import React from "react";
import { Bell, Search, Moon, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const SubAdminTopbar = ({ userName = "SubAdmin Aditya", userRole = "Sub Admin" }) => {

  const initials = userName.split(" ").map(n => n[0]).join("");

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-8">

        <h1 className="text-xl font-bold text-[#1A2238] hidden md:block">
          Welcome back, <span className="text-yellow-500">{userName.split(" ")[0]}</span> 👋
        </h1>

        {/* Search */}
        <div className="relative w-64 lg:w-80 group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Search students, teachers, courses..."
            className="w-full bg-[#F3F4F6] border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-yellow-400/50 transition-all outline-none"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* ICONS */}
        <div className="flex items-center gap-3 text-gray-500 border-r border-gray-200 pr-6">

          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 hover:text-[#1A2238]">
            <Moon size={20} />
          </button>

          <NavLink to={"/subadmin/notifications"}>
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 hover:text-[#1A2238]">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
            </button>
          </NavLink>

        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-3 cursor-pointer group p-1.5 hover:bg-gray-50 rounded-2xl transition-all">

          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-[#1A2238]">
              {userName}
            </p>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              {userRole}
            </p>
          </div>

          {/* Avatar */}
          <div className="relative">
            <img
              src={`https://ui-avatars.com/api/?name=${userName}&background=FFD700&color=1A2238&bold=true&rounded=true`}
              className="w-10 h-10 rounded-xl object-cover border-2 border-white shadow-sm"
              alt="user-profile"
            />
            <span className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></span>
          </div>

          <ChevronDown
            size={16}
            className="text-gray-400 group-hover:text-[#1A2238] transition-all"
          />

        </div>

      </div>
    </header>
  );
};

export default SubAdminTopbar;