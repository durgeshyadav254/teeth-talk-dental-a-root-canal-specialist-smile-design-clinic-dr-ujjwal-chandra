import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { CtaBand } from '@/components/home/CtaBand'
import { services } from '@/data/clinic'

export function CareDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/care" replace />

  return (
    <>
      <SEO title={service.title} description={service.description} />
      <PageHero
        chapter="Care"
        label={service.subtitle}
        title={service.title}
        subtitle={service.description}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-3 border border-brass/35" />
            <img
              src={service.image}
              alt={service.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-emerald">What to expect</h2>
            <ul className="mt-6 space-y-4 text-ink-muted">
              <li className="border-l border-brass pl-4">
                A thorough examination and clear diagnosis in plain language.
              </li>
              <li className="border-l border-brass pl-4">
                A treatment plan tailored to comfort, longevity, and aesthetics.
              </li>
              <li className="border-l border-brass pl-4">
                Specialist technique with attention to detail at every stage.
              </li>
              <li className="border-l border-brass pl-4">
                Follow-up guidance so results remain composed over time.
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/consultation">Request a Consultation</Button>
              <Button to="/care" variant="secondary">
                All care offerings
              </Button>
            </div>
            <Link to="/care" className="sr-only">
              Back to care
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
