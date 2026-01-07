import { useState } from "react"
// import { navLinks } from "@/Utils/constants"
import { FaBars, FaTimes } from "react-icons/fa"
import { Button } from "./index"

export function Navbar() {
  // const [openDropdown, setOpenDropdown] = useState<null | number>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="absolute mix-difference backdrop-blur-xs top-0 left-1/2 w-full py-4 z-50 -translate-x-1/2 ">
      <div className="flex items-center justify-between text-(--color-primary) px-6 py-2">
        <h2 className="">Menu</h2>
        <h1 className="text-center font-bold text-xl leading-[0.9]">
          UMAR <br /> FEROZ.
        </h1>

        <button
          className="md:hidden text-2xl "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* <ul className="hidden md:flex gap-6">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative group">
              
              {!link.dropdown ? (
                <a href={link.href} className="font-medium transition-colors">
                  {link.name}
                </a>
              ) : (
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="flex items-center gap-1 font-medium transition-colors"
                >
                  {link.name}
                  <FaChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              {link.dropdown && openDropdown === idx && (
                <ul className="absolute left-0 mt-2 w-48 bg-(--color-paper) border  rounded-md shadow-lg">
                  {link.dropdown.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}
        <Button name={"Contact Us"} theme={"dark"} />
      </div>
    </nav>
  )
}
