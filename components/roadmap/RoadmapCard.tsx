import { Roadmap } from "@/domain/mocks/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProgressBar } from "../analytics/ProgressBar"; // We will create this

interface RoadmapCardProps {
    roadmap: Roadmap;
    progressPercentage?: number;
}

export function RoadmapCard({ roadmap, progressPercentage = 0 }: RoadmapCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {roadmap.level}
                    </Badge>
                    {roadmap.isTemplate && <Badge variant="outline">Template Oficial</Badge>}
                </div>
                <CardTitle className="flex items-center gap-2 mt-4 text-xl">
                    <Map className="h-5 w-5 text-primary" />
                    {roadmap.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                    {roadmap.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="mt-auto pb-4">
                {progressPercentage > 0 && (
                    <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2 text-muted-foreground">
                            <span>Progresso Atual</span>
                            <span className="font-medium text-foreground">{progressPercentage}%</span>
                        </div>
                        <ProgressBar value={progressPercentage} colorClass="bg-primary" />
                    </div>
                )}
            </CardContent>

            <CardFooter className="pt-0">
                <Button asChild className="w-full gap-2">
                    <Link href={`/roadmap/${roadmap.id}`}>
                        Acessar Trilha <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
