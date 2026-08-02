import { Link } from 'react-router-dom'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { CtaBand } from '@/components/home/CtaBand'
import { services } from '@/data/clinic'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function CarePage() {
  return (
    <>
      <SEO
        title="Care"
        description="Root canal therapy, smile design, implants, crowns, preventive and urgent dental care at Teeth Talk Dental, Noida."
      />
      <PageHero
        chapter="Care"
        label="Services"
        title="Specialist offerings"
        subtitle="From precise endodontics to composed aesthetic dentistry — care planned for longevity."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative border border-border bg-ivory overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-2 z-10 border border-brass/25" />
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="relative z-20 p-6">
                <p className="text-[11px] uppercase chapter-track text-brass">
                  {service.subtitle}
                </p>
                <h2 className="mt-2 font-display text-2xl text-emerald">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={`/care/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-[13px] text-emerald"
                >
                  View details <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
