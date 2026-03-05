import React, { useState } from "react";
import { 
  Clock, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Flag, 
  AlertCircle,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Mock Quiz Data
  const questions = [
    {
      question: "Which hook is used to handle side effects in a functional component?",
      options: ["useState", "useContext", "useEffect", "useReducer"],
      points: 10
    },
    // Add more questions here
  ];

  return (
    <div className="ml-0  min-h-screen bg-[#FDFDFD] flex flex-col lg:flex-row overflow-hidden">
      
      {/* --- LEFT: MAIN QUESTION AREA --- */}
      <div className="flex-1 p-6 md:p-10 flex flex-col">
        
        {/* Header with Progress */}
        <div className="flex justify-between items-center mb-10">
           <div>
              <h2 className="text-2xl font-[1000] text-slate-900 tracking-tight">React Fundamentals Quiz</h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">Module 4 • Hooks & Performance</p>
           </div>
           <div className="flex items-center gap-3 px-6 py-3 bg-red-50 text-red-600 rounded-2xl border border-red-100 animate-pulse">
              <Clock size={18} />
              <span className="font-black text-sm uppercase tracking-tighter">14:59 Left</span>
           </div>
        </div>

        {/* Question Card */}
        <motion.div 
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[48px] border border-slate-100 p-8 md:p-12 shadow-sm flex-1 relative overflow-hidden"
        >
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16" />

           <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
                 {currentQuestion + 1}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Question of {questions.length}</span>
           </div>

           <h3 className="text-2xl font-black text-slate-800 leading-tight mb-10">
              {questions[currentQuestion].question}
           </h3>

           {/* Options Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedOption(idx)}
                  className={`group p-6 rounded-[28px] border-2 transition-all text-left flex items-center justify-between ${
                    selectedOption === idx 
                    ? "border-yellow-400 bg-yellow-50/50 shadow-lg shadow-yellow-100" 
                    : "border-slate-50 bg-slate-50/30 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                     <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${selectedOption === idx ? 'bg-yellow-400 text-[#062B5B]' : 'bg-white text-slate-400'}`}>
                        {String.fromCharCode(65 + idx)}
                     </span>
                     <span className={`font-bold text-sm ${selectedOption === idx ? 'text-slate-900' : 'text-slate-500'}`}>{option}</span>
                  </div>
                  {selectedOption === idx && <CheckCircle2 size={20} className="text-yellow-600" />}
                </button>
              ))}
           </div>

           {/* Navigation Buttons */}
           <div className="mt-12 flex justify-between items-center border-t border-slate-50 pt-8">
              <button className="flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-slate-900 font-black text-[10px] uppercase tracking-widest transition-all">
                 <Flag size={16} /> Mark for Review
              </button>
              <div className="flex gap-4">
                 <button className="p-4 bg-slate-100 text-slate-400 rounded-2xl hover:bg-slate-200 transition-all">
                    <ChevronLeft size={20} />
                 </button>
                 <button className="px-8 py-4 bg-[#062B5B] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:bg-yellow-400 hover:text-[#062B5B] transition-all">
                    Save & Next
                 </button>
              </div>
           </div>
        </motion.div>
      </div>

      {/* --- RIGHT: QUIZ NAVIGATION PANEL --- */}
      <aside className="w-full lg:w-96 bg-white border-l border-slate-100 p-10 flex flex-col">
         <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
               <Trophy className="text-yellow-500" />
               <h4 className="text-sm font-[1000] text-slate-900 uppercase tracking-[0.2em]">Summary</h4>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
               {[...Array(20)].map((_, i) => (
                 <button 
                  key={i}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs transition-all ${
                    i === 0 ? 'bg-yellow-400 text-[#062B5B]' : 
                    i < 3 ? 'bg-emerald-500 text-white' : 
                    'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  }`}
                 >
                    {i + 1}
                 </button>
               ))}
            </div>
         </div>

         <div className="space-y-4 mb-10">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Answered</span>
               </div>
               <span className="text-xs font-black text-slate-900">03</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Marked</span>
               </div>
               <span className="text-xs font-black text-slate-900">01</span>
            </div>
         </div>

         <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="p-4 bg-blue-50 rounded-2xl flex items-center gap-4 mb-6">
               <AlertCircle className="text-blue-500" size={20} />
               <p className="text-[10px] font-bold text-blue-600 leading-tight uppercase">You can review your answers before final submission.</p>
            </div>
            <button className="w-full py-5 bg-red-500 text-white rounded-[24px] font-[1000] text-[11px] uppercase tracking-[0.3em] shadow-xl shadow-red-100 hover:bg-red-600 transition-all">
               Final Submission
            </button>
         </div>
      </aside>
    </div>
  );
};

export default QuizPage;