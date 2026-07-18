"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Logging in with:", {
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white text-black border-4 border-black p-8 rounded-none shadow-none">
        <h1 className="text-3xl font-bold text-center mb-2 drop-shadow-lg">
          Welcome Back
        </h1>

        <p className="text-center mb-8">
          Login to continue to <span className="font-semibold">MyBrand</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-200 border border-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-200 border border-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-black border border-black"
              />
              <span>Remember me</span>
            </label>

            <Link href="/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-black" />
          <span className="px-3 text-sm">or</span>
          <div className="flex-1 border-t border-black" />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 py-2 border border-black hover:bg-gray-200">
            Login with Google
          </button>

          <button className="flex-1 py-2 bg-black text-white hover:bg-gray-800">
            GitHub
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link href="/sign-up" className="font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
