import { useState, type FormEvent } from 'react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { clinic } from '@/data/clinic'

const steps = [
  { id: 1, label: 'Introduction' },
  { id: 2, label: 'Portraiture' },
  { id: 3, label: 'Correspondence' },
  { id: 4, label: 'Confirmation' },
] as const

const goals = [
  'Whiter, more luminous teeth',
  'Alignment without spectacle',
  'Restore a damaged tooth',
  'Relief from pain or sensitivity',
  'A full smile makeover',
  'A second opinion',
]

export function AssessmentPage() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<string[]>([])
  const [note, setNote] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const toggle = (goal: string) => {
    setSelected((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    )
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Smile Assessment — ${clinic.brand}\nName: ${name}\nPhone: ${phone}\nGoals: ${selected.join(', ') || '—'}\nNote: ${note || '—'}`,
    )
    window.open(`https://wa.me/918826770113?text=${text}`, '_blank')
    setStep(4)
  }

  return (
    <>
      <SEO
        title="Smile Assessment"
        description="Begin your smile assessment with Teeth Talk Dental — a gracious first step toward specialist care in Noida."
      />
      <PageHero
        chapter="Assessment"
        label="Smile Analysis"
        title="Begin your assessment."
        subtitle="A four-chapter introduction to your goals — our concierge will follow within two business days."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <ol className="mb-12 flex items-center justify-between gap-2">
            {steps.map((s, i) => (
              <li key={s.id} className="flex flex-1 items-center gap-2">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs ${
                      step >= s.id
                        ? 'border-brass bg-brass text-ivory'
                        : 'border-border text-ink-faint'
                    }`}
                  >
                    {s.id}
                  </span>
                  <span className="hidden text-[10px] uppercase chapter-track text-ink-faint sm:block">
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`mb-5 h-px flex-1 ${step > s.id ? 'bg-brass' : 'bg-border'}`}
                  />
                )}
              </li>
            ))}
          </ol>

          <div className="border border-border bg-ivory p-6 md:p-10">
            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl text-emerald">
                  I. Introduction
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Kindly select the intentions that resonate.
                </p>
                <div className="mt-6 space-y-3">
                  {goals.map((goal) => (
                    <label
                      key={goal}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
                        selected.includes(goal)
                          ? 'border-brass bg-sage-wash/40'
                          : 'border-border hover:border-brass/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="accent-emerald"
                        checked={selected.includes(goal)}
                        onChange={() => toggle(goal)}
                      />
                      {goal}
                    </label>
                  ))}
                </div>
                <Button className="mt-8" onClick={() => setStep(2)}>
                  Continue
                </Button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl text-emerald">
                  II. Portraiture
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Kindly provide a brief note about your smile — natural-light
                  photos may be shared later via WhatsApp.
                </p>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={5}
                  className="mt-6 w-full border border-border bg-paper px-4 py-3 outline-none focus:border-emerald"
                  placeholder="What would you like us to understand about your smile?"
                />
                <div className="mt-8 flex gap-3">
                  <Button variant="secondary" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)}>Continue</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={submit}>
                <h2 className="font-display text-2xl text-emerald">
                  III. Correspondence
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  How may we reach you?
                </p>
                <div className="mt-6 space-y-4">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full border-0 border-b border-brass/50 bg-paper px-3 py-3 outline-none focus:border-emerald"
                  />
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full border-0 border-b border-brass/50 bg-paper px-3 py-3 outline-none focus:border-emerald"
                  />
                </div>
                <div className="mt-8 flex gap-3">
                  <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button type="submit">Submit assessment</Button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="py-6 text-center">
                <h2 className="font-display text-2xl text-emerald">
                  IV. Confirmation
                </h2>
                <p className="mx-auto mt-4 max-w-md text-ink-muted">
                  Our concierge will write within two business days. WhatsApp
                  should open with your assessment details for immediate delivery.
                </p>
                <Button to="/consultation" className="mt-8" variant="secondary">
                  Book a consultation instead
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
