// // src/components/Footer.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// export default function Footer() {
//   const socialIcons = [
//     { icon: <Facebook size={18} />, name: "Facebook" },
//     { icon: <Twitter size={18} />, name: "Twitter" },
//     { icon: <Instagram size={18} />, name: "Instagram" },
//     { icon: <Linkedin size={18} />, name: "LinkedIn" },
//   ];

//   const linkHover = { scale: 1.05, color: "#FF7A00", transition: { type: "spring", stiffness: 300 } };

//   return (
//     <footer className="w-full bg-black text-white px-6 md:px-20 py-16">
      
//       {/* LOGO + DESCRIPTION */}
//       <motion.div
//         className="flex flex-col items-center text-center mb-12"
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-4">
//           ED
//           <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
//             UVI
//           </span>
//           ON
//         </h2>
//         <p className="text-gray-300 text-[15px] md:text-[16px] leading-7 max-w-[450px]">
//           We are not here to sell products, we sell value through our expertise.
//         </p>

//         {/* SOCIAL ICONS */}
//         <div className="flex gap-4 mt-6">
//           {socialIcons.map((s, i) => (
//             <motion.div
//               key={i}
//               className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 cursor-pointer"
//               whileHover={{ scale: 1.3, rotate: 10, backgroundColor: "#FF7A00", color: "#fff" }}
//             >
//               {s.icon}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* LINKS GRID */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center md:text-left mb-12"
//         initial={{ y: 30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         {/* ADDRESS */}
//         <div>
//           <p className="font-semibold mb-2">Address</p>
//           <p className="text-gray-400">38 Opebi Road, Ikeja, Lagos State, Nigeria</p>

//           <p className="font-semibold mt-4 mb-2">Phone</p>
//           <p className="text-gray-400">+2349022396389</p>

//           <p className="font-semibold mt-4 mb-2">Email</p>
//           <p className="text-gray-400">manavkumarsinha1702@gmail.com</p>
//         </div>

//         {/* COMPANY LINKS */}
//         <div>
//           <p className="font-semibold mb-4">Company</p>
//           <ul className="space-y-2">
//             {["About Us", "Features", "Pricing"].map((link, i) => (
//               <motion.li
//                 key={i}
//                 className="cursor-pointer text-gray-400 hover:text-orange-500 transition-colors"
//                 whileHover={linkHover}
//               >
//                 {link}
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* SUBSCRIBE */}
//         <div>
//           <p className="font-semibold mb-4">Subscribe</p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <input
//               type="email"
//               placeholder="Your Email Address"
//               className="px-4 py-2 rounded-full flex-1 text-black outline-none"
//             />
//             <motion.button
//               className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Subscribe
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* COPYRIGHT */}
//       <motion.div
//         className="text-center text-gray-500 text-[13px]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//       >
//         &copy; {new Date().getFullYear()} EDUVION. All rights reserved.
//       </motion.div>
//     </footer>
//   );
// }

import {
  ShieldCheck,
  Lock,
  Accessibility,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#062B5B] text-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Brand + Trust */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Eduvion LMS
          </h2>
          <p className="text-blue-200 text-sm mb-6 leading-relaxed">
            A modern learning management system designed to empower
            institutions, educators, and learners with smart digital education.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-blue-300" />
              <span>ISO/IEC 27001:2022</span>
            </li>
            <li className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-blue-300" />
              <span>ISO 9001:2015</span>
            </li>
            <li className="flex items-center space-x-3">
              <Accessibility className="w-5 h-5 text-blue-300" />
              <span>Accessible & Inclusive</span>
            </li>
            <li className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-blue-300" />
              <span>GDPR Compliant</span>
            </li>
          </ul>
        </div>

        {/* Platform */}
        <FooterColumn
          title="Platform"
          items={[
            "Overview",
            "Features",
            "Integrations",
            "Mobile apps",
            "Pricing",
            "Why Eduvion LMS",
            "Get Eduvion LMS free",
            "Roadmap",
          ]}
        />

        {/* Solutions */}
        <FooterColumn
          title="Solutions"
          items={[
            "Use cases",
            "Industries",
            "Eduvion AI",
            "TalentCraft",
            "Skills",
            "Eduvion Library",
            "Course Solutions",
          ]}
        />

        {/* Resources */}
        <FooterColumn
          title="Resources"
          items={[
            "Blog",
            "Webinars",
            "Podcast",
            "eBooks",
            "Research",
            "What is an LMS?",
            "ROI Calculator",
          ]}
        />

        {/* Company + Social */}
        <div>
          <h3 className="font-semibold mb-6 text-white">Company</h3>
          <ul className="space-y-2 text-blue-200 mb-6">
            {[
              "About us",
              "Our customers",
              "Customer awards",
              "Support services",
              "Innovation hub",
              "Affiliates",
              "Contact us",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Github} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 mt-12 py-6 text-blue-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Eduvion. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            {[
              "Knowledge Base",
              "FAQ",
              "Privacy",
              "Security",
              "Terms of Service",
            ].map((item) => (
              <span
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* 🔹 Reusable Components */

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold mb-6 text-white">{title}</h3>
      <ul className="space-y-2 text-blue-200">
        {items.map((item) => (
          <li
            key={item}
            className="hover:text-white cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 hover:scale-110 transition transform shadow-md"
    >
      <Icon className="w-5 h-5 text-white" />
    </a>
  );
}
