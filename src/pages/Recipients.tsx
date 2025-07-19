"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/Layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Edit, Check, RefreshCw } from "lucide-react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import axios from "axios"

const initialRecipients = [
  {
    id: "R-001",
    name: "Ali Ben Youssef",
    contact: "+213 123 456 789",
    region: "Algiers",
    assignedWorker: "Said Karim",
    deliveryStatus: "pending",
    date: "2024-01-17",
  },
  {
    id: "R-002",
    name: "Meriem Louisa",
    contact: "+213 987 654 321",
    region: "Oran",
    assignedWorker: "Unassigned",
    deliveryStatus: "not_started",
    date: "2024-01-17",
  },
]

const deliveryStatuses = ["completed", "pending", "not_started"]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200"
    case "pending":
    case "not_started":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function Recipients() {
  const [recipients, setRecipients] = useState(initialRecipients)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [editedFields, setEditedFields] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  // Backend Integration: Fetch recipients on component mount
  useEffect(() => {
    // axios.get("/api/recipients")
    //   .then((res) => setRecipients(res.data))
    //   .catch((err) => console.error("Failed to fetch recipients:", err));
  }, [])

  const fetchRecipients = async () => {
    setRefreshing(true)
    try {
      // const response = await axios.get("/api/recipients")
      // setRecipients(response.data)
    } catch (error) {
      console.error("Failed to fetch recipients:", error)
    } finally {
      setRefreshing(false)
    }
  }

  const startEdit = (recipient: any) => {
    setEditingId(recipient.id)
    setEditedFields({ ...recipient })
  }

  const saveEdit = async (id: string) => {
    setLoading(true)
    try {
      setRecipients((prev) => prev.map((r) => (r.id === id ? { ...r, ...editedFields } : r)))
      setEditingId(null)
      setEditedFields({})

      // axios.put(`/api/recipients/${id}`, editedFields)
      //   .then(() => console.log("Recipient updated"))
      //   .catch((err) => console.error("Failed to update recipient:", err));
    } catch (error) {
      console.error("Failed to update recipient:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setEditedFields((prev) => ({ ...prev, [field]: value }))
  }

  const handleDelete = async (id: string) => {
    setLoading(true)
    try {
      setRecipients((prev) => prev.filter((r) => r.id !== id))
      setConfirmDelete(null)

      // axios.delete(`/api/recipients/${id}`)
      //   .then(() => console.log("Recipient deleted"))
      //   .catch((err) => console.error("Failed to delete recipient:", err));
    } catch (error) {
      console.error("Failed to delete recipient:", error)
    } finally {
      setLoading(false)
    }
  }

  // Backend Integration: Bulk status update
  const updateBulkStatus = async (ids: string[], status: string) => {
    setLoading(true)
    try {
      // await axios.patch("/api/recipients/bulk-update", {
      //   ids,
      //   updates: { deliveryStatus: status }
      // })

      setRecipients((prev) =>
        prev.map((recipient) => (ids.includes(recipient.id) ? { ...recipient, deliveryStatus: status } : recipient)),
      )
    } catch (error) {
      console.error("Failed to bulk update:", error)
    } finally {
      setLoading(false)
    }
  }

  // Backend Integration: Export recipients
  const exportRecipients = async () => {
    try {
      // const response = await axios.get("/api/recipients/export", {
      //   responseType: 'blob'
      // })
      // const url = window.URL.createObjectURL(new Blob([response.data]))
      // const link = document.createElement('a')
      // link.href = url
      // link.setAttribute('download', `recipients-${new Date().toISOString().split('T')[0]}.csv`)
      // document.body.appendChild(link)
      // link.click()
      // link.remove()

      console.log("Export functionality ready")
    } catch (error) {
      console.error("Failed to export:", error)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Recipients</h1>
            <p className="text-muted-foreground">Manage all recipients of donations</p>
          </div>
          <Button variant="outline" onClick={fetchRecipients} disabled={refreshing}>
            <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Recipients ({recipients.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Assigned Worker</TableHead>
                    <TableHead>Delivery Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recipients.map((recipient) => {
                    const isEditing = editingId === recipient.id
                    return (
                      <TableRow key={recipient.id}>
                        <TableCell>
                          {isEditing ? (
                            <Input
                              value={editedFields.name}
                              onChange={(e) => handleChange("name", e.target.value)}
                              disabled={loading}
                            />
                          ) : (
                            recipient.name
                          )}
                        </TableCell>
                        <TableCell>
                          {isEditing ? (
                            <Input
                              value={editedFields.contact}
                              onChange={(e) => handleChange("contact", e.target.value)}
                              disabled={loading}
                            />
                          ) : (
                            recipient.contact
                          )}
                        </TableCell>
                        <TableCell>
                          {isEditing ? (
                            <Input
                              value={editedFields.region}
                              onChange={(e) => handleChange("region", e.target.value)}
                              disabled={loading}
                            />
                          ) : (
                            recipient.region
                          )}
                        </TableCell>
                        <TableCell>
                          {isEditing ? (
                            <Input
                              value={editedFields.assignedWorker}
                              onChange={(e) => handleChange("assignedWorker", e.target.value)}
                              disabled={loading}
                            />
                          ) : (
                            recipient.assignedWorker
                          )}
                        </TableCell>
                        <TableCell>
                          {isEditing ? (
                            <Select
                              value={editedFields.deliveryStatus}
                              onValueChange={(val) => handleChange("deliveryStatus", val)}
                              disabled={loading}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
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
                            <Badge className={getStatusColor(recipient.deliveryStatus)}>
                              {recipient.deliveryStatus}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {isEditing ? (
                            <Input
                              type="date"
                              value={editedFields.date}
                              onChange={(e) => handleChange("date", e.target.value)}
                              disabled={loading}
                            />
                          ) : (
                            recipient.date
                          )}
                        </TableCell>
                        <TableCell className="flex space-x-2">
                          {isEditing ? (
                            <Button size="sm" onClick={() => saveEdit(recipient.id)} disabled={loading}>
                              <Check className="w-4 h-4" />
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => startEdit(recipient)} disabled={loading}>
                              <Edit className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => setConfirmDelete(recipient.id)}
                            disabled={loading}
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
          <p>This recipient will be permanently deleted. This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDelete(null)} disabled={loading}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => confirmDelete && handleDelete(confirmDelete)}
              disabled={loading}
            >
              Confirm Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
