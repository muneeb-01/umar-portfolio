import { useEffect, useRef, useState } from "react"

interface SkillCategory {
  title: string
  items: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Web Design",
    items: [
      "Design Systems",
      "Website Design",
      "Landing Pages",
      "User Experience Design",
    ],
  },
  {
    title: "Brand Design",
    items: [
      "Visual Design",
      "Logos & Visual Identity",
      "Social Media Graphics",
      "Presentation Decks",
      "Colors & Typography",
    ],
  },
]

export function SkillsServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
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
      className="bg-(--color-paper-fg) rounded-(--card-border-radius) py-16 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div
            className={`
              relative transition-all duration-1000
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
          >
            <div className="relative bg-sky-100 rounded-3xl overflow-hidden aspect-auto h-96">
              {/* <img
                src=""
                alt=""
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`
              space-y-4 md:space-y-12 transition-all duration-1000 delay-300
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            {/* Badge */}
            <div className="flex justify-start mb-8">
              <span className="inline-block px-6 py-2 font-medium text-gray-700 border-(--color-focus) border rounded-(--card-border-radius) craftr4 text-xs shadow-sm">
                TESTIMONIALS
              </span>
            </div>

            {/* Heading */}
            <h2 className="md:text-5xl text-3xl craftr1 text-gray-900 leading-tight">
              What we bring to the table...
            </h2>

            {/* Skills Categories */}
            <div className="space-y-4">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className={`
                    pb-4 border-b border-gray-200 transition-all duration-700
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                  style={{ transitionDelay: `${(categoryIndex + 2) * 200}ms` }}
                >
                  {/* Category Title */}
                  <h3 className="text-lg md:text-2xl Neue mb-4">
                    {category.title}
                  </h3>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={item}
                        className={`
                          flex items-center gap-3 transition-all duration-500
                          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                        `}
                        style={{
                          transitionDelay: `${(categoryIndex + 2) * 200 + itemIndex * 100}ms`,
                        }}
                      >
                        {/* Bullet Point */}
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                        {/* Skill Text */}
                        <span className="text-xs md:text-lg text-gray-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
