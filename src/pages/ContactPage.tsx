import type { ReactNode } from 'react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { clinic } from '@/data/clinic'
import { MapPin, Phone, Clock } from 'lucide-react'

export function ContactPage() {
  return (
    <>
      <SEO
        title="Correspondence"
        description={`Contact Teeth Talk Dental — ${clinic.address.full}. Phone ${clinic.phone}.`}
      />
      <PageHero
        chapter="Correspondence"
        label="Contact"
        title="We look forward to hearing from you."
        subtitle="Consultations by appointment · Sector 46, Noida"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Info
              icon={<Phone size={18} strokeWidth={1.5} />}
              title="Telephone"
              body={clinic.phone}
              href={clinic.phoneHref}
            />
            <Info
              icon={<MapPin size={18} strokeWidth={1.5} />}
              title="Address"
              body={`${clinic.address.line1}, ${clinic.address.line2}`}
              href={clinic.mapsUrl}
              external
            />
            <Info
              icon={<Clock size={18} strokeWidth={1.5} />}
              title="Hours"
              body={clinic.hours.summary}
            />
          </div>

          <div className="mt-12 overflow-hidden border border-border">
            <iframe
              title="Clinic location map"
              src={`https://maps.google.com/maps?q=${clinic.coordinates.lat},${clinic.coordinates.lng}&z=16&output=embed`}
              className="h-80 w-full md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button to="/consultation">Request a Consultation</Button>
            <Button href={clinic.whatsapp} external variant="secondary">
              WhatsApp
            </Button>
          </div>

          <div className="mt-16 mx-auto max-w-xl">
            <h2 className="text-center font-display text-2xl text-emerald">
              Weekly hours
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {clinic.hours.days.map((d) => (
                <li
                  key={d.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-ink-muted">{d.day}</span>
                  <span className="text-ink">{d.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

function Info({
  icon,
  title,
  body,
  href,
  external,
}: {
  icon: ReactNode
  title: string
  body: string
  href?: string
  external?: boolean
}) {
  const content = (
    <>
      <div className="mx-auto flex h-10 w-10 items-center justify-center border border-brass/40 text-brass">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-xl text-emerald">{title}</h3>
      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{body}</p>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="border border-border bg-ivory p-8 text-center transition-colors hover:border-brass/50"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <div className="border border-border bg-ivory p-8 text-center">{content}</div>
  )
}
