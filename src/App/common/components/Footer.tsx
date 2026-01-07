import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "./Button"

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const footer = footerRef.current

    const trigger = ScrollTrigger.create({
      trigger: footer,
      start: "start 50%",
      end: "start 45%",
      onEnter: () => {
        document.documentElement.classList.remove("dark")
      },
      onEnterBack: () => {
        document.documentElement.classList.add("dark")
      },
    })
    return () => {
      trigger.kill()
    }
  })
  return (
    <footer ref={footerRef} className="px-4">
      <div className="border rounded-t-[var(--container-roundness)] border-b-0 px-8 pt-[5em]">
        <div className=" py-[9em]">
          <h1 className="Founders capitalize text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[22rem] text-center tracking-tight leading-[0.9]">
            Let's talk
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div></div>
            <div className=" flex justify-center items-center">
              <p className=" text-[0.7rem] sm:text-[0.8rem] md:text-[1.2rem] Neue text-left leading-[0.95]">
                AND CREATE <br /> SOME STUFF <br /> TOGETHER
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 flex justify-between text-[0.7em] sm:text-[1em] items-center">
          <div>
            <p>
              © 2025{" "}
              <a href="https://craftr-studio.vercel.app/">Craftr Studio</a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 mr-0 lg:mr-10">
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
