import React from "react";
import { PlayCircle, BookOpen, User, MoreVertical, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MyCourses = () => {
  const courses = [
    {
      title: "React for Beginners 2026",
      instructor: "John Doe",
      progress: 60,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600",
      tag: "Development"
    },
    {
      title: "Node.js Mastery & Architecture",
      instructor: "Jane Smith",
      progress: 30,
      thumbnail: "https://images.unsplash.com/photo-1502942735447-1b9b59716d39?q=80&w=600",
      tag: "Backend"
    },
    {
      title: "MongoDB Complete Guide",
      instructor: "Alex Johnson",
      progress: 80,
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=600",
      tag: "Database"
    }
  ];

  return (
    <div className="ml-0 p-4 md:p-10 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">
            My <span className="text-yellow-500">Learning</span>
          </h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
            Track your course progress and certificates
          </p>
        </div>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
           <button className="px-4 py-2 bg-white shadow-sm rounded-lg text-[10px] font-black uppercase tracking-widest text-[#062B5B]">In Progress</button>
           <button className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600">Completed</button>
        </div>
      </div>

      {/* --- RESPONSIVE GRID --- */}
      {/* grid-cols-1 (Mobile), grid-cols-2 (Tablet), grid-cols-3 (Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[40px] border border-slate-100 p-5 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all group overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative h-48 w-full rounded-[30px] overflow-hidden mb-6">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <PlayCircle size={48} className="text-yellow-400 drop-shadow-xl" />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black text-slate-900 uppercase tracking-widest">
                {course.tag}
              </div>
            </div>

            {/* Content */}
            <div className="px-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <MoreVertical size={18} className="text-slate-300 cursor-pointer" />
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                   <User size={12} className="text-yellow-700" />
                </div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                  {course.instructor}
                </p>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400">Course Progress</span>
                  <span className="text-slate-900">{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-50 h-3 rounded-full overflow-hidden border border-slate-100 p-[2px]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    className="bg-gradient-to-r from-[#062B5B] to-blue-500 h-full rounded-full shadow-inner"
                  />
                </div>
              </div>

              <button className="w-full py-4 bg-slate-900 group-hover:bg-yellow-400 text-white group-hover:text-[#062B5B] rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                Continue Learning <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;