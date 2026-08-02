import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { CtaBand } from '@/components/home/CtaBand'
import { clinic, credentials } from '@/data/clinic'

export function DoctorPage() {
  return (
    <>
      <SEO
        title={clinic.doctor.name}
        description={`${clinic.doctor.name}, ${clinic.doctor.credentials} — Root canal specialist and smile design clinician at Teeth Talk Dental, Noida.`}
      />
      <PageHero
        chapter="The Doctor"
        label="Credentials"
        title={clinic.doctor.name}
        subtitle={`${clinic.doctor.credentials} · ${clinic.doctor.title}`}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 border border-brass/40" />
            <img
              src="/images/photo-011.jpg"
              alt="Clinical environment of Dr. Ujjwal Chandra Jha"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="max-w-[56ch] text-ink-muted leading-relaxed">
              Dr. Ujjwal Chandra Jha leads Teeth Talk Dental with a specialist
              focus on endodontics and smile design. As an MDS Gold Medalist, he
              brings academic rigor to everyday clinical decisions — from complex
              root canal therapy to aesthetic rehabilitations that honour the
              individual face.
            </p>
            <p className="mt-5 max-w-[56ch] text-ink-muted leading-relaxed">
              Patients value a measured manner, clear explanations, and
              treatment planned for comfort as much as for outcome. The practice
              ethos is simple: do the exacting work quietly, and let the results
              speak.
            </p>

            <h2 className="mt-12 font-display text-2xl text-emerald">
              Credential ledger
            </h2>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {credentials.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6"
                >
                  <dt className="text-sm text-ink-faint">{row.label}</dt>
                  <dd className="text-sm text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
