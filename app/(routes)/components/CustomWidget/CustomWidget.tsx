import CustomIcon from "@/components/CustomIcon";
import { Building, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CustomWidgetProps {
  content: ReactNode;
  title?: string;
  icon?: LucideIcon;
}

export default function CustomWidget({ content, title = "Last News Market", icon = Building }: CustomWidgetProps) {
    return (
        <div className={`shadow-md bg-background-level-2 dark:bg-card text-card-foreground rounded-lg p-5 border border-border hover:shadow-lg transition-shadow`}>
            <div className="flex gap-x-3 items-center mb-4">
                <CustomIcon icon={icon} className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            </div>
            <div className="text-muted-foreground prose dark:prose-invert">
                {content}
            </div>
        </div>
    )
}