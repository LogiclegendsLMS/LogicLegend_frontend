import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Users, Award, MoreVertical, ArrowUpRight, PlayCircle, X 
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid 
} from 'recharts';

const AdminDashboard = () => {
  const primaryYellow = "#FFD902";
  const [openModal, setOpenModal] = useState(false);
  const [courses, setCourses] = useState([
    { name: 'UI/UX Design', count: '30+ Courses', color: '#6366F1' },
    { name: 'Marketing', count: '25+ Courses', color: '#F43F5E' },
    { name: 'Web Dev.', count: '30+ Courses', color: '#10B981' },
  ]);

  const [courseData, setCourseData] = useState({ title: "", instructor: "", price: "" });

  const chartData = [
    { name: 'Jan', progress: 20 }, { name: 'Feb', progress: 45 },
    { name: 'Mar', progress: 30 }, { name: 'Apr', progress: 65 },
    { name: 'May', progress: 85 }, { name: 'Jun', progress: 75 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      name: courseData.title,
      count: `$${courseData.price} - ${courseData.instructor}`,
      color: "#FFD902"
    };
    setCourses([newCourse, ...courses]);
    setOpenModal(false);
    setCourseData({ title: "", instructor: "", price: "" });
  };

  return (
    <div className="space-y-6 pb-10 px-2 md:px-0">
      
      {/* ---------------- TOP BANNER (Responsive) ---------------- */}
      <div className="bg-[#1E293B] rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden shadow-xl">
        <div className="z-10 text-white max-w-lg">
          <h1 className="text-2xl md:text-3xl font-[1000] mb-2 leading-tight tracking-tight">
            Learn Effectively <span style={{ color: primaryYellow }}>With Us!</span>
          </h1>
          <p className="text-gray-400 text-[13px] md:text-sm mb-6 font-medium max-w-sm">
            Get 30% off every course this January. Expand your knowledge base with Eduvion's expert-led sessions.
          </p>
          <div className="flex gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                <Users size={18} className="text-[#FFD902]"/>
              </div>
              <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.15em]">Students</p>
                <p className="text-lg md:text-xl font-black">75,000+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                <Award size={18} className="text-[#FFD902]"/>
              </div>
              <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.15em]">Mentors</p>
                <p className="text-lg md:text-xl font-black">{204}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 z-10 w-full md:w-auto">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            onClick={() => setOpenModal(true)}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl font-[1000] text-[11px] tracking-wider shadow-xl flex items-center justify-center gap-2 transition-all uppercase"
            style={{ backgroundColor: primaryYellow, color: '#000' }}
          >
            <Plus size={16} strokeWidth={3}/> Create New Course
          </motion.button>
        </div>
      </div>

      {/* ---------------- GRID SECTION (Responsive) ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Popular Courses */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[16px] font-black text-slate-800 tracking-tight">Popular Courses</h2>
            <button className="text-[10px] font-black text-slate-400 hover:text-black tracking-widest">VIEW ALL</button>
          </div>

          <div className="space-y-3">
            {courses.map((course, i) => (
              <div key={i} className="bg-white p-4 rounded-[20px] flex items-center justify-between border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-[14px]" style={{ backgroundColor: course.color }}>
                    {course.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-slate-800 leading-tight">{course.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">{course.count}</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-[#FFD902] hover:text-black transition-colors">
                  <ArrowUpRight size={16}/>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="lg:col-span-5 bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-[16px] font-[1000] text-slate-800 tracking-tight">Monthly Progress</h2>
              <p className="text-[9px] text-slate-400 font-black uppercase mt-1 tracking-[0.15em]">Efficiency Analytics</p>
            </div>
            <div className="p-2.5 bg-blue-50 text-blue-500 rounded-xl">
              <PlayCircle size={20}/>
            </div>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorProg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={primaryYellow} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={primaryYellow} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 800, fill: '#94A3B8'}} />
                <Area type="monotone" dataKey="progress" stroke={primaryYellow} strokeWidth={3} fill="url(#colorProg)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-[20px] bg-[#FFD902]">
              <p className="text-xl md:text-2xl font-black">450K+</p>
              <p className="text-[8px] font-black uppercase tracking-widest text-black/60">Completed Courses</p>
            </div>
            <div className="p-4 rounded-[20px] bg-slate-900 text-white">
              <p className="text-xl md:text-2xl font-black">200K+</p>
              <p className="text-[8px] font-black uppercase tracking-widest text-white/50">Video Content</p>
            </div>
          </div>
        </div>

        {/* Top Mentors */}
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-[16px] font-black text-slate-800 tracking-tight px-1">Top Mentors</h2>
          <div className="space-y-3">
            {['Nil Yeager', 'Theron Trump', 'Tyler Mark'].map((name, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-50">
                <div className="flex items-center gap-3">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} className="w-8 h-8 rounded-full bg-slate-100" />
                  <p className="text-[12px] font-black text-slate-700">{name}</p>
                </div>
                <button className="text-[9px] font-black uppercase bg-slate-50 px-2.5 py-1.5 rounded-lg hover:bg-[#FFD902] transition-all">
                  Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- MODAL (Responsive) ---------------- */}
      <AnimatePresence>
        {openModal && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpenModal(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-6 md:p-8 rounded-[30px] w-full max-w-[400px] relative z-10">
              <h2 className="text-xl font-black mb-1 tracking-tight">New Course</h2>
              <p className="text-slate-400 text-[10px] font-black mb-6 uppercase tracking-widest">Efficiency Logistics</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Title" required className="w-full bg-slate-50 p-3.5 rounded-xl text-[13px] font-bold outline-none border-none focus:ring-1 focus:ring-[#FFD902]" onChange={(e) => setCourseData({...courseData, title: e.target.value})} />
                <div className="grid grid-cols-2 gap-3">
                  <input type="number" placeholder="Price" className="w-full bg-slate-50 p-3.5 rounded-xl text-[13px] font-bold outline-none" onChange={(e) => setCourseData({...courseData, price: e.target.value})} />
                  <input type="text" placeholder="Instructor" className="w-full bg-slate-50 p-3.5 rounded-xl text-[13px] font-bold outline-none" onChange={(e) => setCourseData({...courseData, instructor: e.target.value})} />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl font-black text-[11px] tracking-widest uppercase mt-2 shadow-lg" style={{ backgroundColor: primaryYellow }}>Publish Course</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;