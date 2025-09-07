import { IoMdCode } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import strings from "./data/strings";
import SkilsEducation from "./EducationCertif";

export default function AboutMe() {
  return (
    <section id="about" className="relative md:px-4 py-4 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold md:mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="md:m-4 md:pt-6 lg:col-span-2">
            <p className="md:mb-12 text-foreground/70 mb-6">
              {strings.aboutMe}
            </p>
            <div className="w-96 mx-auto flex flex-col md:flex-row gap-x-2 gap-y-6 ">
              <div>
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              </div>
              <div>
              <a href="/cv.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <SkilsEducation />
          </div>
        </div>
      </div>
    </section>
  )
}
