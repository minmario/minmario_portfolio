import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Skills } from "@/components/skills"
import { ExternalLinks } from "@/components/external-links"
import { Projects } from "@/components/projects"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Education />
        <Certifications />
        <Skills />
        <ExternalLinks />
        <Projects />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
