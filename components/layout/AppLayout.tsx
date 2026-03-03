import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface AppLayoutProps {
    children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-auto bg-muted/20">
                    <div className="container mx-auto p-6 lg:p-8 max-w-7xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
