import { MOCK_SESSIONS, MOCK_MODULOS } from "@/domain/mocks/data";
import { StudyPlanner } from "@/components/planner/StudyPlanner";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlannerPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        <Calendar className="h-8 w-8 text-primary" />
                        Planner Semanal
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Acompanhe seu cronograma de estudos gerado pelos Agentes.
                    </p>
                </div>
                <Button>Gerar Novo Plano</Button>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
                <StudyPlanner sessions={MOCK_SESSIONS} modulos={MOCK_MODULOS} />
            </div>
        </div>
    );
}
