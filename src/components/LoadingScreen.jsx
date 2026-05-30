import { motion } from 'framer-motion'
import { UtensilsCrossed, ShieldCheck } from 'lucide-react'

const letters = "FRESH BAKE".split("")

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#1A2E1A] flex flex-col items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Center Icon */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0, 0.2, 0.4, 1] }}
      >
        <UtensilsCrossed size={80} className="text-[#C8841A]" />
      </motion.div>

      {/* FRESH BAKE Letters */}
      <div className="flex mt-8">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="font-playfair text-cream text-4xl md:text-5xl font-bold tracking-[0.4em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.08,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Factory Outlet */}
      <motion.p
        className="font-dancing text-[#C8841A] text-2xl md:text-3xl mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Factory Outlet
      </motion.p>

      {/* Halal Badge */}
      <motion.div
        className="mt-6 flex items-center gap-2 bg-[#2D6A2D] px-4 py-2 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <ShieldCheck size={14} className="text-white" />
        <span className="text-white text-xs font-medium tracking-wider">
          HALAL CERTIFIED
        </span>
      </motion.div>

      {/* Loading Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
        <motion.div
          className="h-full bg-[#C8841A]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.8, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}