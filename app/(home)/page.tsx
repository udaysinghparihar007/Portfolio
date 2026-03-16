"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Bio, skills, experiences, education, projects } from "../data"; // adjust path
import Navbar from "./Navbar";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";


export default function HomePage() {
  const threeRef = useRef<HTMLDivElement>(null);

  // === THREE.JS BACKGROUND ===
  useEffect(() => {
    const container = threeRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(2, 0.5, 100, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.4,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x888888);
    scene.add(ambientLight);

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.004;
      mesh.rotation.y += 0.006;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* 3D Background */}
      <div ref={threeRef} className="absolute inset-0 z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 text-center px-4">
        <img
          src="/1.jpg"
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full shadow-lg border-4 border-white/50"
        />
        <h1 className="text-5xl font-bold mt-6 drop-shadow-lg">{Bio.name}</h1>
        <p className="mt-2 text-gray-200 max-w-2xl mx-auto">{Bio.description}</p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {Bio.roles.map((role) => (
            <span
              key={role}
              className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm hover:bg-white/40 transition-all duration-300"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href={Bio.github}
            target="_blank"
            className="bg-white/30 hover:bg-white/50 rounded-lg px-6 py-3 transition-all"
          >
            GitHub
          </a>
          <a
            href={Bio.resume}
            target="_blank"
            className="border border-white/50 hover:bg-white/20 rounded-lg px-6 py-3 transition-all"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((group) => (
            <div
              key={group.title}
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg"
                  >
                    <img src={skill.image} alt={skill.name} className="w-6 h-6" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />
      {/* Projects Section */}
      <section className="relative z-10 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 6).map((proj) => (
            <div
              key={proj.id}
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-all"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-100 mb-3">{proj.description.slice(0, 120)}...</p>
              <div className="flex gap-3 mt-4">
                <a
                  href={proj.github}
                  target="_blank"
                  className="bg-white/20 hover:bg-white/40 text-white text-sm px-3 py-1 rounded-lg transition-all"
                >
                  GitHub
                </a>
                <a
                  href={proj.webapp}
                  target="_blank"
                  className="border border-white/50 hover:bg-white/20 text-white text-sm px-3 py-1 rounded-lg transition-all"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <EducationSection />

      {/* Footer */}
      <footer className="relative z-10 bg-black/30 text-center text-gray-200 py-6 mt-8">
        <p>© {new Date().getFullYear()} {Bio.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
