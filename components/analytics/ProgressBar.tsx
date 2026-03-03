import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    value: number;
    colorClass?: string;
    className?: string;
}

export function ProgressBar({ value, colorClass = "bg-primary", className }: ProgressBarProps) {
    return (
        <div className={cn("w-full", className)}>
            {/* We use a custom color for the indicator by overriding it via Tailwind class if needed, 
          though standard shadcn <Progress /> limits this without custom css. 
          For now, we'll apply it to the wrapper or use standard primary. */}
            <Progress value={value} className="h-2 w-full" />
        </div>
    );
}
