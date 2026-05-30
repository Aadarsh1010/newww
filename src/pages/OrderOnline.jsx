import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck,
  MessageCircle,
  Store,
  Truck,
  MapPin,
  Factory,
  Plus,
  Minus,
  ShoppingBag
} from 'lucide-react'

const categories = [
  'All',
  'Bakery and Breads',
  'Pizzas',
  'Danish and Pastries',
  'Cakes',
  'Brownies and Desserts',
  'Beverages'
]

const menuItems = {
  'Bakery and Breads': [
    { name: 'Garlic Bread', price: 120, maxPrice: 180 },
    { name: 'Cheese Bread', price: 150, maxPrice: 200 },
    { name: 'Milk Bread', price: 100, maxPrice: 150 },
    { name: 'Pizza Pocket', price: 80, maxPrice: 150 }
  ],
  'Pizzas': [
    { name: 'Chicken Pizza', price: 400, maxPrice: 700 },
    { name: 'Vegetable Pizza', price: 350, maxPrice: 600 },
    { name: 'BBQ Chicken Pizza', price: 450, maxPrice: 750 }
  ],
  'Danish and Pastries': [
    { name: 'Chocolate Danish', price: 150, maxPrice: 250 },
    { name: 'Apple Danish', price: 150, maxPrice: 250 },
    { name: 'Cinnamon Roll', price: 180, maxPrice: 280 },
    { name: 'Butter Croissant', price: 200, maxPrice: 300 }
  ],
  'Cakes': [
    { name: 'Chocolate Cake', price: 1500, maxPrice: 3500 },
    { name: 'Birthday Cake', price: 1800, maxPrice: 4000 },
    { name: 'Anniversary Cake', price: 2000, maxPrice: 4500 },
    { name: 'Wedding Cake', price: 5000, maxPrice: 15000 },
    { name: 'Mini Birthday Cake', price: 800, maxPrice: 1500 },
    { name: 'Custom Cake', price: 0, maxPrice: 0, onRequest: true }
  ],
  'Brownies and Desserts': [
    { name: 'Chocolate Lava Dessert', price: 250, maxPrice: 350 },
    { name: 'Classic Brownie', price: 200, maxPrice: 280 },
    { name: 'Muffin', price: 120, maxPrice: 200 },
    { name: 'Doughnut', price: 80, maxPrice: 150 }
  ],
  'Beverages': [
    { name: 'Cafe Latte', price: 200, maxPrice: 280 },
    { name: 'Cappuccino', price: 180, maxPrice: 250 },
    { name: 'Americano', price: 150, maxPrice: 200 },
    { name: 'Masala Tea', price: 100, maxPrice: 150 },
    { name: 'Hot Chocolate', price: 200, maxPrice: 280 }
  ]
}

function ProductCard({ item, quantity, onAdd, onRemove }) {
  const priceDisplay = item.onRequest 
    ? 'On request' 
    : item.maxPrice > item.price 
      ? `NPR ${item.price} – ${item.maxPrice}`
      : `NPR ${item.price}`

  return (
    <div className="bg-white dark:bg-[#2C1810] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-[rgba(200,132,26,0.2)]">
      {/* Image Placeholder */}
      <div className="h-32 bg-gradient-to-br from-[#C8841A]/20 to-[#5C3317]/20 flex items-center justify-center">
        <ShoppingBag size={40} className="text-[#C8841A]/50" />
      </div>

      <div className="p-4">
        {/* Halal Badge */}
        <div className="flex items-center gap-1 mb-2">
          <ShieldCheck size={14} className="text-[#2D6A2D]" />
          <span className="text-xs text-[#2D6A2D] font-medium">HALAL</span>
        </div>

        {/* Name & Price */}
        <h3 className="font-playfair text-lg font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">
          {item.name}
        </h3>
        <p className="text-[#C8841A] font-bold">{priceDisplay}</p>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onRemove}
              disabled={quantity === 0}
              className="w-8 h-8 rounded-full border border-[#C8841A] flex items-center justify-center text-[#C8841A] hover:bg-[#C8841A] hover:text-[#1A2E1A] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">
              {quantity}
            </span>
            <button
              onClick={onAdd}
              className="w-8 h-8 rounded-full bg-[#C8841A] flex items-center justify-center text-[#1A2E1A] hover:brightness-110 transition-all"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={onAdd}
            className="flex items-center gap-1 bg-[#C8841A] text-[#1A2E1A] px-3 py-1.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
          >
            <Plus size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

function OrderSummary({ orderItems, orderType, selectedBranch, deliveryAddress, onRemoveItem }) {
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handlePlaceOrder = () => {
    let message = `Hello Fresh Bake! I would like to order:\n`

    orderItems.forEach(item => {
      const itemPrice = item.maxPrice > item.price 
        ? `${item.price} – ${item.maxPrice}` 
        : `${item.price}`
      message += `${item.name} x${item.quantity} — NPR ${itemPrice}\n`
    })

    message += `\nTotal: NPR ${subtotal}\n`
    message += `Order Type: ${orderType === 'pickup' ? 'Pickup' : 'Delivery'}\n`

    if (orderType === 'pickup') {
      message += `Pickup from: ${selectedBranch === 'thamel' ? 'Thamel Marg' : 'Nayabazar Factory Outlet'}\n`
    } else {
      message += `Delivery to: ${deliveryAddress.fullName}, ${deliveryAddress.whatsapp}, ${deliveryAddress.address}\n`
    }

    const whatsappUrl = `https://wa.me/9779887165566?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-white dark:bg-[#2C1810] rounded-2xl p-6 shadow-lg sticky top-28">
      <h2 className="font-playfair text-xl font-bold text-[#1A2E1A] dark:text-[#FDF8F0] mb-4">
        Your Order
      </h2>

      {orderItems.length === 0 ? (
        <p className="text-[#5C3317] dark:text-[#FDF8F0]/60 text-sm">
          No items added yet
        </p>
      ) : (
        <>
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <div>
                  <p className="text-[#1A2E1A] dark:text-[#FDF8F0] font-medium">
                    {item.name}
                  </p>
                  <p className="text-[#5C3317] dark:text-[#FDF8F0]/60">
                    x{item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C8841A] font-semibold">
                    NPR {item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Minus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[rgba(200,132,26,0.3)] pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-[#C8841A] text-xl">Subtotal</span>
              <span className="font-bold text-[#C8841A] text-xl">NPR {subtotal}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="flex items-center justify-center gap-2 w-full bg-[#C8841A] text-[#1A2E1A] py-3 rounded-xl font-bold hover:brightness-110 hover:scale-102 transition-all"
            >
              <MessageCircle size={20} />
              Place Order via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function WhyOrderOnline() {
  const cards = [
    {
      icon: ShieldCheck,
      iconColor: '#2D6A2D',
      title: '100% Halal',
      description: 'Certified ingredients, every item'
    },
    {
      icon: Factory,
      iconColor: '#C8841A',
      title: 'Factory Fresh',
      description: 'Direct from Nayabazar, no middlemen'
    },
    {
      icon: MessageCircle,
      iconColor: '#C8841A',
      title: 'WhatsApp Easy',
      description: 'Confirm your order in minutes'
    },
    {
      icon: MapPin,
      iconColor: '#C8841A',
      title: 'Two Locations',
      description: 'Pickup at Thamel or Nayabazar'
    }
  ]

  return (
    <section className="py-16 bg-[#FAF4E8] dark:bg-[#1A1008] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] text-center mb-12">
          Why Order Online
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#2C1810] rounded-2xl p-6 text-center shadow-md"
            >
              <card.icon size={36} className="mx-auto mb-3" style={{ color: card.iconColor }} />
              <h3 className="font-playfair text-lg font-semibold text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function OrderOnline() {
  const [orderType, setOrderType] = useState('pickup')
  const [selectedBranch, setSelectedBranch] = useState('thamel')
  const [activeCategory, setActiveCategory] = useState('All')
  const [orderItems, setOrderItems] = useState([])
  const [deliveryAddress, setDeliveryAddress] = useState({
    fullName: '',
    whatsapp: '',
    address: '',
    instructions: ''
  })
  const [showMobileSummary, setShowMobileSummary] = useState(false)

  const getAllItems = () => {
    if (activeCategory === 'All') {
      return Object.entries(menuItems).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      )
    }
    return (menuItems[activeCategory] || []).map(item => ({ ...item, category: activeCategory }))
  }

  const getItemQuantity = (name) => {
    const item = orderItems.find(i => i.name === name)
    return item ? item.quantity : 0
  }

  const handleAddItem = (item) => {
    setOrderItems(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setShowMobileSummary(true)
  }

  const handleRemoveItem = (name) => {
    setOrderItems(prev => {
      const existing = prev.find(i => i.name === name)
      if (existing && existing.quantity > 1) {
        return prev.map(i =>
          i.name === name ? { ...i, quantity: i.quantity - 1 } : i
        )
      }
      return prev.filter(i => i.name !== name)
    })
  }

  const handleRemoveItemByIndex = (index) => {
    setOrderItems(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-[#FDF8F0] dark:bg-[#1A1008] transition-colors duration-300 pb-32 lg:pb-0">
      {/* Hero Section */}
      <section className="bg-[#1A2E1A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl text-[#FDF8F0] mb-2"
          >
            Order Online
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-dancing text-2xl text-[#C8841A] mb-4"
          >
            Fresh. Halal. Ready for You.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#FDF8F0]/80"
          >
            Order via WhatsApp for pickup from Thamel or Nayabazar.
          </motion.p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Order Type Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOrderType('pickup')}
                  className={`p-6 rounded-2xl text-left transition-all border-2 ${
                    orderType === 'pickup'
                      ? 'border-[#C8841A] bg-[rgba(200,132,26,0.1)]'
                      : 'border-[rgba(200,132,26,0.3)] hover:border-[#C8841A]'
                  }`}
                >
                  <Store size={32} className="text-[#C8841A] mb-3" />
                  <h3 className="font-playfair text-xl font-bold text-[#1A2E1A] dark:text-[#FDF8F0]">
                    Pickup
                  </h3>
                  <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70 mt-1">
                    Collect from Thamel Marg or Nayabazar Factory Outlet
                  </p>
                  <p className="text-[#2D6A2D] text-sm font-semibold mt-2">
                    Free — No charge
                  </p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOrderType('delivery')}
                  className={`p-6 rounded-2xl text-left transition-all border-2 ${
                    orderType === 'delivery'
                      ? 'border-[#C8841A] bg-[rgba(200,132,26,0.1)]'
                      : 'border-[rgba(200,132,26,0.3)] hover:border-[#C8841A]'
                  }`}
                >
                  <Truck size={32} className="text-[#C8841A] mb-3" />
                  <h3 className="font-playfair text-xl font-bold text-[#1A2E1A] dark:text-[#FDF8F0]">
                    Home Delivery
                  </h3>
                  <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70 mt-1">
                    Available within Kathmandu
                  </p>
                  <p className="text-[#B83232] text-sm font-semibold mt-2">
                    Delivery charges apply
                  </p>
                </motion.button>
              </div>

              {/* Branch Selector (Pickup only) */}
              <AnimatePresence>
                {orderType === 'pickup' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedBranch('thamel')}
                        className={`p-5 rounded-xl text-left transition-all border-2 ${
                          selectedBranch === 'thamel'
                            ? 'border-[#C8841A] bg-[rgba(200,132,26,0.1)]'
                            : 'border-[rgba(200,132,26,0.3)] hover:border-[#C8841A]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <MapPin size={20} className="text-[#C8841A]" />
                          <span className="font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">
                            Thamel
                          </span>
                        </div>
                        <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70 ml-8">
                          Thamel Marg
                        </p>
                        <p className="text-xs text-[#5C3317] dark:text-[#FDF8F0]/50 ml-8">
                          100m from Tridevi Sadak T-junction, Ward 26, Kathmandu 44600
                        </p>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedBranch('nayabazar')}
                        className={`p-5 rounded-xl text-left transition-all border-2 ${
                          selectedBranch === 'nayabazar'
                            ? 'border-[#C8841A] bg-[rgba(200,132,26,0.1)]'
                            : 'border-[rgba(200,132,26,0.3)] hover:border-[#C8841A]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Factory size={20} className="text-[#C8841A]" />
                          <span className="font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">
                            Nayabazar Factory Outlet
                          </span>
                        </div>
                        <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70 ml-8">
                          Direct from the factory
                        </p>
                        <p className="text-xs text-[#5C3317] dark:text-[#FDF8F0]/50 ml-8">
                          Freshest stock available here
                        </p>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Delivery Address Form */}
              <AnimatePresence>
                {orderType === 'delivery' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8 overflow-hidden"
                  >
                    <div className="bg-white dark:bg-[#2C1810] rounded-2xl p-6 shadow-md space-y-4">
                      <h3 className="font-playfair text-xl font-bold text-[#1A2E1A] dark:text-[#FDF8F0] mb-4">
                        Delivery Address
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                          Full Name (required)
                        </label>
                        <input
                          type="text"
                          value={deliveryAddress.fullName}
                          onChange={(e) => setDeliveryAddress(prev => ({ ...prev, fullName: e.target.value }))}
                          className="w-full px-4 py-2 rounded-lg border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#1A1008] dark:text-[#FDF8F0]"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                          WhatsApp Number (required)
                        </label>
                        <input
                          type="tel"
                          value={deliveryAddress.whatsapp}
                          onChange={(e) => setDeliveryAddress(prev => ({ ...prev, whatsapp: e.target.value }))}
                          className="w-full px-4 py-2 rounded-lg border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#1A1008] dark:text-[#FDF8F0]"
                          placeholder="+977 98XXXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                          Delivery Address (required)
                        </label>
                        <input
                          type="text"
                          value={deliveryAddress.address}
                          onChange={(e) => setDeliveryAddress(prev => ({ ...prev, address: e.target.value }))}
                          className="w-full px-4 py-2 rounded-lg border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#1A1008] dark:text-[#FDF8F0]"
                          placeholder="Enter your delivery address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A2E1A] dark:text-[#FDF8F0] mb-1">
                          Special Instructions (optional)
                        </label>
                        <textarea
                          value={deliveryAddress.instructions}
                          onChange={(e) => setDeliveryAddress(prev => ({ ...prev, instructions: e.target.value }))}
                          className="w-full px-4 py-2 rounded-lg border border-[rgba(200,132,26,0.3)] focus:border-[#C8841A] focus:outline-none dark:bg-[#1A1008] dark:text-[#FDF8F0]"
                          rows={3}
                          placeholder="Any special instructions for your order"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
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

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {getAllItems().map((item, index) => (
                  <ProductCard
                    key={item.name}
                    item={item}
                    quantity={getItemQuantity(item.name)}
                    onAdd={() => handleAddItem(item)}
                    onRemove={() => handleRemoveItem(item.name)}
                  />
                ))}
              </div>
            </div>

            {/* Order Summary Sidebar (Desktop) */}
            <div className="hidden lg:block">
              <OrderSummary
                orderItems={orderItems}
                orderType={orderType}
                selectedBranch={selectedBranch}
                deliveryAddress={deliveryAddress}
                onRemoveItem={handleRemoveItemByIndex}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Order Online Section */}
      <WhyOrderOnline />

      {/* Mobile Order Summary */}
      <AnimatePresence>
        {orderItems.length > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 lg:hidden bg-white dark:bg-[#2C1810] p-4 shadow-2xl rounded-t-2xl border-t border-[rgba(200,132,26,0.3)]"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-playfair text-lg font-bold text-[#1A2E1A] dark:text-[#FDF8F0]">
                  {orderItems.reduce((sum, item) => sum + item.quantity, 0)} items
                </span>
                <span className="text-[#C8841A] font-bold ml-2">
                  NPR {orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
                </span>
              </div>
              <button
                onClick={() => setShowMobileSummary(!showMobileSummary)}
                className="text-[#C8841A] font-medium"
              >
                {showMobileSummary ? 'Hide' : 'Show'} Details
              </button>
            </div>

            <AnimatePresence>
              {showMobileSummary && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden mb-4"
                >
                  <div className="space-y-2 max-h-40 overflow-y-auto pb-2">
                    {orderItems.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-[#1A2E1A] dark:text-[#FDF8F0]">
                          {item.name} x{item.quantity}
                        </span>
                        <span className="text-[#C8841A] font-semibold">
                          NPR {item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => {
                const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
                let message = `Hello Fresh Bake! I would like to order:\n`
                orderItems.forEach(item => {
                  const itemPrice = item.maxPrice > item.price 
                    ? `${item.price} – ${item.maxPrice}` 
                    : `${item.price}`
                  message += `${item.name} x${item.quantity} — NPR ${itemPrice}\n`
                })
                message += `\nTotal: NPR ${subtotal}\n`
                message += `Order Type: ${orderType === 'pickup' ? 'Pickup' : 'Delivery'}\n`
                if (orderType === 'pickup') {
                  message += `Pickup from: ${selectedBranch === 'thamel' ? 'Thamel Marg' : 'Nayabazar Factory Outlet'}\n`
                } else {
                  message += `Delivery to: ${deliveryAddress.fullName}, ${deliveryAddress.whatsapp}, ${deliveryAddress.address}\n`
                }
                const whatsappUrl = `https://wa.me/9779887165566?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="flex items-center justify-center gap-2 w-full bg-[#C8841A] text-[#1A2E1A] py-3 rounded-xl font-bold hover:brightness-110 transition-all"
            >
              <MessageCircle size={20} />
              Place Order via WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}