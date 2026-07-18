import { ProductCard } from './product-card'
import { products } from '@/lib/products'

export function ProductsSection() {
  return (
    <section id="products" className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent-foreground">تشكيلتنا المميزة</span>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-primary md:text-4xl">
            منتجات العسل الطبيعي
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            اختر من تشكيلتنا المتنوعة من العسل الأصيل، واطلب مباشرةً عبر واتساب بكل سهولة.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
