import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck,
  Heart,
  ShoppingBag,
  Flame,
  Star,
  Award,
  Cake,
  MessageCircle
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
    {
      name: 'Garlic Bread',
      price: '120 – 180',
      priceUnit: 'NPR',
      badge: 'CUSTOMER FAVOURITE',
      badgeColor: '#2D6A2D',
      icon: Heart,
      description: 'Perfectly seasoned, light and golden. The reason regulars keep coming back.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a'
    },
    {
      name: 'Cheese Bread',
      price: '150 – 200',
      priceUnit: 'NPR',
      badge: null,
      description: 'Soft pull-apart bread loaded with melted cheese, baked daily.',
      image: 'https://images.unsplash.com/photo-1541529086526-db283c563270'
    },
    {
      name: 'Milk Bread',
      price: '100 – 150',
      priceUnit: 'NPR',
      badge: null,
      description: 'Soft, pillowy, Japanese-style milk bread fresh from the oven.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
    },
    {
      name: 'Pizza Pocket',
      price: '80 – 150',
      priceUnit: 'NPR',
      badge: 'GRAB AND GO',
      badgeColor: '#5C3317',
      icon: ShoppingBag,
      description: 'Hot stuffed halal pocket, perfect for exploring Thamel on the go.',
      image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'
    }
  ],
  'Pizzas': [
    {
      name: 'Chicken Pizza',
      price: '400 – 700',
      priceUnit: 'NPR',
      badge: 'BESTSELLER',
      badgeColor: '#B83232',
      icon: Flame,
      isSignature: true,
      description: 'So famous that guests fly it back home. Crispy base, juicy halal chicken, fresh toppings. The one that made us famous.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
    },
    {
      name: 'Vegetable Pizza',
      price: '350 – 600',
      priceUnit: 'NPR',
      badge: null,
      description: 'Classic cheese and vegetable pizza with in-house tomato sauce.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
    },
    {
      name: 'BBQ Chicken Pizza',
      price: '450 – 750',
      priceUnit: 'NPR',
      badge: null,
      description: 'Smoky BBQ sauce, halal chicken, caramelized onions.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
    }
  ],
  'Danish and Pastries': [
    {
      name: 'Chocolate Danish',
      price: '150 – 250',
      priceUnit: 'NPR',
      badge: 'MOST LOVED',
      badgeColor: '#C8841A',
      icon: Heart,
      description: 'Rich dark chocolate filling in flaky, buttery laminated pastry.',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812'
    },
    {
      name: 'Apple Danish',
      price: '150 – 250',
      priceUnit: 'NPR',
      badge: null,
      description: 'Sweet spiced apple compote in crispy golden pastry shell.',
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842'
    },
    {
      name: 'Cinnamon Roll',
      price: '180 – 280',
      priceUnit: 'NPR',
      badge: null,
      description: 'Soft, gooey caramelized cinnamon swirl with cream cheese glaze.',
      image: 'https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8'
    },
    {
      name: 'Butter Croissant',
      price: '200 – 300',
      priceUnit: 'NPR',
      badge: null,
      description: 'Classic French croissant, perfectly laminated, golden and flaky.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a'
    }
  ],
  'Cakes': [
    {
      name: 'Chocolate Cake',
      price: '1,500 – 3,500',
      priceUnit: 'NPR',
      badge: null,
      description: 'Rich layered chocolate cake with premium cocoa.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
    },
    {
      name: 'Birthday Cake',
      price: '1,800 – 4,000',
      priceUnit: 'NPR',
      badge: 'CUSTOM ORDER',
      badgeColor: '#5C3317',
      icon: Cake,
      description: 'Custom decorated birthday cakes for all ages.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d'
    },
    {
      name: 'Anniversary Cake',
      price: '2,000 – 4,500',
      priceUnit: 'NPR',
      badge: null,
      description: 'Elegant cakes for your special celebrations.',
      image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec'
    },
    {
      name: 'Wedding Cake',
      price: '5,000 – 15,000',
      priceUnit: 'NPR',
      badge: null,
      description: 'Multi-tiered wedding cakes crafted to your vision.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d'
    },
    {
      name: 'Mini Birthday Cake',
      price: '800 – 1,500',
      priceUnit: 'NPR',
      badge: null,
      description: 'Affordable and perfect for small celebrations.',
      image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713'
    },
    {
      name: 'Custom Cake',
      price: 'On request',
      priceUnit: 'NPR',
      badge: null,
      description: 'WhatsApp us your design and we will bring it to life.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
    }
  ],
  'Brownies and Desserts': [
    {
      name: 'Chocolate Lava Dessert',
      price: '250 – 350',
      priceUnit: 'NPR',
      badge: 'MUST TRY',
      badgeColor: '#C8841A',
      icon: Star,
      description: 'Warm gooey chocolate center. The most talked-about dessert in all of Thamel.',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51'
    },
    {
      name: 'Classic Brownie',
      price: '200 – 280',
      priceUnit: 'NPR',
      badge: null,
      description: 'Fudgy, dense, rich dark chocolate brownie. Simple and perfect.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c'
    },
    {
      name: 'Muffin',
      price: '120 – 200',
      priceUnit: 'NPR',
      badge: null,
      description: 'Blueberry, chocolate chip and vanilla varieties, baked fresh daily.',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa'
    },
    {
      name: 'Doughnut',
      price: '80 – 150',
      priceUnit: 'NPR',
      badge: null,
      description: 'Soft glazed doughnuts fresh from the oven every morning.',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b'
    }
  ],
  'Beverages': [
    {
      name: 'Cafe Latte',
      price: '200 – 280',
      priceUnit: 'NPR',
      badge: 'BEST IN THAMEL',
      badgeColor: '#C8841A',
      icon: Award,
      description: 'Best coffee and lowest price for quality in all of Thamel.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735'
    },
    {
      name: 'Cappuccino',
      price: '180 – 250',
      priceUnit: 'NPR',
      badge: null,
      description: 'Classic Italian-style cappuccino with creamy foam.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d'
    },
    {
      name: 'Americano',
      price: '150 – 200',
      priceUnit: 'NPR',
      badge: null,
      description: 'Bold espresso with hot water for a smooth finish.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd'
    },
    {
      name: 'Masala Tea',
      price: '100 – 150',
      priceUnit: 'NPR',
      badge: null,
      description: 'Traditional spiced Nepali chai with cardamom and ginger.',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f'
    },
    {
      name: 'Hot Chocolate',
      price: '200 – 280',
      priceUnit: 'NPR',
      badge: null,
      description: 'Rich Belgian chocolate melted into creamy perfection.',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed'
    }
  ]
}

function MenuCard({ item, index }) {
  const whatsappUrl = `https://wa.me/9779887165566?text=Hi, I would like to order ${encodeURIComponent(item.name)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-[#2C1810] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-350 border border-transparent hover:border-[rgba(200,132,26,0.4)]"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-108"
        />
        
        {/* Badge */}
        {item.badge && (
          <div
            className="absolute top-3 left-3 text-white text-xs font-bold rounded-full px-3 py-1 flex items-center gap-1"
            style={{ backgroundColor: item.badgeColor }}
          >
            {item.icon && <item.icon size={12} />}
            {item.badge}
          </div>
        )}

        {/* Halal Badge */}
        <div className="absolute top-3 right-3 bg-[#2D6A2D] text-white text-xs font-bold rounded-full px-2 py-1 flex items-center gap-1">
          <ShieldCheck size={12} />
          HALAL
        </div>

        {/* Signature Badge */}
        {item.isSignature && (
          <div className="absolute bottom-3 left-3 bg-[#C8841A] text-[#1A2E1A] text-xs font-bold rounded-full px-3 py-1">
            SIGNATURE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-playfair text-lg font-semibold text-[#1A2E1A] dark:text-[#FDF8F0]">
          {item.name}
        </h3>
        <p className="text-sm text-[#5C3317] dark:text-[#FDF8F0]/70 italic mt-1">
          {item.description}
        </p>
        <p className="text-[#C8841A] font-bold text-lg mt-2">
          {item.priceUnit} {item.price}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full mt-4 bg-[#C8841A] text-[#1A2E1A] py-2 rounded-lg font-semibold hover:brightness-110 transition-all"
        >
          <MessageCircle size={16} />
          Order via WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

function CustomCakeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1A2E1A] rounded-2xl p-10 text-center mt-16"
    >
      <h3 className="font-playfair text-3xl text-[#FDF8F0] mb-4">
        Need a Custom Cake?
      </h3>
      <p className="text-[#FDF8F0]/80 text-lg max-w-2xl mx-auto mb-8">
        Birthday, wedding, anniversary, mini cakes — we craft them all with 100% halal ingredients.
      </p>
      <a
        href="https://wa.me/9779887165566"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#C8841A] text-[#1A2E1A] px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all"
      >
        <MessageCircle size={18} />
        WhatsApp to Order
      </a>
    </motion.div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showHalalOnly, setShowHalalOnly] = useState(false)

  const getDisplayItems = () => {
    if (activeCategory === 'All') {
      return Object.entries(menuItems).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      )
    }
    return menuItems[activeCategory] || []
  }

  return (
    <div className="min-h-screen bg-[#FDF8F0] dark:bg-[#1A1008] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517433670267-08bbd4be890f)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,46,26,0.85)] to-[rgba(44,24,16,0.9)]" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl text-[#FDF8F0] mb-2"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-dancing text-2xl text-[#C8841A] mb-4"
          >
            Everything baked fresh, in-house daily
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 bg-[#2D6A2D] text-white px-4 py-2 rounded-full"
          >
            <ShieldCheck size={16} />
            <span className="text-sm font-medium">100% Halal</span>
          </motion.div>
        </div>
      </section>

      {/* Filter System */}
      <section className="sticky top-[76px] z-40 bg-[#FDF8F0] dark:bg-[#1A1008] py-4 px-4 border-b border-[rgba(200,132,26,0.2)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#C8841A] text-[#1A2E1A]'
                      : 'border border-[#C8841A] text-[#C8841A] hover:bg-[#C8841A]/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Dietary Toggle */}
            <button
              onClick={() => setShowHalalOnly(!showHalalOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                showHalalOnly
                  ? 'bg-[#2D6A2D] text-white'
                  : 'border border-[#2D6A2D] text-[#2D6A2D] hover:bg-[#2D6A2D]/10'
              }`}
            >
              <ShieldCheck size={16} />
              Show Halal Only
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory === 'All' ? (
                // Show all items grouped by category
                <div className="space-y-16">
                  {Object.entries(menuItems).map(([category, items]) => (
                    <div key={category}>
                      <h2 className="font-playfair text-3xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-8 text-center">
                        {category}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                          <MenuCard key={item.name} item={item} index={index} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Show single category
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getDisplayItems().map((item, index) => (
                    <MenuCard key={item.name} item={item} index={index} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Custom Cake Banner */}
          <CustomCakeBanner />
        </div>
      </section>
    </div>
  )
}