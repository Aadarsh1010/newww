import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Menu from './pages/Menu'
import OrderOnline from './pages/OrderOnline'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

// Outside component
let appHasLoaded = false

export default function App() {
  const [isLoading, setIsLoading] = useState(!appHasLoaded)

  useEffect(() => {
    if (!appHasLoaded) {
      appHasLoaded = true
      const t = setTimeout(() => setIsLoading(false), 2800)
      return () => clearTimeout(t)
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) return <LoadingScreen />

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FDF8F0] dark:bg-[#1A1008] transition-colors duration-300">
        <ScrollToTop />
        <Header />
        <CartDrawer />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}