import React, { useState } from "react";
import { 
  User, Mail, Phone, MapPin, ShieldCheck, 
  Camera, Edit3, Save, X, Calendar, 
  Award, BookOpen, Users, Activity 
} from "lucide-react";
import { motion } from "framer-motion";

const SubAdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Vikram Singh",
    role: "Senior Sub-Admin",
    email: "vikram.admin@eduvion.com",
    phone: "+91 98765 43210",
    location: "Indore, MP",
    joiningDate: "January 2024",
    bio: "Passionate about educational management and student success. Managing the React and UI/UX departments.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
  });

  const stats = [
    { label: "Courses Managed", value: "24", icon: <BookOpen size={16} />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Students Verified", value: "1.2k", icon: <Users size={16} />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Quality Score", value: "98%", icon: <Award size={16} />, color: "text-yellow-600", bg: "bg-yellow-50" },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Add API logic here
  };

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight">
            My <span className="text-yellow-500">Profile</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Manage your personal identity & credentials
          </p>
        </div>
        
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-slate-100 text-[#062B5B] px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-sm"
          >
            <Edit3 size={16} /> Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button 
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 bg-red-50 text-red-500 px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
            >
              <X size={16} /> Cancel
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-[#062B5B] text-white px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg"
            >
              <Save size={16} /> Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: IDENTITY CARD */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-50 to-yellow-50" />
            
            <div className="relative mt-4 inline-block">
              <img 
                src={profile.avatar} 
                alt="Avatar" 
                className="w-32 h-32 rounded-[35px] border-4 border-white shadow-xl relative z-10 bg-white" 
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 p-2 bg-yellow-400 text-[#062B5B] rounded-xl z-20 shadow-lg hover:scale-110 transition-transform">
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
              <span className="text-[10px] font-black uppercase tracking-widest">Verified Sub-Admin</span>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-3 gap-2">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} w-fit mx-auto mb-2`}>
                    {stat.icon}
                  </div>
                  <p className="text-[10px] font-black text-[#062B5B]">{stat.value}</p>
                  <p className="text-[8px] font-bold text-slate-400 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#062B5B] p-6 rounded-[30px] text-white">
            <h4 className="text-[10px] font-black text-yellow-400 uppercase tracking-widest flex items-center gap-2 mb-4">
              <Activity size={14} /> Admin Activity
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold border-b border-white/10 pb-2">
                <span className="text-white/60">System Access</span>
                <span>Unlimited</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white/60">Member Since</span>
                <span>{profile.joiningDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DETAILS FORM */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-xs font-black text-[#062B5B] uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <User size={16} className="text-yellow-500" /> Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", value: profile.name, field: "name", icon: <User /> },
                { label: "Email Address", value: profile.email, field: "email", icon: <Mail /> },
                { label: "Phone Number", value: profile.phone, field: "phone", icon: <Phone /> },
                { label: "Location", value: profile.location, field: "location", icon: <MapPin /> },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{item.label}</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
                      {React.cloneElement(item.icon, { size: 16 })}
                    </span>
                    <input 
                      type="text" 
                      disabled={!isEditing}
                      value={item.value}
                      onChange={(e) => setProfile({...profile, [item.field]: e.target.value})}
                      className={`w-full bg-slate-50 border-none rounded-2xl pl-12 pr-5 py-3.5 text-sm font-bold outline-none transition-all ${
                        isEditing ? "ring-2 ring-yellow-400/20 bg-white shadow-sm" : "cursor-not-allowed opacity-80"
                      }`}
                    />
                  </div>
                </div>
              ))}

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Admin Biography</label>
                <textarea 
                  rows="4"
                  disabled={!isEditing}
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  className={`w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold outline-none transition-all resize-none ${
                    isEditing ? "ring-2 ring-yellow-400/20 bg-white shadow-sm" : "cursor-not-allowed opacity-80"
                  }`}
                />
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-[30px] flex items-start gap-4">
              <div className="bg-yellow-400 p-3 rounded-2xl text-[#062B5B]">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="text-sm font-[1000] text-[#062B5B]">Annual Performance Review</h4>
                <p className="text-xs font-bold text-slate-400 mt-1">Your next review is scheduled for Dec 15, 2026. Keep up the great work!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubAdminProfile;