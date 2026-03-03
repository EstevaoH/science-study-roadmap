import { Modulo, Progress } from "@/domain/mocks/data";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { InterdisciplinaryTag } from "./InterdisciplinaryTag";

interface ModuleAccordionProps {
    modulo: Modulo;
    progress?: Progress;
    isLocked?: boolean;
}

export function ModuleAccordion({ modulo, progress, isLocked = false }: ModuleAccordionProps) {
    const isCompleted = progress?.completed ?? false;

    return (
        <AccordionItem value={modulo.id} className="border bg-card rounded-lg px-4 mb-3 overflow-hidden" disabled={isLocked}>
            <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-4 w-full text-left">
                    <div className="shrink-0 flex items-center justify-center">
                        {isCompleted ? (
                            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                        ) : isLocked ? (
                            <Circle className="h-6 w-6 text-muted-foreground/30" />
                        ) : (
                            <Circle className="h-6 w-6 text-primary" />
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1 gap-4">
                            <h4 className={`font-semibold text-base truncate ${isLocked ? 'text-muted-foreground' : 'text-foreground'}`}>
                                {modulo.order}. {modulo.title}
                            </h4>
                            <Badge variant={isCompleted ? "default" : "secondary"} className={isCompleted ? "bg-emerald-500 hover:bg-emerald-600" : ""}>
                                {isCompleted ? "Concluído" : isLocked ? "Pendente" : "Em Progresso"}
                            </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {modulo.estimatedHours}h estimated
                            </span>
                            <span className="opacity-50">•</span>
                            <span>Dificuldade: {modulo.difficulty}</span>
                        </div>
                    </div>
                </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground pb-4 pt-1">
                <div className="pl-10">
                    <p className="mb-4 text-sm leading-relaxed">{modulo.description}</p>

                    {/* Example of showing dependencies or interdisciplinary tags */}
                    {modulo.dependsOnIds && modulo.dependsOnIds.length > 0 && (
                        <div className="flex gap-2 items-center text-xs mt-3">
                            <span className="font-medium">Depende de: </span>
                            {modulo.dependsOnIds.map(id => (
                                <Badge key={id} variant="outline" className="text-xs bg-muted/50">Módulo {id}</Badge>
                            ))}
                        </div>
                    )}

                    <div className="mt-4">
                        <InterdisciplinaryTag subject="Biologia" topic="Botânica" />
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
