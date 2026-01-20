import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { cn } from '@/lib/utils'

export const NovaNav = () => {
  const [scrolled, setScrolled] = useState(false)
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-3 glass-card border-b border-white/10'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="NOVA CHARMS"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Center Nav - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('coleccion')}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Colección
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('configurador')}
              className="hidden sm:inline-flex text-foreground hover:text-primary"
            >
              Comprar
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative"
              aria-label="Ver carrito"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}