import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Droplets, Sun, Scissors } from "lucide-react"

export default function CareTips() {
  const tips = [
    {
      icon: Droplets,
      title: "Watering Schedule",
      description: "Water every 2-3 days in the morning",
      action: "Set Reminder",
    },
    {
      icon: Sun,
      title: "Light Requirements",
      description: "Move to brighter location for 6+ hours sunlight",
      action: "Learn More",
    },
    {
      icon: Scissors,
      title: "Pruning Needed",
      description: "Remove dead leaves to promote growth",
      action: "Watch Tutorial",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Care Tips
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="p-3 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <tip.icon className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium mb-1">{tip.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{tip.description}</p>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    {tip.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
