import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, MapPin, Star, Plus, Edit, Eye } from "lucide-react";

const recipients = [
  {
    id: "R-001",
    name: "Al-Zahra Family",
    region: "Region A - North",
    householdSize: 6,
    priority: "high",
    donationsReceived: 3,
    lastDonation: "2024-01-15",
    contactPerson: "Um Ahmad",
    phone: "+966 50 111 2233",
    address: "123 Al-Noor Street, District 1",
    notes: "Widow with 5 children",
  },
  {
    id: "R-002",
    name: "Widow Um Ahmad",
    region: "Region B - East",
    householdSize: 4,
    priority: "high",
    donationsReceived: 2,
    lastDonation: "2024-01-12",
    contactPerson: "Um Ahmad",
    phone: "+966 50 222 3344",
    address: "456 Al-Rahma Avenue, District 2",
    notes: "Single mother with 3 children",
  },
  {
    id: "R-003",
    name: "Al-Khattab Family",
    region: "Region A - North",
    householdSize: 8,
    priority: "medium",
    donationsReceived: 4,
    lastDonation: "2024-01-10",
    contactPerson: "Abu Omar",
    phone: "+966 50 333 4455",
    address: "789 Al-Salam Road, District 3",
    notes: "Large family, father unemployed",
  },
  {
    id: "R-004",
    name: "Elderly Couple",
    region: "Region C - South",
    householdSize: 2,
    priority: "medium",
    donationsReceived: 1,
    lastDonation: "2024-01-08",
    contactPerson: "Abu Hassan",
    phone: "+966 50 444 5566",
    address: "321 Al-Huda Street, District 4",
    notes: "Elderly couple, limited mobility",
  },
  {
    id: "R-005",
    name: "Al-Mansouri Family",
    region: "Region B - East",
    householdSize: 5,
    priority: "low",
    donationsReceived: 2,
    lastDonation: "2024-01-05",
    contactPerson: "Um Khalid",
    phone: "+966 50 555 6677",
    address: "654 Al-Baraka Street, District 5",
    notes: "Recently registered",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const Recipients = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Recipients</h1>
            <p className="text-muted-foreground">
              Manage families and individuals in need
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Recipients
                  </p>
                  <p className="text-2xl font-bold text-primary">127</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    High Priority
                  </p>
                  <p className="text-2xl font-bold text-red-600">23</p>
                </div>
                <Star className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    This Month
                  </p>
                  <p className="text-2xl font-bold text-green-600">45</p>
                </div>
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Avg Household
                  </p>
                  <p className="text-2xl font-bold text-blue-600">5.2</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>All Recipients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Household Size</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Donations Received</TableHead>
                    <TableHead>Last Donation</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recipients.map((recipient) => (
                    <TableRow key={recipient.id}>
                      <TableCell className="font-medium">
                        {recipient.name}
                      </TableCell>
                      <TableCell>{recipient.region}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                          {recipient.householdSize}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={getPriorityColor(recipient.priority)}
                        >
                          {recipient.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center font-semibold">
                        {recipient.donationsReceived}
                      </TableCell>
                      <TableCell>{recipient.lastDonation}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p className="font-medium">
                            {recipient.contactPerson}
                          </p>
                          <p className="text-muted-foreground">
                            {recipient.phone}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
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

export default Recipients;
