import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/9779887165566"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 right-6 z-50 group"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
        <MessageCircle size={28} className="text-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-1 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          <span className="text-[#1A2E1A] text-sm font-medium">Order via WhatsApp</span>
        </div>
      </div>
    </motion.a>
  )
}