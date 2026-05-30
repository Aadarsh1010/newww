import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Clock,
  Factory,
  MessageCircle,
  Facebook,
  Instagram,
  ExternalLink,
  Send
} from 'lucide-react'

const subjects = [
  'Order Enquiry',
  'Custom Cake',
  'General',
  'Collaboration',
  'Other'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Order Enquiry',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello Fresh Bake!

Name: ${formData.name}
Phone/WhatsApp: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ''}
Subject: ${formData.subject}

Message:
${formData.message}`

    const whatsappUrl = `https://wa.me/9779887165566?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

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
            Find Us in Kathmandu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-dancing text-2xl text-[#C8841A]"
          >
            Two locations — always fresh
          </motion.p>
        </div>
      </section>

      {/* Two Location Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Thamel Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="bg-[#1A2E1A] px-6 py-4">
                <h2 className="font-playfair text-2xl text-[#FDF8F0] flex items-center gap-3">
                  <MapPin size={24} className="text-[#C8841A]" />
                  Thamel
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#C8841A] mt-1 flex-shrink-0" />
                    <p className="text-[#5C3317] dark:text-[#FDF8F0]/80 text-sm">
                      Thamel Marg, 100m from Tridevi Sadak T-junction, Ward 26, Kathmandu 44600
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#C8841A]" />
                    <a href="tel:+9779887165566" className="text-[#5C3317] dark:text-[#FDF8F0]/80 hover:text-[#C8841A]">
                      +977 988-716-5566
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#C8841A]" />
                    <p className="text-[#5C3317] dark:text-[#FDF8F0]/80">
                      Open 7:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-xl overflow-hidden h-48 mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=27.7157,85.3108&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thamel Location"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/Fresh+Bake+Factory+Outlet+Thamel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#C8841A] text-[#1A2E1A] py-3 rounded-xl font-semibold hover:brightness-110 transition-all"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Nayabazar Factory Outlet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="bg-[#1A2E1A] px-6 py-4">
                <h2 className="font-playfair text-2xl text-[#FDF8F0] flex items-center gap-3">
                  <Factory size={24} className="text-[#C8841A]" />
                  Nayabazar Factory Outlet
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#C8841A] mt-1 flex-shrink-0" />
                    <p className="text-[#5C3317] dark:text-[#FDF8F0]/80 text-sm">
                      Nayabazar, Kathmandu
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Factory size={18} className="text-[#C8841A]" />
                    <p className="text-[#5C3317] dark:text-[#FDF8F0]/80">
                      Factory Outlet — freshest stock here
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#C8841A]" />
                    <p className="text-[#5C3317] dark:text-[#FDF8F0]/80">
                      Open 7:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-xl overflow-hidden h-48 mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=27.7230,85.3120&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nayabazar Location"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/Fresh+Bake+Factory+Outlet+Nayabazar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#C8841A] text-[#1A2E1A] py-3 rounded-xl font-semibold hover:brightness-110 transition-all"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions Card for Tourists */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2E1A] rounded-2xl p-8 text-center"
          >
            <MapPin size={48} className="text-[#C8841A] mx-auto mb-4" />
            <h3 className="font-playfair text-2xl text-[#FDF8F0] mb-4">
              Finding Us in Thamel
            </h3>
            <p className="text-[#FDF8F0]/90 max-w-xl mx-auto leading-relaxed">
              Enter Thamel via Tridevi Sadak. When you reach the T-junction at Thamel Marg, TURN LEFT. We are 100 metres on the right. Look for the Fresh Bake sign — the bakery everyone keeps telling you about!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Quick Contact */}
      <section className="py-16 bg-[#FAF4E8] dark:bg-[#1A1008] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#2C1810] dark:text-[#FDF8F0]"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#2C1810] dark:text-[#FDF8F0]"
                      placeholder="+977 98XXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#2C1810] dark:text-[#FDF8F0]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#2C1810] dark:text-[#FDF8F0]"
                  >
                    {subjects.map((subj) => (
                      <option key={subj} value={subj}>{subj}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#2C1810] dark:text-[#FDF8F0] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-[#C8841A] text-[#1A2E1A] py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-6">
                Quick Contact
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:+9779887165566"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-[#2C1810] rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#C8841A]/10 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-[#C8841A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70">Call Us</p>
                    <p className="font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">+977 988-716-5566</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/9779887165566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-[#2C1810] rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <MessageCircle size={24} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70">WhatsApp</p>
                    <p className="font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">Message Us</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/freshbake.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-[#2C1810] rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#1877F2]/10 rounded-full flex items-center justify-center">
                    <Facebook size={24} className="text-[#1877F2]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70">Facebook</p>
                    <p className="font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">facebook.com/freshbake.np</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/fresh_bake.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-[#2C1810] rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70">Instagram</p>
                    <p className="font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">@fresh_bake.np</p>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="mt-8 p-6 bg-[#1A2E1A] rounded-xl">
                <h3 className="font-playfair text-xl text-[#FDF8F0] mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-[#C8841A]" />
                  Opening Hours
                </h3>
                <div className="space-y-2 text-[#FDF8F0]/80">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="font-semibold text-[#C8841A]">7:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}