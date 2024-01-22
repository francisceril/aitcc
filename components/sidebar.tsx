import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  CalendarCheck2,
  KeyRound,
  LayoutDashboard,
  MonitorSmartphone,
  Ticket,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const links = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Devices", path: "/dashboard/devices", icon: MonitorSmartphone },
  { label: "Accounts", path: "/dashboard/accounts", icon: KeyRound },
  { label: "Tickets", path: "/dashboard/tickets", icon: Ticket },
  {
    label: "Subscriptions",
    path: "/dashboard/subscriptions",
    icon: CalendarCheck2,
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "bg-background h-full w-14 border-r border-dashed px-4",
        className,
      )}
    >
      <div className="flex h-full flex-col items-center py-4">
        <span className="flex place-items-end text-3xl">🔥</span>
        <Separator className="my-8" />
        <nav className="mt-2 flex flex-1 flex-col items-center gap-4">
          {links.map((link, idx) => (
            <Tooltip key={idx} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  key={link.label}
                  href={link.path}
                  className="hover:bg-accent/30 rounded-lg p-2"
                >
                  <link.icon className="size-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-background text-foreground ml-4 border border-dashed"
              >
                {link.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <span>😁</span>
      </div>
    </aside>
  );
}
