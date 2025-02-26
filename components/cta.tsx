import { LaunchingSoonModal } from "@/components/launching-soon-modal"

export default function CTA() {
  return (
    <section id="cta" className="py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Evaluate Your AI Models?</h2>
        <p className="text-xl mb-8">Join EvalSuite today and ensure the quality and reliability of your AI systems.</p>
        <LaunchingSoonModal />
      </div>
    </section>
  )
}

