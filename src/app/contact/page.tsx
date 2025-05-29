"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const WaveSVG = ({ className = "" }) => (
  <svg viewBox="0 0 1440 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="var(--color-ocean)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
  </svg>
);

const MAPS_URL = "https://www.google.com/maps/place/The+Cove+surf+house/@30.5146357,-9.6818656,17z/data=!3m1!4b1!4m9!3m8!1s0xdb3b3004e354607:0xad148f313b7867a!5m2!4m1!1i2!8m2!3d30.5146357!4d-9.6818656!16s%2Fg%2F11m71zfwzn?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D";
const ADDRESS = "The Cove Surfhouse, 30.5146357, -9.6818656, Tamraght, Morocco";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center py-0 px-4">
      {/* Top Ocean Wave SVG */}
      <div className="w-full overflow-hidden">
        <WaveSVG className="w-full h-24 md:h-32" />
      </div>
      {/* Map & Address Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg w-full bg-[var(--color-ocean)] rounded-xl shadow-lg p-8 mb-8 border border-[var(--color-sand)] flex flex-col items-center text-[var(--color-sand)]"
      >
        <FaMapMarkerAlt className="text-4xl mb-2 text-[var(--color-accent)] animate-bounce" />
        <h2 className="text-2xl font-bold mb-2">Find Us</h2>
        <p className="mb-2 text-center font-medium">{ADDRESS}</p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-sunset)] font-bold shadow hover:bg-[var(--color-sand)] transition"
        >
          View on Google Maps
        </a>
        <div className="w-full mt-4 rounded-lg overflow-hidden shadow-lg border border-[var(--color-sand)]">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=30.5146357,-9.6818656&z=15&output=embed"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>
      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="max-w-lg w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[var(--color-sand)]"
      >
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-sunset)]">Contact Us</h1>
        <p className="mb-6 text-lg">Have a question or want to book your stay? Send us a message!</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-[var(--color-sand)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border border-[var(--color-sand)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-2 rounded border border-[var(--color-sand)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]"
            required
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-sunset)] font-bold shadow hover:bg-[var(--color-sand)] transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>
      {/* Bottom Ocean Wave SVG */}
      <div className="w-full overflow-hidden rotate-180 mt-8">
        <WaveSVG className="w-full h-24 md:h-32" />
      </div>
    </main>
  );
} 