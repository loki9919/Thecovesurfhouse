"use client";
import { motion } from "framer-motion";
import { FaUsers, FaLeaf, FaWater, FaSmile } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[var(--color-ocean)] via-[var(--color-sand)] to-[var(--background)] text-[var(--foreground)] flex flex-col items-center py-0 px-0">
      {/* Ocean Wave SVG */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-32 md:h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-ocean)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full bg-white/90 rounded-xl shadow-2xl p-8 mb-8 border border-[var(--color-sand)] relative z-10 -mt-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-ocean)] flex items-center gap-2">
          <FaWater className="text-[var(--color-sunset)] animate-pulse" /> About The Cove Surfhouse
        </h1>
        <p className="mb-4 text-lg">
          The Cove Surfhouse is your home by the ocean, created for surfers, dreamers, and explorers. Our mission is to foster a vibrant, inclusive community where everyone can experience the magic of the waves and the warmth of shared stories.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[var(--color-ocean)]/90 rounded-xl p-6 mb-6 text-[var(--color-sand)] shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaLeaf className="text-[var(--color-accent)]" /> Our Values
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-2"><FaUsers className="text-xl text-[var(--color-accent)]" /> Community & Connection</li>
            <li className="flex items-center gap-2"><FaLeaf className="text-xl text-[var(--color-accent)]" /> Respect for Nature</li>
            <li className="flex items-center gap-2"><FaWater className="text-xl text-[var(--color-accent)]" /> Adventure & Growth</li>
            <li className="flex items-center gap-2"><FaSmile className="text-xl text-[var(--color-accent)]" /> Chill Vibes Only</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--color-sand)] to-[var(--color-accent)] rounded-xl p-6 text-[var(--color-ocean)] shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaUsers className="text-[var(--color-ocean)]" /> Meet the Team
          </h2>
          <p>
            Our team is a mix of local surfers, world travelers, and passionate hosts. We can&apos;t wait to welcome you to our slice of paradise!
          </p>
        </motion.div>
      </motion.section>
      {/* Ocean bottom wave */}
      <div className="w-full overflow-hidden rotate-180 -mt-16">
        <svg viewBox="0 0 1440 320" className="w-full h-32 md:h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-ocean)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
    </main>
  );
} 