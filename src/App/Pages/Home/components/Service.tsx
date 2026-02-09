import { useEffect, useRef, useState } from "react"

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: "Website Design, Development, & Maintenance",
    description: "E-commerce sites, marketing sites, and so much more",
  },
  {
    title: "Elevating your Digital Presence",
    description: "Web + Socials to keep your brand consistent and polished",
  },
  {
    title: "Branding Packages",
    description:
      "Clean, modern, consistent branding to enhance your organization's visuals",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [_activeIndex, setActiveIndex] = useState<number | null>(null)
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
      className="bg-(--color-paper-fg) rounded-(--card-border-radius) py-16  px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Services List */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Heading */}
            <h2 className="text-5xl sm:text-5xl craftr1 tracking-tight mb-12 md:mb-16">
              How I <span className="Neue">can help you</span>...
            </h2>

            {/* Services List */}
            <div className="space-y-6 group">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`
         cursor-pointer group/nested transition-all duration-500
        ${isVisible ? "translate-y-0" : "translate-y-4"}
      `}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Service Item */}
                  <div className="pb-2 border-b group-hover:opacity-50 hover:opacity-100 border-gray-300 transition-all duration-500 group-hover:border-gray-500 hover:pl-4 ">
                    <h3 className="text-2xl font-normal tracking-tight transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed transition-all duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Project 1 - Wide */}
            <div
              className={`
      relative group overflow-hidden rounded-(--card-border-radius) group cursor-pointer
      transition-all duration-700 aspect-auto h-96
    `}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(/projects/horizon.jpg)`,
                  backgroundColor: "#8B7355",
                }}
              />
              <div
                className={`
        absolute inset-0 to-transparent
        transition-opacity duration-500
       
      `}
              />

              {/* Shimmer Effect */}
              <div
                className={`
        absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
        transform -skew-x-12 transition-transform duration-1000
        group-hover:translate-x-full  -translate-x-full
      `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
