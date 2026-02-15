import { useEffect, useLayoutEffect, useState } from "react"
import { ThemeProviderContext } from "@/hooks/useTheme"
import type { Theme } from "@/hooks/useTheme"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Always use defaultTheme initially to avoid hydration mismatch
  const [theme, setThemeState] = useState<Theme>(defaultTheme)

  // Load saved theme from localStorage after hydration
  // Legitimate hydration pattern - need to initialize on server, update on client
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme
    if (savedTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeState(savedTheme)
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setThemeState(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}