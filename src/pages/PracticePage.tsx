import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { CtaBand } from '@/components/home/CtaBand'
import { clinic } from '@/data/clinic'

export function PracticePage() {
  return (
    <>
      <SEO
        title="The Practice"
        description="Visit Teeth Talk Dental at Gardenia Glory Market, Sector 46, Noida — a specialist root canal and smile design clinic."
      />
      <PageHero
        chapter="The Practice"
        label="Clinic Story"
        title="A composed clinical setting in Sector 46."
        subtitle="Gardenia Glory Market — designed for calm consultations and precise specialist care."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="/images/photo-001.jpg"
              alt="Clinic hallway and waiting area"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <img
              src="/images/photo-014.jpg"
              alt="Teeth Talk Dental exterior"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-3xl text-emerald">Visit us</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                {clinic.address.full}
              </p>
              <p className="mt-4 text-ink-muted">{clinic.hours.summary}</p>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border-b border-brass text-[13px] tracking-wide text-emerald"
              >
                Get directions
              </a>
            </div>
            <div className="overflow-hidden border border-border">
              <iframe
                title="Teeth Talk Dental on Google Maps"
                src={`https://maps.google.com/maps?q=${clinic.coordinates.lat},${clinic.coordinates.lng}&z=16&output=embed`}
                className="h-72 w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
