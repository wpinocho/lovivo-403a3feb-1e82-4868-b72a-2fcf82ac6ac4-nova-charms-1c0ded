import { useState } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import { cn } from '@/lib/utils'
import { useCart } from '@/contexts/CartContext'
import { useCartUI } from '@/components/CartProvider'
import { toast } from 'sonner'

interface ConfiguratorProps {
  product: any
}

export const NovaConfigurator = ({ product }: ConfiguratorProps) => {
  const [selectedColor, setSelectedColor] = useState('Violeta')
  const { addItem } = useCart()
  const { openCart } = useCartUI()

  const colors = [
    { name: 'Negro', hex: '#0A0A0A' },
    { name: 'Marfil', hex: '#F5F1E8' },
    { name: 'Violeta', hex: '#7C5CFC' },
    { name: 'Azul', hex: '#6E7AFF' },
  ]

  const handleAddToCart = () => {
    if (!product) return
    
    const variant = product.variants?.find(
      (v: any) => v.options?.Color === selectedColor
    )
    
    if (variant) {
      addItem(product, variant)
      toast.success('¡Agregado al carrito!')
      setTimeout(() => openCart(), 500)
    }
  }

  const selectedVariant = product?.variants?.find(
    (v: any) => v.options?.Color === selectedColor
  )

  return (
    <section id="configurador" className="py-24 relative">
      <div className="aurora-orb-2 top-0 left-[-200px] opacity-40" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Arma tu NOVA en{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              10 segundos
            </span>
          </h2>
        </div>

        <div className="glass-card rounded-[2rem] p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Preview */}
            <div className="relative aspect-square rounded-3xl bg-muted/30 overflow-hidden">
              {selectedVariant?.options?.image && (
                <img
                  src={selectedVariant.options.image}
                  alt={`NOVA Charm ${selectedColor}`}
                  className="w-full h-full object-contain p-8"
                />
              )}
            </div>

            {/* Right - Configurator */}
            <div className="space-y-8">
              {/* Color Selector */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">
                  Color Charm
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        'relative aspect-square rounded-2xl border-2 transition-all',
                        selectedColor === color.name
                          ? 'border-primary scale-105 shadow-[0_0_20px_rgba(124,92,252,0.4)]'
                          : 'border-white/10 hover:border-white/30'
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    $590 MXN
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    $790
                  </span>
                </div>
                <p className="text-sm text-accent font-medium">
                  Ahorra 25% • Oferta limitada
                </p>
              </div>

              {/* CTA */}
              <GradientButton
                onClick={handleAddToCart}
                className="w-full"
              >
                Agregar al carrito — $590 MXN
              </GradientButton>

              {/* Upsell */}
              <div className="text-center p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <p className="text-sm text-foreground font-medium mb-1">
                  Bundle 2x - ahorra 16%
                </p>
                <p className="text-xs text-muted-foreground">
                  $990 MXN (normalmente $1,180)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}