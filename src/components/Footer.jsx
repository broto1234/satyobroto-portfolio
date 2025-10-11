// import { FaArrowUp } from "react-icons/fa6";
import { FaChevronCircleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 bg-card border-t border-border py-4 flex flex-col items-center md:flex-row md:justify-between">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} <a href="https://www.brotodev.com/">BrotoDev.com</a>, All reserved.</p>
      <a href="#hero" className="-mt-20 md:mt-0 bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        {/* <FaArrowUp size={20}/> */}
        <FaChevronCircleUp size={40}/>
      </a>      
    </footer>
  )
}
