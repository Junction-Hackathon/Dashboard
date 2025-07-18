import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  DollarSign, 
  Video, 
  Truck, 
  Users, 
  UserCheck,
  Shirt,
  BarChart3,
  MessageSquare,
  Settings,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Donations",
    href: "/donations",
    icon: DollarSign,
  },
  {
    name: "Video Verifications",
    href: "/videos",
    icon: Video,
  },
  {
    name: "Deliveries",
    href: "/deliveries",
    icon: Truck,
  },
  {
    name: "Workers",
    href: "/workers",
    icon: Users,
  },
  {
    name: "Recipients",
    href: "/recipients",
    icon: UserCheck,
  },
  {
    name: "Skins & Donations",
    href: "/skins",
    icon: Shirt,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    name: "Feedback",
    href: "/feedback",
    icon: MessageSquare,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-64 bg-card shadow-elegant border-r border-border">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Sheep Donations</h1>
            <p className="text-sm text-muted-foreground">Dashboard</p>
          </div>
        </div>
        
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-gradient-primary text-primary-foreground shadow-card"
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "w-5 h-5 transition-all duration-200",
                      isActive 
                        ? "text-primary-foreground" 
                        : "text-muted-foreground group-hover:text-foreground"
                    )} 
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};