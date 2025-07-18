import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { StatsGrid } from "@/components/Dashboard/StatsGrid";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { DonationChart } from "@/components/Dashboard/DonationChart";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your sheep donation program.
          </p>
        </div>

        <StatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DonationChart />
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;