import { Phone, MapPin, Clock } from 'lucide-react'
import { WhatsAppIcon } from './whatsapp-icon'
import { buildWhatsAppLink } from '@/lib/products'

export function SiteFooter() {
  return (
    <>
      <section id="contact" className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-bold md:text-4xl">
              اطلب عسلك الآن
            </h2>
            <p className="mt-3 text-pretty text-primary-foreground/85">
              تواصل معنا مباشرةً عبر واتساب لإتمام طلبك أو الاستفسار عن منتجاتنا.
            </p>
            <a
              href={buildWhatsAppLink('السلام عليكم، أرغب في الطلب من مناحل آل زعفان.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
          </div>

          <div className="mt-12 grid gap-6 text-center sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-accent" />
              <span className="font-semibold">واتساب</span>
              <span dir="ltr" className="text-primary-foreground/80">01111238638</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-accent" />
              <span className="font-semibold">مواعيد العمل</span>
              <span className="text-primary-foreground/80">يوميًا من 9 صباحًا حتى 10 مساءً</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="font-semibold">التوصيل</span>
              <span className="text-primary-foreground/80">لجميع المحافظات</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p className="font-serif text-lg font-bold text-primary">مناحل آل زعفان</p>
          <p className="mt-2">
            © {new Date().getFullYear()} جميع الحقوق محفوظة — عسل طبيعي أصيل بجودة تثق بها.
          </p>
        </div>
      </footer>
    </>
  )
}
