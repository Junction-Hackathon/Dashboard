import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useLocation } from "react-router-dom"

interface MetricCardProps {
  title: string
  value: ReactNode  
  icon: ReactNode
  change?: {
    value: number
    type: "increase" | "decrease"
  }
  className?: string
  style?: React.CSSProperties
}

export const MetricCard = ({
  title,
  value,
  icon,
  change,
  className,
  style,
}: MetricCardProps) => {
  const location = useLocation()

  return (
    <Card
      className={cn(
        "shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in",
        className
      )}
      style={style}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p
            className={cn(
              "text-xs flex items-center mt-1",
              change.type === "increase" ? "text-green-600" : "text-red-600"
            )}
          >
            <span className="mr-1">
              {change.type === "increase" ? "↗" : "↘"}
            </span>
            {change.value}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}
