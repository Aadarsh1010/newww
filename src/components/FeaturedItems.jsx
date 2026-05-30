import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ShoppingBag, Flame, Pizza, Cake, UtensilsCrossed } from 'lucide-react'
import { menuItems } from '../data/menu'
import { CartContext } from '../context/CartContext'
import ImagePlaceholder from './ImagePlaceholder'

const featuredItems = menuItems.filter(item => item.isSignature)

export default function FeaturedItems() {
  const { addToCart } = useContext(CartContext)

  const getIconType = (category) => {
    switch (category) {
      case 'pizza': return 'pizza'
      case 'desserts': return 'desserts'
      default: return 'bakery'
    }
  }

  return (
    <section className="py-20 bg-soft-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-golden-amber font-medium tracking-wider uppercase text-sm mb-4"
          >
            Customer Favorites
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-deep-forest mb-4"
          >
            Signature Items
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-warm-brown text-lg max-w-2xl mx-auto"
          >
            Our most loved creations, crafted with passion and perfected over years of baking excellence.
          </motion.p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cream-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-golden-amber/20 to-warm-brown/20 flex items-center justify-center">
                <ImagePlaceholder type={getIconType(item.category)} size="lg" />
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-golden-amber text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  Best Seller
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-golden-amber fill-golden-amber" />
                  <span className="text-warm-brown text-sm">Customer Favorite</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-deep-forest mb-2">{item.name}</h3>
                <p className="text-warm-espresso/70 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-golden-amber">NPR {item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-deep-forest text-cream-white px-4 py-2 rounded-full font-medium text-sm hover:bg-opacity-90 transition-all flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-golden-amber text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}