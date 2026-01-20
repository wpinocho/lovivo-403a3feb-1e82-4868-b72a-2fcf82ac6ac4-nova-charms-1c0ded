import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: 'Sofía R.',
    city: 'CDMX',
    rating: 5,
    text: 'Se ve de diseñador, neta.',
    featured: true,
  },
  {
    name: 'Diego M.',
    city: 'Guadalajara',
    rating: 5,
    text: 'La calidad está brutal. Vale cada peso.',
  },
  {
    name: 'Ana P.',
    city: 'Monterrey',
    rating: 5,
    text: 'Me han preguntado como 10 veces dónde lo compré.',
    featured: true,
  },
  {
    name: 'Carlos V.',
    city: 'Querétaro',
    rating: 5,
    text: 'El tassel intercambiable es genial. Cambio de vibe en 2 segundos.',
  },
  {
    name: 'Mariana L.',
    city: 'Puebla',
    rating: 5,
    text: 'Llegó en 48h. Empaque premium. 10/10',
  },
  {
    name: 'Luis G.',
    city: 'CDMX',
    rating: 5,
    text: 'Ya compré 3 para regalar. Todos quedan con cara de wow.',
  },
]

export const NovaTestimonials = () => {
  return (
    <section id="reviews" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            La gente no se aguanta{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              comentarlo
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={cn(
                'p-6 rounded-3xl glass-card',
                review.featured && 'md:col-span-2 lg:col-span-1'
              )}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg font-medium mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="text-foreground font-semibold">
              +2,000 reseñas verificadas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}