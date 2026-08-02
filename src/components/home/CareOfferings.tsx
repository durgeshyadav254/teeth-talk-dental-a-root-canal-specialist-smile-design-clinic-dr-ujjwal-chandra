import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/clinic'
import { ChapterLabel } from '@/components/ui/ChapterLabel'
import { FramedCard } from '@/components/ui/FramedCard'

export function CareOfferings() {
  return (
    <section className="bg-sage-wash/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ChapterLabel chapter="Chapter II" label="Care Offerings" />
        <h2 className="mx-auto mt-8 max-w-2xl text-center font-display text-3xl text-emerald md:text-4xl text-balance">
          Specialist care, composed with intention.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FramedCard key={service.slug} delay={i * 0.06}>
              <p className="font-sans text-[11px] uppercase chapter-track text-brass">
                {service.subtitle}
              </p>
              <h3 className="mt-3 font-display text-2xl text-emerald">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
              <Link
                to={`/care/${service.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] tracking-wide text-emerald transition-colors hover:text-emerald-mid"
              >
                Learn more <ArrowUpRight size={14} />
              </Link>
            </FramedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
