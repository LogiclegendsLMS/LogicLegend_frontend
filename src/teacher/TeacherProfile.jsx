import React, { useState } from "react";
import { 
  User, Mail, Phone, MapPin, Award, 
  Camera, Edit3, Save, X, Briefcase, 
  Linkedin, Github, Globe, Star, ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

const TeacherProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Aman Deep",
    role: "Senior Full Stack Instructor",
    email: "aman.instructor@eduvion.com",
    phone: "+91 98765 43210",
    location: "Indore, MP, India",
    experience: "8+ Years",
    bio: "Specializing in React, Node.js, and Cloud Architecture. I have helped over 5000+ students transition into high-paying tech roles through project-based learning.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman"
  });

  const teacherStats = [
    { label: "Students Taught", value: "5.2k", icon: <User size={16} />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Avg. Rating", value: "4.9/5", icon: <Star size={16} />, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Courses Published", value: "12", icon: <Award size={16} />, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen font-sans">
      
      {/* TOP ACTION HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight">
            My <span className="text-yellow-500">Identity</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Manage your public persona</p>
        </div>
        
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-slate-100 text-[#062B5B] px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-sm"
          >
            <Edit3 size={16} /> Edit Profile
          </button>
        ) : (
          <div className="flex gap-3">
            <button 
              onClick={() => setIsEditing(false)}
              className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
            >
              <X size={20} />
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 bg-[#062B5B] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg"
            >
              <Save size={16} /> Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: PERSONAL CARD */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#062B5B] to-blue-900" />
            
            <div className="relative mt-4 inline-block">
              <img 
                src={profile.avatar} 
                alt="Avatar" 
                className="w-32 h-32 rounded-[35px] border-4 border-white shadow-xl relative z-10 bg-white" 
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 p-2.5 bg-yellow-400 text-[#062B5B] rounded-xl z-20 shadow-lg hover:scale-110 transition-transform">
                  <Camera size={16} />
                </button>
              )}
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-[1000] text-[#062B5B]">{profile.name}</h2>
              <p className="text-yellow-600 font-black text-[10px] uppercase tracking-[0.2em] mt-1">{profile.role}</p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4 text-emerald-500 bg-emerald-50 w-fit mx-auto px-4 py-1.5 rounded-full border border-emerald-100">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Verified Expert</span>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-3 gap-2">
              {teacherStats.map((stat, i) => (
                <div key={i}>
                  <p className="text-lg font-[1000] text-[#062B5B]">{stat.value}</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
               {[<Linkedin />, <Github />, <Globe />].map((icon, idx) => (
                 <button key={idx} className="p-3 bg-slate-50 text-slate-400 hover:text-yellow-500 hover:bg-yellow-50 rounded-xl transition-all">
                   {React.cloneElement(icon, { size: 18 })}
                 </button>
               ))}
            </div>
          </div>

          <div className="bg-yellow-400 p-8 rounded-[40px] shadow-lg shadow-yellow-400/10">
             <h4 className="text-[10px] font-black text-[#062B5B] uppercase tracking-widest flex items-center gap-2 mb-2">
               <Briefcase size={14} /> Mentor Experience
             </h4>
             <p className="text-2xl font-[1000] text-[#062B5B]">{profile.experience}</p>
             <p className="text-xs font-bold text-[#062B5B]/60 mt-1 leading-tight">Consistently delivering top-tier educational content since 2018.</p>
          </div>
        </div>

        {/* RIGHT: EDITABLE FORM */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <User size={16} className="text-yellow-500" /> Account Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "Full Name", value: profile.name, field: "name", icon: <User /> },
                { label: "Email Address", value: profile.email, field: "email", icon: <Mail /> },
                { label: "Phone Number", value: profile.phone, field: "phone", icon: <Phone /> },
                { label: "Location", value: profile.location, field: "location", icon: <MapPin /> },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{item.label}</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-yellow-500 transition-colors">
                      {React.cloneElement(item.icon, { size: 16 })}
                    </span>
                    <input 
                      type="text" 
                      disabled={!isEditing}
                      value={item.value}
                      className={`w-full bg-slate-50 border-none rounded-2xl pl-12 pr-5 py-4 text-sm font-bold outline-none transition-all ${
                        isEditing ? "ring-2 ring-yellow-400/20 bg-white shadow-sm" : "cursor-not-allowed"
                      }`}
                    />
                  </div>
                </div>
              ))}

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Professional Bio</label>
                <textarea 
                  rows="4"
                  disabled={!isEditing}
                  value={profile.bio}
                  className={`w-full bg-slate-50 border-none rounded-[30px] px-6 py-5 text-sm font-bold outline-none transition-all resize-none ${
                    isEditing ? "ring-2 ring-yellow-400/20 bg-white shadow-sm" : "cursor-not-allowed"
                  }`}
                />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
               <div className="flex-1 min-w-[200px] bg-slate-50 p-6 rounded-[30px] border border-slate-100 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-[#062B5B]">
                     <Award size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#062B5B] uppercase tracking-tighter">Teaching Certificate</h5>
                    <p className="text-[10px] font-bold text-slate-400">Verified by Eduvion Admin</p>
                  </div>
               </div>
               <div className="flex-1 min-w-[200px] bg-slate-50 p-6 rounded-[30px] border border-slate-100 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-[#062B5B]">
                     <Star size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#062B5B] uppercase tracking-tighter">Top Instructor 2024</h5>
                    <p className="text-[10px] font-bold text-slate-400">Awarded for 98% satisfaction</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherProfile;