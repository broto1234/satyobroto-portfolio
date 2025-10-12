import strings from "./data/strings";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-4">
      <div className="container mx-auto md:grid grid-cols-3 gap-4 items-center justify-between z-10">
        {/* <div className="space-y-6"> */}
          <div className="hero-text col-span-2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> {strings.fName}</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {strings.lName}</span>
          </h1>
          <p className="text-xl font-medium text-foreground/50 px-12 opacity-0 animate-fade-in-delay-4">
             {strings.shortIntro}
          </p>             
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
          {/* <div className="hero-image w-86 h-86 mx-auto"> */}
            <img src="/smallpic.png" alt="Satyobroto" className="w-86 h-84 mx-auto bg-amber-700 p-2 rounded-full"/>       
          {/* </div> */}
        {/* </div> */}
      </div>                 
    </section>
  )
}
