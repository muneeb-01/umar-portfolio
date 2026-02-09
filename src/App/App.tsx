import { useEffect } from "react"
import Lenis from "lenis"
import Home from "./Pages/Home/Home"
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  })

  return (
    <>
      <section className="relative md:w-[70vw] w-[90vw] mx-auto">
        <Home/>
      </section>
    </>
  )
}

export default App
