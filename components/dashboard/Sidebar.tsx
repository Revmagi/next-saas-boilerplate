"use client";

import Link from "next/link"
import {Home} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Logo from "../blocks/Logo"
import { adminSidebarLinks } from "@/config/menu-config"
import { usePathname } from "next/navigation"


const Sidebar = () => {
    const pathName = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Logo />
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {adminSidebarLinks.map (({label, icon, url}, i) => {
            const Icon = icon;
            return (
                <Link
            key ={i}
            href = {url}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathName ===  url ? "bg-muted" : null}`}
          >
            {Icon && <Icon className="h-4 w-4"/> } 
            {label}
          </Link>
                    );
          })}  
          
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support
              team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  )
}

export default Sidebar