import { Helmet } from 'react-helmet-async'
import { SEO } from '@/components/ui/SEO'
import { Hero } from '@/components/home/Hero'
import { EstStrip } from '@/components/home/EstStrip'
import { Philosophy } from '@/components/home/Philosophy'
import { CareOfferings } from '@/components/home/CareOfferings'
import { DoctorPreview } from '@/components/home/DoctorPreview'
import { Transformations } from '@/components/home/Transformations'
import { Testimonials } from '@/components/home/Testimonials'
import { Recognition } from '@/components/home/Recognition'
import { CtaBand } from '@/components/home/CtaBand'
import { clinic } from '@/data/clinic'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: clinic.brand,
  description:
    'Root canal specialist and smile design clinic in Sector 46, Noida.',
  telephone: clinic.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinic.address.line1,
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: clinic.coordinates.lat,
    longitude: clinic.coordinates.lng,
  },
  openingHours: 'Mo-Su 11:00-20:30',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: clinic.rating,
    reviewCount: clinic.reviewCount,
  },
  url: clinic.mapsUrl,
}

export function Home() {
  return (
    <>
      <SEO />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Hero />
      <EstStrip />
      <Philosophy />
      <CareOfferings />
      <DoctorPreview />
      <Transformations />
      <Testimonials />
      <Recognition />
      <CtaBand />
    </>
  )
}
