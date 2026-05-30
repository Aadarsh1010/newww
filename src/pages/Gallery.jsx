import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Instagram,
  Facebook,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  ExternalLink
} from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    category: 'Pizzas',
    name: 'Chicken Pizza'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    category: 'Cakes',
    name: 'Chocolate Cake'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    category: 'Danish & Pastries',
    name: 'Pastry with Coffee'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    category: 'Breads',
    name: 'Butter Croissant'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f',
    category: 'Our Bakery',
    name: 'Fresh Bake Factory'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    category: 'Beverages',
    name: 'Cafe Latte'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
    category: 'Pizzas',
    name: 'Pizza Pocket'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    category: 'Brownies',
    name: 'Fresh Cookies'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
    category: 'Brownies',
    name: 'Classic Brownie'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    category: 'Breads',
    name: 'Fresh Baked Bread'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
    category: 'Danish & Pastries',
    name: 'Chocolate Danish'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    category: 'Brownies',
    name: 'Glazed Doughnuts'
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812',
    category: 'Danish & Pastries',
    name: 'Danish Pastries'
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8',
    category: 'Danish & Pastries',
    name: 'Cinnamon Roll'
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51',
    category: 'Brownies',
    name: 'Chocolate Lava'
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed',
    category: 'Beverages',
    name: 'Hot Chocolate'
  }
]

const instagramImages = [
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
  'https://images.unsplash.com/photo-1517433670267-08bbd4be890f'
]

const categories = [
  'All',
  'Pizzas',
  'Danish & Pastries',
  'Cakes',
  'Brownies',
  'Breads',
  'Beverages',
  'Our Bakery'
]

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
      >
        <X size={32} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/80">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/80 hover:text-white"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        src={images[currentIndex].src}
        alt={images[currentIndex].name}
        className="max-w-[90vw] max-h-[85vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/80 hover:text-white"
      >
        <ChevronRight size={48} />
      </button>

      {/* Image Info */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[#C8841A] text-sm uppercase tracking-wider mb-1">
          {images[currentIndex].category}
        </p>
        <p className="text-white text-xl font-playfair">
          {images[currentIndex].name}
        </p>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
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
            From Our Kitchen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-dancing text-2xl text-[#C8841A]"
          >
            Everything made in-house, daily
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[76px] z-40 bg-[#FDF8F0] dark:bg-[#1A1008] py-4 px-4 border-b border-[rgba(200,132,26,0.2)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#C8841A] text-[#1A2E1A]'
                    : 'border border-[#C8841A] text-[#C8841A] hover:bg-[#C8841A]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="break-inside-avoid"
                >
                  <div
                    onClick={() => openLightbox(index)}
                    className="relative group overflow-hidden rounded-2xl cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.name}
                      className="w-full object-cover transition-transform duration-400 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,46,26,0.9)] via-[rgba(26,46,26,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#C8841A] text-xs uppercase tracking-wider mb-2">
                        {image.category}
                      </span>
                      <p className="text-white font-playfair text-lg mb-2">
                        {image.name}
                      </p>
                      <Maximize2 size={24} className="text-[#C8841A]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={filteredImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>

      {/* Social Section */}
      <section className="py-16 bg-[#FAF4E8] dark:bg-[#1A1008] px-4">
        <div className="max-w-6xl mx-auto">
          {/* Instagram */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-2">
                Follow Us on Instagram
              </h2>
              <p className="text-[#5C3317] dark:text-[#FDF8F0]/70">
                1,215 followers
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
              {instagramImages.map((img, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/fresh_bake.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={img}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#C8841A]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.instagram.com/fresh_bake.np"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <Instagram size={20} />
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className="bg-[#1A2E1A] rounded-2xl p-8 text-center">
            <Facebook size={48} className="text-[#1877F2] mx-auto mb-4" />
            <h3 className="font-playfair text-2xl text-[#FDF8F0] mb-2">
              Connect on Facebook
            </h3>
            <p className="text-[#FDF8F0]/80 mb-6">
              2,000+ likes on Facebook
            </p>
            <p className="text-[#FDF8F0]/70 mb-6">
              Order, check specials, and DM us directly
            </p>
            <a
              href="https://www.facebook.com/freshbake.np"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1877F2]/90 transition-colors"
            >
              <ExternalLink size={18} />
              Visit our Facebook Page
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}