import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Factory, Store } from 'lucide-react'

export default function LocationBadge({ location }) {
  const Icon = location.isFactory ? Factory : Store

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-soft-ivory rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-golden-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-golden-amber" />
        </div>
        <div className="flex-grow">
          <h3 className="font-playfair text-lg font-bold text-deep-forest mb-1">
            {location.name}
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-warm-brown text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-golden-amber" />
              <span>{location.address}</span>
            </div>
            <div className="flex items-center gap-2 text-warm-brown text-sm">
              <Phone className="w-4 h-4 text-golden-amber" />
              <a href={`tel:${location.phone}`} className="hover:text-golden-amber transition-colors">
                {location.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-warm-brown text-sm">
              <Clock className="w-4 h-4 text-golden-amber" />
              <span>7:00 AM - 8:00 PM Daily</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}