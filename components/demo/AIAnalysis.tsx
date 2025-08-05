import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, CheckCircle, AlertCircle, XCircle } from "lucide-react"

export default function AIAnalysis() {
  const analysisData = {
    overallHealth: "Good",
    confidence: 87,
    metrics: [
      { name: "Soil Structure", value: "Good", status: "good" },
      { name: "Nutrient Balance", value: "Fair", status: "warning" },
      { name: "Organic Matter", value: "Excellent", status: "good" },
      { name: "Drainage", value: "Poor", status: "critical" },
    ],
    insights: [
      "Soil shows good organic content with healthy microbial activity",
      "Phosphorus levels are below optimal range for vegetable growth",
      "Consider improving drainage to prevent root rot",
      "pH level is ideal for most common garden plants",
    ],
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "critical":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

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
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI Analysis Results
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Health */}
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-2xl font-bold text-primary mb-1">{analysisData.overallHealth}</div>
          <div className="text-sm text-muted-foreground mb-2">Overall Soil Health</div>
          <div className="text-xs text-muted-foreground">{analysisData.confidence}% confidence</div>
        </div>

        {/* Metrics */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Detailed Metrics</h4>
          {analysisData.metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
              <div className="flex items-center gap-2">
                {getStatusIcon(metric.status)}
                <span className="text-sm">{metric.name}</span>
              </div>
              <Badge className={`text-xs ${getStatusColor(metric.status)}`}>{metric.value}</Badge>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">AI Insights</h4>
          <div className="space-y-2">
            {analysisData.insights.map((insight, index) => (
              <div key={index} className="text-xs text-muted-foreground p-2 bg-muted rounded">
                • {insight}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
