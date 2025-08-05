import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, Award, Volume2 } from "lucide-react"

export default function EducationalCenter() {
  const lessons = [
    {
      title: "Understanding Soil pH",
      description: "Learn why pH matters for plant growth",
      duration: "5 min",
      type: "interactive",
      completed: true,
    },
    {
      title: "NPK Nutrients Explained",
      description: "Nitrogen, Phosphorus, and Potassium basics",
      duration: "7 min",
      type: "video",
      completed: false,
    },
    {
      title: "Soil Texture and Structure",
      description: "Identify different soil types",
      duration: "10 min",
      type: "quiz",
      completed: false,
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />
      case "quiz":
        return <Award className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Educational Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Voice Assistant */}
          <div className="p-3 bg-primary/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Voice Assistant</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              "Hi! I'm here to help you learn about soil health. Would you like to start with pH basics?"
            </p>
            <Button size="sm" variant="outline">
              Start Voice Tutorial
            </Button>
          </div>

          {/* Lessons */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Learning Modules</h4>
            {lessons.map((lesson, index) => (
              <div key={index} className="p-3 bg-muted rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {getTypeIcon(lesson.type)}
                      <h5 className="text-sm font-medium">{lesson.title}</h5>
                      {lesson.completed && <Award className="h-3 w-3 text-green-500" />}
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{lesson.description}</p>
                    <div className="text-xs text-muted-foreground">
                      {lesson.duration} • {lesson.type}
                    </div>
                  </div>
                  <Button size="sm" variant={lesson.completed ? "outline" : "default"}>
                    {lesson.completed ? "Review" : "Start"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="p-3 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Learning Progress</span>
              <span className="text-sm text-muted-foreground">1/3 completed</span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "33%" }} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
