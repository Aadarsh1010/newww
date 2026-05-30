import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { CartContext } from '../context/CartContext'

export default function CartDrawer() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartCount,
    isCartOpen,
    setIsCartOpen
  } = useContext(CartContext)

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-soft-ivory">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-golden-amber rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-playfair text-xl font-bold text-deep-forest">Your Order</h2>
                  <p className="text-sm text-warm-brown">{getCartCount()} items</p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-soft-ivory rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6 text-warm-espresso" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-soft-ivory rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-10 h-10 text-warm-brown/50" />
                  </div>
                  <h3 className="font-playfair text-xl text-deep-forest mb-2">Your cart is empty</h3>
                  <p className="text-warm-brown mb-6">Start adding some delicious items!</p>
                  <Link
                    to="/menu"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block bg-golden-amber text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-golden-amber/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">
                            {item.category === 'pizza' ? '🍕' : 
                             item.category === 'breads' ? '🍞' : 
                             item.category === 'pastries' ? '🥐' : 
                             item.category === 'desserts' ? '🍫' : '☕'}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium text-deep-forest">{item.name}</h4>
                          <p className="text-golden-amber font-bold">NPR {item.price}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 bg-soft-ivory rounded-full">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-warm-espresso hover:bg-cream-white rounded-full transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-warm-espresso hover:bg-cream-white rounded-full transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-soft-ivory bg-soft-ivory">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-warm-brown">Subtotal</span>
                  <span className="font-bold text-xl text-deep-forest">NPR {getCartTotal()}</span>
                </div>
                <p className="text-sm text-warm-brown/70 mb-4">Delivery charges calculated at checkout</p>
                <Link
                  to="/order"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-golden-amber text-white py-4 rounded-xl font-semibold text-center hover:bg-opacity-90 transition-all shadow-md"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}