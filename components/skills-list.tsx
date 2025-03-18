import { CheckCircle2 } from "lucide-react"

const skills = {
  software: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "After Effects", "Cinema 4D", "Audition"],
  expertise: ["Color Grading", "Motion Graphics", "Sound Design", "Visual Effects", "Narrative Editing", "Compositing"],
  clients: ["Netflix", "Adidas", "Spotify", "Red Bull", "Universal Music", "Vice Media"],
}

export default function SkillsList() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">Software Proficiency</h3>
        <ul className="space-y-3">
          {skills.software.map((skill) => (
            <li key={skill} className="flex items-center text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">Technical Expertise</h3>
        <ul className="space-y-3">
          {skills.expertise.map((skill) => (
            <li key={skill} className="flex items-center text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">Client Experience</h3>
        <ul className="space-y-3">
          {skills.clients.map((client) => (
            <li key={client} className="flex items-center text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              {client}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

