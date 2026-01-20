import { useState, useEffect } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import { Shield, Truck, RefreshCw } from 'lucide-react'

export const NovaDropSection = () => {
  const [time, setTime] = useState(15 * 60) // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) return 15 * 60 // Reset to 15 minutes
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const scrollToConfigurator = () => {
    const element = document.getElementById('configurador')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Intense purple glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="aurora-orb-1 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-60" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              Drop limitado:{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                cuando se acaban, se acabaron.
              </span>
            </h2>
          </div>

          {/* Countdown */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-3xl glass-card">
            <span className="text-muted-foreground text-sm font-medium">
              Siguiente drop en:
            </span>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-foreground font-mono">
                  {String(minutes).padStart(2, '0')}
                </span>
                <span className="text-xs text-muted-foreground">min</span>
              </div>
              <span className="text-2xl text-primary">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-foreground font-mono">
                  {String(seconds).padStart(2, '0')}
                </span>
                <span className="text-xs text-muted-foreground">seg</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <GradientButton
            onClick={scrollToConfigurator}
            className="text-lg px-12 py-6"
          >
            Quiero el mío
          </GradientButton>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span>Envío 24–72h</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-primary" />
              <span>Cambios fáciles</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Pago seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}