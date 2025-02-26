import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, GraduationCap, Building } from "lucide-react"

const audiences = [
  {
    title: "AI Researchers",
    description: "Validate and benchmark your models against industry standards.",
    icon: Users,
  },
  {
    title: "ML Engineers",
    description: "Integrate model evaluation into your MLOps pipeline.",
    icon: Briefcase,
  },
  {
    title: "Academia",
    description: "Participate in open challenges and competitions.",
    icon: GraduationCap,
  },
  {
    title: "Enterprises",
    description: "Ensure reliability and fairness in production AI systems.",
    icon: Building,
  },
]

export default function Audience() {
  return (
    <section id="audience" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Who It's For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <audience.icon className="w-10 h-10 mb-2 text-secondary" />
                <CardTitle className="text-primary">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

