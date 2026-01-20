import { GradientButton } from '@/components/ui/GradientButton'
import { Star } from 'lucide-react'
import { Ticker } from '@/components/ui/Ticker'

export const NovaHero = () => {
  const scrollToConfigurator = () => {
    const element = document.getElementById('configurador')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToCollection = () => {
    const element = document.getElementById('coleccion')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background */}
      <div className="aurora-orb-1 top-[-200px] left-[-100px]" />
      <div className="aurora-orb-2 top-[100px] right-[-150px]" />
      <div className="aurora-orb-3 bottom-[0px] left-[50%]" />
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1]">
                Tu bolsa.{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Tu vibe.
                </span>{' '}
                Tu NOVA.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Charms plush coleccionables + tassels intercambiables. El detalle que hace que TODO se vea más pro.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GradientButton onClick={scrollToConfigurator}>
                Comprar ahora
              </GradientButton>
              <GradientButton variant="secondary" onClick={scrollToCollection}>
                Ver la colección
              </GradientButton>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-foreground font-semibold">4.8</span>
                <span className="text-muted-foreground">(2,314 reseñas)</span>
              </div>
              <div className="text-muted-foreground">
                Viral en TikTok / Reels
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent blur-3xl" />
              
              {/* Product Image */}
              <img
                src="/hero-charm.jpg"
                alt="NOVA Charm Premium"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />

              {/* Floating particles (simple decorative elements) */}
              <div className="absolute top-[10%] right-[10%] w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
              <div className="absolute bottom-[20%] left-[15%] w-3 h-3 rounded-full bg-secondary/60 animate-pulse delay-75" />
              <div className="absolute top-[60%] right-[20%] w-2 h-2 rounded-full bg-accent/60 animate-pulse delay-150" />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker at bottom */}
      <div className="absolute bottom-8 left-0 right-0">
        <Ticker
          items={[
            'Drop limitado',
            'Envío 24–72h',
            'Cambia tassels',
            'Diseño premium',
          ]}
        />
      </div>
    </section>
  )
}