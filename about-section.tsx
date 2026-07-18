import { Check } from 'lucide-react'

const points = [
  'مناحل خاصة في أنقى المراعي الطبيعية',
  'قطف وتعبئة بأيدٍ خبيرة دون معالجة صناعية',
  'فحص وضمان الجودة قبل وصوله إليك',
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="relative order-last md:order-first">
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/15 blur-2xl" aria-hidden="true" />
          <img
            src="/images/honey-comb.png"
            alt="شمع العسل الطبيعي مع العسل الذهبي"
            className="relative w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>

        <div>
          <span className="text-sm font-semibold text-accent-foreground">من نحن</span>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-primary md:text-4xl">
            شغفنا هو العسل الأصيل
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            في مناحل آل زعفان، توارثنا حرفة تربية النحل عبر السنين، وكرّسنا خبرتنا لإنتاج عسل
            طبيعي نقي يحمل نكهة الطبيعة الأصيلة. نحرص على كل تفصيلة من الخلية حتى وصول العبوة
            إلى منزلك، لنقدم لك منتجًا تثق به وتفخر بتقديمه لعائلتك.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
