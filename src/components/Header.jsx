import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UtensilsCrossed,
  ShieldCheck,
  Phone,
  Instagram,
  Facebook,
  Moon,
  Sun,
  Menu as MenuIcon,
  X
} from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Order Online', path: '/order' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const location = useLocation()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('fbTheme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('fbTheme', newMode ? 'dark' : 'light')
  }

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#1A2E1A] dark:bg-[#1A1008] h-[38px] px-6 flex items-center justify-between">
        {/* Left - Halal Badge */}
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-[#FDF8F0]" />
          <span className="text-[#FDF8F0] text-sm">100% Halal Certified</span>
        </div>

        {/* Center - Phone */}
        <a
          href="tel:+9779887165566"
          className="flex items-center gap-2 text-[#C8841A]"
        >
          <Phone size={14} />
          <span className="text-sm">+977 988-716-5566</span>
        </a>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/fresh_bake.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FDF8F0] hover:text-[#C8841A] transition-colors duration-200"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/freshbake.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FDF8F0] hover:text-[#C8841A] transition-colors duration-200"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-[350ms] ease ${
          isScrolled
            ? 'bg-[#2C1810] shadow-lg'
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <UtensilsCrossed size={32} className="text-[#C8841A]" />
              <div>
                <span className="font-playfair text-[#FDF8F0] font-bold text-xl block">
                  Fresh Bake
                </span>
                <span className="font-dancing text-[#C8841A] text-sm block -mt-1">
                  Factory Outlet
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-dm-sans font-medium transition-colors duration-200 relative ${
                    location.pathname === link.path
                      ? 'text-[#C8841A] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#C8841A]'
                      : 'text-[#FDF8F0] hover:text-[#C8841A]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side - Theme Toggle + Order Button */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-9 h-9 rounded-full border border-[#C8841A] flex items-center justify-center text-[#C8841A] hover:bg-[#C8841A] hover:text-[#1A2E1A] transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Order Now Button */}
              <Link
                to="/order"
                className="bg-[#C8841A] text-[#1A2E1A] font-bold px-5 py-2 rounded-full hover:brightness-110 hover:scale-103 transition-all duration-200"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-[#FDF8F0]"
              aria-label="Open menu"
            >
              <MenuIcon size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1A2E1A] z-[60] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-[#FDF8F0]"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Mobile Logo */}
            <div className="flex flex-col items-center justify-center flex-grow">
              <Link to="/" className="flex flex-col items-center gap-2 mb-12">
                <UtensilsCrossed size={48} className="text-[#C8841A]" />
                <span className="font-playfair text-[#FDF8F0] font-bold text-2xl">
                  Fresh Bake
                </span>
                <span className="font-dancing text-[#C8841A] text-lg">
                  Factory Outlet
                </span>
              </Link>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-dm-sans text-2xl font-medium ${
                        location.pathname === link.path
                          ? 'text-[#C8841A]'
                          : 'text-[#FDF8F0]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Order Now Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12"
              >
                <Link
                  to="/order"
                  className="bg-[#C8841A] text-[#1A2E1A] font-bold px-8 py-3 rounded-full text-lg"
                >
                  Order Now
                </Link>
              </motion.div>
            </div>

            {/* Mobile Halal Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center gap-2 pb-8"
            >
              <ShieldCheck size={16} className="text-[#2D6A2D]" />
              <span className="text-[#FDF8F0] text-sm">100% Halal Certified</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}