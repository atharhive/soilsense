import { Suspense } from "react"
import HeroSection from "@/components/HeroSection"
import MultiScaleSection from "@/components/MultiScaleSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import WhyItMattersSection from "@/components/WhyItMattersSection"
import FeatureHighlights from "@/components/FeatureHighlights"
import UserPersonas from "@/components/UserPersonas"
import CallToAction from "@/components/CallToAction"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <MultiScaleSection />
        <HowItWorksSection />
        <WhyItMattersSection />
        <FeatureHighlights />
        <UserPersonas />
        <CallToAction />
      </Suspense>
    </main>
  )
}
