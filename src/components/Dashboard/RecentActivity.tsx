import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentActivities = [
  {
    id: 1,
    type: "donation",
    message: "Ahmad donated for sheep #S-1247",
    time: "2 minutes ago",
    status: "pending",
    avatar: "AH"
  },
  {
    id: 2,
    type: "video",
    message: "Video verified for sheep #S-1246",
    time: "15 minutes ago",
    status: "approved",
    avatar: "MK"
  },
  {
    id: 3,
    type: "delivery",
    message: "Delivery completed to Al-Zahra family",
    time: "1 hour ago",
    status: "completed",
    avatar: "FN"
  },
  {
    id: 4,
    type: "skin",
    message: "Skin donated to local charity",
    time: "2 hours ago",
    status: "completed",
    avatar: "SK"
  },
  {
    id: 5,
    type: "worker",
    message: "New worker assigned to region 3",
    time: "3 hours ago",
    status: "active",
    avatar: "YS"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "approved":
    case "completed":
    case "active":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const RecentActivity = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
              <Avatar className="w-10 h-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.message}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Badge variant="secondary" className={getStatusColor(activity.status)}>
                {activity.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};