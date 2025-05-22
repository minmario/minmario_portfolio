"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Left side */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold hover:text-primary transition-colors"
          >
            민재홍
          </button>

          {/* Desktop Navigation - Right side */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              나에 대해서
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              교육이수사항
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              자격증
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              기술
            </button>
            <button
              onClick={() => scrollToSection("external-links")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              외부 링크
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              프로젝트
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              연락처
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">메뉴 열기</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                나에 대해서
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                교육이수사항
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                자격증
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                기술
              </button>
              <button
                onClick={() => scrollToSection("external-links")}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                외부 링크
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                프로젝트
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                연락처
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
