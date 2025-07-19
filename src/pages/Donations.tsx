import { useState, useEffect } from "react" 
import { DashboardLayout } from "@/components/Layout/DashboardLayout"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2, Edit, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import axios from "axios"

const initialDonations = [
  {
    id: "D-001",
    donorName: "Ahmad Al-Rashid",
    sheepId: "S-1247",
    amount: "$150",
    date: "2024-01-15",
    videoStatus: "verified",
    deliveryStatus: "pending",
    assignedWorker: "Mohammed Hassan",
    region: "Region A",
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
    region: "Region B",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "verified":
    case "completed":
      return "bg-green-100 text-green-800 border-green-200"
    case "pending":
    case "not_started":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "rejected":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const videoStatuses = ["verified", "pending", "rejected"]
const deliveryStatuses = ["completed", "pending", "not_started"]

export default function Donations() {
  const [donations, setDonations] = useState(initialDonations)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [editedFields, setEditedFields] = useState<Record<string, string>>({})

  // useEffect(() => {
  //   axios.get("/api/donations") // Replace with your backend endpoint
  //     .then((res) => setDonations(res.data))
  //     .catch((err) => console.error("Failed to fetch donations:", err));
  // }, []);

  const startEdit = (donation: any) => {
    setEditingId(donation.id)
    setEditedFields({ ...donation })
  }

  const saveEdit = (id: string) => {
    setDonations((prev) =>
      prev.map((donation) =>
        donation.id === id ? { ...donation, ...editedFields } : donation
      )
    )
    setEditingId(null)
    setEditedFields({})

    // axios.put(`/api/donations/${id}`, editedFields)
    //   .then(() => console.log("Donation updated"))
    //   .catch((err) => console.error("Failed to update donation:", err));
  }

  const handleChange = (field: string, value: string) => {
    setEditedFields((prev) => ({ ...prev, [field]: value }))
  }

  const handleDelete = (id: string) => {
    setDonations((prev) => prev.filter((d) => d.id !== id))
    setConfirmDelete(null)

    // axios.delete(`/api/donations/${id}`)
    //   .then(() => console.log("Donation deleted"))
    //   .catch((err) => console.error("Failed to delete donation:", err));
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Donations</h1>
            <p className="text-muted-foreground">Check all sheep donations and their status</p>
          </div>
        </div>

        <Card>
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
                  {donations.map((donation) => {
                    const isEditing = editingId === donation.id
                    return (
                      <TableRow key={donation.id}>
                        <TableCell>
                          {isEditing ? (
                            <Input
                              value={editedFields.donorName}
                              onChange={(e) => handleChange("donorName", e.target.value)}
                            />
                          ) : (
                            donation.donorName
                          )}
                        </TableCell>
                        <TableCell>{donation.sheepId}</TableCell>
                        <TableCell>{donation.amount}</TableCell>
                        <TableCell>{donation.date}</TableCell>

                        <TableCell>
                          {isEditing ? (
                            <Select
                              value={editedFields.videoStatus}
                              onValueChange={(val) => handleChange("videoStatus", val)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                {videoStatuses.map((status) => (
                                  <SelectItem key={status} value={status}>
                                    {status}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <Badge className={getStatusColor(donation.videoStatus)}>
                              {donation.videoStatus}
                            </Badge>
                          )}
                        </TableCell>

                        <TableCell>
                          {isEditing ? (
                            <Select
                              value={editedFields.deliveryStatus}
                              onValueChange={(val) => handleChange("deliveryStatus", val)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select delivery status" />
                              </SelectTrigger>
                              <SelectContent>
                                {deliveryStatuses.map((status) => (
                                  <SelectItem key={status} value={status}>
                                    {status}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <Badge className={getStatusColor(donation.deliveryStatus)}>
                              {donation.deliveryStatus}
                            </Badge>
                          )}
                        </TableCell>

                        <TableCell>
                          {isEditing ? (
                            <Input
                              value={editedFields.assignedWorker}
                              onChange={(e) => handleChange("assignedWorker", e.target.value)}
                            />
                          ) : (
                            donation.assignedWorker
                          )}
                        </TableCell>

                        <TableCell>
                          {isEditing ? (
                            <Input
                              value={editedFields.region}
                              onChange={(e) => handleChange("region", e.target.value)}
                            />
                          ) : (
                            donation.region
                          )}
                        </TableCell>

                        <TableCell className="flex space-x-2">
                          {isEditing ? (
                            <Button size="sm" onClick={() => saveEdit(donation.id)}>
                              <Check className="w-4 h-4" />
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => startEdit(donation)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => setConfirmDelete(donation.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!confirmDelete} onOpenChange={() => setConfirmDelete(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <p>This donation will be permanently deleted. This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDelete(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => confirmDelete && handleDelete(confirmDelete)}
            >
              Confirm Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
