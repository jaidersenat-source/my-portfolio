"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "H Barber Shop",
    description: "H Barber Shop es un sistema web completo para la gestión de una barbería, desarrollado con enfoque en accesibilidad para personas con discapacidad visual. Cuenta con panel de administración y panel para barberos, y está totalmente adaptado para lectores de pantalla, permitiendo administrar servicios y operaciones del negocio de forma inclusiva y eficiente.",
    image: "/1.png",
    technologies: ["PHP", "JavaScript", "Blade", "CSS"],
    url: "https://iot.ingejorgehenao.com/", // Cambia por la URL real
    codeUrl: "https://github.com/jaidersenat-source/H-Barber-Shop", // Cambia por la URL real
  },
  {
    id: 2,
    title: "NexTrace",
    description: "NexTrace es una plataforma web SaaS para el registro y seguimiento de información mediante códigos QR, permitiendo a múltiples empresas gestionar, identificar y consultar datos desde un panel administrativo de forma rápida y organizada.",
    image: "/4.png",
    technologies: ["PHP", "JavaScript", "Blade", "CSS"],
    url: "https://nextrace.com", // Cambia por la URL real
    codeUrl: "https://github.com/jaidersenat-source/NexTrace", // Cambia por la URL real
  },
  {
    id: 3,
    title: "SIRIN",
    description: "SIRIN es un sistema web para la gestión y visualización de iglesias en Neiva, Huila. Muestra en un mapa las iglesias registradas y sus eventos. Cuenta con un panel de administrador para gestionar la información, además de funciones para importar y exportar datos en Excel y PDF.",
    image: "/3.png",
    technologies: ["PHP", "JavaScript", "Blade", "CSS"],
    url: "https://serneiva.org/", // Cambia por la URL real
    codeUrl: "https://github.com/jaidersenat-source/Ser-Neiva", // Cambia por la URL real
  },
]

export function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Proyectos Destacados
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <div className="relative aspect-video">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain bg-black"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={0}
                          aria-label={`Ir al sitio web de ${project.title}`}
                        >
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Sitio Web
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={0}
                          aria-label={`Ver código fuente de ${project.title}`}
                        >
                          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                            Ver Código
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
