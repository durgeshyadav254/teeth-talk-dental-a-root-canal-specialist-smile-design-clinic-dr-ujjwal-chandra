import { clinic } from '@/data/clinic'
import { Star } from 'lucide-react'

export function EstStrip() {
  return (
    <section className="border-y border-border bg-paper-deep/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center text-sm text-ink-muted sm:flex-row sm:text-left lg:px-8">
        <p className="font-sans tracking-wide">
          <span className="text-emerald">Sector 46, Noida</span>
          <span className="mx-3 text-brass">·</span>
          By appointment
        </p>
        <p className="inline-flex items-center gap-2">
          <Star size={14} className="fill-brass text-brass" />
          <span>
            {clinic.rating} · {clinic.reviewCount} Google reviews
          </span>
        </p>
        <p>{clinic.hours.summary}</p>
      </div>
    </section>
  )
}
