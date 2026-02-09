import { useState, useEffect, useRef } from "react"

interface Project {
  id: number
  title: string
  image: string
  span: "wide" | "tall" | "normal"
  category?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "HORIZON",
    image: "/projects/horizon.jpg",
    span: "wide",
    category: "Web Design",
  },
  {
    id: 2,
    title: "Mobile App",
    image: "/projects/mobile.jpg",
    span: "normal",
    category: "UI/UX",
  },
  {
    id: 3,
    title: "Events Platform",
    image: "/projects/events.jpg",
    span: "normal",
    category: "Web Development",
  },
  {
    id: 4,
    title: "URBAN WHEELS",
    image: "/projects/urban-wheels.jpg",
    span: "wide",
    category: "Branding",
  },
]

export function SelectedWorkGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
      className="min-h-screen bg-(--color-paper-fg) rounded-(--card-border-radius) py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="mx-auto">
        {/* Heading */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl text-center craftr1 mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Selected work...
        </h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                relative overflow-hidden rounded-(--card-border-radius) group cursor-pointer
                transition-all duration-700 
                ${project.span === "wide" ? "aspect-4/3 md:aspect-video" : "aspect-4/3"}
                ${project.span === "wide" ? "md:col-span-2" : "md:col-span-1"}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundColor: getPlaceholderColor(index),
                }}
              />

              {/* Overlay */}
              <div
                className={`
                absolute inset-0  to-transparent
                transition-opacity duration-500
                ${hoveredId === project.id ? "opacity-100" : "opacity-60"}
              `}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
                {project.category && (
                  <span
                    className={`
                      inline-block self-start px-4 py-1.5 mb-3 text-xs font-medium 
                      bg-white/20 backdrop-blur-sm text-(--color-paper-fg) rounded-full
                      transition-all duration-500
                      ${hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                    `}
                  >
                    {project.category}
                  </span>
                )}

                <h3
                  className={`
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-(--color-paper-fg) 
                    tracking-wide transition-all duration-500
                    ${hoveredId === project.id ? "translate-y-0" : "translate-y-2"}
                  `}
                  style={{
                    textShadow: "2px 2px 12px rgba(0,0,0,0.3)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {project.title}
                </h3>

                {/* View Project Button */}
                <div
                  className={`
                    mt-4 transition-all duration-500
                    ${hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                  `}
                >
                  <button className="flex items-center gap-2 text-(--color-paper-fg) font-medium text-sm group/btn">
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Shimmer Effect on Hover */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  transform -skew-x-12 transition-transform duration-1000
                  ${hoveredId === project.id ? "translate-x-full" : "-translate-x-full"}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper function for placeholder colors
function getPlaceholderColor(index: number): string {
  const colors = [
    "#8B7355", // Brown for Horizon
    "#D4A574", // Tan for mobile
    "#4A6741", // Green for events
    "#5C5C5C", // Gray for Urban Wheels
  ]
  return colors[index % colors.length]
}
