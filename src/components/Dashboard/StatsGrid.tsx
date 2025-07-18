import { MetricCard } from "./MetricCard";
import { 
  DollarSign, 
  Video, 
  Truck, 
  Users, 
  Shirt,
  CheckCircle
} from "lucide-react";

export const StatsGrid = () => {
  const stats = [
    {
      title: "Total Donations",
      value: "1,247",
      icon: <DollarSign className="w-4 h-4" />,
      change: { value: 12, type: "increase" as const }
    },
    {
      title: "Verified Videos",
      value: "1,156",
      icon: <Video className="w-4 h-4" />,
      change: { value: 8, type: "increase" as const }
    },
    {
      title: "Pending Deliveries",
      value: "91",
      icon: <Truck className="w-4 h-4" />,
      change: { value: 3, type: "decrease" as const }
    },
    {
      title: "Recipients Helped",
      value: "3,421",
      icon: <Users className="w-4 h-4" />,
      change: { value: 15, type: "increase" as const }
    },
    {
      title: "Skins Donated",
      value: "892",
      icon: <Shirt className="w-4 h-4" />,
      change: { value: 22, type: "increase" as const }
    },
    {
      title: "Active Workers",
      value: "47",
      icon: <CheckCircle className="w-4 h-4" />,
      change: { value: 2, type: "increase" as const }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <MetricCard 
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          className={`animate-fade-in`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
};