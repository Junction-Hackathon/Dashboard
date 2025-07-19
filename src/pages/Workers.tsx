// import axios from "axios"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { DashboardLayout } from "@/components/Layout/DashboardLayout"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Plus, Edit, Trash2, Check } from "lucide-react"
import { MdEmail } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

const _workers: WorkerForm[] = [
  {
    id: "W-001",
    firstName: "Mohammed",
    lastName: "Hassan",
    phone: "+966 50 123 4567",
    status: "inactive",
    videos: 25,
    joinDate: "2023-06-15",
    avatar: "MH",
    email: "mohammed.hassan@example.com",
    password: "",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 border-green-200"
    case "inactive":
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const workerSchema = z.object({
  id: z.string().min(1, "Required"),
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  status: z.enum(["active", "inactive"]).default("inactive"),
  joinDate: z.string().optional(),
  videos: z.coerce.number().min(0).default(0),
})

type WorkerForm = z.infer<typeof workerSchema> & {
  avatar: string
}

const Workers = () => {
  const [workers, setWorkers] = useState<WorkerForm[]>([..._workers])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkerForm>({
    resolver: zodResolver(workerSchema),
    defaultValues: {
      status: "inactive",
      joinDate: new Date().toISOString().split("T")[0],
      videos: 0,
      password: "",
    },
  })

  // Fetch workers on mount (when backend is ready)
  useEffect(() => {
    // axios.get("/api/workers")
    //   .then(res => setWorkers(res.data))
    //   .catch(err => console.error("Failed to fetch workers:", err))
  }, [])

  const onSubmit = async (data: WorkerForm) => {
    const avatar =
      (data.firstName?.[0] || "").toUpperCase() +
      (data.lastName?.[0] || "").toUpperCase()

    const newWorker = {
      ...data,
      avatar,
    }

    setWorkers((prev) => [...prev, newWorker])
    reset()

    // await axios.post("/api/workers", newWorker)
  }

  const handleUpdate = async (id: string, field: keyof WorkerForm, value: any) => {
    setWorkers((prev) =>
      prev.map((worker) =>
        worker.id === id ? { ...worker, [field]: value } : worker
      )
    )

    // await axios.patch(`/api/workers/${id}`, { [field]: value })
  }

  const handleDelete = async () => {
    setWorkers((prev) => prev.filter((w) => w.id !== deleteId))
    // await axios.delete(`/api/workers/${deleteId}`)
    setDeleteId(null)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Workers / الذباح</h1>
            <p className="text-muted-foreground">Manage your employees and track their performance</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Worker
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md w-full sm:max-w-lg p-6 rounded-xl shadow-lg space-y-6">
              <div className="text-center space-y-1">
                <div className="text-2xl font-semibold tracking-tight">Add New Worker</div>
                <p className="text-sm text-muted-foreground">Fill in the details to create a worker profile.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="id">Worker ID</Label>
                    <Input id="id" {...register("id")} />
                    {errors.id && <p className="text-xs text-red-500">{errors.id.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" {...register("phone")} />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" {...register("firstName")} />
                    {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" {...register("lastName")} />
                    {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" {...register("email")} />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" {...register("password")} />
                    {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-tr from-emerald-500 to-green-600 hover:brightness-110 text-white font-semibold"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map((worker) => {
            const isEditing = editingId === worker.id

            return (
              <Card key={worker.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
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
                        {isEditing ? (
                          <>
                            <Input
                              className="mb-1"
                              value={worker.firstName}
                              onChange={(e) => handleUpdate(worker.id, "firstName", e.target.value)}
                            />
                            <Input
                              value={worker.lastName}
                              onChange={(e) => handleUpdate(worker.id, "lastName", e.target.value)}
                            />
                          </>
                        ) : (
                          <>
                            <CardTitle className="text-lg">
                              {worker.firstName} {worker.lastName}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">ID: {worker.id}</p>
                          </>
                        )}
                      </div>
                    </div>
                    {isEditing ? (
                      <Select
                        defaultValue={worker.status}
                        onValueChange={(value) => handleUpdate(worker.id, "status", value)}
                      >
                        <SelectTrigger className="w-[100px] text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge variant="secondary" className={getStatusColor(worker.status)}>
                        {worker.status}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      {isEditing ? (
                        <Input
                          value={worker.phone}
                          onChange={(e) => handleUpdate(worker.id, "phone", e.target.value)}
                        />
                      ) : (
                        <span>{worker.phone}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MdEmail className="w-4 h-4 text-muted-foreground" />
                      {isEditing ? (
                        <Input
                          value={worker.email}
                          onChange={(e) => handleUpdate(worker.id, "email", e.target.value)}
                        />
                      ) : (
                        <span>{worker.email}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-3 border-t">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{worker.videos}</p>
                        <p className="text-xs text-muted-foreground">Videos</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">--</p>
                        <p className="text-xs text-muted-foreground">Deliveries</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Joined: {worker.joinDate}</p>

                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                          if (isEditing) setEditingId(null)
                          else setEditingId(worker.id)
                        }}
                      >
                        {isEditing ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Save
                          </>
                        ) : (
                          <>
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </>
                        )}
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="flex-1"
                            onClick={() => setDeleteId(worker.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Delete Worker</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to remove this worker?
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setDeleteId(null)}>
                              Cancel
                            </Button>
                            <Button variant="destructive" onClick={handleDelete}>
                              Confirm
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Workers
