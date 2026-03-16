"use client";

import { motion } from "framer-motion";
import { experiences } from "../data"; // adjust path if needed

export default function ExperienceSection() {
  return (
    <section className="relative z-10 py-20 px-6 bg-transparent overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-lg">
        Experience Timeline
      </h2>

      <div className="relative max-w-6xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-white/40 before:-translate-x-1/2">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`mb-12 flex flex-col md:flex-row items-center md:justify-between relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Connecting line dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-5 h-5 rounded-full border-4 border-pink-400 z-10 shadow-lg"></div>

            {/* Image section */}
            <div className="md:w-1/3 w-full flex justify-center md:justify-end">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={exp.img}
                alt={exp.company  || "image"}
                className="w-64 h-40 object-cover rounded-xl shadow-lg border border-white/30"
              />
            </div>

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:w-1/2 w-full bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl mt-8 md:mt-0"
            >
              <h3 className="text-2xl font-semibold text-white mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-200 text-sm mb-1">{exp.company}</p>
              <p className="text-gray-300 text-xs mb-3 italic">{exp.date}</p>
              <p className="text-sm text-gray-100 mb-3">{exp.desc}</p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills?.map((s) => (
                  <span
                    key={s}
                    className="bg-pink-500/20 border border-pink-300/40 text-white text-xs px-3 py-1 rounded-full hover:bg-pink-400/40 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Document Button */}
              {exp.doc && (
                <div className="mt-4">
                  <a
                    href={exp.doc}
                    target="_blank"
                    className="text-sm underline text-white/80 hover:text-white transition"
                  >
                    View Certificate / Proof
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
