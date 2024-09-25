"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "../blocks/Logo"
import { adminSidebarLinks, userSidebarLinks } from "@/config/menu-config"
import { usePathname } from "next/navigation"
import { useState } from "react"

type MobileSideBarProps = {
  isAdminMode?: boolean;
};

const MobileSidebar = ({ isAdminMode}: MobileSideBarProps) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = isAdminMode ? adminSidebarLinks : userSidebarLinks

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
       
        {links.map (({label, icon, url}, i) => {
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

    </SheetContent>
  </Sheet>
  )
}

export default MobileSidebar