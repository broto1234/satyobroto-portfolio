import { useState, useEffect} from 'react';
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
  }, []);  

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className="fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden">
      {isDarkMode ? <IoSunnySharp /> : <FaMoon style={{rotate:"250deg"}}/>}
    </button>
  )
}
