import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, GraduationCap, Recycle } from "lucide-react"

export default function WhyItMattersSection() {
  const impacts = [
    {
      icon: TrendingDown,
      title: "Soil Degradation Crisis",
      description: "Every year, 24 billion tons of fertile soil are lost due to erosion and poor management.",
      stats: "33% of arable land degraded globally",
    },
    {
      icon: GraduationCap,
      title: "Soil Literacy for Children",
      description: "Educational tools help children understand the importance of soil health for our planet.",
      stats: "95% of food depends on soil",
    },
    {
      icon: Recycle,
      title: "Sustainable Farming",
      description: "Smart monitoring enables sustainable practices that preserve soil for future generations.",
      stats: "40% increase in crop yield possible",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why It Matters</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soil health is critical for food security, climate stability, and biodiversity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-destructive/10 rounded-full w-fit">
                  <impact.icon className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="text-xl">{impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{impact.description}</p>
                <div className="text-2xl font-bold text-primary">{impact.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infographic */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2050</div>
              <div className="text-sm text-muted-foreground">Year when we need 70% more food</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000</div>
              <div className="text-sm text-muted-foreground">Years to form 1 inch of topsoil</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <div className="text-sm text-muted-foreground">Of global biodiversity lives in soil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
