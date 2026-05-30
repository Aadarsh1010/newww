import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-40 w-12 h-12 bg-[#C8841A] rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all ${
        isVisible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <ArrowUp size={20} className="text-[#1A2E1A]" />
    </motion.button>
  )
}