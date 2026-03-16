"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="hidden sm:inline">Jaider<span className="text-primary">Senat</span></span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">

            <Link
              href="https://github.com/jaidersenat-source"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Image src="/github-mark.svg" alt="GitHub" width={20} height={20} />
            </Link>

            <Link
              href="https://wa.me/573243612538"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-green-500 transition-colors"
            >
              <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Abrir menú"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation */}
      {isMobileMenuOpen && (
  <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl md:hidden">

    {/* Top bar */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-border">

      <Link
        href="#inicio"
        onClick={handleLinkClick}
        className="text-lg font-bold text-foreground"
      >
        Dev<span className="text-primary">Portfolio</span>
      </Link>

      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-foreground"
      >
        <X className="w-6 h-6" />
      </button>

    </div>

    {/* Menu */}
    <div className="flex flex-col items-center justify-center h-[80%] gap-8">

      <ul className="flex flex-col items-center gap-8 text-xl">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={handleLinkClick}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social */}
      <div className="flex items-center gap-6 pt-6">

        <Link
          href="https://github.com/jaidersenat-source"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Image src="/github-mark.svg" alt="GitHub" width={24} height={24} />
        </Link>

        <Link
          href="https://wa.me/573243612538"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-muted-foreground hover:text-green-500 transition-colors"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
        </Link>

      </div>

    </div>

  </div>
)}
      </nav>
    </header>
  )
}