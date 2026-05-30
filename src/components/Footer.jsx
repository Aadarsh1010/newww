import { Link } from 'react-router-dom'
import {
  UtensilsCrossed,
  ShieldCheck,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Clock
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1A2E1A] text-[#FDF8F0]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <UtensilsCrossed size={32} className="text-[#C8841A]" />
              <div>
                <span className="font-playfair text-2xl font-bold">Fresh Bake</span>
                <span className="font-dancing text-[#C8841A] text-lg block -mt-1">Factory Outlet</span>
              </div>
            </div>
            <p className="font-dancing text-xl text-[#C8841A] mb-2">
              Fresh Baked. Pure Halal. Pure Love.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
              <ShieldCheck size={16} className="text-[#2D6A2D]" />
              <span className="bg-[#2D6A2D] text-white text-xs px-3 py-1 rounded-full font-medium">
                100% Halal Certified
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
              <a
                href="https://www.instagram.com/fresh_bake.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDF8F0] hover:text-[#C8841A] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/freshbake.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDF8F0] hover:text-[#C8841A] transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6 text-center lg:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center lg:text-left">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'Order Online', path: '/order' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#C8841A] transition-colors text-[#FDF8F0]/80"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Famous For */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6 text-center lg:text-left">
              Famous For
            </h3>
            <ul className="space-y-3 text-sm text-[#FDF8F0]/80 text-center lg:text-left">
              <li>Legendary Chicken Pizza</li>
              <li>Chocolate Lava Dessert</li>
              <li>Best Garlic Bread in Thamel</li>
              <li>Apple and Chocolate Danish</li>
              <li>Custom Cakes for All Occasions</li>
              <li>Best Cafe Latte in Thamel</li>
            </ul>
          </div>

          {/* Column 4 - Visit Us */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6 text-center lg:text-left">
              Visit Us
            </h3>
            <div className="space-y-4 text-sm text-center lg:text-left">
              <div>
                <p className="font-semibold text-[#C8841A]">Thamel</p>
                <p className="text-[#FDF8F0]/80">Thamel Marg, Ward 26, Kathmandu</p>
              </div>
              <div>
                <p className="font-semibold text-[#C8841A]">Nayabazar Factory Outlet</p>
                <p className="text-[#FDF8F0]/80">Direct from the factory</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone size={14} className="text-[#C8841A]" />
                <a href="tel:+9779887165566" className="hover:text-[#C8841A]">
                  +977 988-716-5566
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Clock size={14} className="text-[#C8841A]" />
                <span>7AM - 8PM daily</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
                <a
                  href="https://www.instagram.com/fresh_bake.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDF8F0]/60 hover:text-[#C8841A] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/freshbake.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDF8F0]/60 hover:text-[#C8841A] transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-[#FDF8F0]/10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-playfair text-lg mb-2">Get Notified of Daily Specials</h3>
            <p className="text-[#FDF8F0]/60 text-sm mb-4">
              Subscribe to hear about our daily specials and new items
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-full bg-[#FDF8F0]/10 border border-[#FDF8F0]/20 text-[#FDF8F0] placeholder-[#FDF8F0]/40 focus:outline-none focus:border-[#C8841A]"
              />
              <button
                type="submit"
                className="bg-[#C8841A] text-[#1A2E1A] px-6 py-2 rounded-full font-semibold hover:brightness-110 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0d1a0d] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#FDF8F0]/60">
          <p>2026 Fresh Bake Factory Outlet, Thamel and Nayabazar, Kathmandu, Nepal</p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#2D6A2D]" />
            <span>100% Halal Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}