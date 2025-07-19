// import axios from "axios"
import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/Layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, Building, CheckCircle, Clock, Edit, Check, Trash2 } from 'lucide-react'

const initialSkins = [
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
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "used":
      return "bg-green-100 text-green-800 border-green-200"
    case "processed":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "collected":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const Skins = () => {
  const [skins, setSkins] = useState(initialSkins)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<any>({})
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)

  // Fetch skins on mount (when backend is ready)
  useEffect(() => {
    // axios.get("/api/skins")
    //   .then(res => setSkins(res.data))
    //   .catch(err => console.error("Failed to fetch skins:", err))
  }, [])

  const handleEditToggle = async (id: string) => {
    if (editingId === id) {
      setSkins((prev) =>
        prev.map((skin) =>
          skin.id === id ? { ...skin, ...editData } : skin
        )
      )
      setEditingId(null)

      // await axios.put(`/api/skins/${id}`, editData)
    } else {
      const skin = skins.find((s) => s.id === id)
      setEditData({ ...skin })
      setEditingId(id)
    }
  }

  const handleChange = (field: string, value: string) => {
    setEditData((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleDelete = async () => {
    if (!confirmDeleteId) return

    setSkins((prev) => prev.filter((skin) => skin.id !== confirmDeleteId))
    // await axios.delete(`/api/skins/${confirmDeleteId}`)

    setConfirmDeleteId(null)
  }

  return (
    <DashboardLayout>
      {/* --- Header and Summary Cards --- */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Skins & Secondary Donations</h1>
            <p className="text-muted-foreground">Track how animal skins are reused for charitable purposes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Skins</p>
                  <p className="text-2xl font-bold text-primary">{skins.length}</p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Processed</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {skins.filter((s) => s.status === "processed").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Collected</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {skins.filter((s) => s.status === "collected").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Used</p>
                  <p className="text-2xl font-bold text-green-600">
                    {skins.filter((s) => s.status === "used").length}
                  </p>
                </div>
                <Building className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --- Table --- */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Skin Tracking Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Skin ID</TableHead>
                  <TableHead>Sheep ID</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Charity</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Worker</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skins.map((skin) => {
                  const isEditing = editingId === skin.id
                  return (
                    <TableRow key={skin.id}>
                      <TableCell>{skin.id}</TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input value={editData.sheepId} onChange={(e) => handleChange("sheepId", e.target.value)} />
                        ) : (
                          skin.sheepId
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input value={editData.donorName} onChange={(e) => handleChange("donorName", e.target.value)} />
                        ) : (
                          skin.donorName
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input type="date" value={editData.collectionDate} onChange={(e) => handleChange("collectionDate", e.target.value)} />
                        ) : (
                          skin.collectionDate
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Select value={editData.status} onValueChange={(value) => handleChange("status", value)}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="processed">Processed</SelectItem>
                              <SelectItem value="collected">Collected</SelectItem>
                              <SelectItem value="used">Used</SelectItem>
                            </SelectContent>
                          </Select>
                        ) : (
                          <Badge className={getStatusColor(skin.status)}>{skin.status}</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input value={editData.charity} onChange={(e) => handleChange("charity", e.target.value)} />
                        ) : (
                          skin.charity
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input value={editData.impact} onChange={(e) => handleChange("impact", e.target.value)} />
                        ) : (
                          skin.impact
                        )}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <Input value={editData.worker} onChange={(e) => handleChange("worker", e.target.value)} />
                        ) : (
                          skin.worker
                        )}
                      </TableCell>
                      <TableCell className="flex space-x-2">
                        {isEditing ? (
                          <Button size="sm" onClick={() => handleEditToggle(skin.id)}>
                            <Check className="w-4 h-4" />
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" onClick={() => handleEditToggle(skin.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                        )}
                        <Button variant="destructive" size="sm" onClick={() => setConfirmDeleteId(skin.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* --- Delete Confirmation Dialog --- */}
      <Dialog open={!!confirmDeleteId} onOpenChange={() => setConfirmDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this skin record?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}

export default Skins