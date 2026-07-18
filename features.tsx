import { Leaf, ShieldCheck, Truck, Award } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'طبيعي بالكامل',
    description: 'عسل نقي 100% دون أي إضافات أو معالجة صناعية.',
  },
  {
    icon: ShieldCheck,
    title: 'جودة مضمونة',
    description: 'نضمن لك الأصالة والجودة في كل عبوة نقدمها.',
  },
  {
    icon: Truck,
    title: 'توصيل سريع',
    description: 'نوصّل طلبك إلى باب منزلك بأسرع وقت وأمان.',
  },
  {
    icon: Award,
    title: 'خبرة عريقة',
    description: 'خبرة تمتد لأكثر من 15 عامًا في تربية النحل وإنتاج العسل.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-primary md:text-4xl">
            لماذا تختار مناحل آل زعفان؟
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            نلتزم بتقديم أجود أنواع العسل الطبيعي مع الحرص على رضاكم في كل خطوة.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                <feature.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
