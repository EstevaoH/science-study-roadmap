import { StudySession, Modulo } from "@/domain/mocks/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, CheckCircle2 } from "lucide-react";

interface StudySessionCardProps {
    session: StudySession;
    modulo: Modulo;
}

export function StudySessionCard({ session, modulo }: StudySessionCardProps) {
    const date = new Date(session.scheduledAt);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const isPast = date < new Date() && !session.completed;

    return (
        <Card className={`border-l-4 ${session.completed ? 'border-l-emerald-500' : isPast ? 'border-l-rose-500' : 'border-l-primary'}`}>
            <CardHeader className="py-3 px-4 flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    {session.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                        <CalendarClock className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{formattedTime} ({session.duration}h)</span>
                </CardTitle>
                <Badge variant={session.completed ? "default" : isPast ? "destructive" : "secondary"}>
                    {session.completed ? "Concluída" : isPast ? "Atrasada" : "Agendada"}
                </Badge>
            </CardHeader>
            <CardContent className="px-4 pb-3">
                <p className="font-medium text-foreground">{modulo.title}</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{modulo.description}</p>
            </CardContent>
        </Card>
    );
}
