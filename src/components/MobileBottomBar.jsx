import { Link } from 'react-router-dom'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A2E1A] p-2 pb-safe">
      <div className="grid grid-cols-2 gap-2">
        <Link
          to="/menu"
          className="flex items-center justify-center gap-2 bg-[#FDF8F0] text-[#1A2E1A] py-3 rounded-xl font-bold hover:brightness-95 transition-all"
        >
          View Menu
        </Link>
        <Link
          to="/order"
          className="flex items-center justify-center gap-2 bg-[#C8841A] text-[#1A2E1A] py-3 rounded-xl font-bold hover:brightness-110 transition-all"
        >
          Order Now
        </Link>
      </div>
    </div>
  )
}