"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export default function SensorChart() {
  // Mock data for the chart
  const chartData = [
    { time: "00:00", moisture: 45, ph: 6.8, temp: 22 },
    { time: "04:00", moisture: 42, ph: 6.9, temp: 20 },
    { time: "08:00", moisture: 38, ph: 7.0, temp: 24 },
    { time: "12:00", moisture: 35, ph: 7.1, temp: 28 },
    { time: "16:00", moisture: 32, ph: 7.0, temp: 26 },
    { time: "20:00", moisture: 40, ph: 6.9, temp: 23 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Sensor Data Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart placeholder - in a real app, you'd use Chart.js or similar */}
          <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm">Interactive Chart</div>
              <div className="text-xs">Moisture, pH, Temperature over 24h</div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span>Moisture</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span>pH Level</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span>Temperature</span>
            </div>
          </div>

          {/* Current Values */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-500">32%</div>
              <div className="text-xs text-muted-foreground">Moisture</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-500">7.0</div>
              <div className="text-xs text-muted-foreground">pH</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-500">23°C</div>
              <div className="text-xs text-muted-foreground">Temperature</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
