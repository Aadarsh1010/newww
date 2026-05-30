import { motion } from 'framer-motion'
import { Heart, ShieldCheck, Users, Award, Clock, MapPin, Phone, ChefHat, UserCheck, BadgeCheck, Factory } from 'lucide-react'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-soft-ivory to-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-golden-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-golden-amber" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-deep-forest mb-4">
              Our Story
            </h1>
            <p className="font-dancing text-2xl text-golden-amber mb-4">
              Fresh Baked. Pure Halal. Pure Love.
            </p>
            <p className="text-warm-brown text-lg">
              From our hearts to your table, we bring you the finest European-style bakery experience in Kathmandu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-golden-amber/20 to-warm-brown/20 rounded-3xl p-12 flex items-center justify-center aspect-square max-w-md mx-auto">
                <div className="w-48 h-48 bg-golden-amber/30 rounded-full flex items-center justify-center">
                  <Factory className="w-24 h-24 text-golden-amber/60" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-golden-amber font-medium tracking-wider uppercase text-sm mb-4">
                Who We Are
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deep-forest mb-6">
                A Passion for Perfect Baking
              </h2>
              <p className="text-warm-espresso/80 mb-4 leading-relaxed">
                Fresh Bake Factory Outlet was born from a simple dream: to bring authentic European-style bakery delights to the heart of Nepal, all while maintaining the highest standards of halal certification.
              </p>
              <p className="text-warm-espresso/80 mb-6 leading-relaxed">
                Located in the vibrant streets of Thamel, our bakery has become a beloved destination for travelers from around the world and locals alike. Every morning, our skilled bakers wake before dawn to prepare fresh bread, pastries, and our signature dishes that keep our customers coming back.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-amber/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-golden-amber" />
                </div>
                <div>
                  <p className="font-semibold text-deep-forest">100% Halal Certified</p>
                  <p className="text-sm text-warm-brown">Quality you can trust</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-golden-amber font-medium tracking-wider uppercase text-sm mb-4"
            >
              What We Believe
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-4xl font-bold text-deep-forest mb-4"
            >
              Our Core Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Made with Love', desc: 'Every item is crafted with passion and care' },
              { icon: ShieldCheck, title: 'Pure & Halal', desc: '100% halal certified ingredients' },
              { icon: Clock, title: 'Always Fresh', desc: 'Baked fresh daily, every single day' },
              { icon: Award, title: 'Premium Quality', desc: 'European bakery standards' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-golden-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-golden-amber" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-deep-forest mb-3">{value.title}</h3>
                <p className="text-warm-brown text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-golden-amber font-medium tracking-wider uppercase text-sm mb-4"
            >
              The People Behind
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-4xl font-bold text-deep-forest mb-4"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-warm-brown text-lg max-w-2xl mx-auto"
            >
              A passionate team of bakers and hospitality professionals dedicated to serving you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Master Bakers', role: 'Expert bakers with years of experience', icon: ChefHat },
              { name: 'Front of House', role: 'Friendly staff to serve you with a smile', icon: UserCheck },
              { name: 'Quality Team', role: 'Ensuring every item meets our standards', icon: BadgeCheck }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-24 h-24 bg-golden-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-12 h-12 text-golden-amber" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-deep-forest mb-2">{member.name}</h3>
                <p className="text-warm-brown text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 bg-deep-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl font-bold text-cream-white mb-4"
          >
            Come Visit Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cream-white/80 text-lg mb-8"
          >
            Experience the warmth of our bakery and taste the difference fresh baking makes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto"
          >
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-golden-amber rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-cream-white">Thamel Store</h3>
              </div>
              <p className="text-cream-white/80 text-sm mb-3">
                Thamel Marg, 100m from Tridevi Sadak T-junction, Ward 26, Kathmandu 44600
              </p>
              <div className="flex items-center gap-2 text-golden-amber text-sm">
                <Phone className="w-4 h-4" />
                <span>+977 988-716-5566</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-warm-brown rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-cream-white">Nayabazar Factory</h3>
              </div>
              <p className="text-cream-white/80 text-sm mb-3">
                Nayabazar, Kathmandu
              </p>
              <div className="flex items-center gap-2 text-golden-amber text-sm">
                <Phone className="w-4 h-4" />
                <span>+977 988-716-5566</span>
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-cream-white/60 flex items-center justify-center gap-2"
          >
            <Clock className="w-5 h-5 text-golden-amber" />
            Open daily from 7:00 AM to 8:00 PM
          </motion.p>
        </div>
      </section>
    </>
  )
}