import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import OrderOnline from './pages/OrderOnline'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
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