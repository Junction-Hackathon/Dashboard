import { MetricCard } from "./MetricCard"
import { useNavigate } from "react-router-dom"
import {
  DollarSign,
  Heart,
  Users,
  Shirt,
  CheckCircle,
} from "lucide-react"
import { AnimatedNumber } from "../ui/animatedNumber"

import { useEffect, useState } from "react"
import axios from "axios"

export const StatsGrid = () => {
  const stats = [
    {
      title: "Total Donations",
      value: 1247,
      icon: <DollarSign className="w-4 h-4" />,
      change: { value: 12, type: "increase" as const },
      path: "/donations",
      key: "donations", 
    },
    {
      title: "Recipients Helped",
      value: 3421,
      icon: <Users className="w-4 h-4" />,
      change: { value: 15, type: "increase" as const },
      path: "/recipients",
      key: "recipients",
    },
    {
      title: "Skins Donated",
      value: 892,
      icon: <Shirt className="w-4 h-4" />,
      change: { value: 22, type: "increase" as const },
      path: "/skins",
      key: "skins",
    },
    {
      title: "Active Workers",
      value: 47,
      icon: <CheckCircle className="w-4 h-4" />,
      change: { value: 2, type: "increase" as const },
      path: "/workers",
      key: "workers",
    },
    {
      title: "Total of Feedbacks",
      value: 47,
      icon: <Heart className="w-4 h-4" />,
      change: { value: 10, type: "increase" as const },
      path: "/feedback",
      key: "feedbacks",
    },
  ]

  const navigate = useNavigate()

  // Uncomment heeeeere to fetch from backend
  /*
  const [liveStats, setLiveStats] = useState(stats)

  useEffect(() => {
    axios.get("/api/stats").then((res) => {
      const data = res.data // should be like { donations: 1300, recipients: 3500, ... }

      const updatedStats = stats.map(stat => ({
        ...stat,
        value: data[stat.key] ?? stat.value,
      }))

      setLiveStats(updatedStats)
    }).catch(err => {
      console.error("Failed to fetch stats", err)
    })
  }, [])
  */

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {(stats).map((stat, index) => (
        <button
          key={stat.title}
          onClick={() => navigate(stat.path)}
          className="text-left"
        >
          <MetricCard
            title={stat.title}
            value={
              <AnimatedNumber
                target={stat.value}
                duration={1000}
                className="text-2xl font-bold"
              />
            }
            icon={stat.icon}
            change={stat.change}
            className="rounded-3xl"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        </button>
      ))}
    </div>
  )
}
