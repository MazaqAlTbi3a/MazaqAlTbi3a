'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { WhatsAppIcon } from './whatsapp-icon'
import { buildWhatsAppLink } from '@/lib/products'

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#products', label: 'المنتجات' },
  { href: '#features', label: 'لماذا نحن' },
  { href: '#about', label: 'من نحن' },
  { href: '#contact', label: 'تواصل معنا' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <HoneyMark className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-primary">مناحل آل زعفان</span>
            <span className="text-xs text-muted-foreground">عسل طبيعي أصيل</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink('السلام عليكم، أرغب في الاستفسار عن منتجات مناحل آل زعفان.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          اطلب عبر واتساب
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden" aria-label="التنقل للجوال">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink('السلام عليكم، أرغب في الاستفسار عن منتجات مناحل آل زعفان.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 mb-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              اطلب عبر واتساب
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function HoneyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 7 8 9.5v5l4 2.5 4-2.5v-5L12 7Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
    </svg>
  )
}
