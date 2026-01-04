"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-accent/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-center py-3 md:py-4">
          <div className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1 font-mono text-[10px] sm:text-xs md:text-sm">
            <button
              onClick={() => scrollToSection("about")}
              className="text-accent hover:text-foreground transition-colors px-1.5 sm:px-2 md:px-3 py-1 hover:bg-accent/10 whitespace-nowrap"
            >
              [About]
            </button>
            <span className="text-accent/30">|</span>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-accent hover:text-foreground transition-colors px-1.5 sm:px-2 md:px-3 py-1 hover:bg-accent/10 whitespace-nowrap"
            >
              [Skills]
            </button>
            <span className="text-accent/30">|</span>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-accent hover:text-foreground transition-colors px-1.5 sm:px-2 md:px-3 py-1 hover:bg-accent/10 whitespace-nowrap"
            >
              [Projects]
            </button>
            <span className="text-accent/30">|</span>
            <button
              onClick={() => scrollToSection("publications")}
              className="text-accent hover:text-foreground transition-colors px-1.5 sm:px-2 md:px-3 py-1 hover:bg-accent/10 whitespace-nowrap"
            >
              [Publications]
            </button>
            <span className="text-accent/30">|</span>
            <button
              onClick={() => scrollToSection("recognitions")}
              className="text-accent hover:text-foreground transition-colors px-1.5 sm:px-2 md:px-3 py-1 hover:bg-accent/10 whitespace-nowrap"
            >
              [Awards]
            </button>
            <span className="text-accent/30">|</span>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-accent hover:text-foreground transition-colors px-1.5 sm:px-2 md:px-3 py-1 hover:bg-accent/10 whitespace-nowrap"
            >
              [Contact]
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
