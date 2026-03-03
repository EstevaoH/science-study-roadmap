import { StudySession, Modulo } from "@/domain/mocks/data";
import { StudySessionCard } from "./StudySessionCard";

interface StudyPlannerProps {
    sessions: StudySession[];
    modulos: Modulo[];
}

export function StudyPlanner({ sessions, modulos }: StudyPlannerProps) {
    // Group sessions by date (simplified for the planner view)
    const groupedSessions = sessions.reduce((acc, session) => {
        const dateStr = new Date(session.scheduledAt).toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
        if (!acc[dateStr]) acc[dateStr] = [];
        acc[dateStr].push(session);
        return acc;
    }, {} as Record<string, StudySession[]>);

    return (
        <div className="space-y-8">
            {Object.entries(groupedSessions).map(([date, daySessions]) => (
                <div key={date} className="space-y-4">
                    <h3 className="font-semibold text-lg capitalize flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {date}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {daySessions.map(session => {
                            const modulo = modulos.find(m => m.id === session.moduloId);
                            if (!modulo) return null;
                            return <StudySessionCard key={session.id} session={session} modulo={modulo} />;
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
