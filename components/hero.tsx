import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Evaluate AI Models with Confidence</h1>
            <p className="text-xl mb-6 text-foreground">
              EvalSuite provides a standardized and efficient way to benchmark your AI models against industry standards
              and real-world datasets.
            </p>
            <Button size="lg" className="animate-pulse">
              Start Evaluating
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="AI Model Evaluation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg float-animation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

