import Link from "next/link"
import { LaunchingSoonModal } from "@/components/launching-soon-modal"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          EvalSuite
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/features" className="text-foreground hover:text-primary transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/who-its-for" className="text-foreground hover:text-primary transition-colors">
                Who It's For
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
        <LaunchingSoonModal />
      </div>
    </header>
  )
}

