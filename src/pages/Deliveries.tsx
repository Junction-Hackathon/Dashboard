import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, CheckCircle, Truck, Clock } from "lucide-react";

const deliveries = [
  {
    id: "DEL-001",
    sheepId: "S-1247",
    recipient: "Al-Zahra Family",
    region: "Region A - North",
    deliveryWorker: "Mohammed Hassan",
    scheduledDate: "2024-01-16",
    status: "in_progress",
    address: "123 Al-Noor Street, District 1",
    notes: "Contact before arrival"
  },
  {
    id: "DEL-002",
    sheepId: "S-1248",
    recipient: "Widow Um Ahmad",
    region: "Region B - East", 
    deliveryWorker: "Ali Al-Mansouri",
    scheduledDate: "2024-01-16",
    status: "completed",
    address: "456 Al-Rahma Avenue, District 2",
    notes: "Delivered successfully"
  },
  {
    id: "DEL-003",
    sheepId: "S-1249",
    recipient: "Al-Khattab Family",
    region: "Region A - North",
    deliveryWorker: "Yusuf Al-Sharif",
    scheduledDate: "2024-01-17",
    status: "pending",
    address: "789 Al-Salam Road, District 3",
    notes: "Large family (8 members)"
  },
  {
    id: "DEL-004",
    sheepId: "S-1250",
    recipient: "Elderly Couple",
    region: "Region C - South",
    deliveryWorker: "Hassan Al-Bakri",
    scheduledDate: "2024-01-17",
    status: "pending",
    address: "321 Al-Huda Street, District 4",
    notes: "Needs special assistance"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "in_progress":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-4 h-4" />;
    case "in_progress":
      return <Truck className="w-4 h-4" />;
    case "pending":
      return <Clock className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const Deliveries = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Deliveries</h1>
            <p className="text-muted-foreground">
              Track and manage meat deliveries to recipients
            </p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary/90">
            Schedule Delivery
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">2</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">1</p>
                </div>
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-green-600">1</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>All Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sheep ID</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Worker</TableHead>
                    <TableHead>Scheduled Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-mono">{delivery.sheepId}</TableCell>
                      <TableCell className="font-medium">{delivery.recipient}</TableCell>
                      <TableCell>{delivery.region}</TableCell>
                      <TableCell>{delivery.deliveryWorker}</TableCell>
                      <TableCell>{delivery.scheduledDate}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(delivery.status)}>
                          <span className="mr-1">{getStatusIcon(delivery.status)}</span>
                          {delivery.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">{delivery.address}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MapPin className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Deliveries;