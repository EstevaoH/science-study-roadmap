"use client";

import { CURRENT_USER } from "@/domain/mocks/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b bg-background/95 px-6 backdrop-blur">
            <div className="flex items-center gap-4">
                {/* Placeholder for breadcrumb or title */}
                <h1 className="text-lg font-semibold capitalize">Platform</h1>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-muted-foreground hover:text-foreground">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notificações</span>
                </button>

                <div className="flex items-center gap-3 border-l px-4">
                    <div className="text-right flex flex-col items-end">
                        <span className="text-sm font-medium leading-none">{CURRENT_USER.name}</span>
                        <span className="text-xs text-muted-foreground">{CURRENT_USER.level}</span>
                    </div>
                    <Avatar className="h-9 w-9">
                        {/* If we had an image it would go here */}
                        <AvatarFallback className="bg-primary/20 text-primary font-medium">
                            {CURRENT_USER.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
