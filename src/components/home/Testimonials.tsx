import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials, clinic } from '@/data/clinic'
import { ChapterLabel } from '@/components/ui/ChapterLabel'

export function Testimonials() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <ChapterLabel chapter="Chapter V" label="Letters from Patients" />
        <p className="mx-auto mt-6 text-center text-sm text-ink-faint">
          {clinic.rating} average · {clinic.reviewCount} Google reviews
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={32}
            loop
            className="!pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <blockquote className="text-center">
                  <span className="font-display text-6xl leading-none text-emerald/20">
                    “
                  </span>
                  <p className="mx-auto -mt-6 max-w-2xl font-display text-2xl italic leading-relaxed text-emerald md:text-3xl">
                    {t.quote}
                  </p>
                  <footer className="mt-8">
                    <p className="text-[13px] tracking-wide text-ink">{t.name}</p>
                    <p className="mt-1 text-[11px] uppercase chapter-track text-brass">
                      {t.detail}
                    </p>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
