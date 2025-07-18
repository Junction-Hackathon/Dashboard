import { MetricCard } from "./MetricCard";
import { useNavigate } from "react-router-dom";
import {
  DollarSign,
  Video,
  Heart,
  Users,
  Shirt,
  CheckCircle,
} from "lucide-react";

export const StatsGrid = () => {
  const stats = [
    {
      title: "Total Donations",
      value: "1,247",
      icon: <DollarSign className="w-4 h-4" />,
      change: { value: 12, type: "increase" as const },
      path: "/donations",
    },
    {
      title: "Recipients Helped",
      value: "3,421",
      icon: <Users className="w-4 h-4" />,
      change: { value: 15, type: "increase" as const },
      path: "/recipients",
    },
    {
      title: "Skins Donated",
      value: "892",
      icon: <Shirt className="w-4 h-4" />,
      change: { value: 22, type: "increase" as const },
      path: "/skins",
    },
    {
      title: "Active Workers",
      value: "47",
      icon: <CheckCircle className="w-4 h-4" />,
      change: { value: 2, type: "increase" as const },
      path: "/workers",
    },
    {
      title: "Total of Feedbacks",
      value: "47",
      icon: <Heart className="w-4 h-4" />,
      change: { value: 10, type: "increase" as const },
      path: "/feedback",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <button
          onClick={() => {
            navigate(stat.path);
          }}
        >
          <MetricCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            className={`animate-fade-in rounded-3xl`}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        </button>
      ))}
    </div>
  );
};
