import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BarChart3, TrendingUp } from "lucide-react"

interface ReportPreviewProps {
  type: string
  dateRange: { from?: Date; to?: Date }
  format: string
}

export default function ReportPreview({ type, dateRange, format }: ReportPreviewProps) {
  const getReportContent = () => {
    switch (type) {
      case "soil-health":
        return {
          title: "Soil Health Report",
          icon: FileText,
          sections: [
            "Executive Summary",
            "Soil Composition Analysis",
            "pH and Nutrient Levels",
            "Recommendations",
            "Historical Trends",
          ],
        }
      case "garden-summary":
        return {
          title: "Garden Summary Report",
          icon: BarChart3,
          sections: ["Garden Overview", "Zone Performance", "Growth Metrics", "Care Activities", "Seasonal Analysis"],
        }
      case "field-analysis":
        return {
          title: "Field Analysis Report",
          icon: TrendingUp,
          sections: [
            "Field Performance Overview",
            "Crop Yield Analysis",
            "Soil Health by Zone",
            "Irrigation Efficiency",
            "Optimization Recommendations",
          ],
        }
      default:
        return { title: "Report", icon: FileText, sections: [] }
    }
  }

  const report = getReportContent()

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <report.icon className="h-5 w-5" />
            {report.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground">
              Date Range: {dateRange.from?.toLocaleDateString()} - {dateRange.to?.toLocaleDateString()}
            </div>
            <div className="text-sm text-muted-foreground">Format: {format.toUpperCase()}</div>

            <div className="border-t pt-3">
              <h4 className="text-sm font-medium mb-2">Report Sections:</h4>
              <ul className="space-y-1">
                {report.sections.map((section, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Data Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Sample Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium">Average pH</div>
              <div className="text-muted-foreground">6.8</div>
            </div>
            <div>
              <div className="font-medium">Moisture Level</div>
              <div className="text-muted-foreground">45%</div>
            </div>
            <div>
              <div className="font-medium">Organic Matter</div>
              <div className="text-muted-foreground">3.2%</div>
            </div>
            <div>
              <div className="font-medium">Health Score</div>
              <div className="text-muted-foreground">87/100</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
