import CustomIcon from "@/components/CustomIcon";
import { Building, LucideIcon, RefreshCw } from "lucide-react";
import { ReactNode } from "react";

interface CustomWidgetProps {
  content: ReactNode;
  title?: string;
  icon?: LucideIcon;
  onRefresh?: () => void;
}

export default function CustomWidget({ content, title = "Last News Market", icon = Building, onRefresh }: CustomWidgetProps) {
    return (
        <div className={`shadow-md bg-background-level-2 dark:bg-card text-card-foreground rounded-lg p-5 border border-border hover:shadow-lg transition-shadow relative`}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-x-3 items-center">
                    <CustomIcon icon={icon} className="text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                </div>
                {onRefresh && (
                    <button onClick={onRefresh} className="text-primary hover:text-primary/80 transition-colors">
                        <RefreshCw size={20} />
                    </button>
                )}
            </div>
            <div className="text-muted-foreground prose dark:prose-invert">
                {content}
            </div>
        </div>
    )
}