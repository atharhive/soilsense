"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import WeatherPanel from "@/components/demo/WeatherPanel"
import QuickStats from "@/components/demo/QuickStats"
import AlertsPanel from "@/components/demo/AlertsPanel"
import SoilScanner from "@/components/demo/SoilScanner"
import AIAnalysis from "@/components/demo/AIAnalysis"
import CareTips from "@/components/demo/CareTips"
import SensorChart from "@/components/demo/SensorChart"
import FarmMap from "@/components/demo/FarmMap"
import CropRotationPlanner from "@/components/demo/CropRotationPlanner"
import EducationalCenter from "@/components/demo/EducationalCenter"
import { Moon, Sun, Smartphone, Home, Tractor } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"

export default function DemoPage() {
  const [activeMode, setActiveMode] = useState("pot")
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">SoilSense Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full bg-transparent">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mode Selector */}
        <Tabs value={activeMode} onValueChange={setActiveMode} className="mb-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="pot" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Pot Mode
            </TabsTrigger>
            <TabsTrigger value="garden" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Garden Mode
            </TabsTrigger>
            <TabsTrigger value="farm" className="flex items-center gap-2">
              <Tractor className="h-4 w-4" />
              Farm Mode
            </TabsTrigger>
          </TabsList>

          {/* Pot Mode */}
          <TabsContent value="pot" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <WeatherPanel />
                <SoilScanner />
                <AIAnalysis />
              </div>
              <div className="space-y-6">
                <QuickStats mode="pot" />
                <AlertsPanel mode="pot" />
                <CareTips />
              </div>
            </div>
            <EducationalCenter />
          </TabsContent>

          {/* Garden Mode */}
          <TabsContent value="garden" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <WeatherPanel />
                  <QuickStats mode="garden" />
                </div>
                <SensorChart />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SoilScanner />
                  <AIAnalysis />
                </div>
              </div>
              <div className="space-y-6">
                <AlertsPanel mode="garden" />
                <CareTips />
              </div>
            </div>
          </TabsContent>

          {/* Farm Mode */}
          <TabsContent value="farm" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <WeatherPanel />
                  <QuickStats mode="farm" />
                  <AlertsPanel mode="farm" />
                </div>
                <FarmMap />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SensorChart />
                  <CropRotationPlanner />
                </div>
              </div>
              <div className="space-y-6">
                <CareTips />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
