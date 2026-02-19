import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  User, Mail, Smartphone, Lock, Eye, EyeOff, 
  ArrowRight, GraduationCap, CheckCircle 
} from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" }); // Clear error on type
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (formData.phone.length !== 10) newErrors.phone = "Must be 10 digits";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Min 6 characters required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Registration Successful! Welcome to Eduvion 🚀");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFDFD] p-4 md:p-8 relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND ORBS --- */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      {/* --- WRAPPER BOX --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl max-h-[95vh] md:max-h-[800px] bg-white/70 backdrop-blur-xl rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden z-10 border border-white"
      >
        
        {/* --- LEFT SIDE: THEME CONTENT --- */}
        <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-blue-50/40 border-b md:border-b-0 md:border-r border-gray-100 overflow-y-auto">
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-[#062B5B] flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <span className="text-xl font-black text-[#1E293B] tracking-tight uppercase">Eduvion</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight mb-6">
              Start your <br /> 
              Learning <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">Journey.</span>
            </h1>
            
            <p className="text-gray-500 font-medium mb-10 max-w-xs">
              Create an account to access 5,000+ courses and global certifications.
            </p>

            <div className="space-y-4">
               {["Free Trial Access", "Expert Mentors", "Life-time Validity"].map((t, i) => (
                 <div key={i} className="flex items-center gap-2 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                   <CheckCircle size={14} className="text-green-400" /> {t}
                 </div>
               ))}
            </div>
          </div>

          <p className="mt-8 text-[10px] font-bold text-gray-300 tracking-widest uppercase">
            © 2026 Eduvion Smart Systems
          </p>
        </div>

        {/* --- RIGHT SIDE: SIGNUP FORM --- */}
        <div className="flex-1 p-8 lg:p-14 bg-white overflow-y-auto">
          <div className="max-w-md mx-auto">
            <header className="mb-8">
              <h2 className="text-3xl font-black text-[#1E293B]">Create Account.</h2>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Join our global community today</p>
            </header>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#062B5B]" />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-3.5 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-yellow-400 transition-all font-bold text-sm"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase ml-2">{errors.name}</p>}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email</label>
                  <div className="relative group">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#062B5B]" />
                    <input
                      type="email"
                      name="email"
                      placeholder="hello@site.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-3.5 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-yellow-400 transition-all font-bold text-sm"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase ml-2">{errors.email}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone</label>
                  <div className="relative group">
                    <Smartphone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#062B5B]" />
                    <input
                      type="text"
                      name="phone"
                      maxLength={10}
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full py-3.5 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-yellow-400 transition-all font-bold text-sm"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase ml-2">{errors.phone}</p>}
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative group">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#062B5B]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full py-3.5 pl-12 pr-12 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-yellow-400 transition-all font-bold text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-[10px] font-bold uppercase ml-2">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4.5 bg-[#FFD902] hover:bg-[#062B5B] hover:text-white rounded-2xl text-[#062B5B] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-yellow-200 transition-all mt-4 flex items-center justify-center gap-2"
              >
                Register Now <ArrowRight size={18} />
              </button>
            </form>

            <footer className="mt-8 text-center">
               <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                  Already a member? 
                  <NavLink to="/Login" className="ml-2 text-black border-b-2 border-yellow-400 pb-0.5">
                    Login

                  </NavLink>
               </p>
               <p className="text-gray-400 mt-5 text-[11px] font-bold uppercase tracking-widest"><NavLink to="/" >
                    go to home?
                  </NavLink></p>
            </footer>
          </div>
        </div>
      </motion.div>
    </div>
  );
}