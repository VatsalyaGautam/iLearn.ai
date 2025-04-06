"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="text-foreground-500 mr-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="light"
      size="md"
      aria-label="Theme-Switcher"
    >
      {theme === "light" ? (
        <Sun stroke="currentColor" strokeWidth={1.5} fill="none" />
      ) : (
        <Moon stroke="currentColor" strokeWidth={1.5} fill="none" />
      )}
    </button>
  )
}