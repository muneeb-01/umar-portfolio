import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const triggerRef = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    triggerRef.current = ScrollTrigger.create({
      start: 0,
      end: ScrollTrigger.maxScroll(window),
      onUpdate: (self) => {
        setProgress(self.progress * 100)
      },
    })

    return () => {
      triggerRef.current?.kill()
    }
  }, [])

  // SVG math
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="fixed bottom-5 backdrop-blur-2xl rounded-full right-5 w-14 h-14 z-50 pointer-events-none">
      <svg width="56" height="56" className="-rotate-90">
        {/* Track */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="2"
          fill="none"
        />

        {/* Progress */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="#000"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute inset-0 flex items-center mix-blend-darken justify-center text-[10px] font-semibold">
        {Math.round(progress)}%
      </span>
    </div>
  )
}

export default ScrollProgress
