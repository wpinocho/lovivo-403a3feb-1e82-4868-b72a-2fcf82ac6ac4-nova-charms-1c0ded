import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Se cae?',
    answer: 'El herraje es tipo mosquetón premium. Se engancha seguro y aguanta hasta 5kg de peso. No se cae ni de broma.',
  },
  {
    question: '¿Cómo cambio el tassel?',
    answer: 'Sistema snap fácil. Desenroscas, cambias el tassel, vuelves a enroscar. Toma 5 segundos literal.',
  },
  {
    question: '¿Qué tan grande es?',
    answer: 'Aprox 8cm de alto x 6cm de ancho. Tamaño perfecto: se nota pero no estorba.',
  },
  {
    question: '¿Cómo lo limpio?',
    answer: 'Paño húmedo suave. Si se ensucia mucho, lavado a mano con agua tibia y jabón neutro. Secar al aire.',
  },
  {
    question: '¿Envíos y devoluciones?',
    answer: 'Envío gratis en compras +$500. Llega en 24-72h. Cambios y devoluciones en 30 días sin preguntas.',
  },
]

export const NovaFAQ = () => {
  return (
    <section id="faq" className="py-24 relative bg-muted/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-2xl px-6 border-0"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}