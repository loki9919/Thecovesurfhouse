"use client";
import { motion } from "framer-motion";

const WaveSVG = ({ className = "" }) => (
  <svg viewBox="0 0 1440 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="var(--color-ocean)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
  </svg>
);

const images = Array.from({ length: 12 }, (_, i) => `https://source.unsplash.com/400x400/?surf,beach,ocean&sig=${i}`);

export default function Gallery() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center py-0 px-4">
      {/* Top Ocean Wave SVG */}
      <div className="w-full overflow-hidden">
        <WaveSVG className="w-full h-24 md:h-32" />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-sunset)]">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
      {/* Bottom Ocean Wave SVG */}
      <div className="w-full overflow-hidden rotate-180 mt-8">
        <WaveSVG className="w-full h-24 md:h-32" />
      </div>
    </main>
  );
} 