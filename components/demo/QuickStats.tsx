import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Beaker, Droplets, Leaf, TrendingUp } from "lucide-react"

interface QuickStatsProps {
  mode: "pot" | "garden" | "farm"
}

export default function QuickStats({ mode }: QuickStatsProps) {
  const getStatsForMode = () => {
    switch (mode) {
      case "pot":
        return {
          ph: { value: 6.8, status: "good", icon: Beaker },
          moisture: { value: 45, status: "warning", icon: Droplets },
          npk: { value: "Balanced", status: "good", icon: Leaf },
          growth: { value: "+12%", status: "good", icon: TrendingUp },
        }
      case "garden":
        return {
          ph: { value: 7.1, status: "good", icon: Beaker },
          moisture: { value: 62, status: "good", icon: Droplets },
          npk: { value: "High N", status: "warning", icon: Leaf },
          growth: { value: "+8%", status: "good", icon: TrendingUp },
        }
      case "farm":
        return {
          ph: { value: 6.5, status: "warning", icon: Beaker },
          moisture: { value: 38, status: "critical", icon: Droplets },
          npk: { value: "Low P", status: "critical", icon: Leaf },
          growth: { value: "-3%", status: "critical", icon: TrendingUp },
        }
    }
  }

  const stats = getStatsForMode()

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(stats).map(([key, stat]) => (
            <div key={key} className="text-center p-3 bg-muted rounded-lg">
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-lg font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground mb-1 capitalize">{key}</div>
              <Badge className={`text-xs ${getStatusColor(stat.status)}`}>{stat.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
