import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck,
  X,
  MapPin,
  Clock,
  ChevronDown,
  MessageCircle,
  Factory,
  Award,
  Utensils,
  XCircle,
  BadgeCheck,
  Star,
  Flame,
  Heart,
  ShoppingBag,
  ExternalLink,
  Phone
} from 'lucide-react'

// Announcement Banner Component
function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcementDismissed')
    if (dismissed === 'true') setIsVisible(false)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('announcementDismissed', 'true')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#2D6A2D] px-4 py-2"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 relative">
            <ShieldCheck size={16} className="text-white flex-shrink-0" />
            <p className="text-[#FDF8F0] text-sm text-center">
              100% Halal Certified — Baked Fresh Daily in Thamel — Factory Outlet at Nayabazar
            </p>
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors absolute right-0"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Floating Info Card Component
function FloatingInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="absolute top-1/3 right-8 md:right-16 backdrop-blur-md bg-white/8 border border-white/15 rounded-2xl p-5"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={16} className="text-[#C8841A]" />
        <span className="text-white font-medium">Two Locations</span>
      </div>
      <p className="text-white/70 text-sm mb-4">Thamel Marg and Nayabazar</p>
      
      <div className="flex items-center gap-2">
        <Clock size={16} className="text-[#C8841A]" />
        <span className="text-white font-medium">Open from 7AM</span>
      </div>
    </motion.div>
  )
}

// Ticker Bar Component
function TickerBar() {
  const content = [
    "Freshly Baked Daily",
    "100% Halal Certified",
    "Famous Chicken Pizza",
    "Chocolate Lava Dessert",
    "Best Garlic Bread in Thamel",
    "Apple and Chocolate Danish",
    "Best Cafe Latte",
    "Thamel and Nayabazar"
  ]

  return (
    <div className="bg-[#2C1810] py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        {[...content, ...content].map((item, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="text-[#FDF8F0] text-sm font-medium tracking-wide px-8">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#C8841A]"></span>
          </span>
        ))}
      </div>
    </div>
  )
}

// Why Choose Us Cards
function WhyChooseUs() {
  const cards = [
    {
      icon: ShieldCheck,
      iconColor: '#2D6A2D',
      title: '100% Halal Certified',
      description: 'Every ingredient and every process is halal certified. Always.'
    },
    {
      icon: Factory,
      iconColor: '#C8841A',
      title: 'Factory Fresh Daily',
      description: 'Produced in our Nayabazar factory and brought fresh to Thamel every morning.'
    },
    {
      icon: Award,
      iconColor: '#C8841A',
      title: 'Best in Thamel',
      description: 'Best coffee and pastry in Thamel at prices that respect your budget.'
    },
    {
      icon: Utensils,
      iconColor: '#C8841A',
      title: 'Everything In-House',
      description: 'From cakes to croissants — no outsourcing, no preservatives, no shortcuts.'
    }
  ]

  return (
    <section className="py-20 bg-[#FAF4E8] dark:bg-[#1A1008] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-2">
            Why Thamel Loves Us
          </h2>
          <p className="font-dancing text-2xl text-[#C8841A]">In-house. Fresh. Halal.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-350 border border-transparent hover:border-[rgba(200,132,26,0.4)]"
            >
              <card.icon size={40} className="mx-auto mb-4" style={{ color: card.iconColor }} />
              <h3 className="font-playfair text-lg font-semibold text-[#1A2E1A] dark:text-[#FDF8F0] text-center mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70 text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Famous For Section
function FamousFor() {
  const items = [
    {
      name: 'Chicken Pizza',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      badge: 'BESTSELLER',
      badgeColor: '#B83232',
      icon: Flame,
      description: 'So good that guests buy it to take home on flights. Crispy base, juicy halal chicken. Legendary.'
    },
    {
      name: 'Chocolate Lava Dessert',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      badge: 'MUST TRY',
      badgeColor: '#C8841A',
      icon: Star,
      description: 'Warm, gooey chocolate center. The most talked-about dessert in Thamel.'
    },
    {
      name: 'Garlic Bread',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      badge: 'CUSTOMER FAVOURITE',
      badgeColor: '#2D6A2D',
      icon: Heart,
      description: 'Light, perfectly seasoned. The reason regulars come back again and again.'
    },
    {
      name: 'Danish Pastries',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      badge: null,
      badgeColor: null,
      icon: null,
      description: 'Apple danish, chocolate danish, cinnamon rolls — light, flaky, perfectly sweet.'
    },
    {
      name: 'Pizza Pockets',
      image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
      badge: 'GRAB AND GO',
      badgeColor: '#5C3317',
      icon: ShoppingBag,
      description: 'Hot, stuffed, incredibly affordable. Perfect for exploring Thamel.'
    },
    {
      name: 'Cafe Latte',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
      badge: 'BEST IN THAMEL',
      badgeColor: '#C8841A',
      icon: Award,
      description: 'Best coffee and pastry combo in Thamel at cheaper prices than nearby tourist cafes.'
    }
  ]

  return (
    <section className="py-20 bg-[#FDF8F0] dark:bg-[#1A1008] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-2">
            What People Cannot Stop Talking About
          </h2>
          <p className="font-dancing text-2xl text-[#C8841A]">Every item baked fresh, in-house</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-350"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-108"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-[#B83232] text-white text-xs font-bold rounded-full px-3 py-1 flex items-center gap-1">
                    {item.icon && <item.icon size={12} />}
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl font-semibold text-[#1A2E1A] dark:text-[#FDF8F0] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70 italic mt-2">
                  {item.description}
                </p>
                <Link
                  to="/menu"
                  className="block w-full mt-4 bg-[#C8841A] text-[#1A2E1A] text-center py-2 rounded-lg font-semibold hover:brightness-110 transition-all"
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Factory Section
function FactorySection() {
  return (
    <section className="bg-[#1A2E1A]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-64 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800"
            alt="Fresh Bake Factory"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-12 flex flex-col justify-center">
          <Factory size={36} className="text-[#C8841A] mb-4" />
          <h2 className="font-playfair text-3xl text-[#FDF8F0] mb-2">
            From Factory to Your Hands
          </h2>
          <p className="font-dancing text-2xl text-[#C8841A] mb-6">Straight from Nayabazar</p>
          <p className="text-[#FDF8F0]/90 text-lg mb-8">
            Everything you eat here comes straight from our Nayabazar factory outlet. No middlemen. No preservatives. Just fresh, in-house baked goodness brought to both locations daily.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Factory, text: 'In-house production daily' },
              { icon: ShieldCheck, text: '100% Halal certified' },
              { icon: XCircle, text: 'Zero preservatives' },
              { icon: BadgeCheck, text: 'Factory-direct pricing' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.icon size={18} className="text-[#C8841A]" />
                <span className="text-[#FDF8F0]">{item.text}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-block border-2 border-[#C8841A] text-[#C8841A] px-8 py-3 rounded-full font-semibold hover:bg-[#C8841A] hover:text-[#1A2E1A] transition-all duration-300 w-fit"
          >
            Visit Factory Outlet
          </Link>
        </div>
      </div>
    </section>
  )
}

// Google Reviews Section
function GoogleReviews() {
  const reviews = [
    {
      text: "Fresh Bake was recommended by our host. It is a halal bakery with scrumptious goodies. We visited daily when we were in Kathmandu. The Chicken Pizza was so good I even bought some to fly back with.",
      author: "Julz J."
    },
    {
      text: "Best coffee and pastry in Thamel and cheaper than everywhere else nearby. If you are in Thamel you have to visit this spot. Aashim and Babeen are incredibly hardworking and friendly.",
      author: "Crishtal G."
    },
    {
      text: "Very good pastries — light, not too sweet and very reasonable prices. 100 metres from Thamel Marg T-junction. Give this place a shot. I will be back for sure.",
      author: "Tinh M."
    }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-[#FAF4E8] dark:bg-[#1A1008] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-8">
            What Our Guests Say
          </h2>
          
          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-[#C8841A] fill-[#C8841A]" />
            ))}
          </div>

          {/* Review Card */}
          <div className="relative h-64 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-8"
              >
                <p className="text-[#5C3317] dark:text-[#FDF8F0]/80 text-lg italic mb-6">
                  "{reviews[current].text}"
                </p>
                <p className="text-[#1A2E1A] dark:text-[#FDF8F0] font-semibold">
                  — {reviews[current].author}
                </p>
                <p className="text-xs text-[#5C3317] dark:text-[#FDF8F0]/50 mt-1">
                  Verified Google Review
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <a
            href="https://www.google.com/maps/place/Fresh+Bake+Factory+Outlet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C8841A] font-medium hover:underline"
          >
            See All Reviews on Google
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Stats Counter Section
function StatsCounter() {
  const stats = [
    { number: '4.0', label: 'Tripadvisor Rating' },
    { number: '2', label: 'Locations in Kathmandu' },
    { number: '100%', label: 'Halal Certified' },
    { number: '7AM', label: 'Opens Daily' }
  ]

  return (
    <section className="bg-[#2C1810] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <p className="font-playfair text-6xl text-[#C8841A]">{stat.number}</p>
            <p className="text-[#FDF8F0] text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// Tourist Directions Section
function TouristDirections() {
  return (
    <section className="bg-[#FAF4E8] dark:bg-[#1A1008]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-64 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
            alt="Thamel Street"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-12 flex flex-col justify-center">
          <MapPin size={36} className="text-[#C8841A] mb-4" />
          <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-2">
            In Thamel?
          </h2>
          <p className="font-dancing text-2xl text-[#C8841A] mb-6">You Are Already Near Us</p>
          <p className="text-[#5C3317] dark:text-[#FDF8F0]/80 text-lg mb-8">
            Enter Thamel via Tridevi Sadak. At the T-junction on Thamel Marg, turn left. We are 100 metres on the right. Best pastries, affordable prices, halal certified.
          </p>
          <a
            href="https://www.google.com/maps/search/Fresh+Bake+Factory+Outlet+Thamel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8841A] text-[#1A2E1A] px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all w-fit"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}

// Call to Action Section
function CallToAction() {
  return (
    <section className="bg-[#1A2E1A] py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-playfair text-4xl text-[#FDF8F0] mb-4">
          Ready for Fresh Baked Goodness?
        </h2>
        <p className="font-dancing text-2xl text-[#C8841A] mb-8">We are waiting for you</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            className="border-2 border-[#FDF8F0] text-[#FDF8F0] px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1A2E1A] transition-all duration-300"
          >
            Explore Our Menu
          </Link>
          <a
            href="https://wa.me/9779887165566"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#C8841A] text-[#1A2E1A] px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all"
          >
            <MessageCircle size={18} />
            Order via WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  )
}

// Main Home Component
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509440159596-0249088772ff)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,46,26,0.82) 0%, rgba(44,24,16,0.70) 100%)'
          }}
        />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          {/* Element 1 - Halal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 bg-[rgba(200,132,26,0.2)] border border-[#C8841A] rounded-full px-4 py-1.5 mb-6"
          >
            <ShieldCheck size={14} className="text-[#C8841A]" />
            <span className="text-[#C8841A] text-xs font-semibold tracking-[0.15em] uppercase">
              Halal Certified
            </span>
          </motion.div>

          {/* Element 2 - Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#C8841A] text-sm tracking-[0.3em] uppercase font-medium mb-6"
          >
            Thamel's Most Loved Halal Bakery
          </motion.p>

          {/* Element 3 - Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-playfair text-7xl md:text-8xl text-[#FDF8F0] font-bold leading-tight mb-4"
          >
            Fresh Baked.
          </motion.h1>

          {/* Element 4 - Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-dancing text-5xl text-[#C8841A] mb-8"
          >
            Pure Halal. Pure Love.
          </motion.p>

          {/* Element 5 - Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-[#FDF8F0]/90 text-lg max-w-2xl mx-auto text-center mb-10"
          >
            From our Nayabazar factory to your hands — chicken pizza, chocolate lava desserts, garlic bread, danish pastries, and cafe latte. Everything baked fresh in-house, every single day.
          </motion.p>

          {/* Element 6 - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              to="/menu"
              className="border-2 border-[#FDF8F0] text-[#FDF8F0] px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1A2E1A] transition-all duration-300"
            >
              Explore Our Menu
            </Link>
            <motion.a
              href="https://wa.me/9779887165566"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="flex items-center justify-center gap-2 bg-[#C8841A] text-[#1A2E1A] px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-[#C8841A]" />
          </motion.div>

          {/* Floating Info Card */}
          <FloatingInfoCard />
        </div>
      </section>

      {/* Ticker Bar */}
      <TickerBar />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Famous For */}
      <FamousFor />

      {/* Factory Section */}
      <FactorySection />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Tourist Directions */}
      <TouristDirections />

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}