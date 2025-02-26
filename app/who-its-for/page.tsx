import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, GraduationCap, Building } from "lucide-react"

const audiences = [
  {
    title: "AI Researchers",
    description:
      "Validate and benchmark your models against industry standards. EvalSuite provides a comprehensive platform for testing and comparing AI models across various metrics, helping researchers push the boundaries of AI technology.",
    icon: Users,
  },
  {
    title: "ML Engineers",
    description:
      "Integrate model evaluation into your MLOps pipeline. With EvalSuite's API-based evaluation, you can seamlessly incorporate model testing into your development workflow, ensuring consistent quality and performance.",
    icon: Briefcase,
  },
  {
    title: "Academia",
    description:
      "Participate in open challenges and competitions. EvalSuite hosts leaderboards for various AI tasks, providing a platform for academic institutions to showcase their research and compete with peers worldwide.",
    icon: GraduationCap,
  },
  {
    title: "Enterprises",
    description:
      "Ensure reliability and fairness in production AI systems. EvalSuite offers comprehensive testing for bias, fairness, and robustness, helping enterprises deploy AI solutions with confidence and maintain regulatory compliance.",
    icon: Building,
  },
]

export default function WhoItsForPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-primary">Who EvalSuite Is For</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {audiences.map((audience, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardHeader>
              <audience.icon className="w-10 h-10 mb-2 text-secondary" />
              <CardTitle className="text-primary">{audience.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{audience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

