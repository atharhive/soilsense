import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function UserPersonas() {
  const personas = [
    {
      name: "Margaret Chen",
      role: "Elderly Gardener",
      age: "72",
      quote:
        "The voice guidance helps me understand what my tomatoes need. I've been gardening for 40 years, but I'm still learning!",
      image: "/elderly-woman-gardening.png",
    },
    {
      name: "Emma Rodriguez",
      role: "Child Soil Explorer",
      age: "8",
      quote:
        "I love taking pictures of dirt and seeing what the computer tells me! Now I know why plants need different foods.",
      image: "/young-girl-plants.png",
    },
    {
      name: "David Kim",
      role: "Urban Balcony Gardener",
      age: "34",
      quote: "Perfect for my small apartment garden. The app tells me exactly when to water my herbs and vegetables.",
      image: "/man-balcony-garden.png",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Industrial Agronomist",
      age: "45",
      quote:
        "The satellite integration and field mapping features have revolutionized how we manage our 2,000-acre operation.",
      image: "/female-scientist-field.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by All Ages</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From curious children to experienced farmers, SoilSense serves everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={persona.image || "/placeholder.svg"}
                    alt={persona.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Quote className="h-4 w-4 text-primary" />
                      <div className="text-sm text-muted-foreground">
                        {persona.role}, Age {persona.age}
                      </div>
                    </div>
                    <blockquote className="text-foreground italic mb-3">"{persona.quote}"</blockquote>
                    <div className="font-semibold text-primary">— {persona.name}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
