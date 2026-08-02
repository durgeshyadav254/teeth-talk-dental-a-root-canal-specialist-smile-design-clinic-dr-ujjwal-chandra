import { useState, type FormEvent } from 'react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { clinic } from '@/data/clinic'

export function ConsultationPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const interest = String(data.get('interest') || '')
    const message = String(data.get('message') || '')

    const text = encodeURIComponent(
      `Consultation request — ${clinic.brand}\nName: ${name}\nPhone: ${phone}\nInterest: ${interest}\nMessage: ${message}`,
    )
    window.open(`https://wa.me/918826770113?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Consultation"
        description="Request a consultation at Teeth Talk Dental, Sector 46 Noida. Call +91 88267 70113."
      />
      <PageHero
        chapter="Consultation"
        label="By Appointment"
        title="Request a consultation."
        subtitle="Share a few particulars. Our team will respond to confirm a suitable time."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl text-emerald">Prefer to call?</h2>
            <p className="mt-4 text-ink-muted">
              Reach us directly during clinic hours.
            </p>
            <a
              href={clinic.phoneHref}
              className="mt-4 block font-display text-3xl text-emerald"
            >
              {clinic.phone}
            </a>
            <p className="mt-6 text-sm text-ink-muted">{clinic.hours.summary}</p>
            <p className="mt-2 text-sm text-ink-muted">{clinic.address.line1}</p>
            <p className="text-sm text-ink-muted">{clinic.address.line2}</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="border border-border bg-ivory p-6 md:p-8"
          >
            <div className="absolute" />
            {sent ? (
              <div className="py-10 text-center">
                <p className="font-display text-2xl text-emerald">
                  Thank you for writing.
                </p>
                <p className="mt-3 text-ink-muted">
                  WhatsApp should open with your details. If it did not, please
                  call us directly.
                </p>
                <Button
                  type="button"
                  className="mt-8"
                  variant="secondary"
                  onClick={() => setSent(false)}
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <div>
                  <label className="text-[12px] uppercase chapter-track text-ink-faint">
                    Area of interest
                  </label>
                  <select
                    name="interest"
                    className="mt-2 w-full border-0 border-b border-brass/50 bg-paper px-3 py-3 text-ink outline-none focus:border-emerald"
                    defaultValue="Root Canal Therapy"
                  >
                    {[
                      'Root Canal Therapy',
                      'Smile Design',
                      'Dental Implants',
                      'Crowns & Bridges',
                      'General Care',
                      'Urgent Care',
                    ].map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[12px] uppercase chapter-track text-ink-faint">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-y border-0 border-b border-brass/50 bg-paper px-3 py-3 text-ink outline-none focus:border-emerald"
                    placeholder="Kindly share a brief note about your concern…"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Request a Consultation
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="text-[12px] uppercase chapter-track text-ink-faint">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-brass/50 bg-paper px-3 py-3 text-ink outline-none focus:border-emerald"
      />
    </div>
  )
}
