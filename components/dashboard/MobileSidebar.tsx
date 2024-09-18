"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "../blocks/Logo"
import { adminSidebarLinks } from "@/config/menu-config"
import { usePathname } from "next/navigation"
import { useState } from "react"

const MobileSidebar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <Logo />
       
        {adminSidebarLinks.map (({label, icon, url}, i) => {
            const Icon = icon;
            return (
                <Link
            key ={i}
            href = {url}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathName ===  url ? "bg-muted" : null}`}
            onClick={() => setIsOpen(false)}
              >
            {Icon && <Icon className="h-4 w-4"/> }    
            {label}
          </Link>
                    );
          })}  

      </nav>
      <div className="mt-auto">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our
              support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </SheetContent>
  </Sheet>
  )
}

export default MobileSidebar