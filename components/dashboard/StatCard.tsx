import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { DollarSign, User, CreditCard } from "lucide-react"

export enum StatTypes {
    REVENUE = "revenue",
    USERS = "users",
    SUBSCRIBERS = "subscribers"
  }

const icons = {
    revenue: DollarSign,
    users: User,
    subscribers: CreditCard,
};  

type StatCardProps = {
    title: string;
    value: number | string;
    type: StatTypes.REVENUE | StatTypes.USERS | StatTypes.SUBSCRIBERS;
};

const StatCard = ({ title, value, type }:StatCardProps) => {
    const Icon = icons[type];
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {Icon && <Icon className="h-4 w-4 text-muted-foreground"/>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

export default StatCard