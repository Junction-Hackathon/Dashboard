import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="flex">
        <Navigation />
        <main className="flex-1 ml-64 p-8">{children}</main>
      </div>
    </div>
  );
};
