import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import FeaturedItems from '../components/FeaturedItems'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import LocationBadge from '../components/LocationBadge'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedItems />
      <Features />
      <Testimonials />
      
      {/* Visit Us Section */}
      <section className="py-20 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-golden-amber font-medium tracking-wider uppercase text-sm mb-4"
            >
              Find Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-4xl md:text-5xl font-bold text-deep-forest mb-4"
            >
              Visit Our Locations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-warm-brown text-lg max-w-2xl mx-auto"
            >
              Find us easily in the heart of Kathmandu. Both locations open daily for you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Thamel Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-golden-amber rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-deep-forest">Thamel Store</h3>
                  <p className="text-golden-amber font-medium">Main Branch</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-golden-amber flex-shrink-0 mt-0.5" />
                  <p className="text-warm-espresso">
                    Thamel Marg, 100m from Tridevi Sadak T-junction, Ward 26, Kathmandu 44600
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-golden-amber" />
                  <a href="tel:+9779887165566" className="text-warm-espresso hover:text-golden-amber transition-colors">
                    +977 988-716-5566
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-golden-amber" />
                  <span className="text-warm-espresso">7:00 AM - 8:00 PM Daily</span>
                </div>
              </div>
            </motion.div>

            {/* Nayabazar Factory */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-cream-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-warm-brown rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-deep-forest">Nayabazar Factory</h3>
                  <p className="text-warm-brown font-medium">Production Outlet</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-warm-brown flex-shrink-0 mt-0.5" />
                  <p className="text-warm-espresso">
                    Nayabazar, Kathmandu
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-warm-brown" />
                  <a href="tel:+9779887165566" className="text-warm-espresso hover:text-warm-brown transition-colors">
                    +977 988-716-5566
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-warm-brown" />
                  <span className="text-warm-espresso">7:00 AM - 8:00 PM Daily</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-deep-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl font-bold text-cream-white mb-4"
          >
            Ready to Taste the Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cream-white/80 text-lg mb-8"
          >
            Order online and get your favorite treats delivered or pick up in-store.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+9779887165566"
              className="bg-golden-amber text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Call to Order
            </a>
            <a
              href="https://wa.me/9779887165566"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-halal-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}