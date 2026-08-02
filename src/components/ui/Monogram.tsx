import { clinic } from '@/data/clinic'

type MonogramProps = {
  size?: 'sm' | 'md' | 'lg'
  light?: boolean
  className?: string
}

const sizes = {
  sm: 'h-10 w-10 text-lg',
  md: 'h-14 w-14 text-2xl',
  lg: 'h-20 w-20 text-4xl',
}

export function Monogram({ size = 'md', light = false, className = '' }: MonogramProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center border font-display ${sizes[size]} ${
        light
          ? 'border-brass/50 text-brass-soft'
          : 'border-brass/60 text-emerald'
      } ${className}`}
      aria-hidden
    >
      <span className="leading-none tracking-tight">{clinic.monogram}</span>
      <span
        className={`absolute inset-1 border ${light ? 'border-brass/25' : 'border-brass/30'}`}
      />
    </div>
  )
}
