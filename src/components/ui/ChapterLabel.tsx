import { motion } from 'framer-motion'

type ChapterLabelProps = {
  chapter?: string
  label: string
  light?: boolean
  className?: string
}

export function ChapterLabel({
  chapter,
  label,
  light = false,
  className = '',
}: ChapterLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center gap-3 ${className}`}
    >
      {chapter && (
        <span
          className={`font-sans text-[11px] uppercase chapter-track ${
            light ? 'text-brass-soft' : 'text-brass'
          }`}
        >
          {chapter}
        </span>
      )}
      <BrassRule light={light} />
      <span
        className={`font-sans text-[11px] uppercase chapter-track ${
          light ? 'text-sage' : 'text-ink-muted'
        }`}
      >
        {label}
      </span>
    </motion.div>
  )
}

export function BrassRule({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px w-10 origin-center ${light ? 'bg-brass/50' : 'bg-brass'} ${className}`}
    />
  )
}
