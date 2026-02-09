export function Button({dark = true}: {dark?: boolean}) {
  const baseClasses = " px-7 py-2 font-normal rounded-full Founders";
    const lightClass = "bg-[var(--color-paper)] text-[var(--color-secondary)]";
    const darkClass = "bg-[var(--color-secondary)] text-[var(--color-paper)]";
  return (
    <button className={`${baseClasses} ${dark ? darkClass : lightClass}`}>
      Book A Free Call
    </button>
  )
}
