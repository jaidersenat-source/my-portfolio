"use client"

import Image from "next/image"
import { Code2, Rocket, Heart } from "lucide-react"

const stats = [
  { icon: Code2, label: "Proyectos Desarrollados", value: "+5" },
  { icon: Rocket, label: "Tecnologías Utilizadas", value: "+8" },
  { icon: Heart, label: "Aprendizaje Constante", value: "100%" },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl" />
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card border border-border">
                <Image
                src="/ilustracion.jpg"
                alt="Programación"
                fill
                className="object-cover"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Sobre Mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Desarrollador Web Full Stack
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
             Soy un desarrollador web enfocado en la creación de aplicaciones y sistemas
             web utilizando tecnologías como Laravel, PHP, JavaScript y MySQL.
             Me gusta desarrollar soluciones funcionales que resuelvan problemas
             reales y mejoren la experiencia de los usuarios. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
             Actualmente continúo fortaleciendo mis habilidades como desarrollador
             full stack, aprendiendo nuevas tecnologías y mejores prácticas de
             desarrollo. También utilizo herramientas de inteligencia artificial
             para optimizar el proceso de programación y mejorar la productividad
             en los proyectos.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
