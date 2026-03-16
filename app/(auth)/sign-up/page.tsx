"use client";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2 drop-shadow-lg">Create Account</h1>
        <p className="text-center text-gray-200 mb-8">
          Join <span className="font-semibold">MyBrand</span> today!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-100">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-100">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-100">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-100">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-white/30 hover:bg-white/50 rounded-lg font-semibold text-white transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="w-1/3 border-t border-white/40"></span>
          <span className="px-3 text-gray-100 text-sm">or</span>
          <span className="w-1/3 border-t border-white/40"></span>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-2 bg-blue-600/70 hover:bg-blue-600 rounded-lg font-medium transition-all duration-300">
            Sign Up with Google
          </button>
          <button className="flex-1 py-2 bg-gray-800/70 hover:bg-gray-800 rounded-lg font-medium transition-all duration-300">
            GitHub
          </button>
        </div>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-100 mt-6">
          Already have an account?{" "}
          <a href="/login" className="font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
