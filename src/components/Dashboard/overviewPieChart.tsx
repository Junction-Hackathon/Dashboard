import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "@mui/x-charts/BarChart"
// import { useEffect, useState } from "react"
// import axios from "axios"

const donationData = [
  { month: "Jan", count: 65, amount: 85000 },
  { month: "Feb", count: 89, amount: 102300 },
  { month: "Mar", count: 123, amount: 142000 },
  { month: "Apr", count: 156, amount: 183000 },
  { month: "May", count: 178, amount: 210500 },
  { month: "Jun", count: 198, amount: 236700 },
  { month: "Jul", count: 234, amount: 267800 },
  { month: "Aug", count: 267, amount: 301000 },
  { month: "Sep", count: 298, amount: 334200 },
  { month: "Oct", count: 321, amount: 361400 },
  { month: "Nov", count: 356, amount: 402300 },
  { month: "Dec", count: 389, amount: 432800 },
]

// const [donationData, setDonationData] = useState([])

// useEffect(() => {
//   axios.get("/api/donations/monthly")
//     .then((res) => {
//       setDonationData(res.data)
//     })
//     .catch((err) => console.error("Failed to fetch donation data", err))
// }, [])

const months = donationData.map((d) => d.month)
const donationCounts = donationData.map((d) => d.count)
const donationAmounts = donationData.map((d) => d.amount)

export const DashBoardBarChart = () => {
  return (
    <div>
      <Card className="shadow-card rounded-3xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Monthly Donations (Count & Amount)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            height={300}
            xAxis={[{ data: months, scaleType: "band" }]}
            yAxis={[{ label: "Value", width: 70 }]}
            series={[
              {
                data: donationCounts,
                label: "Donations Count",
                id: "donationCount",
                stack: "total",
                color: "#3b82f6", // blue
              },
              {
                data: donationAmounts,
                label: "Total Amount (DA)",
                id: "donationAmount",
                stack: "total",
                color: "#22c55e", // green
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
