import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { StatsGrid } from "@/components/Dashboard/StatsGrid";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { DonationChart } from "@/components/Dashboard/DonationChart";
import background from "../../public/assets/BG.png";

const user = "Test";
const Dashboard = () => {
  return (
    <div>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-2 opacity-20 pointer-events-none"
        src={background}
        alt="Background"
      />
      <div className="absolute top-0 left-0 w-full h-full z-2 bg-gradient-to-b from-transparent to-white to-90% pointer-events-none" />
      <div className="relative z-0">
        <DashboardLayout>
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Dashboard Overview
              </h1>
              <p className="text-muted-foreground">
                Welcome back {user} ! Check Qurbani App stats Overview !
              </p>
            </div>

            <StatsGrid />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DonationChart />
              <RecentActivity />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default Dashboard;
