import { motion } from 'framer-motion'
import { ChapterLabel } from './ChapterLabel'

type PageHeroProps = {
  chapter?: string
  label: string
  title: string
  subtitle?: string
}

export function PageHero({ chapter, label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-paper-deep/40 pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <ChapterLabel chapter={chapter} label={label} />
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 font-display text-4xl text-emerald md:text-5xl text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-5 max-w-2xl text-ink-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
