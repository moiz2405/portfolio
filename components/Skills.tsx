import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaHtml5, FaCss3Alt 
} from 'react-icons/fa'
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, 
  SiPostgresql, SiDjango, SiKubernetes, SiGraphql, SiTailwindcss 
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: FaDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'AWS', icon: FaAws },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Python', icon: FaPython },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  // { name: 'GraphQL', icon: SiGraphql },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="group flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:translate-y-1 hover:translate-x-1 transform-gpu"
          >
            {/* The icon color changes when the card is hovered */}
            <skill.icon 
              size={32} 
              className="text-blue-400 group-hover:text-white transition-colors duration-300" 
            />
            <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
