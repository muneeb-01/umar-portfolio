import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

import "swiper/swiper-bundle.css"

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with Jules Studio transformed our digital presence completely. The attention to detail and creative vision exceeded all our expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    avatar: "/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    quote:
      "The team delivered a stunning website that not only looks beautiful but has significantly improved our conversion rates. Highly recommend!",
    author: "Michael Chen",
    role: "Founder, StartupXYZ",
    avatar: "/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    quote:
      "Julia is a very talented and hard-working designer. After thorough research with us, she completed a new design for the Conservation Montgomery website.",
    author: "Helen Wood",
    role: "Conservation Montgomery Board Member",
    avatar: "/testimonials/avatar3.jpg",
  },
]

export function TestimonialsSection() {
  const [_isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(1)
  const swiperRef = useRef<SwiperType>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className=" bg-(--color-paper-fg) rounded-(--card-border-radius) py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block px-6 py-2 font-medium text-gray-700 border-(--color-focus) border rounded-(--card-border-radius) craftr4 text-xs shadow-sm">
            TESTIMONIALS
          </span>
        </div>

        {/* Swiper Carousel */}
        <div
          className={`
            relative transition-all duration-1000 delay-300
          `}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex + 1)
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className=" flex flex-col justify-between">
                  {/* Quote */}
                  <div className="flex-1 flex items-center justify-center">
                    <blockquote className="text-center">
                      <p className="  lg:text-3xl text-gray-600 leading-relaxed mb-8 italic">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-gray-100">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random`
                        }}
                      />
                    </div>

                    {/* Name & Role */}
                    <p className="text-base md:text-lg font-medium text-gray-900">
                      -{testimonial.author}
                    </p>
                    <p className="text-sm md:text-base text-gray-500 mt-1">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Counter */}
                  <div className="flex justify-center mt-8">
                    <span className="text-sm text-gray-500">
                      {currentSlide}/{testimonials.length}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 rounded-full bg-slate-200  transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 lg:translate-x-16 z-10 w-12 h-12 rounded-full bg-slate-200  transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Custom Pagination Dots */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8" />
        </div>
      </div>

      <style>{`
        .testimonials-swiper .swiper-pagination-bullet-active {
          width: 2rem !important;
          border-radius: 9999px !important;
        }

        .swiper-button-prev-custom:disabled,
        .swiper-button-next-custom:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  )
}
