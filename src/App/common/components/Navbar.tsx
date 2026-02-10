import { useState, useRef } from "react"
import { Button } from "./index"
import { IoMdClose } from "react-icons/io"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  // Initialize the timeline
  useGSAP(
    () => {
      // Setting up a paused timeline for the menu
      tl.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, {
          y: 0,
          duration: 0.8,
          ease: "expo.inOut",
        })
        .from(
          ".mobile-link",
          {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        ) // Starts slightly before the menu finish
    },
    { scope: container },
  )

  // Control the timeline based on state
  useGSAP(() => {
    if (isOpen) {
      tl.current?.play()
      document.body.style.overflow = "hidden"
    } else {
      tl.current?.reverse()
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="sticky top-4 z-40 " ref={container}>
      <nav className=" Founders bg-(--color-paper-fg) my-4 left-0 right-0 z-50 p-4 rounded-(--border-radius) shadow-lg">
        <div className="container mx-auto px-2 flex justify-between items-center">
          <div className="font-medium text-xl Founders flex items-center gap-1">
            Umar
            <span className="size-1 rounded-full bg-(--color-secondary) translate-y-0.5"></span>
            Feroz
          </div>

          <div className="hidden md:flex space-x-6 justify-center items-center">
            <a href="#" className="hover:font-medium transition-all">
              Home
            </a>
            <a href="#" className="hover:font-medium transition-all">
              Work
            </a>
            <Button dark={true} />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* GSAP Mobile Overlay */}
      <div
        ref={menuRef}
        className="md:hidden fixed inset-0 z-100 bg-[#CC432B] flex flex-col justify-center items-center  -translate-y-full"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-10 p-2"
        >
          <IoMdClose size={40} />
        </button>

        <div ref={linksRef} className="flex flex-col space-y-8 items-center">
          <div className="mobile-link">
            <a
              href="#"
              className="craftr1 text-center font-thin hover:font-medium text-5xl"
            >
              Home
            </a>
          </div>
          <div className="mobile-link">
            <a
              href="#"
              className="craftr1 text-center font-thin hover:font-medium text-5xl"
            >
              Work
            </a>
          </div>
          <div className="mobile-link pt-4">
            <Button dark={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
