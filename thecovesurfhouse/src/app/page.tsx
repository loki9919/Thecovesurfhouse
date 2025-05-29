import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="The Cove Surf House"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">The Cove Surf House</h1>
          <p className="text-xl md:text-2xl mb-8">Your perfect surf getaway</p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Welcome to Paradise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Experience the perfect blend of luxury and surf culture at The Cove Surf House. 
                Nestled in a prime location, we offer world-class surfing spots and comfortable accommodations.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a seasoned surfer or just starting out, our expert instructors and 
                perfect waves will make your stay unforgettable.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/about-image.jpg"
                alt="Surf House View"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Surf Lessons</h3>
              <p className="text-gray-600">
                Professional instructors for all skill levels, from beginners to advanced surfers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Luxury Accommodations</h3>
              <p className="text-gray-600">
                Comfortable rooms with ocean views and modern amenities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Surf Equipment</h3>
              <p className="text-gray-600">
                High-quality surfboards and gear available for rent or purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 