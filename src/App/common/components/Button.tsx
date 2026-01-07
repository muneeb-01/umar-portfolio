type ButtonProps = {
  name: string
  theme?: "light" | "dark"
}

export function Button({ name, theme = "dark" }: ButtonProps) {
  const baseClasses =
    "select-none border tracking-tight transition-colors text-nowrap font-light inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm transition hover:scale-105"

  const darkThemeClasses =
    "px-[clamp(0.6rem,1.2vw,1rem)] bg-[var(--color-primary)] text-[var(--color-paper-fg)] py-[clamp(0.2rem,0.6vw,0.5rem)] text-[clamp(0.75rem,1vw,0.9rem)] hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-primary)] "

  const lightThemeClasses =
    "hidden md:flex   px-[2.2vw] py-[1.2vh]"

  return (
    <button
      className={`${baseClasses} ${
        theme === "light" ? lightThemeClasses : darkThemeClasses
      }`}
    >
      {name}
    </button>
  )
}
