import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import NET from "vanta/dist/vanta.net.min"

export function Landing() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 0.8,
          scaleMobile: 1.0,
          color: 0x0,
          backgroundColor: 0xf8f7f4,
        })
      )
    }
  }, [vantaEffect])

  return (
    <section
      ref={vantaRef}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center px-4">
        <h2 className="Founders select-none tracking-tight text-[5rem] text-(--font-Founders) md:text-[7rem] lg:text-[9rem] leading-[0.75] font-bold capitalize">
          <span className=" opacity-40">
            We Don't <br /> Just Think
          </span>
          <br /> We Do.
        </h2>
      </div>
    </section>
  )
}
