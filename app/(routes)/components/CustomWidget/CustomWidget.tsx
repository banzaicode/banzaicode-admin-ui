import CustomIcon from "@/components/CustomIcon";
import { Building } from "lucide-react";
import { ReactNode } from "react";

interface CustomWidgetProps {
  content: ReactNode;
  title?: string;
  icon?: React.ElementType;
}

export default function CustomWidget({ content, title = "Last News Market", icon = Building }: CustomWidgetProps) {
    return (
        <div className="shadow-sm bg-background rounded-lg p-5">
            <div className="flex gap-x-2 items-center mb-4">
                <CustomIcon icon={icon} />
                <p className="text-xl">{title}</p>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}