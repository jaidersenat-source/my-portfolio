"use client"

import { Code, Server, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "PHP", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
    ],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Experiencia
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Habilidades Técnicas
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon

            return (
              <div
                key={category.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-foreground">
                          {skill.name}
                        </span>

                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
} 