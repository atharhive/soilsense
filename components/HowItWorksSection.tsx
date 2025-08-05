import { Card, CardContent } from "@/components/ui/card"
import { Camera, BarChart3, Lightbulb, Map } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Camera,
      title: "Scan Soil",
      description: "Take a photo of your soil or connect IoT sensors for real-time data collection",
      step: "01",
    },
    {
      icon: BarChart3,
      title: "Analyze with AI",
      description: "Our AI analyzes soil composition, pH levels, nutrients, and moisture content",
      step: "02",
    },
    {
      icon: Lightbulb,
      title: "Get Care Tips",
      description: "Receive personalized recommendations for plant care and soil improvement",
      step: "03",
    },
    {
      icon: Map,
      title: "Plan with Satellite Data",
      description: "Use satellite imagery for crop rotation planning and field optimization",
      step: "04",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple steps to transform your soil health monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.step}
                    </div>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
