"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Flame, LayoutDashboard, Settings, Swords } from "lucide-react";
import { usePathname } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { mouseHovered, mouseUnhovered } from "@/lib/slices/sideBarHover";

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
const Sidebar = () => {
  const pathname = usePathname();
  const hoverState = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();

  return (
    <div
      className="NORMAL-SIDEBAR transition space-y-4 py-4 flex flex-col h-full text-white overflow-hidden"
      onMouseEnter={() => {
        dispatch(mouseHovered());
      }}
      onMouseLeave={() => {
        dispatch(mouseUnhovered());
      }}
      style={{
        width: hoverState ? "18rem" : "6rem",
      }}
    >
      <div className="px-4 py-2 flex-1">
        <Link href="/" className="flex mt-4 items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-2 object-cover">
            <Swords className={cn("ml-1 h-full w-7 mr-3 ")} />
          </div>
          <h1
            className={cn(
              "text-xl  font-black active:delay-200 transition-all ",
              monserrat.className
            )}
            style={{
              opacity: hoverState ? "1" : "0",
            }}
          >
            CLADEFIRE
          </h1>
        </Link>
        <div className="space-y-6 h-full text-white">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-accent rounded-lg ",
                pathname === route.href
                  ? "text-white bg-accent"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-between flex-1 ">
                <route.icon className={cn("h-8 w-6 mr-3 ml-2", route.color)} />

                <h1
                  className="active:delay-200 transition-all whitespace-nowrap h-full pt-2"
                  style={{
                    // opacity: hoverState ? "1" : "0",
                    display: hoverState ? "block" : "none",
                  }}
                >
                  {route.label}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
