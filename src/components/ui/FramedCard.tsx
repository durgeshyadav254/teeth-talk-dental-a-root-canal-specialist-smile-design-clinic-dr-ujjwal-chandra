import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type FramedCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function FramedCard({ children, className = '', delay = 0 }: FramedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative bg-ivory p-6 md:p-8 border border-border ${className}`}
    >
      <span className="pointer-events-none absolute inset-2 border border-brass/30" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
