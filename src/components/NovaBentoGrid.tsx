import { BentoCard } from '@/components/ui/BentoCard'
import { Sparkles, Shuffle, Palette, MessageCircle, Shield, Gift } from 'lucide-react'

export const NovaBentoGrid = () => {
  return (
    <section id="beneficios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Pequeño detalle.{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gran diferencia.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BentoCard
            icon={<Sparkles className="h-8 w-8" />}
            title="Se ve caro"
            description="Acabados premium + herrajes metálicos de alta calidad. Parece diseñador, porque lo es."
          />
          <BentoCard
            icon={<Shuffle className="h-8 w-8" />}
            title="Personalizable"
            description="Tassels intercambiables en segundos. Un charm, infinitas vibes."
          />
          <BentoCard
            icon={<Palette className="h-8 w-8" />}
            title="Combina con todo"
            description="Colores neutros + acentos llamativos. Tu outfit siempre agradece."
          />
          <BentoCard
            icon={<MessageCircle className="h-8 w-8" />}
            title="Conversation starter"
            description="La gente te va a preguntar dónde lo compraste. Siempre."
          />
          <BentoCard
            icon={<Shield className="h-8 w-8" />}
            title="Soft + resistente"
            description="Plush anti-shed, costuras reforzadas. Hecho para durar."
          />
          <BentoCard
            icon={<Gift className="h-8 w-8" />}
            title="Regalo perfecto"
            description="Empaque premium incluido. Lista para impresionar."
          />
        </div>
      </div>
    </section>
  )
}