'use client'
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const navLink=[
    {name: "Login", href: "/login"},
    {name: "Register", href: "/register"},
    {name: "forgot passward", href: "/forgot-password"}
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    return <nav className="flex items-center justify-between px-6 py-4 bg-white/20 backdrop-blur-md shadow-md fixed w-full z-50">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">MyBrand</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-100 font-medium drop-shadow">
          <li className="hover:text-white cursor-pointer"><Link href="./">Home</Link></li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* GitHub Button */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            forgot password
          </a>

          {/* Login */}
          <button className="bg-transparent border border-white/50 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300">
            <Link href="/login">Login</Link>
          </button>

          {/* Sign Up */}
          <button className="bg-white/30 hover:bg-white/50 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300">
            <Link href="/sign-up">Sign Up</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
}