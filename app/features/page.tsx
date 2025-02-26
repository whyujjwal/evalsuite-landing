import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, BarChart2, Zap, Shield, Code, Database } from "lucide-react"

const features = [
  {
    title: "Upload and Test",
    description: "Easily upload and test AI models across multiple benchmarks.",
    icon: Upload,
  },
  {
    title: "Compare Performance",
    description: "Compare your model performance against state-of-the-art algorithms.",
    icon: BarChart2,
  },
  {
    title: "Comprehensive Metrics",
    description: "Evaluate accuracy, F1-score, latency, fairness, and robustness.",
    icon: Zap,
  },
  {
    title: "Secure and Reliable",
    description: "Ensure transparency and reliability in your AI systems.",
    icon: Shield,
  },
  {
    title: "API Integration",
    description: "Enable API-based evaluation, allowing integration into MLOps pipelines.",
    icon: Code,
  },
  {
    title: "Leaderboards",
    description: "Host leaderboards for open challenges and competitions.",
    icon: Database,
  },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-primary">EvalSuite Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardHeader>
              <feature.icon className="w-10 h-10 mb-2 text-secondary" />
              <CardTitle className="text-primary">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

