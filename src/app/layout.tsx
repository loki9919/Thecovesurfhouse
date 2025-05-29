import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cove Surfhouse",
  description: "Beachside hostel for surfers and ocean lovers.",
};

const LogoSVG = () => (
  <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="circleClip">
        <circle cx="100" cy="100" r="100"/>
      </clipPath>
    </defs>
    <g clipPath="url(#circleClip)">
      <rect x="0" y="0" width="200" height="200" fill="#B85948"/>
      <circle cx="100" cy="50" r="24" fill="#FFFFFF"/>
      <circle cx="100" cy="50" r="19" fill="#F7941E"/>
      <path d="M0,150 Q100,162 200,150 L200,200 L0,200 Z" fill="#006A6A"/>
      <path d="M-5,165 C35,105 65,78 125,122 C105,142 55,160 -5,170 Z" fill="#FFFFFF"/>
      <path d="M-5,160 C35,110 63,83 120,122 C102,139 55,155 -5,165 Z" fill="#008080"/>
      <path d="M45,172 C75,125 115,118 155,142 C135,157 90,170 45,177 Z" fill="#FFFFFF"/>
      <path d="M50,168 C75,130 110,123 150,142 C133,154 88,165 50,172 Z" fill="#008080"/>
      <path d="M165,92 C150,120 148,160 152,198 L178,198 C182,160 180,120 165,92 Z" fill="#FFFFFF"/>
      <path d="M165,96 C153,123 151.5,160 155,195 L175,195 C178.5,160 177,123 165,96 Z" fill="#A08C5B"/>
      <path d="M164,98 C163.5,130 163.5,160 164,195 L166,195 C166.5,160 166.5,130 166,98 Z" fill="#6D6142"/>
      <path d="M100,175 C120,140 140,128 200,138 L200,175 Z" fill="#FFFFFF"/>
      <path d="M105,172 C123,145 142,132 197,140 L197,172 Z" fill="#008080"/>
      <path d="M190,118 C180,92 150,88 130,102 C118,112 122,138 140,148 C155,156 180,148 193,128 C198,124 195,118 190,118Z" fill="#FFFFFF"/>
      <path d="M184,120 C176,100 154,98 138,107 C128,115 130,136 143,143 C154,149 176,144 186,127 C190,123 189,120 184,120Z" fill="#008080"/>
      <path d="M155,122 C151,121 148,123 148,127 C148,131 152,133 156,131 C159,129 159,124 155,122Z" fill="#FFFFFF"/>
    </g>
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 w-full bg-[var(--color-sunset)] shadow-lg flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoSVG />
            <span className="text-xl font-bold text-white tracking-wide">thecovesurfhouse</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-white font-medium hover:text-[var(--color-accent)] transition">Home</Link>
            <Link href="/about" className="text-white font-medium hover:text-[var(--color-accent)] transition">About</Link>
            <Link href="/gallery" className="text-white font-medium hover:text-[var(--color-accent)] transition">Gallery</Link>
            <Link href="/contact" className="text-white font-medium hover:text-[var(--color-accent)] transition">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
