import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "@mui/x-charts/LineChart";

const data = [
  { month: "Jan", donations: 65 },
  { month: "Feb", donations: 89 },
  { month: "Mar", donations: 123 },
  { month: "Apr", donations: 156 },
  { month: "May", donations: 178 },
  { month: "Jun", donations: 198 },
  { month: "Jul", donations: 234 },
  { month: "Aug", donations: 267 },
  { month: "Sep", donations: 298 },
  { month: "Oct", donations: 321 },
  { month: "Nov", donations: 356 },
  { month: "Dec", donations: 389 },
];

const months = data.map((d) => d.month);
const donations = data.map((d) => d.donations);

export const DonationChart = () => {
  const maxDonations = Math.max(...data.map((d) => d.donations));

  return (
    <div className="">
      <Card className="shadow-card  rounded-3xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Donations Over Time Graph
          </CardTitle>
        </CardHeader>
        <LineChart
          className="bg-white shadow-card"
          xAxis={[{ scaleType: "band", data: months }]}
          series={[
            {
              data: donations,
              area: true,
              label: "Donations",
              color: "#4ade80",
            },
          ]}
          height={300}
        />
      </Card>
    </div>
  );
};
