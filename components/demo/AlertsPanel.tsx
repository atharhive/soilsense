import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Droplets, Thermometer, Bug } from "lucide-react"

interface AlertsPanelProps {
  mode: "pot" | "garden" | "farm"
}

export default function AlertsPanel({ mode }: AlertsPanelProps) {
  const getAlertsForMode = () => {
    switch (mode) {
      case "pot":
        return [
          {
            icon: Droplets,
            title: "Low Moisture",
            description: "Basil pot needs watering",
            severity: "warning",
            time: "2 hours ago",
          },
          {
            icon: Thermometer,
            title: "Temperature Alert",
            description: "Too cold for tomatoes",
            severity: "info",
            time: "1 day ago",
          },
        ]
      case "garden":
        return [
          {
            icon: AlertTriangle,
            title: "pH Imbalance",
            description: "Vegetable patch pH too high",
            severity: "warning",
            time: "30 minutes ago",
          },
          {
            icon: Droplets,
            title: "Irrigation Needed",
            description: "Herb garden moisture low",
            severity: "critical",
            time: "1 hour ago",
          },
          {
            icon: Bug,
            title: "Pest Detection",
            description: "Aphids detected on roses",
            severity: "warning",
            time: "3 hours ago",
          },
        ]
      case "farm":
        return [
          {
            icon: Droplets,
            title: "Water Stress",
            description: "Field A-3 critical moisture",
            severity: "critical",
            time: "15 minutes ago",
          },
          {
            icon: AlertTriangle,
            title: "Nutrient Deficiency",
            description: "Low phosphorus in Field B-1",
            severity: "warning",
            time: "2 hours ago",
          },
          {
            icon: Thermometer,
            title: "Frost Warning",
            description: "Temperature dropping tonight",
            severity: "critical",
            time: "4 hours ago",
          },
        ]
    }
  }

  const alerts = getAlertsForMode()

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "info":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <alert.icon className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium">{alert.title}</h4>
                  <Badge className={`text-xs ${getSeverityColor(alert.severity)}`}>{alert.severity}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{alert.description}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
