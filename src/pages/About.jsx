import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Factory,
  Heart,
  Users,
  Clock,
  MapPin
} from 'lucide-react'

const stats = [
  { icon: MapPin, label: 'Locations in Kathmandu', value: '2' },
  { icon: ShieldCheck, label: 'Halal Every Day', value: '100%' },
  { icon: Factory, label: 'In-House Production', value: 'All' },
  { icon: Clock, label: 'Opens Daily', value: '7AM' }
]

function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <stat.icon size={32} className="text-[#C8841A] mx-auto mb-2" />
      <p className="font-playfair text-5xl text-[#C8841A] font-bold">{stat.value}</p>
      <p className="text-[#FDF8F0]/80 text-sm mt-1">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] dark:bg-[#1A1008] transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-[#1A2E1A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl text-[#FDF8F0] mb-2"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-dancing text-2xl text-[#C8841A]"
          >
            Baked with heart, served with love
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f"
                alt="Fresh Bake Factory"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-6">
                Why We Bake
              </h2>
              <div className="space-y-4 text-[#5C3317] dark:text-[#FDF8F0]/80">
                <p>
                  At Fresh Bake Factory Outlet, we believe everyone deserves fresh, high quality halal baked goods at affordable prices. Starting from our Nayabazar factory, we produce everything in-house daily — from our legendary chicken pizza to our flaky chocolate danish — and bring it fresh to Thamel every morning.
                </p>
                <p>
                  No preservatives. No shortcuts. Just love.
                </p>
                <p>
                  We put our heart and soul into every bake, with a meticulous eye for detail, flavor, and quality. Halal certified, tourist-loved, locally rooted.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-16 bg-[#FAF4E8] dark:bg-[#1A1008] px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] text-center mb-12"
          >
            What We Stand For
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#2D6A2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} className="text-[#2D6A2D]" />
              </div>
              <h3 className="font-playfair text-xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-3">
                100% Halal
              </h3>
              <p className="text-[#5C3317] dark:text-[#FDF8F0]/70 text-sm">
                Every single ingredient and process is halal certified. Always. No exceptions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#C8841A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory size={32} className="text-[#C8841A]" />
              </div>
              <h3 className="font-playfair text-xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-3">
                Factory Fresh
              </h3>
              <p className="text-[#5C3317] dark:text-[#FDF8F0]/70 text-sm">
                We produce everything in our Nayabazar factory and bring it fresh to Thamel daily. No middlemen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#C8841A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-[#C8841A]" />
              </div>
              <h3 className="font-playfair text-xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-3">
                Affordable Quality
              </h3>
              <p className="text-[#5C3317] dark:text-[#FDF8F0]/70 text-sm">
                Best pastries and coffee in Thamel — at prices that respect your budget. Always.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Halal Certificate Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2E1A] rounded-2xl p-10 text-center"
          >
            <ShieldCheck size={64} className="text-[#2D6A2D] mx-auto mb-4" />
            <h3 className="font-playfair text-3xl text-[#FDF8F0] mb-4">
              Halal Certified
            </h3>
            <p className="text-[#FDF8F0]/90 text-lg max-w-2xl mx-auto">
              All products, ingredients and processes at Fresh Bake Factory Outlet are 100% Halal certified. Safe and trusted for our Muslim customers and all guests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#FAF4E8] dark:bg-[#1A1008] px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-2">
              Meet Our Team
            </h2>
            <p className="font-dancing text-xl text-[#C8841A]">
              The faces behind your favourite bakes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-24 h-24 bg-[#C8841A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={48} className="text-[#C8841A]" />
              </div>
              <h3 className="font-playfair text-xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                Aashim
              </h3>
              <p className="text-[#5C3317] dark:text-[#FDF8F0]/70 text-sm italic">
                "Hardworking and dedicated"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-24 h-24 bg-[#C8841A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={48} className="text-[#C8841A]" />
              </div>
              <h3 className="font-playfair text-xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                Babeen
              </h3>
              <p className="text-[#5C3317] dark:text-[#FDF8F0]/70 text-sm italic">
                "Incredibly friendly and welcoming"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2C1810] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}