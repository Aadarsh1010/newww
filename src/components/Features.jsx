import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Award, Heart } from 'lucide-react'
import { features } from '../data/menu'

const iconMap = {
  ShieldCheck,
  Clock,
  Award,
  Heart
}

export default function Features() {
  return (
    <section className="py-20 bg-deep-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-golden-amber/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-golden-amber/30 transition-colors">
                  <IconComponent className="w-10 h-10 text-golden-amber" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-cream-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream-white/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}