import { useState, useEffect } from 'react';
import { navItems } from './data/objs';

import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 p-5 bg-background/85 transition-all duration-300">
      <div className="container flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-amber-700 flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground">My</span> Portfolio
          </span>
        </a>
        {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
                <a key={item.id} href={item.href} className="text-foreground/80 hover:text-primary  transition-colors duration-300">
                  {item.name}
                </a>
            ))}
          </div>

        {/* mobile nav */}
        <button className="md:hidden p-2 text-foreground z-50" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <IoClose /> : <FiAlignJustify />}
        </button>
        <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
                <a key={item.id} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}