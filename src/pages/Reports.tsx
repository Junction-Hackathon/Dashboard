import { useEffect, useState } from "react" 
import axios from "axios" 
import { DashboardLayout } from "@/components/Layout/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar, TrendingUp } from "lucide-react"
import jsPDF from "jspdf"

const dummyData = [
  { name: "Ahmad Al-Rashid", donation: "$150", region: "Region A", date: "2024-01-15" },
  { name: "Fatima Al-Zahra", donation: "$150", region: "Region B", date: "2024-01-15" },
  { name: "Omar Al-Khattab", donation: "$150", region: "Region A", date: "2024-01-14" },
]

// Uncomment below when integrating with backend API
/*
const [reportData, setReportData] = useState([])

useEffect(() => {
  axios.get('/api/reports')
    .then(response => {
      setReportData(response.data)
    })
    .catch(error => {
      console.error("Error fetching report data:", error)
    })
}, [])
*/

const generateCSV = () => {
  const header = "Name,Donation,Region,Date"
  const rows = dummyData.map(d => `${d.name},${d.donation},${d.region},${d.date}`).join("\n")
  const csvContent = `${header}\n${rows}`
  const blob = new Blob([csvContent], { type: "text/csv" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "report.csv"
  link.click()
}

const generatePDF = () => {
  const doc = new jsPDF()
  doc.setFontSize(14)
  doc.text("Donation Report", 20, 20)
  dummyData.forEach((d, i) => {
    doc.text(`${i + 1}. ${d.name} - ${d.donation} - ${d.region} - ${d.date}`, 20, 40 + i * 10)
  })
  doc.save("report.pdf")
}

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate detailed reports and export data</p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary/90" onClick={generateCSV}>
            <Download className="w-4 h-4 mr-2" />
            Export All Data
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Donations Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive donation statistics by region, date, and status
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={generatePDF}>
                  <FileText className="w-4 h-4 mr-2" />
                  Generate PDF
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={generateCSV}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Monthly Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Monthly performance metrics and trends
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={generatePDF}>
                  <FileText className="w-4 h-4 mr-2" />
                  Generate PDF
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={generateCSV}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Worker Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Individual worker statistics and performance metrics
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={generatePDF}>
                  <FileText className="w-4 h-4 mr-2" />
                  Generate PDF
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={generateCSV}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Reports
