import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, Flame, Pizza, Croissant, Cake, IceCream, Coffee, UtensilsCrossed } from 'lucide-react'
import { CartContext } from '../context/CartContext'
import ImagePlaceholder from './ImagePlaceholder'

export default function MenuItem({ item, index = 0, showAddToCart = true }) {
  const { addToCart } = useContext(CartContext)

  const getIconType = () => {
    switch (item.category) {
      case 'pizza': return 'pizza'
      case 'breads': return 'breads'
      case 'pastries': return 'pastries'
      case 'desserts': return 'desserts'
      case 'beverages': return 'beverages'
      default: return 'bakery'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
    >
      {/* Image Area */}
      <div className="relative h-40 bg-gradient-to-br from-golden-amber/10 to-warm-brown/10 flex items-center justify-center">
        <ImagePlaceholder type={getIconType()} size="md" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isSignature && (
            <div className="bg-golden-amber text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Best
            </div>
          )}
          {item.isHalal && (
            <div className="bg-halal-green text-white px-2 py-1 rounded-full text-xs font-medium">
              Halal
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 text-golden-amber fill-golden-amber" />
          <span className="text-xs text-warm-brown capitalize">{item.category}</span>
        </div>
        
        <h3 className="font-playfair text-lg font-bold text-deep-forest mb-2">{item.name}</h3>
        <p className="text-warm-espresso/70 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-golden-amber">NPR {item.price}</span>
          {showAddToCart && (
            <button
              onClick={() => addToCart(item)}
              className="bg-deep-forest text-cream-white p-2.5 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
              aria-label={`Add ${item.name} to cart`}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}