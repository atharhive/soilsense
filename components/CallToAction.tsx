import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Soil Health Movement</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Be part of the solution. Start monitoring your soil health today and contribute to a more sustainable future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link href="/demo" className="flex items-center gap-2">
              Get Early Access
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            Download Report
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-2">Get updates on new features and soil health insights</p>
        </div>
      </div>
    </section>
  )
}
