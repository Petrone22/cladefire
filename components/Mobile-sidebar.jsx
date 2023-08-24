"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Flame, LayoutDashboard, Settings, Swords } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";

import { Menu } from "lucide-react";

const monserrat = Montserrat({ weight: "800", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Available Tournaments",
    icon: Flame,
    href: "/tournaments",
    color: "text-violet-500",
  },
  {
    label: "Your Games",
    icon: Swords,
    href: "/games",
    color: "text-orange-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "white",
  },
];

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="space-y-4 py-4 flex flex-col h-full text-white ">
          <div className="px-4 py-2 flex-1">
            <Link href="/" className="flex mt-4 items-center pl-3 mb-14">
              <div className="relative h-8 w-8 mr-2  object-cover">
                {/* <Image fill alt="logo" src="/logo.png" /> */}
                <Swords className={cn("h-full w-full mr-3 ")} />
              </div>
              <h1 className={cn("text-2xl  font-black", monserrat.className)}>
                CLADEFIRE
              </h1>
            </Link>
            <div className="space-y-1 h-full text-white">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-secondary rounded-lg transition",
                    pathname === route.href
                      ? "text-white bg-secondary"
                      : "text-zinc-400"
                  )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-8 w-6 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
