"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Map, Layers, Satellite } from "lucide-react"

export default function FarmMap() {
  const fields = [
    { id: "A-1", crop: "Corn", health: "good", yield: "95%" },
    { id: "A-2", crop: "Soybeans", health: "warning", yield: "87%" },
    { id: "A-3", crop: "Wheat", health: "critical", yield: "72%" },
    { id: "B-1", crop: "Corn", health: "good", yield: "92%" },
    { id: "B-2", crop: "Fallow", health: "good", yield: "N/A" },
    { id: "B-3", crop: "Soybeans", health: "good", yield: "89%" },
  ]

  const getHealthColor = (health: string) => {
    switch (health) {
      case "good":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "critical":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Map className="h-5 w-5" />
          Farm Field Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Map Controls */}
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Layers className="h-4 w-4 mr-1" />
              Soil Health
            </Button>
            <Button size="sm" variant="outline">
              <Satellite className="h-4 w-4 mr-1" />
              Satellite View
            </Button>
          </div>

          {/* Field Grid */}
          <div className="grid grid-cols-3 gap-2 p-4 bg-muted rounded-lg">
            {fields.map((field) => (
              <div
                key={field.id}
                className={`p-3 rounded border-2 cursor-pointer hover:shadow-md transition-all ${getHealthColor(field.health)} bg-opacity-20 border-opacity-50`}
              >
                <div className="text-sm font-bold">{field.id}</div>
                <div className="text-xs text-muted-foreground">{field.crop}</div>
                <div className="text-xs font-medium">{field.yield}</div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded" />
              <span>Healthy</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-yellow-500 rounded" />
              <span>Warning</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded" />
              <span>Critical</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
