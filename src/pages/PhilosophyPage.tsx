import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { CtaBand } from '@/components/home/CtaBand'
import { clinic } from '@/data/clinic'

export function PhilosophyPage() {
  return (
    <>
      <SEO
        title="Philosophy"
        description="Our approach to specialist dentistry — precision, preservation, and predictability at Teeth Talk Dental, Noida."
      />
      <PageHero
        chapter="Chapter I"
        label="Philosophy"
        title="Quiet excellence, lasting results."
        subtitle={clinic.philosophy}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6 text-ink-muted leading-relaxed">
            <h2 className="font-display text-3xl text-emerald">
              Precision. Preservation. Predictability.
            </h2>
            <p>
              We treat every tooth as architecture — load-bearing, light-catching,
              and inseparable from the face it serves. Root canal therapy is
              never rushed; smile design is never theatrical.
            </p>
            <p>
              Our philosophy favours conservation wherever possible: removing
              only what disease demands, restoring with materials chosen for
              longevity, and planning aesthetics that will still feel like you
              a decade from now.
            </p>
            <p>
              Consultations are unhurried. You will leave understanding the
              diagnosis, the options, and the rationale — never pressured into
              a decision.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-brass/35" />
            <img
              src="/images/photo-011.jpg"
              alt="Specialist treatment suite"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
