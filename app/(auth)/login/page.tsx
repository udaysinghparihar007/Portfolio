"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Logging in with:", {
      email,
      password,
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-center mb-2 drop-shadow-lg">Welcome Back</h1>
        <p className="text-center text-gray-200 mb-8">
          Login to continue to <span className="font-semibold">MyBrand</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-100">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-100">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-white bg-white/20"
              />
              <span>Remember me</span>
            </label>
            <Link href="/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-white/30 hover:bg-white/50 rounded-lg font-semibold text-white transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="w-1/3 border-t border-white/40"></span>
          <span className="px-3 text-gray-100 text-sm">or</span>
          <span className="w-1/3 border-t border-white/40"></span>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-2 bg-blue-600/70 hover:bg-blue-600 rounded-lg font-medium transition-all duration-300">
            Login with Google
          </button>
          <button className="flex-1 py-2 bg-gray-800/70 hover:bg-gray-800 rounded-lg font-medium transition-all duration-300">
            GitHub
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-100 mt-6">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
