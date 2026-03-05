import React from "react";
import { Play, Users, Star, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-[32px] border border-gray-100 p-5 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden"
    >
      {/* Thumbnail with Overlay */}
      <div className="relative h-48 w-full rounded-[24px] overflow-hidden mb-5">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
           <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-[#062B5B] shadow-xl scale-50 group-hover:scale-100 transition-transform">
              <Play size={24} fill="currentColor" />
           </div>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black text-[#062B5B] uppercase tracking-widest shadow-sm">
           {course.progress}% Completed
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-[1000] text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <button className="text-slate-300 hover:text-slate-900"><MoreHorizontal size={20}/></button>
        </div>

        <div className="flex items-center gap-2">
           <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">👤</div>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Mentor: {course.instructor}</p>
        </div>

        {/* Progress Bar Container */}
        <div className="pt-2">
          <div className="flex justify-between items-center mb-2">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+course.title}`} alt="user" />
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-yellow-100 flex items-center justify-center text-[8px] font-black text-yellow-700">+12</div>
             </div>
             <span className="text-[10px] font-black text-slate-900 uppercase">{course.progress}/100</span>
          </div>
          <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden p-[2px] border border-slate-100">
             <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
             />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;