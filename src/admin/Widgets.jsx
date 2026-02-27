import React from "react";
import { motion } from "framer-motion";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Tooltip 
} from "recharts";
import { TrendingUp, TrendingDown, IndianRupee, Users, ShoppingBag, ArrowUpRight } from "lucide-react";

const Widgets = () => {
  /* ================= DATA ================= */
  const revenueData = [{ v: 4000 }, { v: 6000 }, { v: 8000 }, { v: 7500 }, { v: 9000 }, { v: 12000 }];
  const usersData = [{ v: 200 }, { v: 350 }, { v: 500 }, { v: 800 }, { v: 1200 }, { v: 1500 }];
  const ordersData = [{ v: 95 }, { v: 80 }, { v: 70 }, { v: 75 }, { v: 60 }, { v: 55 }];

  const WidgetCard = ({ title, amount, growth, data, icon: Icon, color }) => {
    const isPositive = growth >= 0;
    // Dynamic colors based on performance
    const chartColor = isPositive ? "#10B981" : "#F43F5E"; 

    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-5 rounded-[30px] shadow-sm border border-slate-100 relative overflow-hidden group transition-all"
      >
        <div className="relative z-10">
          {/* Header: Title & Icon */}
          <div className="flex justify-between items-center mb-4">
            <div className={`p-3 rounded-xl ${color === 'yellow' ? 'bg-[#F4B400]' : 'bg-[#0F2F57]'} text-white shadow-inner`}>
              <Icon size={20} />
            </div>
            <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black tracking-tight ${
              isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
            }`}>
              {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {isPositive ? `+${growth}%` : `${growth}%`}
            </div>
          </div>

          {/* Body: Value */}
          <div className="mb-4">
            <p className="text-slate-400 font-bold uppercase text-[9px] tracking-widest mb-0.5">{title}</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-[1000] text-[#0F2F57] tracking-tighter">{amount}</h2>
              <ArrowUpRight size={14} className="text-[#F4B400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Chart Section */}
          <div className="h-16 w-full -mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColor} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={chartColor}
                  strokeWidth={2.5}
                  fill={`url(#gradient-${title})`}
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-10">
          <h1 className="text-3xl font-[1000] text-[#0F2F57] tracking-tighter uppercase leading-none">
            Business <span className="text-[#F4B400]">Insights</span>
          </h1>
          <p className="text-slate-400 font-bold text-[10px] tracking-[0.2em] mt-2 uppercase">Performance Overview</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WidgetCard
            title="Total Revenue"
            amount="₹4.52L"
            growth={18.5}
            data={revenueData}
            icon={IndianRupee}
            color="yellow"
          />

          <WidgetCard
            title="Active Students"
            amount="3,200"
            growth={25.2}
            data={usersData}
            icon={Users}
            color="navy"
          />

          <WidgetCard
            title="Course Sales"
            amount="1,240"
            growth={-5.4}
            data={ordersData}
            icon={ShoppingBag}
            color="yellow"
          />
        </div>

        {/* Action Bar */}
        <div className="mt-8 bg-[#0F2F57] rounded-[24px] p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-white text-xs font-bold uppercase tracking-widest">System Operational: <span className="text-[#F4B400]">Sync Complete</span></p>
           </div>
           <div className="flex gap-2">
              <button className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-[10px] font-black tracking-widest transition-all">
                  VIEW LOGS
              </button>
              <button className="bg-[#F4B400] text-[#0F2F57] px-5 py-2.5 rounded-xl text-[10px] font-black tracking-widest transition-all shadow-lg hover:brightness-110">
                  DOWNLOAD PDF
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;