import { educations } from "./data/objs"

export default function Education() {
  return (
    <section className="flex flex-col md:text-start md:ml-6 lg:ml-16">
      {educations.map(edu => (
        <div key={edu.id} className="pb-2">
          <p>{edu.course},  <span className="text-xs">{edu.time}</span></p>
          <p className="italic text-sm">{edu.inst}</p>
          <div className="w-8 h-1 mt-1 mx-auto md:mx-0 bg-white"></div>
        </div>
      ))}
    </section>
  )
}
