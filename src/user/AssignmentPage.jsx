import React from "react";
import { 
  ClipboardList, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Upload, 
  FileText, 
  ChevronRight,
  MoreVertical
} from "lucide-react";
import { motion } from "framer-motion";

const AssignmentPage = () => {
  const assignments = [
    {
      id: "ASG-001",
      title: "E-commerce UI Research",
      subject: "Advanced UI/UX",
      dueDate: "10 March, 2026",
      status: "Pending",
      priority: "High",
      points: "100 pts"
    },
    {
      id: "ASG-002",
      title: "Authentication API with JWT",
      subject: "Backend Development",
      dueDate: "08 March, 2026",
      status: "Submitted",
      priority: "Medium",
      points: "50 pts"
    },
    {
      id: "ASG-003",
      title: "Database Normalization Quiz",
      subject: "Database Management",
      dueDate: "01 March, 2026",
      status: "Overdue",
      priority: "High",
      points: "20 pts"
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Submitted": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "Overdue": return "bg-red-50 text-red-600 border-red-100";
      default: return "bg-blue-50 text-blue-600 border-blue-100";
    }
  };

  return (
    <div className="ml-0 p-6 md:p-10 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">
            My <span className="text-yellow-500">Assignments</span>
          </h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
            Submit your work and track grades
          </p>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
           <div className="px-4 py-2 text-center border-r border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase">Pending</p>
              <p className="text-lg font-black text-[#062B5B]">04</p>
           </div>
           <div className="px-4 py-2 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">Completed</p>
              <p className="text-lg font-black text-emerald-500">12</p>
           </div>
        </div>
      </div>

      {/* --- ASSIGNMENT LIST --- */}
      <div className="space-y-4">
        {assignments.map((asg, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={asg.id}
            className="group bg-white rounded-[32px] border border-slate-100 p-6 hover:shadow-2xl hover:shadow-blue-900/5 transition-all flex flex-col md:flex-row items-center gap-6"
          >
            {/* Icon & ID */}
            <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center shadow-inner ${asg.status === 'Overdue' ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400'}`}>
               <ClipboardList size={28} />
            </div>

            {/* Main Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                <span className="text-[10px] font-black text-yellow-600 uppercase tracking-widest">{asg.subject}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="text-[10px] font-bold text-slate-400">{asg.id}</span>
              </div>
              <h3 className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                {asg.title}
              </h3>
            </div>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-6 border-l border-slate-50 hidden md:grid">
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">Due Date</p>
                  <div className="flex items-center gap-2 text-slate-700 font-bold text-xs">
                     <Clock size={14} className="text-blue-500" /> {asg.dueDate}
                  </div>
               </div>
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">Grade Points</p>
                  <div className="flex items-center gap-2 text-slate-700 font-bold text-xs">
                     <FileText size={14} className="text-orange-500" /> {asg.points}
                  </div>
               </div>
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">Status</p>
                  <div className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase inline-block ${getStatusStyle(asg.status)}`}>
                     {asg.status}
                  </div>
               </div>
            </div>

            {/* Action Button */}
            <div className="w-full md:w-auto">
               {asg.status === "Submitted" ? (
                 <button className="w-full md:w-auto px-6 py-3 bg-emerald-50 text-emerald-600 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 cursor-default">
                    <CheckCircle2 size={16} /> Reviewed
                 </button>
               ) : (
                 <button className={`w-full md:w-auto px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg ${asg.status === 'Overdue' ? 'bg-red-500 text-white shadow-red-200' : 'bg-[#062B5B] text-white shadow-blue-100 hover:bg-yellow-400 hover:text-[#062B5B]'}`}>
                    <Upload size={16} /> {asg.status === 'Overdue' ? 'Re-Submit' : 'Submit Now'}
                 </button>
               )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- EMPTY STATE / TIP --- */}
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[40px] border border-blue-100 flex items-center gap-6">
         <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
            <AlertCircle size={24} />
         </div>
         <div>
            <h4 className="text-sm font-black text-slate-800">Pro Tip for Rahul!</h4>
            <p className="text-xs text-slate-500 font-medium">Submitting assignments 24 hours before the deadline earns you <span className="text-blue-600 font-bold">+10 extra points</span> in consistency!</p>
         </div>
      </div>
    </div>
  );
};

export default AssignmentPage;