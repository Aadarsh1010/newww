import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

export default function DailySpecialPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('dailySpecialDismissed')
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    sessionStorage.setItem('dailySpecialDismissed', 'true')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={handleDismiss}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF4E8] dark:bg-[#2C1810] rounded-2xl p-8 max-w-md w-full relative shadow-2xl border-2 border-[#1A2E1A]"
          >
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-[#1A2E1A] hover:text-[#C8841A] transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="text-center">
              <h3 className="font-playfair text-2xl text-[#1A2E1A] dark:text-[#FDF8F0] mb-2">
                Today's Special!
              </h3>
              <p className="font-dancing text-xl text-[#C8841A] mb-4">
                Chicken Pizza + Cafe Latte
              </p>
              <p className="text-[#5C3317] dark:text-[#FDF8F0]/70 mb-6">
                The combo everyone loves in Thamel
              </p>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/9779887165566?text=Hi! I'd like to order the Chicken Pizza + Cafe Latte combo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#C8841A] text-[#1A2E1A] py-3 rounded-xl font-bold hover:brightness-110 transition-all mb-4"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </a>
              
              {/* Maybe Later */}
              <button
                onClick={handleDismiss}
                className="text-[#5C3317] dark:text-[#FDF8F0]/60 text-sm hover:underline"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}