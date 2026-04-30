"use client";
import { useState } from "react";

interface JokeBoxProps {
  onGenerate: (topic: string) => void;
  loading: boolean;
}

export default function JokeBox({ onGenerate, loading }: JokeBoxProps) {
  const [topic, setTopic] = useState("");

  return (
    <div className="flex flex-col gap-5 w-full max-w-md">
      <input
        type="text"
        placeholder="Kis bare mein joke chahiye? (e.g. Shadi, Study...)"
        className="px-5 py-4 rounded-2xl bg-white/5 border-2 border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-center"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      
      <button
        onClick={() => onGenerate(topic)}
        disabled={loading || !topic}
        className="group relative px-8 py-4 bg-white text-black font-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-purple-500/40"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <>Sabar kero, joke dhoond raha hoon... 🕵️‍♂️</>
          ) : (
            <>Batao Jaldi! 🚀🔥</>
          )}
        </span>
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 'bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
}
