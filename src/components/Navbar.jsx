import { useState } from "react";
import { ChevronDown, Menu, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/eduvion-logo.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { title: "Courses", options: ["All Courses", "My Courses", "New Course", "Categories"] },
    { title: "Platform", options: ["Dashboard", "Reports", "Analytics", "Integrations"] },
    { title: "Solutions", options: ["Schools", "Colleges", "Corporate Training", "Tutors"] },
    { title: "Resources", options: ["Blog", "Guides", "Help Center", "Community"] },
    { title: "About Us", options: ["Company", "Team", "Careers"] },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo + Desktop Menu */}
        <div className="flex items-center gap-10">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Eduvion" className="h-12 w-auto" />
            <span className="text-2xl font-semibold text-slate-900">
              Edu<span className="text-yellow-500">vion</span>
            </span>
          </div>

          {/* Desktop Menu */} 
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 transition">
                  {item.title}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeMenu === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white  "
                    >
                      <ul className="py-2">
                        {item.options.map((opt, i) => (
                          <motion.li
                            key={opt}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ x: 6 }}
                            className="px-4 py-2 text-sm hover:bg-yellow-50 hover:text-yellow-600 cursor-pointer rounded-lg"
                          >
                            {opt}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/login">
            <button className="px-5 py-2 text-sm text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
              Login
            </button>
          </NavLink>

          <NavLink to="/demo">
            <button className="px-5 py-2 text-sm text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
              Request a demo
            </button>
          </NavLink>

          <NavLink to="/Singup">
            <button className="px-5 py-2 text-sm text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
              Sign up
            </button>
          </NavLink>
        </div>

        {/* Mobile Hamburger (hidden when sidebar open) */}
        {!open && (
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>
        )}

      </div> {/* ✅ FIXED — closed header div */}

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-40 p-6 overflow-y-auto"
          >
            {/* Close Button Left */}
            <button onClick={() => setOpen(false)} className="mb-6">
              <ArrowLeft size={26} />
            </button>

            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <div
                    className="flex justify-between items-center py-2 px-2 cursor-pointer"
                    onClick={() =>
                      setActiveMenu(activeMenu === index ? null : index)
                    }
                  >
                    {item.title}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        activeMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {activeMenu === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="pl-4 flex flex-col gap-2 overflow-hidden"
                      >
                        {item.options.map((opt) => (
                          <div key={opt} className="py-1 cursor-pointer">
                            {opt}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <NavLink to="/login" onClick={() => setOpen(false)}>
                  <button className="w-full px-5 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
                    Login
                  </button>
                </NavLink>

                <NavLink to="/demo" onClick={() => setOpen(false)}>
                  <button className="w-full px-5 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
                    Request a demo
                  </button>
                </NavLink>

                <NavLink to="/Singup" onClick={() => setOpen(false)}>
                  <button className="w-full px-5 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
                    Sign up
                  </button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
