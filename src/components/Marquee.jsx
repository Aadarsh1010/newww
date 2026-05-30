import { motion } from 'framer-motion'
import { Pizza, Croissant, Cake, IceCream, Coffee, Star } from 'lucide-react'

const items = [
  { icon: Pizza, text: 'Best Chicken Pizza in Thamel' },
  { icon: IceCream, text: 'Chocolate Lava Dessert' },
  { icon: Croissant, text: 'Fresh Garlic Bread' },
  { icon: Cake, text: 'Delicious Pastries' },
  { icon: Coffee, text: 'Premium Cafe Latte' },
  { icon: Star, text: '100% Halal Certified' },
  { icon: Pizza, text: 'Best Chicken Pizza in Thamel' },
  { icon: IceCream, text: 'Chocolate Lava Dessert' },
  { icon: Croissant, text: 'Fresh Garlic Bread' },
  { icon: Cake, text: 'Delicious Pastries' },
  { icon: Coffee, text: 'Premium Cafe Latte' },
  { icon: Star, text: '100% Halal Certified' },
]

export default function Marquee() {
  return (
    <section className="py-4 bg-golden-amber overflow-hidden">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear'
          }
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <item.icon className="w-5 h-5 text-deep-forest" />
            <span className="text-deep-forest font-medium text-sm">{item.text}</span>
            <span className="w-1.5 h-1.5 bg-deep-forest/30 rounded-full mx-4"></span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}