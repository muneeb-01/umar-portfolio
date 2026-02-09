import { useEffect, useRef, useState } from "react"

interface FeatureCard {
  icon: string
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: "/money.png",
    title: "Bang for your buck",
    description:
      "High-quality design that looks expensive can be surprisingly affordable.",
  },
  {
    icon: "/analytics.png",
    title: "Unique Design",
    description:
      "Your business deserves more than a template. Stand out with custom design that speaks to your users.",
  },
  {
    icon: "/clicks.png",
    title: "Converting Clicks",
    description:
      "Your digital tools should lead to success for your business. Harness the power of strategic design.",
  },
]

export function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className=" bg-(--color-paper-fg) rounded-(--card-border-radius) py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block px-6 py-2 font-medium text-gray-700 border-(--color-focus) border rounded-(--card-border-radius) craftr4 text-xs shadow-sm">
            WHY CHOOSE JULES STUDIO
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-5xl md:text-6xl craftr1 tracking-tight text-center  mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Results driven, budget smart
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 border-(--color-focus) border transition-all flex-col justify-center items-center duration-500  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Placeholder for illustrations - replace with actual SVGs */}
                  <div className="inset-0  flex items-center justify-center">
                    <div className="text-6xl">
                      <img
                        className="h-40"
                        src={feature.icon}
                        alt={feature.title}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl text-center md:text-3xl font-normal mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-sm  md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
