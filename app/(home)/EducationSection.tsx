"use client";

import { motion } from "framer-motion";
import { education } from "../data";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="relative z-10 py-20 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-lg">
        Education
      </h2>

      <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-5 before:w-[2px] before:bg-gradient-to-b from-pink-400 via-purple-500 to-red-500">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-14 pl-14"
          >
            {/* Timeline Node */}
            <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg border-2 border-white/70 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
            </div>

            {/* Education Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-white/25 transition-all duration-300"
            >
              {/* Top section */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={edu.img}
                  alt={edu.school  || "image"}
                  className="w-16 h-16 rounded-xl object-cover border border-white/40 shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{edu.school}</h3>
                  <p className="text-sm text-gray-200">{edu.degree}</p>
                  <p className="text-xs text-gray-300 italic">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-100 text-sm leading-relaxed mb-3">
                {edu.desc}
              </p>

              {/* Grade */}
              {edu.grade && (
                <div className="inline-block bg-pink-500/20 text-white text-sm px-4 py-1 rounded-full border border-pink-400/50">
                  Grade: {edu.grade}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
