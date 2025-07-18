import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Edit, UserPlus, CheckCircle } from "lucide-react";

const donations = [
  {
    id: "D-001",
    donorName: "Ahmad Al-Rashid",
    sheepId: "S-1247",
    amount: "$150",
    date: "2024-01-15",
    videoStatus: "verified",
    deliveryStatus: "pending",
    assignedWorker: "Mohammed Hassan",
    region: "Region A"
  },
  {
    id: "D-002", 
    donorName: "Fatima Al-Zahra",
    sheepId: "S-1248",
    amount: "$150",
    date: "2024-01-15",
    videoStatus: "pending",
    deliveryStatus: "not_started",
    assignedWorker: "Unassigned",
    region: "Region B"
  },
  {
    id: "D-003",
    donorName: "Omar Al-Khattab",
    sheepId: "S-1249", 
    amount: "$150",
    date: "2024-01-14",
    videoStatus: "verified",
    deliveryStatus: "completed",
    assignedWorker: "Ali Al-Mansouri",
    region: "Region A"
  },
  {
    id: "D-004",
    donorName: "Aisha Al-Siddiq",
    sheepId: "S-1250",
    amount: "$150",
    date: "2024-01-14",
    videoStatus: "rejected",
    deliveryStatus: "not_started",
    assignedWorker: "Unassigned",
    region: "Region C"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "verified":
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "pending":
    case "not_started":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "rejected":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const Donations = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Donations</h1>
            <p className="text-muted-foreground">
              Manage all sheep donations and their status
            </p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary/90">
            Add New Donation
          </Button>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>All Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor Name</TableHead>
                    <TableHead>Sheep ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Video Status</TableHead>
                    <TableHead>Delivery Status</TableHead>
                    <TableHead>Assigned Worker</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.donorName}</TableCell>
                      <TableCell className="font-mono">{donation.sheepId}</TableCell>
                      <TableCell className="font-semibold text-primary">{donation.amount}</TableCell>
                      <TableCell>{donation.date}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(donation.videoStatus)}>
                          {donation.videoStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(donation.deliveryStatus)}>
                          {donation.deliveryStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>{donation.assignedWorker}</TableCell>
                      <TableCell>{donation.region}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <UserPlus className="w-4 h-4" />
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

export default Donations;