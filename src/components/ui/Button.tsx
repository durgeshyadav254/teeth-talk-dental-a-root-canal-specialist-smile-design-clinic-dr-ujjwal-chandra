import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light'

type ButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-emerald text-ivory hover:bg-emerald-mid border border-emerald',
  secondary:
    'bg-transparent text-emerald border border-brass hover:border-brass-soft hover:bg-ivory/60',
  ghost:
    'bg-transparent text-ink border-b border-brass/60 rounded-none px-0 py-1 hover:border-brass',
  light:
    'bg-ivory text-emerald hover:bg-paper border border-ivory',
}

const base =
  'inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans text-[13px] tracking-wide transition-colors duration-500 rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-mid'

export function Button({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  external,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
