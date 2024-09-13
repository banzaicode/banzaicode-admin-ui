import { LucideIcon } from "lucide-react";

export type CardSummaryProps = {
    icon: LucideIcon
    title: string
    total: string
    tooltipText: string
    average?: number
}