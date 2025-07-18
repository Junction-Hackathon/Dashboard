import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: 'Jan', donations: 65 },
  { month: 'Feb', donations: 89 },
  { month: 'Mar', donations: 123 },
  { month: 'Apr', donations: 156 },
  { month: 'May', donations: 178 },
  { month: 'Jun', donations: 198 },
  { month: 'Jul', donations: 234 },
  { month: 'Aug', donations: 267 },
  { month: 'Sep', donations: 298 },
  { month: 'Oct', donations: 321 },
  { month: 'Nov', donations: 356 },
  { month: 'Dec', donations: 389 }
];

export const DonationChart = () => {
  const maxDonations = Math.max(...data.map(d => d.donations));
  
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Donations Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.month} className="flex items-center space-x-4">
              <div className="w-8 text-sm font-medium text-muted-foreground">
                {item.month}
              </div>
              <div className="flex-1 bg-secondary rounded-full h-6 relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-primary rounded-full transition-all duration-700 ease-out"
                  style={{ 
                    width: `${(item.donations / maxDonations) * 100}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              </div>
              <div className="w-12 text-sm font-semibold text-foreground text-right">
                {item.donations}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};