import React, { useState } from "react";
import { Settings, Save, Mail, Globe, Moon, Sun, Bell, RotateCcw, RotateCw, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const SubAdminSettings = () => {
  const [settings, setSettings] = useState({
    platformName: "Eduvion Premium",
    adminEmail: "sub-admin@eduvion.com",
    theme: "Light",
    notifications: true,
    maintenanceMode: false
  });

  // --- HISTORY LOGIC ---
  const [history, setHistory] = useState([settings]);
  const [pointer, setPointer] = useState(0);

  const updateState = (newSettings) => {
    const newHistory = history.slice(0, pointer + 1);
    setHistory([...newHistory, newSettings]);
    setPointer(newHistory.length);
    setSettings(newSettings);
  };

  const handleUndo = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
      setSettings(history[pointer - 1]);
    }
  };

  const handleRedo = () => {
    if (pointer < history.length - 1) {
      setPointer(pointer + 1);
      setSettings(history[pointer + 1]);
    }
  };

  const handleChange = (field, value) => {
    updateState({ ...settings, [field]: value });
  };

  const handleSave = () => {
    // Backend API call here
    alert("Configurations synced successfully!");
  };

  return (
    <div className="p-4 md:p-8 space-y-8 bg-[#FDFDFD] min-h-screen">
      
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-[1000] text-[#062B5B] tracking-tight flex items-center gap-3">
            System <span className="text-yellow-500">Settings</span>
            <Settings size={24} className="text-slate-200 animate-[spin_4s_linear_infinite]" />
          </h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
            Configure your sub-administration dashboard
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <button onClick={handleUndo} disabled={pointer === 0} className="p-2 hover:bg-slate-50 text-slate-400 disabled:opacity-20 transition-all rounded-xl">
            <RotateCcw size={20} />
          </button>
          <div className="w-[1px] h-6 bg-slate-100 mx-1"></div>
          <button onClick={handleRedo} disabled={pointer === history.length - 1} className="p-2 hover:bg-slate-50 text-slate-400 disabled:opacity-20 transition-all rounded-xl">
            <RotateCw size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* MAIN SETTINGS FORM */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
            
            {/* Platform Branding */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                <Globe size={14} /> Global Branding
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-[#062B5B] ml-1">Platform Display Name</label>
                  <input
                    type="text"
                    value={settings.platformName}
                    onChange={(e) => handleChange("platformName", e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-[#062B5B] ml-1">Support/Admin Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="email"
                      value={settings.adminEmail}
                      onChange={(e) => handleChange("adminEmail", e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-5 py-3.5 text-sm font-bold focus:ring-4 focus:ring-yellow-400/10 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Appearance & Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-50">
              <div className="space-y-4">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                   {settings.theme === "Light" ? <Sun size={14} /> : <Moon size={14} />} Appearance
                </h3>
                <div className="flex gap-2">
                  {["Light", "Dark"].map((t) => (
                    <button
                      key={t}
                      onClick={() => handleChange("theme", t)}
                      className={`flex-1 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                        settings.theme === t ? "bg-[#062B5B] text-white shadow-lg" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Bell size={14} /> Communication
                </h3>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl">
                  <span className="text-xs font-black text-[#062B5B] ml-2">Push Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => handleChange("notifications", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-400"></div>
                  </label>
                </div>
              </div>
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#062B5B] font-[1000] text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-yellow-400/20 transition-all flex items-center justify-center gap-3"
            >
              <Save size={20} /> Deploy Configuration
            </button>
          </div>
        </div>

        {/* PREVIEW CARD */}
        <div className="space-y-6">
          <div className="bg-[#062B5B] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all" />
            
            <h3 className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em] mb-6">Live Preview</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Platform Name</p>
                <p className="text-lg font-black mt-1">{settings.platformName}</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Active Theme</p>
                <p className="text-lg font-black mt-1 flex items-center gap-2">
                  {settings.theme} {settings.theme === "Light" ? <Sun size={18} /> : <Moon size={18} />}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4 text-emerald-400">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-black uppercase tracking-tighter">Security Protocols Active</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-yellow-50 rounded-[30px] border border-yellow-100">
            <p className="text-[10px] font-black text-yellow-700 uppercase leading-relaxed">
              * Changing the theme or platform name will reflect across all student and teacher dashboards instantly.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubAdminSettings;