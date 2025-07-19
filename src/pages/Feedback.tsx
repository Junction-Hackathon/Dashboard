import { useState } from "react"
import { DashboardLayout } from "@/components/Layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageSquare, Star, Play, Check, X } from "lucide-react"

const initialFeedback = [
  {
    id: "FB-001",
    type: "video",
    recipientName: "Al-Zahra Family",
    message:
      "Barakallahu feekum, the meat was fresh and helped our family immensely during this blessed time.",
    rating: 5,
    date: "2024-01-15",
    status: "approved",
    thumbnail: "/api/placeholder/100/80",
  },
  {
    id: "FB-002",
    type: "text",
    recipientName: "Widow Um Ahmad",
    message:
      "Jazakallahu khair for the generous donation. May Allah reward you abundantly. The children were so happy.",
    rating: 5,
    date: "2024-01-14",
    status: "approved",
    thumbnail: null,
  },
  {
    id: "FB-003",
    type: "audio",
    recipientName: "Elderly Couple",
    message: "Audio message: Thank you so much for remembering us...",
    rating: 4,
    date: "2024-01-13",
    status: "pending",
    thumbnail: null,
  },
  {
    id: "FB-004",
    type: "text",
    recipientName: "Al-Khattab Family",
    message:
      "Subhanallah, what a blessing! The meat was of excellent quality and the delivery was very respectful.",
    rating: 5,
    date: "2024-01-12",
    status: "approved",
    thumbnail: null,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-800 border-green-200"
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "rejected":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return <Play className="w-4 h-4" />
    case "audio":
      return <MessageSquare className="w-4 h-4" />
    default:
      return <MessageSquare className="w-4 h-4" />
  }
}

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState(initialFeedback)

  const handleApprove = (id: string) => {
    setFeedbackList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: "approved" } : item
      )
    )
  }

  const handleReject = (id: string) => {
    setFeedbackList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: "rejected" } : item
      )
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Feedback & Testimonials
          </h1>
          <p className="text-muted-foreground">
            Messages and testimonials from grateful recipients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Feedback
                  </p>
                  <p className="text-2xl font-bold text-primary">234</p>
                </div>
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Pending Review
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">12</p>
                </div>
                <MessageSquare className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Avg Rating
                  </p>
                  <p className="text-2xl font-bold text-green-600">4.8</p>
                </div>
                <Star className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {feedbackList.map(item => (
            <Card
              key={item.id}
              className="shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
                        {item.recipientName
                          .split(" ")
                          .map(n => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        {item.recipientName}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className={getStatusColor(item.status)}
                    >
                      {item.status}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {getTypeIcon(item.type)}
                      <span className="text-xs text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {item.type === "video" && (
                    <video
                      className="rounded-lg w-full max-h-48 object-cover"
                      controls
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                    />
                  )}

                  {item.thumbnail && item.type !== "video" && (
                    <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <Play className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-foreground leading-relaxed">
                    {item.message}
                  </p>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {item.rating}/5
                    </span>
                  </div>

                  {item.status === "pending" && (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleApprove(item.id)}
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-red-600 border-red-300 hover:bg-red-50"
                        onClick={() => handleReject(item.id)}
                      >
                        <X className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Feedback
