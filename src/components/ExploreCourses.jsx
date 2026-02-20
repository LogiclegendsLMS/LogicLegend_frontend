
import React from "react";
import { motion } from "framer-motion";

export default function ExploreCourses() {
  return (
    <section className="w-full py-20">
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
        Explore <span className="text-[#ff7a00]">Eduvion Courses</span>{" "}
        <span className="text-lg font-medium text-[#ff7a00]">(LKG – 13)</span>
      </h2>

      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* COMPETITIVE EXAMS */}
          <Card
            badge="Class 3 - 13"
            title="Competitive Exams"
            pills={[
              "JEE",
              "NEET",
              "Foundation",
              "Olympiad",
              "Practice Tests",
            ]}
            // student preparing / exam illustration
            image="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            curve="bg-[#C9DBFF]"
            badgeColor="text-blue-600"
          />

          {/* SCHOOL TUITION */}
          <Card
            badge="Class 3 - 12"
            title="School Tuition"
            pills={["CBSE Board", "ICSE Board", "All Subjects"]}
            // teacher + classroom illustration
            image="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            curve="bg-[#E6DFFF]"
            badgeColor="text-purple-600"
          />

          {/* KIDS COURSES */}
          <Card
            badge="Class LKG - 8"
            title="Courses for Kids"
            pills={[
              "Phonics",
              "Math Basics",
              "Coding for Kids",
              "Spoken English",
            ]}
            // kids learning illustration
            image="https://cdn-icons-png.flaticon.com/512/2784/2784469.png"
            curve="bg-[#FFE9B5]"
            badgeColor="text-blue-600"
          />

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ badge, title, pills, image, curve, badgeColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="relative rounded-[32px] border p-8 overflow-hidden bg-white shadow-md"
    >
      {/* CURVED BACKGROUND */}
      <div
        className={`absolute right-0 top-0 h-full w-[58%] rounded-l-[220px] ${curve}`}
      />

      {/* IMAGE */}
      <img
        src={image}
        alt="education"
        className="absolute bottom-6 right-6 h-[140px] object-contain z-10"
      />

      {/* OVERLAY (keeps text readable) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20">
        <p className={`font-semibold mb-3 ${badgeColor}`}>{badge}</p>

        <h3 className="text-xl font-bold mb-6">{title}</h3>

        <div className="flex flex-wrap gap-3 mb-8 max-w-[260px]">
          {pills.map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white border rounded-lg text-sm font-medium text-orange-600"
            >
              {item}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 transition transform hover:scale-105 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Explore Courses
        </button>
      </div>
    </motion.div>
  );
}
