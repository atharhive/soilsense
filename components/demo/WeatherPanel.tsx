import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Droplets, Thermometer, Wind } from "lucide-react"

export default function WeatherPanel() {
  const weatherData = {
    temperature: 24,
    humidity: 65,
    windSpeed: 12,
    condition: "Partly Cloudy",
    forecast: [
      { day: "Today", high: 26, low: 18, condition: "sunny" },
      { day: "Tomorrow", high: 23, low: 16, condition: "cloudy" },
      { day: "Wed", high: 21, low: 14, condition: "rainy" },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5" />
          Weather Conditions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <Thermometer className="h-6 w-6 mx-auto mb-1 text-orange-500" />
            <div className="text-2xl font-bold">{weatherData.temperature}°C</div>
            <div className="text-xs text-muted-foreground">Temperature</div>
          </div>
          <div className="text-center">
            <Droplets className="h-6 w-6 mx-auto mb-1 text-blue-500" />
            <div className="text-2xl font-bold">{weatherData.humidity}%</div>
            <div className="text-xs text-muted-foreground">Humidity</div>
          </div>
          <div className="text-center">
            <Wind className="h-6 w-6 mx-auto mb-1 text-gray-500" />
            <div className="text-2xl font-bold">{weatherData.windSpeed}</div>
            <div className="text-xs text-muted-foreground">km/h</div>
          </div>
          <div className="text-center">
            <Cloud className="h-6 w-6 mx-auto mb-1 text-gray-600" />
            <div className="text-sm font-medium">{weatherData.condition}</div>
            <div className="text-xs text-muted-foreground">Current</div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium mb-2">3-Day Forecast</h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {weatherData.forecast.map((day, index) => (
              <div key={index} className="text-center p-2 bg-muted rounded">
                <div className="font-medium">{day.day}</div>
                <div className="text-muted-foreground">
                  {day.high}°/{day.low}°
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
