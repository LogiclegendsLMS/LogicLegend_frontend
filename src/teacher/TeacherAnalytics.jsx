import React from "react";
import {
  BarChart3, Users, BookOpen, ClipboardList, TrendingUp, 
  ArrowUpRight,Calendar, Target, Zap, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const TeacherAnalytics = () => {
  const stats = [
    { title: "Active Courses", value: 6, icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50", trend: "+2 this month" },
    { title: "Total Students", value: 320, icon: Users, color: "text-emerald-600", bg: "bg-emerald-50", trend: "+12% growth" },
    { title: "Submissions", value: 140, icon: ClipboardList, color: "text-orange-600", bg: "bg-orange-50", trend: "85% on time" },
    { title: "Avg. Completion", value: "78%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50", trend: "Steady" }
  ];

  const courses = [
    { id: 1, name: "React Development", students: 120, completion: 82, color: "bg-blue-500", engagement: "High" },
    { id: 2, name: "UI/UX Design Masterclass", students: 95, completion: 74, color: "bg-emerald-500", engagement: "Medium" },
    { id: 3, name: "JavaScript Mastery", students: 105, completion: 79, color: "bg-purple-500", engagement: "Very High" }
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            Insight <span className="text-yellow-500">Engine</span>
            <Zap size={20} className="text-yellow-400 fill-yellow-400" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Real-time tracking of your teaching impact
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm hover:bg-slate-50 transition-all">
            <Calendar size={18} className="text-slate-400" />
          </button>
          <button className="bg-[#062B5B] text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg">
            Download Report
          </button>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm group hover:border-yellow-200 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3.5 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight size={12} /> {stat.trend.split(' ')[0]}
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.title}</p>
                <h2 className="text-3xl font-[1000] text-[#062B5B] mt-1">{stat.value}</h2>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MAIN ANALYTICS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COURSE PERFORMANCE TABLE */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[40px] p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] flex items-center gap-2">
              <Target size={18} className="text-yellow-500" /> Performance Analysis
            </h3>
            <button className="text-[10px] font-black text-slate-400 hover:text-[#062B5B] flex items-center gap-1 uppercase tracking-widest">
              See All Courses <ChevronRight size={14} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-50">
                  <th className="pb-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Course Title</th>
                  <th className="pb-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Enrollment</th>
                  <th className="pb-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Completion</th>
                  <th className="pb-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Engagement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {courses.map((course) => (
                  <tr key={course.id} className="group">
                    <td className="py-5 pr-4">
                      <span className="font-black text-sm text-[#062B5B] group-hover:text-yellow-600 transition-colors">
                        {course.name}
                      </span>
                    </td>
                    <td className="py-5 text-sm font-bold text-slate-500">
                      {course.students} <span className="text-[10px] text-slate-300">studs.</span>
                    </td>
                    <td className="py-5 w-48">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.completion}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`${course.color} h-full rounded-full`}
                          />
                        </div>
                        <span className="text-xs font-black text-[#062B5B]">{course.completion}%</span>
                      </div>
                    </td>
                    <td className="py-5">
                      <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                        course.engagement === "Very High" ? "bg-purple-50 text-purple-600" :
                        course.engagement === "High" ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-500"
                      }`}>
                        {course.engagement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SIDE BAR: GOALS / INSIGHTS */}
        <div className="space-y-6">
          <div className="bg-[#062B5B] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl" />
             <h3 className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.2em] mb-6">Monthly Goal</h3>
             <div className="flex items-end gap-2">
               <span className="text-4xl font-[1000]">85%</span>
               <span className="text-white/40 text-[10px] font-bold uppercase mb-2">Target Score</span>
             </div>
             <p className="text-xs text-white/60 font-medium mt-4 leading-relaxed">
               You are only 7% away from your monthly target. Keep students engaged via live sessions!
             </p>
             <div className="mt-6 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[78%]" />
             </div>
          </div>

          <div className="bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm">
             <h4 className="text-[10px] font-black text-[#062B5B] uppercase tracking-widest mb-4">Quick Insights</h4>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                   <p className="text-[11px] font-bold text-slate-500">Peak engagement is at 7:00 PM on Weekdays.</p>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                   <p className="text-[11px] font-bold text-slate-500">React course needs new assignment content.</p>
                </li>
             </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherAnalytics;