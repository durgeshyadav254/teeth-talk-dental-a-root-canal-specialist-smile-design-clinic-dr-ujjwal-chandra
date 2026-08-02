import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { clinic } from '@/data/clinic'
import { ChapterLabel } from '@/components/ui/ChapterLabel'

export function Philosophy() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ChapterLabel chapter="Chapter I" label="Philosophy" />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl text-emerald md:text-4xl lg:text-[2.75rem] leading-snug text-balance">
              Dentistry with the patience of craft.
            </h2>
            <p className="mt-6 max-w-[42ch] text-ink-muted leading-relaxed">
              {clinic.philosophy}
            </p>
            <p className="mt-5 max-w-[48ch] text-ink-muted leading-relaxed">
              At Teeth Talk Dental, specialist root canal care and smile design
              meet in a calm clinical setting — where every decision favours
              longevity over spectacle.
            </p>
            <Link
              to="/philosophy"
              className="mt-8 inline-block border-b border-brass pb-0.5 text-[13px] tracking-wide text-emerald transition-colors hover:border-emerald"
            >
              Read our approach
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-3 border border-brass/35" />
            <img
              src="/images/photo-001.jpg"
              alt="Calm waiting corridor at the practice"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
