import {House, CreditCard, Users, Settings } from "lucide-react";

export const adminSidebarLinks = [
    {
        label: "Dashboard",
        icon: House,
        url: "/admin"
    },
    {
        label: "Subscription",
        icon: CreditCard,
        url: "/admin/subscribers"
    },
    {
        label: "Users",
        icon: Users,
        url: "/admin/users"
    },

];

export const userSidebarLinks = [
    {
        label: "Dashboard",
        icon: House,
        url: "/dashboard"
    },
    {
        label: "Subscription",
        icon: CreditCard,
        url: "/dashboard/subscription"
    },
    {
        label: "Settings",
        icon: Settings,
        url: "/dashboard/settings"
    },

];