import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

interface InterdisciplinaryTagProps {
    subject: string;
    topic: string;
}

export function InterdisciplinaryTag({ subject, topic }: InterdisciplinaryTagProps) {
    return (
        <Badge variant="outline" className="inline-flex items-center gap-1.5 border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800 dark:border-purple-900 dark:bg-purple-900/20 dark:text-purple-300">
            <Network className="h-3 w-3" />
            <span className="font-medium">{subject}</span>
            <span className="text-purple-700/50 dark:text-purple-300/50">•</span>
            <span>{topic}</span>
        </Badge>
    );
}
