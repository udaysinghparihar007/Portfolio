"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2 drop-shadow-lg">
          Forgot Password
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Enter your registered email to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-100">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white/30 hover:bg-white/50 rounded-lg font-semibold text-white transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="w-1/3 border-t border-white/40"></span>
          <span className="px-3 text-gray-100 text-sm">or</span>
          <span className="w-1/3 border-t border-white/40"></span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-3 text-center">
          <Link
            href="/login"
            className="py-2 bg-white/20 hover:bg-white/40 rounded-lg transition-all duration-300"
          >
            Back to Login
          </Link>
          <Link
            href="/sign-up"
            className="py-2 bg-transparent border border-white/40 hover:bg-white/20 rounded-lg transition-all duration-300"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
}
