"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ExternalLink } from "lucide-react"

const projects = [
{
  id: 1,
  title: "H Barber Shop",
  shortDescription: "Sistema web para la gestión de una barbería con panel administrativo.",
  fullDescription: "H Barber Shop es un sistema web desarrollado para la gestión completa de una barbería. Incluye un panel de administración para gestionar barberos, servicios y contenido del sitio. El proyecto fue diseñado con enfoque en accesibilidad, ya que fue creado para una persona con discapacidad visual, ofreciendo una experiencia funcional y adaptada a sus necesidades.",
  image: "/1.png",
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Blade"],
  client: "Cliente independiente",
  githubUrl: "https://github.com/jaidersenat-source/H-Barber-Shop",
  liveUrl: "https://iot.ingejorgehenao.com/",
},
 {
  id: 2,
  title: "ParkControl",
  shortDescription: "Sistema web para la gestión de vehículos y control de accesos mediante códigos QR.",
  fullDescription: "ParkControl es una aplicación web diseñada para gestionar vehículos y controlar accesos en un recinto. Permite a los administradores registrar y administrar vehículos, mientras que los celadores pueden registrar entradas y salidas mediante el escaneo de códigos QR. El sistema también incluye historial de accesos, autenticación de usuarios y gestión de perfiles.",
  image: "/2.png",
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Blade"],
  client: "Proyecto para gestión de accesos",
  githubUrl: "https://github.com/jaidersenat-source/parkcontrol",
  liveUrl: "https://tusitio.com",
},
 {
  id: 3,
  title: "SER - Sistema Estratégico para las Entidades Religiosas",
  shortDescription: "Plataforma web para registrar y visualizar iglesias de Neiva en un mapa interactivo.",
  fullDescription: "SER es una plataforma web desarrollada para la gestión y visualización georreferenciada de las entidades religiosas del municipio de Neiva, Huila. El sistema permite registrar iglesias, administrar su información desde un panel de administración y visualizarlas en un mapa interactivo, facilitando la organización y consulta de las instituciones religiosas del municipio.",
  image: "/3.png",
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Blade"],
  client: "Cliente independiente",
  githubUrl: "https://github.com/jaidersenat-source/Ser-Neiva",
  liveUrl: "https://serneiva.org/mapa",
},
  {
  id: 4,
  title: "NexTrace",
  shortDescription: "Plataforma SaaS para registro y trazabilidad de información mediante códigos QR.",
  fullDescription: "NexTrace es una plataforma web tipo SaaS diseñada para el registro, seguimiento y trazabilidad de información mediante códigos QR. El sistema permite a múltiples empresas generar y escanear códigos QR para identificar, consultar y gestionar registros desde un panel administrativo centralizado, facilitando el control y la organización de datos dentro de sus procesos.",
  image: "/4.png",
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS"],
  client: "Producto SaaS",
  githubUrl: "https://github.com/jaidersenat-source/NexTrace",
  liveUrl: "https://example.com",
},
  {
  id: 5,
  title: "BoviTrak",
  shortDescription: "Plataforma web para el registro y gestión digital del ganado bovino.",
  fullDescription: "BoviTrak es una plataforma web diseñada para el registro, control y trazabilidad del ganado bovino. El sistema permite gestionar información de cada animal, facilitando el seguimiento, la organización de datos y la administración del ganado desde un panel centralizado. Su objetivo es optimizar los procesos de control ganadero mediante herramientas digitales accesibles y fáciles de usar.",
  image: "/5.png",
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS"],
  client: "Proyecto para gestión ganadera",
  githubUrl: "https://github.com/jaidersenat-source/BoviTrak",
  liveUrl: "https://alejo.ingejorgehenao.com/login",
},
  {
  id: 6,
  title: "SourDough",
  shortDescription: "Sistema web para digitalizar el control de masa madre en panaderías colombianas vinculadas al SENA.",
  fullDescription: "Reemplaza un flujo manual en Excel donde cada panadería registraba pH, temperaturas y tiempos de fermentación día a día y enviaba el archivo al coordinador. Ahora cada panadería tiene su propio panel para registrar el proceso de 5 días y la elaboración del pan. El administrador centraliza todo en tiempo real, filtra por regional y exporta reportes en Excel y PDF con un clic.",
  image: "/7.png",
  technologies: ["Laravel 12", "MySQL", "Tailwind CSS", "DomPDF"],
  client: "SENA — Servicio Nacional de Aprendizaje",
  githubUrl: "https://github.com/jaidersenat-source/MasaMadre",
  liveUrl: "",
},

];
export function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Mis Trabajos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Galería de Proyectos
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain bg-black group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain bg-black"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">Cliente:</span>
                  <span className="text-sm text-foreground">{selectedProject.client}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-secondary"
                    asChild
                  >
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Image src="/github-mark.svg" alt="GitHub" width={16} height={16} className="mr-2" />
                      Ver Código
                    </a>
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={selectedProject.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Sitio Web
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
