import { useEffect, useRef, useState } from "react"

const clientTypes = [
  "Non-Profits",
  "Small Businesses",
  "Startups",
  "Event Planners",
  "Ecommerce Businesses",
  "Agencies",
  "Personal Brands",
]

export function WhoWeWorkWithSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-(--color-secondary) rounded-(--card-border-radius) py-16  px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
       <div className="flex justify-center mb-8">
          <span className="inline-block px-6 py-2 font-medium text-(--color-paper)  border-(--color-focus) border rounded-(--card-border-radius) craftr4 text-xs shadow-sm">
            WHO WE LOVE TO WORK WITH
          </span>
        </div>

        {/* Client Types Grid */}
        <div
          className={`
            flex flex-wrap justify-center items-center gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8
            transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-3 md:gap-4 transition-all duration-700
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Bullet Point */}
              {index > 0 && clientTypes.length - 1 && (
                <span className="hidden sm:block w-2 h-2 rounded-full bg-orange-500" />
              )}

              {/* Client Type Text */}
              <h3 className="text-4xl craftr1 text-(--color-paper) tracking-tight  ">
                {client}
              </h3>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
