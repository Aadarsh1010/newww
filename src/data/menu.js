export const businessInfo = {
  name: "Fresh Bake Factory Outlet",
  tagline: "Fresh Baked. Pure Halal. Pure Love.",
  locations: [
    {
      name: "Thamel",
      address: "Thamel Marg, 100m from Tridevi Sadak T-junction, Ward 26, Kathmandu 44600",
      phone: "+977 988-716-5566",
      isFactory: false
    },
    {
      name: "Nayabazar Factory Outlet",
      address: "Nayabazar, Kathmandu",
      phone: "+977 988-716-5566",
      isFactory: true
    }
  ],
  hours: "7:00 AM to 8:00 PM daily",
  social: {
    instagram: "https://www.instagram.com/fresh_bake.np",
    facebook: "https://www.facebook.com/freshbake.np"
  }
}

export const menuItems = [
  {
    id: 1,
    name: "Chicken Pizza",
    category: "pizza",
    price: 450,
    description: "Succulent chicken pieces on our signature tomato sauce with mozzarella cheese",
    isSignature: true,
    isHalal: true
  },
  {
    id: 2,
    name: "Pizza Pocket",
    category: "pizza",
    price: 280,
    description: "Crispy pocket filled with cheese, vegetables and your choice of filling",
    isSignature: false,
    isHalal: true
  },
  {
    id: 3,
    name: "Garlic Bread",
    category: "breads",
    price: 180,
    description: "Freshly baked bread with garlic butter and herbs",
    isSignature: false,
    isHalal: true
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    category: "pastries",
    price: 220,
    description: "Soft, fluffy roll swirled with cinnamon sugar and cream cheese frosting",
    isSignature: false,
    isHalal: true
  },
  {
    id: 5,
    name: "Chocolate Danish",
    category: "pastries",
    price: 250,
    description: "Flaky pastry filled with rich chocolate cream",
    isSignature: false,
    isHalal: true
  },
  {
    id: 6,
    name: "Apple Danish",
    category: "pastries",
    price: 250,
    description: "Crispy pastry topped with caramelized apple and cinnamon",
    isSignature: false,
    isHalal: true
  },
  {
    id: 7,
    name: "Chocolate Lava Dessert",
    category: "desserts",
    price: 380,
    description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream",
    isSignature: true,
    isHalal: true
  },
  {
    id: 8,
    name: "Brownie",
    category: "desserts",
    price: 200,
    description: "Dense, fudgy chocolate brownie with walnuts",
    isSignature: false,
    isHalal: true
  },
  {
    id: 9,
    name: "Pastry",
    category: "pastries",
    price: 180,
    description: "Assorted freshly baked pastries with various fillings",
    isSignature: false,
    isHalal: true
  },
  {
    id: 10,
    name: "Cafe Latte",
    category: "beverages",
    price: 200,
    description: "Smooth espresso with steamed milk and frothy foam",
    isSignature: false,
    isHalal: true
  },
  {
    id: 11,
    name: "Espresso",
    category: "beverages",
    price: 150,
    description: "Rich, bold espresso shot",
    isSignature: false,
    isHalal: true
  },
  {
    id: 12,
    name: "Cappuccino",
    category: "beverages",
    price: 220,
    description: "Espresso with equal parts steamed and frothed milk",
    isSignature: false,
    isHalal: true
  }
]

export const categories = [
  { id: 'pizza', name: 'Pizza', icon: 'Pizza' },
  { id: 'breads', name: 'Breads', icon: 'Croissant' },
  { id: 'pastries', name: 'Pastries', icon: 'Cake' },
  { id: 'desserts', name: 'Desserts', icon: 'IceCream' },
  { id: 'beverages', name: 'Beverages', icon: 'Coffee' }
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "London, UK",
    text: "The best chicken pizza I've had in Nepal! The dough is perfectly crispy and the toppings are generous. A must-visit in Thamel!",
    rating: 5
  },
  {
    id: 2,
    name: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
    text: "The chocolate lava dessert is absolutely divine. Fresh, warm, and the chocolate center is perfectly molten. Heavenly!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Johnson",
    location: "Sydney, Australia",
    text: "Finally a halal bakery with authentic European taste! The cinnamon rolls rival any I've had back home. Perfect for breakfast.",
    rating: 5
  },
  {
    id: 4,
    name: "Marco Rossi",
    location: "Rome, Italy",
    text: "Impressive quality for Nepal. The garlic bread is authentic and the coffee is excellent. Will definitely return!",
    rating: 5
  }
]

export const galleryImages = [
  { id: 1, category: 'bakery', alt: 'Fresh bread display' },
  { id: 2, category: 'pizza', alt: 'Delicious chicken pizza' },
  { id: 3, category: 'dessert', alt: 'Chocolate lava dessert' },
  { id: 4, category: 'interior', alt: 'Cozy bakery interior' },
  { id: 5, category: 'pastries', alt: 'Assorted pastries' },
  { id: 6, category: 'bread', alt: 'Fresh garlic bread' },
  { id: 7, category: 'bakery', alt: 'Baking process' },
  { id: 8, category: 'drinks', alt: 'Cafe latte art' },
  { id: 9, category: 'dessert', alt: 'Brownies and pastries' },
  { id: 10, category: 'interior', alt: 'Bakery showcase' },
  { id: 11, category: 'pizza', alt: 'Pizza pockets' },
  { id: 12, category: 'bakery', alt: 'Fresh from the oven' }
]

export const features = [
  {
    icon: 'ShieldCheck',
    title: '100% Halal',
    description: 'All our products are certified halal'
  },
  {
    icon: 'Clock',
    title: 'Fresh Daily',
    description: 'Baked fresh every morning'
  },
  {
    icon: 'Award',
    title: 'Premium Quality',
    description: 'European-style bakery standards'
  },
  {
    icon: 'Heart',
    title: 'Made with Love',
    description: 'Every item crafted with care'
  }
]