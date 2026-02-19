import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, 
  Smartphone, GraduationCap, Globe
} from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({ emailOrPhone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Main Wrapper: Isko h-screen rakha hai taaki content hamesha center mein rahe
    <div className="h-screen w-full flex items-center justify-center bg-[#F8FAFC] p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      
      {/* Background Decor: Inhe absolute rakha hai taaki ye layout ko distrub na karein */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-50/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-50/60 rounded-full blur-[100px] pointer-events-none" />

      {/* --- THE WRAPPER BOX --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // max-h-[90vh] ensures card doesn't go off-screen vertically
        className="w-full max-w-6xl max-h-[90vh] md:max-h-[700px] bg-white rounded-[32px] md:rounded-[48px] shadow-[0_30px_70px_rgba(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden z-10 border border-white/50"
      >
        
        {/* --- LEFT SECTION: LIGHT GRADIENT (Content Wrap) --- */}
        <div className="w-full md:w-1/2 p-8 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-y-auto">
          
          <div className="space-y-8 md:space-y-12">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100">
                <GraduationCap className="text-[#062B5B]" size={24} />
              </div>
              <span className="text-xl font-black text-[#1E293B] tracking-tight uppercase">Eduvion</span>
            </div>

            {/* Hero Text */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl lg:text-6xl font-black text-[#1E293B] leading-tight">
                Modern <br /> 
                Education for <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
                   the Future
                </span>
              </h1>
              <p className="text-gray-500 text-base lg:text-lg font-medium max-w-sm leading-relaxed">
                Empower your learning journey with interactive tools and smarter experiences.
              </p>
            </div>
          </div>

          {/* Social Proof (Hidden on small mobile height) */}
          <div className="mt-8 hidden sm:flex items-center gap-4 text-[10px] font-bold text-gray-300 tracking-widest">
            <Globe size={14} /> <span>GLOBAL LEARNING PLATFORM</span>
          </div>
        </div>

        {/* --- RIGHT SECTION: FORM (Scrollable if needed) --- */}
        <div className="w-full md:w-1/2 p-8 lg:p-14 bg-white flex flex-col justify-center overflow-y-auto">
          <div className="w-full max-w-sm mx-auto">
            <header className="mb-8">
              <h2 className="text-3xl font-black text-[#1E293B]">Login.</h2>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-2">Welcome back to the portal</p>
            </header>

            <form className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Identity</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                    {/^\d+$/.test(form.emailOrPhone) ? <Smartphone size={18}/> : <Mail size={18} />}
                  </div>
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    className="w-full py-4 pl-12 pr-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:border-[#FFD902] focus:bg-white transition-all font-bold text-sm"
                    onChange={(e) => setForm({...form, emailOrPhone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between px-1">
                  <label className="text-[10px] font-black uppercase text-gray-400">Security Key</label>
                  <button type="button" className="text-[12px] font-black text-blue-500">Forgot password?</button>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full py-4 pl-12 pr-12 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:border-[#FFD902] focus:bg-white transition-all font-bold text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                className="w-full py-4 bg-[#FFD902] hover:bg-[#062B5B] hover:text-white rounded-2xl text-[#062B5B] font-black text-xs uppercase tracking-widest shadow-xl shadow-yellow-100 transition-all mt-4"
              >
                Sign In <ArrowRight size={18} className="inline ml-1" />
              </button>
            </form>

            <footer className="mt-10 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
              New here? <NavLink to="/Signup" className="text-black border-b-2 border-yellow-400 ml-1">Sign Up</NavLink>
              <p className="text-gray-400 mt-5 px-4 text-[11px] font-bold uppercase tracking-widest"><NavLink to="/" >
                    go to home?
                  </NavLink></p>
            </footer>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Login;