import React from "react";
import { motion } from "framer-motion";

export default function ExploreCourses() {
  return (
    <section className="w-full py-20">
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
        Explore <samp className="text-[#ff7a00]">courses</samp> {" "}
        <span className="text-lg font-medium text-[#ff7a00]">(LKG – 13)</span>
      </h2>

      {/* CARDS CONTAINER - 80% width centered */}
      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <Card
            badge="Class 3 - 13"
            title="Competitive Exams"
            pills={[
              "JEE",
              "NEET",
              "JEE/NEET Foundation",
              "EAMCET",
              "Olympiad",
              "JEE Books",
              "NEET Books",
            ]}
            image="/ff06ac5b-081a-4a50-a494-16beb717d5b1-1682592787084-4102418410874681.png"
            curve="bg-[#C9DBFF]"
            badgeColor="text-blue-600"
          />

          {/* CARD 2 */}
          <Card
            badge="Class 3 - 12"
            title="School Tuition"
            pills={["CBSE Board", "ICSE Board", "3 - 5 All Boards"]}
            image="/ff06ac5b-081a-4a50-a494-16beb717d5b1-1682592787084-4102418410874681.png"
            curve="bg-[#E6DFFF]"
            badgeColor="text-purple-600"
          />

          {/* CARD 3 */}
          <Card
            badge="Class LKG - 8"
            title="Courses for kids"
            pills={[
              "Learn Phonics - English",
              "Learn Math",
              "Learn Coding",
              "Spoken English Program",
            ]}
            image="/ff06ac5b-081a-4a50-a494-16beb717d5b1-1682592787084-4102418410874681.png"
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
      className="relative rounded-[32px] border p-8 overflow-hidden"
    >
      {/* CURVED BG */}
      <div
        className={`absolute right-0 top-0 h-full w-[58%] rounded-l-[220px] ${curve}`}
      />

      {/* CONTENT */}
      <div className="relative z-10">
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

        {/* UI-ONLY BUTTON */}
        <button
          type="button"
          className="bg-yellow-500 rounded-full hover:bg-yellow-600 transition transform hover:scale-105 text-white px-6 py-3 rounded-xl font-semibold cursor-default"
        >
          Explore Courses
        </button>
      </div>

      {/* IMAGE */}
      <img
        src={image}
        alt=""
        className="absolute bottom-0 right-4 h-[300px] object-contain z-10"
      />
    </motion.div>
  );
}
