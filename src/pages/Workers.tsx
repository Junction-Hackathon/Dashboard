import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, MapPin, Star, Plus, Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const workers = [
  {
    id: "W-001",
    name: "Mohammed Hassan",
    phone: "+966 50 123 4567",
    status: "active",
    deliveries: 23,
    videos: 25,
    joinDate: "2023-06-15",
    avatar: "MH",
  },
  {
    id: "W-002",
    name: "Ali Al-Mansouri",
    phone: "+966 50 234 5678",
    status: "active",
    deliveries: 31,
    videos: 33,
    joinDate: "2023-05-20",
    avatar: "AM",
  },
  {
    id: "W-003",
    name: "Yusuf Al-Sharif",
    phone: "+966 50 345 6789",
    status: "inactive",
    deliveries: 15,
    videos: 18,
    joinDate: "2023-08-10",
    avatar: "YS",
  },
  {
    id: "W-004",
    name: "Hassan Al-Bakri",
    phone: "+966 50 456 7890",
    status: "active",
    deliveries: 28,
    videos: 30,
    joinDate: "2023-07-01",
    avatar: "HB",
  },
  {
    id: "W-005",
    name: "Omar Al-Qureshi",
    phone: "+966 50 567 8901",
    status: "active",
    deliveries: 19,
    videos: 21,
    joinDate: "2023-09-05",
    avatar: "OQ",
  },
  {
    id: "W-006",
    name: "Khalid Al-Najjar",
    phone: "+966 50 678 9012",
    status: "active",
    deliveries: 22,
    videos: 24,
    joinDate: "2023-04-12",
    avatar: "KN",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 border-green-200";
    case "inactive":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const Workers = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Workers / Field Agents
            </h1>
            <p className="text-muted-foreground">
              Manage your field team and track their performance
            </p>
          </div>

          <Popover>
            <PopoverTrigger>
              <Button className="bg-gradient-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Worker
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Add a Worker</h4>
                  <p className="text-muted-foreground text-sm">
                    Set the informations for the worker
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Phone Number</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Region</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map((worker) => (
            <Card
              key={worker.id}
              className="shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                        {worker.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{worker.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        ID: {worker.id}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={getStatusColor(worker.status)}
                  >
                    {worker.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{worker.phone}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    {/* <span>{worker.region}</span> */}
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-3 border-t">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {worker.deliveries}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Deliveries
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {worker.videos}
                      </p>
                      <p className="text-xs text-muted-foreground">Videos</p>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    <p>Joined: {worker.joinDate}</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
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

export default Workers;
