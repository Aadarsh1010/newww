import { useState, useEffect } from 'react'
import { ShieldCheck } from 'lucide-react'

export default function HalalTrustBadge() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.location.href = '/about#halal'
  }

  return (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 hidden lg:block ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
      }`}
    >
      <button
        onClick={handleClick}
        className="bg-[#1A2E1A] text-[#FDF8F0] px-3 py-1.5 rounded-r-full flex items-center gap-1 hover:bg-[#2C1810] transition-colors shadow-lg"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <ShieldCheck size={14} className="text-[#2D6A2D]" />
        <span className="text-xs font-medium tracking-wider">HALAL</span>
      </button>
    </div>
  )
}