import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What tools / platforms do you use?",
    answer:
      "I design primarily with Figma, but also use a range of other tools as needed. For CMS platforms, on e-commerce prodpress or Webflow.",
  },
  {
    question: "Do you accept payment plans?",
    answer:
      "Yes, I offer flexible payment structures tailored to the project scope, typically divided into discovery, design, and delivery phases.",
  },
  {
    question: "What is your price range?",
    answer:
      "Project pricing varies based on complexity. Single-page sites start at a different rate than full-scale e-commerce platforms.",
  },
  {
    question: "I need design and development, do you do both?",
    answer:
      "Absolutely. I provide end-to-end services from initial wireframing and UI/UX design to high-performance frontend development.",
  },
]

export function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto flex flex-col items-center justify-center px-6 py-16 bg-(--color-paper-fg) rounded-(--card-border-radius)">
      <h2 className="text-7xl md:text-8xl Neue italic text-center mb-16 tracking-tight">
        FAQs
      </h2>

      <div className="md:w-[70%] w-full">
        {faqData.map((item, index) => (
          <div key={index} className="">
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="flex justify-between  w-full items-center py-5 text-left group transition-all"
              aria-expanded={expandedIndex === index}
            >
              <span className="text-sm inline  md:text-xl font-medium pr-8 group-hover:opacity-70 transition-opacity">
                {item.question}
              </span>
              <div className="relative flex items-center justify-center w-6 h-6 text-[#c45a4a]">
                {expandedIndex === index ? (
                  <FiMinus size={24} />
                ) : (
                  <FiPlus size={24} />
                )}
              </div>
            </button>

            <div>
              {expandedIndex === index && (
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm md:text-xl leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
            <div className="h-[1px] w-full bg-gray-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
