import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Grid, Camera, Pizza, Croissant, Cake, IceCream, Coffee, Factory, UtensilsCrossed } from 'lucide-react'
import { galleryImages } from '../data/menu'
import ImagePlaceholder from '../components/ImagePlaceholder'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'bakery', label: 'Bakery' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'dessert', label: 'Desserts' },
  { id: 'interior', label: 'Interior' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'bread', label: 'Breads' },
  { id: 'drinks', label: 'Drinks' }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const getIconType = (category) => {
    switch (category) {
      case 'bakery': return 'bakery'
      case 'pizza': return 'pizza'
      case 'dessert': return 'desserts'
      case 'interior': return 'interior'
      case 'pastries': return 'pastries'
      case 'bread': return 'breads'
      case 'drinks': return 'beverages'
      default: return 'bakery'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'bakery': return 'from-golden-amber/30 to-warm-brown/30'
      case 'pizza': return 'from-orange-500/30 to-red-500/30'
      case 'dessert': return 'from-amber-500/30 to-yellow-500/30'
      case 'interior': return 'from-deep-forest/30 to-halal-green/30'
      case 'pastries': return 'from-pink-500/30 to-rose-500/30'
      case 'bread': return 'from-yellow-600/30 to-amber-600/30'
      default: return 'from-cyan-500/30 to-blue-500/30'
    }
  }

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(filteredImages[nextIndex])
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
              <Camera className="w-10 h-10 text-golden-amber" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-deep-forest mb-4">
              Our Gallery
            </h1>
            <p className="text-warm-brown text-lg max-w-2xl mx-auto">
              Take a visual tour of our bakery, from freshly baked goods to our cozy interior.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-cream-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Grid className="w-5 h-5 text-warm-brown flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-golden-amber text-white shadow-md'
                    : 'bg-soft-ivory text-warm-espresso hover:bg-golden-amber/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Placeholder Image */}
                  <div className={`aspect-square bg-gradient-to-br ${getCategoryColor(image.category)} flex items-center justify-center`}>
                    <ImagePlaceholder type={getIconType(image.category)} size="2xl" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-deep-forest/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-medium">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-soft-ivory rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-10 h-10 text-warm-brown/50" />
              </div>
              <h3 className="font-playfair text-xl text-deep-forest mb-2">No images in this category</h3>
              <p className="text-warm-brown">Check back soon for more photos!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  className="absolute left-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  className="absolute right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-video bg-gradient-to-br ${getCategoryColor(selectedImage.category)} rounded-2xl flex items-center justify-center`}>
                <ImagePlaceholder type={getIconType(selectedImage.category)} size="xl" />
              </div>
              <p className="text-white text-center mt-4 font-medium">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}