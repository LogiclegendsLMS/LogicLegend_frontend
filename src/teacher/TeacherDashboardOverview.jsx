import React from "react";
import { 
  Users, BookOpen, CheckCircle, Clock, Video, 
  FileText, ChevronRight, PlayCircle, Star, Calendar 
} from "lucide-react";
import { motion } from "framer-motion";

const TeacherDashboardOverview = () => {
  // Dummy Data for Dashboard
  const stats = [
    { id: 1, label: "Total Students", value: "1,248", icon: <Users size={20} />, color: "text-blue-500", bg: "bg-blue-50" },
    { id: 2, label: "Active Courses", value: "04", icon: <BookOpen size={20} />, color: "text-emerald-500", bg: "bg-emerald-50" },
    { id: 3, label: "To Grade", value: "28", icon: <FileText size={20} />, color: "text-yellow-500", bg: "bg-yellow-50" },
    { id: 4, label: "Live Hours", value: "42h", icon: <Clock size={20} />, color: "text-purple-500", bg: "bg-purple-50" }
  ];

  const todayClasses = [
    { id: 1, time: "10:00 AM", title: "React Fundamentals", type: "Live Class", duration: "1h 30m", status: "Upcoming" },
    { id: 2, time: "02:00 PM", title: "Advanced UI/UX", type: "Workshop", duration: "2h", status: "Scheduled" }
  ];

  const pendingSubmissions = [
    { id: 1, student: "Aarav Sharma", task: "React Hooks Assignment", time: "2 hours ago" },
    { id: 2, student: "Priya Patel", task: "Wireframe Design", time: "5 hours ago" },
    { id: 3, student: "Rohan Verma", task: "API Integration", time: "1 day ago" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* GREETING HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-[1000] text-[#062B5B] tracking-tight">
            Welcome back, <span className="text-yellow-500">Professor!</span> 👋
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
            <Calendar size={14} /> Here is your schedule for today
          </p>
        </div>
        <button className="bg-[#062B5B] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all shadow-lg flex items-center gap-2">
          <Video size={16} /> Quick Go Live
        </button>
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        
        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants} className="bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-yellow-200 transition-colors">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</h4>
                <p className="text-2xl font-[1000] text-[#062B5B] mt-1">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: TODAY'S SCHEDULE */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] flex items-center gap-2">
                <Video size={16} className="text-yellow-500" /> Today's Sessions
              </h3>
              <button className="text-[10px] font-black text-slate-400 hover:text-yellow-500 uppercase tracking-widest flex items-center gap-1">
                View Calendar <ChevronRight size={12} />
              </button>
            </div>

            <div className="space-y-4">
              {todayClasses.map((cls) => (
                <div key={cls.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-50 hover:bg-yellow-50/50 transition-colors rounded-3xl border border-slate-100/50 gap-4 group">
                  <div className="flex items-center gap-5">
                    <div className="text-center w-16">
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Time</p>
                      <p className="text-sm font-black text-[#062B5B]">{cls.time}</p>
                    </div>
                    <div className="w-[1px] h-10 bg-slate-200 hidden sm:block"></div>
                    <div>
                      <h4 className="font-black text-[15px] text-[#062B5B]">{cls.title}</h4>
                      <p className="text-xs font-bold text-slate-400 mt-1 flex items-center gap-2">
                        <span className="bg-white px-2 py-0.5 rounded-md border border-slate-100">{cls.type}</span>
                        <span>• {cls.duration}</span>
                      </p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-5 py-2.5 bg-white text-[#062B5B] border border-slate-200 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all flex items-center justify-center gap-2">
                    <PlayCircle size={16} /> Start Class
                  </button>
                </div>
              ))}
              
              {todayClasses.length === 0 && (
                <div className="text-center py-10 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                  <p className="text-slate-400 font-bold text-sm">No live classes scheduled for today.</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: RECENT SUBMISSIONS TO GRADE */}
          <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm">
             <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-500" /> Needs Grading
              </h3>
            </div>

            <div className="space-y-4">
              {pendingSubmissions.map((sub) => (
                <div key={sub.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-200 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-sm text-[#062B5B]">{sub.student}</h4>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{sub.time}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 mb-4 truncate">{sub.task}</p>
                  
                  <button className="w-full py-2 bg-yellow-100 text-yellow-700 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all flex items-center justify-center gap-2">
                    <Star size={12} /> Review & Grade
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 text-[10px] font-black text-slate-400 hover:text-[#062B5B] uppercase tracking-widest py-2">
              View All 28 Submissions
            </button>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default TeacherDashboardOverview;