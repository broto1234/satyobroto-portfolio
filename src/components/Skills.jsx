import { useState } from 'react';
import { skills } from './data/objs.js';

const categories = ['all', 'frontend', 'backend', 'tools'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter((skill) => {
    return activeCategory === 'all' || skill.category === activeCategory;
  });

  return (
    <section id="skills" className="md:px-4 py-4 md:py-16 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-12 text-center">
          My <span className="text-primary">Skills</span> 
        </h2>
        <div className="flex justify-center flex-wrap mb-4 md:mb-12">
          {categories.map(category => (            
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full transition-colors duration-200 capitalize ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filteredSkills.map(skill => {           
            const ServiceIcon = skill.logo;
            return (
            <div key={skill.id} className="flex items-center bg-card rounded-lg">               
              <div className="w-[60px] h-[60px]"> 
                {ServiceIcon && <ServiceIcon className="w-[70px] h-[70px] p-5 hover:scale-110 transition-all cursor-pointer" />}
              </div>
              <h3 className="text-xs md:text-lg p-4">{skill.name}</h3>
            </div>
            );
          })}
        </div>
      </div>      
    </section>
  )
}
