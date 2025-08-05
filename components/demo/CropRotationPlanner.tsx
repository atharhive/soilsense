import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw, Calendar } from "lucide-react"

export default function CropRotationPlanner() {
  const rotationPlan = [
    { season: "Spring 2024", crop: "Corn", field: "A-1" },
    { season: "Summer 2024", crop: "Soybeans", field: "A-1" },
    { season: "Fall 2024", crop: "Cover Crop", field: "A-1" },
    { season: "Spring 2025", crop: "Wheat", field: "A-1" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RotateCcw className="h-5 w-5" />
          Crop Rotation Planner
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Plan */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Field A-1 Rotation Plan</h4>
            {rotationPlan.map((plan, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{plan.season}</span>
                </div>
                <div className="text-sm font-medium">{plan.crop}</div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
            <h4 className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Rotation Benefits</h4>
            <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
              <li>• Improved soil nitrogen levels</li>
              <li>• Reduced pest pressure</li>
              <li>• Enhanced soil structure</li>
            </ul>
          </div>

          <Button className="w-full" size="sm">
            Optimize Rotation
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
