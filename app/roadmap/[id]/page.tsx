import { MOCK_ROADMAPS, MOCK_TRILHAS, MOCK_MODULOS, MOCK_PROGRESS } from "@/domain/mocks/data";
import { ModuleAccordion } from "@/components/roadmap/ModuleAccordion";
import { ProgressBar } from "@/components/analytics/ProgressBar";
import { Accordion } from "@/components/ui/accordion";
import { Map, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function RoadmapPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const roadmap = MOCK_ROADMAPS.find(r => r.id === id) || MOCK_ROADMAPS[0];
    const trilhas = MOCK_TRILHAS.filter(t => t.roadmapId === roadmap.id).sort((a, b) => a.order - b.order);

    // Overall progress calc specific for this roadmap (simplified)
    const progressPercentage = roadmap.id === 'r1' ? 45 : 0;

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <Button variant="ghost" asChild className="mb-4 -ml-4 text-muted-foreground">
                <Link href="/dashboard">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Voltar ao Dashboard
                </Link>
            </Button>

            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-3 rounded-lg">
                        <Map className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{roadmap.title}</h1>
                        <p className="text-muted-foreground text-lg">{roadmap.description}</p>
                    </div>
                </div>

                <div className="pt-6">
                    <div className="flex justify-between text-sm mb-2 text-muted-foreground font-medium">
                        <span>Progresso Geral do Roadmap</span>
                        <span>{progressPercentage}%</span>
                    </div>
                    <ProgressBar value={progressPercentage} colorClass="bg-primary" className="h-3" />
                </div>
            </div>

            <div className="space-y-8 mt-10">
                {trilhas.map((trilha) => {
                    const modulos = MOCK_MODULOS.filter(m => m.trilhaId === trilha.id).sort((a, b) => a.order - b.order);
                    if (modulos.length === 0) return null;

                    return (
                        <div key={trilha.id} className="space-y-4">
                            <h2 className="text-2xl font-semibold border-b pb-2 flex items-center gap-2">
                                Trilha {trilha.order}: <span className="text-primary">{trilha.name}</span>
                            </h2>

                            <Accordion type="single" collapsible className="w-full">
                                {modulos.map((modulo) => {
                                    const progress = MOCK_PROGRESS.find(p => p.moduloId === modulo.id);
                                    // Locked basic simulation: if there's no progress record, it's locked, or based on order
                                    const isLocked = !progress && modulo.order > 1;

                                    return (
                                        <ModuleAccordion
                                            key={modulo.id}
                                            modulo={modulo}
                                            progress={progress}
                                            isLocked={isLocked}
                                        />
                                    );
                                })}
                            </Accordion>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
