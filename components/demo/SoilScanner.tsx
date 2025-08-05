"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Upload, Scan } from "lucide-react"

export default function SoilScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<any>(null)

  const handleScan = () => {
    setIsScanning(true)
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      setScanResult({
        soilType: "Loamy Clay",
        ph: 6.8,
        moisture: 45,
        organicMatter: 3.2,
        nutrients: {
          nitrogen: "Medium",
          phosphorus: "Low",
          potassium: "High",
        },
        recommendations: ["Add phosphorus-rich fertilizer", "Increase watering frequency", "Consider adding compost"],
      })
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Soil Photo Scanner
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!scanResult ? (
          <div className="text-center space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8">
              {isScanning ? (
                <div className="space-y-4">
                  <Scan className="h-12 w-12 mx-auto text-primary animate-pulse" />
                  <div className="text-sm text-muted-foreground">Analyzing soil composition...</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: "60%" }} />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">Take a photo of your soil for instant analysis</div>
                </div>
              )}
            </div>

            {!isScanning && (
              <div className="flex gap-2">
                <Button onClick={handleScan} className="flex-1">
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted rounded">
                <div className="text-lg font-bold">{scanResult.soilType}</div>
                <div className="text-xs text-muted-foreground">Soil Type</div>
              </div>
              <div className="text-center p-3 bg-muted rounded">
                <div className="text-lg font-bold">{scanResult.ph}</div>
                <div className="text-xs text-muted-foreground">pH Level</div>
              </div>
            </div>

            <Button variant="outline" onClick={() => setScanResult(null)} className="w-full">
              Scan Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
