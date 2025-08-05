import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Smartphone, Cpu, Satellite, Brain, Database, Cloud, Timer, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const techStack = [
    {
      category: "Frontend",
      icon: Smartphone,
      technologies: ["React 18", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Sensors & IoT",
      icon: Cpu,
      technologies: ["Arduino", "ESP32", "Raspberry Pi", "Bluetooth LE", "WiFi Modules"],
    },
    {
      category: "Satellite Data",
      icon: Satellite,
      technologies: ["Google Earth Engine", "Sentinel-2", "Landsat 8", "MODIS", "Planet API"],
    },
    {
      category: "AI & ML",
      icon: Brain,
      technologies: ["TensorFlow Lite", "OpenCV", "scikit-learn", "PyTorch", "Computer Vision"],
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "WebSocket"],
    },
    {
      category: "Cloud & Deployment",
      icon: Cloud,
      technologies: ["Vercel", "AWS", "Docker", "GitHub Actions", "Supabase"],
    },
  ]

  const timeline = [
    { hour: "0-2", task: "Project Setup & Architecture", status: "completed" },
    { hour: "2-8", task: "Core UI Components & Landing Page", status: "completed" },
    { hour: "8-16", task: "Dashboard & Sensor Simulation", status: "completed" },
    { hour: "16-24", task: "AI Analysis & Educational Features", status: "completed" },
    { hour: "24-30", task: "Testing, Polish & Deployment", status: "completed" },
  ]

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">About SoilSense</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive soil health monitoring system built in 30 hours, bridging the gap between traditional
            farming and modern technology.
          </p>
        </div>

        {/* System Architecture */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <stack.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Development Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5" />
              30-Hour Development Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeline.map((phase, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 text-sm font-medium text-primary">{phase.hour}h</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          phase.status === "completed" ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                      <span className="font-medium">{phase.task}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Multi-User Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium">Target Users:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Children learning about soil health</li>
                  <li>• Elderly gardeners with accessibility needs</li>
                  <li>• Urban balcony gardeners</li>
                  <li>• Small-scale farmers</li>
                  <li>• Industrial agricultural operations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Innovation Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium">Key Innovations:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multi-scale monitoring (pot to satellite)</li>
                  <li>• AI-powered soil photo analysis</li>
                  <li>• Educational voice assistance</li>
                  <li>• Accessibility-first design</li>
                  <li>• Real-time IoT sensor integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Responsive Design</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Monitoring Scales</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">30</div>
                <div className="text-sm text-muted-foreground">Hours to Build</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Roadmap */}
        <Card>
          <CardHeader>
            <CardTitle>Future Development Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Phase 1: Mobile Enhancement (Weeks 1-2)</h4>
                <p className="text-sm text-muted-foreground">
                  Convert to React Native, implement actual camera integration, add offline functionality
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Phase 2: IoT Integration (Weeks 3-4)</h4>
                <p className="text-sm text-muted-foreground">
                  Arduino/ESP32 sensor networks, real-time alerts, Bluetooth/WiFi connectivity
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Phase 3: AI & Satellite (Weeks 5-6)</h4>
                <p className="text-sm text-muted-foreground">
                  Google Earth Engine integration, ML models for crop recommendations, predictive analytics
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Phase 4: Community Features (Weeks 7-8)</h4>
                <p className="text-sm text-muted-foreground">
                  User accounts, data sharing, expert consultation, farmer networking
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
