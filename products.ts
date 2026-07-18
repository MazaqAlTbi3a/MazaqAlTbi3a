export const WHATSAPP_NUMBER = '201111238638' // 01111238638 بصيغة دولية

export type Product = {
  id: string
  name: string
  description: string
  price: number
  weight: string
  image: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'sidr',
    name: 'عسل السدر الجبلي',
    description: 'عسل السدر الفاخر المستخرج من أشجار السدر الجبلية، غني بالفوائد ومعروف بمذاقه المميز.',
    price: 350,
    weight: '1 كجم',
    image: '/images/honey-sidr.png',
    badge: 'الأكثر مبيعًا',
  },
  {
    id: 'talh',
    name: 'عسل الطلح',
    description: 'عسل الطلح الداكن ذو النكهة الغنية، يمتاز بلونه العميق وقيمته الغذائية العالية.',
    price: 220,
    weight: '1 كجم',
    image: '/images/honey-talh.png',
  },
  {
    id: 'clover',
    name: 'عسل البرسيم',
    description: 'عسل البرسيم الذهبي الفاتح، طعم لطيف ومتوازن يناسب جميع أفراد العائلة.',
    price: 150,
    weight: '1 كجم',
    image: '/images/honey-clover.png',
  },
  {
    id: 'wildflower',
    name: 'عسل زهور الربيع',
    description: 'عسل بري من رحيق زهور متعددة، عبق طبيعي ونكهة زهرية غنية.',
    price: 180,
    weight: '1 كجم',
    image: '/images/honey-wildflower.png',
  },
  {
    id: 'samar',
    name: 'عسل السمر (المجرى)',
    description: 'عسل السمر الداكن ذو الطابع القوي، مثالي لمحبي النكهات العميقة.',
    price: 260,
    weight: '1 كجم',
    image: '/images/honey-samar.png',
  },
  {
    id: 'comb',
    name: 'شمع العسل الطبيعي',
    description: 'قطع شمع العسل الطبيعية الكاملة، تحتوي على العسل بحالته الأصلية دون معالجة.',
    price: 200,
    weight: '500 جم',
    image: '/images/honey-comb.png',
    badge: 'طبيعي 100%',
  },
  {
    id: 'royal',
    name: 'عسل بغذاء الملكات',
    description: 'مزيج فاخر من العسل الطبيعي وغذاء ملكات النحل، لتعزيز الطاقة والمناعة.',
    price: 320,
    weight: '250 جم',
    image: '/images/honey-royal.png',
    badge: 'مميز',
  },
]

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
