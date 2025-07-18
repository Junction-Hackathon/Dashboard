import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Donations from "./pages/Donations";
import Videos from "./pages/Videos";
import Deliveries from "./pages/Deliveries";
import Workers from "./pages/Workers";
import Recipients from "./pages/Recipients";
import Skins from "./pages/Skins";
import Reports from "./pages/Reports";
import Feedback from "./pages/Feedback";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/recipients" element={<Recipients />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
