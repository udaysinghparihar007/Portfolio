"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as THREE from "three";
import { ArrowUpRight, Check, Code2, Download, Github, MapPin } from "lucide-react";
import { Bio, projects, skills } from "../data";
import Navbar from "./Navbar";
import EducationSection from "./EducationSection";
import ContactActions from "./ContactActions";

export default function HomePage() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const geometry = new THREE.IcosahedronGeometry(2.2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.16,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    let frame = 0;

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(clientWidth, clientHeight, false);
    };

    const animate = () => {
      mesh.rotation.x += 0.0008;
      mesh.rotation.y += 0.0012;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };

    camera.position.z = 7;
    scene.add(mesh);
    container.appendChild(renderer.domElement);
    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09090b] text-zinc-100">
      <Navbar />

      <section className="relative isolate flex min-h-[min(860px,100vh)] items-center overflow-hidden border-b border-white/10">
        <div ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_20%,rgba(8,145,178,0.18),transparent_35%),linear-gradient(135deg,#09090b_25%,#111827_100%)]" />

        <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">Computer science student · Full-stack developer</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Building useful software with care.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I&apos;m <span className="font-medium text-zinc-200">{Bio.name}</span>, a developer focused on
              thoughtful interfaces, practical full-stack systems, and learning by building.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
              >
                View my work <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              {Bio.resume ? (
                <a
                  href={Bio.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-cyan-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Download resume <Download size={16} aria-hidden="true" />
                </a>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-cyan-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Let&apos;s connect <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} aria-hidden="true" /> India
              </span>
              <span className="inline-flex items-center gap-2">
                <Code2 size={15} aria-hidden="true" /> React · Next.js · Node.js
              </span>
            </div>
          </div>

          <div className="panel relative overflow-hidden p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative">
              <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Currently learning
              </div>
              <p className="font-mono text-sm leading-8 text-zinc-400">
                <span className="text-cyan-300">const</span> direction = {"{"}
                <br />
                <span className="pl-5 text-zinc-300">craft:</span> <span className="text-amber-200">&quot;clear UX&quot;</span>,
                <br />
                <span className="pl-5 text-zinc-300">build:</span> <span className="text-amber-200">&quot;full-stack products&quot;</span>,
                <br />
                <span className="pl-5 text-zinc-300">improve:</span> <span className="text-amber-200">&quot;every iteration&quot;</span>,
                <br />
                {"}"};
              </p>
              <div className="mt-8 border-t border-white/10 pt-5 text-sm leading-7 text-zinc-400">
                {Bio.focus}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="section-heading mb-0">
            <p className="eyebrow">About</p>
            <h2>Curious about the details behind good software.</h2>
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-8 text-zinc-400">
            <p>{Bio.about}</p>
            <p>
              I care about the space where product thinking and engineering meet: understanding the user,
              choosing a sensible implementation, and leaving the codebase clearer than I found it.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell border-y border-white/10 bg-white/[0.02]">
        <div className="section-heading">
          <p className="eyebrow">Toolkit</p>
          <h2>A focused stack for learning and shipping.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((group) => (
            <article key={group.title} className="panel p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{group.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300"
                  >
                    {skill.image && (
                      <Image
                        src={skill.image}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 object-contain"
                        width={16}
                        height={16}
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
  id="projects"
  className="w-full px-4 py-24 sm:px-6 lg:px-8 xl:px-10"
>
  <div className="mx-auto w-full max-w-[1500px]">
    {/* Section heading */}
    <div className="mb-10 max-w-3xl sm:mb-12">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
        Selected work
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        Projects that show how I think,
        <span className="text-zinc-500"> not just what I use.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
        A selection of products and systems I have built, combining thoughtful
        interfaces with practical full-stack engineering.
      </p>
    </div>

    {/* Projects */}
    <div className="space-y-8 lg:space-y-10">
      {projects.map((project, index) => (
        <article
          key={project.id}
          className="group grid overflow-hidden rounded-3xl border border-white/10 bg-[#0d111a]/90 shadow-2xl shadow-black/20 backdrop-blur-sm lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
        >
          {/* Project preview */}
          <div className="relative min-h-[280px] overflow-hidden bg-slate-950 sm:min-h-[360px] lg:min-h-[520px]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              fill
              sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 50vw, 100vw"
              priority={index === 0}
            />

            {/* Subtle image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-cyan-400/[0.04]" />

            {/* Project number */}
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-md sm:left-7 sm:top-7">
              0{index + 1}
            </div>
          </div>

          {/* Project information */}
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12 xl:p-14">
            {/* Category */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
              <span>{project.category}</span>

              <span
                className="h-1 w-1 rounded-full bg-zinc-600"
                aria-hidden="true"
              />

              <span className="text-zinc-500">Featured project</span>
            </div>

            {/* Title */}
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.6rem]">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              {project.description}
            </p>

            {/* Features */}
            <ul className="mt-7 space-y-3.5">
              {project.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-sm leading-6 text-zinc-300"
                >
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-cyan-300"
                    aria-hidden="true"
                  />

                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Technology tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-300/10 bg-cyan-300/[0.07] px-3 py-1.5 text-xs text-cyan-100/90 transition-colors duration-200 group-hover:border-cyan-300/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white underline decoration-white/25 underline-offset-4 transition-colors hover:text-cyan-200 hover:decoration-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d111a]"
                >
                  Source code
                  <Github size={16} aria-hidden="true" />
                </a>
              ) : (
                <span className="text-zinc-500">
                  Source link not published yet
                </span>
              )}

              {project.webapp && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-cyan-100 hover:decoration-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d111a]"
                >
                  Live demo
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <EducationSection />

      <section id="contact" className="section-shell border-t border-white/10">
        <div className="panel flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Interested in building something useful together?
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              I&apos;m open to internship and junior software engineering opportunities. The best way to reach
              me is by email, LinkedIn, or GitHub.
            </p>
          </div>
          <ContactActions />
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <span>© {new Date().getFullYear()} {Bio.name}. Built with Next.js and care.</span>
        <div className="flex gap-4">
          <a href={`mailto:${Bio.email}`} className="transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            Email
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            LinkedIn
          </a>
          <a href={Bio.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
