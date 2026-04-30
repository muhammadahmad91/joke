"use client";
import { useState } from "react";
import JokeBox from "@/components/JokeBox";
import Result from "@/components/Result";

export default function Home() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async (topic: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/joke", {
        method: "POST",
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      setJoke(data.joke);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      
      <div className="z-10 text-center">
        <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-tight">
          Hansi Ka Pitara 🎭
        </h1>
        <p className="text-lg text-gray-400 mb-10 font-medium">
          Topic likho aur thora muskurao, tension free ho jao! 😂✨
        </p>

        <div className="flex flex-col items-center gap-6">
          <JokeBox onGenerate={fetchJoke} loading={loading} />
          <Result joke={joke} />
        </div>
      </div>
    </main>
  );
}
