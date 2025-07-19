import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Donations from "./pages/Donations";
import Workers from "./pages/Workers";
import Recipients from "./pages/Recipients";
import Skins from "./pages/Skins";
import Reports from "./pages/Reports";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import background from "../public/assets/BG.png";
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
        <img
            className="absolute top-0 w-full h-full object-cover z-2 opacity-20 pointer-events-none"
            src={background}
            alt="Background"
          />
          <div className="absolute top-0 w-full h-full z-2 bg-gradient-to-b from-white via-transparent via-20% pointer-events-none" />
    <div className="relative z-200">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Index />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/skins" element={<Skins />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </div>
  </QueryClientProvider>
);

export default App;
