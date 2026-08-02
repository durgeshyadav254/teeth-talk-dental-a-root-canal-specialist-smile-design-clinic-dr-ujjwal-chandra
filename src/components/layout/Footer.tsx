import { Link } from 'react-router-dom'
import { clinic, navLinks } from '@/data/clinic'
import { Monogram } from '@/components/ui/Monogram'
import { BrassRule } from '@/components/ui/ChapterLabel'

export function Footer() {
  return (
    <footer className="bg-emerald-rich text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Monogram light size="md" />
              <div>
                <p className="font-display text-2xl">{clinic.brand}</p>
                <p className="mt-1 text-sm text-sage">{clinic.doctor.short}</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-sage/90">
              A private practice devoted to enduring endodontics and aesthetic
              dentistry — by appointment in Sector 46, Noida.
            </p>
            <p className="mt-6 font-display italic text-brass-soft">
              {clinic.footerLine}
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase chapter-track text-brass">Explore</p>
            <BrassRule light className="mt-3 mb-5 origin-left" />
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sage transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/assessment"
                  className="text-sage transition-colors hover:text-ivory"
                >
                  Smile Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase chapter-track text-brass">
              Correspondence
            </p>
            <BrassRule light className="mt-3 mb-5 origin-left" />
            <ul className="space-y-3 text-sm text-sage">
              <li>
                <a href={clinic.phoneHref} className="hover:text-ivory">
                  {clinic.phone}
                </a>
              </li>
              <li>{clinic.address.line1}</li>
              <li>{clinic.address.line2}</li>
              <li>{clinic.hours.summary}</li>
              <li>
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brass-soft hover:text-brass"
                >
                  Open in Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-sage/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.brand}. All rights reserved.
          </p>
          <p>Sector 46 · Noida · Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  )
}
