import { MOCK_ROADMAPS, MOCK_PROGRESS, CURRENT_USER } from "@/domain/mocks/data";
import { AnalyticsCard } from "@/components/analytics/AnalyticsCard";
import { RoadmapCard } from "@/components/roadmap/RoadmapCard";
import { BookOpen, Target, Clock, Trophy } from "lucide-react";

export default function DashboardPage() {
    // Simple overall progress calculation mock
    const completedModules = MOCK_PROGRESS.filter(p => p.completed).length;
    const totalModules = MOCK_PROGRESS.length;
    const overallProgress = Math.round((completedModules / totalModules) * 100) || 0;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Bem-vindo, {CURRENT_USER.name}!</h1>
                <p className="text-muted-foreground mt-2 text-lg">
                    Seu objetivo principal é o <span className="text-primary font-medium">{CURRENT_USER.goal}</span>. Continue estudando!
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <AnalyticsCard
                    title="Progresso Total"
                    value={`${overallProgress}%`}
                    icon={Target}
                    trend={{ value: 5, isUpward: true }}
                    description="vs. última semana"
                />
                <AnalyticsCard
                    title="Módulos Concluídos"
                    value={`${completedModules}/${totalModules}`}
                    icon={BookOpen}
                />
                <AnalyticsCard
                    title="Horas Estudadas"
                    value="12h"
                    icon={Clock}
                    description="Nesta semana"
                />
                <AnalyticsCard
                    title="Dias Consecutivos"
                    value="4"
                    icon={Trophy}
                    description="Ofensiva atual"
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Meus Roadmaps</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MOCK_ROADMAPS.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} progressPercentage={roadmap.id === 'r1' ? 45 : 0} />
                    ))}
                </div>
            </div>
        </div>
    );
}
