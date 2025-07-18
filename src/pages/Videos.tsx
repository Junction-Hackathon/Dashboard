import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle, XCircle, Clock } from "lucide-react";

const videos = [
  {
    id: "V-001",
    sheepId: "S-1247",
    worker: "Mohammed Hassan",
    uploadTime: "2024-01-15 14:30",
    duration: "2:45",
    status: "pending",
    thumbnail: "/api/placeholder/150/100",
    notes: ""
  },
  {
    id: "V-002",
    sheepId: "S-1248", 
    worker: "Ali Al-Mansouri",
    uploadTime: "2024-01-15 13:15",
    duration: "3:12",
    status: "approved",
    thumbnail: "/api/placeholder/150/100",
    notes: "Good quality video"
  },
  {
    id: "V-003",
    sheepId: "S-1249",
    worker: "Yusuf Al-Sharif",
    uploadTime: "2024-01-15 12:00",
    duration: "1:58",
    status: "rejected",
    thumbnail: "/api/placeholder/150/100",
    notes: "Poor lighting, please reshoot"
  },
  {
    id: "V-004",
    sheepId: "S-1250",
    worker: "Hassan Al-Bakri",
    uploadTime: "2024-01-15 11:45",
    duration: "2:30",
    status: "pending",
    thumbnail: "/api/placeholder/150/100",
    notes: ""
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-800 border-green-200";
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "rejected":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const Videos = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Video Verifications</h1>
          <p className="text-muted-foreground">
            Review and approve videos submitted by field workers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-sm font-medium">Sheep {video.sheepId}</CardTitle>
                    <p className="text-xs text-muted-foreground">by {video.worker}</p>
                  </div>
                  <Badge variant="secondary" className={getStatusColor(video.status)}>
                    {video.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <p>Uploaded: {video.uploadTime}</p>
                    <p>Duration: {video.duration}</p>
                  </div>

                  {video.notes && (
                    <div className="bg-muted/50 p-2 rounded-md">
                      <p className="text-xs text-muted-foreground">{video.notes}</p>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-red-600 border-red-300 hover:bg-red-50">
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Videos;