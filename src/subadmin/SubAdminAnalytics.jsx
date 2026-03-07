import React from "react";
import { Users, BookOpen, Video, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, 
  ResponsiveContainer, CartesianGrid, BarChart, Bar 
} from "recharts";
import { motion } from "framer-motion";

const stats = [
  { title: "Total Students", value: "1,245", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Total Courses", value: "58", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-50" },
  { title: "Live Classes", value: "14", icon: Video, color: "text-orange-500", bg: "bg-orange-50" },
  { title: "Growth Rate", value: "+24%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" }
];

const studentData = [
  { month: "Jan", students: 200 },
  { month: "Feb", students: 350 },
  { month: "Mar", students: 500 },
  { month: "Apr", students: 650 },
  { month: "May", students: 900 },
  { month: "Jun", students: 1200 }
];

const courseData = [
  { course: "React", students: 300 },
  { course: "Node", students: 250 },
  { course: "UI/UX", students: 200 },
  { course: "Python", students: 350 }
];

const SubAdminAnalytics = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* PAGE TITLE & HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight">
            Analytics <span className="text-yellow-500">Overview</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Real-time platform performance
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 w-fit">
          <Calendar size={16} className="text-yellow-500" />
          <span className="text-xs font-black text-slate-600 uppercase">March 2026</span>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={index}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-wider">{item.title}</p>
                <h2 className="text-2xl font-[1000] text-[#062B5B] mt-1">{item.value}</h2>
              </div>
              <div className={`${item.bg} ${item.color} p-4 rounded-[20px] transition-colors group-hover:bg-yellow-400 group-hover:text-[#062B5B]`}>
                <item.icon size={22} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* STUDENT GROWTH CHART */}
        <div className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8 px-2">
            <h3 className="font-black text-[#062B5B] uppercase text-xs tracking-[0.2em] flex items-center gap-2">
              <TrendingUp size={16} className="text-yellow-500" /> Student Growth
            </h3>
            <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-blue-500 transition-colors">
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studentData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}}
                />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#062B5B"
                  strokeWidth={4}
                  dot={{ r: 6, fill: "#facc15", strokeWidth: 3, stroke: "#fff" }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* COURSE PERFORMANCE CHART */}
        <div className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8 px-2">
            <h3 className="font-black text-[#062B5B] uppercase text-xs tracking-[0.2em] flex items-center gap-2">
              <BookOpen size={16} className="text-blue-500" /> Course Popularity
            </h3>
            <div className="flex gap-1">
               <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
               <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="course" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}}
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}}
                />
                <Bar 
                  dataKey="students" 
                  fill="#facc15" 
                  radius={[10, 10, 10, 10]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SubAdminAnalytics;