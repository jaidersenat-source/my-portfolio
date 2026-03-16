import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo y copyright */}
          <div className="text-center md:text-left">
            <Link
              href="#inicio"
              className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              Dev<span className="text-primary">Portfolio</span>
            </Link>

            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} Todos los derechos reservados.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">

            <Link
              href="https://github.com/jaidersenat-source"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Image src="/github-mark.svg" alt="GitHub" width={20} height={20} className="w-5 h-5" />
            </Link>

            <Link
              href="https://wa.me/573243612538"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
            >
              <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </div>
    </footer>
  )
}