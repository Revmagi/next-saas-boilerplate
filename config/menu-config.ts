import {House, CreditCard, Users } from "lucide-react";

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

]