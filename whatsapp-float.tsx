import { WhatsAppIcon } from './whatsapp-icon'
import { buildWhatsAppLink } from '@/lib/products'

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink('السلام عليكم، أرغب في الطلب من مناحل آل زعفان.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  )
}
