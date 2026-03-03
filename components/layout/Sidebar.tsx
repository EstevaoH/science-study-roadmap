"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Map, Calendar, Settings } from "lucide-react";

const NAV_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Roadmap", href: "/roadmap/r1", icon: Map }, // Default route for now
    { name: "Planner Semanal", href: "/planner", icon: Calendar },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 shrink-0 items-center border-b px-6">
                <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-primary">
                    <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md font-mono text-xs shadow-sm">
                        Sr
                    </div>
                    <span className="text-lg">Science Roadmap</span>
                </Link>
            </div>

            <div className="flex-1 overflow-auto py-4">
                <nav className="grid gap-1 px-3">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                                    isActive
                                        ? "bg-primary/10 text-primary hover:bg-primary/15"
                                        : "text-muted-foreground"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="border-t p-4">
                <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                    <Settings className="h-4 w-4" />
                    Settings
                </button>
            </div>
        </div>
    );
}
