import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import Skills from "../components/Skills"
import ThemeToggle from "../components/ThemeToggle"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">     
      <ThemeToggle />
      <Navbar />     
      <main className="mt-0">
        <Hero />
        <AboutMe />
        <Skills />
        <Project />
        <Contact />
      </main>     
      <Footer />
    </div>
  )
}


