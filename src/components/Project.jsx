import { projects } from "./data/objs"
import strings from "./data/strings";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Project() {
  return (
    <section id="projects" className="relative md:px-4 py-4 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {strings.pText}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-card rounded-lg overflow-hidden border-2 shadow-lg card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="md:h-60 p-6 flex flex-col justify-between">
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-xs font-medium rounded-full text-secondary-foreground">
                      {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <FaExternalLinkAlt size={20}/>
                      </a>
                      <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <FaGithub size={20}/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>  
          <div className="mt-12 text-center">
            <a href="https://github.com/broto1234" target="_blank" className="cosmic-button w-fit flex items-center gap-2 mx-auto">
              Check My Github <FaArrowRight size={16} />
            </a>
          </div>
      </div>
    </section>
  )
}
