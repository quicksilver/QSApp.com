import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"

function AutoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2a10 10 0 0 0 0 20V2z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('system')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={cycleTheme} className="h-9 w-9">
      {theme === 'dark' && (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" weight="fill" />
      )}
      {theme === 'light' && (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" weight="fill" />
      )}
      {theme === 'system' && (
        <AutoIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme ({theme})</span>
    </Button>
  )
}
