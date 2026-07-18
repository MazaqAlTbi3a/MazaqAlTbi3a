import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { ProductsSection } from '@/components/products-section'
import { AboutSection } from '@/components/about-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <ProductsSection />
        <AboutSection />
        <SiteFooter />
      </main>
      <WhatsAppFloat />
    </div>
  )
}
