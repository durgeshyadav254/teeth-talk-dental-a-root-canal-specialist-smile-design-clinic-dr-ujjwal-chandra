import { motion } from 'framer-motion'
import { clinic } from '@/data/clinic'
import { Monogram } from '@/components/ui/Monogram'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src="/images/photo-014.jpg"
          alt="Teeth Talk Dental clinic exterior"
          className="h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-rich/75 via-emerald/55 to-emerald-rich/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,41,32,0.45)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Monogram light size="lg" className="mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.35em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 font-sans text-[11px] uppercase text-brass-soft"
        >
          {clinic.est} · By appointment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-[clamp(2.6rem,7vw,5.25rem)] font-medium leading-[1.08] tracking-tight text-ivory text-balance"
        >
          {clinic.brand}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 max-w-xl font-sans text-base text-sage-wash/95 md:text-lg"
        >
          Root canal specialist & smile design clinic — Dr. Ujjwal Chandra Jha,
          MDS Gold Medalist. Dentistry with the patience of craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button to="/consultation" variant="light">
            Request a Consultation
          </Button>
          <Button
            to="/assessment"
            variant="secondary"
            className="!border-brass/60 !text-ivory hover:!bg-white/5"
          >
            Begin Your Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
