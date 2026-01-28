'use client';

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-linear-to-t from-base-100  to-base-200">
      
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-base-content leading-tight">
          Stay Organized.
          <span className="block text-primary ">Stay Happy.</span>
        </h1>

        <p className="py-6 text-lg text-base-content/70">
          A secure, drag & drop todo app to keep your life simple, focused, and stress-free.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/todos" className="btn btn-primary">
            Get Started
          </Link>
          <Link href="/signup" className="btn btn-outline">
            Create Account
          </Link>
        </div>
      </div>
      
    </section>
  );
}
