import { DashboardLayout } from "@/components/Layout/DashboardLayout"
import { StatsGrid } from "@/components/Dashboard/StatsGrid"
import { RecentActivity } from "@/components/Dashboard/RecentActivity"
import { DonationChart } from "@/components/Dashboard/DonationChart"
import { DashBoardBarChart } from "@/components/Dashboard/overviewPieChart" 

const user = "Nayla"

const Dashboard = () => {
  return (
    <div>
      <div className="relative z-0">
        <DashboardLayout>
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Dashboard Overview
              </h1>
              <p className="text-muted-foreground">
                Welcome back <span className="italic">{user}</span>! Check Qurbani App stats Overview!
              </p>
            </div>

            <StatsGrid />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <DonationChart />
              </div>
              <div>
                <DashBoardBarChart />
              </div>
            </div>

            <RecentActivity />
          </div>
        </DashboardLayout>
      </div>
    </div>
  )
}

export default Dashboard
