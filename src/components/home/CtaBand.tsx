import { motion } from 'framer-motion'
import { clinic } from '@/data/clinic'
import { Button } from '@/components/ui/Button'
import { Monogram } from '@/components/ui/Monogram'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-emerald py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] paper-grain" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Monogram light size="md" className="mx-auto" />
          <h2 className="mt-8 font-display text-3xl text-ivory md:text-4xl text-balance">
            Begin with a private consultation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sage">
            Consultations daily by appointment. Call{' '}
            <a href={clinic.phoneHref} className="text-brass-soft underline-offset-4 hover:underline">
              {clinic.phone}
            </a>{' '}
            or request a time below.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/consultation" variant="light">
              Request a Consultation
            </Button>
            <Button
              href={clinic.whatsapp}
              external
              variant="secondary"
              className="!border-brass/50 !text-ivory hover:!bg-white/5"
            >
              Message on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
