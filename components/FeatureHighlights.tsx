import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Volume2, FileText, Map, CloudRain } from "lucide-react"

export default function FeatureHighlights() {
  const features = [
    {
      icon: Brain,
      title: "AI Photo Analysis",
      description:
        "Advanced computer vision analyzes soil photos to determine health, composition, and nutrient levels instantly.",
    },
    {
      icon: Cpu,
      title: "IoT Sensor Integration",
      description: "Real-time data from pH, moisture, temperature, and NPK sensors for continuous monitoring.",
    },
    {
      icon: Volume2,
      title: "Voice-Assisted Tutorials",
      description: "Educational voice guidance makes soil science accessible to children and elderly users.",
    },
    {
      icon: FileText,
      title: "Comprehensive Reports",
      description: "Generate detailed soil health reports with recommendations and historical trend analysis.",
    },
    {
      icon: Map,
      title: "Field Mapping",
      description: "Interactive maps with zone-based monitoring and crop rotation planning capabilities.",
    },
    {
      icon: CloudRain,
      title: "Weather Integration",
      description: "Local weather data integration for irrigation scheduling and climate-aware recommendations.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Feature Highlights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology meets user-friendly design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
