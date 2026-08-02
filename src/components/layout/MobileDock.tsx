import { CalendarHeart, Phone, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { clinic } from '@/data/clinic'

const items = [
  { to: '/consultation', label: 'Consult', icon: CalendarHeart },
  { href: clinic.phoneHref, label: 'Call', icon: Phone },
  { to: '/assessment', label: 'Assessment', icon: Sparkles },
] as const

export function MobileDock() {
  const { pathname } = useLocation()

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-paper/95 backdrop-blur-md lg:hidden pb-[env(safe-area-inset-bottom)]">
      <nav className="mx-auto grid max-w-lg grid-cols-3" aria-label="Quick actions">
        {items.map((item) => {
          const Icon = item.icon
          const active = 'to' in item && pathname === item.to
          const className = `flex flex-col items-center gap-1 py-3 text-[11px] tracking-wide ${
            active ? 'text-emerald' : 'text-ink-muted'
          }`

          if ('href' in item) {
            return (
              <a key={item.label} href={item.href} className={className}>
                <Icon size={18} strokeWidth={1.5} />
                {item.label}
              </a>
            )
          }

          return (
            <Link key={item.label} to={item.to} className={className}>
              <Icon size={18} strokeWidth={1.5} />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
