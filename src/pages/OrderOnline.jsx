import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Minus, Plus, Trash2, Truck, Clock, MapPin, ShieldCheck, Phone, CheckCircle, Store, Pizza, Croissant, Cake, IceCream, Coffee, UtensilsCrossed } from 'lucide-react'
import { CartContext } from '../context/CartContext'
import { menuItems } from '../data/menu'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function OrderOnline() {
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartCount,
    clearCart 
  } = useContext(CartContext)
  
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderType, setOrderType] = useState('pickup')

  const handlePlaceOrder = () => {
    // Simulate order placement
    setOrderPlaced(true)
  }

  const getIconType = (category) => {
    switch (category) {
      case 'pizza': return 'pizza'
      case 'breads': return 'breads'
      case 'pastries': return 'pastries'
      case 'desserts': return 'desserts'
      case 'beverages': return 'beverages'
      default: return 'bakery'
    }
  }

  if (orderPlaced) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-cream-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-halal-green rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl font-bold text-deep-forest mb-4"
          >
            Order Placed Successfully!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-warm-brown text-lg mb-8"
          >
            Thank you for your order. We will prepare your items fresh and have them ready for you.
          </motion.p>
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 className="font-playfair text-lg font-bold text-deep-forest mb-4">What happens next?</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-golden-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-golden-amber font-bold text-sm">1</span>
                </span>
                <span className="text-warm-espresso">We will confirm your order via phone call</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-golden-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-golden-amber font-bold text-sm">2</span>
                </span>
                <span className="text-warm-espresso">Your items will be prepared fresh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-golden-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-golden-amber font-bold text-sm">3</span>
                </span>
                <span className="text-warm-espresso">Pick up or delivery as arranged</span>
              </li>
            </ul>
          </div>
          <Link
            to="/menu"
            onClick={() => {
              clearCart()
              setOrderPlaced(false)
            }}
            className="inline-block bg-golden-amber text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    )
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
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-deep-forest mb-4">
              Order Online
            </h1>
            <p className="text-warm-brown text-lg max-w-2xl mx-auto">
              Browse our menu, add items to your cart, and place your order. Pick up in-store or get it delivered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Menu Items */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-2xl font-bold text-deep-forest">Select Items</h2>
                <div className="flex items-center gap-2 text-golden-amber">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-sm font-medium">100% Halal</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menuItems.map((item) => {
                  const cartItem = cart.find(c => c.id === item.id)
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-xl p-4 shadow-sm flex gap-4"
                    >
                      <div className="w-16 h-16 bg-golden-amber/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ImagePlaceholder type={getIconType(item.category)} size="sm" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-deep-forest">{item.name}</h3>
                        <p className="text-sm text-warm-brown">NPR {item.price}</p>
                        {cartItem ? (
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                              className="w-7 h-7 bg-soft-ivory rounded-full flex items-center justify-center hover:bg-golden-amber/20 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-medium w-6 text-center">{cartItem.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                              className="w-7 h-7 bg-soft-ivory rounded-full flex items-center justify-center hover:bg-golden-amber/20 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="mt-2 text-sm bg-deep-forest text-cream-white px-3 py-1 rounded-full hover:bg-opacity-90 transition-all"
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-golden-amber rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-xl font-bold text-deep-forest">Your Order</h2>
                    <p className="text-sm text-warm-brown">{getCartCount()} items</p>
                  </div>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-soft-ivory rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8 text-warm-brown/50" />
                    </div>
                    <p className="text-warm-brown mb-4">Your cart is empty</p>
                    <Link
                      to="/menu"
                      className="text-golden-amber font-medium hover:underline"
                    >
                      Browse Menu
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 flex-grow">
                            <ImagePlaceholder type={getIconType(item.category)} size="sm" />
                            <div className="flex-grow">
                              <p className="font-medium text-deep-forest text-sm">{item.name}</p>
                              <p className="text-golden-amber text-sm">NPR {item.price}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-soft-ivory rounded-full flex items-center justify-center hover:bg-golden-amber/20 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center font-medium text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-soft-ivory rounded-full flex items-center justify-center hover:bg-golden-amber/20 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Type */}
                    <div className="mb-6">
                      <h3 className="font-medium text-deep-forest mb-3">Order Type</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setOrderType('pickup')}
                          className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                            orderType === 'pickup'
                              ? 'bg-golden-amber text-white'
                              : 'bg-soft-ivory text-warm-espresso hover:bg-golden-amber/20'
                          }`}
                        >
                          <Store className="w-4 h-4" />
                          Pick Up
                        </button>
                        <button
                          onClick={() => setOrderType('delivery')}
                          className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                            orderType === 'delivery'
                              ? 'bg-golden-amber text-white'
                              : 'bg-soft-ivory text-warm-espresso hover:bg-golden-amber/20'
                          }`}
                        >
                          <Truck className="w-4 h-4" />
                          Delivery
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="border-t border-soft-ivory pt-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-warm-brown">Subtotal</span>
                        <span className="font-bold text-xl text-deep-forest">NPR {getCartTotal()}</span>
                      </div>
                    </div>

                    {/* Place Order */}
                    <button
                      onClick={handlePlaceOrder}
                      className="w-full bg-golden-amber text-white py-4 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Place Order via Phone Call
                    </button>

                    <div className="mt-4 flex items-center justify-center gap-2 text-warm-brown text-sm">
                      <Clock className="w-4 h-4" />
                      <span>We&apos;ll call you to confirm</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}