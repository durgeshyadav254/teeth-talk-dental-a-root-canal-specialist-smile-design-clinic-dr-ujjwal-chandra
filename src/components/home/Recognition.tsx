import { awards } from '@/data/clinic'
import { ChapterLabel } from '@/components/ui/ChapterLabel'
import { motion } from 'framer-motion'

export function Recognition() {
  return (
    <section className="border-y border-border bg-ivory py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ChapterLabel label="Recognition" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="flex flex-col items-center border border-brass/35 px-4 py-8 text-center"
            >
              <div className="mb-4 h-px w-8 bg-brass" />
              <h3 className="font-display text-lg text-emerald">{award.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{award.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
