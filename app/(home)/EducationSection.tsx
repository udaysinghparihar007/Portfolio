"use client";

import { motion } from "framer-motion";
import { education } from "../data";

export default function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Background</p>
        <h2>Education that shapes how I build.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="panel flex h-full flex-col p-6"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                {item.date}
              </span>
              {item.grade && <span className="text-sm text-zinc-400">{item.grade}</span>}
            </div>
            <h3 className="text-xl font-semibold text-white">{item.school}</h3>
            <p className="mt-2 text-sm font-medium text-zinc-300">{item.degree}</p>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
