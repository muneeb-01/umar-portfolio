import { Button } from "./index"
export function Navbar() {
  return (
    <nav className="sticky Founders top-8 bg-[var(--color-paper-fg)] mb-8 left-0 right-0 z-50  p-4 rounded-[var(--border-radius)] shadow-lg">
      <div className="container mx-6 flex justify-between items-center">
        {/* Title on the left */}
        <div className="font-medium text-xl Founders">
          Umar{" "}
          <span className="inline-block size-1 rounded-full bg-[var(--color-secondary)] mb-[5px]"></span>{" "}
          Feroz
        </div>

        {/* Navigation links on the right */}
        <div className="hidden md:flex space-x-6 justify-center items-center mx-6">
          <a href="#" className="hover:font-medium transition-all">
            Home
          </a>
          <a href="#" className="hover:font-medium transition-all">
            Work
          </a>
          <Button dark={true} />
        </div>

        {/* Mobile menu button (hamburger icon) */}
        <div className="md:hidden">
          <button className=" focus:outline-none">
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

      {/* Mobile menu (hidden by default, can be toggled with JavaScript) */}
      {/* <div className="md:hidden mt-2">
        <a href="#" className="block   px-3 py-2 rounded-md">Home</a>
        <a href="#" className="block   px-3 py-2 rounded-md">Work</a>
        <a href="#" className="block  bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md mt-1">Book a free call</a>
      </div> */}
    </nav>
  )
}
