import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Bell,
  Shield,
  Save,
  Eye,
  EyeOff,
  Mail,
  Smartphone,
  Moon,
  Lock,
  ChevronRight
} from "lucide-react";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);

  const [settings, setSettings] = useState({
    fullName: "Rahul Kumar",
    email: "rahul.admin@eduvion.pro",
    phone: "+91 98765 43210",
    darkMode: false,
    emailNotifications: true,
    smsNotifications: false,
    twoFactorAuth: true,
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: <User size={16} />, desc: "Public identity" },
    { id: "notifications", label: "Preferences", icon: <Bell size={16} />, desc: "Alerts & UI" },
    { id: "security", label: "Security", icon: <Shield size={16} />, desc: "Access & 2FA" },
  ];

  const ToggleSwitch = ({ name, checked, onChange }) => (
    <div 
      onClick={() => onChange({ target: { name, type: 'checkbox', checked: !checked }})}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-all ${checked ? "bg-[#FFD902]" : "bg-gray-200"}`}
    >
      <motion.div 
        animate={{ x: checked ? 20 : 0 }}
        className="bg-white w-3 h-3 rounded-full shadow-sm"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-8">
          <h1 className="text-2xl font-[1000] text-[#0F2F57] tracking-tighter uppercase">
            Admin <span className="text-[#FFD902]">Configuration</span>
          </h1>
          <p className="text-slate-400 font-black text-[9px] tracking-[0.2em] mt-1 uppercase italic">Dashboard experience & security control</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* --- SIDEBAR TABS --- */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 lg:w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                  activeTab === tab.id
                    ? "bg-white shadow-md border-l-4 border-[#FFD902]"
                    : "hover:bg-white/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${activeTab === tab.id ? "bg-[#FFD902] text-black" : "bg-white text-slate-400 shadow-sm"}`}>
                    {tab.icon}
                  </div>
                  <div className="text-left hidden lg:block">
                    <p className={`font-black text-[12px] ${activeTab === tab.id ? "text-[#0F2F57]" : "text-slate-400"}`}>{tab.label}</p>
                    <p className="text-[8px] text-slate-400 font-black uppercase tracking-tighter">{tab.desc}</p>
                  </div>
                  <span className="lg:hidden text-[12px] font-black">{tab.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-slate-100 min-h-[450px] flex flex-col"
            >
              <div className="flex-1">
                {activeTab === "profile" && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={settings.fullName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-xl py-2.5 px-4 text-[13px] font-bold outline-none focus:border-[#FFD902] focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={settings.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border-2 border-transparent rounded-xl py-2.5 px-4 text-[13px] font-bold outline-none focus:border-[#FFD902] focus:bg-white transition-all"
                          />
                          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={14}/>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="phone"
                          value={settings.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-xl py-2.5 px-4 text-[13px] font-bold outline-none focus:border-[#FFD902] focus:bg-white transition-all"
                        />
                        <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={14}/>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-4">
                    {[
                      { id: 'emailNotifications', label: 'Email Alerts', desc: 'Performance reports weekly', icon: <Mail size={16}/> },
                      { id: 'smsNotifications', label: 'SMS Security', desc: 'Instant text login alerts', icon: <Smartphone size={16}/> },
                      { id: 'darkMode', label: 'Dark Mode', desc: 'Reduce eye strain', icon: <Moon size={16}/> }
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100/50 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-white rounded-lg text-[#0F2F57] shadow-sm">{item.icon}</div>
                          <div>
                            <p className="font-black text-[12px] text-[#0F2F57]">{item.label}</p>
                            <p className="text-[10px] text-slate-400 font-bold">{item.desc}</p>
                          </div>
                        </div>
                        <ToggleSwitch name={item.id} checked={settings[item.id]} onChange={handleChange} />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50/50 rounded-2xl flex items-center justify-between border border-blue-100">
                      <div className="flex gap-3 items-center">
                        <div className="bg-[#0F2F57] text-white p-2.5 rounded-xl shadow-md"><Lock size={14}/></div>
                        <div>
                          <p className="font-black text-[12px] text-[#0F2F57]">2-Factor Auth</p>
                          <p className="text-[9px] text-blue-600/70 font-black uppercase">Strong Protection</p>
                        </div>
                      </div>
                      <ToggleSwitch name="twoFactorAuth" checked={settings.twoFactorAuth} onChange={handleChange} />
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Current Password</label>
                        <input
                          type="password"
                          name="currentPassword"
                          placeholder="••••••••••••"
                          className="w-full bg-slate-50 border-2 border-transparent rounded-xl py-2.5 px-4 text-[13px] font-bold outline-none focus:border-[#FFD902] transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">New Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            placeholder="Min. 8 characters"
                            className="w-full bg-slate-50 border-2 border-transparent rounded-xl py-2.5 px-4 text-[13px] font-bold outline-none focus:border-[#FFD902] transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#FFD902]"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SAVE ACTION */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
                <button
                  onClick={() => alert("Settings Updated! 🔐")}
                  className="flex items-center gap-2 bg-[#0F2F57] hover:bg-black text-[#FFD902] px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg transition-all active:scale-95"
                >
                  <Save size={14} />
                  Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;