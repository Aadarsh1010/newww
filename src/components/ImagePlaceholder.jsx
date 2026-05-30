import { Pizza, Croissant, Cake, IceCream, Coffee, Factory, Store, UtensilsCrossed } from 'lucide-react'

const iconMap = {
  pizza: Pizza,
  breads: Croissant,
  pastries: Cake,
  desserts: IceCream,
  beverages: Coffee,
  bakery: Factory,
  dessert: Cake,
  interior: Store,
  bread: Croissant,
  drinks: Coffee
}

export default function ImagePlaceholder({ type = 'bakery', size = 'md' }) {
  const IconComponent = iconMap[type] || UtensilsCrossed
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
    '2xl': 'w-64 h-64'
  }

  return (
    <div className={`${sizeClasses[size] || sizeClasses.md} bg-gradient-to-br from-golden-amber/20 to-warm-brown/20 rounded-full flex items-center justify-center`}>
      <IconComponent className="w-1/2 h-1/2 text-golden-amber/60" />
    </div>
  )
}