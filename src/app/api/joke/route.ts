import { model } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    const prompt = `Write a funny, short, and creative joke about ${topic || 'programming'}. Keep it clean.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ joke: text });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch joke" }, { status: 500 });
  }
}
