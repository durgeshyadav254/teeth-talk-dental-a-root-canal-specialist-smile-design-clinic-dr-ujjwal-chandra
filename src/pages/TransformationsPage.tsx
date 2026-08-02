import { useMemo, useState } from 'react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { CtaBand } from '@/components/home/CtaBand'
import { galleryImages } from '@/data/clinic'
import { motion } from 'framer-motion'

const filters = ['All', 'Practice', 'Cases'] as const

export function TransformationsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const images = useMemo(
    () =>
      filter === 'All'
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter],
  )

  return (
    <>
      <SEO
        title="Transformations"
        description="Clinical cases and practice gallery from Teeth Talk Dental — smile design and restorative dentistry in Noida."
      />
      <PageHero
        chapter="Gallery"
        label="Transformations"
        title="The work, in context."
        subtitle="Practice interiors and clinical documentation — evidence of craft, not spectacle."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-[13px] tracking-wide border transition-colors ${
                  filter === f
                    ? 'bg-emerald text-ivory border-emerald'
                    : 'border-border text-ink-muted hover:border-brass'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, i) => (
              <motion.figure
                key={img.src + img.alt}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative bg-ivory p-3 border border-border"
              >
                <span className="pointer-events-none absolute inset-2 border border-brass/30" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover transition-[filter] duration-700 grayscale-[12%] group-hover:grayscale-0"
                  loading="lazy"
                />
                <figcaption className="relative z-10 mt-3 text-center text-sm text-ink-muted">
                  {img.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-center font-display text-2xl text-emerald">
              Clinic moments
            </h2>
            <video
              className="mx-auto mt-8 aspect-video max-w-3xl w-full border border-border bg-emerald-rich object-cover"
              controls
              preload="none"
              poster="/images/photo-001.jpg"
            >
              <source src="/videos/video-001.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
