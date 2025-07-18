import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { StatsGrid } from "@/components/Dashboard/StatsGrid";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { DonationChart } from "@/components/Dashboard/DonationChart";

const user = "Nayla";

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
                Welcome back <span className="italic">{user}</span> ! Check Qurbani App stats Overview !
              </p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DonationChart />
              <RecentActivity />
            </div>
              <StatsGrid />

          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default Dashboard;
