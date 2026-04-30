import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar import ho gayi

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Joke Generator",
  description: "Duniya ka sab se funny AI joke generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617]">
        {/* Navbar yahan add kar di hai */}
        <Navbar />
        
        {/* Children (pages) ke liye thora top margin diya hai taake navbar ke niche na chup jayein */}
        <div className="pt-20 'flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
