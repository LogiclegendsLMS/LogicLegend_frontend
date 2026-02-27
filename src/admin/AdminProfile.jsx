import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit, Save, X, Camera, Lock, Mail, Phone, ShieldCheck, BadgeCheck, CheckCircle2 } from "lucide-react";

const AdminProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@edurion.pro",
    phone: "+91 98765 43210",
    role: "Super Admin",
    status: "Active",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  });

  const [tempProfile, setTempProfile] = useState(profile);
  const [passwordForm, setPasswordForm] = useState({ current: "", newPass: "", confirm: "" });

  const handleSave = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-2xl font-[1000] text-[#0F2F57] tracking-tighter uppercase leading-tight">
              Account <span className="text-[#FFD902]">Settings</span>
            </h1>
            <p className="text-slate-400 font-black text-[9px] tracking-[0.2em] mt-1 uppercase">Manage administrative identity</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg border border-emerald-100">
            <BadgeCheck size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest">Identity Verified</span>
          </div>
        </div>

        {/* --- PROFILE MAIN CARD --- */}
        <div className="bg-white rounded-[30px] shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="h-24 bg-[#0F2F57] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </div>
          
          <div className="px-6 md:px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start -mt-10 relative z-10">
              
              {/* IMAGE SECTION */}
              <div className="relative group mx-auto md:mx-0">
                <div className="w-32 h-32 rounded-[24px] overflow-hidden border-[4px] border-white shadow-lg relative">
                  <img src={editMode ? tempProfile.image : profile.image} alt="profile" className="w-full h-full object-cover" />
                  <AnimatePresence>
                    {editMode && (
                      <motion.label initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer backdrop-blur-sm">
                        <Camera size={24} className="text-white" />
                        <input type="file" hidden />
                      </motion.label>
                    )}
                  </AnimatePresence>
                </div>
                {!editMode && (
                  <div className="absolute -bottom-1 -right-1 bg-[#FFD902] text-black p-1.5 rounded-lg shadow-md border-2 border-white">
                    <ShieldCheck size={14} strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* INFO SECTION */}
              <div className="flex-1 pt-2 md:pt-12 w-full">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-xl font-black text-[#0F2F57] tracking-tight">{profile.name}</h2>
                    <p className="text-[#FFD902] font-black uppercase text-[10px] tracking-[0.15em]">{profile.role}</p>
                  </div>

                  <div className="flex gap-2 w-full md:w-auto">
                    {!editMode ? (
                      <button onClick={() => setEditMode(true)} className="flex-1 md:flex-none bg-slate-50 text-[#0F2F57] px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#FFD902] transition-all flex items-center justify-center gap-2">
                        <Edit size={14} /> Edit
                      </button>
                    ) : (
                      <div className="flex gap-2 w-full">
                        <button onClick={handleSave} className="flex-1 bg-[#FFD902] text-black px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-yellow-100 flex items-center justify-center gap-2">
                          <Save size={14} /> Save
                        </button>
                        <button onClick={() => setEditMode(false)} className="bg-slate-50 text-slate-400 p-2.5 rounded-xl">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* FIELDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", value: editMode ? tempProfile.name : profile.name, key: "name", icon: null },
                    { label: "Official Email", value: editMode ? tempProfile.email : profile.email, key: "email", icon: <Mail size={14} /> },
                    { label: "Phone Number", value: editMode ? tempProfile.phone : profile.phone, key: "phone", icon: <Phone size={14} /> },
                    { label: "Status", value: profile.status, key: "status", isStatus: true },
                  ].map((field, i) => (
                    <div key={i} className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">{field.label}</label>
                      {field.isStatus ? (
                        <div className="pt-1">
                          <span className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-tight inline-flex items-center gap-1.5">
                            <CheckCircle2 size={10} /> {field.value} Account
                          </span>
                        </div>
                      ) : (
                        <div className="relative">
                          <input
                            type="text"
                            disabled={!editMode}
                            value={field.value}
                            onChange={(e) => setTempProfile({...tempProfile, [field.key]: e.target.value})}
                            className={`w-full px-4 py-2.5 rounded-xl text-[13px] font-bold border-2 transition-all outline-none ${editMode ? 'bg-slate-50 border-[#FFD902]/50' : 'bg-transparent border-transparent text-slate-500'}`}
                          />
                          {field.icon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">{field.icon}</div>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PASSWORD SECURITY SECTION --- */}
        <div className="bg-[#0F2F57] rounded-[30px] p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#FFD902] opacity-5 rounded-full -mr-10 -mt-10" />
          <h2 className="text-[14px] font-black text-white mb-6 flex items-center gap-2 relative z-10 uppercase tracking-wider">
            <Lock size={16} className="text-[#FFD902]" /> Security Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {['Current Password', 'New Password', 'Confirm Password'].map((placeholder, idx) => (
              <input
                key={idx}
                type="password"
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[12px] text-white font-bold placeholder:text-white/20 outline-none focus:border-[#FFD902]/50 transition-all"
              />
            ))}
          </div>

          <button className="mt-6 bg-[#FFD902] text-black px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.15em] hover:scale-[1.02] transition-all shadow-lg active:scale-95">
            Update Access Keys
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminProfile;