import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Lock, 
  Save, 
  CheckCircle2,
  ShieldCheck,
  BellRing
} from "lucide-react";
import { motion } from "framer-motion";

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@eduvion.com",
    phone: "+91 98765 43210",
    location: "Indore, India",
    bio: "Full Stack Developer in training. Passionate about UI/UX and React ecosystem.",
    studentId: "ED-2026-001"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Add toast notification logic here
    alert("Profile Updated Successfully! 🎉");
  };

  return (
    <div className="ml-0 p-6 md:p-10 bg-[#FDFDFD] min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="mb-10">
        <h2 className="text-3xl font-[1000] text-slate-900 tracking-tight">
          My <span className="text-yellow-500">Profile</span>
        </h2>
        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        
        {/* --- LEFT: PROFILE CARD --- */}
        <div className="space-y-6">
          <div className="bg-white rounded-[48px] border border-slate-100 p-8 shadow-sm text-center relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#062B5B] to-blue-600 -z-0" />
             
             <div className="relative z-10 mt-10">
                <div className="relative inline-block">
                   <div className="w-32 h-32 rounded-[40px] border-4 border-white bg-yellow-100 overflow-hidden shadow-xl mx-auto">
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                   </div>
                   <button className="absolute bottom-0 right-0 p-2.5 bg-yellow-400 text-[#062B5B] rounded-2xl border-4 border-white hover:scale-110 transition-all shadow-lg">
                      <Camera size={18} />
                   </button>
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">{profile.name}</h3>
                <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">{profile.studentId}</p>
                
                <div className="mt-8 pt-8 border-t border-slate-50 flex justify-around">
                   <div>
                      <p className="text-lg font-black text-slate-900">12</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Courses</p>
                   </div>
                   <div className="w-[1px] bg-slate-100" />
                   <div>
                      <p className="text-lg font-black text-slate-900">8.9</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">GPA</p>
                   </div>
                   <div className="w-[1px] bg-slate-100" />
                   <div>
                      <p className="text-lg font-black text-slate-900">15</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Badges</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-[40px] border border-slate-100 p-6 shadow-sm space-y-2">
             <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all group">
                <div className="flex items-center gap-3">
                   <ShieldCheck size={18} className="text-blue-500" />
                   <span className="text-xs font-black text-slate-700 uppercase tracking-wider">Account Security</span>
                </div>
                <CheckCircle2 size={16} className="text-emerald-500" />
             </button>
             <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all">
                <div className="flex items-center gap-3">
                   <BellRing size={18} className="text-orange-500" />
                   <span className="text-xs font-black text-slate-700 uppercase tracking-wider">Notifications</span>
                </div>
             </button>
          </div>
        </div>

        {/* --- RIGHT: SETTINGS FORM --- */}
        <div className="xl:col-span-2">
           <div className="bg-white rounded-[48px] border border-slate-100 p-8 md:p-12 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                 <h4 className="text-xl font-black text-slate-900">Personal Information</h4>
                 <button 
                   onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                   className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                     isEditing ? 'bg-emerald-500 text-white shadow-emerald-100' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                   }`}
                 >
                   {isEditing ? <><Save size={16} /> Save Changes</> : 'Edit Profile'}
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Name Input */}
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                    <div className="relative">
                       <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                       <input 
                         disabled={!isEditing}
                         type="text" 
                         value={profile.name}
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-yellow-400 outline-none transition-all disabled:opacity-60"
                       />
                    </div>
                 </div>

                 {/* Email Input */}
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <div className="relative">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                       <input 
                         disabled={!isEditing}
                         type="email" 
                         value={profile.email}
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-yellow-400 outline-none transition-all disabled:opacity-60"
                       />
                    </div>
                 </div>

                 {/* Phone Input */}
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                    <div className="relative">
                       <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                       <input 
                         disabled={!isEditing}
                         type="text" 
                         value={profile.phone}
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-yellow-400 outline-none transition-all disabled:opacity-60"
                       />
                    </div>
                 </div>

                 {/* Location Input */}
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Location</label>
                    <div className="relative">
                       <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                       <input 
                         disabled={!isEditing}
                         type="text" 
                         value={profile.location}
                         className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-yellow-400 outline-none transition-all disabled:opacity-60"
                       />
                    </div>
                 </div>
              </div>

              {/* Bio Section */}
              <div className="mt-8 space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">About Bio</label>
                 <textarea 
                    disabled={!isEditing}
                    rows="4"
                    value={profile.bio}
                    className="w-full p-6 bg-slate-50 border border-transparent rounded-[32px] text-sm font-bold focus:bg-white focus:border-yellow-400 outline-none transition-all disabled:opacity-60 resize-none"
                 />
              </div>

              {/* Security Header */}
              <div className="mt-12 pt-10 border-t border-slate-50">
                 <h4 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                    <Lock size={20} className="text-[#062B5B]" /> Password & Security
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <button className="p-6 bg-slate-900 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-yellow-400 hover:text-[#062B5B] transition-all flex items-center justify-center gap-3">
                       Update Password
                    </button>
                    <button className="p-6 bg-red-50 text-red-500 border border-red-100 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">
                       Deactivate Account
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;