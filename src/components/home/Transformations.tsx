import { Link } from 'react-router-dom'
import { transformations } from '@/data/clinic'
import { ChapterLabel } from '@/components/ui/ChapterLabel'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export function Transformations() {
  return (
    <section className="bg-paper-deep/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ChapterLabel chapter="Chapter IV" label="Transformations" />
        <h2 className="mx-auto mt-8 max-w-2xl text-center font-display text-3xl text-emerald md:text-4xl text-balance">
          Cases composed with restraint.
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {transformations.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative bg-ivory p-3 border border-border">
                <span className="pointer-events-none absolute inset-2 border border-brass/30" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition-[filter] duration-700 grayscale-[15%] group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-emerald">{item.title}</h3>
              <p className="mt-1 font-display italic text-sm text-ink-muted">
                {item.caption}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/transformations" variant="secondary">
            View Transformations
          </Button>
          <Link to="/transformations" className="sr-only">
            Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
