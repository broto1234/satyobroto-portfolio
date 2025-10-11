import { Certifications } from "./data/objs"

export default function Certificates() {
  return (
    <section>
      {Certifications.map((certf) => (
        <div key={certf.id} className="my-2">
          <p>{certf.course} <span className="text-primary">{certf.inst}</span></p>
          <p className="text-sm">{certf.time}</p>
        </div>
      ))}       
    </section>
  )
}
