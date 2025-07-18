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
import { Package, Building, CheckCircle, Clock, Plus } from "lucide-react";

const skins = [
  {
    id: "SK-001",
    sheepId: "S-1247",
    donorName: "Ahmad Al-Rashid",
    collectionDate: "2024-01-15",
    status: "processed",
    charity: "Al-Khair Foundation",
    impact: "40 school bags created",
    worker: "Mohammed Hassan",
  },
  {
    id: "SK-002",
    sheepId: "S-1248",
    donorName: "Fatima Al-Zahra",
    collectionDate: "2024-01-15",
    status: "collected",
    charity: "Pending Assignment",
    impact: "Pending",
    worker: "Ali Al-Mansouri",
  },
  {
    id: "SK-003",
    sheepId: "S-1249",
    donorName: "Omar Al-Khattab",
    collectionDate: "2024-01-14",
    status: "used",
    charity: "Hope Children Center",
    impact: "35 shoe pairs made",
    worker: "Yusuf Al-Sharif",
  },
  {
    id: "SK-004",
    sheepId: "S-1250",
    donorName: "Aisha Al-Siddiq",
    collectionDate: "2024-01-14",
    status: "collected",
    charity: "Pending Assignment",
    impact: "Pending",
    worker: "Hassan Al-Bakri",
  },
  {
    id: "SK-005",
    sheepId: "S-1251",
    donorName: "Khalid Al-Mansouri",
    collectionDate: "2024-01-13",
    status: "processed",
    charity: "Women's Support Center",
    impact: "25 leather goods",
    worker: "Omar Al-Qureshi",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "used":
      return "bg-green-100 text-green-800 border-green-200";
    case "processed":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "collected":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const Skins = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Skins & Secondary Donations
            </h1>
            <p className="text-muted-foreground">
              Track how animal skins are reused for charitable purposes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Skins
                  </p>
                  <p className="text-2xl font-bold text-primary">892</p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Processed
                  </p>
                  <p className="text-2xl font-bold text-blue-600">567</p>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Pending
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">123</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Partner Charities
                  </p>
                  <p className="text-2xl font-bold text-green-600">12</p>
                </div>
                <Building className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Skin Tracking Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Skin ID</TableHead>
                    <TableHead>Sheep ID</TableHead>
                    <TableHead>Original Donor</TableHead>
                    <TableHead>Collection Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned Charity</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead>Collected By</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {skins.map((skin) => (
                    <TableRow key={skin.id}>
                      <TableCell className="font-mono">{skin.id}</TableCell>
                      <TableCell className="font-mono">
                        {skin.sheepId}
                      </TableCell>
                      <TableCell className="font-medium">
                        {skin.donorName}
                      </TableCell>
                      <TableCell>{skin.collectionDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={getStatusColor(skin.status)}
                        >
                          {skin.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{skin.charity}</TableCell>
                      <TableCell className="text-green-600 font-medium">
                        {skin.impact}
                      </TableCell>
                      <TableCell>{skin.worker}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Impact Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <p className="text-3xl font-bold text-green-600">1,200+</p>
                <p className="text-sm text-green-700">Items Created</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">15</p>
                <p className="text-sm text-blue-700">Partner Organizations</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">5,000+</p>
                <p className="text-sm text-purple-700">People Helped</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Skins;
