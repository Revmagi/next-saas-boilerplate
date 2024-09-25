"use client";

import Link from "next/link"
import Logo from "../blocks/Logo"
import { adminSidebarLinks, userSidebarLinks } from "@/config/menu-config"
import { usePathname } from "next/navigation"

type SideBarProps = {
  isAdminMode?: boolean;
};

const Sidebar = ({ isAdminMode}: SideBarProps) => {
    const pathName = usePathname();
    const links = isAdminMode ? adminSidebarLinks : userSidebarLinks

  return (
    <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Logo />
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {links.map (({label, icon, url}, i) => {
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
   </div>
  </div>
  )
}

export default Sidebar