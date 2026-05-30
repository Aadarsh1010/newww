import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-soft-ivory to-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-golden-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-golden-amber" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-deep-forest mb-4">
              Contact Us
            </h1>
            <p className="text-warm-brown text-lg max-w-2xl mx-auto">
              Have questions or feedback? We&apos;d love to hear from you. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="font-playfair text-2xl font-bold text-deep-forest mb-6">Send us a message</h2>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-halal-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-deep-forest mb-2">Message Sent!</h3>
                  <p className="text-warm-brown">We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-warm-espresso mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-soft-ivory rounded-xl border border-transparent focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-warm-espresso mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-soft-ivory rounded-xl border border-transparent focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-warm-espresso mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-soft-ivory rounded-xl border border-transparent focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                      placeholder="+977 98XXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-warm-espresso mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-soft-ivory rounded-xl border border-transparent focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-golden-amber text-white py-4 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Thamel Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-golden-amber rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-deep-forest mb-2">Thamel Store</h3>
                    <p className="text-warm-brown text-sm mb-3">Main Branch</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-golden-amber flex-shrink-0 mt-0.5" />
                        <p className="text-warm-espresso text-sm">
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
                  </div>
                </div>
              </div>

              {/* Nayabazar Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-warm-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-deep-forest mb-2">Nayabazar Factory</h3>
                    <p className="text-warm-brown text-sm mb-3">Production Outlet</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-warm-brown flex-shrink-0 mt-0.5" />
                        <p className="text-warm-espresso text-sm">Nayabazar, Kathmandu</p>
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
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-deep-forest rounded-2xl p-6 text-cream-white">
                <h3 className="font-playfair text-lg font-bold mb-4">Quick Connect</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+9779887165566"
                    className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-golden-amber rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-cream-white/70">Call Us</p>
                      <p className="font-medium">+977 988-716-5566</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/9779887165566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-halal-green rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-cream-white/70">WhatsApp</p>
                      <p className="font-medium">Chat with us</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/fresh_bake.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-cream-white/70">Instagram</p>
                      <p className="font-medium">@fresh_bake.np</p>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/freshbake.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-cream-white/70">Facebook</p>
                      <p className="font-medium">@freshbake.np</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl font-bold text-deep-forest mb-4"
            >
              Find Us on the Map
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-warm-brown"
            >
              Visit us in the heart of Thamel, Kathmandu
            </motion.p>
          </div>
          
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-deep-forest/20 to-halal-green/20 rounded-3xl p-16 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-golden-amber mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-deep-forest mb-2">Thamel, Kathmandu</h3>
              <p className="text-warm-brown">On Thamel Marg, 100m from Tridevi Sadak T-junction</p>
              <a
                href="https://maps.google.com/?q=Thamel+Marg+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-golden-amber text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}