import strings from "./data/strings";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center px-4 pt-28 md:pt-24 pb-6">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-xl xs:text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-amber-700 opacity-0 animate-fade-in-delay-1"> {strings.fName}</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {strings.lName}</span>
          </h1>
          <p className="text-xl font-medium text-foreground/50 px-12 opacity-0 animate-fade-in-delay-4">
             {strings.shortIntro}
          </p>   
          <img src="/smallpic.png" alt="Satyobroto" className="w-36 h-36 object-cover bg-amber-700 p-2 rounded-full my-10 mx-auto"/>       
          <div className="md:flex items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <div className="my-6 md:my-0">
            <a href="#projects" className="cosmic-button">
              {strings.vWork}
            </a>  
            </div>
            <div className="my-6 md:my-0">
            <a href="#skills" className="cosmic-button bg-indigo-950">
              {strings.vSkill}
            </a>  
            </div>
          </div>
        </div>
      </div>                 
    </section>
  )
}
