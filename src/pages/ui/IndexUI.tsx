import { NovaNav } from '@/components/NovaNav';
import { NovaHero } from '@/components/NovaHero';
import { NovaBentoGrid } from '@/components/NovaBentoGrid';
import { NovaConfigurator } from '@/components/NovaConfigurator';
import { NovaTestimonials } from '@/components/NovaTestimonials';
import { NovaComparison } from '@/components/NovaComparison';
import { NovaDropSection } from '@/components/NovaDropSection';
import { NovaFAQ } from '@/components/NovaFAQ';
import { NovaFooter } from '@/components/NovaFooter';
import { FloatingCart } from '@/components/FloatingCart';
import { GradientButton } from '@/components/ui/GradientButton';
import { useCart } from '@/contexts/CartContext';
import { useCartUI } from '@/components/CartProvider';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * NOVA CHARMS™ Landing Page
 * Dark-luxury premium e-commerce experience
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const { filteredProducts } = logic;
  const { getTotalItems } = useCart();
  const { openCart } = useCartUI();
  const totalItems = getTotalItems();

  // Get the main product (first one)
  const mainProduct = filteredProducts[0];

  const handleMobileCheckout = () => {
    const element = document.getElementById('configurador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>NOVA CHARMS™ - Charms Plush Premium | Tu bolsa, pero con personalidad</title>
        <meta
          name="description"
          content="Charms plush coleccionables con tassels intercambiables. Diseño premium, materiales de lujo. Drop limitado. Envío 24-72h."
        />
        <meta property="og:title" content="NOVA CHARMS™ - Tu bolsa, pero con personalidad" />
        <meta property="og:description" content="El detalle que hace que TODO se vea más pro. Charms plush + tassels intercambiables." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "NOVA Charm Premium",
          "image": "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/403a3feb-1e82-4868-b72a-2fcf82ac6ac4/nova-charm-violet.jpg",
          "description": "Charms plush coleccionables con tassels intercambiables. Materiales premium + herrajes metálicos.",
          "brand": {
            "@type": "Brand",
            "name": "NOVA CHARMS"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://novacharms.com",
            "priceCurrency": "MXN",
            "price": "590",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2314"
          }
        })}
      </script>

      <div className="min-h-screen bg-background font-sans">
        {/* Navigation */}
        <NovaNav />

        {/* Hero Section */}
        <NovaHero />

        {/* Bento Grid Benefits */}
        <NovaBentoGrid />

        {/* Product Configurator */}
        {mainProduct && <NovaConfigurator product={mainProduct} />}

        {/* Testimonials */}
        <NovaTestimonials />

        {/* Comparison Table */}
        <NovaComparison />

        {/* Drop Limited Offer */}
        <NovaDropSection />

        {/* FAQ */}
        <NovaFAQ />

        {/* Footer */}
        <NovaFooter />

        {/* Floating Cart */}
        <FloatingCart />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
          <div className="bg-background/95 backdrop-blur-lg border-t border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">NOVA Charm Premium</p>
                <p className="text-lg font-bold text-foreground">$590 MXN</p>
              </div>
              {totalItems > 0 ? (
                <GradientButton onClick={openCart} className="px-6 py-3 text-sm">
                  Ver carrito ({totalItems})
                </GradientButton>
              ) : (
                <GradientButton onClick={handleMobileCheckout} className="px-6 py-3 text-sm">
                  Comprar
                </GradientButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};