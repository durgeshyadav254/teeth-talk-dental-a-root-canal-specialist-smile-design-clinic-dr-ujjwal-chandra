import { Helmet } from 'react-helmet-async'
import { clinic } from '@/data/clinic'

type SEOProps = {
  title?: string
  description?: string
  path?: string
}

export function SEO({
  title,
  description = 'Teeth Talk Dental — Root canal specialist & smile design clinic in Sector 46, Noida. Dr. Ujjwal Chandra Jha, MDS Gold Medalist.',
  path = '/',
}: SEOProps) {
  const fullTitle = title
    ? `${title} · ${clinic.brand}`
    : `${clinic.brand} | ${clinic.doctor.short} — Noida`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={path} />
    </Helmet>
  )
}
