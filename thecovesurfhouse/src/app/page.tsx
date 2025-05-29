"use client";
import { motion } from "framer-motion";

const WaveSVG = ({ className = "" }) => (
  <svg viewBox="0 0 1440 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="var(--color-ocean)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
  </svg>
);

const LogoSVG = () => (
  <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center font-sans">
      {/* Top Ocean Wave SVG */}
      <div className="w-full overflow-hidden">
        <WaveSVG className="w-full h-24 md:h-32" />
      </div>
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col items-center justify-center py-16 bg-[var(--color-sunset)] text-white shadow-lg mb-8 relative z-10 -mt-8"
      >
        <LogoSVG />
        <h1 className="text-5xl font-bold tracking-tight mb-2 drop-shadow-lg text-center">Escape to a World of Surf & Bliss</h1>
        <p className="text-lg font-medium mb-6 max-w-xl text-center drop-shadow-md">
          Your beachside escape for surfers, dreamers, and ocean lovers. Wake up to the sound of waves and live the surf lifestyle.
        </p>
        <a
          href="#book"
          className="mt-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-sunset)] font-bold shadow hover:bg-[var(--color-sand)] transition text-lg"
        >
          Book Your Stay
        </a>
      </motion.header>

      {/* Find Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col items-center justify-center py-8 mb-8"
      >
        <h2 className="text-2xl font-bold mb-2 text-[var(--color-ocean)]">Find Us</h2>
        <a
          href="https://www.google.com/maps/place/The+Cove+surf+house/@30.5146357,-9.6818656,17z/data=!3m1!4b1!4m9!3m8!1s0xdb3b3004e354607:0xad148f313b7867a!5m2!4m1!1i2!8m2!3d30.5146357!4d-9.6818656!16s%2Fg%2F11m71zfwzn?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-sunset)] font-bold shadow hover:bg-[var(--color-sand)] transition"
        >
          View on Google Maps
        </a>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
      >
        {[
          { icon: "🏄‍♂️", title: "Surfboard Rentals", desc: "Boards for all levels, ready for your next wave." },
          { icon: "🔥", title: "Beach Bonfires", desc: "Nightly bonfires & BBQs for guests." },
          { icon: "🧘‍♀️", title: "Yoga Mornings", desc: "Start your day with sunrise yoga on the sand." },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-[var(--color-ocean)] text-[var(--color-sand)] rounded-xl shadow-lg p-8 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl mb-4">{f.icon}</span>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-center">{f.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Rooms Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl px-4 py-12 mb-8"
      >
        <h2 className="text-3xl font-bold text-[var(--color-sunset)] mb-8 text-center">Our Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Shared Dorm", price: "$25/night", img: "https://source.unsplash.com/400x300/?hostel,bed" },
            { name: "Private Room", price: "$60/night", img: "https://source.unsplash.com/400x300/?surf,room" },
            { name: "Ocean View Suite", price: "$120/night", img: "https://source.unsplash.com/400x300/?beach,room" },
          ].map((room, i) => (
            <motion.div
              key={room.name}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={room.img} alt={room.name} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col items-center">
                <h3 className="font-bold text-lg mb-2 text-[var(--color-ocean)]">{room.name}</h3>
                <span className="text-[var(--color-sunset)] font-semibold">{room.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl px-4 py-12 mb-8"
      >
        <h2 className="text-3xl font-bold text-[var(--color-ocean)] mb-8 text-center">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Alex", text: "The best surf hostel I've ever stayed at! Amazing vibes and right by the beach." },
            { name: "Samira", text: "Loved the yoga mornings and the community dinners. Will come back!" },
            { name: "Jonas", text: "Super clean, friendly staff, and the bonfires were a highlight." },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-[var(--color-sand)] text-[var(--color-ocean)] rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">“{t.text}”</p>
              <span className="font-bold">- {t.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl px-4 py-12 mb-8"
      >
        <h2 className="text-3xl font-bold text-[var(--color-sunset)] mb-8 text-center">Latest News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Surf Camp 2024", desc: "Join our summer surf camp for all levels!", date: "June 2024" },
            { title: "Beach Cleanup", desc: "Help us keep our beach beautiful. Volunteers welcome!", date: "Every Sunday" },
            { title: "Live Music Nights", desc: "Enjoy live music by local artists every Friday.", date: "Fridays" },
          ].map((n, i) => (
            <motion.div
              key={n.title}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[var(--color-accent)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-2 text-[var(--color-ocean)]">{n.title}</h3>
              <p className="mb-2">{n.desc}</p>
              <span className="text-sm text-[var(--color-sunset)]">{n.date}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Instagram Photo Grid Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl px-4 py-12"
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-[var(--color-sunset)]">Life at The Cove</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 rounded-xl overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square bg-[var(--color-sand)] flex items-center justify-center"
            >
              <span className="text-[var(--color-ocean)] font-bold text-xl">🌊</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[var(--color-ocean)] mt-4">Follow us on Instagram @thecovesurfhouse</p>
      </motion.section>

      {/* Bottom Ocean Wave SVG */}
      <div className="w-full overflow-hidden rotate-180 mt-8">
        <WaveSVG className="w-full h-24 md:h-32" />
      </div>

      {/* Footer */}
      <footer className="w-full py-6 mt-8 bg-[var(--color-sand)] text-[var(--color-ocean)] text-center text-sm">
        &copy; {new Date().getFullYear()} thecovesurfhouse. All rights reserved.
      </footer>
    </div>
  );
}
