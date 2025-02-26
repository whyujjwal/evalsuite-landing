import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Researcher, Tech University",
    content:
      "EvalSuite has revolutionized how we validate our AI models. The comprehensive metrics and easy-to-use interface have significantly improved our research efficiency.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mark Thompson",
    role: "CTO, AI Innovations Inc.",
    content:
      "As a company deploying AI in production, EvalSuite gives us the confidence that our models meet the highest standards of performance and fairness.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Chen",
    role: "Data Science Lead, Global Corp",
    content:
      "The ability to benchmark against industry standards and participate in open challenges has been invaluable for our team's growth and development.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

