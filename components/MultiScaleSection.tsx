import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Home, Tractor, Satellite } from "lucide-react"

export default function MultiScaleSection() {
  const scales = [
    {
      icon: Smartphone,
      title: "Pot & Mobile Camera Scanning",
      description:
        "Perfect for indoor plants, herbs, and small containers. Use your phone camera to analyze soil health instantly.",
      features: ["Photo-based analysis", "Plant care tips", "Beginner-friendly interface"],
    },
    {
      icon: Home,
      title: "Garden & Small Farm Sensors",
      description:
        "IoT sensors for backyard gardens and small farming operations. Monitor multiple zones simultaneously.",
      features: ["Multi-zone monitoring", "Weather integration", "Irrigation scheduling"],
    },
    {
      icon: Tractor,
      title: "Farm Monitoring Dashboard",
      description:
        "Comprehensive dashboard for medium to large farming operations with field mapping and crop tracking.",
      features: ["Field mapping", "Crop rotation planning", "Yield optimization"],
    },
    {
      icon: Satellite,
      title: "Satellite Crop Planning",
      description:
        "Large-scale agricultural monitoring using satellite imagery and advanced analytics for industrial farming.",
      features: ["Satellite imagery", "Predictive analytics", "Regional insights"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Multi-Scale Monitoring</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From windowsill herbs to industrial farmlands, SoilSense scales with your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scales.map((scale, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <scale.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{scale.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm">{scale.description}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {scale.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
