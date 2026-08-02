import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { clinic, navLinks } from '@/data/clinic'
import { Monogram } from '@/components/ui/Monogram'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(28,25,21,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Monogram size="sm" />
          <div className="leading-tight">
            <p className="font-display text-[1.05rem] text-emerald tracking-tight">
              {clinic.brand}
            </p>
            <p className="hidden text-[10px] uppercase chapter-track text-ink-faint sm:block">
              {clinic.doctor.credentials}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `font-sans text-[13px] tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-emerald' : 'text-ink-muted hover:text-emerald'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/consultation" variant="primary" className="!py-3 !px-6">
            Request a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-border text-emerald xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="border-t border-border bg-paper paper-grain xl:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-3.5 font-display text-2xl text-emerald"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button to="/consultation" onClick={() => setOpen(false)}>
                  Request a Consultation
                </Button>
                <Button href={clinic.phoneHref} variant="secondary">
                  Call {clinic.phone}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
