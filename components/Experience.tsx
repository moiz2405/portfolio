import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "Sept-2024 - Present",
    description: "Developing Full Stack Applications using React, Next.js, Node.js, and MongoDB",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Docker", "Kubernetes"]
  },
  {
    title: "Open Source Contributor",
    company: "Layer5 | CNCF | INCF",
    period: "Aug-2024 - Present",
    description: "Contributing to Open Source Projects like Meshery, Open Telemetry and CNCF Projects",
    skills: [ "Kubernetes", "Docker", "CI/CD", "Jenkins", "ArgoCD", "Helm", "Kustomize", "Prometheus", "Monokle"]
  },
  {
    title: "AI/Ml Intern",
    company: "Google India",
    period: "Mar-2024 - Jun-2024",
    description: "Advanced through the Google AI/ML internship program, learning the latest in AI/ML technologies",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "Matplotlib"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-gray-800 border-gray-600">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-100">{exp.title}</h3>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="bg-blue-400 text-gray-900">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

