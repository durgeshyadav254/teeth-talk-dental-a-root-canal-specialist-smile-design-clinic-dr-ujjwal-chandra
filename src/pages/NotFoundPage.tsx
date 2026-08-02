import { SEO } from '@/components/ui/SEO'
import { Button } from '@/components/ui/Button'
import { Monogram } from '@/components/ui/Monogram'

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-32 text-center">
        <Monogram size="lg" />
        <h1 className="mt-8 font-display text-4xl text-emerald">Page not found</h1>
        <p className="mt-3 text-ink-muted">
          This corridor does not lead anywhere. Shall we return to the entrance?
        </p>
        <Button to="/" className="mt-8">
          Return home
        </Button>
      </section>
    </>
  )
}
