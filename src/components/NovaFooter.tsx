import { Input } from '@/components/ui/input'
import { GradientButton } from '@/components/ui/GradientButton'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export const NovaFooter = () => {
  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
            Recibe el próximo drop antes que nadie
          </h3>
          <div className="flex gap-3 mt-6">
            <Input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-muted/30 border-white/10 text-foreground placeholder:text-muted-foreground"
            />
            <GradientButton variant="secondary">
              Suscribir
            </GradientButton>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Soporte</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Centro de ayuda
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Info</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Envíos
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Devoluciones
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacidad
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Términos
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Social</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Hecho para tu feed. Diseñado para tu vida.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © 2025 NOVA CHARMS™. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}