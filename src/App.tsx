import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'

const PhilosophyPage = lazy(() =>
  import('@/pages/PhilosophyPage').then((m) => ({ default: m.PhilosophyPage })),
)
const PracticePage = lazy(() =>
  import('@/pages/PracticePage').then((m) => ({ default: m.PracticePage })),
)
const DoctorPage = lazy(() =>
  import('@/pages/DoctorPage').then((m) => ({ default: m.DoctorPage })),
)
const CarePage = lazy(() =>
  import('@/pages/CarePage').then((m) => ({ default: m.CarePage })),
)
const CareDetailPage = lazy(() =>
  import('@/pages/CareDetailPage').then((m) => ({ default: m.CareDetailPage })),
)
const TransformationsPage = lazy(() =>
  import('@/pages/TransformationsPage').then((m) => ({
    default: m.TransformationsPage,
  })),
)
const ConsultationPage = lazy(() =>
  import('@/pages/ConsultationPage').then((m) => ({
    default: m.ConsultationPage,
  })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const AssessmentPage = lazy(() =>
  import('@/pages/AssessmentPage').then((m) => ({ default: m.AssessmentPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-ink-faint">
      <span className="font-display text-lg text-emerald">Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="philosophy" element={<PhilosophyPage />} />
              <Route path="the-practice" element={<PracticePage />} />
              <Route path="doctor" element={<DoctorPage />} />
              <Route path="care" element={<CarePage />} />
              <Route path="care/:slug" element={<CareDetailPage />} />
              <Route path="transformations" element={<TransformationsPage />} />
              <Route path="consultation" element={<ConsultationPage />} />
              <Route path="correspondence" element={<ContactPage />} />
              <Route path="assessment" element={<AssessmentPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}
