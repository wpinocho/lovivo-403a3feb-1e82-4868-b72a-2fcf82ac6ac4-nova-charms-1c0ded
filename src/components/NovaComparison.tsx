import { Check, X } from 'lucide-react'

const features = [
  { name: 'Materiales premium', nova: true, generic: false },
  { name: 'Herrajes metálicos', nova: true, generic: false },
  { name: 'Acabados de lujo', nova: true, generic: false },
  { name: 'Empaque premium', nova: true, generic: false },
  { name: 'Tassels intercambiables', nova: true, generic: false },
  { name: 'Garantía de durabilidad', nova: true, generic: false },
]

export const NovaComparison = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            No es un charm más.{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Es un statement.
            </span>
          </h2>
        </div>

        <div className="glass-card rounded-[2rem] overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10">
            <div className="col-span-1" />
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">NOVA Charms</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-muted-foreground">Genéricos</p>
            </div>
          </div>

          {features.map((feature, i) => (
            <div
              key={i}
              className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 last:border-0"
            >
              <div className="col-span-1">
                <p className="text-sm text-foreground">{feature.name}</p>
              </div>
              <div className="flex justify-center">
                {feature.nova ? (
                  <Check className="h-6 w-6 text-primary" />
                ) : (
                  <X className="h-6 w-6 text-muted-foreground/30" />
                )}
              </div>
              <div className="flex justify-center">
                {feature.generic ? (
                  <Check className="h-6 w-6 text-primary" />
                ) : (
                  <X className="h-6 w-6 text-muted-foreground/30" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}