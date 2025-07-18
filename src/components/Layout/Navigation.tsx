import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  DollarSign,
  Users,
  UserCheck,
  Shirt,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import background from "../../../public/assets/mosaics.png";
import { GiSheep } from "react-icons/gi";

const handleLogout = () => {
  console.log("Logged out");
};

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
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-64 bg-card shadow-elegant border-r border-border flex flex-col">
      <div className="p-6 relative z-50 flex-1 flex flex-col">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <GiSheep className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Qurbani App</h1>
            <p className="text-sm text-muted-foreground">Dashboard</p>
          </div>
        </div>

        <ul className="space-y-2 flex-1">
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

        {/* Logout button pinned at the bottom */}
        <div className="pt-4 mt-auto">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-red-500 hover:text-white hover:bg-gradient-to-r from-red-500 to-pink-500"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-1 opacity-20 pointer-events-none"
        src={background}
        alt="Background"
      />
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-transparent to-white to-90% pointer-events-none" />
    </nav>
  );
};
