import { useState } from 'react';
import Education from './Education';
import Certificates from './Certificates';

const educationsCertifs = ['Educations', 'Certifications'];

export default function EducationCertif() {
  const [isSkill, setIsSkill] = useState('Educations');

  return (
    <div className="flex flex-col gap-4">
      <div>
        {educationsCertifs.map(sked => (
            <button key={sked} onClick={() => setIsSkill(sked)} className={`mx-6 font-bold ${isSkill === sked ? 'border-b-3 border-amber-800' : 'border-0'}`} >
              {sked}
            </button>
          )
        )}
      </div>
        {isSkill === "Educations" ? <Education /> : <Certificates />}      
    </div>
  )
}
