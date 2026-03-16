import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { About } from "@/components/about"
import { ProjectsGallery } from "@/components/projects-gallery"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <ProjectsGallery />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
