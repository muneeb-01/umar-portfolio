import { useEffect } from "react"
import Lenis from "lenis"
import Home from "@/App/Pages/Home/Home"
import { ContactSection, Navbar, Footer } from "@/App/common/components/index"
import { ScrollProgress } from "@/App/common/components/index"

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
      <section className="relative">
        <Navbar />
        <Home />
        <ContactSection />
        <ScrollProgress />
        <Footer />
      </section>
    </>
  )
}

export default App
