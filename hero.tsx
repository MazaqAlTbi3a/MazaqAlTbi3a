import { WhatsAppIcon } from './whatsapp-icon'
import { buildWhatsAppLink } from '@/lib/products'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="text-center md:text-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            عسل طبيعي 100% من مناحلنا الخاصة
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            مناحل آل زعفان
            <span className="mt-2 block text-accent">أجود أنواع العسل الطبيعي</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-primary-foreground/85 md:mx-0 md:text-lg">
            نقدم لكم تشكيلة مختارة من العسل الأصيل المستخرج من أنقى المراعي الطبيعية، بجودة
            عالية ومذاق لا يُقاوم. اطلب الآن ويصلك أينما كنت.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href={buildWhatsAppLink('السلام عليكم، أرغب في الطلب من مناحل آل زعفان.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              اطلب عبر واتساب
            </a>
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
            >
              تصفح المنتجات
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6 text-center md:text-right">
            <div>
              <dt className="text-2xl font-bold text-accent">+15</dt>
              <dd className="text-xs text-primary-foreground/75">سنة خبرة</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-accent">+7</dt>
              <dd className="text-xs text-primary-foreground/75">أنواع عسل</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-accent">100%</dt>
              <dd className="text-xs text-primary-foreground/75">طبيعي مضمون</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/15 blur-2xl" aria-hidden="true" />
          <img
            src="/images/hero-honey.png"
            alt="عسل طبيعي فاخر ينساب من ملعقة العسل الخشبية"
            className="relative mx-auto w-full max-w-md rounded-[2rem] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
