import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { clinic, credentials } from '@/data/clinic'
import { ChapterLabel } from '@/components/ui/ChapterLabel'
import { Button } from '@/components/ui/Button'

export function DoctorPreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ChapterLabel chapter="Chapter III" label="The Doctor" />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-3 border border-brass/40" />
            <img
              src="/images/photo-011.jpg"
              alt="Treatment suite at Teeth Talk Dental"
              className="aspect-[3/4] w-full object-cover grayscale-[20%] transition-[filter] duration-700 hover:grayscale-0"
              loading="lazy"
            />
          </motion.div>

          <div>
            <p className="font-sans text-[11px] uppercase chapter-track text-brass">
              MDS · Gold Medalist
            </p>
            <h2 className="mt-3 font-display text-3xl text-emerald md:text-4xl">
              {clinic.doctor.name}
            </h2>
            <p className="mt-2 text-ink-muted">{clinic.doctor.title}</p>
            <p className="mt-6 max-w-[52ch] text-ink-muted leading-relaxed">
              A practice built on quiet authority — specialist endodontics and
              smile design guided by academic distinction and a patient-first
              temperament. Every case is planned for comfort, clarity, and
              lasting outcomes.
            </p>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {credentials.slice(0, 4).map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr] gap-4 py-4 text-sm md:grid-cols-[180px_1fr]"
                >
                  <dt className="text-ink-faint">{row.label}</dt>
                  <dd className="text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Button to="/doctor" variant="secondary">
                Meet the Doctor
              </Button>
            </div>
            <Link to="/doctor" className="sr-only">
              Doctor profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
