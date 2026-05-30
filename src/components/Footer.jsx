import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Instagram, Facebook, ShieldCheck, Heart, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-forest text-cream-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-golden-amber rounded-full flex items-center justify-center">
                <span className="font-playfair text-xl font-bold text-cream-white">FB</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">Fresh Bake Factory</h3>
                <p className="text-sm text-golden-amber">Outlet</p>
              </div>
            </div>
            <p className="text-cream-white/80 mb-6 leading-relaxed">
              Fresh Baked. Pure Halal. Pure Love. Experience the finest European-style bakery in the heart of Thamel, Kathmandu.
            </p>
            <div className="flex items-center gap-2 text-golden-amber">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-medium">100% Halal Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-golden-amber">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/menu', label: 'Menu' },
                { path: '/order', label: 'Order Online' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-white/70 hover:text-golden-amber transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-golden-amber rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thamel Location */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-golden-amber">Thamel Location</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golden-amber flex-shrink-0 mt-0.5" />
                <span className="text-cream-white/70 text-sm">
                  Thamel Marg, 100m from Tridevi Sadak T-junction, Ward 26, Kathmandu 44600
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golden-amber flex-shrink-0" />
                <a href="tel:+9779887165566" className="text-cream-white/70 hover:text-golden-amber transition-colors text-sm">
                  +977 988-716-5566
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-golden-amber flex-shrink-0" />
                <span className="text-cream-white/70 text-sm">7:00 AM - 8:00 PM Daily</span>
              </li>
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-golden-amber">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/fresh_bake.np"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-golden-amber/20 rounded-full flex items-center justify-center hover:bg-golden-amber transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/freshbake.np"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-golden-amber/20 rounded-full flex items-center justify-center hover:bg-golden-amber transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-cream-white/70 text-sm">
              <Mail className="w-4 h-4 text-golden-amber" />
              <span>info@freshbakefactory.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream-white/60 text-sm">
              &copy; {currentYear} Fresh Bake Factory Outlet. All rights reserved.
            </p>
            <p className="text-cream-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-golden-amber" /> in Kathmandu
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}