import { useState } from 'react'
import { motion } from 'framer-motion'
import { Pizza, Croissant, Cake, IceCream, Coffee, Search, ShieldCheck, UtensilsCrossed } from 'lucide-react'
import MenuItem from '../components/MenuItem'
import { menuItems, categories } from '../data/menu'

const iconMap = {
  Pizza,
  Croissant,
  Cake,
  IceCream,
  Coffee
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Our Menu
            </h1>
            <p className="text-warm-brown text-lg max-w-2xl mx-auto">
              Explore our wide selection of freshly baked goods, from savory pizzas to sweet desserts. All items are 100% halal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-cream-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === 'all'
                    ? 'bg-golden-amber text-white shadow-md'
                    : 'bg-soft-ivory text-warm-espresso hover:bg-golden-amber/20'
                }`}
              >
                All Items
              </button>
              {categories.map((cat) => {
                const IconComponent = iconMap[cat.icon]
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                      activeCategory === cat.id
                        ? 'bg-golden-amber text-white shadow-md'
                        : 'bg-soft-ivory text-warm-espresso hover:bg-golden-amber/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {cat.name}
                  </button>
                )
              })}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-brown/50" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-soft-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <MenuItem key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-soft-ivory rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-warm-brown/50" />
              </div>
              <h3 className="font-playfair text-xl text-deep-forest mb-2">No items found</h3>
              <p className="text-warm-brown">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Halal Banner */}
      <section className="py-12 bg-halal-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                100% Halal Certified
              </h3>
              <p className="text-white/80">
                All our products are made with halal-certified ingredients. Quality you can trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}