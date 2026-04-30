"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      {/* Glassy Container */}
      <div className="w-full max-w-6xl backdrop-blur-md bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="'bg-gradient-to-tr from-purple-600 to-pink-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-xl">🤖</span>
          </div>
          <span className="text-xl font-black bg-clip-text text-transparent 'bg-gradient-to-r from-white to-gray-400">
            AI <span className="text-purple-400">Joke</span> Generator
          </span>
        </Link>

        {/* Right Side - Badge/Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-green-500 uppercase tracking-widest">AI Online</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
