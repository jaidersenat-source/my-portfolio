"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

const techStack = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-90" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/6 rounded-full blur-4xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/6 rounded-full blur-4xl animate-pulse delay-1000" />
      </div>

      {/* Soft overlay to improve contrast (above animated background, below content) */}
      <div className="absolute inset-0 bg-black/30 -z-5" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mt-6 md:mt-8 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary">Disponible para trabajar</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Desarrollador{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Full Stack Web
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Desarrollador web enfocado en crear aplicaciones y sistemas funcionales
            utilizando tecnologías como Laravel, JavaScript y MySQL.
            Me apasiona construir soluciones web eficientes y seguir aprendiendo
            nuevas herramientas para mejorar cada proyecto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 min-h-[48px]"
              asChild
            >
              <a href="#proyectos">
                Ver Proyectos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary px-8 py-3 min-h-[48px]"
              asChild
            >
              <a href="#contacto">
                <Mail className="mr-2 w-4 h-4" />
                Contáctame
              </a>
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-3 py-2 rounded-full bg-secondary/40 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-card border border-border overflow-hidden">
                  <Image src={tech.icon} alt={tech.name} width={20} height={20} className="block" />
                </span>
                <span className="select-none">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}



